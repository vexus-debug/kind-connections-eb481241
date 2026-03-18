import { useState } from "react";
import { Plus, Trash2, Loader2 } from "lucide-react";
import { Section, Field, ImageField, SaveButton, PageLoading } from "@/components/admin/EditorComponents";
import { useSiteContent } from "@/hooks/useSiteContent";
import { Link } from "react-router-dom";

const defaultStats = [
  { value: "7+", label: "Service Categories" },
  { value: "1000+", label: "Happy Patients" },
  { value: "NHIS", label: "Accepted" },
  { value: "6 Days", label: "Open Weekly" },
];

const defaultFaqs = [
  { q: "Do you accept NHIS insurance?", a: "Yes! We accept NHIS for eligible treatments including routine checkups, fillings, and extractions." },
  { q: "Is the first consultation free?", a: "We offer affordable initial consultations. Contact us for current pricing." },
  { q: "How do I book an appointment?", a: "You can book via WhatsApp, phone call, or walk in during our working hours." },
  { q: "Do you handle dental emergencies?", a: "Yes, we accommodate dental emergencies during working hours." },
  { q: "Is teeth whitening safe?", a: "Absolutely. We use clinically proven, dentist-supervised whitening treatments." },
];

const defaultSteps = [
  { num: "01", title: "Book Online", desc: "WhatsApp us or call to schedule a convenient time." },
  { num: "02", title: "Consultation", desc: "Meet our dentist for a thorough check-up and treatment plan." },
  { num: "03", title: "Treatment", desc: "Receive gentle, expert care using modern equipment." },
  { num: "04", title: "Smile Bright", desc: "Walk out with a healthier, more confident smile." },
];

const EditHomePage = () => {
  const { content: c, update, save, loading } = useSiteContent("home");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => { setSaving(true); try { await save(); } catch {} setSaving(false); };

  if (loading) return <PageLoading />;

  const stats = (c.stats || defaultStats) as any[];
  const faqs = (c.faqs || defaultFaqs) as any[];
  const steps = (c.steps || defaultSteps) as any[];

  const updateArr = (key: string, arr: any[], i: number, field: string, val: string) => {
    const n = [...arr]; n[i] = { ...n[i], [field]: val }; update(key, n);
  };

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-foreground">Home Page</h2>
          <p className="font-body text-sm text-muted-foreground">Edit all sections of the homepage</p>
        </div>
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <Section title="Hero Section" description="Main banner with headline and CTA" defaultOpen>
        <Field label="Badge Text" value={c.hero_badge || "Now Accepting NHIS Patients"} onChange={v => update("hero_badge", v)} />
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Heading Line 1" value={c.hero_heading1 || "Welcome to"} onChange={v => update("hero_heading1", v)} />
          <Field label="Heading Highlight" value={c.hero_highlight || "Rubi Smile"} onChange={v => update("hero_highlight", v)} />
        </div>
        <Field label="Subtitle" value={c.hero_subtitle || "Dental Clinic"} onChange={v => update("hero_subtitle", v)} />
        <Field label="Description" value={c.hero_description || "Your partner for a complete, confident smile."} onChange={v => update("hero_description", v)} multiline />
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Primary CTA Text" value={c.hero_cta1_text || "Our Services"} onChange={v => update("hero_cta1_text", v)} />
          <Field label="Primary CTA Link" value={c.hero_cta1_link || "/services"} onChange={v => update("hero_cta1_link", v)} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Secondary CTA Text" value={c.hero_cta2_text || "Book a Visit"} onChange={v => update("hero_cta2_text", v)} />
          <Field label="WhatsApp Link" value={c.hero_cta2_link || "https://wa.me/2349038535214"} onChange={v => update("hero_cta2_link", v)} />
        </div>
      </Section>

      <Section title="Stats Section" description="Key numbers displayed below the hero">
        {stats.map((s: any, i: number) => (
          <div key={i} className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
            <Field label="Value" value={s.value} onChange={v => updateArr("stats", stats, i, "value", v)} />
            <Field label="Label" value={s.label} onChange={v => updateArr("stats", stats, i, "label", v)} />
          </div>
        ))}
        <button onClick={() => update("stats", [...stats, { value: "", label: "" }])} className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent">
          <Plus className="h-3.5 w-3.5" /> Add Stat
        </button>
      </Section>

      <Section title="About Us Section" description="Brief clinic introduction">
        <Field label="Section Label" value={c.about_label || "About Us"} onChange={v => update("about_label", v)} />
        <Field label="Heading" value={c.about_heading || "Achieve a Confident Smile With Us"} onChange={v => update("about_heading", v)} />
        <Field label="Paragraph 1" value={c.about_p1 || ""} onChange={v => update("about_p1", v)} multiline />
        <Field label="Paragraph 2" value={c.about_p2 || ""} onChange={v => update("about_p2", v)} multiline />
      </Section>

      <Section title="Why Choose Us" description="Feature cards">
        <Field label="Heading" value={c.why_heading || "Gentle dentistry, brilliant results"} onChange={v => update("why_heading", v)} />
        <Field label="Description" value={c.why_desc || ""} onChange={v => update("why_desc", v)} multiline />
      </Section>

      <Section title="Services Section" description="Service cards grid">
        <Field label="Heading" value={c.services_heading || "Comprehensive dental care"} onChange={v => update("services_heading", v)} />
        <Field label="Description" value={c.services_desc || ""} onChange={v => update("services_desc", v)} multiline />
      </Section>

      <Section title="How It Works" description="Step-by-step process">
        {steps.map((s: any, i: number) => (
          <div key={i} className="grid grid-cols-[50px_1fr] gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
            <Field label="Step" value={s.num} onChange={v => updateArr("steps", steps, i, "num", v)} />
            <div className="space-y-3">
              <Field label="Title" value={s.title} onChange={v => updateArr("steps", steps, i, "title", v)} />
              <Field label="Description" value={s.desc} onChange={v => updateArr("steps", steps, i, "desc", v)} />
            </div>
          </div>
        ))}
      </Section>

      <Section title="Gallery Preview" description="Image grid shown on homepage">
        <p className="font-body text-xs text-muted-foreground">Manage gallery images on the <Link to="/admin/gallery" className="text-accent font-semibold">Gallery Page</Link>.</p>
        <Field label="Section Heading" value={c.gallery_heading || "See Our Work in Action"} onChange={v => update("gallery_heading", v)} />
      </Section>

      <Section title="Testimonials" description="Patient reviews — managed from Reviews page">
        <p className="font-body text-xs text-muted-foreground">Testimonials are now managed from the <Link to="/admin/reviews" className="text-accent font-semibold">Reviews Page</Link>. Approved reviews automatically appear on the homepage.</p>
      </Section>

      <Section title="FAQ Section" description="Frequently asked questions">
        {faqs.map((f: any, i: number) => (
          <div key={i} className="p-3 rounded-xl bg-muted/30 border border-border/30 space-y-3">
            <Field label="Question" value={f.q} onChange={v => updateArr("faqs", faqs, i, "q", v)} />
            <Field label="Answer" value={f.a} onChange={v => updateArr("faqs", faqs, i, "a", v)} multiline />
            <button onClick={() => update("faqs", faqs.filter((_: any, j: number) => j !== i))} className="text-xs text-destructive font-display font-semibold flex items-center gap-1">
              <Trash2 className="h-3 w-3" /> Remove
            </button>
          </div>
        ))}
        <button onClick={() => update("faqs", [...faqs, { q: "", a: "" }])} className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent">
          <Plus className="h-3.5 w-3.5" /> Add FAQ
        </button>
      </Section>

      <Section title="Location Section" description="Address, hours, and contact">
        <Field label="Address" value={c.location_address || "No 6 November Street, near Chief Palace Layout, Karu, Abuja"} onChange={v => update("location_address", v)} />
        <Field label="Working Hours" value={c.location_hours || "Mon – Fri: 9:00 AM – 5:30 PM"} onChange={v => update("location_hours", v)} />
        <Field label="Saturday Hours" value={c.location_sat || "Sat: 9:00 AM – 3:30 PM | Sun: Closed"} onChange={v => update("location_sat", v)} />
        <Field label="Phone" value={c.location_phone || "+2349024403837"} onChange={v => update("location_phone", v)} />
      </Section>

      <Section title="CTA Section" description="Final call-to-action">
        <Field label="Heading" value={c.cta_heading || "Ready for a brighter smile?"} onChange={v => update("cta_heading", v)} />
        <Field label="Description" value={c.cta_desc || ""} onChange={v => update("cta_desc", v)} multiline />
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="WhatsApp CTA Text" value={c.cta_wa_text || "WhatsApp Us"} onChange={v => update("cta_wa_text", v)} />
          <Field label="WhatsApp Link" value={c.cta_wa_link || "https://wa.me/2349038535214"} onChange={v => update("cta_wa_link", v)} />
        </div>
      </Section>

      <div className="pt-4"><SaveButton onClick={handleSave} saving={saving} /></div>
    </div>
  );
};

export default EditHomePage;

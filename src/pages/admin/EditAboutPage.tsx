import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Section, Field, SaveButton, PageLoading } from "@/components/admin/EditorComponents";
import { useSiteContent } from "@/hooks/useSiteContent";

const defaultValues = [
  { title: "Gentle Care", desc: "We prioritize your comfort at every step." },
  { title: "Family Focus", desc: "Every member of your family is welcome." },
  { title: "Trust & Transparency", desc: "Honest advice and clear treatment plans." },
  { title: "Excellence", desc: "Modern techniques and highest standards." },
  { title: "Patient-First", desc: "Your needs drive every decision." },
  { title: "Education", desc: "We empower you with knowledge about oral health." },
];

const defaultMilestones = [
  { year: "Founded", title: "Rubi Smile Opens", desc: "Established in Karu, Abuja." },
  { year: "Growing", title: "Expanding Services", desc: "Added orthodontics and cosmetic dentistry." },
  { year: "Today", title: "1000+ Happy Patients", desc: "A trusted name in dental care." },
  { year: "Future", title: "Always Improving", desc: "Continuously investing in technology." },
];

const EditAboutPage = () => {
  const { content: c, update, save, loading } = useSiteContent("about");
  const [saving, setSaving] = useState(false);
  const handleSave = async () => { setSaving(true); try { await save(); } catch {} setSaving(false); };

  if (loading) return <PageLoading />;

  const values = (c.values || defaultValues) as any[];
  const milestones = (c.milestones || defaultMilestones) as any[];

  const updateArr = (key: string, arr: any[], i: number, field: string, val: string) => {
    const n = [...arr]; n[i] = { ...n[i], [field]: val }; update(key, n);
  };

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-foreground">About Page</h2>
          <p className="font-body text-sm text-muted-foreground">Edit about page content</p>
        </div>
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <Section title="Hero Section" description="Top banner" defaultOpen>
        <Field label="Badge Text" value={c.hero_badge || "About Rubi Smile"} onChange={v => update("hero_badge", v)} />
        <Field label="Heading" value={c.hero_heading || "Dentistry with Heart"} onChange={v => update("hero_heading", v)} />
        <Field label="Description" value={c.hero_desc || ""} onChange={v => update("hero_desc", v)} multiline />
      </Section>

      <Section title="Our Story" description="Clinic history">
        <Field label="Heading" value={c.story_heading || "A family practice with a gentle touch"} onChange={v => update("story_heading", v)} />
        <Field label="Paragraph 1" value={c.story_p1 || ""} onChange={v => update("story_p1", v)} multiline />
        <Field label="Paragraph 2" value={c.story_p2 || ""} onChange={v => update("story_p2", v)} multiline />
        <Field label="Paragraph 3" value={c.story_p3 || ""} onChange={v => update("story_p3", v)} multiline />
      </Section>

      <Section title="Mission & Vision" description="Two-column statements">
        <Field label="Mission Text" value={c.mission || ""} onChange={v => update("mission", v)} multiline />
        <Field label="Vision Text" value={c.vision || ""} onChange={v => update("vision", v)} multiline />
      </Section>

      <Section title="Core Values" description="Value cards">
        {values.map((v: any, i: number) => (
          <div key={i} className="grid sm:grid-cols-2 gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
            <Field label="Title" value={v.title} onChange={val => updateArr("values", values, i, "title", val)} />
            <Field label="Description" value={v.desc} onChange={val => updateArr("values", values, i, "desc", val)} />
          </div>
        ))}
        <button onClick={() => update("values", [...values, { title: "", desc: "" }])} className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent">
          <Plus className="h-3.5 w-3.5" /> Add Value
        </button>
      </Section>

      <Section title="Milestones" description="Timeline of growth">
        {milestones.map((m: any, i: number) => (
          <div key={i} className="p-3 rounded-xl bg-muted/30 border border-border/30 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Period" value={m.year} onChange={v => updateArr("milestones", milestones, i, "year", v)} />
              <Field label="Title" value={m.title} onChange={v => updateArr("milestones", milestones, i, "title", v)} />
            </div>
            <Field label="Description" value={m.desc || ""} onChange={v => updateArr("milestones", milestones, i, "desc", v)} multiline />
            <button onClick={() => update("milestones", milestones.filter((_: any, j: number) => j !== i))} className="text-xs text-destructive font-display font-semibold flex items-center gap-1">
              <Trash2 className="h-3 w-3" /> Remove
            </button>
          </div>
        ))}
        <button onClick={() => update("milestones", [...milestones, { year: "", title: "", desc: "" }])} className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent">
          <Plus className="h-3.5 w-3.5" /> Add Milestone
        </button>
      </Section>

      <Section title="Location & CTA" description="Visit info">
        <Field label="Address" value={c.address || "No 6 November Street, near Chief Palace Layout, Karu, Abuja"} onChange={v => update("address", v)} />
        <Field label="Hours" value={c.hours || "Mon – Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 3:30 PM"} onChange={v => update("hours", v)} />
        <Field label="CTA Heading" value={c.cta_heading || "Ready to Experience the Rubi Smile Difference?"} onChange={v => update("cta_heading", v)} />
      </Section>

      <div className="pt-4"><SaveButton onClick={handleSave} saving={saving} /></div>
    </div>
  );
};

export default EditAboutPage;

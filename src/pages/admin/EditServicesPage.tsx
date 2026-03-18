import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Section, Field, ImageField, SaveButton, PageLoading } from "@/components/admin/EditorComponents";
import { useSiteContent } from "@/hooks/useSiteContent";

const defaultCategories = [
  { title: "Preventive Dentistry", subtitle: "Stay Ahead of Problems", desc: "", items: ["Scaling & polishing", "Routine checkups", "Fluoride treatments", "Dental sealants", "Oral hygiene education"] },
  { title: "General Dentistry", subtitle: "Everyday Dental Care", desc: "", items: ["Tooth fillings", "Basic extractions", "Gum treatment", "Tooth sensitivity"] },
  { title: "Restorative Dentistry", subtitle: "Rebuild & Restore", desc: "", items: ["Root canal therapy", "Dental crowns", "Dental bridges", "Dentures", "Dental implants"] },
  { title: "Cosmetic Dentistry", subtitle: "Smile Makeover", desc: "", items: ["Teeth whitening", "Dental veneers", "Smile design", "Gap closure"] },
  { title: "Orthodontics", subtitle: "Straighten & Align", desc: "", items: ["Traditional braces", "Clear aligners", "Bite correction"] },
  { title: "Oral Surgery & Emergency", subtitle: "Expert Surgical Solutions", desc: "", items: ["Surgical extraction", "Emergency pain relief", "Abscess drainage"] },
  { title: "Pediatric Dentistry", subtitle: "Kid-Friendly Care", desc: "", items: ["Child-friendly care", "Fluoride for children", "Space maintainers"] },
];

const EditServicesPage = () => {
  const { content: c, update, save, loading } = useSiteContent("services");
  const [saving, setSaving] = useState(false);
  const handleSave = async () => { setSaving(true); try { await save(); } catch {} setSaving(false); };

  if (loading) return <PageLoading />;

  const categories = (c.categories || defaultCategories) as any[];

  const updateCat = (i: number, field: string, val: any) => {
    const n = [...categories]; n[i] = { ...n[i], [field]: val }; update("categories", n);
  };

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-foreground">Services Page</h2>
          <p className="font-body text-sm text-muted-foreground">Edit services page content</p>
        </div>
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <Section title="Hero Section" description="Banner with heading and CTA" defaultOpen>
        <Field label="Badge Text" value={c.hero_badge || "Comprehensive Dental Care"} onChange={v => update("hero_badge", v)} />
        <Field label="Heading" value={c.hero_heading || "Expert Care for Every Smile"} onChange={v => update("hero_heading", v)} />
        <Field label="Description" value={c.hero_desc || ""} onChange={v => update("hero_desc", v)} multiline />
        <Field label="WhatsApp Number" value={c.whatsapp || "2349038535214"} onChange={v => update("whatsapp", v)} />
        <Field label="Phone Number" value={c.phone || "+2349024403837"} onChange={v => update("phone", v)} />
      </Section>

      <Section title="Service Categories" description={`${categories.length} categories with treatments`}>
        {categories.map((cat: any, i: number) => (
          <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs font-bold text-accent">Category {i + 1}</span>
              <button onClick={() => update("categories", categories.filter((_: any, j: number) => j !== i))} className="text-muted-foreground hover:text-destructive p-1">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Title" value={cat.title} onChange={v => updateCat(i, "title", v)} />
              <Field label="Subtitle" value={cat.subtitle} onChange={v => updateCat(i, "subtitle", v)} />
            </div>
            <Field label="Description" value={cat.desc || ""} onChange={v => updateCat(i, "desc", v)} multiline />
            <div>
              <label className="block font-display text-xs font-semibold text-foreground mb-1.5">Treatments</label>
              {(cat.items || []).map((item: string, j: number) => (
                <div key={j} className="flex items-center gap-2 mb-1.5">
                  <input value={item} onChange={e => { const items = [...cat.items]; items[j] = e.target.value; updateCat(i, "items", items); }} className="flex-1 rounded-lg border border-border bg-background px-3 py-1.5 font-body text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                  <button onClick={() => updateCat(i, "items", cat.items.filter((_: any, k: number) => k !== j))} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-3 w-3" /></button>
                </div>
              ))}
              <button onClick={() => updateCat(i, "items", [...(cat.items || []), ""])} className="flex items-center gap-1 font-display text-[10px] font-semibold text-accent mt-1">
                <Plus className="h-3 w-3" /> Add Treatment
              </button>
            </div>
          </div>
        ))}
        <button onClick={() => update("categories", [...categories, { title: "", subtitle: "", desc: "", items: [] }])} className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent">
          <Plus className="h-3.5 w-3.5" /> Add Category
        </button>
      </Section>

      <Section title="Why Choose Us" description="Trust points">
        <Field label="Section Heading" value={c.why_heading || "Why Patients Trust Us"} onChange={v => update("why_heading", v)} />
      </Section>

      <Section title="Booking Settings" description="WhatsApp booking form">
        <Field label="Default Message" value={c.booking_msg || "Hello Rubi Smile! I'd like to book an appointment."} onChange={v => update("booking_msg", v)} multiline />
      </Section>

      <div className="pt-4"><SaveButton onClick={handleSave} saving={saving} /></div>
    </div>
  );
};

export default EditServicesPage;

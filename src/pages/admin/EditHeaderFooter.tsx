import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Section, Field, ImageField, SaveButton, PageLoading } from "@/components/admin/EditorComponents";
import { useSiteContent } from "@/hooks/useSiteContent";

const defaultNavLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const EditHeaderFooter = () => {
  const { content: c, update, save, loading } = useSiteContent("header_footer");
  const [saving, setSaving] = useState(false);
  const handleSave = async () => { setSaving(true); try { await save(); } catch {} setSaving(false); };

  if (loading) return <PageLoading />;

  const navLinks = (c.nav_links || defaultNavLinks) as any[];

  const updateNav = (i: number, field: string, val: string) => {
    const n = [...navLinks]; n[i] = { ...n[i], [field]: val }; update("nav_links", n);
  };

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-foreground">Header & Footer</h2>
          <p className="font-body text-sm text-muted-foreground">Edit navigation and footer</p>
        </div>
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <Section title="Header — Logo" description="Logo and clinic name" defaultOpen>
        <Field label="Clinic Name" value={c.clinic_name || "Rubi Smile"} onChange={v => update("clinic_name", v)} />
        <Field label="Subtitle" value={c.clinic_subtitle || "Dental Clinic"} onChange={v => update("clinic_subtitle", v)} />
        <ImageField label="Logo Image" value={c.logo_url} onChange={v => update("logo_url", v)} />
      </Section>

      <Section title="Header — Navigation" description="Menu items">
        {navLinks.map((link: any, i: number) => (
          <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-muted/30 border border-border/30">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Field label="Label" value={link.label} onChange={v => updateNav(i, "label", v)} />
              <Field label="URL" value={link.to} onChange={v => updateNav(i, "to", v)} />
            </div>
            <button onClick={() => update("nav_links", navLinks.filter((_: any, j: number) => j !== i))} className="text-muted-foreground hover:text-destructive p-1">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button onClick={() => update("nav_links", [...navLinks, { label: "", to: "/" }])} className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent">
          <Plus className="h-3.5 w-3.5" /> Add Nav Link
        </button>
      </Section>

      <Section title="Header — CTA" description="Book Now button">
        <Field label="Button Text" value={c.cta_text || "Book Now"} onChange={v => update("cta_text", v)} />
        <Field label="Phone Number" value={c.cta_phone || "+2349024403837"} onChange={v => update("cta_phone", v)} />
      </Section>

      <Section title="Footer — About" description="Footer description">
        <Field label="Description" value={c.footer_desc || ""} onChange={v => update("footer_desc", v)} multiline />
      </Section>

      <Section title="Footer — Contact Info" description="Footer contact details">
        <Field label="Address" value={c.footer_address || "No 6 November Street, near Chief Palace Layout, Karu, Abuja"} onChange={v => update("footer_address", v)} />
        <Field label="WhatsApp" value={c.footer_whatsapp || "0903 853 5214"} onChange={v => update("footer_whatsapp", v)} />
        <Field label="Phone" value={c.footer_phone || "0902 440 3837"} onChange={v => update("footer_phone", v)} />
        <Field label="Email" value={c.footer_email || "rubiismiledentalclinic@gmail.com"} onChange={v => update("footer_email", v)} />
        <Field label="Hours" value={c.footer_hours || "Mon – Fri: 9AM – 5:30PM | Sat: 9AM – 3:30PM"} onChange={v => update("footer_hours", v)} />
      </Section>

      <Section title="Footer — Copyright" description="Bottom text">
        <Field label="Copyright Text" value={c.copyright || "© {year} Rubi Smile Dental Clinic. All rights reserved."} onChange={v => update("copyright", v)} />
      </Section>

      <div className="pt-4"><SaveButton onClick={handleSave} saving={saving} /></div>
    </div>
  );
};

export default EditHeaderFooter;

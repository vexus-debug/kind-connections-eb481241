import { useState } from "react";
import { Section, Field, ImageField, SaveButton, PageLoading } from "@/components/admin/EditorComponents";
import { useSiteContent } from "@/hooks/useSiteContent";

const EditSettings = () => {
  const { content: c, update, save, loading } = useSiteContent("settings");
  const [saving, setSaving] = useState(false);
  const handleSave = async () => { setSaving(true); try { await save(); } catch {} setSaving(false); };

  if (loading) return <PageLoading />;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-foreground">Site Settings</h2>
          <p className="font-body text-sm text-muted-foreground">SEO and global settings</p>
        </div>
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <Section title="SEO & Meta Tags" description="Search engine optimization" defaultOpen>
        <Field label="Site Title" value={c.seo_title || "Rubi Smile Dental Clinic — Quality Dental Care in Karu, Abuja"} onChange={v => update("seo_title", v)} />
        <Field label="Meta Description" value={c.seo_desc || ""} onChange={v => update("seo_desc", v)} multiline />
        <Field label="Meta Keywords" value={c.seo_keywords || ""} onChange={v => update("seo_keywords", v)} />
      </Section>

      <Section title="Open Graph / Social" description="Social media sharing">
        <Field label="OG Title" value={c.og_title || "Rubi Smile Dental Clinic"} onChange={v => update("og_title", v)} />
        <Field label="OG Description" value={c.og_desc || ""} onChange={v => update("og_desc", v)} multiline />
        <ImageField label="OG Image" value={c.og_image} onChange={v => update("og_image", v)} />
      </Section>

      <Section title="WhatsApp Button" description="Floating chat button">
        <Field label="WhatsApp Number" value={c.wa_number || "2349038535214"} onChange={v => update("wa_number", v)} />
        <Field label="Default Message" value={c.wa_message || "Hello Rubi Smile! I'd like to book an appointment."} onChange={v => update("wa_message", v)} multiline />
        <Field label="Button Text" value={c.wa_text || "Chat on WhatsApp"} onChange={v => update("wa_text", v)} />
      </Section>

      <div className="pt-4"><SaveButton onClick={handleSave} saving={saving} /></div>
    </div>
  );
};

export default EditSettings;

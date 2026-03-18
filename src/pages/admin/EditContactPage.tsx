import { useState } from "react";
import { Section, Field, SaveButton, PageLoading } from "@/components/admin/EditorComponents";
import { useSiteContent } from "@/hooks/useSiteContent";

const EditContactPage = () => {
  const { content: c, update, save, loading } = useSiteContent("contact");
  const [saving, setSaving] = useState(false);
  const handleSave = async () => { setSaving(true); try { await save(); } catch {} setSaving(false); };

  if (loading) return <PageLoading />;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-foreground">Contact Page</h2>
          <p className="font-body text-sm text-muted-foreground">Edit contact information</p>
        </div>
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <Section title="Page Header" description="Title and intro" defaultOpen>
        <Field label="Badge Text" value={c.badge || "Get In Touch"} onChange={v => update("badge", v)} />
        <Field label="Page Title" value={c.title || "Contact Us"} onChange={v => update("title", v)} />
        <Field label="Description" value={c.description || "Ready to book an appointment or have a question? We'd love to hear from you."} onChange={v => update("description", v)} multiline />
      </Section>

      <Section title="Contact Information" description="Address, phone, email">
        <Field label="Address" value={c.address || "No 6 November Street, near Chief Palace Layout, Karu, Abuja"} onChange={v => update("address", v)} />
        <Field label="Phone" value={c.phone || "0902 440 3837"} onChange={v => update("phone", v)} />
        <Field label="Email" value={c.email || "rubiismiledentalclinic@gmail.com"} onChange={v => update("email", v)} />
        <Field label="Working Hours" value={c.hours || "Mon – Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 3:30 PM | Sun: Closed"} onChange={v => update("hours", v)} />
        <Field label="WhatsApp Number" value={c.whatsapp || "2349038535214"} onChange={v => update("whatsapp", v)} />
      </Section>

      <Section title="Google Maps" description="Map embed URL">
        <Field label="Map Embed URL" value={c.map_url || ""} onChange={v => update("map_url", v)} multiline />
      </Section>

      <div className="pt-4"><SaveButton onClick={handleSave} saving={saving} /></div>
    </div>
  );
};

export default EditContactPage;

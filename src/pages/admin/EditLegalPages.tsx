import { useState } from "react";
import { Section, Field, SaveButton, PageLoading } from "@/components/admin/EditorComponents";
import { useSiteContent } from "@/hooks/useSiteContent";

const EditLegalPages = () => {
  const { content: c, update, save, loading } = useSiteContent("legal");
  const [saving, setSaving] = useState(false);
  const handleSave = async () => { setSaving(true); try { await save(); } catch {} setSaving(false); };

  if (loading) return <PageLoading />;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-foreground">Legal Pages</h2>
          <p className="font-body text-sm text-muted-foreground">Edit privacy, terms, and disclaimer</p>
        </div>
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <Section title="Privacy Policy" description="Data policies" defaultOpen>
        <Field label="Last Updated" value={c.privacy_updated || "March 2026"} onChange={v => update("privacy_updated", v)} />
        <Field label="Information We Collect" value={c.privacy_collect || ""} onChange={v => update("privacy_collect", v)} multiline rows={4} />
        <Field label="How We Use Info" value={c.privacy_use || ""} onChange={v => update("privacy_use", v)} multiline rows={4} />
        <Field label="Data Protection" value={c.privacy_protect || ""} onChange={v => update("privacy_protect", v)} multiline rows={3} />
        <Field label="Third-Party Sharing" value={c.privacy_sharing || ""} onChange={v => update("privacy_sharing", v)} multiline rows={3} />
        <Field label="Your Rights" value={c.privacy_rights || ""} onChange={v => update("privacy_rights", v)} multiline rows={2} />
        <Field label="Contact Info" value={c.privacy_contact || ""} onChange={v => update("privacy_contact", v)} multiline rows={2} />
      </Section>

      <Section title="Terms & Conditions" description="Service terms">
        <Field label="Last Updated" value={c.terms_updated || "March 2026"} onChange={v => update("terms_updated", v)} />
        <Field label="Services" value={c.terms_services || ""} onChange={v => update("terms_services", v)} multiline rows={3} />
        <Field label="Appointments" value={c.terms_appointments || ""} onChange={v => update("terms_appointments", v)} multiline rows={3} />
        <Field label="Payment" value={c.terms_payment || ""} onChange={v => update("terms_payment", v)} multiline rows={3} />
        <Field label="NHIS Patients" value={c.terms_nhis || ""} onChange={v => update("terms_nhis", v)} multiline rows={2} />
        <Field label="Patient Responsibilities" value={c.terms_responsibilities || ""} onChange={v => update("terms_responsibilities", v)} multiline rows={2} />
      </Section>

      <Section title="Disclaimer" description="Legal disclaimers">
        <Field label="Last Updated" value={c.disclaimer_updated || "March 2026"} onChange={v => update("disclaimer_updated", v)} />
        <Field label="Medical Disclaimer" value={c.disclaimer_medical || ""} onChange={v => update("disclaimer_medical", v)} multiline rows={3} />
        <Field label="Treatment Outcomes" value={c.disclaimer_outcomes || ""} onChange={v => update("disclaimer_outcomes", v)} multiline rows={2} />
        <Field label="Emergency Notice" value={c.disclaimer_emergency || ""} onChange={v => update("disclaimer_emergency", v)} multiline rows={2} />
      </Section>

      <div className="pt-4"><SaveButton onClick={handleSave} saving={saving} /></div>
    </div>
  );
};

export default EditLegalPages;

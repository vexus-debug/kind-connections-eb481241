import { useState, useRef } from "react";
import { Plus, Trash2, Upload, Loader2 } from "lucide-react";
import { Section, Field, SaveButton, PageLoading } from "@/components/admin/EditorComponents";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useGalleryImages } from "@/hooks/useGalleryImages";
import { supabase } from "@/integrations/supabase/client";

const categories = ["Clinic", "Waiting & Reception", "Surgery Rooms", "Treatment"];

const EditGalleryPage = () => {
  const { content: c, update, save, loading: contentLoading } = useSiteContent("gallery");
  const { images, loading: imagesLoading, addImage, updateImage, deleteImage } = useGalleryImages();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [newAlt, setNewAlt] = useState("");
  const [newCat, setNewCat] = useState("Clinic");

  const handleSave = async () => { setSaving(true); try { await save(); } catch {} setSaving(false); };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const { error } = await supabase.storage.from("gallery").upload(path, file);
    if (!error) {
      const { data } = supabase.storage.from("gallery").getPublicUrl(path);
      await addImage(data.publicUrl, newAlt || file.name, newCat);
      setNewAlt("");
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  if (contentLoading || imagesLoading) return <PageLoading />;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-foreground">Gallery Page</h2>
          <p className="font-body text-sm text-muted-foreground">Manage gallery images and categories</p>
        </div>
        <SaveButton onClick={handleSave} saving={saving} />
      </div>

      <Section title="Page Header" description="Gallery hero section" defaultOpen>
        <Field label="Badge Text" value={c.badge || "Our Gallery"} onChange={v => update("badge", v)} />
        <Field label="Heading" value={c.heading || "See our clinic in action"} onChange={v => update("heading", v)} />
        <Field label="Description" value={c.description || ""} onChange={v => update("description", v)} multiline />
      </Section>

      <Section title="Add New Image" description="Upload a new gallery image">
        <div className="space-y-3">
          <Field label="Alt Text" value={newAlt} onChange={setNewAlt} placeholder="Describe the image..." />
          <div>
            <label className="block font-display text-xs font-semibold text-foreground mb-1.5">Category</label>
            <select value={newCat} onChange={e => setNewCat(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2 font-body text-sm">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-display text-sm font-bold text-accent-foreground hover:-translate-y-px transition-all disabled:opacity-50"
          >
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </Section>

      <Section title="Gallery Images" description={`${images.length} images`}>
        <div className="grid sm:grid-cols-2 gap-4">
          {images.map((img) => (
            <div key={img.id} className="rounded-xl bg-muted/30 border border-border/30 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold text-foreground truncate">{img.alt_text || "Untitled"}</span>
                <button onClick={() => deleteImage(img.id)} className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="h-32 rounded-xl overflow-hidden bg-muted">
                <img src={img.image_url} alt={img.alt_text} className="h-full w-full object-cover" />
              </div>
              <Field
                label="Alt Text"
                value={img.alt_text}
                onChange={v => updateImage(img.id, { alt_text: v })}
              />
              <div>
                <label className="block font-display text-xs font-semibold text-foreground mb-1.5">Category</label>
                <select
                  value={img.category}
                  onChange={e => updateImage(img.id, { category: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2 font-body text-sm"
                >
                  {categories.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
          ))}
        </div>
        {images.length === 0 && (
          <p className="text-center font-body text-sm text-muted-foreground py-8">No images yet. Upload your first image above.</p>
        )}
      </Section>

      <div className="pt-4"><SaveButton onClick={handleSave} saving={saving} /></div>
    </div>
  );
};

export default EditGalleryPage;

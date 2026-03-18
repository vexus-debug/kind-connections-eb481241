import { useState, useRef, ReactNode } from "react";
import { Save, Upload, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Section = ({
  title, description, children, defaultOpen = false,
}: {
  title: string; description: string; children: ReactNode; defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors"
      >
        <div className="text-left">
          <h3 className="font-display text-sm font-bold text-foreground">{title}</h3>
          <p className="font-body text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>
      {open && <div className="px-5 pb-5 space-y-4 border-t border-border/30 pt-4">{children}</div>}
    </div>
  );
};

export const Field = ({
  label, value, onChange, multiline, placeholder, rows = 3,
}: {
  label: string; value: string; onChange: (v: string) => void;
  multiline?: boolean; placeholder?: string; rows?: number;
}) => (
  <div>
    <label className="block font-display text-xs font-semibold text-foreground mb-1.5">{label}</label>
    {multiline ? (
      <textarea
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
      />
    ) : (
      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
      />
    )}
  </div>
);

export const ImageField = ({
  label, value, onChange, bucket = "gallery",
}: {
  label: string; value?: string; onChange: (url: string) => void; bucket?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const { error } = await supabase.storage.from(bucket).upload(path, file);
    if (!error) {
      const { data } = supabase.storage.from(bucket).getPublicUrl(path);
      onChange(data.publicUrl);
    }
    setUploading(false);
  };

  return (
    <div>
      <label className="block font-display text-xs font-semibold text-foreground mb-1.5">{label}</label>
      <div className="flex items-center gap-3">
        <div className="h-20 w-20 rounded-xl bg-muted border border-border/50 overflow-hidden shrink-0 flex items-center justify-center">
          {value ? (
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <Upload className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        <button
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="rounded-xl border border-border px-4 py-2.5 font-display text-xs font-semibold text-foreground hover:bg-muted transition-colors disabled:opacity-50"
        >
          {uploading ? (
            <Loader2 className="h-3.5 w-3.5 inline mr-1.5 animate-spin" />
          ) : (
            <Upload className="h-3.5 w-3.5 inline mr-1.5" />
          )}
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export const SaveButton = ({ onClick, saving }: { onClick: () => void; saving: boolean }) => (
  <button
    onClick={onClick}
    disabled={saving}
    className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground hover:-translate-y-px hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
  >
    {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
    {saving ? "Saving..." : "Save Changes"}
  </button>
);

export const PageLoading = () => (
  <div className="flex items-center justify-center p-12">
    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
  </div>
);

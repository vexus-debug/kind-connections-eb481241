import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface GalleryImage {
  id: string;
  image_url: string;
  alt_text: string;
  category: string;
  sort_order: number;
}

export function useGalleryImages() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const { data } = await supabase
      .from("gallery_images")
      .select("*")
      .order("sort_order");
    if (data) setImages(data as GalleryImage[]);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const addImage = async (image_url: string, alt_text: string, category: string) => {
    const { error } = await supabase.from("gallery_images").insert({
      image_url, alt_text, category, sort_order: images.length,
    } as any);
    if (!error) { await load(); toast.success("Image added"); }
    else toast.error("Failed to add image");
  };

  const updateImage = async (id: string, updates: Partial<GalleryImage>) => {
    const { error } = await supabase.from("gallery_images").update(updates as any).eq("id", id);
    if (!error) await load();
    else toast.error("Failed to update");
  };

  const deleteImage = async (id: string) => {
    const { error } = await supabase.from("gallery_images").delete().eq("id", id);
    if (!error) { await load(); toast.success("Image deleted"); }
    else toast.error("Failed to delete");
  };

  return { images, loading, addImage, updateImage, deleteImage, reload: load };
}

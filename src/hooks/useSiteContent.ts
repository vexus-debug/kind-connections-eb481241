import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function useSiteContent(pageKey: string) {
  const [content, setContent] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("site_content")
      .select("content")
      .eq("page_key", pageKey)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.content) setContent(data.content as Record<string, any>);
        setLoading(false);
      });
  }, [pageKey]);

  const update = (key: string, value: any) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  const save = async () => {
    const { error } = await supabase
      .from("site_content")
      .upsert({ page_key: pageKey, content } as any, { onConflict: "page_key" });
    if (error) {
      toast.error("Failed to save changes");
      throw error;
    }
    toast.success("Changes saved!");
  };

  return { content, setContent, update, save, loading };
}

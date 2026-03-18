import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Review {
  id: string;
  name: string;
  review_text: string;
  rating: number;
  image_url: string | null;
  approved: boolean;
  created_at: string;
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setReviews(data as Review[]);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const submitReview = async (review: {
    name: string;
    review_text: string;
    rating: number;
    image_url?: string;
  }) => {
    const { error } = await supabase.from("reviews").insert(review as any);
    if (error) {
      toast.error("Failed to submit review");
      return false;
    }
    toast.success("Review submitted! It will appear after approval.");
    return true;
  };

  const toggleApproval = async (id: string, approved: boolean) => {
    await supabase.from("reviews").update({ approved } as any).eq("id", id);
    await load();
  };

  const deleteReview = async (id: string) => {
    await supabase.from("reviews").delete().eq("id", id);
    await load();
    toast.success("Review deleted");
  };

  const updateReview = async (id: string, updates: Partial<Review>) => {
    await supabase.from("reviews").update(updates as any).eq("id", id);
    await load();
  };

  return { reviews, loading, submitReview, toggleApproval, deleteReview, updateReview, reload: load };
}

import { useState } from "react";
import { Star, Trash2, Check, X, Loader2, Eye, EyeOff } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";

const EditReviews = () => {
  const { reviews, loading, toggleApproval, deleteReview, updateReview } = useReviews();
  const [filter, setFilter] = useState<"all" | "approved" | "pending">("all");

  const filtered = reviews.filter((r) => {
    if (filter === "approved") return r.approved;
    if (filter === "pending") return !r.approved;
    return true;
  });

  if (loading) return (
    <div className="flex items-center justify-center p-12">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
    </div>
  );

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Reviews</h2>
        <p className="font-body text-sm text-muted-foreground">Manage patient reviews and testimonials</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {(["all", "pending", "approved"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 font-display text-xs font-semibold transition-all ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent/10"
            }`}
          >
            {f === "all" ? `All (${reviews.length})` : f === "pending" ? `Pending (${reviews.filter(r => !r.approved).length})` : `Approved (${reviews.filter(r => r.approved).length})`}
          </button>
        ))}
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {filtered.map((review) => (
          <div key={review.id} className="rounded-2xl bg-card border border-border/50 p-5 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center font-display text-sm font-bold text-accent">
                    {review.name[0]?.toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground">{review.name}</h4>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-3 py-1 font-display text-[10px] font-semibold ${
                  review.approved
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {review.approved ? "Approved" : "Pending"}
                </span>
              </div>
            </div>

            {review.image_url && (
              <img src={review.image_url} alt="" className="h-24 w-24 rounded-xl object-cover" />
            )}

            <p className="font-body text-sm text-muted-foreground leading-relaxed">"{review.review_text}"</p>

            <div className="flex items-center gap-2 pt-2 border-t border-border/30">
              <button
                onClick={() => toggleApproval(review.id, !review.approved)}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2 font-display text-xs font-semibold transition-all ${
                  review.approved
                    ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                    : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
              >
                {review.approved ? <><EyeOff className="h-3.5 w-3.5" /> Unapprove</> : <><Eye className="h-3.5 w-3.5" /> Approve</>}
              </button>
              <button
                onClick={() => deleteReview(review.id)}
                className="flex items-center gap-1.5 rounded-xl px-4 py-2 font-display text-xs font-semibold bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all"
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </button>
              <span className="ml-auto font-body text-[10px] text-muted-foreground">
                {new Date(review.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-sm text-muted-foreground">No reviews found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditReviews;

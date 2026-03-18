import { useState, useRef } from "react";
import { Star, Send, Upload, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";
import { useReviews } from "@/hooks/useReviews";
import { supabase } from "@/integrations/supabase/client";

const Reviews = () => {
  const { reviews, submitReview } = useReviews();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [imageUrl, setImageUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const approvedReviews = reviews.filter((r) => r.approved);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const { error } = await supabase.storage.from("reviews").upload(path, file);
    if (!error) {
      const { data } = supabase.storage.from("reviews").getPublicUrl(path);
      setImageUrl(data.publicUrl);
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSubmitting(true);
    const ok = await submitReview({
      name: name.trim(),
      review_text: text.trim(),
      rating,
      image_url: imageUrl || undefined,
    });
    if (ok) {
      setSubmitted(true);
      setName(""); setText(""); setRating(5); setImageUrl("");
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-gradient-teal py-20 sm:py-28">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Patient Reviews
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
              What our patients <span className="text-accent">say</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Read real experiences from our patients, or share your own story!
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Submit Review */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <SectionReveal>
            <div className="rounded-3xl bg-card border border-border/50 p-8 shadow-card">
              <h2 className="font-display text-2xl font-extrabold text-foreground mb-6">Share Your Experience</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-lg font-bold text-foreground">Thank you!</h3>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    Your review has been submitted and will appear after approval.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 font-display text-sm font-semibold text-accent hover:text-accent/80"
                  >
                    Submit another review
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-display text-sm font-semibold text-foreground mb-2">Your Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Adaeze O."
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-sm font-semibold text-foreground mb-2">Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRating(r)}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-7 w-7 ${r <= rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-sm font-semibold text-foreground mb-2">Your Review</label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Tell us about your experience..."
                      required
                      rows={4}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-sm font-semibold text-foreground mb-2">Photo (optional)</label>
                    {imageUrl ? (
                      <div className="flex items-center gap-3">
                        <img src={imageUrl} alt="" className="h-20 w-20 rounded-xl object-cover" />
                        <button type="button" onClick={() => setImageUrl("")} className="font-display text-xs text-destructive font-semibold">Remove</button>
                      </div>
                    ) : (
                      <>
                        <input ref={fileRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                        <button
                          type="button"
                          onClick={() => fileRef.current?.click()}
                          disabled={uploading}
                          className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 font-display text-xs font-semibold text-foreground hover:bg-muted transition-colors disabled:opacity-50"
                        >
                          {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                          {uploading ? "Uploading..." : "Upload Photo"}
                        </button>
                      </>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || !name.trim() || !text.trim()}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-primary-foreground transition-all hover:-translate-y-px hover:shadow-lg active:scale-[0.98] disabled:opacity-50"
                  >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {submitting ? "Submitting..." : "Submit Review"}
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Approved Reviews */}
      <section className="section-gradient-dark py-16">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="font-display text-3xl font-extrabold text-primary-foreground text-center mb-12">
              Patient Testimonials
            </h2>
          </SectionReveal>

          {approvedReviews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approvedReviews.map((review, i) => (
                <SectionReveal key={review.id} delay={i * 0.1}>
                  <div className="rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8">
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                      "{review.review_text}"
                    </p>
                    {review.image_url && (
                      <img src={review.image_url} alt="" className="h-20 w-20 rounded-xl object-cover mb-4" />
                    )}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="font-display text-sm font-bold text-accent">{review.name[0]}</span>
                      </div>
                      <div className="font-display text-sm font-bold text-primary-foreground">{review.name}</div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <p className="text-center font-body text-primary-foreground/60">
              No reviews yet. Be the first to share your experience!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;

import { useEffect, useState } from "react";
import { Home, Stethoscope, Users, Phone, Image, FileText, PanelLeft, Settings, ArrowRight, Eye, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const pages = [
  { label: "Home Page", desc: "Hero, stats, about, services, testimonials, FAQ & CTA", to: "/admin/home", icon: Home },
  { label: "Services Page", desc: "Service categories, why choose us, booking modal", to: "/admin/services", icon: Stethoscope },
  { label: "About Page", desc: "Hero, story, stats, mission/vision, values, milestones", to: "/admin/about", icon: Users },
  { label: "Contact Page", desc: "Contact info, map embed, WhatsApp & phone links", to: "/admin/contact", icon: Phone },
  { label: "Gallery Page", desc: "Upload, manage and categorize gallery images", to: "/admin/gallery", icon: Image },
  { label: "Reviews", desc: "Manage patient reviews and testimonials", to: "/admin/reviews", icon: MessageSquare },
  { label: "Header & Footer", desc: "Logo, navigation links, CTA buttons, footer", to: "/admin/header-footer", icon: PanelLeft },
  { label: "Legal Pages", desc: "Privacy policy, terms & conditions, disclaimer", to: "/admin/legal", icon: FileText },
  { label: "Site Settings", desc: "SEO, meta tags, social links, WhatsApp button", to: "/admin/settings", icon: Settings },
];

const DashboardHome = () => {
  const [stats, setStats] = useState({ gallery: 0, reviews: 0, pending: 0 });

  useEffect(() => {
    Promise.all([
      supabase.from("gallery_images").select("id", { count: "exact", head: true }),
      supabase.from("reviews").select("id", { count: "exact", head: true }),
      supabase.from("reviews").select("id", { count: "exact", head: true }).eq("approved", false),
    ]).then(([g, r, p]) => {
      setStats({
        gallery: g.count || 0,
        reviews: r.count || 0,
        pending: p.count || 0,
      });
    });
  }, []);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
        <h2 className="font-display text-2xl font-extrabold">Welcome back!</h2>
        <p className="font-body text-sm text-primary-foreground/80 mt-2 max-w-lg">
          Manage every section of your Rubi Smile Dental Clinic website from this dashboard.
        </p>
        <Link to="/" target="_blank" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary-foreground/20 backdrop-blur-sm px-5 py-2.5 font-display text-xs font-bold text-primary-foreground hover:bg-primary-foreground/30 transition-all">
          <Eye className="h-3.5 w-3.5" /> View Live Site
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Gallery Images", value: String(stats.gallery) },
          { label: "Total Reviews", value: String(stats.reviews) },
          { label: "Pending Reviews", value: String(stats.pending) },
          { label: "Editable Pages", value: "9" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-card border border-border/50 p-5 text-center">
            <div className="font-display text-2xl font-extrabold text-primary">{s.value}</div>
            <div className="font-body text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-display text-lg font-bold text-foreground mb-4">Edit Pages</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {pages.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              className="group flex items-start gap-4 rounded-2xl bg-card border border-border/50 p-5 hover:shadow-card hover:border-accent/30 transition-all duration-200"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <page.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-sm font-bold text-foreground">{page.label}</h4>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-1">{page.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

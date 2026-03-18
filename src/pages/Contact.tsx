import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";

const defaults = {
  badge: "Get In Touch",
  title: "Contact Us",
  description: "Ready to book an appointment or have a question? We'd love to hear from you.",
  address: "No 6 November Street, near Chief Palace Layout, Karu, Abuja",
  phone: "0902 440 3837",
  email: "rubiismiledentalclinic@gmail.com",
  hours: "Mon – Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 3:30 PM | Sun: Closed",
  whatsapp: "2349038535214",
  map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.52408!2d7.55!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a1!2sKaru!5e0!3m2!1sen!2sng!4v1",
};

const Contact = () => {
  const [c, setC] = useState(defaults);

  useEffect(() => {
    supabase.from("site_content").select("content").eq("page_key", "contact").maybeSingle().then(({ data }) => {
      if (data?.content) setC({ ...defaults, ...(data.content as any) });
    });
  }, []);

  return (
    <Layout>
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">{c.badge}</span>
            <h1 className="font-display text-5xl font-extrabold text-foreground mt-3">{c.title}</h1>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">{c.description}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <SectionReveal>
              <h2 className="font-display text-3xl font-extrabold text-foreground mb-8">Get in touch</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Visit Us", value: c.address },
                  { icon: Phone, label: "Call / Enquiry", value: c.phone },
                  { icon: Mail, label: "Email Us", value: c.email },
                  { icon: Clock, label: "Working Hours", value: c.hours },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 rounded-card bg-muted p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-inner bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-foreground">{item.label}</div>
                      <div className="font-body text-sm text-muted-foreground mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-inner bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-all duration-200 hover:-translate-y-px active:scale-95">
                  WhatsApp Us <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`tel:+234${c.phone.replace(/\s/g, "").replace(/^0/, "")}`} className="flex items-center gap-2 rounded-inner border border-border px-6 py-3 font-display text-sm font-bold text-foreground transition-all duration-200 hover:bg-muted">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="rounded-card overflow-hidden shadow-card h-full min-h-[400px]">
                <iframe title="Rubi Smile Location" src={c.map_url} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

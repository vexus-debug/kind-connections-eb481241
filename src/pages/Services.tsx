import { Shield, Heart, Zap, Star, CheckCircle, Clock, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";

const serviceCategories = [
  {
    icon: Shield,
    title: "Preventive Dentistry",
    color: "text-accent",
    bgColor: "bg-accent/10",
    items: [
      "Scaling & polishing (professional cleaning)",
      "Routine dental checkups & oral exams",
      "Fluoride treatments",
      "Dental sealants",
      "Oral hygiene education",
      "Gum disease prevention",
      "Bad breath (halitosis) treatment",
    ],
  },
  {
    icon: Heart,
    title: "General Dentistry",
    color: "text-primary",
    bgColor: "bg-primary/10",
    items: [
      "Tooth fillings (composite/amalgam)",
      "Basic tooth extractions",
      "Gum treatment (gingivitis, early periodontitis)",
      "Treatment of tooth sensitivity",
      "Minor infections and oral conditions",
    ],
  },
  {
    icon: Zap,
    title: "Restorative Dentistry",
    color: "text-teal",
    bgColor: "bg-accent/10",
    items: [
      "Root canal therapy (endodontics)",
      "Dental crowns (caps)",
      "Dental bridges",
      "Full and partial dentures",
      "Dental implants (tooth replacement)",
      "Tooth reconstruction",
    ],
  },
  {
    icon: Star,
    title: "Cosmetic Dentistry",
    color: "text-primary",
    bgColor: "bg-primary/10",
    items: [
      "Teeth whitening (in-office & take-home)",
      "Dental veneers (composite/porcelain)",
      "Smile design / smile makeover",
      "Teeth reshaping (contouring)",
      "Gap closure",
    ],
  },
  {
    icon: CheckCircle,
    title: "Orthodontics",
    color: "text-teal",
    bgColor: "bg-accent/10",
    items: [
      "Traditional braces (metal/ceramic)",
      "Clear aligners",
      "Bite correction (malocclusion)",
      "Teeth alignment for adults & teens",
    ],
  },
  {
    icon: Clock,
    title: "Oral Surgery & Emergency Care",
    color: "text-primary",
    bgColor: "bg-primary/10",
    items: [
      "Surgical tooth extraction (including wisdom teeth)",
      "Emergency pain relief",
      "Abscess drainage",
      "Trauma management (broken/chipped teeth)",
      "Infection control",
    ],
  },
  {
    icon: Heart,
    title: "Pediatric Dentistry",
    color: "text-teal",
    bgColor: "bg-accent/10",
    items: [
      "Child-friendly dental care",
      "Preventive care for kids",
      "Fluoride treatment for children",
      "Space maintainers",
      "Early orthodontic assessment",
      "Behavioral management (gentle approach)",
    ],
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6 text-center">
        <SectionReveal>
          <span className="font-display text-sm font-semibold text-primary uppercase tracking-wider">What We Offer</span>
          <h1 className="font-display text-5xl font-extrabold text-foreground mt-3">Our Services</h1>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Comprehensive dental care for the whole family — from routine checkups to advanced procedures.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Service Grid */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((cat, i) => (
            <SectionReveal key={cat.title} delay={i * 0.08}>
              <div className="rounded-card bg-background p-8 shadow-card h-full">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-inner ${cat.bgColor}`}>
                  <cat.icon className={`h-6 w-6 ${cat.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-foreground py-20">
      <div className="container mx-auto px-6 text-center">
        <SectionReveal>
          <h2 className="font-display text-3xl font-extrabold text-primary-foreground">
            Need a specific treatment?
          </h2>
          <p className="font-body text-primary-foreground/70 mt-3">Contact us to discuss your needs and book a consultation.</p>
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-inner bg-primary px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-200 hover:-translate-y-px active:scale-95"
          >
            Book Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </SectionReveal>
      </div>
    </section>
  </Layout>
);

export default Services;

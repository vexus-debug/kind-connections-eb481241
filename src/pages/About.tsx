import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import {
  Heart, Users, Shield, Award, MapPin, Clock, Phone,
  ArrowRight, MessageCircle, Sparkles, Target, Eye,
  CheckCircle, Star, Stethoscope, CalendarCheck
} from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";

// Gallery images
import dentalTools from "@/assets/dental-tools.jpg";
import clinicBanner from "@/assets/gallery/clinic-banner.webp";
import reception from "@/assets/gallery/reception-desk.jpg";
import waitingArea from "@/assets/gallery/waiting-lounge.jpg";
import waitingArea2 from "@/assets/gallery/reception-lounge.jpg";
import frontDesk from "@/assets/gallery/reception-desk.jpg";
import exterior from "@/assets/gallery/exterior.jpg";
import entranceSign from "@/assets/gallery/entrance-sign.jpg";
import signage from "@/assets/gallery/signage.webp";
import operatory from "@/assets/gallery/operatory.jpg";
import treatment1 from "@/assets/gallery/treatment-1.webp";

const WHATSAPP_NUMBER = "2349038535214";
const CALL_NUMBER = "+2349024403837";

const values = [
  { icon: Heart, title: "Gentle Care", desc: "We prioritize your comfort at every step with a calming, pain-conscious approach.", color: "bg-accent/10", iconColor: "text-accent" },
  { icon: Users, title: "Family Focus", desc: "From toddlers to grandparents — every member of your family is welcome here.", color: "bg-primary/10", iconColor: "text-primary" },
  { icon: Shield, title: "Trust & Transparency", desc: "Honest advice, transparent pricing, and clear treatment plans you understand.", color: "bg-accent/10", iconColor: "text-accent" },
  { icon: Award, title: "Excellence", desc: "Modern techniques, continuous learning, and commitment to the highest standards.", color: "bg-primary/10", iconColor: "text-primary" },
  { icon: Target, title: "Patient-First", desc: "Your needs drive every decision — from scheduling flexibility to treatment options.", color: "bg-accent/10", iconColor: "text-accent" },
  { icon: Eye, title: "Education", desc: "We empower you with knowledge about your oral health so you can make informed decisions.", color: "bg-primary/10", iconColor: "text-primary" },
];

const milestones = [
  { year: "Founded", title: "Rubi Smile Opens", desc: "Established at No 6 November Street, near Chief Palace Layout, Karu, Abuja with a vision to provide accessible, quality dental care." },
  { year: "Growing", title: "Expanding Services", desc: "Added orthodontics, cosmetic dentistry, and pediatric care to serve more needs." },
  { year: "Today", title: "1000+ Happy Patients", desc: "A trusted name in dental care, serving families across Abuja and beyond." },
  { year: "Future", title: "Always Improving", desc: "Continuously investing in technology, training, and patient experience." },
];

const stats = [
  { value: "1000+", label: "Happy Patients", icon: Users },
  { value: "7+", label: "Service Categories", icon: Stethoscope },
  { value: "6 Days", label: "Open Weekly", icon: CalendarCheck },
  { value: "NHIS", label: "Insurance Accepted", icon: Shield },
];

const About = () => {
  const { content: c } = useSiteContent("about");
  const dbValues = (c.values as any[]) || values;
  const dbMilestones = (c.milestones as any[]) || milestones;
  const WHATSAPP_NUMBER = "2349038535214";
  const CALL_NUMBER = "+2349024403837";

  return (
  <Layout>
    {/* Hero with image background */}
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={clinicBanner} alt="Rubi Smile Dental Clinic" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
      </div>
      <div className="container mx-auto px-6 relative z-10 py-32">
        <SectionReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 font-display text-sm font-semibold text-accent backdrop-blur-sm border border-accent/20">
            <Sparkles className="h-4 w-4" /> {(c.hero_badge as string) || "About Rubi Smile"}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground mt-6 max-w-3xl leading-[1.1]">
            {(c.hero_heading as string) || <>Dentistry with <span className="text-accent">Heart</span></>}
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 mt-6 max-w-xl leading-relaxed">
            {(c.hero_desc as string) || "We believe everyone deserves access to quality, compassionate dental care. That's the promise behind every smile we create."}
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Our Story */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionReveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={dentalTools} alt="Modern dental equipment" className="rounded-card shadow-card w-full h-48 object-cover" />
                <img src={waitingArea} alt="Comfortable waiting area" className="rounded-card shadow-card w-full h-32 object-cover" />
              </div>
              <div className="space-y-4 pt-8">
                <img src={frontDesk} alt="Welcoming front desk" className="rounded-card shadow-card w-full h-32 object-cover" />
                <img src={reception} alt="Reception area" className="rounded-card shadow-card w-full h-48 object-cover" />
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">Our Story</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mt-3">
              {(c.story_heading as string) || <>A family practice with a <span className="text-accent">gentle</span> touch</>}
            </h2>
            <p className="font-body text-muted-foreground mt-6 leading-relaxed">
              {(c.story_p1 as string) || "Located at No 6 November Street, near Chief Palace Layout, Karu, Abuja, Rubi Smile Dental Clinic was founded with a simple mission: to make quality dental care accessible, comfortable, and affordable for everyone."}
            </p>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              {(c.story_p2 as string) || "We serve families, young professionals, and NHIS patients with comprehensive dental care. Our clinic combines modern equipment with a warm, patient-first approach that puts your comfort above all else."}
            </p>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              {(c.story_p3 as string) || "We understand that visiting the dentist can be anxiety-inducing. That's why we've created an environment that feels safe, welcoming, and reassuring — whether you're here for a routine cleaning or a complex procedure."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-all duration-200 hover:-translate-y-px active:scale-95"
              >
                Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="flex items-center gap-2 rounded-full border border-border px-6 py-3 font-display text-sm font-bold text-foreground transition-all duration-200 hover:bg-muted"
              >
                View Gallery
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-accent py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <stat.icon className="h-6 w-6 text-accent-foreground/70 mx-auto mb-2" />
                <div className="font-display text-3xl font-extrabold text-accent-foreground">{stat.value}</div>
                <div className="font-body text-sm text-accent-foreground/70 mt-1">{stat.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-gradient-teal py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <SectionReveal>
            <div className="rounded-card bg-background p-10 shadow-card h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-inner bg-primary/10 mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-foreground">Our Mission</h3>
              <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                {(c.mission as string) || "To provide exceptional, patient-centered dental care that is accessible, affordable, and delivered with compassion. We strive to educate our patients, prevent oral disease, and restore smiles using the latest techniques and technology."}
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="rounded-card bg-background p-10 shadow-card h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-inner bg-accent/10 mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-foreground">Our Vision</h3>
              <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                {(c.vision as string) || "To be the most trusted dental clinic in Abuja — known for gentle care, modern facilities, and a genuine commitment to every patient's well-being. We envision a community where quality dental care is within everyone's reach."}
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">What Drives Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mt-3">Our Core Values</h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
              These values guide every interaction, every treatment, and every smile.
            </p>
          </div>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dbValues.map((v: any, i: number) => (
            <SectionReveal key={v.title || i} delay={i * 0.08}>
              <div className="rounded-card bg-background p-8 shadow-card h-full group hover:shadow-hover-lift transition-all duration-300 border border-border/30">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-inner ${i % 2 === 0 ? "bg-accent/10" : "bg-primary/10"} group-hover:scale-110 transition-transform`}>
                  {(() => { const Icon = values[i]?.icon || Heart; return <Icon className={`h-6 w-6 ${i % 2 === 0 ? "text-accent" : "text-primary"}`} />; })()}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline / Milestones */}
    <section className="section-gradient-dark py-24">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">Our Journey</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground mt-3">
              Milestones & Growth
            </h2>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dbMilestones.map((m: any, i: number) => (
            <SectionReveal key={m.year || i} delay={i * 0.1}>
              <div className="relative text-center p-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/15 border border-accent/25 mb-4">
                  <span className="font-display text-xs font-bold text-accent">{m.year}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground">{m.title}</h3>
                <p className="font-body text-sm text-primary-foreground/60 mt-2 leading-relaxed">{m.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Clinic Gallery Grid */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">Our Space</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mt-3">
              Take a Look Inside
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
              Our modern, welcoming clinic is designed with your comfort in mind.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { img: exterior, label: "Clinic Exterior", span: "lg:col-span-2" },
            { img: entranceSign, label: "Entrance" },
            { img: waitingArea2, label: "Waiting Area" },
            { img: operatory, label: "Treatment Room", span: "lg:col-span-2" },
            { img: signage, label: "Signage" },
            { img: treatment1, label: "Modern Equipment", span: "lg:col-span-2" },
          ].map((item, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div className={`rounded-card overflow-hidden group ${item.span || ""}`}>
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 font-display text-xs font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Location Info */}
    <section className="section-gradient-teal py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">Find Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mt-3">
              Visit Our Clinic
            </h2>
            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, label: "Location", value: (c.address as string) || "No 6 November Street, near Chief Palace Layout, Karu, Abuja" },
                { icon: Clock, label: "Hours", value: (c.hours as string) || "Mon – Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 3:30 PM" },
                { icon: MessageCircle, label: "WhatsApp", value: "0903 853 5214" },
                { icon: Phone, label: "Call / Enquiry", value: "0902 440 3837" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
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
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="rounded-card overflow-hidden shadow-card h-80">
              <iframe
                title="Rubi Smile Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.52408!2d7.55!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a1!2sKaru!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={clinicBanner} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <SectionReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground max-w-2xl mx-auto">
            {(c.cta_heading as string) || "Ready to Experience the Rubi Smile Difference?"}
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-lg mx-auto leading-relaxed">
            Book your appointment today and discover dental care that truly puts you first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Rubi Smile! I'd like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-sm font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-px hover:shadow-xl active:scale-95"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
            <a
              href={`tel:${CALL_NUMBER}`}
              className="flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> Call for Enquiry
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  </Layout>
  );
};

export default About;

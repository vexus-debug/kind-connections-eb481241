import { Link } from "react-router-dom";
import { Phone, Shield, Heart, Zap, ArrowRight, Star, Clock, MapPin, CheckCircle } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import heroImage from "@/assets/hero-clinic.jpg";

const services = [
  { icon: Shield, title: "Preventive Dentistry", desc: "Cleanings, checkups, fluoride treatments & oral hygiene education.", color: "text-accent" },
  { icon: Heart, title: "General Dentistry", desc: "Fillings, extractions, gum treatment & infection management.", color: "text-primary" },
  { icon: Zap, title: "Restorative Dentistry", desc: "Root canals, crowns, bridges, dentures & dental implants.", color: "text-accent" },
  { icon: Star, title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, smile design & gap closure.", color: "text-primary" },
  { icon: CheckCircle, title: "Orthodontics", desc: "Braces, clear aligners & bite correction for all ages.", color: "text-accent" },
  { icon: Clock, title: "Emergency Care", desc: "Surgical extractions, pain relief, abscess drainage & trauma.", color: "text-primary" },
  { icon: Heart, title: "Pediatric Dentistry", desc: "Child-friendly care, space maintainers & early assessment.", color: "text-accent" },
];

const stats = [
  { value: "7+", label: "Service Categories" },
  { value: "1000+", label: "Happy Patients" },
  { value: "NHIS", label: "Accepted" },
  { value: "6 Days", label: "Open Weekly" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Modern dental clinic" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="container relative mx-auto px-6 py-32">
        <SectionReveal>
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 font-display text-xs font-semibold text-primary-foreground mb-6">
              🏥 Now Accepting NHIS Patients
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
              Expert dental care that feels like{" "}
              <span className="text-primary">family</span>.
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 leading-relaxed max-w-xl mb-10">
              From routine cleanings to advanced oral surgery, Rubi Smile provides gentle, modern dentistry in the heart of Karu, Abuja.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-inner bg-primary px-8 py-4 font-display text-sm font-bold text-primary-foreground shadow-hover-lift transition-all duration-200 hover:-translate-y-px active:scale-95"
              >
                Book via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-2 rounded-inner border border-primary-foreground/30 px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-background py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 relative z-10">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-card bg-background p-6 text-center shadow-card">
                <div className="font-display text-3xl font-extrabold text-primary">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Rubi Smile */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-4xl font-extrabold text-foreground mt-3">
              Gentle dentistry, <span className="text-accent">brilliant</span> results
            </h2>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              We combine modern equipment with a compassionate approach to make every visit comfortable.
            </p>
          </div>
        </SectionReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Modern Equipment", desc: "State-of-the-art technology for precise, painless treatments." },
            { icon: Shield, title: "NHIS Accepted", desc: "We accept government insurance for essential dental treatments." },
            { icon: Heart, title: "Gentle Approach", desc: "Patient comfort is our priority — anxiety-free dentistry for all ages." },
          ].map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.15}>
              <div className="rounded-card bg-background p-8 shadow-card transition-all duration-200 hover:shadow-hover-lift hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-inner bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <h2 className="font-display text-4xl font-extrabold text-foreground mt-3">
              Comprehensive dental care
            </h2>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              From preventive care to advanced procedures — everything your smile needs under one roof.
            </p>
          </div>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.08}>
              <Link
                to="/services"
                className="block rounded-card bg-background p-6 shadow-card transition-all duration-200 hover:shadow-hover-lift hover:-translate-y-1 group"
              >
                <service.icon className={`h-8 w-8 ${service.color} mb-4`} />
                <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{service.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Location */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <span className="font-display text-sm font-semibold text-teal uppercase tracking-wider">Find Us</span>
            <h2 className="font-display text-4xl font-extrabold text-foreground mt-3">
              Visit us in <span className="text-primary">Karu, Abuja</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              Conveniently located near major landmarks. We're easy to find and always ready to welcome you.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-display text-sm font-bold text-foreground">Address</div>
                  <div className="font-body text-sm text-muted-foreground">Karu, Abuja, Nigeria (Near INEC Office)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-teal mt-0.5" />
                <div>
                  <div className="font-display text-sm font-bold text-foreground">Working Hours</div>
                  <div className="font-body text-sm text-muted-foreground">Monday – Saturday: 9:00 AM – 5:30 PM</div>
                  <div className="font-body text-sm text-muted-foreground">Sunday: Closed</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-display text-sm font-bold text-foreground">Phone</div>
                  <div className="font-body text-sm text-muted-foreground">+234 800 000 0000</div>
                </div>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="rounded-card overflow-hidden shadow-card aspect-video bg-muted">
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
    <section className="bg-foreground py-24">
      <div className="container mx-auto px-6 text-center">
        <SectionReveal>
          <h2 className="font-display text-4xl font-extrabold text-primary-foreground">
            Ready for a <span className="text-primary">brighter</span> smile?
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Book your appointment today. Walk-ins welcome for emergencies.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-inner bg-primary px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-200 hover:-translate-y-px hover:shadow-hover-lift active:scale-95"
            >
              WhatsApp Us <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+2348000000000"
              className="flex items-center gap-2 rounded-inner border border-primary-foreground/30 px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  </div>
);

export default Index;

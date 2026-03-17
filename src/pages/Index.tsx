import { Link } from "react-router-dom";
import {
  Phone, Shield, Heart, Zap, ArrowRight, Star, Clock, MapPin,
  CheckCircle, Sparkles, Users, CalendarCheck, Award, MessageCircle,
  ChevronRight, Quote, Stethoscope, SmilePlus, Baby, Scissors
} from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import heroImage from "@/assets/hero-clinic.jpg";

/* ─── Data ─── */
const services = [
  { icon: Shield, title: "Preventive Dentistry", desc: "Cleanings, checkups, fluoride treatments & oral hygiene education.", color: "text-accent", bg: "bg-accent/10" },
  { icon: Heart, title: "General Dentistry", desc: "Fillings, extractions, gum treatment & infection management.", color: "text-primary", bg: "bg-primary/10" },
  { icon: Zap, title: "Restorative Dentistry", desc: "Root canals, crowns, bridges, dentures & dental implants.", color: "text-accent", bg: "bg-accent/10" },
  { icon: Star, title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, smile design & gap closure.", color: "text-primary", bg: "bg-primary/10" },
  { icon: CheckCircle, title: "Orthodontics", desc: "Braces, clear aligners & bite correction for all ages.", color: "text-accent", bg: "bg-accent/10" },
  { icon: Scissors, title: "Oral Surgery", desc: "Surgical extractions, pain relief, abscess drainage & trauma.", color: "text-primary", bg: "bg-primary/10" },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Child-friendly care, space maintainers & early assessment.", color: "text-accent", bg: "bg-accent/10" },
];

const stats = [
  { value: "7+", label: "Service Categories", icon: Stethoscope },
  { value: "1000+", label: "Happy Patients", icon: SmilePlus },
  { value: "NHIS", label: "Accepted", icon: Shield },
  { value: "6 Days", label: "Open Weekly", icon: CalendarCheck },
];

const steps = [
  { num: "01", title: "Book Online", desc: "WhatsApp us or call to schedule a convenient time." },
  { num: "02", title: "Consultation", desc: "Meet our dentist for a thorough check-up and treatment plan." },
  { num: "03", title: "Treatment", desc: "Receive gentle, expert care using modern equipment." },
  { num: "04", title: "Smile Bright", desc: "Walk out with a healthier, more confident smile." },
];

const testimonials = [
  { name: "Adaeze O.", text: "Rubi Smile made my first dental visit so comfortable. The team is incredibly patient and professional. I actually look forward to my checkups now!", rating: 5 },
  { name: "Ibrahim M.", text: "I had a root canal here and was amazed at how painless it was. The doctor explained every step. Highly recommend to anyone nervous about dental work.", rating: 5 },
  { name: "Blessing A.", text: "My kids love going to the dentist now — that says everything! The pediatric care is top-notch and the clinic is so clean and welcoming.", rating: 5 },
];

const faqs = [
  { q: "Do you accept NHIS insurance?", a: "Yes! We accept NHIS for eligible treatments including routine checkups, fillings, and extractions. Bring your NHIS card to your appointment." },
  { q: "Is the first consultation free?", a: "We offer affordable initial consultations. Contact us for current pricing and any ongoing promotions for new patients." },
  { q: "How do I book an appointment?", a: "You can book via WhatsApp, phone call, or walk in during our working hours (Mon–Sat, 9AM–5:30PM)." },
  { q: "Do you handle dental emergencies?", a: "Yes, we accommodate dental emergencies during working hours. Call us immediately and we'll prioritize your care." },
  { q: "Is teeth whitening safe?", a: "Absolutely. We use clinically proven, dentist-supervised whitening treatments that are safe for your enamel." },
];

/* ─── Component ─── */
const Index = () => (
  <div className="overflow-hidden">

    {/* ═══════════════════ HERO ═══════════════════ */}
    <section className="relative min-h-[100vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Modern dental clinic" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Decorative glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full bg-accent/8 blur-2xl"
        animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 backdrop-blur-sm px-5 py-2 font-display text-xs font-semibold text-primary-foreground mb-8 border border-accent/20">
              <Sparkles className="h-3.5 w-3.5" />
              Now Accepting NHIS Patients
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Expert dental care
            <br />
            that feels like{" "}
            <span className="relative">
              <span className="text-accent">family</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/60 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
            .
          </motion.h1>

          <motion.p
            className="font-body text-lg sm:text-xl text-primary-foreground/75 leading-relaxed max-w-xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            From routine cleanings to advanced oral surgery, Rubi Smile provides gentle, modern dentistry in the heart of Karu, Abuja.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Book via WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+2348000000000"
              className="flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              <Phone className="h-4 w-4" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </div>
      </motion.div>
    </section>

    {/* ═══════════════════ STATS ═══════════════════ */}
    <section className="relative bg-background py-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 -mt-16 relative z-10">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <stat.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-primary">{stat.value}</div>
                <div className="font-body text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════ WHY CHOOSE US — mesh bg ═══════════════════ */}
    <section className="section-mesh py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-widest mb-4">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Gentle dentistry,{" "}
              <span className="text-accent">brilliant</span> results
            </h2>
            <p className="font-body text-muted-foreground mt-5 leading-relaxed text-lg">
              We combine modern equipment with a compassionate approach to make every visit comfortable.
            </p>
          </div>
        </SectionReveal>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: Zap, title: "Modern Equipment", desc: "State-of-the-art technology for precise, painless treatments. Digital imaging and sterilized instruments.", gradient: "from-accent/5 to-accent/0" },
            { icon: Shield, title: "NHIS Accepted", desc: "We accept government insurance for essential dental treatments. Making quality care accessible to all.", gradient: "from-primary/5 to-primary/0" },
            { icon: Heart, title: "Gentle Approach", desc: "Patient comfort is our priority — anxiety-free dentistry for all ages. We listen, we care, we heal.", gradient: "from-accent/5 to-accent/0" },
          ].map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.15}>
              <div className={`relative rounded-3xl bg-gradient-to-br ${item.gradient} border border-border/50 p-8 sm:p-10 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 group`}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════ SERVICES — warm gradient bg ═══════════════════ */}
    <section className="section-gradient-warm py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-widest mb-4">Our Services</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                Comprehensive dental care
              </h2>
              <p className="font-body text-muted-foreground mt-4 leading-relaxed text-lg">
                Everything your smile needs under one roof — from prevention to restoration.
              </p>
            </div>
            <Link
              to="/services"
              className="group flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-accent transition-colors whitespace-nowrap"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.07}>
              <Link
                to="/services"
                className="group block rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.bg} transition-colors`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{service.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <ChevronRight className="h-3 w-3" />
                </span>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════ HOW IT WORKS — teal gradient bg ═══════════════════ */}
    <section className="section-gradient-teal py-24 sm:py-32 relative">
      <div className="absolute inset-0 section-dots opacity-30 pointer-events-none" />
      <div className="container relative mx-auto px-6">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-widest mb-4">How It Works</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Your journey to a <span className="text-accent">healthier</span> smile
            </h2>
            <p className="font-body text-muted-foreground mt-5 leading-relaxed text-lg">
              Four simple steps to better dental health. We make the process easy and stress-free.
            </p>
          </div>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <SectionReveal key={step.num} delay={i * 0.12}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px border-t-2 border-dashed border-accent/30" />
                )}
                <div className="relative bg-background rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <span className="font-display text-4xl font-extrabold text-accent/20">{step.num}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════ TESTIMONIALS — dark section ═══════════════════ */}
    <section className="section-gradient-dark py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-widest mb-4">Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground">
              What our patients <span className="text-accent">say</span>
            </h2>
            <p className="font-body text-primary-foreground/60 mt-5 leading-relaxed text-lg">
              Real stories from real patients who trust Rubi Smile with their dental health.
            </p>
          </div>
        </SectionReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.15}>
              <div className="relative rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8 hover:bg-primary-foreground/8 transition-all duration-300">
                <Quote className="h-8 w-8 text-accent/40 mb-4" />
                <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-accent">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-primary-foreground">{t.name}</div>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════ FAQ — white with diagonal pattern ═══════════════════ */}
    <section className="bg-background py-24 sm:py-32 relative">
      <div className="absolute inset-0 section-diagonal opacity-40 pointer-events-none" />
      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionReveal>
            <div className="lg:sticky lg:top-32">
              <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-widest mb-4">FAQ</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                Frequently asked <span className="text-accent">questions</span>
              </h2>
              <p className="font-body text-muted-foreground mt-5 leading-relaxed text-lg">
                Got questions? We've got answers. If you don't find what you're looking for, reach out to us directly.
              </p>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-accent hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Ask us on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </SectionReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <FaqItem question={faq.q} answer={faq.a} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════ LOCATION — warm bg ═══════════════════ */}
    <section className="section-gradient-warm py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-widest mb-4">Find Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Visit us in{" "}
              <span className="text-accent">Karu, Abuja</span>
            </h2>
            <p className="font-body text-muted-foreground mt-5 leading-relaxed text-lg">
              Conveniently located near major landmarks. We're easy to find and always ready to welcome you.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "Karu, Abuja, Nigeria (Near INEC Office)", color: "text-primary", bg: "bg-primary/10" },
                { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:00 AM – 5:30 PM", sub: "Sunday: Closed", color: "text-accent", bg: "bg-accent/10" },
                { icon: Phone, label: "Phone", value: "+234 800 000 0000", color: "text-primary", bg: "bg-primary/10" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg}`}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-foreground">{item.label}</div>
                    <div className="font-body text-sm text-muted-foreground mt-0.5">{item.value}</div>
                    {item.sub && <div className="font-body text-sm text-muted-foreground">{item.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-elevated aspect-video bg-muted">
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

    {/* ═══════════════════ CTA — accent gradient ═══════════════════ */}
    <section className="section-gradient-dark py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/8 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container relative mx-auto px-6 text-center">
        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-5 py-2 font-display text-xs font-semibold text-accent mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              Start Your Smile Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight">
              Ready for a <span className="text-accent">brighter</span> smile?
            </h2>
            <p className="font-body text-primary-foreground/60 mt-6 max-w-xl mx-auto leading-relaxed text-lg">
              Book your appointment today. Walk-ins welcome for emergencies. Your healthiest smile is just one visit away.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  </div>
);

/* ─── FAQ Item Component ─── */
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left rounded-2xl bg-background border border-border/60 p-6 transition-all duration-200 hover:shadow-card"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-base font-bold text-foreground">{question}</h3>
        <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Index;

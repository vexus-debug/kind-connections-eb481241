import { Heart, Users, Shield, Award } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";
import dentalTools from "@/assets/dental-tools.jpg";

const About = () => (
  <Layout>
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6 text-center">
        <SectionReveal>
          <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
          <h1 className="font-display text-5xl font-extrabold text-foreground mt-3">Our Story</h1>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Rubi Smile Dental Clinic is built on the belief that everyone deserves access to quality, compassionate dental care.
          </p>
        </SectionReveal>
      </div>
    </section>

    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <img src={dentalTools} alt="Modern dental equipment" className="rounded-card shadow-card w-full object-cover" />
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <h2 className="font-display text-3xl font-extrabold text-foreground">
              A family practice with a <span className="text-accent">gentle</span> touch
            </h2>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              Located in Karu, Abuja, we serve families, young professionals, and NHIS patients with comprehensive dental care. Our clinic combines modern equipment with a warm, patient-first approach.
            </p>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              We understand that visiting the dentist can be anxiety-inducing. That's why we've created an environment that feels safe, comfortable, and welcoming — whether you're here for a routine cleaning or a complex procedure.
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>

    <section className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <h2 className="font-display text-3xl font-extrabold text-foreground text-center mb-16">Our Values</h2>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Heart, title: "Gentle Care", desc: "We prioritize your comfort at every step." },
            { icon: Users, title: "Family Focus", desc: "Care for every member of your family." },
            { icon: Shield, title: "Trust", desc: "Transparent treatments and honest advice." },
            { icon: Award, title: "Excellence", desc: "Modern techniques and continuous learning." },
          ].map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.1}>
              <div className="rounded-card bg-background p-8 shadow-card text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-inner bg-accent/10">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

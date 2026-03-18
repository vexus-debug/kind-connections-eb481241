import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";

import treatment1 from "@/assets/gallery/treatment-1.webp";
import treatment2 from "@/assets/gallery/treatment-2.webp";
import treatment3 from "@/assets/gallery/treatment-3.jpg";
import clinicBanner from "@/assets/gallery/clinic-banner.webp";
import reception from "@/assets/gallery/reception-desk.jpg";
import dentalChair from "@/assets/gallery/dental-chair.webp";
import orthodontics from "@/assets/gallery/orthodontics.webp";
import signage from "@/assets/gallery/signage.webp";
import exterior from "@/assets/gallery/exterior.jpg";
import waitingArea from "@/assets/gallery/waiting-lounge.jpg";
import waitingArea2 from "@/assets/gallery/reception-lounge.jpg";
import operatory from "@/assets/gallery/operatory.jpg";
import entranceSign from "@/assets/gallery/entrance-sign-new.jpg";
import clinicExterior2 from "@/assets/gallery/clinic-exterior-2.jpg";

const images = [
  { src: exterior, alt: "Rubi Smile Dental Clinic exterior", category: "Clinic" },
  { src: entranceSign, alt: "Dental clinic entrance signage", category: "Clinic" },
  { src: clinicBanner, alt: "Rubi Smile Dental Clinic banner and services", category: "Clinic" },
  { src: signage, alt: "Dental services signage", category: "Clinic" },
  { src: waitingArea, alt: "Comfortable waiting area with seating", category: "Waiting & Reception" },
  { src: waitingArea2, alt: "Spacious waiting lounge with water dispenser", category: "Waiting & Reception" },
  { src: reception, alt: "Reception area with dental model display", category: "Waiting & Reception" },
  { src: operatory, alt: "Modern dental operatory with digital equipment", category: "Surgery Rooms" },
  { src: dentalChair, alt: "Dental chair and treatment room", category: "Surgery Rooms" },
  { src: operatory, alt: "Fully equipped surgery suite — digital imaging", category: "Surgery Rooms" },
  { src: dentalChair, alt: "State-of-the-art dental unit", category: "Surgery Rooms" },
  { src: treatment1, alt: "Dental treatment in progress", category: "Treatment" },
  { src: treatment2, alt: "Professional dental care by our team", category: "Treatment" },
  { src: treatment3, alt: "Expert dental procedure with assistant", category: "Treatment" },
  { src: orthodontics, alt: "Orthodontic braces treatment result", category: "Treatment" },
  { src: clinicExterior2, alt: "Rubi Smile Dental Clinic building exterior", category: "Clinic" },
];

const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-gradient-teal py-20 sm:py-28">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Our Gallery
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              See our <span className="text-accent">clinic</span> in action
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Take a tour of Rubi Smile Dental Clinic — our modern facilities, expert team, and real patient treatments.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-background py-8 sticky top-20 z-30 border-b border-border/50">
        <div className="container mx-auto px-6 flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 font-display text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background py-12 sm:py-20">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={`${img.alt}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-muted"
                  onClick={() => setSelected(images.findIndex((x) => x.alt === img.alt))}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="absolute bottom-3 left-3 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 font-display text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              key={selected}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-center font-display text-sm text-primary-foreground/80">
              {images[selected].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;

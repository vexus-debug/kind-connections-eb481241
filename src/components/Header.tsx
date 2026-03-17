import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Rubi Smile Dental Clinic" className="h-12 w-12 rounded-inner object-cover" />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-foreground">Rubi Smile</span>
            <span className="block text-xs font-body text-muted-foreground">Dental Clinic</span>
          </div>
        </Link>

        {/* Desktop: minimal nav + CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+2348000000000"
            className="flex items-center gap-2 rounded-inner bg-primary px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground shadow-subtle transition-all duration-200 hover:-translate-y-px hover:shadow-hover-lift active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </a>
        </div>

        {/* Menu trigger — both mobile & desktop */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] sm:w-[380px] bg-primary p-0 border-none">
            <div className="flex flex-col h-full">
              {/* Menu header */}
              <div className="flex items-center justify-between p-6 border-b border-primary-foreground/10">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Rubi Smile" className="h-10 w-10 rounded-inner object-cover" />
                  <div>
                    <span className="font-display text-base font-bold text-primary-foreground">Rubi Smile</span>
                    <span className="block text-xs font-body text-primary-foreground/60">Dental Clinic</span>
                  </div>
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col gap-1 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between rounded-inner px-4 py-4 font-display text-lg font-semibold transition-all duration-200 ${
                      location.pathname === link.to
                        ? "bg-primary-foreground/15 text-primary-foreground"
                        : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    }`}
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-primary-foreground/10 space-y-3">
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-inner bg-accent px-6 py-3.5 font-display text-sm font-bold text-accent-foreground transition-all duration-200 hover:-translate-y-px active:scale-95 w-full"
                >
                  WhatsApp Us
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center justify-center gap-2 rounded-inner border border-primary-foreground/30 px-6 py-3.5 font-display text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10 w-full"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

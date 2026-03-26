import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Unsere Leistungen", href: "/#leistungen" },
    { name: "Über Uns", href: "/#ueber-uns" },
    { name: "Referenzen", href: "/#referenzen" },
  ];

  const openContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openContactModal'));
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`flex items-center justify-between py-4 px-4 sm:px-6 md:px-12 bg-white sticky top-0 z-50 shadow-sm border-b border-zinc-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Link to="/" className="flex items-center gap-2 md:gap-3 text-zinc-950 z-50">
        <img 
          src="https://s1.directupload.eu/images/260326/2js28sgi.webp" 
          alt="Crank Facility Management Logo" 
          className="h-8 md:h-12 w-auto"
        />
      </Link>
      
      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-8 text-zinc-600 font-medium">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-zinc-950 transition-colors">
            {link.name}
          </a>
        ))}
        <button onClick={openContact} className="hover:text-zinc-950 transition-colors">
          Kontakt
        </button>
      </nav>
      
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-4 text-zinc-500">
          <a href="tel:+491629570163" className="hover:text-zinc-950 transition-colors" aria-label="Telefon">
            <Phone className="w-5 h-5" />
          </a>
          <a href="mailto:info@crank-facility-management.de" className="hover:text-zinc-950 transition-colors" aria-label="E-Mail">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/crank.facility" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <Button onClick={openContact} className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-6">
          Unverbindliches Angebot anfordern
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden p-2 text-zinc-950 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 shadow-xl p-6 flex flex-col gap-4 lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-4 text-zinc-700 font-medium text-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-zinc-950 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button onClick={openContact} className="text-left hover:text-zinc-950 transition-colors py-2">
              Kontakt
            </button>
          </nav>
          <Button onClick={openContact} className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-6 text-lg mt-4">
            Angebot anfordern
          </Button>
          <div className="flex justify-center gap-8 mt-6 pt-6 border-t border-zinc-100 text-zinc-500">
            <a href="tel:+491629570163" className="hover:text-zinc-950 transition-colors" aria-label="Telefon">
              <Phone className="w-6 h-6" />
            </a>
            <a href="mailto:info@crank-facility-management.de" className="hover:text-zinc-950 transition-colors" aria-label="E-Mail">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/crank.facility" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

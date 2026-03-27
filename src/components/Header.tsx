import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
    <>
      <header className={`fixed z-40 transition-all duration-300 ${
        !isScrolled 
          ? 'top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 lg:left-12 lg:right-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6' 
          : 'top-0 left-0 right-0 bg-[#1A1A1A] py-4 px-4 sm:px-6 md:px-12 shadow-md'
      } text-white ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <Link to="/" className="flex items-center gap-2 md:gap-3 z-50" aria-label="Zur Startseite">
            <img 
              src="https://s1.directupload.eu/images/260326/2js28sgi.webp" 
              alt="Crank Facility Management Logo" 
              className="h-8 md:h-12 w-auto brightness-0 invert"
              loading="eager"
            />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:opacity-70 transition-opacity">
                {link.name}
              </a>
            ))}
            <button onClick={openContact} className="hover:opacity-70 transition-opacity">
              Kontakt
            </button>
          </nav>
                    <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="tel:+491629570163" className="hover:opacity-70 transition-opacity p-2 -m-2 flex items-center gap-2" aria-label="Telefon">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">0162 9570163</span>
              </a>
              <a href="mailto:info@crank-facility-management.de" className="hover:opacity-70 transition-opacity p-2 -m-2" aria-label="E-Mail">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/crank.facility" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity p-2 -m-2" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <Button onClick={openContact} className="bg-white text-black hover:bg-gray-200 font-semibold px-6 min-h-[44px]">
              Unverbindliches Angebot anfordern
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-3 -m-3 z-50 flex items-center justify-center min-h-[44px] min-w-[44px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A] text-white flex flex-col animate-in fade-in duration-200">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-12 border-b border-zinc-800">
            <Link to="/" className="flex items-center gap-2 md:gap-3" onClick={() => setIsMobileMenuOpen(false)} aria-label="Zur Startseite">
              <img 
                src="https://s1.directupload.eu/images/260326/2js28sgi.webp" 
                alt="Crank Facility Management Logo" 
                className="h-8 md:h-12 w-auto brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <button 
              className="p-3 -m-3 hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
            <nav className="flex flex-col gap-6 text-xl font-medium mt-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-zinc-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button onClick={openContact} className="text-left hover:text-zinc-400 transition-colors py-2">
                Kontakt
              </button>
            </nav>
            
            <div className="mt-auto">
              <Button onClick={openContact} className="w-full bg-white text-[#1A1A1A] hover:bg-zinc-200 font-semibold py-6 text-lg mb-8 min-h-[56px]">
                Angebot anfordern
              </Button>
              
              <div className="flex justify-center gap-8 pt-8 border-t border-zinc-800 text-zinc-400">
                <a href="tel:+491629570163" className="hover:text-white transition-colors p-2 -m-2 flex items-center justify-center min-h-[44px] min-w-[44px]" aria-label="Telefon">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="mailto:info@crank-facility-management.de" className="hover:text-white transition-colors p-2 -m-2 flex items-center justify-center min-h-[44px] min-w-[44px]" aria-label="E-Mail">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/crank.facility" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 -m-2 flex items-center justify-center min-h-[44px] min-w-[44px]" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

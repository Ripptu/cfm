import { Link } from "react-router-dom";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 md:px-12 bg-[#1A1A1A] text-zinc-400 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link to="/" className="flex items-center gap-3 text-white" aria-label="Zur Startseite">
              <img 
                src="https://s1.directupload.eu/images/260326/7goxcpah.webp" 
                alt="Crank Facility Management Logo" 
                className="h-8 sm:h-10 w-auto brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6 text-zinc-400">
              <a href="tel:+491629570163" className="hover:text-white transition-colors flex items-center gap-2 p-2 -m-2 min-h-[44px]">
                <Phone className="w-4 h-4" /> 
                <span className="text-sm">0162 9570163</span>
              </a>
              <a href="mailto:info@crank-facility-management.de" className="hover:text-white transition-colors flex items-center gap-2 p-2 -m-2 min-h-[44px]">
                <Mail className="w-4 h-4" /> 
                <span className="text-sm">E-Mail senden</span>
              </a>
              <a href="https://instagram.com/crank.facility" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 p-2 -m-2 min-h-[44px]">
                <Instagram className="w-4 h-4" /> 
                <span className="text-sm">@crank.facility</span>
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8 text-sm font-medium pt-2">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs sm:text-sm text-zinc-600 pt-8 border-t border-zinc-900">
          <div className="flex flex-col gap-2">
            <p>© 2024 Crank Facility Management GmbH. Alle Rechte vorbehalten.</p>
            <p className="text-zinc-700 text-[10px] sm:text-xs max-w-2xl">Ihr Experte für professionelles Facility Management, Hausmeisterservice, Unterhaltsreinigung und Gebäudereinigung im Großraum Geretsried, Wolfratshausen, Bad Tölz und dem bayerischen Oberland.</p>
          </div>
          <p className="whitespace-nowrap">Webdesign by <a href="https://vamela.info" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-400 tracking-wider hover:text-white transition-colors">VAMELA</a></p>
        </div>
      </div>
    </footer>
  );
}

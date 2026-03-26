import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-semibold mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Zurück zur Startseite
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 font-sans">Impressum</h1>
        
        <div className="prose prose-invert max-w-none text-zinc-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Crank-Facility-Management<br />
              David Swain<br />
              Hausmeisterservice+Reinigung<br />
              Kirchplatz 10<br />
              82538 Geretsried-Gartenberg
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Kontakt</h2>
            <p>
              Telefon: 01629570163<br />
              E-Mail: david.swain91@googlemail.com<br />
              info@crank-facility-management.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
            <p>
              <strong>Name und Sitz des Versicherers:</strong><br />
              VHV Allgemeine Versicherung AG<br />
              VHV Platz 1<br />
              30177 Hannover
            </p>
            <p className="mt-2">
              <strong>Geltungsraum der Versicherung:</strong><br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
              Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zuständig ist die Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein (<a href="https://www.verbraucher-schlichter.de" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white hover:underline">https://www.verbraucher-schlichter.de</a>).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

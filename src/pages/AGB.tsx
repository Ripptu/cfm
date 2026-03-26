import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AGB() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 font-sans">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-invert max-w-none text-zinc-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">§ 1 Geltungsbereich</h2>
            <p>
              Für die Geschäftsbeziehung zwischen Crank Facility Management und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Beauftragung gültigen Fassung.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">§ 2 Vertragsschluss</h2>
            <p>
              Die Präsentation der Dienstleistungen auf der Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe eines Angebots dar. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung zustande.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">§ 3 Leistungen</h2>
            <p>
              Der Umfang der vertraglichen Leistungen ergibt sich aus der Leistungsbeschreibung im Angebot bzw. in der Auftragsbestätigung.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Datenschutz() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 font-sans">Datenschutzerklärung</h1>
        
        <div className="prose prose-invert max-w-none text-zinc-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-zinc-200 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-semibold text-zinc-200 mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

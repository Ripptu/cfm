import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-zinc-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 sm:p-6 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex-1 text-sm text-zinc-600">
          <p className="mb-2 font-semibold text-zinc-900">Wir verwenden Cookies</p>
          <p>
            Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
            Einige Cookies sind für den Betrieb der Website technisch notwendig, andere helfen uns, 
            die Website zu analysieren und zu verbessern. Weitere Informationen finden Sie in unserer{' '}
            <Link to="/datenschutz" className="text-zinc-900 underline hover:text-zinc-600 transition-colors">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Button 
            variant="outline" 
            onClick={declineCookies}
            className="w-full sm:w-auto border-zinc-300 text-zinc-700 hover:bg-zinc-100 min-h-[44px]"
          >
            Nur notwendige
          </Button>
          <Button 
            onClick={acceptCookies}
            className="w-full sm:w-auto bg-zinc-900 text-white hover:bg-zinc-800 min-h-[44px]"
          >
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}

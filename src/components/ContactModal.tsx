import { useState, useEffect } from 'react';
import { X, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('openContactModal', handleOpen);
    
    return () => {
      window.removeEventListener('openContactModal', handleOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Prevent scrolling on mobile devices
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const phoneNumber = "+491629570163";
  const emailAddress = "info@crank-facility-management.de";

  const handleWhatsApp = () => {
    const text = `Hallo Crank Facility Management,\n\nMein Name ist ${formData.name}.\n\n${formData.message}`;
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
    closeModal();
  };

  const handleEmail = () => {
    const subject = "Anfrage über Website";
    const body = `Hallo Crank Facility Management,\n\nMein Name ist ${formData.name}.\n\n${formData.message}`;
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
      >
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-1 sm:mb-2 font-sans">Kontakt aufnehmen</h2>
          <p className="text-zinc-600 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">Wie möchten Sie uns erreichen? Rufen Sie direkt an oder schreiben Sie uns eine Nachricht.</p>
          
          <a 
            href={`tel:${phoneNumber}`} 
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold py-2.5 sm:py-3 md:py-4 rounded-xl mb-4 sm:mb-6 md:mb-8 transition-colors border border-zinc-200 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Direkt anrufen: 0162 9570163
          </a>

          <div className="relative flex items-center py-2 sm:py-4 mb-2 sm:mb-4">
            <div className="flex-grow border-t border-zinc-200"></div>
            <span className="flex-shrink-0 mx-4 text-zinc-400 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider">Oder Nachricht senden</span>
            <div className="flex-grow border-t border-zinc-200"></div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-4 sm:mb-6 md:mb-8">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1">Ihr Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white text-sm sm:text-base"
                placeholder="Max Mustermann"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1">Ihre Nachricht</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all min-h-[80px] sm:min-h-[100px] md:min-h-[120px] resize-y bg-zinc-50 focus:bg-white text-sm sm:text-base"
                placeholder="Ich interessiere mich für ein Angebot bezüglich..."
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <Button 
              onClick={handleWhatsApp} 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white py-4 sm:py-5 md:py-6 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp
            </Button>
            <Button 
              onClick={handleEmail} 
              className="bg-zinc-900 hover:bg-zinc-800 text-white py-4 sm:py-5 md:py-6 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              E-Mail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

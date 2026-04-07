import { ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[600px] md:h-[700px] bg-[#1A1A1A] text-white flex items-center px-4 sm:px-6 md:px-12 pt-24 md:pt-0 pb-32 sm:pb-0">
      <div className="absolute inset-0 bg-black/60 sm:bg-black/30 z-10"></div>
      <img 
        src="https://s1.directupload.eu/images/260326/n3pxmbbj.webp" 
        alt="Modern commercial building" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
        loading="eager"
        fetchpriority="high"
      />
      <div className="relative z-20 max-w-4xl mx-auto w-full mt-10 sm:mt-0 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="https://www.google.com/search?sca_esv=3087728c2f704245&sxsrf=ANbL-n7-UU4jNPwSG66KxlQmEnzmIR47XA:1774513818905&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOT3nTACM79eZK4EuGZ4A-CxH1x3fGt_lQfT2wcaFcgO-yFW2BgLSG3_5-qyOyWkbzTQ8IpeZeLy0IHU_tHZFxGAu5Y4SlrwPSMK0UFec9fDMeM5g5w%3D%3D&q=CranK-Facility-Management+Rezensionen&sa=X&ved=2ahUKEwiqqMyOk72TAxVtVPEDHcR1ND4Q0bkNegQIHhAH&biw=1920&bih=911&dpr=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8 hover:bg-white/20 transition-all group relative"
          >
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md group-hover:bg-yellow-400/40 transition-all animate-pulse"></div>
            <div className="relative flex items-center gap-1.5 md:gap-2">
              <div className="flex text-yellow-400">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              </div>
              <span className="text-white font-semibold text-xs md:text-sm">5.0 Google Kundenbewertungen</span>
            </div>
          </a>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight font-sans"
        >
          <span className="sr-only">Facility Management, Hausmeisterservice & Gebäudereinigung in Geretsried, Wolfratshausen & Bad Tölz. </span>
          Hausmeisterservice & <br className="hidden sm:block"/>
          <span className="font-serif italic font-normal text-zinc-400">Gartenpflege</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl"
        >
          Ihr zuverlässiger Partner in Geretsried, Wolfratshausen und Umgebung.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="inline-flex items-center justify-center gap-2 text-base md:text-lg font-semibold hover:text-zinc-400 transition-colors group bg-white/10 sm:bg-transparent px-6 py-3 sm:px-0 sm:py-0 rounded-full sm:rounded-none w-full sm:w-auto backdrop-blur-sm sm:backdrop-blur-none border border-white/20 sm:border-none">
            Kostenlose Erstberatung vereinbaren 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 md:left-12 md:right-12 translate-y-1/2 z-30 max-w-5xl mx-auto"
      >
        <div className="bg-white text-zinc-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 border border-zinc-100">
          <div className="text-center py-2 sm:py-0">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-zinc-900 font-sans">15+</p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-medium">Objekte betreut</p>
          </div>
          <div className="text-center py-2 sm:py-0">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-zinc-900 font-sans">1</p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-medium">Ansprechpartner</p>
          </div>
          <div className="text-center py-2 sm:py-0">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-zinc-900 font-sans">98%</p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-medium">Zufriedenheit</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

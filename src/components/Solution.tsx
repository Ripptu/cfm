import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Solution() {
  return (
    <section id="referenzen" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-10 md:mb-16 text-center font-sans leading-tight"
        >
          So steigern wir den Wert <br className="sm:hidden" /><span className="font-serif italic font-normal text-zinc-500">Ihrer Immobilie</span>
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <Card className="p-8 sm:p-10 md:p-14 border-none shadow-2xl bg-[#1A1A1A] text-white relative overflow-hidden rounded-2xl">
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-24 h-24 md:w-32 md:h-32 text-zinc-800 opacity-30" />
              <div className="relative z-10">
                <a 
                  href="https://www.google.com/search?sca_esv=3087728c2f704245&sxsrf=ANbL-n7-UU4jNPwSG66KxlQmEnzmIR47XA:1774513818905&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOT3nTACM79eZK4EuGZ4A-CxH1x3fGt_lQfT2wcaFcgO-yFW2BgLSG3_5-qyOyWkbzTQ8IpeZeLy0IHU_tHZFxGAu5Y4SlrwPSMK0UFec9fDMeM5g5w%3D%3D&q=CranK-Facility-Management+Rezensionen&sa=X&ved=2ahUKEwiqqMyOk72TAxVtVPEDHcR1ND4Q0bkNegQIHhAH&biw=1920&bih=911&dpr=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 hover:bg-white/20 transition-all group relative"
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
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 md:mb-10 font-serif italic text-zinc-300">
                  "Crank Facility Management übernimmt die gesamte Haustechnik. Wir können uns voll auf unser Kerngeschäft konzentrieren. Effizient, pünktlich und zuverlässig."
                </p>
                <div className="mb-8 md:mb-10">
                  <p className="font-bold text-base md:text-lg font-sans">Marcus Schmidt</p>
                  <p className="text-zinc-500 text-sm md:text-base">Immobilienverwalter</p>
                </div>
                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} 
                  className="w-full sm:w-auto bg-white text-[#1A1A1A] hover:bg-zinc-200 font-semibold px-6 md:px-8 py-6 text-base md:text-lg rounded-lg shadow-md transition-all"
                >
                  Angebot anfordern
                </Button>
              </div>
            </Card>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2"
          >
            <img 
              src="https://s1.directupload.eu/images/260326/uuy34qiq.webp" 
              alt="Modern office complex" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

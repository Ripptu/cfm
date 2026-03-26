import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Solution() {
  return (
    <section id="referenzen" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 mb-10 md:mb-16 text-center font-sans leading-tight"
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
            <Card className="p-8 sm:p-10 md:p-14 border-none shadow-2xl bg-zinc-950 text-white relative overflow-hidden rounded-2xl">
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-24 h-24 md:w-32 md:h-32 text-zinc-800 opacity-30" />
              <div className="relative z-10">
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 md:mb-10 font-serif italic text-zinc-300">
                  "Crank Facility Management übernimmt die gesamte Haustechnik. Wir können uns voll auf unser Kerngeschäft konzentrieren. Effizient, pünktlich und zuverlässig."
                </p>
                <div className="mb-8 md:mb-10">
                  <p className="font-bold text-base md:text-lg font-sans">Marcus Schmidt</p>
                  <p className="text-zinc-500 text-sm md:text-base">Filialleiter einer Großbank</p>
                </div>
                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} 
                  className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-200 font-semibold px-6 md:px-8 py-6 text-base md:text-lg rounded-lg shadow-md transition-all"
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
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function FinalCTA() {
  const checks = [
    "Erfahrenes Team",
    "Maßgeschneiderte Konzepte",
    "Modernste Technik",
    "Persönlicher Ansprechpartner"
  ];

  return (
    <section id="kontakt" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-[#1A1A1A] text-white text-center scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 leading-tight font-sans"
        >
          Bereit für ein <span className="font-serif italic font-normal text-zinc-400">effizienteres</span> Immobilienmanagement?
        </motion.h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-start gap-x-8 gap-y-4 mb-10 md:mb-12">
          {checks.map((check, i) => (
            <motion.p 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-zinc-300 text-base md:text-lg font-medium"
            >
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-zinc-500" /> {check}
            </motion.p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} 
            className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-[#1A1A1A] font-bold text-base md:text-lg px-8 md:px-10 py-6 md:py-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Jetzt kostenlose Beratung anfordern
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

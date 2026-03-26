import { motion } from "motion/react";
import BentoGrid01 from "./ui/bento-grid-01";

export default function Services() {
  return (
    <section id="leistungen" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-[#1A1A1A] scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-sans leading-tight"
        >
          Facility Management <br className="md:hidden"/>
          <span className="font-serif italic font-normal text-zinc-500">für Ihren Erfolg.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-zinc-400 px-4"
        >
          Maßgeschneiderte Lösungen für den Werterhalt und die optimale Bewirtschaftung Ihrer Immobilien.
        </motion.p>
      </div>
      <BentoGrid01 />
    </section>
  );
}

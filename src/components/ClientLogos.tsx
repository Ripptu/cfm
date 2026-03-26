import { motion } from "motion/react";

export default function ClientLogos() {
  const partners = [
    "Autohaus Billion",
    "Meindl Schmidt Blasinstrumente",
    "Glashaus",
    "logixperts GmbH",
    "ATU",
    "Sto Baustoffhandel",
    "Aureon Versicherungsmakler GmbH"
  ];
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-16 px-4 md:px-12 bg-zinc-50 flex flex-col items-center overflow-hidden">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs md:text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-8 md:mb-10 text-center"
      >
        Unsere Partner in Bayern
      </motion.p>
      
      <div 
        className="relative flex overflow-hidden w-full max-w-7xl mx-auto" 
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex animate-marquee whitespace-nowrap items-center gap-12 md:gap-24 py-4">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <span 
              key={`${partner}-${index}`} 
              className="font-bold text-lg md:text-2xl font-sans tracking-wide text-zinc-400 hover:text-zinc-900 transition-colors duration-300 cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

export default function TrustedService() {
  const features = [
    { title: 'Nachhaltige Pflege', desc: 'Umweltschonende Verfahren und Materialien.' },
    { title: 'Qualitätsstandards', desc: 'Zertifizierte Prozesse für höchste Ansprüche.' },
    { title: 'Sicherheitskonzepte', desc: 'Lückenloser Schutz für Mensch und Gebäude.' },
    { title: 'Digitales Reporting', desc: 'Transparente Dokumentation in Echtzeit.' },
  ];

  return (
    <section id="ueber-uns" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-zinc-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 md:mb-12 leading-tight font-sans"
          >
            Verlässlicher Service <br/>
            <span className="font-serif italic font-normal text-zinc-500">für Ihre Bedürfnisse</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:border-zinc-300 transition-colors"
              >
                <p className="text-3xl md:text-4xl font-bold text-zinc-200 mb-3 md:mb-4 font-sans">0{index + 1}</p>
                <h3 className="font-bold text-zinc-900 mb-2 text-base md:text-lg">{feature.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[350px] sm:h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
        >
          <img 
            src="https://s1.directupload.eu/images/260326/ytpbtqku.jpg" 
            alt="Facility management technician checking electrical panel" 
            className="absolute inset-0 w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

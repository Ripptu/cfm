import { motion } from "motion/react";
import { PhoneCall, FileText, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8 text-[#1A1A1A]" />,
      title: "1. Kontakt aufnehmen",
      description: "Rufen Sie uns an oder schreiben Sie uns eine kurze Nachricht. Wir sind jederzeit für Sie erreichbar."
    },
    {
      icon: <FileText className="w-8 h-8 text-[#1A1A1A]" />,
      title: "2. Kostenloses Angebot",
      description: "Wir besichtigen Ihr Objekt und erstellen ein transparentes, maßgeschneidertes Angebot für Sie."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#1A1A1A]" />,
      title: "3. Zurücklehnen & Genießen",
      description: "Wir übernehmen das komplette Facility Management. Sie können sich voll auf Ihr Kerngeschäft konzentrieren."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 font-sans leading-tight">
            In 3 einfachen Schritten <br className="md:hidden" />
            <span className="font-serif italic font-normal text-zinc-500">zum perfekten Service</span>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg max-w-2xl mx-auto">
            So unkompliziert starten Sie mit Crank Facility Management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-zinc-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 border border-zinc-100">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

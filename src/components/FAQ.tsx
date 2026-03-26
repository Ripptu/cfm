import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "In welchen Regionen bieten Sie Facility Management an?",
      answer: "Wir sind Ihr lokaler Partner für professionelles Facility Management, Hausmeisterservice und Gebäudereinigung im bayerischen Oberland. Unser Haupteinsatzgebiet umfasst Geretsried, Wolfratshausen, Bad Tölz und die umliegenden Gemeinden. Durch unsere regionale Nähe garantieren wir schnelle Reaktionszeiten und persönliche Betreuung vor Ort."
    },
    {
      question: "Welche Leistungen umfasst Ihr Hausmeisterservice?",
      answer: "Unser Hausmeisterservice bietet eine Rundumbetreuung für Ihre Immobilie. Dazu gehören regelmäßige Objektkontrollen, Kleinreparaturen, die Überwachung der Haustechnik, Schließdienste sowie die Koordination von Handwerkern. Wir sorgen dafür, dass Ihr Gebäude in Geretsried, Wolfratshausen oder Bad Tölz stets in einem einwandfreien Zustand ist."
    },
    {
      question: "Bieten Sie auch regelmäßige Unterhaltsreinigung an?",
      answer: "Ja, die professionelle Unterhaltsreinigung ist eine unserer Kernkompetenzen. Wir reinigen Büros, Gewerbeflächen, Treppenhäuser und öffentliche Einrichtungen. Unsere geschulten Reinigungskräfte arbeiten mit umweltschonenden Reinigungsmitteln und modernster Ausrüstung, um höchste Hygienestandards zu gewährleisten."
    },
    {
      question: "Wie schnell sind Sie bei Notfällen vor Ort?",
      answer: "Da wir uns auf den Raum Geretsried, Wolfratshausen und Bad Tölz konzentrieren, sind wir bei technischen Notfällen (z.B. Heizungsausfall, Wasserschaden) in kürzester Zeit bei Ihnen. Ein fester Ansprechpartner kümmert sich umgehend um die Problemlösung und Schadensbegrenzung."
    },
    {
      question: "Betreuen Sie auch Außenanlagen und Grünflächen?",
      answer: "Selbstverständlich. Zu einem ganzheitlichen Facility Management gehört auch die Pflege der Außenanlagen. Wir übernehmen Rasenmähen, Heckenschnitt, Unkrautbeseitigung, Laubentfernung und den Winterdienst, damit Ihre Immobilie zu jeder Jahreszeit einen gepflegten Eindruck hinterlässt."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-zinc-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 font-sans leading-tight">
            Häufig gestellte <span className="font-serif italic font-normal text-zinc-500">Fragen</span>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg max-w-2xl mx-auto">
            Wissenswertes rund um unseren Hausmeisterservice und die Gebäudereinigung in Geretsried, Wolfratshausen und Bad Tölz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-zinc-100">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-zinc-100">
                <AccordionTrigger className="text-left font-semibold text-zinc-900 hover:text-zinc-600 text-base md:text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-sm md:text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "@/lib/gs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            eyebrow="Free Fire App FAQ"
            title="Everything players need to know"
            description="Clear answers about installation, features, security, and tournament access."
            align="left"
          />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-2 transition-all duration-300 hover:border-blue/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-royal/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <button
                  id={`faq-button-${index}`}
                  type="button"
                  className="relative flex w-full items-center justify-between gap-4 rounded-[1.35rem] px-5 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-base font-black uppercase tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-blue sm:text-lg">{faq.question}</span>
                  <motion.span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-blue/30 bg-blue/10 text-blue transition-colors duration-200 group-hover:bg-blue/20"
                    animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.1 : 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="faq-panel"
                >
                  <div className="px-5 pb-5 text-sm leading-7 text-white/52">{faq.answer}</div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

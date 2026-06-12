"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "@/lib/nxs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Free Fire Tournament FAQ"
          title="Everything players ask before downloading"
          description="Clear answers for installation, withdrawals, safety, and tournament access."
          align="left"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.06 }}
                className="glass-panel rounded-[1.75rem] p-2"
              >
                <button
                  id={`faq-button-${index}`}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-[1.35rem] px-5 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-base font-black uppercase tracking-[-0.01em] text-white sm:text-lg">{faq.question}</span>
                  <motion.span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan"
                    animate={{ rotate: isOpen ? 45 : 0 }}
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
                  className="faq-panel"
                >
                  <div className="px-5 pb-5 text-sm leading-7 text-white/58">{faq.answer}</div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

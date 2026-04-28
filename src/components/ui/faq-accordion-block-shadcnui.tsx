"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { CustomLandingContent } from "@/content/custom-landing";

export function FAQAccordionBlock({
  content,
}: {
  content: CustomLandingContent["faq"];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="template-faq"
      className="layout-container section-block scroll-mt-28"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4 border-white/10 bg-white/6" style={{ color: "var(--accent)" }}>
            <HelpCircle className="mr-1 h-3 w-3" />
            FAQ
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400 md:text-lg">
            {content.description}
          </p>
        </motion.div>

        <div className="space-y-4">
          {content.items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                <div
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-white/4 transition-all hover:bg-white/5"
                  style={{ borderColor: "color-mix(in srgb, var(--accent) 12%, white 10%)" }}
                >
                  <motion.button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left md:p-6"
                    whileHover={{ backgroundColor: "color-mix(in srgb, var(--accent) 4%, transparent)" }}
                  >
                    <span className="pr-4 text-base font-semibold text-white md:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 p-4 md:p-6">
                          <motion.p
                            initial={{ y: -8 }}
                            animate={{ y: 0 }}
                            className="text-sm leading-7 text-slate-400 md:text-base"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

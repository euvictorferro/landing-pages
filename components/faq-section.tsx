"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("faq.1.question"),
      answer: t("faq.1.answer"),
    },
    {
      question: t("faq.2.question"),
      answer: t("faq.2.answer"),
    },
    {
      question: t("faq.3.question"),
      answer: t("faq.3.answer"),
    },
    {
      question: t("faq.4.question"),
      answer: t("faq.4.answer"),
    },
    {
      question: t("faq.5.question"),
      answer: t("faq.5.answer"),
    },
    {
      question: t("faq.6.question"),
      answer: t("faq.6.answer"),
    },
    {
      question: t("faq.7.question"),
      answer: t("faq.7.answer"),
    },
  ]

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="gradient-text font-semibold mb-4">{t("faq.label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("faq.title")} <span className="gradient-text">{t("faq.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{t("faq.description")}</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-[#8A2BE2]/50"
            >
              <AccordionTrigger className="text-foreground text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

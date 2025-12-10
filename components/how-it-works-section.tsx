"use client"

import { MessageSquare, Search, Rocket, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function HowItWorksSection() {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: t("how.step.1.title"),
      description: t("how.step.1.description"),
    },
    {
      number: "02",
      icon: Search,
      title: t("how.step.2.title"),
      description: t("how.step.2.description"),
    },
    {
      number: "03",
      icon: Rocket,
      title: t("how.step.3.title"),
      description: t("how.step.3.description"),
    },
    {
      number: "04",
      icon: TrendingUp,
      title: t("how.step.4.title"),
      description: t("how.step.4.description"),
    },
  ]

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#007BFF]/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#007BFF] font-semibold mb-4">{t("how.label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("how.title")} <span className="gradient-text">{t("how.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("how.description")}</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#8A2BE2] via-[#007BFF] to-[#00C49A] -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-card border border-border rounded-2xl p-6 relative z-10 h-full">
                  {/* Number */}
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#007BFF]" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - links to #agendar */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-[#00C49A] hover:bg-[#00C49A]/90 text-[#151515] font-semibold text-lg px-8 py-6 glow-accent"
          >
            <a href="#agendar">{t("how.cta")}</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">{t("how.cta.description")}</p>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"
import { Crown, Gift, Target, Bot, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function PillarsSection() {
  const { t } = useLanguage()

  const pillars = [
    {
      number: "01",
      icon: Crown,
      title: t("pillars.1.title"),
      description: t("pillars.1.description"),
      color: "#8A2BE2",
      features: [
        t("pillars.1.feature.1"),
        t("pillars.1.feature.2"),
        t("pillars.1.feature.3"),
        t("pillars.1.feature.4"),
        t("pillars.1.feature.5"),
      ],
    },
    {
      number: "02",
      icon: Gift,
      title: t("pillars.2.title"),
      description: t("pillars.2.description"),
      color: "#007BFF",
      features: [
        t("pillars.2.feature.1"),
        t("pillars.2.feature.2"),
        t("pillars.2.feature.3"),
        t("pillars.2.feature.4"),
        t("pillars.2.feature.5"),
        t("pillars.2.feature.6"),
      ],
    },
    {
      number: "03",
      icon: Target,
      title: t("pillars.3.title"),
      description: t("pillars.3.description"),
      color: "#00F0FF",
      features: [
        t("pillars.3.feature.1"),
        t("pillars.3.feature.2"),
        t("pillars.3.feature.3"),
        t("pillars.3.feature.4"),
        t("pillars.3.feature.5"),
      ],
    },
    {
      number: "04",
      icon: Bot,
      title: t("pillars.4.title"),
      description: t("pillars.4.description"),
      color: "#00C49A",
      features: [
        t("pillars.4.feature.1"),
        t("pillars.4.feature.2"),
        t("pillars.4.feature.3"),
        t("pillars.4.feature.4"),
        t("pillars.4.feature.5"),
        t("pillars.4.feature.6"),
      ],
    },
  ]

  return (
    <section id="pilares" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="gradient-text font-semibold mb-4">{t("pillars.label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("pillars.title")} <span className="gradient-text">{t("pillars.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("pillars.description")}</p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-[var(--pillar-color)]/50 transition-all duration-300"
              style={{ "--pillar-color": pillar.color } as React.CSSProperties}
            >
              {/* Number Badge */}
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: pillar.color }}
              >
                {pillar.number}
              </div>

              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6 pt-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${pillar.color}20` }}
                >
                  <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {pillar.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: pillar.color }} />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#00C49A] hover:bg-[#00C49A]/90 text-[#151515] font-semibold text-lg px-8 py-6 glow-accent"
          >
            <a href="#agendar">
              {t("pillars.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

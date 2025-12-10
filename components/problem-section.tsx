"use client"

import { AlertTriangle, DollarSign, Clock, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ProblemSection() {
  const { t } = useLanguage()

  const problems = [
    {
      icon: DollarSign,
      title: t("problem.1.title"),
      description: t("problem.1.description"),
    },
    {
      icon: Users,
      title: t("problem.2.title"),
      description: t("problem.2.description"),
    },
    {
      icon: Clock,
      title: t("problem.3.title"),
      description: t("problem.3.description"),
    },
    {
      icon: AlertTriangle,
      title: t("problem.4.title"),
      description: t("problem.4.description"),
    },
  ]

  return (
    <section id="problema" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#1a1a1a_50%,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF4136] font-semibold mb-4 flex items-center justify-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            {t("problem.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("problem.title")} <span className="text-[#FF4136]">{t("problem.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("problem.description")}</p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-[#FF4136]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF4136]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF4136]/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-[#FF4136]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            {t("problem.cta")} <span className="gradient-text font-semibold">{t("problem.cta.highlight")}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

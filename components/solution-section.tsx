"use client"

import { CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function SolutionSection() {
  const { t } = useLanguage()

  const benefits = [
    t("solution.benefit.1"),
    t("solution.benefit.2"),
    t("solution.benefit.3"),
    t("solution.benefit.4"),
    t("solution.benefit.5"),
    t("solution.benefit.6"),
  ]

  const pillars = [
    { en: "Positioning", pt: "Posicionamento" },
    { en: "Offer", pt: "Oferta" },
    { en: "Traffic", pt: "Tráfego" },
    { en: "AI Sales", pt: "Vendas IA" },
  ]

  return (
    <section id="solucao" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8A2BE2]/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#00C49A] font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {t("solution.label")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("solution.title")} <span className="gradient-text">{t("solution.title.highlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">{t("solution.description")}</p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C49A] shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="gradient-bg hover:opacity-90 text-white border-0 glow-primary">
              <a href="#pilares">
                {t("solution.cta")}
                <Sparkles className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="gradient-border p-1 rounded-2xl">
              <div className="bg-card rounded-2xl p-8">
                {/* System Visualization */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#00C49A] animate-pulse" />
                      <span className="text-foreground font-medium">{t("solution.status")}</span>
                    </div>
                    <span className="text-[#00C49A] font-semibold">{t("solution.status.active")}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted text-center">
                      <p className="text-3xl font-bold gradient-text">150+</p>
                      <p className="text-sm text-muted-foreground">{t("solution.leads")}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted text-center">
                      <p className="text-3xl font-bold text-[#00C49A]">400%</p>
                      <p className="text-sm text-muted-foreground">{t("solution.efficiency")}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {pillars.map((pillar, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full gradient-bg" style={{ width: `${100 - index * 5}%` }} />
                        </div>
                        <span className="text-sm text-foreground">{pillar.en}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-[#00C49A] text-[#151515] px-4 py-2 rounded-full font-semibold text-sm">
              {t("solution.badge")}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

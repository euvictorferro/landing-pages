"use client"

import { Users, BarChart3, Globe2, Layers, Headphones, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function DifferentialsSection() {
  const { t } = useLanguage()

  const differentials = [
    {
      icon: Users,
      title: t("differentials.1.title"),
      description: t("differentials.1.description"),
    },
    {
      icon: BarChart3,
      title: t("differentials.2.title"),
      description: t("differentials.2.description"),
    },
    {
      icon: Globe2,
      title: t("differentials.3.title"),
      description: t("differentials.3.description"),
    },
    {
      icon: Layers,
      title: t("differentials.4.title"),
      description: t("differentials.4.description"),
    },
    {
      icon: Headphones,
      title: t("differentials.5.title"),
      description: t("differentials.5.description"),
    },
    {
      icon: Shield,
      title: t("differentials.6.title"),
      description: t("differentials.6.description"),
    },
  ]

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="gradient-text font-semibold mb-4">{t("differentials.label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("differentials.title")} <span className="gradient-text">{t("differentials.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("differentials.description")}
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-[#8A2BE2]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <diff.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{diff.title}</h3>
              <p className="text-muted-foreground">{diff.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#00C49A] hover:bg-[#00C49A]/90 text-[#151515] font-semibold text-lg px-8 py-6 glow-accent"
          >
            <a href="#agendar">
              {t("differentials.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

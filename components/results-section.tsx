"use client"

import {
  TrendingUp,
  Users,
  Clock,
  Zap,
  ArrowRight,
  ShieldCheck,
  Calendar,
  ThumbsUp,
  Rocket,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { TestimonialStack, type Testimonial } from "@/components/ui/glass-testimonial-swiper"

export function ResultsSection() {
  const { t, language } = useLanguage()

  const stats = [
    {
      icon: Users,
      value: t("results.stat.1.value"),
      label: t("results.stat.1.label"),
      description: t("results.stat.1.description"),
      color: "#00C49A",
    },
    {
      icon: TrendingUp,
      value: t("results.stat.2.value"),
      label: t("results.stat.2.label"),
      description: t("results.stat.2.description"),
      color: "#8A2BE2",
    },
    {
      icon: Clock,
      value: t("results.stat.3.value"),
      label: t("results.stat.3.label"),
      description: t("results.stat.3.description"),
      color: "#007BFF",
    },
    {
      icon: Zap,
      value: t("results.stat.4.value"),
      label: t("results.stat.4.label"),
      description: t("results.stat.4.description"),
      color: "#00F0FF",
    },
  ]

  const testimonialsData: Testimonial[] =
    language === "en"
      ? [
          {
            id: 1,
            initials: "MR",
            name: "Michael R.",
            role: "Life Insurance Agent • Florida",
            quote:
              "Before BoostConnect, I spent 4 hours daily on follow-ups. Now my AI agent handles everything while I focus on closing high-value policies.",
            tags: [
              { text: "FEATURED", type: "featured" },
              { text: "Insurance", type: "default" },
            ],
            stats: [
              { icon: TrendingUp, text: "7x more policies" },
              { icon: Calendar, text: "8 months client" },
            ],
            avatarGradient: "linear-gradient(135deg, #8A2BE2, #007BFF)",
          },
          {
            id: 2,
            initials: "SL",
            name: "Sarah L.",
            role: "Realtor • California",
            quote:
              "The positioning work alone transformed how clients see me. I went from competing on price to being the premium choice in my market.",
            tags: [
              { text: "Real Estate", type: "default" },
              { text: "Premium", type: "featured" },
            ],
            stats: [
              { icon: ThumbsUp, text: "$2.5M closed" },
              { icon: ShieldCheck, text: "Verified" },
            ],
            avatarGradient: "linear-gradient(135deg, #00C49A, #007BFF)",
          },
          {
            id: 3,
            initials: "JC",
            name: "James C.",
            role: "IUL Specialist • Texas",
            quote:
              "The AI qualification system filters out tire-kickers automatically. Every lead I talk to now is pre-qualified and ready to discuss serious coverage.",
            tags: [
              { text: "Insurance", type: "default" },
              { text: "IUL", type: "default" },
            ],
            stats: [
              { icon: Users, text: "150+ leads/mo" },
              { icon: Clock, text: "24/7 active" },
            ],
            avatarGradient: "linear-gradient(135deg, #007BFF, #00F0FF)",
          },
          {
            id: 4,
            initials: "AM",
            name: "Ana M.",
            role: "Realtor • New Jersey",
            quote:
              "As a Brazilian agent in the US, having bilingual support made all the difference. My campaigns speak directly to both markets I serve.",
            tags: [
              { text: "Bilingual", type: "featured" },
              { text: "Real Estate", type: "default" },
            ],
            stats: [
              { icon: Rocket, text: "3x closings" },
              { icon: Building, text: "Multi-market" },
            ],
            avatarGradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
          },
          {
            id: 5,
            initials: "DK",
            name: "David K.",
            role: "Life Insurance Agent • New York",
            quote:
              "I was skeptical about AI handling my leads, but the results speak for themselves. My conversion rate tripled in just 60 days.",
            tags: [
              { text: "Insurance", type: "default" },
              { text: "Growth", type: "featured" },
            ],
            stats: [
              { icon: TrendingUp, text: "3x conversion" },
              { icon: Calendar, text: "60 days" },
            ],
            avatarGradient: "linear-gradient(135deg, #8A2BE2, #ec4899)",
          },
        ]
      : [
          {
            id: 1,
            initials: "MR",
            name: "Michael R.",
            role: "Agente de Seguros • Florida",
            quote:
              "Antes do BoostConnect, gastava 4h por dia em follow-ups. Agora meu agente de IA cuida de tudo enquanto foco em fechar apólices.",
            tags: [
              { text: "DESTAQUE", type: "featured" },
              { text: "Seguros", type: "default" },
            ],
            stats: [
              { icon: TrendingUp, text: "7x apólices" },
              { icon: Calendar, text: "8 meses" },
            ],
            avatarGradient: "linear-gradient(135deg, #8A2BE2, #007BFF)",
          },
          {
            id: 2,
            initials: "SL",
            name: "Sarah L.",
            role: "Realtor • California",
            quote:
              "O posicionamento transformou como clientes me veem. Saí de competir por preço para ser a escolha premium.",
            tags: [
              { text: "Imóveis", type: "default" },
              { text: "Premium", type: "featured" },
            ],
            stats: [
              { icon: ThumbsUp, text: "$2.5M fechados" },
              { icon: ShieldCheck, text: "Verificado" },
            ],
            avatarGradient: "linear-gradient(135deg, #00C49A, #007BFF)",
          },
          {
            id: 3,
            initials: "JC",
            name: "James C.",
            role: "Especialista IUL • Texas",
            quote:
              "O sistema de IA filtra curiosos automaticamente. Todo lead que converso é pré-qualificado e pronto.",
            tags: [
              { text: "Seguros", type: "default" },
              { text: "IUL", type: "default" },
            ],
            stats: [
              { icon: Users, text: "150+ leads/mês" },
              { icon: Clock, text: "24/7 ativo" },
            ],
            avatarGradient: "linear-gradient(135deg, #007BFF, #00F0FF)",
          },
          {
            id: 4,
            initials: "AM",
            name: "Ana M.",
            role: "Realtor • New Jersey",
            quote:
              "Como agente brasileira nos EUA, o suporte bilíngue fez toda diferença. Minhas campanhas falam com os dois mercados.",
            tags: [
              { text: "Bilíngue", type: "featured" },
              { text: "Imóveis", type: "default" },
            ],
            stats: [
              { icon: Rocket, text: "3x fechamentos" },
              { icon: Building, text: "Multi-mercado" },
            ],
            avatarGradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
          },
          {
            id: 5,
            initials: "DK",
            name: "David K.",
            role: "Agente de Seguros • New York",
            quote:
              "Estava cético sobre IA cuidando dos leads, mas os resultados falam por si. Conversão triplicou em 60 dias.",
            tags: [
              { text: "Seguros", type: "default" },
              { text: "Crescimento", type: "featured" },
            ],
            stats: [
              { icon: TrendingUp, text: "3x conversão" },
              { icon: Calendar, text: "60 dias" },
            ],
            avatarGradient: "linear-gradient(135deg, #8A2BE2, #ec4899)",
          },
        ]

  return (
    <section id="resultados" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#1a1a1a_20%,#1a1a1a_80%,transparent)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A2BE2]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#007BFF]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00C49A] font-semibold mb-4">{t("results.label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("results.title")} <span className="gradient-text">{t("results.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("results.description")}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-2xl bg-card border border-border">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: stat.color }} />
              </div>
              <p className="text-2xl sm:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-foreground font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-2xl mx-auto mb-12 px-4">
          <TestimonialStack testimonials={testimonialsData} visibleBehind={2} />
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#00C49A] hover:bg-[#00C49A]/90 text-[#151515] font-semibold text-lg px-8 py-6 glow-accent"
          >
            <a href="#agendar">
              {t("results.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <BackgroundPaths>
      <section className="w-full pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Button
                variant="secondary"
                size="sm"
                className="gap-4 bg-[#00C49A] hover:bg-[#00C49A]/90 text-white border-0"
              >
                {t("hero.badge")} <MoveRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-bold text-balance">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 150, damping: 25 }}
                  className="inline-block text-white"
                >
                  {t("hero.title.start")}
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 25 }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#007BFF]"
                >
                  {t("hero.title.gradient")}
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-lg md:text-xl leading-relaxed tracking-tight text-white/80 max-w-3xl text-center mx-auto text-pretty"
              >
                {t("hero.description")}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                size="lg"
                className="gap-4 bg-white text-[#151515] hover:bg-white/90 border-0"
                variant="outline"
              >
                <a href="#agendar">
                  {t("hero.cta.schedule")} <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="gap-4 bg-[#00C49A] hover:bg-[#00C49A]/90 text-white">
                <a href="#solucao">
                  {t("hero.cta.how")} <MoveRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </BackgroundPaths>
  )
}

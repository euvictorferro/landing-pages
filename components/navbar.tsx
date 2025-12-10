"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/2.png" alt="Clique Boost" width={140} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#problema" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("nav.problem")}
            </Link>
            <Link href="#solucao" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("nav.solution")}
            </Link>
            <Link href="#pilares" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("nav.pillars")}
            </Link>
            <Link href="#resultados" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("nav.results")}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Globe className="w-4 h-4" />
                {language === "en" ? "EN" : "PT"}
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("pt")} className={language === "pt" ? "bg-muted" : ""}>
                  Português
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gradient-bg hover:opacity-90 text-white border-0">
              <a href="#agendar">{t("nav.cta")}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#problema"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.problem")}
              </Link>
              <Link
                href="#solucao"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.solution")}
              </Link>
              <Link
                href="#pilares"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.pillars")}
              </Link>
              <Link
                href="#resultados"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.results")}
              </Link>
              <div className="flex items-center gap-2 py-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-sm ${language === "en" ? "text-foreground font-medium" : "text-muted-foreground"}`}
                >
                  EN
                </button>
                <span className="text-muted-foreground">|</span>
                <button
                  onClick={() => setLanguage("pt")}
                  className={`text-sm ${language === "pt" ? "text-foreground font-medium" : "text-muted-foreground"}`}
                >
                  PT
                </button>
              </div>
              <Button asChild className="gradient-bg hover:opacity-90 text-white border-0 w-full mt-2">
                <a href="#agendar">{t("nav.cta")}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

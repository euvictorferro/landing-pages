"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/2.png" alt="Clique Boost" width={160} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">{t("footer.description")}</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cliqueboost/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#8A2BE2]/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@CliqueBoost"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#8A2BE2]/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/104062795"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#8A2BE2]/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">{t("footer.links")}</h3>
            <div className="space-y-3">
              <Link href="#solucao" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.solution")}
              </Link>
              <Link href="#pilares" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.pillars")}
              </Link>
              <Link href="#resultados" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.results")}
              </Link>
              <Link href="#agendar" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.cta")}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <a
                href="tel:+12398214737"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (239) 821-4737
              </a>
              <a
                href="mailto:contato@cliqueboost.io"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@cliqueboost.io
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
          <p className="text-sm text-muted-foreground">{t("footer.market")}</p>
        </div>
      </div>
    </footer>
  )
}

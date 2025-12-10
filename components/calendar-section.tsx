"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"

const dayNames = {
  en: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  pt: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
}

const CalendarDay: React.FC<{
  day: number | string
  isHeader?: boolean
  isHighlighted?: boolean
  isPast?: boolean
}> = ({ day, isHeader, isHighlighted, isPast }) => {
  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded-xl"
      } ${isHighlighted ? "bg-gradient-to-r from-[#8A2BE2] to-[#007BFF] text-white" : ""} ${
        isPast ? "text-muted-foreground/30 cursor-not-allowed" : "text-muted-foreground"
      }`}
    >
      <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>{day}</span>
    </div>
  )
}

const translations = {
  en: {
    badge: "Schedule Your Consultation",
    title: "Ready to Transform Your Results?",
    subtitle:
      "Book a free 30-minute consultation to analyze your current situation and discover growth opportunities. No sales pitch — just valuable insights tailored to your business.",
    callDuration: "30 min consultation",
    instruction: "Choose the best day and time on the calendar so we can talk.",
  },
  pt: {
    badge: "Agende Sua Consultoria",
    title: "Pronto Para Transformar Seus Resultados?",
    subtitle:
      "Agende uma consultoria gratuita de 30 minutos para analisar sua situação atual e descobrir oportunidades de crescimento. Sem vendas — apenas insights valiosos para o seu negócio.",
    callDuration: "Consultoria de 30 min",
    instruction: "Escolha no calendário o melhor dia e horário para conversarmos.",
  },
}

const highlightedDays = [12, 13, 16, 17, 18, 19, 20]

export function CalendarSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.toLocaleString(language === "pt" ? "pt-BR" : "en-US", {
    month: "long",
  })
  const currentYear = currentDate.getFullYear()
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate()

  const bookingLink = "https://cal.com/cliqueboost"

  const renderCalendarDays = () => {
    const days: React.ReactNode[] = [
      ...dayNames[language].map((day) => <CalendarDay key={`header-${day}`} day={day} isHeader />),
      ...Array(firstDayOfWeek)
        .fill(null)
        .map((_, i) => <div key={`empty-start-${i}`} className="col-span-1 row-span-1 h-8 w-8" />),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => {
          const dayNumber = i + 1
          const isPast = dayNumber < currentDay
          const isHighlighted = !isPast && highlightedDays.includes(dayNumber)
          return <CalendarDay key={`date-${dayNumber}`} day={dayNumber} isHighlighted={isHighlighted} isPast={isPast} />
        }),
    ]

    return days
  }

  return (
    <section id="agendar" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 mb-6">
              <span className="text-sm font-medium text-[#8A2BE2]">{t.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{t.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">{t.subtitle}</p>
            <p className="text-lg text-[#00C49A] font-semibold">{t.instruction}</p>
          </div>

          {/* Right side - Calendar */}
          <div className="flex-1 w-full max-w-md">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="rounded-[24px] border border-border p-2 transition-colors duration-300 group-hover:border-[#8A2BE2]/50 bg-card">
                <div
                  className="rounded-2xl border-2 border-[#A5AEB81F]/10 p-4"
                  style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-foreground capitalize">
                      {currentMonth}, {currentYear}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.callDuration}</p>
                  </div>
                  <div className="grid grid-cols-7 gap-2 px-2">{renderCalendarDays()}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

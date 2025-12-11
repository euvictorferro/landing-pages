"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { createClient } from "@/lib/supabase/client"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Check, Loader2, CalendarPlus } from "lucide-react"

const dayNames = {
  en: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  pt: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
}

const monthNames = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  pt: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
}

const translations = {
  en: {
    badge: "Schedule Your Consultation",
    title: "Ready to Transform Your Results?",
    subtitle:
      "Book a free 30-minute consultation to analyze your current situation and discover growth opportunities. No sales pitch — just valuable insights tailored to your business.",
    callDuration: "30 min consultation",
    instruction: "Choose the best day and time on the calendar so we can talk.",
    selectTime: "Select a Time",
    availableSlots: "Available slots",
    continue: "Continue",
    back: "Back",
    confirmBooking: "Confirm Booking",
    yourDetails: "Your Details",
    selectedDateTime: "Selected date & time",
    namePlaceholder: "Full name",
    phonePlaceholder: "Phone/WhatsApp",
    emailPlaceholder: "Email address",
    messagePlaceholder: "Any message for us? (optional)",
    nameRequired: "Name is required",
    phoneRequired: "Phone is required",
    emailRequired: "Email is required",
    successTitle: "Booking Confirmed!",
    successSubtitle: "Your consultation is scheduled for",
    at: "at",
    nextSteps: "What happens next:",
    step1: "Confirmation email sent to your inbox",
    step2: "Calendar invite added to your schedule",
    step3: "WhatsApp reminder message",
    step4: "24-hour reminder before the call",
    newBooking: "Schedule another consultation",
    addToCalendar: "Add to Calendar",
    december: "December",
  },
  pt: {
    badge: "Agende Sua Consultoria",
    title: "Pronto Para Transformar Seus Resultados?",
    subtitle:
      "Agende uma consultoria gratuita de 30 minutos para analisar sua situação atual e descobrir oportunidades de crescimento. Sem vendas — apenas insights valiosos para o seu negócio.",
    callDuration: "Consultoria de 30 min",
    instruction: "Escolha no calendário o melhor dia e horário para conversarmos.",
    selectTime: "Selecione um Horário",
    availableSlots: "Horários disponíveis",
    continue: "Continuar",
    back: "Voltar",
    confirmBooking: "Confirmar Agendamento",
    yourDetails: "Seus Dados",
    selectedDateTime: "Data e hora selecionadas",
    namePlaceholder: "Nome completo",
    phonePlaceholder: "Telefone/WhatsApp",
    emailPlaceholder: "Endereço de e-mail",
    messagePlaceholder: "Alguma mensagem para nós? (opcional)",
    nameRequired: "Nome é obrigatório",
    phoneRequired: "Telefone é obrigatório",
    emailRequired: "E-mail é obrigatório",
    successTitle: "Agendamento Confirmado!",
    successSubtitle: "Sua consultoria está agendada para",
    at: "às",
    nextSteps: "O que acontece agora:",
    step1: "E-mail de confirmação enviado",
    step2: "Evento adicionado à sua agenda",
    step3: "Mensagem de lembrete no WhatsApp",
    step4: "Lembrete 24 horas antes da chamada",
    newBooking: "Agendar outra consultoria",
    addToCalendar: "Adicionar à Agenda",
    december: "Dezembro",
  },
}

const availableTimes = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"]

const highlightedDays = [12, 13, 16, 17, 18, 19, 20, 23, 24, 26, 27, 30]

type Step = "calendar" | "form" | "success"

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

export function CalendarSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const [currentStep, setCurrentStep] = useState<Step>("calendar")
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const formatTime = (time: string) => {
    if (language === "pt") {
      // PT uses 24h format
      return time
    }
    // EN uses 12h AM/PM format
    const [hours, minutes] = time.split(":")
    const h = Number.parseInt(hours)
    const suffix = h >= 12 ? "PM" : "AM"
    const hour12 = h % 12 || 12
    return `${hour12}:${minutes} ${suffix}`
  }

  const handleDayClick = (day: number) => {
    const isPast = day < currentDay
    const isAvailable = highlightedDays.includes(day)
    if (!isPast && isAvailable) {
      setSelectedDate(day)
      setSelectedTime(null)
    }
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
  }

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep("form")
    }
  }

  const handleBack = () => {
    if (currentStep === "form") {
      setCurrentStep("calendar")
    }
  }

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = t.nameRequired
    if (!formData.phone.trim()) newErrors.phone = t.phoneRequired
    if (!formData.email.trim()) newErrors.email = t.emailRequired
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const supabase = createClient()

      const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`

      const { error } = await supabase.from("agendamentos").insert({
        nome: formData.name,
        telefone: formData.phone,
        email: formData.email,
        mensagem: formData.message || null,
        data_agendamento: formattedDate,
        hora_agendamento: selectedTime,
        status: "pendente",
      })

      if (error) throw error

      setCurrentStep("success")
    } catch (error) {
      console.error("Error submitting booking:", error)
      setSubmitError(
        language === "pt"
          ? "Erro ao enviar agendamento. Tente novamente."
          : "Error submitting booking. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderCalendarDays = () => {
    const days: React.ReactNode[] = []

    dayNames[language].forEach((day) => {
      days.push(
        <div key={`header-${day}`} className="flex h-8 w-8 items-center justify-center">
          <span className="text-xs font-medium text-muted-foreground">{day}</span>
        </div>,
      )
    })

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-start-${i}`} className="h-8 w-8" />)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isPast = i < currentDay
      const isAvailable = highlightedDays.includes(i)
      const isSelected = selectedDate === i

      days.push(
        <button
          key={`date-${i}`}
          onClick={() => handleDayClick(i)}
          disabled={isPast || !isAvailable}
          className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-all ${
            isSelected
              ? "bg-gradient-to-r from-[#8A2BE2] to-[#007BFF] text-white"
              : isAvailable
                ? "text-foreground hover:bg-[#8A2BE2]/20 cursor-pointer"
                : isPast
                  ? "text-muted-foreground/30 cursor-not-allowed"
                  : "text-muted-foreground/50 cursor-not-allowed"
          }`}
        >
          {i}
        </button>,
      )
    }

    return days
  }

  const renderCalendarStep = () => (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <div className="rounded-[24px] border border-border p-2 bg-card">
          <div
            className="rounded-2xl border-2 border-[#A5AEB81F]/10 p-4"
            style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-foreground capitalize">
                {monthNames[language][currentMonth]}, {currentYear}
              </p>
              <p className="text-xs text-muted-foreground">{t.callDuration}</p>
            </div>
            <div className="grid grid-cols-7 gap-2 px-2">{renderCalendarDays()}</div>
          </div>
        </div>
      </div>

      {selectedDate && (
        <div className="flex-1 lg:max-w-[280px]">
          <div className="rounded-[24px] border border-border p-4 bg-card h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">{t.selectTime}</h3>
              <span className="text-xs px-2 py-1 rounded-md bg-[#8A2BE2]/10 text-[#8A2BE2]">
                {language === "pt" ? "24h" : "AM/PM"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{t.availableSlots}</p>
            <div className="grid grid-cols-2 gap-2 max-h-[240px] overflow-y-auto pr-1">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTime === time
                      ? "bg-gradient-to-r from-[#8A2BE2] to-[#007BFF] text-white"
                      : "bg-[#1a1a1a] text-foreground hover:bg-[#8A2BE2]/20"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${selectedTime === time ? "bg-white" : "bg-[#00C49A]"}`} />
                  {formatTime(time)}
                  {selectedTime === time && <Check className="w-3 h-3 ml-auto" />}
                </button>
              ))}
            </div>
            <button
              onClick={handleContinue}
              disabled={!selectedTime}
              className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                selectedTime
                  ? "bg-[#00C49A] text-[#151515] hover:bg-[#00C49A]/90"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              {t.continue}
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const renderFormStep = () => (
    <div className="max-w-md mx-auto">
      <div className="rounded-[24px] border border-border p-6 bg-card">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 mb-6">
          <Calendar className="w-4 h-4 text-[#8A2BE2]" />
          <span className="text-sm text-[#8A2BE2]">
            {selectedDate} {monthNames[language][currentMonth]}
          </span>
          <Clock className="w-4 h-4 text-[#8A2BE2] ml-2" />
          <span className="text-sm text-[#8A2BE2]">{formatTime(selectedTime || "")}</span>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-4">{t.yourDetails}</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.namePlaceholder}
                disabled={isSubmitting}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1a1a1a] border ${
                  errors.name ? "border-red-500" : "border-border"
                } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#8A2BE2] transition-colors disabled:opacity-50`}
              />
            </div>
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t.phonePlaceholder}
                disabled={isSubmitting}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1a1a1a] border ${
                  errors.phone ? "border-red-500" : "border-border"
                } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#8A2BE2] transition-colors disabled:opacity-50`}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.emailPlaceholder}
                disabled={isSubmitting}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#1a1a1a] border ${
                  errors.email ? "border-red-500" : "border-border"
                } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#8A2BE2] transition-colors disabled:opacity-50`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.messagePlaceholder}
                rows={3}
                disabled={isSubmitting}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1a1a1a] border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#8A2BE2] transition-colors resize-none disabled:opacity-50"
              />
            </div>
          </div>

          {submitError && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="text-sm text-red-500">{submitError}</p>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              className="flex-1 py-3 rounded-xl font-semibold text-sm border border-border text-foreground hover:bg-muted transition-colors disabled:opacity-50"
            >
              {t.back}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 rounded-xl font-semibold text-sm bg-[#00C49A] text-[#151515] hover:bg-[#00C49A]/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {language === "pt" ? "Enviando..." : "Submitting..."}
                </>
              ) : (
                t.confirmBooking
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  const generateCalendarLink = () => {
    if (!selectedDate || !selectedTime) return "#"

    const [hours, minutes] = selectedTime.split(":")
    const startDate = new Date(
      currentYear,
      currentMonth,
      selectedDate,
      Number.parseInt(hours),
      Number.parseInt(minutes),
    )
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000) // 30 minutes later

    const formatDateForCalendar = (date: Date) => {
      return date
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "")
    }

    const title = encodeURIComponent(language === "pt" ? "Consultoria CliqueBoost" : "CliqueBoost Consultation")
    const details = encodeURIComponent(
      language === "pt"
        ? "Consultoria gratuita de 30 minutos com a equipe CliqueBoost para analisar oportunidades de crescimento para o seu negócio."
        : "Free 30-minute consultation with the CliqueBoost team to analyze growth opportunities for your business.",
    )
    const location = encodeURIComponent("Online (link will be sent via email)")

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&details=${details}&location=${location}`
  }

  const renderSuccessStep = () => (
    <div className="max-w-md mx-auto text-center">
      <div className="rounded-[24px] border border-border p-8 bg-card">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00C49A]/20 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#00C49A] flex items-center justify-center">
            <Check className="w-8 h-8 text-[#151515]" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-2">{t.successTitle} 🎉</h3>
        <p className="text-muted-foreground mb-6">
          {t.successSubtitle} {selectedDate} {language === "pt" ? "de" : ""} {monthNames[language][currentMonth]} {t.at}{" "}
          {formatTime(selectedTime || "")}
        </p>

        <div className="bg-[#1a1a1a] rounded-xl p-4 mb-6 text-left">
          <h4 className="text-sm font-semibold text-foreground mb-3">{t.nextSteps}</h4>
          <ul className="space-y-2">
            {[t.step1, t.step2, t.step3, t.step4].map((step, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-[#8A2BE2]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#8A2BE2]" />
                </div>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={generateCalendarLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mb-4 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#8A2BE2] to-[#007BFF] text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <CalendarPlus className="w-4 h-4" />
          {t.addToCalendar}
        </a>

        <button onClick={() => setCurrentStep("calendar")} className="text-sm text-[#8A2BE2] hover:underline">
          {t.newBooking}
        </button>
      </div>
    </div>
  )

  return (
    <section id="agendar" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 mb-6">
              <span className="text-sm font-medium text-[#8A2BE2]">{t.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{t.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">{t.subtitle}</p>
            <p className="text-lg text-[#00C49A] font-semibold">{t.instruction}</p>
          </div>

          <div className="flex-1 w-full">
            {currentStep === "calendar" && renderCalendarStep()}
            {currentStep === "form" && renderFormStep()}
            {currentStep === "success" && renderSuccessStep()}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback, type CSSProperties } from "react"

export interface Testimonial {
  id: string | number
  initials: string
  name: string
  role: string
  quote: string
  tags: { text: string; type: "featured" | "default" }[]
  stats: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string }[]
  avatarGradient: string
}

export interface TestimonialStackProps {
  testimonials: Testimonial[]
  visibleBehind?: number
}

export const TestimonialStack = ({ testimonials, visibleBehind = 2 }: TestimonialStackProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStartRef = useRef(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const totalCards = testimonials.length

  const navigate = useCallback(
    (newIndex: number) => {
      setActiveIndex((newIndex + totalCards) % totalCards)
    },
    [totalCards],
  )

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, index: number) => {
    if (index !== activeIndex) return
    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    dragStartRef.current = clientX
    cardRefs.current[activeIndex]?.classList.add("is-dragging")
  }

  const handleDragMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      setDragOffset(clientX - dragStartRef.current)
    },
    [isDragging],
  )

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return
    cardRefs.current[activeIndex]?.classList.remove("is-dragging")
    if (Math.abs(dragOffset) > 50) {
      navigate(activeIndex + (dragOffset < 0 ? 1 : -1))
    }
    setIsDragging(false)
    setDragOffset(0)
  }, [isDragging, dragOffset, activeIndex, navigate])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove)
      window.addEventListener("touchmove", handleDragMove)
      window.addEventListener("mouseup", handleDragEnd)
      window.addEventListener("touchend", handleDragEnd)
    }
    return () => {
      window.removeEventListener("mousemove", handleDragMove)
      window.removeEventListener("touchmove", handleDragMove)
      window.removeEventListener("mouseup", handleDragEnd)
      window.removeEventListener("touchend", handleDragEnd)
    }
  }, [isDragging, handleDragMove, handleDragEnd])

  if (!testimonials?.length) return null

  return (
    <section className="testimonials-stack relative pb-10 overflow-hidden max-w-full">
      {testimonials.map((testimonial, index) => {
        const displayOrder = (index - activeIndex + totalCards) % totalCards

        const style: CSSProperties = {}
        if (displayOrder === 0) {
          style.transform = dragOffset !== 0 ? `translateX(${dragOffset}px)` : undefined
          style.opacity = 1
          style.zIndex = totalCards
        } else if (displayOrder <= visibleBehind) {
          const scale = 1 - 0.05 * displayOrder
          const translateY = -2 * displayOrder
          style.transform = `scale(${scale}) translateY(${translateY}rem)`
          style.opacity = 1 - 0.2 * displayOrder
          style.zIndex = totalCards - displayOrder
        } else {
          style.transform = "scale(0)"
          style.opacity = 0
          style.zIndex = 0
        }

        const tagClasses = (type: "featured" | "default") =>
          type === "featured"
            ? "bg-[#8A2BE2]/20 text-[#8A2BE2] border border-[#8A2BE2]/30"
            : "bg-[#151515] text-muted-foreground border border-border"

        return (
          <div
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            key={testimonial.id}
            className="testimonial-card glass-effect backdrop-blur-xl"
            style={style}
            onMouseDown={(e) => handleDragStart(e, index)}
            onTouchStart={(e) => handleDragStart(e, index)}
          >
            <div className="p-4 sm:p-6 md:p-8 overflow-hidden">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white font-semibold text-sm sm:text-base"
                    style={{ background: testimonial.avatarGradient }}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-foreground font-medium text-base sm:text-lg truncate">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="text-foreground/90 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-border pt-3 sm:pt-4 gap-3 sm:gap-4">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {testimonial.tags.map((tag, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded-md whitespace-nowrap ${tagClasses(tag.type)}`}>
                      {tag.text}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
                  {testimonial.stats.map((stat, i) => {
                    const IconComponent = stat.icon
                    return (
                      <span key={i} className="flex items-center whitespace-nowrap">
                        <IconComponent className="mr-1 sm:mr-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                        {stat.text}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <div className="pagination flex gap-2 justify-center absolute bottom-0 left-0 right-0">
        {testimonials.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to testimonial ${index + 1}`}
            onClick={() => navigate(index)}
            className={`pagination-dot ${activeIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  )
}

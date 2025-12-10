"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.problem": "The Problem",
    "nav.solution": "Solution",
    "nav.pillars": "4 Pillars",
    "nav.results": "Results",
    "nav.cta": "Book Free Consultation",

    // Hero
    "hero.badge": "From 0 to 150 leads in 30 days",
    "hero.title.start": "Integrated Marketing That",
    "hero.title.gradient": "Actually Converts",
    "hero.description":
      "The only system that connects positioning, traffic, and AI to generate qualified clients while you focus on what really matters.",
    "hero.cta.schedule": "Schedule Consultation",
    "hero.cta.how": "See How It Works",

    // Problem Section
    "problem.label": "THE PROBLEM",
    "problem.title": "Disconnected Marketing is",
    "problem.title.highlight": "Costing You Clients",
    "problem.description":
      "Most agents invest in fragmented marketing that doesn't work together. The result? Wasted budget and missed opportunities.",
    "problem.1.title": "Wasted Marketing Budget",
    "problem.1.description": "Your ads, posts, and campaigns don't connect. Scattered efforts lead to lost ROI.",
    "problem.2.title": "Unqualified Leads",
    "problem.2.description": "You get contacts who aren't ready to buy. Time wasted on dead-end conversations.",
    "problem.3.title": "Manual Follow-up Overload",
    "problem.3.description":
      "Hours spent on calls and messages while hot leads go cold. Opportunities slip away daily.",
    "problem.4.title": "No Authority Positioning",
    "problem.4.description":
      "Without a clear brand, you blend in. Premium clients choose the expert, not the generic agent.",
    "problem.cta": "Sound familiar?",
    "problem.cta.highlight": "There's a better way.",

    // Solution Section
    "solution.label": "THE SOLUTION",
    "solution.title": "Introducing",
    "solution.title.highlight": "BoostConnect",
    "solution.description":
      "A complete marketing system combining authority positioning, irresistible offers, qualified traffic, and AI automation — working together to turn strangers into high-value clients.",
    "solution.benefit.1": "Complete system, not isolated services",
    "solution.benefit.2": "AI agents working 24/7",
    "solution.benefit.3": "Qualified leads on autopilot",
    "solution.benefit.4": "Authority positioning for premium clients",
    "solution.benefit.5": "Real-time performance dashboard",
    "solution.benefit.6": "Bilingual support (English & Portuguese)",
    "solution.cta": "Discover the 4 Pillars",
    "solution.status": "System Status",
    "solution.status.active": "Active 24/7",
    "solution.leads": "Leads/Month",
    "solution.efficiency": "Efficiency Gain",
    "solution.badge": "100% Integrated",

    // Pillars Section
    "pillars.label": "THE 4 PILLARS",
    "pillars.title": "The Complete",
    "pillars.title.highlight": "BoostConnect System",
    "pillars.description":
      "Each pillar works in harmony. This is what makes BoostConnect different — not a collection of services, but a unified growth engine.",
    "pillars.cta": "Schedule Your Free Consultation",
    "pillars.1.title": "Authority Positioning",
    "pillars.1.description": "Establish yourself as the go-to expert with a powerful brand identity.",
    "pillars.1.feature.1": "Professional visual identity",
    "pillars.1.feature.2": "Strategic branding & naming",
    "pillars.1.feature.3": "High-converting website",
    "pillars.1.feature.4": "Strategic social media presence",
    "pillars.1.feature.5": "Complete diagnosis & benchmarking",
    "pillars.2.title": "Irresistible Offer",
    "pillars.2.description": "Craft offers that resonate emotionally and make prospects say 'yes' instantly.",
    "pillars.2.feature.1": "Main offer structuring",
    "pillars.2.feature.2": "Ideal client pain analysis",
    "pillars.2.feature.3": "Emotion-focused copywriting",
    "pillars.2.feature.4": "Unique ad positioning",
    "pillars.2.feature.5": "Insurance: family protection & legacy",
    "pillars.2.feature.6": "Realtors: dream realization & investment",
    "pillars.3.title": "Qualified Traffic",
    "pillars.3.description": "Attract the right prospects through intelligent multi-platform campaigns.",
    "pillars.3.feature.1": "Smart segmentation by ideal profile",
    "pillars.3.feature.2": "Multi-platform: Google, Meta, LinkedIn",
    "pillars.3.feature.3": "Personalized creative ads",
    "pillars.3.feature.4": "Automated lead qualification",
    "pillars.3.feature.5": "Real-time reporting & management",
    "pillars.4.title": "AI-Automated Sales",
    "pillars.4.description": "AI agents capture, qualify, and close deals while you focus on what really matters.",
    "pillars.4.feature.1": "SDR AI: Captures & pre-qualifies 24/7",
    "pillars.4.feature.2": "Closer AI: Presents offers & closes",
    "pillars.4.feature.3": "Follow-up AI: Continuous reactivation",
    "pillars.4.feature.4": "Integrated CRM with automations",
    "pillars.4.feature.5": "Custom scripts per funnel stage",
    "pillars.4.feature.6": "Complete team training",

    // Results Section
    "results.label": "PROVEN RESULTS",
    "results.title": "Real Numbers,",
    "results.title.highlight": "Real Impact",
    "results.description": "Our clients don't just see improvement — they experience transformation.",
    "results.cta": "Get These Results",
    "results.stat.1.value": "150+",
    "results.stat.1.label": "Qualified Leads",
    "results.stat.1.description": "In just 30 days",
    "results.stat.2.value": "+400%",
    "results.stat.2.label": "Efficiency Increase",
    "results.stat.2.description": "In lead qualification",
    "results.stat.3.value": "24/7",
    "results.stat.3.label": "AI Agents Active",
    "results.stat.3.description": "Working non-stop",
    "results.stat.4.value": "3x",
    "results.stat.4.label": "Conversion Rate",
    "results.stat.4.description": "vs traditional methods",
    "results.testimonial.result": "Result:",

    // Differentials Section
    "differentials.label": "WHY CLIQUE BOOST",
    "differentials.title": "What Makes Us",
    "differentials.title.highlight": "Different",
    "differentials.description":
      "Not just another agency. Your growth partner with a system built for financial agents and realtors in the US market.",
    "differentials.cta": "Start Your Transformation",
    "differentials.1.title": "Human + AI Team",
    "differentials.1.description": "Strategic human expertise combined with tireless AI automation.",
    "differentials.2.title": "Real-Time Dashboard",
    "differentials.2.description": "Track every metric. Know exactly where your leads are and how campaigns perform.",
    "differentials.3.title": "US Market Specialists",
    "differentials.3.description": "Deep expertise in American financial and real estate markets.",
    "differentials.4.title": "100% Integrated System",
    "differentials.4.description": "Every pillar works together as one unified growth machine.",
    "differentials.5.title": "Bilingual Support",
    "differentials.5.description": "Full support in English and Portuguese.",
    "differentials.6.title": "Compliance-Ready",
    "differentials.6.description": "All campaigns designed with industry compliance in mind.",

    // How It Works Section
    "how.label": "HOW IT WORKS",
    "how.title": "Your Path to",
    "how.title.highlight": "Automated Growth",
    "how.description": "Getting started is simple. Here's what happens when you partner with Clique Boost.",
    "how.cta": "Start with a Free Consultation",
    "how.cta.description": "No commitment required. Let's talk about your goals.",
    "how.step.1.title": "Free Strategy Consultation",
    "how.step.1.description":
      "We start with a 30-minute consultation to understand your goals, challenges, and ideal client profile. No sales pitch — just insights.",
    "how.step.2.title": "Complete Diagnosis",
    "how.step.2.description":
      "Our team analyzes your positioning, market, and competitors to create your custom strategy.",
    "how.step.3.title": "System Implementation",
    "how.step.3.description":
      "We build and deploy all 4 pillars: positioning, offer, traffic campaigns, and AI sales automation.",
    "how.step.4.title": "Optimization & Growth",
    "how.step.4.description":
      "Continuous monitoring, A/B testing, and optimization to maximize results month over month.",

    // FAQ Section
    "faq.label": "FAQ",
    "faq.title": "Common",
    "faq.title.highlight": "Questions",
    "faq.description": "Got questions? We've got answers. Don't see yours? Just ask in your free consultation.",
    "faq.1.question": "How long until I see results?",
    "faq.1.answer":
      "Most clients see qualified leads within 2-3 weeks. Full optimization takes 60-90 days for peak performance, but AI agents start working 24/7 from day one.",
    "faq.2.question": "Do I need technical knowledge?",
    "faq.2.answer":
      "Not at all. We handle everything technical — from website to AI setup. You focus on closing deals. We provide simple dashboards and regular reports.",
    "faq.3.question": "Is this only for US agents?",
    "faq.3.answer":
      "Yes, BoostConnect is designed for the US market — optimized for American regulations, consumer behavior, and ad platforms. We serve American-born and Brazilian agents in the USA.",
    "faq.4.question": "How is your AI different from chatbots?",
    "faq.4.answer":
      "Our AI agents are trained for insurance and real estate. They qualify leads, handle objections, schedule appointments, and follow up strategically — like a team of SDRs working 24/7.",
    "faq.5.question": "Can I cancel anytime?",
    "faq.5.answer":
      "Yes, for Starter and Pro plans you can cancel anytime with 7 days notice before your contract renewal date. For Growth and Business plans, the minimum commitment is 3 months.",
    "faq.6.question": "Do you work with other niches?",
    "faq.6.answer":
      "Our focus is exclusively life insurance agents (including IUL) and realtors in the US. This specialization delivers better results than generalist agencies.",
    "faq.7.question": "What's included in the free consultation?",
    "faq.7.answer":
      "In our 30-minute consultation, we'll analyze your current marketing, identify opportunities, and show how BoostConnect can help. No pressure, no sales pitch if it's not the right fit — just valuable insights.",

    // Footer
    "footer.description":
      "Transforming insurance agents and realtors into authorities who attract high-value clients on autopilot.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "© 2025 Clique Boost. All rights reserved.",
    "footer.market": "Specialized in the US Market • Atendimento em Português",
  },
  pt: {
    // Navbar
    "nav.problem": "O Problema",
    "nav.solution": "Solução",
    "nav.pillars": "4 Pilares",
    "nav.results": "Resultados",
    "nav.cta": "Agendar Consultoria Grátis",

    // Hero
    "hero.badge": "De 0 a 150 leads em 30 dias",
    "hero.title.start": "Marketing Integrado Que",
    "hero.title.gradient": "Realmente Converte",
    "hero.description":
      "O único sistema que conecta posicionamento, tráfego e IA para gerar clientes qualificados enquanto você foca no que realmente importa.",
    "hero.cta.schedule": "Agendar Consultoria",
    "hero.cta.how": "Ver Como Funciona",

    // Problem Section
    "problem.label": "O PROBLEMA",
    "problem.title": "Marketing Desconectado Está",
    "problem.title.highlight": "Custando Seus Clientes",
    "problem.description":
      "A maioria dos agentes investe em marketing fragmentado que não funciona junto. Resultado? Orçamento desperdiçado e oportunidades perdidas.",
    "problem.1.title": "Orçamento Desperdiçado",
    "problem.1.description":
      "Seus anúncios, posts e campanhas não se conectam. Esforços dispersos levam a ROI perdido.",
    "problem.2.title": "Leads Não Qualificados",
    "problem.2.description":
      "Você recebe contatos que não estão prontos para comprar. Tempo perdido em conversas sem futuro.",
    "problem.3.title": "Sobrecarga de Follow-up",
    "problem.3.description":
      "Horas em ligações e mensagens enquanto leads quentes esfriam. Oportunidades escapam diariamente.",
    "problem.4.title": "Sem Posicionamento de Autoridade",
    "problem.4.description": "Sem marca clara, você se mistura na multidão. Clientes premium escolhem o especialista.",
    "problem.cta": "Parece familiar?",
    "problem.cta.highlight": "Existe um caminho melhor.",

    // Solution Section
    "solution.label": "A SOLUÇÃO",
    "solution.title": "Apresentamos o",
    "solution.title.highlight": "BoostConnect",
    "solution.description":
      "Um sistema completo combinando posicionamento de autoridade, ofertas irresistíveis, tráfego qualificado e automação por IA — trabalhando juntos para transformar desconhecidos em clientes de alto valor.",
    "solution.benefit.1": "Sistema completo, não serviços isolados",
    "solution.benefit.2": "Agentes de IA trabalhando 24/7",
    "solution.benefit.3": "Leads qualificados no piloto automático",
    "solution.benefit.4": "Posicionamento de autoridade para clientes premium",
    "solution.benefit.5": "Dashboard de performance em tempo real",
    "solution.benefit.6": "Suporte bilíngue (Inglês e Português)",
    "solution.cta": "Descubra os 4 Pilares",
    "solution.status": "Status do Sistema",
    "solution.status.active": "Ativo 24/7",
    "solution.leads": "Leads/Mês",
    "solution.efficiency": "Ganho de Eficiência",
    "solution.badge": "100% Integrado",

    // Pillars Section
    "pillars.label": "OS 4 PILARES",
    "pillars.title": "O Sistema",
    "pillars.title.highlight": "BoostConnect Completo",
    "pillars.description":
      "Cada pilar trabalha em harmonia. Isso torna o BoostConnect diferente — não uma coleção de serviços, mas um motor de crescimento unificado.",
    "pillars.cta": "Agende Sua Consultoria Gratuita",
    "pillars.1.title": "Posicionamento de Autoridade",
    "pillars.1.description": "Estabeleça-se como o especialista número um com uma identidade de marca poderosa.",
    "pillars.1.feature.1": "Identidade visual profissional",
    "pillars.1.feature.2": "Branding e naming estratégico",
    "pillars.1.feature.3": "Website de alta conversão",
    "pillars.1.feature.4": "Presença estratégica nas redes",
    "pillars.1.feature.5": "Diagnóstico completo e benchmarking",
    "pillars.2.title": "Oferta Irresistível",
    "pillars.2.description":
      "Crie ofertas que ressoam emocionalmente e fazem prospects dizerem 'sim' instantaneamente.",
    "pillars.2.feature.1": "Estruturação da oferta principal",
    "pillars.2.feature.2": "Análise das dores do cliente ideal",
    "pillars.2.feature.3": "Copywriting focado em emoção",
    "pillars.2.feature.4": "Posicionamento único de anúncios",
    "pillars.2.feature.5": "Seguros: proteção familiar e legado",
    "pillars.2.feature.6": "Realtors: realização de sonhos e investimento",
    "pillars.3.title": "Tráfego Qualificado",
    "pillars.3.description": "Atraia os prospects certos através de campanhas inteligentes multi-plataforma.",
    "pillars.3.feature.1": "Segmentação inteligente por perfil ideal",
    "pillars.3.feature.2": "Multi-plataforma: Google, Meta, LinkedIn",
    "pillars.3.feature.3": "Anúncios criativos personalizados",
    "pillars.3.feature.4": "Qualificação automatizada de leads",
    "pillars.3.feature.5": "Relatórios e gestão em tempo real",
    "pillars.4.title": "Vendas Automatizadas por IA",
    "pillars.4.description": "Agentes de IA capturam, qualificam e fecham enquanto você foca no que realmente importa.",
    "pillars.4.feature.1": "SDR IA: Captura e pré-qualifica 24/7",
    "pillars.4.feature.2": "Closer IA: Apresenta ofertas e fecha",
    "pillars.4.feature.3": "Follow-up IA: Reativação contínua",
    "pillars.4.feature.4": "CRM integrado com automações",
    "pillars.4.feature.5": "Scripts personalizados por etapa",
    "pillars.4.feature.6": "Treinamento completo da equipe",

    // Results Section
    "results.label": "RESULTADOS COMPROVADOS",
    "results.title": "Números Reais,",
    "results.title.highlight": "Impacto Real",
    "results.description": "Nossos clientes não apenas veem melhoria — eles experimentam transformação.",
    "results.cta": "Obtenha Esses Resultados",
    "results.stat.1.value": "150+",
    "results.stat.1.label": "Leads Qualificados",
    "results.stat.1.description": "Em apenas 30 dias",
    "results.stat.2.value": "+400%",
    "results.stat.2.label": "Aumento de Eficiência",
    "results.stat.2.description": "Na qualificação de leads",
    "results.stat.3.value": "24/7",
    "results.stat.3.label": "Agentes IA Ativos",
    "results.stat.3.description": "Trabalhando sem parar",
    "results.stat.4.value": "3x",
    "results.stat.4.label": "Taxa de Conversão",
    "results.stat.4.description": "vs métodos tradicionais",
    "results.testimonial.result": "Resultado:",

    // Differentials Section
    "differentials.label": "POR QUE CLIQUE BOOST",
    "differentials.title": "O Que Nos Torna",
    "differentials.title.highlight": "Diferentes",
    "differentials.description":
      "Não somos apenas mais uma agência. Somos seu parceiro de crescimento com um sistema feito para agentes financeiros e realtors no mercado dos EUA.",
    "differentials.cta": "Comece Sua Transformação",
    "differentials.1.title": "Equipe Humano + IA",
    "differentials.1.description": "Expertise humana estratégica combinada com automação incansável de IA.",
    "differentials.2.title": "Dashboard em Tempo Real",
    "differentials.2.description":
      "Acompanhe cada métrica. Saiba onde estão seus leads e como suas campanhas performam.",
    "differentials.3.title": "Especialistas no Mercado dos EUA",
    "differentials.3.description": "Expertise profunda nos mercados financeiro e imobiliário americanos.",
    "differentials.4.title": "Sistema 100% Integrado",
    "differentials.4.description": "Cada pilar trabalha junto como uma máquina de crescimento unificada.",
    "differentials.5.title": "Suporte Bilíngue",
    "differentials.5.description": "Suporte completo em Inglês e Português.",
    "differentials.6.title": "Pronto para Compliance",
    "differentials.6.description": "Todas as campanhas projetadas com compliance da indústria em mente.",

    // How It Works Section
    "how.label": "COMO FUNCIONA",
    "how.title": "Seu Caminho para",
    "how.title.highlight": "Crescimento Automatizado",
    "how.description": "Começar é simples. Veja o que acontece quando você faz parceria com a Clique Boost.",
    "how.cta": "Comece com uma Consultoria Gratuita",
    "how.cta.description": "Sem compromisso. Vamos conversar sobre seus objetivos.",
    "how.step.1.title": "Consultoria Estratégica Gratuita",
    "how.step.1.description":
      "Começamos com uma consultoria de 30 minutos para entender seus objetivos, desafios e perfil de cliente ideal. Sem vendas — apenas insights.",
    "how.step.2.title": "Diagnóstico Completo",
    "how.step.2.description":
      "Nossa equipe analisa seu posicionamento, mercado e concorrentes para criar sua estratégia personalizada.",
    "how.step.3.title": "Implementação do Sistema",
    "how.step.3.description":
      "Construímos e implantamos todos os 4 pilares: posicionamento, oferta, campanhas de tráfego e automação de vendas por IA.",
    "how.step.4.title": "Otimização e Crescimento",
    "how.step.4.description":
      "Monitoramento contínuo, testes A/B e otimização para maximizar seus resultados mês após mês.",

    // FAQ Section
    "faq.label": "FAQ",
    "faq.title": "Perguntas",
    "faq.title.highlight": "Frequentes",
    "faq.description": "Tem perguntas? Temos respostas. Não encontrou a sua? Pergunte na consultoria gratuita.",
    "faq.1.question": "Quanto tempo até eu ver resultados?",
    "faq.1.answer":
      "A maioria dos clientes vê leads qualificados em 2-3 semanas. A otimização completa leva 60-90 dias para desempenho máximo, mas os agentes de IA começam a trabalhar 24/7 desde o primeiro dia.",
    "faq.2.question": "Preciso de conhecimento técnico?",
    "faq.2.answer":
      "Não. Cuidamos de tudo técnico — do website à configuração da IA. Você foca em fechar negócios. Fornecemos dashboards simples e relatórios regulares.",
    "faq.3.question": "É apenas para agentes nos EUA?",
    "faq.3.answer":
      "Sim, o BoostConnect é projetado para o mercado dos EUA — otimizado para regulamentações americanas, comportamento do consumidor e plataformas de anúncios. Atendemos agentes americanos e brasileiros nos EUA.",
    "faq.4.question": "Como sua IA é diferente de chatbots?",
    "faq.4.answer":
      "Nossos agentes de IA são treinados para seguros e imóveis. Eles qualificam leads, lidam com objeções, agendam compromissos e fazem follow-up estrategicamente — como uma equipe de SDRs trabalhando 24/7.",
    "faq.5.question": "Posso cancelar a qualquer momento?",
    "faq.5.answer":
      "Sim, para os planos Starter e Pro você pode cancelar a qualquer momento com 7 dias de aviso antes da data de renovação do contrato. Para os planos Growth e Business, o compromisso mínimo é de 3 meses.",
    "faq.6.question": "Vocês trabalham com outros nichos?",
    "faq.6.answer":
      "Nosso foco é exclusivamente agentes de seguros de vida (incluindo IUL) e realtors nos EUA. Essa especialização entrega melhores resultados que agências generalistas.",
    "faq.7.question": "O que está incluído na consultoria gratuita?",
    "faq.7.answer":
      "Na nossa consultoria de 30 minutos, analisaremos seu marketing atual, identificaremos oportunidades e mostraremos como o BoostConnect pode ajudar. Sem pressão, sem vendas se não for o momento certo — apenas insights valiosos.",

    // Footer
    "footer.description":
      "Transformando agentes de seguros e realtors em autoridades que atraem clientes de alto valor no piloto automático.",
    "footer.links": "Links Rápidos",
    "footer.contact": "Contato",
    "footer.copyright": "© 2025 Clique Boost. Todos os direitos reservados.",
    "footer.market": "Especializado no Mercado dos EUA • Atendimento em Português",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

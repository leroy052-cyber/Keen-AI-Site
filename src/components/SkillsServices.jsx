import { useState, useEffect, useRef } from 'react'

const serviceCategories = [
  {
    id: 'automation',
    label: 'Automation & Workflows',
    tagline: "The stuff that eats your week — gone.",
    accent: '#BFFF00',
    services: [
      {
        title: 'Business Process Automation',
        desc: "Invoicing, scheduling, data entry — the repetitive stuff that makes your eyes glaze over. We make it run itself.",
      },
      {
        title: 'Workflow Orchestration',
        desc: "Multi-step processes across multiple tools (Make, Zapier, n8n, Power Automate). One trigger, everything flows.",
      },
      {
        title: 'Document Processing',
        desc: "Invoices, receipts, forms — AI reads them, extracts the data, puts it where it needs to go. No more manual entry.",
      },
      {
        title: 'Email & Comms Automation',
        desc: "Auto-triage, draft, and route your emails and messages. Your inbox stops being a second job.",
      },
      {
        title: 'CRM & System Integration',
        desc: "Connect your tools so they actually talk to each other. No more copy-pasting between five different apps.",
      },
    ],
  },
  {
    id: 'chatbots',
    label: 'AI Chatbots & Assistants',
    tagline: "Your new team member that never sleeps.",
    accent: '#84CC16',
    services: [
      {
        title: 'Customer-Facing Chatbots',
        desc: "Support, lead capture, FAQ handling — an AI that sounds like your business, not a robot reading a script.",
      },
      {
        title: 'Internal Knowledge Bots',
        desc: "Your team asks a question, the bot finds the answer in your docs and SOPs. No more 'ask Dave, he knows.'",
      },
      {
        title: 'AI Copilots',
        desc: "Custom assistants embedded right inside your existing tools. AI help without switching apps.",
      },
      {
        title: 'Voice AI & Phone Agents',
        desc: "AI that handles calls, takes bookings, answers enquiries. For when you can't pick up the phone and shouldn't have to.",
      },
    ],
  },
  {
    id: 'data',
    label: 'Data & Insights',
    tagline: "Your data's probably gold. It just doesn't look like it yet.",
    accent: '#00FFB2',
    services: [
      {
        title: 'Dashboards & Reporting',
        desc: "Visual dashboards that show you what's actually happening in your business, not a wall of spreadsheet cells.",
      },
      {
        title: 'Predictive Analytics',
        desc: "Forecast demand, spot churn risks, predict stock needs. Stop reacting, start anticipating.",
      },
      {
        title: 'Data Cleanup & Organisation',
        desc: "Before AI can help, your data needs to not be a disaster. We sort the mess so the smart stuff can work.",
      },
      {
        title: 'Sentiment & Feedback Analysis',
        desc: "AI reads your reviews, surveys, and social mentions so you know what people actually think — at scale.",
      },
    ],
  },
  {
    id: 'content',
    label: 'Content & Generative AI',
    tagline: "AI that creates, not just calculates.",
    accent: '#10B981',
    services: [
      {
        title: 'AI Content Pipelines',
        desc: "Systemised content creation — blogs, social, emails. Not AI slop, but AI-assisted quality at speed.",
      },
      {
        title: 'Custom GPTs & Fine-Tuning',
        desc: "AI models trained on your business data. Answers that actually sound like they know your industry.",
      },
      {
        title: 'RAG Systems',
        desc: "AI that answers questions using your actual documents — not making stuff up. The anti-hallucination play.",
      },
      {
        title: 'Proposal & Report Generation',
        desc: "Auto-generate quotes, reports, tenders from templates and data. Hours of work, done in minutes.",
      },
    ],
  },
  {
    id: 'agents',
    label: 'AI Agents',
    tagline: "The frontier stuff. Digital workers that actually get things done.",
    accent: '#d4ff4d',
    services: [
      {
        title: 'Digital Workers',
        desc: "Autonomous AI that performs multi-step tasks on its own. Not just following rules — making decisions within guardrails.",
      },
      {
        title: 'Multi-Agent Systems',
        desc: "Multiple AI agents working together on complex processes. One kicks off, another picks up, another checks the work.",
      },
      {
        title: 'Agentic Process Automation',
        desc: "Next-gen automation where AI doesn't just do what you told it — it figures out what needs doing and does it.",
      },
    ],
  },
  {
    id: 'strategy',
    label: 'Strategy & Training',
    tagline: "Before we build anything, we make sure it's worth building.",
    accent: '#00cc8e',
    services: [
      {
        title: 'AI Readiness Assessment',
        desc: "We audit your business to find where AI fits — and where it doesn't. Honest answers, not a sales pitch.",
      },
      {
        title: 'AI Workshops & Team Training',
        desc: "Hands-on sessions teaching your team what AI can do and how to use the tools they've probably already got.",
      },
      {
        title: 'Prompt Engineering Training',
        desc: "Your team's probably using ChatGPT badly. We fix that. Better prompts = dramatically better results.",
      },
      {
        title: 'Tool Selection & Setup',
        desc: "The AI tool market is a mess. We help you pick the right ones, set them up, and skip the ones that are just hype.",
      },
      {
        title: 'AI Policy & Governance',
        desc: "Internal policies for how your team uses AI responsibly. Privacy, compliance, and not accidentally leaking client data.",
      },
    ],
  },
]

export default function SkillsServices() {
  const [activeCategory, setActiveCategory] = useState('automation')
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const headerRef = useRef(null)

  const active = serviceCategories.find((c) => c.id === activeCategory)

  // Scroll-reveal for section header
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (headerRef.current) {
      headerRef.current.style.opacity = '0'
      headerRef.current.style.transform = 'translateY(40px)'
      headerRef.current.style.transition =
        'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animate cards on category change
  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        setTimeout(() => {
          el.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, i * 80)
      }
    })
  }, [activeCategory])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 md:py-40 section-padding section-warm"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-mint" />
            <span className="text-xs text-accent tracking-widest uppercase">
              What we can build
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            The actual skills behind
            <br />
            <span className="text-gradient">
              the &ldquo;we build the thing&rdquo; part.
            </span>
          </h2>
          <p className="text-muted-light max-w-2xl leading-relaxed">
            Every business is different, but the problems tend to rhyme.
            Here&rsquo;s the toolkit we pull from — not every project needs all
            of this, and some need stuff we haven&rsquo;t listed. That&rsquo;s
            the fun part.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs tracking-wider uppercase border transition-all duration-300 cursor-none ${
                activeCategory === cat.id
                  ? 'border-accent bg-accent text-bg font-bold'
                  : 'border-border-subtle text-muted-light hover:border-accent/40 hover:text-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active category tagline */}
        <p
          className="text-lg md:text-xl font-bold mb-8 transition-colors duration-300"
          style={{ color: active.accent }}
        >
          {active.tagline}
        </p>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {active.services.map((service, i) => (
            <div
              key={`${activeCategory}-${service.title}`}
              ref={(el) => (cardRefs.current[i] = el)}
              className="card-glow group relative p-6"
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, ${active.accent}, transparent)`,
                }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{
                    backgroundColor: active.accent,
                    boxShadow: `0 0 8px ${active.accent}40`,
                  }}
                />
                <div>
                  <h3 className="text-sm font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-light text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-10 border-t border-border-subtle">
          <p className="text-muted-light text-sm leading-relaxed mb-6">
            Don&rsquo;t see exactly what you need? Good — the best solutions
            usually come from a conversation, not a menu. Tell us what&rsquo;s
            eating your time and we&rsquo;ll figure out the rest.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-6 py-3 font-bold text-sm uppercase tracking-wider border border-accent/40 text-accent hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300 cursor-none"
          >
            Let&rsquo;s talk about yours
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

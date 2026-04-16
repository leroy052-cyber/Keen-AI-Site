import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const faqCategories = [
  {
    label: 'Getting started',
    questions: [
      {
        q: 'How much does this cost?',
        a: "Depends entirely on what we build. Some projects are a few thousand, some are more. We'll always scope it out and give you a clear number before anything starts — no surprises.",
      },
      {
        q: 'Do I need to know anything about AI?',
        a: "Nope. That's literally what I'm here for. If you can describe what's eating your time, that's all the expertise you need to bring.",
      },
      {
        q: 'How long does a project take?',
        a: "Most things take 2\u20136 weeks. Some quicker, some longer. We'll tell you upfront and keep you in the loop the whole way through.",
      },
      {
        q: "What if I'm not sure what I need?",
        a: "That's the most common starting point, honestly. Book a free 30-minute AI audit and we'll figure it out together. Half the job is just finding the right problem to solve.",
      },
    ],
  },
  {
    label: 'The work',
    questions: [
      {
        q: 'Will AI replace my staff?',
        a: "No. We're automating the stuff your staff hates doing so they can do the stuff they're actually good at. Think of it as removing the boring bits, not the people.",
      },
      {
        q: "What if it doesn't work?",
        a: "We test before we ship. But if something's not right after handoff, we fix it. We're not the kind of consultants who disappear after the invoice.",
      },
      {
        q: 'Do I need to change all my existing tools?',
        a: "Nah. We build around what you've already got. The best automation fits into your existing workflow — not the other way around.",
      },
      {
        q: "Can you work with my existing software?",
        a: "Almost certainly. We work with everything from Google Sheets and Xero to custom CRMs and legacy systems. If it has an API or an export button, we can probably plug into it.",
      },
    ],
  },
  {
    label: 'Trust & handoff',
    questions: [
      {
        q: 'What happens after you leave?',
        a: "You keep the keys. We train you to run it yourself. If you never need to call us again, we've done our job properly.",
      },
      {
        q: 'Is my data safe?',
        a: "Yes. We take privacy seriously and follow Australian privacy principles. We'll never do anything dodgy with your data, and we can talk specifics for your situation.",
      },
      {
        q: 'Do you lock me into a contract?',
        a: "No. We scope the work, agree on a price, build it, hand it over. If you want ongoing support after that, we can arrange it — but you're never locked in.",
      },
      {
        q: 'What if I want changes after the project is done?',
        a: "We build things so you can tweak them yourself where possible. For bigger changes, just get in touch and we'll scope it as a follow-up — usually much quicker and cheaper than starting from scratch.",
      },
    ],
  },
]

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left cursor-none group"
      >
        <span className="text-sm font-bold pr-8 group-hover:text-accent transition-colors duration-300">
          {question}
        </span>
        <span
          className={`text-accent text-lg flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-400"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-muted-light text-sm leading-relaxed pb-5 pr-12">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FaqPage() {
  const headerRef = useRef(null)
  const categoryRefs = useRef([])

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = '0'
      headerRef.current.style.transform = 'translateY(40px)'
      setTimeout(() => {
        headerRef.current.style.transition =
          'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        headerRef.current.style.opacity = '1'
        headerRef.current.style.transform = 'translateY(0)'
      }, 200)
    }

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
      { threshold: 0.1 }
    )

    categoryRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding relative overflow-hidden">
        <div className="absolute top-1/3 right-[20%] w-[300px] h-[200px] bg-mint/[0.02] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative" ref={headerRef}>
          <div className="flex items-center gap-3 mb-4">
            <div className="glow-dot" />
            <span className="text-xs text-accent/80 tracking-widest uppercase">
              FAQ
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
            Things people ask
            <br />
            <span className="text-gradient">before they get keen.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-light max-w-xl leading-relaxed">
            Fair questions, honest answers. If yours isn&rsquo;t here,{' '}
            <Link to="/contact" className="text-accent hover:text-accent-glow underline underline-offset-4 decoration-accent/40 transition-colors duration-300">
              just ask
            </Link>.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-32 md:pb-40 section-padding">
        <div className="max-w-3xl mx-auto">
          {faqCategories.map((category, i) => (
            <div
              key={category.label}
              ref={(el) => (categoryRefs.current[i] = el)}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gradient-to-r from-accent to-mint" />
                <span className="text-xs text-accent tracking-widest uppercase font-bold">
                  {category.label}
                </span>
              </div>
              <div>
                {category.questions.map((item) => (
                  <AccordionItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 section-padding section-glow relative">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
            Still got questions? <span className="text-gradient">Good.</span>
          </h2>
          <p className="text-muted-light max-w-lg mx-auto leading-relaxed mb-10">
            The best way to figure out if we&rsquo;re a good fit is to have a
            chat. It&rsquo;s free, it&rsquo;s quick, and I promise I won&rsquo;t
            try to sell you something you don&rsquo;t need.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-none"
            style={{ background: 'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)', color: '#0a0a0a' }}
          >
            Book a free AI audit
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

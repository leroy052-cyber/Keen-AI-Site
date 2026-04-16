const tools = [
  {
    name: 'OpenAI',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: 'Anthropic',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0h3.767L16.906 20.48h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm1.04 3.878L5.2 13.891h4.822L7.609 7.398z" />
      </svg>
    ),
  },
  {
    name: 'Make',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: 'Zapier',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M15.557 12l-2.643-5.145h3.602L19.159 12l-2.643 5.145h-3.602L15.557 12zM8.443 12l2.643 5.145H7.484L4.841 12l2.643-5.145h3.602L8.443 12zM12 15.558L9.357 12 12 8.442 14.643 12 12 15.558z" />
      </svg>
    ),
  },
  {
    name: 'n8n',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.8 5.6c-1.5 0-2.7.9-3.2 2.2L7.4 7.2c-.2-.1-.4-.2-.6-.2H4.5c-.8 0-1.5.7-1.5 1.5v7c0 .8.7 1.5 1.5 1.5h2.3c.2 0 .4-.1.6-.2l2.2-.6c.5 1.3 1.7 2.2 3.2 2.2h2.7c2.2 0 4-1.8 4-4v-4.8c0-2.2-1.8-4-4-4h-2.7zm2.7 2h0c1.1 0 2 .9 2 2v4.8c0 1.1-.9 2-2 2h-2.7c-1.1 0-2-.9-2-2V9.6c0-1.1.9-2 2-2h2.7z" />
      </svg>
    ),
  },
  {
    name: 'Power Automate',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M3 4l7.5 8L3 20h4.5l7.5-8-7.5-8H3zm7 0l7.5 8L10 20h4.5l7.5-8-7.5-8H10z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92S3 7.283 3 11.748s2.547 4.306 2.547 4.306h1.52v-2.073s-.082-2.554 2.513-2.554zm-.406-5.627a.784.784 0 1 1 0-1.568.784.784 0 0 1 0 1.568z" />
        <path d="M14.415 12.308H10.087s-2.432-.039-2.432 2.35v3.951S7.286 21 12.064 21c4.574 0 4.289-1.983 4.289-1.983l-.006-2.055h-4.363v-.617h6.096S21 16.717 21 12.252s-2.547-4.306-2.547-4.306h-1.52v2.073s.082 2.554-2.513 2.554zm.406 5.627a.784.784 0 1 1 0 1.568.784.784 0 0 1 0-1.568z" />
      </svg>
    ),
  },
  {
    name: 'LangChain',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2L4 6v4.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V6l-8-4zm0 2.18L18 7.3v3.2c0 4.32-2.8 8.36-6 9.47-3.2-1.11-6-5.15-6-9.47V7.3L12 4.18zm-1 4.32v3h2v-3h3l-4-4-4 4h3zm-1 5h4v2h-4v-2z" />
      </svg>
    ),
  },
]

export default function ToolLogos() {
  return (
    <section className="py-10 section-padding border-y border-border-subtle/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] text-muted tracking-widest uppercase text-center mb-8">
          Tools we work with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 text-muted-light/50 hover:text-accent/80 transition-colors duration-300 group"
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {tool.svg}
              </span>
              <span className="text-xs tracking-wider uppercase font-bold hidden md:inline">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

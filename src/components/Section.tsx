import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section

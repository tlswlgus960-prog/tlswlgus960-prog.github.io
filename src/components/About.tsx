import type { Fact } from '../profile.ts'
import Section from './Section.tsx'

type AboutProps = {
  paragraphs: string[]
  facts: Fact[]
}

function About({ paragraphs, facts }: AboutProps) {
  return (
    <Section id="about" title="자기소개">
      {paragraphs.map((text, i) => (
        <p key={i} className="about-text">
          {text}
        </p>
      ))}
      {facts.length > 0 && (
        <dl className="facts">
          {facts.map((fact) => (
            <div key={fact.label} className="fact">
              <dt className="fact-label">{fact.label}</dt>
              <dd className="fact-value">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </Section>
  )
}

export default About

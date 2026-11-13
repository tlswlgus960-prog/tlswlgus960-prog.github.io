import type { Profile } from '../profile.ts'
import Section from './Section.tsx'

type ContactProps = {
  contact: Profile['contact']
}

function Contact({ contact }: ContactProps) {
  return (
    <Section id="contact" title="연락처">
      <ul className="contact">
        <li>
          <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className="contact-link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </li>
      </ul>
    </Section>
  )
}

export default Contact

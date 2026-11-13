import type { SkillGroup } from '../profile.ts'
import Section from './Section.tsx'

type SkillsProps = {
  groups: SkillGroup[]
}

function Skills({ groups }: SkillsProps) {
  return (
    <Section id="skills" title="기술 스택">
      <dl className="skills">
        {groups.map((group) => (
          <div key={group.category} className="skills-row">
            <dt className="skills-category">{group.category}</dt>
            <dd className="skills-items">
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Skills

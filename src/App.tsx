import { profile } from './profile.ts'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'

const currentYear = new Date().getFullYear()

function App() {
  return (
    <div className="page">
      <Hero name={profile.name} tagline={profile.tagline} />
      <main>
        <About paragraphs={profile.about} facts={profile.facts} />
        <Skills groups={profile.skills} />
        <Projects projects={profile.projects} />
        <Contact contact={profile.contact} />
      </main>
      <footer className="footer">
        © {currentYear} {profile.name}
      </footer>
    </div>
  )
}

export default App

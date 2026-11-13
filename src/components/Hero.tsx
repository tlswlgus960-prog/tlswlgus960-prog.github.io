type HeroProps = {
  name: string
  tagline: string
}

function Hero({ name, tagline }: HeroProps) {
  return (
    <header className="hero">
      <h1 className="hero-name">{name}</h1>
      <p className="hero-tagline">{tagline}</p>
    </header>
  )
}

export default Hero

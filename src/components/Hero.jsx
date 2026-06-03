import andreiPhoto from '../assets/andrei.jpg'
import { profile } from '../data/portfolioData'

function ExternalLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="section-label"></span>
        <p className="hero-greeting">Hi, I&apos;m {profile.name.split(' ')[0]}.</p>
        <h1 className="hero-headline">
          I turn raw data into{' '}
          <span className="hero-highlight">actionable insights</span>.
        </h1>
        <p className="hero-summary">
          {profile.specialization.charAt(0).toUpperCase() +
            profile.specialization.slice(1)}
          . {profile.toolsLine}
        </p>

        <div className="hero-contact">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        </div>

        <div className="hero-links">
          <ExternalLink href={profile.github} className="link-btn">
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.linkedin} className="link-btn">
            LinkedIn
          </ExternalLink>
          <a
            href={profile.resumeUrl}
            className="link-btn link-btn--primary"
            download
          >
            Resume PDF
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-frame">
          <img
            src={andreiPhoto}
            alt={`Portrait of ${profile.name}`}
            className="hero-photo"
          />
        </div> 
        <div className="hero-card hero-card--top">
          <span className="hero-card-label">Focus</span>
          <strong>Data Analysis &amp; BI</strong>
        </div>
        <div className="hero-card hero-card--bottom">
          <span className="hero-card-label">Stack</span>
          <strong>Python · SQL · Power BI</strong>
        </div>
      </div>
    </section>
  )
}

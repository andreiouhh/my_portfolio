import { skillCategories } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="section-intro">
        <span className="section-label">03 — Skills</span>
        <h2>Core Technical Skills</h2>
        <p>Categorized for quick stack-fit scanning.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map(({ category, tools }) => (
          <article key={category} className="skill-card">
            <h3>{category}</h3>
            <ul className="skill-tags">
              {tools.split(', ').map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

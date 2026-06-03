import { timeline } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="about" className="section">
      <div className="section-intro">
        <span className="section-label">04 — About</span>
        <h2>Experience &amp; Education</h2>
        <p>Internships, research work, and academic background.</p>
      </div>

      <ol className="timeline">
        {timeline.map((entry) => (
          <li key={`${entry.title}-${entry.period}`} className="timeline-item">
            <div className="timeline-date">{entry.period}</div>
            <div className="timeline-body">
              <h3>{entry.title}</h3>
              <p className="timeline-org">{entry.organization}</p>
              {entry.description && <p>{entry.description}</p>}
              {entry.highlights && (
                <ul className="timeline-highlights">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

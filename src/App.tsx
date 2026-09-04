import { profile, experience, transition, skills, education } from './data';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <p className="kicker">Résumé</p>
        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <div className="meta">
          <span>{profile.location}</span>
          <span className="dot">·</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="dot">·</span>
          <a href={`https://${profile.github.replace(/^\[|\]$/g, '')}`}>{profile.github}</a>
          <span className="dot">·</span>
          <a href={`https://${profile.linkedin.replace(/^\[|\]$/g, '')}`}>{profile.linkedin}</a>
        </div>
      </header>

      <section className="summary">
        <p>{profile.summary}</p>
      </section>

      <Section title="Experience">
        <div className="timeline">
          {experience.map((job, i) => (
            <article className="entry" key={i}>
              <div className="entry-rule" aria-hidden="true" />
              <div className="entry-body">
                <div className="entry-head">
                  <h3>
                    {job.role} <span className="at">at {job.company}</span>
                  </h3>
                  <span className="period">{job.period}</span>
                </div>
                <p className="context">{job.context}</p>
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {job.stack.length > 0 && (
                  <div className="stack">
                    {job.stack.map((s) => (
                      <span className="pill" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title={transition.heading}>
        <p className="transition-intro">{transition.intro}</p>
        <div className="log">
          {transition.items.map((item, i) => (
            <div className="log-entry" key={i}>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="skill-groups">
          {skills.map((g) => (
            <div className="skill-group" key={g.group}>
              <h4>{g.group}</h4>
              <div className="stack">
                {g.items.map((s) => (
                  <span className="pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education & Certifications">
        <div className="edu-list">
          {education.map((e, i) => (
            <div className="edu-entry" key={i}>
              <span className="edu-title">{e.title}</span>
              <span className="edu-org">{e.org}</span>
              <span className="edu-period">{e.period}</span>
            </div>
          ))}
        </div>
      </Section>

      <footer className="footer">
        <p>All rights reserved to ravinsan.</p>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default App;

import { profile, experience, transition, skills, education } from './data';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="hero">
        <img className="avatar" src="/profile.png" alt={`${profile.name} profile`} />
        <div className="hero-copy">
          <p className="eyebrow">Frontend engineering / ML transition</p>
          <h1 className="name">{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="summary">{profile.summary}</p>
        </div>
        <div className="hero-status">
          <span className="status-dot" />
          <span>Open to the next chapter</span>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="side-block">
            <p className="side-label">Contact</p>
            <div className="contact-list">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={externalUrl(profile.github)} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={externalUrl(profile.linkedin)} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="side-block">
            <p className="side-label">Core toolkit</p>
            <div className="toolkit">
              {skills[0].items.slice(0, 5).map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>

          <div className="side-block education-side">
            <p className="side-label">Education</p>
            {education.map((item) => (
              <div className="education-item" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.org}</span>
                <small>{item.period}</small>
              </div>
            ))}
          </div>
        </aside>

        <main className="content">
          <Section index="01" title="Experience">
            <div className="timeline">
              {experience.map((job, i) => (
                <article className="entry" key={i}>
                  <div className="entry-marker" aria-hidden="true">0{i + 1}</div>
                  <div className="entry-body">
                    <div className="entry-head">
                      <div>
                        <h3>{job.role}</h3>
                        <p className="company">{job.company}</p>
                      </div>
                      <span className="period">{job.period}</span>
                    </div>
                    <p className="context">{job.context}</p>
                    {job.bullets.length > 0 && (
                      <ul>{job.bullets.map((bullet, j) => <li key={j}>{bullet}</li>)}</ul>
                    )}
                    {job.stack.length > 0 && <div className="stack">{job.stack.map((skill) => <span className="pill" key={skill}>{skill}</span>)}</div>}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section index="02" title="Current direction">
            <p className="transition-intro">{transition.intro}</p>
            <div className="log">
              {transition.items.map((item, i) => (
                <article className="log-entry" key={i}>
                  <span className="log-number">0{i + 1}</span>
                  <div><h4>{item.title}</h4><p>{item.detail}</p></div>
                </article>
              ))}
            </div>
          </Section>

          <Section index="03" title="Skills">
            <div className="skill-groups">
              {skills.map((group) => (
                <div className="skill-group" key={group.group}>
                  <h4>{group.group}</h4>
                  <div className="stack">{group.items.map((skill) => <span className="pill" key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </Section>
        </main>
      </div>

      <footer className="footer">
        <p>All rights reserved to ravinsan.</p>
      </footer>
    </div>
  );
}

function Section({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="section-heading"><span>{index}</span><h2 className="section-title">{title}</h2></div>
      {children}
    </section>
  );
}

function externalUrl(value: string) {
  const cleanValue = value.replace(/^\[|\]$/g, '');
  return cleanValue.startsWith('http') ? cleanValue : `https://${cleanValue}`;
}

export default App;

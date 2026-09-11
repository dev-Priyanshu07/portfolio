import { BookOpen, Home, Mail, UserRound } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { profile } from './profile';
import { ThemeToggle } from './theme-toggle';

const socials = [
  { label: 'GitHub', icon: FaGithub, href: profile.socials.github },
  { label: 'LinkedIn', icon: FaLinkedin, href: profile.socials.linkedin },
  { label: 'Email', icon: Mail, href: profile.socials.email ? `mailto:${profile.socials.email}` : '' },
  { label: 'X / Twitter', icon: FaXTwitter, href: profile.socials.twitter },
];

export default function Page() {
  return <>
    <a className="skip-link" href="#about">Skip to content</a>
    <main id="home" className="page">
      <header className="masthead"><a href="#home" aria-label="Priyanshu, home">p<span>.</span></a></header>
      <section className="intro" aria-labelledby="greeting">
        <div className="intro-copy"><h1 id="greeting">hi, priyanshu here<span className="period">.</span></h1></div>
        <div className="portrait">{profile.photo ? <img src={profile.photo} alt={profile.photoAlt} width="88" height="88" fetchPriority="high" /> : <UserRound size={32} strokeWidth={1.2} aria-label="Profile photo placeholder" />}</div>
      </section>
      <section className="section" id="about" aria-labelledby="about-title">
        <div className="section-label"><h2 id="about-title">about</h2></div>
        <div><p className="about-copy about-lines">{profile.about || 'a little about me, coming soon.'}</p>{profile.aboutNote && <p className="subtle">{profile.aboutNote}</p>}<p className="about-copy about-followup">if you want to know more about me,<br />here are the <a className="text-link" href={profile.blog}>things that i carry a part of</a>.</p></div>
      </section>
      <section className="section" aria-labelledby="work-title">
        <div className="section-label"><h2 id="work-title">work</h2></div>
        <div>{profile.work.length ? profile.work.map(item => <article className="entry entry-with-logo" key={`${item.organization}-${item.role}`}><img className="organization-logo" src={item.logo} alt="" width="36" height="36" loading="lazy" decoding="async" /><div className="entry-content"><div className="entry-heading"><h3>{item.organization}</h3><span className="date">{item.period}</span></div><p className="role">{item.role}</p>{item.description && <p className="entry-description">{item.description}</p>}</div></article>) : <p className="subtle">Coming soon.</p>}</div>
      </section>
      <section className="section" aria-labelledby="education-title">
        <div className="section-label"><h2 id="education-title">education</h2></div>
        <div>{profile.education.length ? profile.education.map(item => <article className="entry entry-with-logo" key={`${item.institution}-${item.degree}`}><img className="organization-logo institute-logo" src={item.logo} alt="" width="36" height="36" loading="lazy" decoding="async" /><div className="entry-content"><div className="entry-heading"><h3>{item.institution}</h3>{item.period && <span className="date">{item.period}</span>}</div><p className="role">{item.degree}</p></div></article>) : <p className="subtle">Coming soon.</p>}</div>
      </section>
      <footer>
        <section className="section" aria-labelledby="skills-title">
          <div className="section-label"><h2 id="skills-title">skills</h2></div>
          <ul className="skills-list">
            {['spring boot', 'java', 'postgres', 'c++', 'can do 30 pushups', 'can go to movies alone'].map(skill => <li className="skill-tag" key={skill}>{skill}</li>)}
          </ul>
        </section>
        <div className="footer"><a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Say hello on X"><span>say hello on</span><FaXTwitter size={14} aria-hidden="true" /></a></div>
      </footer>
    </main>
    <nav className="dock" aria-label="Main navigation">
      <a className="dock-item active" href="#home" aria-label="Home"><Home size={20} strokeWidth={1.7} /><span className="tooltip">Home</span></a>
      <span className="dock-divider" />
      {socials.map(({ label, icon: Icon, href }) => href ? <a className="dock-item" href={href} key={label} aria-label={label} target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer"><Icon size={16} aria-hidden="true" /><span className="tooltip">{label}</span></a> : <span className="dock-item unavailable" tabIndex={0} role="link" aria-disabled="true" aria-label={`${label}, coming soon`} key={label}><Icon size={16} aria-hidden="true" /><span className="tooltip">{label} coming soon</span></span>)}
      <span className="dock-divider" />
      {profile.blog ? <a className="dock-item" href={profile.blog} aria-label="Blog"><BookOpen size={20} strokeWidth={1.7} /><span className="tooltip">Blog</span></a> : <span className="dock-item unavailable" tabIndex={0} role="link" aria-disabled="true" aria-label="Blog, coming soon"><BookOpen size={20} strokeWidth={1.7} /><span className="tooltip">Writing, someday</span></span>}
      <span className="dock-divider" />
      <ThemeToggle />
    </nav>
  </>;
}

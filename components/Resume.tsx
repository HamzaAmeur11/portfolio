import React, { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

type TimelineItem = { title: string; organization: string; period: string; description: string };

function SectionTitle({ children }: { children: ReactNode }) {
  return <div className="mb-5 flex items-center gap-3"><span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl border border-jet bg-eerie-black-1 text-orange-yellow-crayola shadow-shadow-1"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z" /></svg></span><h3 className="text-lg font-medium text-white-2 sm:text-xl">{children}</h3></div>;
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return <ol className="space-y-6 border-s border-jet ps-6">{items.map((item) => <li key={`${item.organization}-${item.period}`} className="relative"><span className="absolute -start-[29px] top-2 h-2.5 w-2.5 rounded-full bg-orange-yellow-crayola ring-4 ring-jet" /><div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><div><h4 className="text-sm font-medium text-white-2 sm:text-base">{item.title}</h4><p className="text-xs text-light-gray sm:text-sm">{item.organization}</p></div><span className="flex-shrink-0 text-xs text-vegas-gold sm:text-sm">{item.period}</span></div><p className="mt-2 text-xs font-light leading-relaxed text-light-gray sm:text-sm">{item.description}</p></li>)}</ol>;
}

export default function Resume() {
  const { t } = useTranslation('common');
  const education: TimelineItem[] = [
    { title: 'RNCP Level 7 (Master’s equivalent)', organization: '42 Paris · France', period: '2026 — Present', description: 'Software architecture, web development, DevOps, algorithms and systems programming.' },
    { title: 'Common Core', organization: '1337 Khouribga · 42 Network · Morocco', period: '2021 — 2026', description: 'Software engineering, C/C++, Linux, object-oriented programming, databases, Git and collaborative development.' },
  ];
  const experience: TimelineItem[] = [
    { title: 'Full-Stack Developer', organization: 'Tachrone.ma · Remote', period: 'Jan 2025 — Jan 2026', description: 'Built applications with React, Next.js, NestJS and PHP; designed REST APIs with PostgreSQL; improved performance through debugging and code reviews.' },
    { title: 'Mobile Developer', organization: 'Onedustry Technologies · Remote', period: 'Sep 2024 — Jan 2025', description: 'Developed a cross-platform React Native application, integrated REST APIs and Socket.IO real-time features, and handled testing and performance optimization.' },
    { title: 'Freelance Full-Stack Developer', organization: 'Hood Businesses · Remote', period: '2024', description: 'Developed a desktop application with Electron, Next.js and NestJS, including REST API integration and data management.' },
  ];
  const skillGroups = [
    ['Mobile & Frontend', 'React Native', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    ['Backend', 'NestJS', 'Node.js', 'Express.js', 'PHP', 'REST APIs', 'Socket.IO'],
    ['Languages', 'Java', 'Python', 'SQL', 'C/C++'],
    ['Databases', 'PostgreSQL', 'MySQL', 'MongoDB'],
    ['DevOps & Tools', 'Linux', 'Docker', 'Kubernetes (K3s)', 'Git', 'GitHub', 'GitLab', 'CI/CD'],
  ];

  return <article data-page="resume">
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4"><h2 className="article-title relative pb-2 text-xl capitalize text-white-2 after:absolute after:bottom-0 after:start-0 after:h-1 after:w-8 after:rounded after:bg-gradient-to-r after:from-orange-yellow-crayola after:to-vegas-gold sm:text-2xl lg:text-3xl">{t('resume.title')}</h2><a href="/Resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary text-xs sm:text-sm">Download CV</a></header>
    <section className="mb-10"><SectionTitle>{t('resume.education')}</SectionTitle><Timeline items={education} /></section>
    <section className="mb-10"><SectionTitle>{t('resume.experience')}</SectionTitle><Timeline items={experience} /></section>
    <section><h3 className="mb-5 text-lg font-medium text-white-2 sm:text-xl">{t('resume.mySkills')}</h3><div className="card space-y-5">{skillGroups.map(([label, ...skills]) => <div key={label}><h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-vegas-gold">{label}</h4><ul className="flex flex-wrap gap-2">{skills.map((skill) => <li key={skill} className="rounded-lg border border-jet bg-onyx px-3 py-1.5 text-xs text-light-gray sm:text-sm">{skill}</li>)}</ul></div>)}</div></section>
  </article>;
}

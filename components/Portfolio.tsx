import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

type Project = { title: string; subtitle: string; description: string; stack: string[]; image: string; url?: string; category: 'Experience' | 'GitHub' };

const projects: Project[] = [
  { title: 'Tachrone.ma', subtitle: 'BTP marketplace platform', description: 'Moroccan construction platform connecting customers with trusted building professionals, suppliers and services.', stack: ['Next.js', 'NestJS', 'PostgreSQL'], image: '/assets/images/project-1.jpg', url: 'https://tachrone.ma', category: 'Experience' },
  { title: 'OtoParking', subtitle: 'Smart parking mobile app', description: 'Cross-platform smart parking application with reservations, live availability and real-time communication.', stack: ['React Native', 'REST API', 'Socket.IO'], image: '/assets/images/project-4.png', url: '', category: 'Experience' },
  { title: 'Hood Businesses', subtitle: 'Business management desktop app', description: 'Desktop business-management application with an integrated API and reliable data-management workflows.', stack: ['Electron', 'Next.js', 'NestJS'], image: '/assets/images/project-8.jpg', category: 'Experience' },
  { title: 'Inception of Things', subtitle: 'Kubernetes and GitOps infrastructure', description: 'Automated Kubernetes infrastructure with K3s, ingress routing, GitOps and reproducible deployments.', stack: ['Kubernetes', 'K3s', 'Docker'], image: '/assets/images/project-7.png', url: 'https://github.com/HamzaAmeur11?tab=repositories&q=inception&type=&language=&sort=', category: 'GitHub' },
  { title: 'IoT', subtitle: 'Connected systems project', description: 'Internet of Things project exploring connected devices, data exchange and hardware-to-software integration.', stack: ['IoT', 'Networking', 'Systems'], image: '/assets/images/project-6.png', url: 'https://github.com/HamzaAmeur11?tab=repositories&q=iot&type=&language=&sort=', category: 'GitHub' },
  { title: 'Webserv', subtitle: 'HTTP server from scratch', description: 'A non-blocking HTTP server written from scratch with request parsing, CGI and configurable routing.', stack: ['C++', 'HTTP', 'CGI'], image: '/assets/images/project-3.jpg', url: 'https://github.com/HamzaAmeur11?tab=repositories&q=webserv&type=&language=&sort=', category: 'GitHub' },
  { title: 'ft_transcendence', subtitle: 'Multiplayer gaming platform', description: 'A full-stack multiplayer Pong platform featuring authentication, live gameplay and social features.', stack: ['TypeScript', 'WebSockets', 'Docker'], image: '/assets/images/project-5.png', url: 'https://github.com/HamzaAmeur11?tab=repositories&q=transcendence&type=&language=&sort=', category: 'GitHub' },
  { title: 'Red Tetris', subtitle: 'Real-time multiplayer game', description: 'Real-time multiplayer Tetris with shared game rooms, synchronized state and responsive controls.', stack: ['React', 'Node.js', 'Socket.IO'], image: '/assets/images/project-2.png', url: 'https://github.com/HamzaAmeur11?tab=repositories&q=tetris&type=&language=&sort=', category: 'GitHub' },
  { title: 'MATCHA', subtitle: 'Full-stack matchmaking app', description: 'A complete matchmaking web application with profiles, discovery, messaging and location-aware features.', stack: ['TypeScript', 'Full Stack', 'Web'], image: '/assets/images/project-9.png', url: 'https://github.com/HamzaAmeur11/MATCHA', category: 'GitHub' },
  { title: 'ft_ping', subtitle: 'Network utility implementation', description: 'A low-level implementation of the ping network utility focused on ICMP packets and raw sockets.', stack: ['C', 'Networking', 'ICMP'], image: '/assets/images/project-6.png', url: 'https://github.com/HamzaAmeur11/ft_ping', category: 'GitHub' },
];

function ProjectContent({ project, linked }: { project: Project; linked: boolean }) {
  return <>
    <figure className="relative h-44 w-full overflow-hidden sm:h-52">
      <Image src={project.image} alt={`${project.title} preview`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute start-3 top-3 rounded-full bg-smoky-black/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-orange-yellow-crayola backdrop-blur-sm">{project.category}</span>
    </figure>
    <div className="p-4 sm:p-5">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-base font-medium text-white-2 transition-colors group-hover:text-orange-yellow-crayola">{project.title}</h3>
        {linked && <svg className="h-4 w-4 flex-shrink-0 text-light-gray transition-colors group-hover:text-orange-yellow-crayola" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 17 17 7M8 7h9v9" /></svg>}
      </div>
      <p className="mb-3 text-xs font-medium text-vegas-gold">{project.subtitle}</p>
      <p className="project-description mb-4 min-h-[3.75rem] border-t border-jet pt-3 text-sm font-normal leading-5 sm:leading-6">{project.description}</p>
      <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
        {project.stack.map((technology) => <li key={technology} className="rounded-md bg-onyx px-2 py-1 text-xs text-vegas-gold">{technology}</li>)}
      </ul>
    </div>
  </>;
}

export default function Portfolio() {
  const { t } = useTranslation('common');
  return <article data-page="portfolio">
    <header><h2 className="relative mb-7 pb-2 text-xl capitalize text-white-2 after:absolute after:bottom-0 after:start-0 after:h-1 after:w-8 after:rounded after:bg-gradient-to-r after:from-orange-yellow-crayola after:to-vegas-gold sm:text-2xl lg:text-3xl">{t('portfolio.title')}</h2></header>
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {projects.map((project) => <li key={project.title} className="card group overflow-hidden p-0">
        {project.url ? <a href={project.url} target="_blank" rel="noreferrer" className="block h-full" aria-label={`Open ${project.title}`}><ProjectContent project={project} linked /></a> : <div className="h-full"><ProjectContent project={project} linked={false} /></div>}
      </li>)}
    </ul>
    <div className="mt-7 text-center"><a href="https://github.com/HamzaAmeur11?tab=repositories" target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2 text-xs sm:text-sm">View all projects on GitHub <span aria-hidden="true">&#8599;</span></a></div>
  </article>;
}

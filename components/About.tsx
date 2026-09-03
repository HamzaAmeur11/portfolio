import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('common');
  const services = [
    ['icon-dev.svg', t('about.services.webDesign.title'), t('about.services.webDesign.description')],
    ['icon-design.svg', t('about.services.webDevelopment.title'), t('about.services.webDevelopment.description')],
    ['icon-app.svg', t('about.services.mobileApps.title'), t('about.services.mobileApps.description')],
    ['icon-photo.svg', t('about.services.photography.title'), t('about.services.photography.description')],
  ];

  return <article data-page="about">
    <header><h2 className="relative mb-6 pb-2 text-xl capitalize text-white-2 after:absolute after:bottom-0 after:start-0 after:h-1 after:w-8 after:rounded after:bg-gradient-to-r after:from-orange-yellow-crayola after:to-vegas-gold sm:text-2xl lg:text-3xl">{t('about.title')}</h2></header>
    <section className="mb-9 space-y-4 text-sm font-light leading-7 text-light-gray sm:text-base"><p>{t('about.intro1')}</p><p>{t('about.intro2')}</p></section>
    <section>
      <h3 className="mb-5 text-lg text-white-2 sm:text-xl">{t('about.whatImDoing')}</h3>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map(([icon, title, description]) => <li key={title} className="card flex items-start gap-4"><Image src={`/assets/images/${icon}`} alt="" width={40} height={40} className="h-9 w-9 flex-shrink-0" /><div><h4 className="mb-2 text-sm font-medium text-white-2 sm:text-base">{title}</h4><p className="text-xs font-light leading-relaxed text-light-gray sm:text-sm">{description}</p></div></li>)}
      </ul>
    </section>
  </article>;
}

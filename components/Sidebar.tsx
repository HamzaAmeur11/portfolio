import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const { t } = useTranslation('common');
  const [isActive, setIsActive] = useState(false);

  return (
    <aside
      className={`sidebar ${isActive ? 'active' : ''} ${className} bg-eerie-black-2 dark:bg-eerie-black-2 border border-jet dark:border-jet rounded-2xl sm:rounded-[20px] p-4 sm:p-6 lg:p-6 shadow-shadow-1 mb-4 sm:mb-5 lg:mb-0 max-h-max lg:sticky lg:top-16 overflow-hidden transition-all duration-500 w-full lg:max-w-sm`}
    >
      <div className="sidebar-info relative flex justify-start items-center gap-4 sm:gap-5">
        <figure className="avatar-box overflow-hidden bg-gradient-to-br from-[hsl(240,1%,25%)] to-[hsl(0,0%,19%)] rounded-2xl flex-shrink-0">
          <Image
            src="/myPic.png"
            alt={t('common.name')}
            width={80}
            height={80}
            className="rounded-2xl w-16 h-16 sm:w-20 sm:h-20 object-cover object-top"
            priority
          />
        </figure>

        <div className="info-content min-w-0">
          <h1 className="name text-white-2 dark:text-white-2 text-base sm:text-lg lg:text-xl font-medium tracking-tight mb-2 truncate">
            {t('common.name')}
          </h1>
          <p className="title dark:text-white-1 bg-onyx text-xs sm:text-sm font-light w-max px-3 py-1.5 rounded-lg">
            {t('common.title')}
          </p>
        </div>

        <button
          className="info_more-btn absolute -top-3 -right-3 sm:-top-4 sm:-right-4 rounded-tl-none rounded-tr-lg sm:rounded-tr-2xl rounded-bl-none rounded-br-lg sm:rounded-br-2xl text-xs sm:text-sm text-orange-yellow-crayola bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsl(0,0%,23%)] p-2 sm:p-2.5 shadow-shadow-2 transition-all duration-250 hover:bg-gradient-to-br hover:from-orange-yellow-crayola hover:to-vegas-gold z-10 lg:hidden"
          onClick={() => setIsActive(!isActive)}
          aria-label={isActive ? t('common.hideContacts') : t('common.showContacts')}
          aria-expanded={isActive}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 512 512">
            <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
          </svg>
        </button>
      </div>

      <div
        className={`sidebar-info_more ${isActive ? 'opacity-100 visible max-h-screen' : 'opacity-0 invisible max-h-0 lg:max-h-screen lg:opacity-100 lg:visible'} lg:opacity-100 lg:visible transition-all duration-500 overflow-hidden`}
      >
        <div className="separator w-full h-px bg-jet dark:bg-jet my-3 sm:my-4"></div>

        {/* Contact Info */}
        <ul className="contacts-list grid grid-cols-1 gap-3 sm:gap-4">
          <li className="contact-item flex items-start gap-3 sm:gap-4">
            <div className="icon-box relative bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsl(0,0%,23%)] w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex justify-center items-center text-sm text-orange-yellow-crayola shadow-shadow-1 z-10 flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 512 512">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={35} d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
              </svg>
            </div>
            <div className="contact-info min-w-0">
              <p className="contact-title text-light-gray-70 dark:text-light-gray-70 text-xs uppercase mb-1 font-semibold">
                {t('sidebar.email')}
              </p>
              <a href="mailto:hamza.1999ameur@gmail.com" className="contact-link text-white-2 dark:text-white-2 text-xs sm:text-fs-7 break-all hover:text-orange-yellow-crayola transition-colors">
                hamza.1999ameur@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item flex items-start gap-3 sm:gap-4">
            <div className="icon-box relative bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsl(0,0%,23%)] w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex justify-center items-center text-sm text-orange-yellow-crayola shadow-shadow-1 z-10 flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 512 512">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={35} d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <div className="contact-info min-w-0">
              <p className="contact-title text-light-gray-70 dark:text-light-gray-70 text-xs uppercase mb-1 font-semibold">
                {t('sidebar.phone')}
              </p>
              <a href="tel:+33651749714" className="contact-link text-white-2 dark:text-white-2 text-xs sm:text-fs-7 hover:text-orange-yellow-crayola transition-colors">
                +33 6 51 74 97 14
              </a>
            </div>
          </li>

          <li className="contact-item flex items-start gap-3 sm:gap-4">
            <div className="icon-box relative bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsl(0,0%,23%)] w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex justify-center items-center text-sm text-orange-yellow-crayola shadow-shadow-1 z-10 flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 512 512">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={35} d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <div className="contact-info min-w-0">
              <p className="contact-title text-light-gray-70 dark:text-light-gray-70 text-xs uppercase mb-1 font-semibold">
                {t('sidebar.location')}
              </p>
              <address className="text-white-2 dark:text-white-2 text-xs sm:text-fs-7 not-italic">
                Paris, France
              </address>
            </div>
          </li>
        </ul>

        <div className="separator w-full h-px bg-jet my-3 sm:my-4"></div>

        {/* Social Links */}
        <ul className="social-list flex justify-start items-center gap-3 pb-1 overflow-x-auto">
          <li className="social-item flex-shrink-0">
            <a
              href="https://www.linkedin.com/in/hamza-ameur-891a3427b"
              target="_blank"
              rel="noreferrer"
              className="social-link text-light-gray-70 text-base sm:text-lg hover:text-orange-yellow-crayola transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zm1.78 13.02H3.54V9H7.1v11.45z" />
              </svg>
            </a>
          </li>

          <li className="social-item flex-shrink-0">
            <a
              href="https://github.com/HamzaAmeur11"
              target="_blank"
              rel="noreferrer"
              className="social-link text-light-gray-70 text-base sm:text-lg hover:text-orange-yellow-crayola transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .7a11.5 11.5 0 00-3.64 22.4c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.19 1.78 1.19 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.16 1.18a10.99 10.99 0 015.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.15v3.04c0 .31.21.67.8.56A11.5 11.5 0 0012 .7z" />
              </svg>
            </a>
          </li>

        </ul>
      </div>
    </aside>
  );
}

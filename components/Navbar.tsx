import React from 'react';
import { useTranslation } from 'next-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const { t } = useTranslation('common');

  const navItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'resume', label: t('nav.resume') },
    { key: 'portfolio', label: t('nav.portfolio') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav className="navbar fixed bottom-0 left-0 right-0 w-full bg-[hsla(240,1%,17%,0.75)] dark:bg-[hsla(240,1%,17%,0.75)] backdrop-blur-md border-t border-jet dark:border-jet rounded-t-xl sm:rounded-t-2xl shadow-shadow-2 z-40 lg:static lg:rounded-lg lg:border lg:mb-4">
      <div className="flex items-center justify-between px-2 sm:px-3 lg:px-4">
        <ul className="navbar-list flex flex-wrap justify-center items-center p-0 flex-1">
          {navItems.map((item) => (
            <li key={item.key} className="navbar-item flex-1 sm:flex-none">
              <button
                className={`navbar-link text-light-gray dark:text-light-gray text-xs sm:text-fs-8 py-4 sm:py-5 lg:py-5 px-2 sm:px-3 lg:px-4 transition-colors duration-250 w-full sm:w-auto ${
                  activeTab === item.key
                    ? 'text-orange-yellow-crayola border-b-2 sm:border-b-0 border-orange-yellow-crayola lg:border-b-0'
                    : 'hover:text-orange-yellow-crayola'
                }`}
                onClick={() => onTabChange(item.key)}
                aria-current={activeTab === item.key ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Theme and Language Controls */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle variant="button" className="" />
          <LanguageSwitcher variant="select" className="" />
        </div>
      </div>
      
      {/* Mobile controls */}
      <div className="lg:hidden flex items-center justify-center gap-2 pb-2 px-2">
        <ThemeToggle variant="button" className="" />
        <LanguageSwitcher variant="select" className="" />
      </div>
    </nav>
  );
}

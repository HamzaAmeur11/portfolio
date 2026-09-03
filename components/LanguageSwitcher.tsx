import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface LanguageSwitcherProps {
  variant?: 'buttons' | 'select';
  className?: string;
}

export default function LanguageSwitcher({ variant = 'select', className = '' }: LanguageSwitcherProps) {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;
  const { t } = useTranslation('common');

  const handleLanguageChange = (newLocale: string) => {
    // Store locale preference
    localStorage.setItem('NEXT_LOCALE', newLocale);
    
    // Update HTML dir and lang attributes for RTL support
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLocale;
    
    // Navigate to new locale
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const languageMap: { [key: string]: string } = {
    en: '🇬🇧 English',
    ar: '🇸🇦 العربية',
    es: '🇪🇸 Español',
    fr: '🇫🇷 Français',
  };

  if (variant === 'buttons') {
    return (
      <div className={`flex gap-2 flex-wrap ${className}`}>
        {locales?.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLanguageChange(loc)}
            className={`px-3 py-2 rounded-lg text-fs-7 font-medium uppercase transition-all duration-250 ${
              locale === loc
                ? 'bg-gradient-to-br from-orange-yellow-crayola to-vegas-gold text-smoky-black'
                : 'bg-gradient-to-br from-eerie-black-2 to-onyx border border-jet text-light-gray hover:text-orange-yellow-crayola'
            }`}
            aria-label={`Switch to ${loc}`}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <select
      value={locale || 'en'}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className={`px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-br from-eerie-black-2 to-onyx border border-jet text-white-2 hover:text-orange-yellow-crayola transition-colors duration-250 cursor-pointer focus:outline-orange-yellow-crayola ${className}`}
      aria-label="Select language"
    >
      {locales?.map((loc) => (
        <option key={loc} value={loc}>
          {languageMap[loc] || loc}
        </option>
      ))}
    </select>
  );
}

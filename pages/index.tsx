import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Handle RTL for Arabic
  useEffect(() => {
    const isArabic = router.locale === 'ar';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = router.locale || 'en';
    localStorage.setItem('NEXT_LOCALE', router.locale || 'en');
  }, [router.locale]);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Head>
        <title>Hamza Ameur | Full-Stack &amp; Mobile Developer</title>
        <meta name="description" content="Portfolio of Hamza Ameur, a full-stack and mobile developer studying at 42 Paris." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen w-full px-3 sm:px-5 py-4 sm:py-8 mb-20 sm:mb-8 lg:mb-0 lg:py-12 bg-smoky-black dark:bg-smoky-black">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Sidebar */}
          <div className="w-full lg:w-96 lg:flex-shrink-0">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="w-full lg:flex-1 lg:max-w-4xl bg-eerie-black-2 dark:bg-eerie-black-2 border border-jet dark:border-jet rounded-2xl sm:rounded-[20px] p-5 sm:p-7 lg:p-8 shadow-shadow-1">
            <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="content-area pt-8 sm:pt-10">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

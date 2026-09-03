import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';

export default function Document() {
  // Get router to determine RTL for Arabic
  const isArabic = typeof window !== 'undefined' && document.documentElement.lang === 'ar';

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <link rel="shortcut icon" href="/assets/images/logo.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const locale = localStorage.getItem('NEXT_LOCALE') || 'en';
              const dir = locale === 'ar' ? 'rtl' : 'ltr';
              document.documentElement.dir = dir;
              document.documentElement.lang = locale;
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

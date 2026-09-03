import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Blog() {
  const { t } = useTranslation('common');

  const blogPosts = [
    {
      title: 'Design conferences in 2022',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: '/assets/images/blog-1.jpg',
      description:
        'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    },
    {
      title: 'Best fonts every designer',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: '/assets/images/blog-2.jpg',
      description:
        'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
    },
    {
      title: 'Design digest #80',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: '/assets/images/blog-3.jpg',
      description:
        'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
    },
    {
      title: 'UI interactions of the week',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: '/assets/images/blog-4.jpg',
      description:
        'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
    },
    {
      title: 'The forgotten art of spacing',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: '/assets/images/blog-5.jpg',
      description:
        'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Design digest #79',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: '/assets/images/blog-6.jpg',
      description:
        'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
    },
  ];

  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title text-white-2 dark:text-white-2 text-xl sm:text-2xl lg:text-3xl capitalize relative pb-2 after:content-[''] after:absolute after:bottom-0 after:ltr:left-0 after:rtl:right-0 after:w-6 sm:after:w-8 after:h-1 after:bg-gradient-to-r after:from-orange-yellow-crayola after:to-vegas-gold after:rounded-sm mb-4 sm:mb-6">
          {t('blog.title')}
        </h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {blogPosts.map((post, index) => (
            <li key={index} className="blog-post-item">
              <a
                href="#"
                className="relative bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsl(0,0%,23%)] h-full shadow-shadow-4 rounded-xl sm:rounded-2xl z-10 block before:content-[''] before:absolute before:inset-[1px] before:rounded-[inherit] before:bg-eerie-black-1 before:-z-10 transition-all duration-300 hover:shadow-shadow-5 group"
              >
                <figure className="blog-banner-box w-full h-40 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden m-3 sm:m-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </figure>

                <div className="blog-content px-3 sm:px-4 pb-3 sm:pb-4">
                  <div className="blog-meta flex justify-start items-center gap-2 mb-2 sm:mb-3">
                    <p className="blog-category text-light-gray-70 dark:text-light-gray-70 text-xs sm:text-fs-6 font-light">
                      {t('blog.design')}
                    </p>

                    <span className="dot bg-light-gray-70 dark:bg-light-gray-70 w-1 h-1 rounded-full"></span>

                    <time dateTime={post.date} className="text-light-gray-70 dark:text-light-gray-70 text-xs sm:text-fs-6 font-light">
                      {post.date}
                    </time>
                  </div>

                  <h3 className="blog-item-title text-white-2 dark:text-white-2 text-sm sm:text-base font-medium mb-2 sm:mb-3 leading-snug transition-colors group-hover:text-orange-yellow-crayola">
                    {post.title}
                  </h3>

                  <p className="blog-text text-light-gray dark:text-light-gray text-xs sm:text-fs-6 font-light leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

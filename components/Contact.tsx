import React, { useState, FormEvent } from 'react';
import { useTranslation } from 'next-i18next';

export default function Contact() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    // Check if form is valid
    const isValid = newFormData.fullname.trim() !== '' && 
                    newFormData.email.trim() !== '' && 
                    newFormData.message.trim() !== '' &&
                    newFormData.email.includes('@');
    setIsFormValid(isValid);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.fullname}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.fullname} (${formData.email})`);
    window.location.href = `mailto:hamza.1999ameur@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title text-white-2 dark:text-white-2 text-xl sm:text-2xl lg:text-3xl capitalize relative pb-2 after:content-[''] after:absolute after:bottom-0 after:ltr:left-0 after:rtl:right-0 after:w-6 sm:after:w-8 after:h-1 after:bg-gradient-to-r after:from-orange-yellow-crayola after:to-vegas-gold after:rounded-sm mb-4 sm:mb-6">
          {t('contact.title')}
        </h2>
      </header>

      <section className="mapbox relative h-48 sm:h-64 lg:h-80 w-full rounded-xl sm:rounded-2xl mb-6 sm:mb-8 border border-jet dark:border-jet overflow-hidden" data-mapbox>
        <figure className="h-full">
          <iframe
            src="https://www.google.com/maps?q=Paris%2C%20France&output=embed"
            width="400"
            height="300"
            loading="lazy"
            className="w-full h-full border-0 grayscale invert"
            title="Paris, France location map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title text-white-2 text-lg sm:text-xl lg:text-2xl capitalize mb-4 sm:mb-6">
          {t('contact.formTitle')}
        </h3>

        <form onSubmit={handleSubmit} className="form space-y-4 sm:space-y-6" data-form>
          <div className="input-wrapper grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              name="fullname"
              className="form-input text-white-2 dark:text-white-2 text-xs sm:text-sm font-normal px-3 sm:px-5 py-2 sm:py-3 border border-jet dark:border-jet rounded-lg sm:rounded-xl outline-none focus:border-orange-yellow-crayola focus:ring-1 focus:ring-orange-yellow-crayola bg-transparent transition-colors duration-250"
              placeholder={t('contact.fullName')}
              required
              value={formData.fullname}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              className="form-input text-white-2 dark:text-white-2 text-xs sm:text-sm font-normal px-3 sm:px-5 py-2 sm:py-3 border border-jet dark:border-jet rounded-lg sm:rounded-xl outline-none focus:border-orange-yellow-crayola focus:ring-1 focus:ring-orange-yellow-crayola bg-transparent transition-colors duration-250"
              placeholder={t('contact.email')}
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input text-white-2 text-xs sm:text-sm font-normal px-3 sm:px-5 py-2 sm:py-3 border border-jet rounded-lg sm:rounded-xl outline-none focus:border-orange-yellow-crayola focus:ring-1 focus:ring-orange-yellow-crayola bg-transparent min-h-24 sm:min-h-32 max-h-64 resize-vertical w-full transition-colors duration-250"
            placeholder={t('contact.message')}
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <button
            className={`form-btn relative w-full bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsl(0,0%,23%)] text-orange-yellow-crayola flex justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm capitalize shadow-shadow-3 z-10 transition-all duration-250 before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-b before:from-[hsl(240,2%,13%)] before:to-[hsl(240,2%,13%)] before:rounded-[inherit] before:-z-10 before:transition-all before:duration-250 hover:enabled:bg-gradient-to-br hover:enabled:from-[hsl(45,100%,71%)] hover:enabled:to-[hsl(36,100%,69%)] hover:enabled:before:bg-gradient-to-b hover:enabled:before:from-[hsl(45,100%,72%)] hover:enabled:before:to-[hsl(35,100%,68%)] disabled:opacity-50 disabled:cursor-not-allowed`}
            type="submit"
            disabled={!isFormValid}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
            <span>{t('contact.sendMessage')}</span>
          </button>
        </form>
      </section>
    </article>
  );
}

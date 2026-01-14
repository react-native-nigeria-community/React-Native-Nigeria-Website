import React from 'react';
import en from '../locales/en';

// Arrow Icon
const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Newsletter data from en.js
const newsletters = Object.values(en.newsletterPage.newsletterData);

function NewsletterPage() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white lg:bg-bg1 py-20 lg:py-32 px-6 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-accent text-sm font-bold uppercase tracking-widest px-4 py-2 bg-accent/10 rounded-full">
              React Native Nigeria
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            {en.newsletterPage.heroSection.title}
          </h1>
          <p className="text-xl text-primary/60 max-w-2xl mx-auto leading-relaxed">
            {en.newsletterPage.heroSection.description}
          </p>
        </div>
      </section>

      {/* Newsletter List */}
      <section className="py-20 lg:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16 lg:space-y-24">
            {newsletters.map((newsletter, index) => (
              <article 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary/10"
              >
                {/* Featured Image */}
                <a 
                  href={newsletter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden"
                >
                  <div className="relative aspect-[16/9] bg-secondary overflow-hidden">
                    <img 
                      src={newsletter.image} 
                      alt={newsletter.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Date Badge on Image */}
                    <div className="absolute bottom-6 left-6">
                      <time className="inline-block bg-white text-secondary text-sm font-bold px-5 py-2.5 rounded-full shadow-xl">
                        {formatDate(newsletter.date)}
                      </time>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  {/* Title */}
                  <a 
                    href={newsletter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                      {newsletter.title}
                    </h2>
                  </a>

                  {/* Description */}
                  <p className="text-lg text-secondary/70 leading-relaxed mb-8">
                    {newsletter.description}
                  </p>

                  {/* Read More */}
                  <a
                    href={newsletter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 hover:gap-5 transition-all duration-300 shadow-md"
                  >
                    <span>Read Full Newsletter</span>
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-secondary py-24 lg:py-32 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
            {en.newsletterPage.ctaSection.title}
          </h2>
          <p className="text-xl text-primary/60 mb-12 max-w-2xl mx-auto">
            {en.newsletterPage.ctaSection.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={en.newsletterPage.ctaSection.viewArchiveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white text-secondary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>{en.newsletterPage.ctaSection.viewArchiveText}</span>
              <ArrowIcon />
            </a>
            <a
              href={en.newsletterPage.ctaSection.subscribeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20"
            >
              {en.newsletterPage.ctaSection.subscribeText}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsletterPage;
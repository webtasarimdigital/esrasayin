import { SITE_INFO } from './data';
import { BlogPost } from './types';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_INFO.url}/#localbusiness`,
    name: SITE_INFO.name,
    alternateName: 'İstanbul Psikolog Esra Sayın',
    image: `${SITE_INFO.url}/images/psikolog-esra-sayin-updated-hero.webp`,
    url: SITE_INFO.url,
    telephone: SITE_INFO.phoneFormatted,
    email: SITE_INFO.email,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_INFO.address.street,
      addressLocality: SITE_INFO.address.district,
      addressRegion: SITE_INFO.address.city,
      postalCode: SITE_INFO.address.postalCode,
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0321365,
      longitude: 28.9830535,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      SITE_INFO.socials.instagram,
      SITE_INFO.socials.facebook,
      SITE_INFO.socials.linkedin,
      SITE_INFO.socials.doktorTakvimi,
      SITE_INFO.socials.doktorSitesi,
      SITE_INFO.socials.googleMap,
    ],
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_INFO.url}/#person`,
    name: 'Esra Sayın',
    jobTitle: 'Uzman Psikolog & Aile Danışmanı',
    url: SITE_INFO.url,
    image: `${SITE_INFO.url}/images/psikolog-esra-sayin-updated-hero.webp`,
    worksFor: {
      '@id': `${SITE_INFO.url}/#localbusiness`,
    },
    sameAs: [
      SITE_INFO.socials.instagram,
      SITE_INFO.socials.facebook,
      SITE_INFO.socials.linkedin,
      SITE_INFO.socials.doktorTakvimi,
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_INFO.url}${item.url}`,
    })),
  };
}

export function getArticleSchema(post: BlogPost) {
  const imageUrl = post.featured_image?.startsWith('http')
    ? post.featured_image
    : `${SITE_INFO.url}${post.featured_image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_INFO.url}/${post.permalink}/#article`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_INFO.url}/#website`,
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: 'Esra Sayın',
      url: `${SITE_INFO.url}/istanbul-psikolog-esra-sayin/`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_INFO.url}/images/psikolog-esra-sayin-updated-hero.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_INFO.url}/${post.permalink}/`,
    },
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

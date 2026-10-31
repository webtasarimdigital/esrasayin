import { SITE_INFO } from './data';
import { BlogPost } from './types';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_INFO.url}/#localbusiness`,
    name: SITE_INFO.name,
    alternateName: [
      'Psikolog Esra Sayın',
      'Beyoğlu Psikolog Esra Sayın',
      'Beyoğlu Çift Danışmanlığı',
      'Cihangir Psikolog Esra Sayın',
      'Taksim Psikolog Esra Sayın',
      'İstanbul Psikolog Esra Sayın',
      'Esra Sayın',
    ],
    image: `${SITE_INFO.url}/images/psikolog-esra-sayin-updated-hero.webp`,
    url: SITE_INFO.url,
    telephone: SITE_INFO.phoneFormatted,
    email: SITE_INFO.email,
    priceRange: '₺₺',
    hasMap: SITE_INFO.socials.googleMap,
    map: SITE_INFO.socials.googleMapCid,
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
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 41.0321365,
        longitude: 28.9830535,
      },
      geoRadius: 15000,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Beyoğlu, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Cihangir, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Kuloğlu, Beyoğlu, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Taksim, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Gümüşsuyu, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Galata, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Karaköy, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Şişli, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Nişantaşı, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Beşiktaş, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Kadıköy, İstanbul' },
      { '@type': 'AdministrativeArea', name: 'İstanbul' },
    ],
    knowsAbout: [
      'Beyoğlu Psikolog',
      'Çift Danışmanlığı',
      'Evlilik Danışmanlığı',
      'Aile Danışmanlığı',
      'Bireysel Danışmanlık',
      'İlişki Danışmanlığı',
      'Cihangir Psikolog',
      'Taksim Psikolog',
      'Bilişsel Davranışçı Terapi',
      'Şema Danışmanlığı',
      'Stres Yönetimi',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Çift Danışmanlığı',
          description: 'Beyoğlu Cihangir ofisinde yüz yüze ve online çift danışmanlığı süreci.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Evlilik Danışmanlığı',
          description: 'Evlilik dinamikleri, iletişim problemleri ve rol çatışmaları için profesyonel danışmanlık.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aile Danışmanlığı',
          description: 'Aile içi sınırlar ve yapıcı iletişim odaklı aile danışmanlığı desteği.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bireysel Danışmanlık',
          description: 'Yetişkin bireysel farkındalık, stres yönetimi ve bilişsel davranışçı danışmanlık.',
        },
      },
    ],
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
          'Sunday',
        ],
        opens: '10:00',
        closes: '23:30',
      },
    ],
    sameAs: [
      SITE_INFO.socials.googleMap,
      SITE_INFO.socials.googleMapShare,
      SITE_INFO.socials.googleMapCid,
      SITE_INFO.socials.instagram,
      SITE_INFO.socials.facebook,
      SITE_INFO.socials.linkedin,
      SITE_INFO.socials.doktorTakvimi,
      SITE_INFO.socials.doktorSitesi,
    ],
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_INFO.url}/#person`,
    name: 'Esra Sayın',
    jobTitle: 'Psikolog & Aile Danışmanı',
    url: SITE_INFO.url,
    image: `${SITE_INFO.url}/images/psikolog-esra-sayin-updated-hero.webp`,
    worksFor: {
      '@id': `${SITE_INFO.url}/#localbusiness`,
    },
    sameAs: [
      SITE_INFO.socials.googleMap,
      SITE_INFO.socials.googleMapShare,
      SITE_INFO.socials.googleMapCid,
      SITE_INFO.socials.instagram,
      SITE_INFO.socials.facebook,
      SITE_INFO.socials.linkedin,
      SITE_INFO.socials.doktorTakvimi,
      SITE_INFO.socials.doktorSitesi,
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

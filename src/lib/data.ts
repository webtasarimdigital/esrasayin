import postsData from '@/data/posts.json';
import pagesData from '@/data/pages.json';
import categoriesData from '@/data/categories.json';
import { BlogPost, SitePage, Category, ServiceItem, Testimonial } from './types';

export const posts: BlogPost[] = postsData as BlogPost[];
export const pages: SitePage[] = pagesData as SitePage[];
export const categories: Category[] = categoriesData as Category[];

export const SITE_INFO = {
  name: 'Psikolog & Aile Danışmanı Esra SAYIN',
  shortName: 'Esra Sayın',
  title: 'İstanbul Psikolog Esra Sayın - Şişli, Cihangir, Beyoğlu, Nişantaşı - Online',
  description: "İstanbul'da Şişli, Cihangir, Beyoğlu, Nişantaşı konumlarında yüz yüze Uzman Psikolog & Aile Danışmanı Esra Sayın'dan randevu alın.",
  url: 'https://esrasayin.com.tr',
  phone: '0538 650 32 17',
  phoneFormatted: '+90 538 650 32 17',
  email: 'esrasayin111@gmail.com',
  address: {
    street: 'Kuloğlu Mah. Sıraselviler Cad. No:68 Garanti Bankası Üstü Simge Apartmanı Kat 2',
    district: 'Cihangir / Beyoğlu',
    city: 'İstanbul',
    country: 'Türkiye',
    postalCode: '34433',
  },
  socials: {
    instagram: 'https://www.instagram.com/esrasayinakademi/',
    instagramPersonal: 'https://www.instagram.com/uzm.kl.psk.esrasayin/',
    facebook: 'https://www.facebook.com/profile.php?id=61573524325398',
    linkedin: 'https://www.linkedin.com/in/esra-s-1302b4209/',
    doktorTakvimi: 'https://www.doktortakvimi.com/profil/esra-sayin-2',
    doktorSitesi: 'https://www.doktorsitesi.com/psk-esra-sayin/psikoloji-aile-danismani-psikolog/istanbul',
    googleMap: 'https://share.google/niicNRLot1aky40vr',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6854808981248!2d28.983053499999997!3d41.0321365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7aad30c9351%3A0xf57e5e5fb04894eb!2sPsikolog%20Esra%20Say%C4%B1n%20Beyo%C4%9Flu!5e0!3m2!1str!2str!4v1762242545849!5m2!1str!2str',
  },
  workingHours: 'Pazartesi - Cumartesi: 09:00 - 20:00 (Pazar: Kapalı veya Randevu ile)',
};

export const SERVICES: ServiceItem[] = [
  {
    title: 'Bireysel Terapi',
    slug: 'istanbul-bireysel-terapi',
    description: 'Bireyin iç dünyasını keşfetmesi, duygusal blokajları çözmesi, kaygı, depresyon ve özgüven konularında güçlenmesi için kişiye özel terapi süreci.',
    image: '/images/bireysel.webp',
    category: 'Bireysel Destek'
  },
  {
    title: 'Aile Terapisi',
    slug: 'istanbul-aile-terapisi',
    description: 'Aile bireyleri arasındaki çatışmaları çözümlemek, sağlıklı sınırlar ve yapıcı iletişim dinamikleri inşa etmek amacıyla uygulanan sistemik yaklaşım.',
    image: '/images/aile2.webp',
    category: 'Aile & Evlilik'
  },
  {
    title: 'Çift Terapisi',
    slug: 'istanbul-cift-terapisi',
    description: 'İlişkilerde güven problemleri, duygusal kopukluk ve tekrarlayan anlaşmazlıkları aşarak bağı yeniden canlandırmayı hedefleyen profesyonel seanslar.',
    image: '/images/cift.webp',
    category: 'Aile & Evlilik'
  },
  {
    title: 'Evlilik Terapisi',
    slug: 'istanbul-evlilik-terapisi',
    description: 'Evlilik hazırlığı veya evlilik sürecinde karşılaşılan krizleri aşma, rol çatışmalarını yönetme ve uzun soluklu bir uyum sağlama çalışması.',
    image: '/images/evlilik.webp',
    category: 'Aile & Evlilik'
  },
  {
    title: 'Cinsel Terapi',
    slug: 'istanbul-cinsel-terapi',
    description: 'Bireysel veya çift olarak yaşanan cinsel işlev kaygıları ve tabuları, bilimsel ve gizlilik odaklı bir çerçevede ele alan psikolojik danışmanlık.',
    image: '/images/sex.webp',
    category: 'Özel Alan'
  },
  {
    title: 'EMDR Terapisi',
    slug: 'emdr-terapisi',
    description: 'Göz hareketleriyle duyarsızlaştırma ve yeniden işleme tekniğiyle geçmiş travmalar, fobiler ve kaygı bozukluklarında kanıtlanmış etkili yaklaşım.',
    image: '/images/emdr2-1400x680.webp',
    category: 'Terapi Ekolü'
  },
  {
    title: 'Bilişsel Davranışçı Terapi (BDT)',
    slug: 'bilissel-davranisci-terapi',
    description: 'Düşünce, duygu ve davranış zincirini fark ederek olumsuz düşünce kalıplarını yeniden yapılandıran dünyaca kabul görmüş bilimsel terapi metodu.',
    image: '/images/bilissel-1400x680.webp',
    category: 'Terapi Ekolü'
  },
  {
    title: 'Şema Terapi',
    slug: 'sema-terapi',
    description: 'Çocukluk döneminde karşılanmamış temel duygusal ihtiyaçlardan köken alan erken dönem uyumsuz şemaları ve kök inançları dönüştürme süreci.',
    image: '/images/sema-1400x680.webp',
    category: 'Terapi Ekolü'
  },
  {
    title: 'Ergen Terapisi',
    slug: 'ergen-terapisi',
    description: 'Ergenlik çağındaki gençlerin kimlik arayışı, okul başarısı, akran ilişkileri ve aile içi uyum sorunlarına yönelik güvenli rehberlik alanı.',
    image: '/images/ebeveyn-1400x680.webp',
    category: 'Gelişim & Ergen'
  },
  {
    title: 'Online Psikolog',
    slug: 'online-psikolog',
    description: 'Türkiye’nin ve dünyanın neresinde olursanız olun, mekan sınırlarını aşarak yüksek gizlilik ve konforla online seans deneyimi.',
    image: '/images/psikolog-esra-sayin-uniform.webp',
    category: 'Uzaktan Destek'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aylin K.',
    date: 'Şubat 2026',
    rating: 5,
    platform: 'DoktorTakvimi',
    comment: 'Esra Hanım ile geçirdiğimiz çift terapisi süreci evliliğimiz için bir dönüm noktası oldu. Tarafsız, anlayışlı ve profesyonel yaklaşımı sayesinde birbirimizi ilk defa gerçekten dinlemeyi öğrendik.',
    service: 'Çift Terapisi'
  },
  {
    name: 'Mert S.',
    date: 'Ocak 2026',
    rating: 5,
    platform: 'Google',
    comment: 'Cihangir ofisindeki huzurlu atmosfer ve Esra Hanım\'ın derin bilgi birikimi kendimi çok rahat hissetmemi sağladı. Yıllardır süren kaygılarımı yönetmeyi ve hafifletmeyi başardık.',
    service: 'Bireysel Terapi'
  },
  {
    name: 'Zeynep & Emre B.',
    date: 'Aralık 2025',
    rating: 5,
    platform: 'DoktorSitesi',
    comment: 'İlişkimizin en zor günlerinde bize bir yol haritası çizdi. Kendisine ve güler yüzlü ilgisine sonsuz teşekkürler. İstanbul’da gönül rahatlığıyla tavsiye edebileceğim tek uzman.',
    service: 'Evlilik Terapisi'
  },
  {
    name: 'Burak D.',
    date: 'Kasım 2025',
    rating: 5,
    platform: 'DoktorTakvimi',
    comment: 'EMDR seansları sayesinde çocukluğumdan beri taşıdığım travmatik yüklerden arındım. Seansların her dakikası çok kıymetliydi.',
    service: 'EMDR Terapisi'
  },
  {
    name: 'Selin Y.',
    date: 'Ekim 2025',
    rating: 5,
    platform: 'Google',
    comment: 'Yurt dışından online olarak terapi aldım. Saat farkına rağmen çok uyumlu bir planlama yaptık ve mesafelerin terapiye hiçbir engel olmadığını gördüm.',
    service: 'Online Terapi'
  }
];

export const FAQS = [
  {
    question: 'Psikolojik danışmanlık seansı ne kadar sürer ve sıklığı nedir?',
    answer: 'Bireysel terapi seansları standart olarak 50 dakika, çift ve aile terapisi seansları ise 60-75 dakika sürmektedir. Görüşmeler danışanın ihtiyacına göre genellikle haftada bir düzenlenir; süreç ilerledikçe seans aralıkları 15 günde bir veya ayda bir olarak kademelendirilebilir.'
  },
  {
    question: 'Cihangir ofisinde yüz yüze mi yoksa online mı görüşme yapılıyor?',
    answer: 'İstanbul Beyoğlu Cihangir\'deki Sıraselviler Caddesi üzerindeki ofisimizde yüz yüze danışmanlık verilmektedir. İstanbul dışındaki veya yurt dışındaki danışanlarımız için ise aynı etik ve gizlilik ilkeleriyle online seanslar yürütülmektedir.'
  },
  {
    question: 'Seanslarda paylaşılan bilgiler gizli tutulur mu?',
    answer: 'Evet. Psikolojik danışmanlık sürecinin en temel kuralı gizlilik ve danışan mahremiyetidir. Görüşme odasında paylaşılan hiçbir bilgi üçüncü şahıslarla, kurumlarla veya aile bireyleriyle kesinlikle paylaşılmaz.'
  },
  {
    question: 'Hangi terapi ekolleri ve yöntemleri uygulanıyor?',
    answer: 'Seanslarımızda danışanın getirdiği konunun özelliğine göre Bilişsel Davranışçı Terapi (BDT), Şema Terapi, EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme) ve Sistemik Çift & Aile Terapisi ekolleri bütüncül bir yaklaşımla harmanlanarak uygulanmaktadır.'
  },
  {
    question: 'Randevu nasıl alabilirim?',
    answer: 'Sitemizdeki Randevu Al formunu doldurarak, 0538 650 32 17 numaralı telefonumuzu arayarak ya da WhatsApp üzerinden doğrudan mesaj göndererek size en uygun gün ve saat için randevu oluşturabilirsiniz.'
  }
];

// Helper functions
export function getPostBySlugOrPermalink(slugOrPermalink: string): BlogPost | undefined {
  const clean = slugOrPermalink.replace(/\/$/, '');
  return posts.find(p => p.permalink === clean || p.slug === clean || `${p.id}-${p.slug}` === clean);
}

export function getPageBySlugOrPermalink(slugOrPermalink: string): SitePage | undefined {
  const clean = slugOrPermalink.replace(/\/$/, '');
  return pages.find(p => p.permalink === clean || p.slug === clean);
}

export function getLatestPosts(limit = 6): BlogPost[] {
  return [...posts].slice(0, limit);
}

export function getRelatedPosts(currentId: number, limit = 3): BlogPost[] {
  return posts.filter(p => p.id !== currentId).slice(0, limit);
}

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

// 5 Core Services matching the original site's homepage
export const SERVICES: ServiceItem[] = [
  {
    title: 'Bireysel Danışmanlık',
    slug: 'istanbul-bireysel-terapi',
    description: 'Bireyin iç dünyasını keşfetmesi, duygusal blokajları çözmesi, kaygı ve özgüven konularında güçlenmesi için kişiye özel psikolojik danışmanlık süreci.',
    image: '/images/bireysel.webp',
    category: 'Bireysel Destek'
  },
  {
    title: 'Aile Danışmanlığı',
    slug: 'istanbul-aile-terapisi',
    description: 'Aile bireyleri arasındaki çatışmaları çözümlemek, sağlıklı sınırlar ve yapıcı iletişim dinamikleri inşa etmek amacıyla uygulanan sistemik aile danışmanlığı.',
    image: '/images/aile2.webp',
    category: 'Aile & Evlilik'
  },
  {
    title: 'Çift Danışmanlığı',
    slug: 'istanbul-cift-terapisi',
    description: 'İlişkilerde güven problemleri, duygusal kopukluk ve tekrarlayan anlaşmazlıkları aşarak bağı yeniden canlandırmayı hedefleyen profesyonel seanslar.',
    image: '/images/cift.webp',
    category: 'Aile & Evlilik'
  },
  {
    title: 'Evlilik Danışmanlığı',
    slug: 'istanbul-evlilik-terapisi',
    description: 'Evlilik hazırlığı veya evlilik sürecinde karşılaşılan krizleri aşma, rol çatışmalarını yönetme ve uzun soluklu bir uyum sağlama çalışması.',
    image: '/images/evlilik.webp',
    category: 'Aile & Evlilik'
  },
  {
    title: 'Cinsel Danışmanlık',
    slug: 'istanbul-cinsel-terapi',
    description: 'Bireysel veya çift olarak yaşanan iletişimsel tabuları ve psikolojik kaygıları, bilimsel ve gizlilik odaklı bir çerçevede ele alan danışmanlık süreci.',
    image: '/images/sex.webp',
    category: 'Özel Danışmanlık Alanı'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'T... Ü...',
    date: '2025',
    rating: 5,
    platform: 'DoktorSitesi',
    title: 'Başarılı sonuç aldık',
    comment: 'Esra hoca birçok alanda çok başarılı bir uzman ama ayrılık aşamasında olan çiftler için kurtarıcı gibi. Yorumlarda az övülmüş. O kadar net ifade edebilirim aldığı başarılı sonuçları. Bizim çok toksik bir birlikteliğimiz vardı açıkçası kendimizin bile kurtulacağına inancımız yoktu ilişkimizin. Çevremizde artık mutsuz ediyorsunuz birbirinizi ayrılın demeye getiriyorlardı birbirimizden yakındığımızda. Kısacası hem kendimizi hem etrafımızı bezdirmiştik. Buradan dönüp nasıl böyle bir çift olduk biz hayret ediyoruz. Etrafımız ise hala şaşkın. Esra hocaya tüm emeği için şükranlarımızı sunuyoruz.',
    service: 'Çift Danışmanlığı'
  },
  {
    name: 'T... P...',
    date: '2025',
    rating: 5,
    platform: 'DoktorTakvimi',
    title: 'Dünya standartlarında bir psikolog',
    comment: 'Kaygı bozukluğu ile korona başından beri mücadele ediyordum. Herkes hayatına döndü ben hep kötü bir şey olacakmış hissi ile başa çıkmaya çalışıyordum. Bu durumun beni tükettiğini hem ben hem de ailem görebiliyorduk. Esra hanım ve ekibi program çıkarmada tam bir usta. Cadde de oturduğum için burada randevu oluşturdum. Hoca üç şubesinde yüz yüze seans veriyormuş. Tüm olumlu geri bildirimleri çokça hak ediyor. Çözüme ulaşmamız hızlı ve kalıcı oldu.',
    service: 'Bireysel Danışmanlık'
  },
  {
    name: 'M... O...',
    date: '2025',
    rating: 5,
    platform: 'BulutKlinik',
    title: 'Online danışmanlığa başladım',
    comment: 'Biz Hollanda’da yaşadığımız için online seans talep ettik. Eşim de ben de ayrı ayrı destek alıyorduk ama evdeki tartışmalara engel olmuyordu bu durum. Baktık yalnızca ilaç kullanımı ile bir şeyler çözülmeyecek araştırıp Çift danışmanlığına başladık. Esra hoca verdiği programı bizzat takip eden biri. Bu danışanda değer verildiği hissiyatını pekiştiriyor. Seanslarda da hep notlar alır, nokta atışı sorular sorar. Sizlere de gönül rahatlığıyla tavsiye ederiz.',
    service: 'Online Çift Danışmanlığı'
  },
  {
    name: 'F... Ö...',
    date: '2025',
    rating: 5,
    platform: 'Psikolog Pro',
    title: 'Evliliğimizde huzuru yakaladık',
    comment: 'Daha önce tam üç danışmana gittik. Artık demiştik ki galiba biz gelişim gösteremiyoruz çünkü sonuç alamıyoruz. Ta ki tavsiye üzerine Esra hanımın seanslarına katılana kadar. Biz Antalya’da yaşadığımız için online seanslara katıldık ama diğer yüz yüze seanslardan onlarca kat daha verimli olduğunu ikimiz de gördük. Şimdi ilk defa evliliğimizde huzuru yakaladık. Tüm yaşayanlara kesinlikle Esra hocayı tavsiye ediyoruz.',
    service: 'Evlilik Danışmanlığı'
  },
  {
    name: 'E... E...',
    date: '2025',
    rating: 5,
    platform: 'Türk Hekimleri',
    title: 'Kesinlikle tavsiye ederim',
    comment: 'Esra hoca birçok alanda çok başarılı bir uzman ama ayrılık aşamasında olan çiftler için kurtarıcı gibi. Yorumlarda az övülmüş. O kadar net ifade edebilirim aldığı başarılı sonuçları. Esra hocaya tüm emeği için şükranlarımızı sunuyoruz. Hep teşekkürle anıyoruz kendisini ve tavsiye ediyoruz ihtiyacı olduğunu bildiğimiz çiftlere.',
    service: 'Çift & Aile Danışmanlığı'
  },
  {
    name: 'V... L...',
    date: '2025',
    rating: 5,
    platform: 'Psikolist',
    title: 'Çift Danışmanlığı',
    comment: 'Esra hoca ile ayrılık için gün sayarken tanıştık. Cihangir bize çok yakın olduğu için oraya gittik, tüm seansları orada aldık. Esra hoca etik yaklaşıma önem veren bir uzman. Seansları sorunu hızlı çözüp bitiriyor, çok başarılı bir çalışma sistemine sahip. Çok uzun aylar devam ettirmiyor. Öyle ılımlı bir ortam oluştu ki evimizde ilk defa gelecek planları yapmaya başladık birlikte.',
    service: 'Çift Danışmanlığı'
  },
  {
    name: 'H...',
    date: '2025',
    rating: 5,
    platform: 'Doktor Uzman',
    title: 'Çift Danışmanlığı',
    comment: 'Çift danışmanlığına karşı önyargılarım vardı, ama eşim ısrar etti. İlk seans sonrası iyi ki gelmişiz dedim! Her görüşmede daha bilinçli, daha anlayışlı bireyler olduk. Ailemizi tekrar kurduk desem abartmış olmam.',
    service: 'Çift Danışmanlığı'
  },
  {
    name: 'A... K...',
    date: '2025',
    rating: 5,
    platform: 'PsikolojiPark',
    title: 'Ergen Danışmanlığı',
    comment: 'Oğlumuz lisede okuyor. Bu sene bize karşı çok isyankardı ve ders notları da çok düşmüştü. Tavsiye üzerine Esra hanıma başvurduk ve çok güzel sonuçlar aldık. Hem dersleri çok düzeldi hem de bize karşı eskisi gibi sevgi saygıyı eksik etmiyor. Tüm ailelere kesinlikle öneriyoruz.',
    service: 'Ergen Danışmanlığı'
  }
];


export const FAQS = [
  {
    question: 'Psikolojik danışmanlık seansı ne kadar sürer ve sıklığı nedir?',
    answer: 'Bireysel danışmanlık seansları standart olarak 50 dakika, çift ve aile danışmanlığı seansları ise 60 dakika sürmektedir. Görüşmeler danışanın ihtiyacına göre genellikle haftada bir düzenlenir; süreç ilerledikçe seans aralıkları 15 günde bir olarak planlanabilir.'
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
    question: 'Hangi ekoller ve yöntemler ile çalışıyorsunuz?',
    answer: 'Seanslarımızda danışanın getirdiği konunun özelliğine göre Bilişsel Davranışçı Terapi (BDT) ilkeleri, Şema Terapi teknikleri, EMDR yaklaşımları ve Sistemik Çift & Aile Danışmanlığı modellerinden yararlanılarak kişiye özel bir danışmanlık haritası çıkarılmaktadır.'
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

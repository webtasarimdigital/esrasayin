/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'esrasayin.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/beyoglu-psikolog', destination: '/', permanent: true },
      { source: '/cihangir-psikolog', destination: '/', permanent: true },
      { source: '/taksim-psikolog', destination: '/', permanent: true },
      { source: '/sisli-psikolog', destination: '/', permanent: true },
      { source: '/nisantasi-psikolog', destination: '/', permanent: true },
      { source: '/online-psikolog', destination: '/', permanent: true },
      { source: '/sisli-aile-danismanligi', destination: '/istanbul-aile-terapisi/', permanent: true },
      { source: '/sisli-cift-terapisi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/sisli-evlilik-terapisi', destination: '/istanbul-evlilik-terapisi/', permanent: true },
      { source: '/sisli-cinsel-terapi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/sisli-bireysel-terapi', destination: '/istanbul-bireysel-terapi/', permanent: true },
      { source: '/klinik', destination: '/', permanent: true },
      { source: '/panel', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      // Prohibited / Removed Service Pages
      { source: '/istanbul-cinsel-terapi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/cinsel-terapi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/panik-atak', destination: '/', permanent: true },
      { source: '/kaygi-bozukluklari', destination: '/', permanent: true },
      { source: '/emdr-terapisi', destination: '/', permanent: true },
      { source: '/ergen-terapisi', destination: '/', permanent: true },
      { source: '/istanbul-cift-terapisinde-emdr-yontemi', destination: '/istanbul-cift-terapisi/', permanent: true },
      // Prohibited / Removed Blog Posts
      { source: '/beyoglu-okb-obsesif-kompulsif-terapi', destination: '/', permanent: true },
      { source: '/beyoglu-travma-terapisi-ve-emdr', destination: '/', permanent: true },
      { source: '/beyoglu-psikolog-fiyatlari-seans-ucretleri', destination: '/', permanent: true },
      { source: '/beyoglu-panik-atak-terapisi', destination: '/', permanent: true },
      { source: '/beyoglu-anskiyete-terapisi', destination: '/', permanent: true },
      { source: '/beyoglu-psikolog-adres', destination: '/', permanent: true },
      { source: '/ya-olursa-dusuncesi-ve-kaygi-yonetimi', destination: '/', permanent: true },
      { source: '/emdr-nedir-hangi-durumlarda-ve-nasil-uygulanir', destination: '/', permanent: true },
      { source: '/kaygi-bozuklugu-nedir-belirtileri-ve-cozum-yollari-nelerdir', destination: '/', permanent: true },
      { source: '/panik-atak-nedir', destination: '/', permanent: true },
      { source: '/ergen-terapisi-nedir-neden-ve-nasil-uygulanir', destination: '/', permanent: true },
      { source: '/yeme-bozuklu-nedir-nasil-basa-cikarim', destination: '/', permanent: true },
      { source: '/insanlar-neden-kendine-zarar-verir', destination: '/', permanent: true },
      { source: '/stres-ve-kaygi-bozuklugu-ile-nasil-basa-cikarim', destination: '/', permanent: true },
      { source: '/akran-zorbaligi-nedir', destination: '/', permanent: true },
      { source: '/cift-terapisinde-emdr-yonteminin-faydalari', destination: '/istanbul-cift-terapisi/', permanent: true },
    ];
  },
};

export default nextConfig;

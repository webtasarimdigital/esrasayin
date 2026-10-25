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
      { source: '/klinik', destination: '/', permanent: true },
      { source: '/panel', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      // Removed Pages
      { source: '/anasayfa', destination: '/', permanent: true },
      { source: '/panik-atak', destination: '/', permanent: true },
      { source: '/ergen-terapisi', destination: '/', permanent: true },
      { source: '/cinsel-terapi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/istanbul-cinsel-terapi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/sisli-cinsel-terapi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/istanbul-terapiler', destination: '/', permanent: true },
      { source: '/emdr-terapisi', destination: '/', permanent: true },
      { source: '/istanbul-cift-terapisinde-emdr-yontemi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/sisli-aile-danismanligi', destination: '/istanbul-aile-terapisi/', permanent: true },
      { source: '/sisli-bireysel-terapi', destination: '/istanbul-bireysel-terapi/', permanent: true },
      { source: '/sisli-cift-terapisi', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/sisli-evlilik-terapisi', destination: '/istanbul-evlilik-terapisi/', permanent: true },
      { source: '/online-psikolog', destination: '/', permanent: true },
      // Removed Blog Posts
      { source: '/1032-beyoglu-okb-obsesif-kompulsif-terapi', destination: '/', permanent: true },
      { source: '/beyoglu-okb-obsesif-kompulsif-terapi', destination: '/', permanent: true },
      { source: '/1024-beyoglu-travma-terapisi-ve-emdr', destination: '/', permanent: true },
      { source: '/beyoglu-travma-terapisi-ve-emdr', destination: '/', permanent: true },
      { source: '/579-emdr-nedir-hangi-durumlarda-ve-nasil-uygulanir', destination: '/', permanent: true },
      { source: '/emdr-nedir-hangi-durumlarda-ve-nasil-uygulanir', destination: '/', permanent: true },
      { source: '/425-cift-terapisinde-emdr-yonteminin-faydalari', destination: '/istanbul-cift-terapisi/', permanent: true },
      { source: '/459-insanlar-neden-kendine-zarar-verir', destination: '/', permanent: true },
      { source: '/insanlar-neden-kendine-zarar-verir', destination: '/', permanent: true },
      { source: '/547-ergen-terapisi-nedir-neden-ve-nasil-uygulanir', destination: '/', permanent: true },
      { source: '/ergen-terapisi-nedir-neden-ve-nasil-uygulanir', destination: '/', permanent: true },
      { source: '/553-bdt-nedir-hangi-durumlarda-ve-nasil-uygulanir', destination: '/', permanent: true },
      { source: '/bdt-nedir-hangi-durumlarda-ve-nasil-uygulanir', destination: '/', permanent: true },
      { source: '/550-panik-atak-nedir', destination: '/', permanent: true },
      { source: '/panik-atak-nedir', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;

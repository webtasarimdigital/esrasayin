const testUrls = [
  { url: 'http://localhost:3000/', expected: 'Aile ve Evlilik, Çift, İlişki Danışmanı' },
  { url: 'http://localhost:3000/istanbul-psikolog-esra-sayin/', expected: 'Esra Sayın' },
  { url: 'http://localhost:3000/istanbul-bireysel-terapi/', expected: 'Bireysel Terapi' },
  { url: 'http://localhost:3000/istanbul-aile-terapisi/', expected: 'Aile' },
  { url: 'http://localhost:3000/istanbul-cift-terapisi/', expected: 'Çift' },
  { url: 'http://localhost:3000/istanbul-evlilik-terapisi/', expected: 'Evlilik' },
  { url: 'http://localhost:3000/istanbul-cinsel-terapi/', expected: 'Cinsel' },
  { url: 'http://localhost:3000/istanbul-psikolog-iletisim/', expected: 'İletişim' },
  { url: 'http://localhost:3000/istanbul-psikolog-randevu/', expected: 'Randevu' },
  { url: 'http://localhost:3000/istanbul-psikolog-tavsiye/', expected: 'Yorumlar' },
  { url: 'http://localhost:3000/blog/', expected: 'Zihinsel Sağlığınız için' },
  { url: 'http://localhost:3000/1034-beyoglu-yas-terapisi-kayip-destek/', expected: 'Beyoğlu Yas Terapisi' },
  { url: 'http://localhost:3000/1032-beyoglu-okb-obsesif-kompulsif-terapi/', expected: 'OKB' },
  { url: 'http://localhost:3000/beyoglu-psikolog/', expected: 'Beyoğlu' },
  { url: 'http://localhost:3000/cihangir-psikolog/', expected: 'Cihangir' },
  { url: 'http://localhost:3000/taksim-psikolog/', expected: 'Taksim' },
  { url: 'http://localhost:3000/sitemap.xml', expected: '<urlset' },
  { url: 'http://localhost:3000/robots.txt', expected: 'Sitemap:' },
];

async function runTests() {
  console.log('=== CANLI ROTA VE BİLEŞEN TESTLERİ ===\n');
  let passed = 0;
  let failed = 0;

  for (const t of testUrls) {
    try {
      const res = await fetch(t.url);
      const text = await res.text();
      const statusOk = res.status === 200;
      const contentOk = text.includes(t.expected);

      if (statusOk && contentOk) {
        console.log(`✅ [200 OK] ${t.url} -> Bulundu: "${t.expected}"`);
        passed++;
      } else {
        console.error(`❌ [HATA ${res.status}] ${t.url} -> Beklenen içerik bulunamadı: "${t.expected}"`);
        failed++;
      }
    } catch (err) {
      console.error(`❌ [İSTİSNA] ${t.url}: ${err.message}`);
      failed++;
    }
  }

  // Test 404
  try {
    const res404 = await fetch('http://localhost:3000/gecersiz-sayfa-ornek-404/');
    if (res404.status === 404) {
      console.log(`✅ [404 OK] Geçersiz link yönlendirmesi 404 Not Found döndürdü.`);
      passed++;
    } else {
      console.log(`⚠️ [UYARI] Beklenen 404 yerine ${res404.status} döndü.`);
    }
  } catch (err) {
    console.error(err);
  }

  // Specific check for mobile navigation components on homepage
  try {
    const res = await fetch('http://localhost:3000/');
    const html = await res.text();
    
    console.log('\n=== BİLEŞEN DOĞRULAMALARI ===');
    const checks = [
      { name: 'Mobil Üst Navbar (Dark Rounded Header)', test: html.includes('bg-[#2c3e50]') },
      { name: 'Mobil Alt Sabit Bar (Sticky Bottom Nav)', test: html.includes('Mobil alt navigasyon') },
      { name: 'Alt Bar "Anasayfa" Butonu', test: html.includes('Anasayfa') },
      { name: 'Alt Bar "Hakkında" Butonu', test: html.includes('Hakkında') },
      { name: 'Alt Bar "Yorumlar" Butonu', test: html.includes('Yorumlar') },
      { name: 'Alt Bar "Randevu Al" Butonu', test: html.includes('Randevu Al') },
      { name: 'Hero RANDEVU AL Butonu', test: html.includes('RANDEVU AL') },
      { name: 'Hero HEMEN ARAYIN Butonu', test: html.includes('HEMEN ARAYIN') },
      { name: 'Hero Fotoğrafı (psikolog-esra-sayin-updated-hero.webp)', test: html.includes('psikolog-esra-sayin-updated-hero.webp') },
      { name: 'Google LocalBusiness Schema (JSON-LD)', test: html.includes('ProfessionalService') },
      { name: 'WhatsApp Randevu Entegrasyonu (wa.me/905386503217)', test: html.includes('wa.me/905386503217') },
      { name: 'Google Maps Embed (Sıraselviler Cad. Cihangir)', test: html.includes('google.com/maps/embed') },
    ];

    checks.forEach(c => {
      if (c.test) {
        console.log(`✅ ${c.name}: ÇALIŞIYOR`);
        passed++;
      } else {
        console.error(`❌ ${c.name}: BULUNAMADI`);
        failed++;
      }
    });

  } catch (e) {
    console.error(e);
  }

  console.log(`\n================================`);
  console.log(`TOPLAM TEST: ${passed + failed} | BAŞARILI: ${passed} | HATALI: ${failed}`);
  console.log(`================================`);
}

runTests();

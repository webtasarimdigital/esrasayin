async function test() {
  const res = await fetch('http://localhost:3000/');
  const html = await res.text();

  console.log('--- 5 Temel Hizmet Doğrulaması ---');
  console.log('1. Bireysel Danışmanlık:', html.includes('Bireysel Danışmanlık'));
  console.log('2. Aile Danışmanlığı:', html.includes('Aile Danışmanlığı'));
  console.log('3. Çift Danışmanlığı:', html.includes('Çift Danışmanlığı'));
  console.log('4. Evlilik Danışmanlığı:', html.includes('Evlilik Danışmanlığı'));
  console.log('5. Cinsel Danışmanlık:', html.includes('Cinsel Danışmanlık'));

  console.log('\n--- Yasaklı / İstenmeyen İfade Kontrolleri ---');
  console.log('Cinsel Terapi var mı (False olmalı):', html.includes('Cinsel Terapi'));
  console.log('terapist kelimesi var mı (False olmalı):', html.toLowerCase().includes('terapist'));
}

test();

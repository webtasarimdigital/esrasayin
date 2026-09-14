import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));

const aboutIndex = pages.findIndex((p) => p.permalink === 'istanbul-psikolog-esra-sayin');

if (aboutIndex !== -1) {
  const cleanHtml = `
<div class="space-y-10">
  <!-- Giriş / Biyografi -->
  <div class="bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
    <div class="inline-block text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
      / ÖZGEÇMİŞ &amp; AKADEMİK GEÇMİŞ /
    </div>
    <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-snug">
      Aile ve Evlilik, Çift, İlişki Danışmanı <span class="text-indigo-600">Esra Sayın</span>
    </h2>
    
    <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
      <p>
        Aile ve Evlilik, Çift, İlişki Danışmanı olan <strong>Esra Sayın</strong>, 1987 yılında İstanbul’da doğmuştur. Lisans eğitimini üstün başarıyla üç yılda tamamlayarak <strong>Onur derecesiyle</strong> mezun olmuştur.
      </p>
      <p>
        Eğitimlerini <strong>İstanbul Üniversitesi</strong>’nde tamamlamış; özellikle Aile Danışmanlığı, Çift Danışmanlığı, Bireysel Danışmanlık ve Cinsel Danışmanlık alanlarında yüzlerce danışan görerek kapsamlı bir saha tecrübesi edinmiştir.
      </p>
      <p>
        <strong>Klinik Psikoloji alanında tezli yüksek lisans</strong> eğitimini başarıyla tamamlamıştır. Yüksek lisans sürecinde psikopatoloji, danışmanlık kuramları, psikolojik değerlendirme yöntemleri, kişilik testleri ve vaka analizleri gibi temel klinik alanlarda kuramsal ve uygulamalı derinlik kazanmıştır.
      </p>
      <p>
        Aile yapılarındaki değişimlerin bireylerin psikolojik işleyişi üzerindeki etkilerini analiz etmeye yönelik akademik çalışmalar gerçekleştirmiştir. Özellikle aile dinamiklerini çok boyutlu değerlendirme, kuşaklar arası çatışmalar, ebeveynlik rolleri, bağlanma örüntüleri ve sosyal izolasyon konularına yoğunlaşmıştır.
      </p>
      <p>
        Uzun yıllar <strong>Türk Hava Yolları Anonim Şirketi</strong>’nde kurumsal görevlerde bulunduktan sonra 2022 yılında <strong>ESRA SAYIN PSİKOAKADEMİ</strong>’yi kurmuştur. 2022 yılından bu yana kurucusu olduğu merkezde, İstanbul Beyoğlu Cihangir’deki ofisinde aktif olarak <strong>12 yaş üstü</strong> danışan kabul etmektedir.
      </p>
    </div>
  </div>

  <!-- Mesleki Eğitimler & Sertifikalar -->
  <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
    <div class="inline-block text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
      / YETKİNLİKLER &amp; EĞİTİMLER /
    </div>
    <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
      Mesleki Eğitimler ve Akreditasyonlar
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Aile Danışmanlığı Eğitimi (İstanbul Üniversitesi)</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Bilişsel Davranışçı Terapi (BDT) Uygulayıcı Eğitimi</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>EMDR Terapisi (Sertifika No: Un_0401427811428813102320)</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Şema Terapi Eğitimi</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Psikodinamik Terapi Eğitimi</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Cinsel Danışmanlık ve Fonksiyonel Yaklaşımlar</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Minnesota Çok Yönlü Kişilik Envanteri (MMPI)</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Kısa Süreli Çözüm Odaklı Terapi Eğitimi</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Ergenlerde Klinik Görüşme Teknikleri</span>
      </div>
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
        <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
        <span>Stres ve Travma Yönetimi Uygulayıcı Eğitimi</span>
      </div>
    </div>
  </div>

  <!-- Çalışma Ekolleri & Metotlar -->
  <div class="bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
    <div class="inline-block text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
      / METODOLOJİ &amp; BİLİMSEL EKOL /
    </div>
    <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
      Danışmanlık Süreçlerinde Yararlanılan Temel Ekoller
    </h3>

    <div class="space-y-4">
      <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <h4 class="text-base font-bold text-slate-900 mb-1">
          Bilişsel Davranışçı Terapi (BDT / CBT)
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Bireyin duygusal zorlanmalarına neden olan otomatik olumsuz düşünce kalıplarını fark etmesini, bunları işlevsel ve gerçekçi alternatiflerle dönüştürmesini amaçlayan bilimsel bir yöntemdir.
        </p>
      </div>

      <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <h4 class="text-base font-bold text-slate-900 mb-1">
          EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme)
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Geçmişte yaşanan sarsıcı veya travmatik deneyimlerin beyinde sağlıklı biçimde işlenerek bugünkü duygu ve tepkiler üzerindeki yıpratıcı etkisini hafifleten kanıta dayalı bir tekniktir.
        </p>
      </div>

      <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <h4 class="text-base font-bold text-slate-900 mb-1">
          Şema Terapi
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Çocukluk ve ilk gençlik döneminde karşılanmamış duygusal ihtiyaçlardan kaynaklanan kök inançları ve tekrarlayan ilişki döngülerini dönüştürmeye odaklanır.
        </p>
      </div>

      <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <h4 class="text-base font-bold text-slate-900 mb-1">
          Sistemik Aile ve Çift Danışmanlığı
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          İlişkiyi ve aileyi dinamik bir sistem olarak ele alarak iletişim tıkanıklıklarını, rol karmaşalarını ve çatışma çözme becerilerini geliştirmeyi hedefler.
        </p>
      </div>
    </div>
  </div>
</div>
`;

  pages[aboutIndex].content = cleanHtml.trim();
  pages[aboutIndex].excerpt = "Uzman Psikolog & Aile Danışmanı Esra Sayın özgeçmişi, İstanbul Üniversitesi ve Klinik Psikoloji yüksek lisans eğitimi, akreditasyonları ve uzmanlık alanları.";
  fs.writeFileSync('src/data/pages.json', JSON.stringify(pages, null, 2), 'utf8');
  console.log('Successfully updated istanbul-psikolog-esra-sayin in pages.json!');
} else {
  console.log('Could not find istanbul-psikolog-esra-sayin');
}

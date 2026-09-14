import fs from 'fs';
import path from 'path';

console.log('--- Converting "terapi" and "terapist" to "danışmanlık" and "danışman" ---');

// 1. Process posts.json & pages.json
function processDataFiles() {
  const files = ['src/data/posts.json', 'src/data/pages.json'];

  files.forEach((f) => {
    let content = fs.readFileSync(f, 'utf8');

    // Specific service titles
    content = content.replace(/Cinsel Terapi/g, 'Cinsel Danışmanlık');
    content = content.replace(/cinsel terapi/g, 'cinsel danışmanlık');
    content = content.replace(/Bireysel Terapi/g, 'Bireysel Danışmanlık');
    content = content.replace(/bireysel terapi/g, 'bireysel danışmanlık');
    content = content.replace(/Aile Terapisi/g, 'Aile Danışmanlığı');
    content = content.replace(/aile terapisi/g, 'aile danışmanlığı');
    content = content.replace(/Çift Terapisi/g, 'Çift Danışmanlığı');
    content = content.replace(/çift terapisi/g, 'çift danışmanlığı');
    content = content.replace(/Evlilik Terapisi/g, 'Evlilik Danışmanlığı');
    content = content.replace(/evlilik terapisi/g, 'evlilik danışmanlığı');
    content = content.replace(/Ergen Terapisi/g, 'Ergen Danışmanlığı');
    content = content.replace(/ergen terapisi/g, 'ergen danışmanlığı');
    content = content.replace(/Yas Terapisi/g, 'Yas Danışmanlığı');
    content = content.replace(/yas terapisi/g, 'yas danışmanlığı');
    content = content.replace(/Online Terapi/g, 'Online Danışmanlık');
    content = content.replace(/online terapi/g, 'online danışmanlık');
    content = content.replace(/Travma Terapisi/g, 'Travma Danışmanlığı');
    content = content.replace(/travma terapisi/g, 'travma danışmanlığı');
    content = content.replace(/Öz Güven Terapisi/g, 'Öz Güven Danışmanlığı');
    content = content.replace(/öz güven terapisi/g, 'öz güven danışmanlığı');

    // Terapist -> Danışman / Psikolog
    content = content.replace(/psikoterapist/gi, 'psikolog ve aile danışmanı');
    content = content.replace(/terapist/gi, 'psikolojik danışman');

    // Terapi odası, seansı, süreci
    content = content.replace(/terapi seansları/gi, 'danışmanlık seansları');
    content = content.replace(/terapi seansı/gi, 'danışmanlık seansı');
    content = content.replace(/terapi süreci/gi, 'danışmanlık süreci');
    content = content.replace(/terapi sürecinde/gi, 'danışmanlık sürecinde');
    content = content.replace(/terapi odasında/gi, 'görüşme odasında');

    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated ${f}`);
  });
}

processDataFiles();

# puppeteer


vs code terminalden restapi içerisine girip sırasıyla
npm i puppeteer //(puppeteer için)
npm install
npx express-generator //(express için)
npm install
npm install dotenv --save //(.env için)

komutlarını çalıştırınız gerekli dosyaların yükleme işlemi bittikten sonra restapi içerisinden terminale 'node api' yazarak çalıştırabilirsiniz.

api.js içerisinde verilen proxy .env dosyası üzerinden değiştirilebilir.





 test caselerin çalışması..
 
 https://forum.donanimhaber.com/

featured_list_script = '';let featured_list = [];let tech_popular = document.querySelector('#displayMoreButtonAreaTechnologyFeatured');let other_popular1 = document.querySelector('#displayMoreButtonArea');let other_popular2 = document.querySelector('#getMorePopularTopic');for (let i = 0; i < 10; i++) { if (tech_popular.innerText === 'Daha Fazla Yok' && other_popular1.innerText === 'Daha Fazla Yok' && other_popular2.innerText === 'Daha Fazla Yok') {break; } tech_popular.click();other_popular1.click();other_popular2.click();}; const get = (selector, scope) => { scope = scope ? scope : document;return scope.querySelector(selector);};const getAll = (selector, scope) => {scope = scope ? scope : document;return scope.querySelectorAll(selector);};getAll('#ul-container-technology-featured .populersatir').forEach((item) => {let only_title_pattern = /(.+)/;let title = item.innerText.match(only_title_pattern)[0];let url = item.childNodes[3].href; featured_list.push({'title': title,'link': url });});getAll('#featuredTopicsModule #ul-container .populersatir').forEach((item) => {let only_title_pattern = /(.+)/;let title = item.innerText.match(only_title_pattern)[0]; let url = item.childNodes[3].href;featured_list.push({'title': title, 'link': url});});getAll('#PopularTopicsContent .populersatir').forEach((item) => { let only_title_pattern = /(.+)/; let title = item.innerText.match(only_title_pattern)[0];let url = item.childNodes[3].href; featured_list.push({'title':title,'link':url});}) ;featured_list;

sonlarına ; konuldu. return kaldırıldı

https://eksisozluk.com/basliklar/gundem

agenda_list_script = ''; let agenda_list = []; const get = (selector, scope) => {scope = scope ? scope : document; return scope.querySelector(selector); }; const getAll = (selector, scope) => { scope = scope ? scope : document; return scope.querySelectorAll(selector); };getAll('#container ul.topic-list a').forEach((item) => { let title = item.innerHTML;let url = item.href; let entry = '1';if (title.includes('<small>')) { let pattern = new RegExp ('(.+)<small>(.+)<\/small>');let title_with_more_entry = title.match(pattern); entry = title_with_more_entry[2]; title = title_with_more_entry[1].slice(0, -1); } agenda_list.push({   'title': title,  'total_entry_count': entry,  'link': url })}); agenda_list;
regex kullanırken ilk sıradakini kullanın.

var myRegEx = new RegExp("pattern") ; this
var myRegEx = /pattern/ ; not this


script içerisinde çift tırnak değil tek tırnak kabul ediliyor.


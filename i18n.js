// Переводы сайта: EN / RU / KZ. Ключ → текст. Казахский и русский — черновой перевод, стоит вычитать носителю.
// Чтобы поправить фразу — меняйте её здесь; на страницах тексты подставляются по ключу.
const I18N = {
  en: {
    'nav.projects': 'Projects', 'nav.gallery': 'Gallery', 'nav.about': 'About Us', 'nav.contact': 'Contact us',
    'menu': 'Menu', 'close': 'Close', 'copied': 'Copied',
    'hero': '{WM}is a design laboratory exploring and building <span class="nw">a {ART} new</span> visual<br class="hb"> identity for Central Asia. We create brands, visual systems and design for businesses, cultural<br class="hb"> projects and people with ideas.',
    'projects': 'Projects', 'viewAll': 'All', 'spheres': 'Industry',
    'city': 'Almaty', 'cityKZ': 'Almaty, KZ',
    'f.links': 'Other Links:', 'f.question': 'Do you have a question?', 'f.write': 'Write us', 'f.rights': 'All rights reserved © 2026. Oi.Lab Design Studio',
    'c.project': 'Project:', 'c.prev': 'Previous', 'c.next': 'Next', 'c.more': 'Read More', 'c.goal': 'Approach:',
    'c.info': 'Additional Information', 'c.services': 'Services', 'c.year': 'Year', 'c.photo': 'Photo', 'c.photoText': 'Photo for the text',
    'c.tagline': 'Short tagline about the project in one line.',
    'c.statement': 'A short key idea of the project in one or two lines.',
    'c.moreText': ['Longer story for those who want details: who the client is, what was happening with the brand and why it needed change.', 'What the studio found during research and how that shaped the direction.'],
    'c.goalText': ['What the client needed and what the studio set out to do.', 'The first objective of the project, in one or two sentences.', 'The second objective, if there is one.'],
    'c.infoText': 'Additional details: references, materials, production, where the identity lives — from packaging and print to digital and social media.',
    'g.title': 'Gallery', 'g.all': 'All Projects', 'g.shuffle': 'Shuffle', 'b.tip': 'Got a project?', 'b.title': 'Hi! Tell us about your project', 'b.sub': 'Write to us directly or leave a few lines here — we reply within a day.', 'b.name': 'Your name', 'b.reach': 'Email or Telegram', 'b.about': 'About the project', 'b.send': 'Send', 'b.note': 'We reply within a day.', 'b.sending': 'Sending…', 'b.sent': 'Thank you! Your request has been sent — we will get back to you soon.', 'b.error': 'Could not send. Please write to us directly:', 'soon': 'Coming soon', 'more.title': 'More projects', 'more.noteT': 'We\'re still adding work to the site', 'more.note': 'These are projects whose case studies we\'re preparing right now. Have a look at the covers — and we\'ll gladly walk you through any of them in person.', 'more.back': 'Back to home', 'more.ok': 'Got it', 'peek.text': 'Case study in progress. Want to see the whole project now? Write to us.', 'peek.cta': 'Contact us',
    'a.studio': 'The Studio', 'a.studioText': 'Oi.Lab is a design agency that explores and creates a new visual image of Central Asia.', 'a.studioText2': 'We make emotional design grounded in research, cultural context and what makes each project unique.',
    'a.founder': 'Team', 'a.teamTitle': 'Oi.Lab Team', 'a.team': [['Aibyn Oten', 'Producer', 'Connects the team, the client and the project’s goals. Responsible for processes, deadlines and communication, so that agreements turn into results.'], ['Konstantin Kim', 'Design Director', 'Understands business goals and knows how to translate them into design. Has worked across many fields — from restaurants to consulting firms.'], ['Raim Aisin', 'Lead Designer', 'More than 100 completed projects. Has the skills needed to create and develop visual systems. Responsible for bringing ideas to life and for design quality.'], ['Tolegen Sagymbay', 'Art Director', '9 years in design, experience with major brands — Yandex, Fila and Kappa. Responsible for the visual direction of projects and the development of Oi.Lab.']],
    'a.principles': 'Design Principles', 'a.services': 'Our Services', 'a.clients': 'Our Clients',
    'a.recognition': 'Recognition', 'a.recognitionText': 'Awards, publications and features — to be added.',
    'a.contact': 'Contact', 'a.copy': 'Copy email',
    'a.principleList': [
      ['Thought comes first', 'Oi means thought. Before form, colour or type we look for the idea that makes a brand worth remembering.'],
      ['Rooted, not nostalgic', 'We take the culture, crafts and stories of Central Asia as a source — and make them speak a contemporary language.'],
      ['Be honest', 'Clear words and honest form. We say what we think and design what the brand really is.'],
      ['Details carry meaning', 'A letter, a tag, a seam on merch — small things are where a brand becomes real.'],
      ['Built to last', 'We design systems that grow with the brand, not trends that fade by next season.'],
      ['Kind to everyone', 'Good work comes from good relationships — with clients, collaborators and each other.'],
    ],
    'a.serviceList': ['Strategy','Visual Identity','Brandbooks','Art Direction','Posters','Merch','SMM Design','Motion','Cultural Projects'],
  },
  ru: {
    'nav.projects': 'Проекты', 'nav.gallery': 'Галерея', 'nav.about': 'О нас', 'nav.contact': 'Связаться с нами',
    'menu': 'Меню', 'close': 'Закрыть', 'copied': 'Скопировано',
    'hero': '{WM}дизайн-лаборатория, которая исследует и создаёт <span class="nw">{ART} новую</span><br> визуальную идентичность Центральной Азии. Мы создаём бренды, визуальные системы и дизайн для бизнеса, культурных проектов и людей с идеями.',
    'projects': 'Проекты', 'viewAll': 'Все', 'spheres': 'Сферы',
    'city': 'Алматы', 'cityKZ': 'Алматы, KZ',
    'f.links': 'Ссылки:', 'f.question': 'Есть вопрос?', 'f.write': 'Написать нам', 'f.rights': 'Все права защищены © 2026. Oi.Lab Design Studio',
    'c.project': 'Проект:', 'c.prev': 'Назад', 'c.next': 'Дальше', 'c.more': 'Подробнее', 'c.goal': 'Подход:',
    'c.info': 'Дополнительно', 'c.services': 'Услуги', 'c.year': 'Год', 'c.photo': 'Фото', 'c.photoText': 'Фото к тексту',
    'c.tagline': 'Короткая фраза о проекте в одну строку.',
    'c.statement': 'Ключевая мысль проекта в одну-две строки.',
    'c.moreText': ['Подробная история для тех, кому интересно: кто клиент, что происходило с брендом и зачем ему понадобились перемены.', 'Что студия нашла в исследовании и как это определило направление.'],
    'c.goalText': ['Что было нужно клиенту и что студия решила сделать.', 'Первая цель проекта — в одном-двух предложениях.', 'Вторая цель, если она есть.'],
    'c.infoText': 'Дополнительные детали: референсы, материалы, производство, где живёт айдентика — от упаковки и печати до диджитала и соцсетей.',
    'g.title': 'Галерея', 'g.all': 'Все проекты', 'g.shuffle': 'Перемешать', 'b.tip': 'Есть проект?', 'b.title': 'Привет! Расскажите о проекте', 'b.sub': 'Напишите нам напрямую или оставьте пару строк здесь — ответим в течение дня.', 'b.name': 'Ваше имя', 'b.reach': 'Почта или Telegram', 'b.about': 'О проекте', 'b.send': 'Отправить', 'b.note': 'Ответим в течение дня.', 'b.sending': 'Отправляем…', 'b.sent': 'Спасибо! Заявка отправлена — скоро свяжемся с вами.', 'b.error': 'Не получилось отправить. Напишите нам напрямую:', 'soon': 'Скоро', 'more.title': 'Ещё проекты', 'more.noteT': 'Мы ещё переносим работы на сайт', 'more.note': 'Здесь проекты, кейсы которых мы сейчас готовим. Обложки уже можно посмотреть, а полную историю любого проекта покажем лично.', 'more.back': 'На главную', 'more.ok': 'Понятно', 'peek.text': 'Кейс готовится. Хотите увидеть проект целиком уже сейчас — напишите нам.', 'peek.cta': 'Связаться с нами',
    'a.studio': 'Студия', 'a.studioText': 'Oi.Lab — дизайн-агентство, которое исследует и создаёт новый визуальный образ Центральной Азии.', 'a.studioText2': 'Создаём эмоциональный дизайн, основанный на исследовании, культурном контексте и уникальности проекта.',
    'a.founder': 'Команда', 'a.teamTitle': 'Команда Oi.Lab', 'a.team': [['Айбын Отен', 'Продюсер', 'Связывает команду, клиента и задачи проекта. Отвечает за процессы, сроки и коммуникацию, чтобы договорённости превращались в результат.'], ['Константин Ким', 'Дизайн директор', 'Понимает задачи бизнеса и умеет переводить их в дизайн. Работал с разными сферами — от ресторанов до консалтинговых компаний.'], ['Раим Айсин', 'Главный дизайнер', 'Более 100 реализованных проектов. Владеет необходимыми навыками для создания и развития визуальных систем. Отвечает за реализацию идей и качество дизайна.'], ['Толеген Сагымбай', 'Арт-Директор', '9 лет в дизайне, опыт работы с крупными брендами — Yandex, Fila и Kappa. Отвечает за визуальное направление проектов и развитие Oi.Lab.']],
    'a.principles': 'Принципы', 'a.services': 'Услуги', 'a.clients': 'Клиенты',
    'a.recognition': 'Признание', 'a.recognitionText': 'Награды, публикации и упоминания — скоро здесь.',
    'a.contact': 'Контакты', 'a.copy': 'Скопировать почту',
    'a.principleList': [
      ['Сначала мысль', '«Ой» — это мысль. Прежде формы, цвета и шрифта мы ищем идею, благодаря которой бренд запоминается.'],
      ['Корни, а не ностальгия', 'Культура, ремёсла и истории Центральной Азии для нас источник — мы учим их говорить современным языком.'],
      ['Честность', 'Ясные слова и честная форма. Говорим, что думаем, и показываем бренд таким, какой он есть.'],
      ['Смысл в деталях', 'Буква, бирка, шов на мерче — именно в мелочах бренд становится настоящим.'],
      ['Надолго', 'Мы делаем системы, которые растут вместе с брендом, а не тренды, которые устаревают к следующему сезону.'],
      ['Доброта ко всем', 'Хорошая работа рождается из хороших отношений — с клиентами, коллегами и друг с другом.'],
    ],
    'a.serviceList': ['Стратегия','Айдентика','Брендбуки','Арт-дирекшн','Плакаты','Мерч','SMM-дизайн','Моушн','Культурные проекты'],
  },
  kk: {
    'nav.projects': 'Жобалар', 'nav.gallery': 'Галерея', 'nav.about': 'Біз туралы', 'nav.contact': 'Байланысу',
    'menu': 'Мәзір', 'close': 'Жабу', 'copied': 'Көшірілді',
    'hero': '{WM}Орталық Азияның <span class="nw">жаңа {ART} визуалды</span> бейнесін зерттеп, жасап жатқан дизайн-зертхана. Біз бизнеске, мәдени жобаларға және идеясы бар адамдарға бренд, визуалды жүйе және дизайн жасаймыз.',
    'projects': 'Жобалар', 'viewAll': 'Барлығы', 'spheres': 'Салалар',
    'city': 'Алматы', 'cityKZ': 'Алматы, KZ',
    'f.links': 'Сілтемелер:', 'f.question': 'Сұрағыңыз бар ма?', 'f.write': 'Бізге жазыңыз', 'f.rights': 'Барлық құқықтар қорғалған © 2026. Oi.Lab Design Studio',
    'c.project': 'Жоба:', 'c.prev': 'Алдыңғы', 'c.next': 'Келесі', 'c.more': 'Толығырақ', 'c.goal': 'Тәсіл:',
    'c.info': 'Қосымша ақпарат', 'c.services': 'Қызметтер', 'c.year': 'Жыл', 'c.photo': 'Фото', 'c.photoText': 'Мәтінге фото',
    'c.tagline': 'Жоба туралы бір жолдық қысқа сөйлем.',
    'c.statement': 'Жобаның басты ойы бір-екі жолда.',
    'c.moreText': ['Қызығушылар үшін толық әңгіме: клиент кім, брендте не болып жатты және оған неге өзгеріс керек болды.', 'Студия зерттеу барысында не тапты және бұл бағытты қалай анықтады.'],
    'c.goalText': ['Клиентке не керек болды және студия не істеуді көздеді.', 'Жобаның бірінші мақсаты — бір-екі сөйлеммен.', 'Екінші мақсат, егер бар болса.'],
    'c.infoText': 'Қосымша мәліметтер: референстер, материалдар, өндіріс, айдентика қай жерде өмір сүреді — қаптама мен баспадан бастап диджитал мен әлеуметтік желілерге дейін.',
    'g.title': 'Галерея', 'g.all': 'Барлық жобалар', 'g.shuffle': 'Араластыру', 'b.tip': 'Жобаңыз бар ма?', 'b.title': 'Сәлем! Жобаңыз туралы айтыңыз', 'b.sub': 'Бізге тікелей жазыңыз немесе осында бірнеше жол қалдырыңыз — бір күн ішінде жауап береміз.', 'b.name': 'Атыңыз', 'b.reach': 'Пошта немесе Telegram', 'b.about': 'Жоба туралы', 'b.send': 'Жіберу', 'b.note': 'Бір күн ішінде жауап береміз.', 'b.sending': 'Жіберілуде…', 'b.sent': 'Рақмет! Өтінім жіберілді — жақында хабарласамыз.', 'b.error': 'Жіберу мүмкін болмады. Бізге тікелей жазыңыз:', 'soon': 'Жақында', 'more.title': 'Басқа жобалар', 'more.noteT': 'Жұмыстарды сайтқа әлі жүктеп жатырмыз', 'more.note': 'Мұнда кейстері қазір дайындалып жатқан жобалар. Мұқабаларын қазір көруге болады, ал кез келген жобаның толық тарихын жеке көрсетеміз.', 'more.back': 'Басты бетке', 'more.ok': 'Түсінікті', 'peek.text': 'Кейс дайындалуда. Жобаны толық қазір көргіңіз келсе — бізге жазыңыз.', 'peek.cta': 'Байланысу',
    'a.studio': 'Студия', 'a.studioText': 'Oi.Lab — Орталық Азияның жаңа визуалды бейнесін зерттеп, жасайтын дизайн-агенттік.', 'a.studioText2': 'Зерттеуге, мәдени контекстке және жобаның бірегейлігіне негізделген эмоционалды дизайн жасаймыз.',
    'a.founder': 'Команда', 'a.teamTitle': 'Oi.Lab командасы', 'a.team': [['Айбын Өтен', 'Продюсер', 'Команданы, клиентті және жоба міндеттерін байланыстырады. Келісімдер нәтижеге айналуы үшін процестерге, мерзімдерге және коммуникацияға жауапты.'], ['Константин Ким', 'Дизайн-директор', 'Бизнес міндеттерін түсінеді және оларды дизайнға аудара біледі. Түрлі салада жұмыс істеген — мейрамханалардан консалтинг компанияларына дейін.'], ['Раим Айсин', 'Бас дизайнер', '100-ден астам жүзеге асқан жоба. Визуалды жүйелерді жасауға және дамытуға қажетті дағдыларды меңгерген. Идеялардың жүзеге асуы мен дизайн сапасына жауапты.'], ['Төлеген Сағымбай', 'Арт-директор', 'Дизайндағы 9 жыл, ірі брендтермен жұмыс тәжірибесі — Yandex, Fila және Kappa. Жобалардың визуалды бағыты мен Oi.Lab-тың дамуына жауапты.']],
    'a.principles': 'Қағидаттар', 'a.services': 'Қызметтер', 'a.clients': 'Клиенттер',
    'a.recognition': 'Мойындау', 'a.recognitionText': 'Марапаттар, жарияланымдар — жақында осында.',
    'a.contact': 'Байланыс', 'a.copy': 'Поштаны көшіру',
    'a.principleList': [
      ['Алдымен ой', '«Ой» — біздің бастауымыз. Пішін, түс пен қаріптен бұрын брендті есте қалдыратын идеяны іздейміз.'],
      ['Тамыр, ностальгия емес', 'Орталық Азияның мәдениеті, қолөнері мен әңгімелері — біз үшін қайнар көз, оларды заманауи тілде сөйлетеміз.'],
      ['Адалдық', 'Анық сөз және адал пішін. Ойымызды айтамыз, брендті бар болмысымен көрсетеміз.'],
      ['Мән — ұсақ-түйекте', 'Әріп, жапсырма, мерчтегі тігіс — бренд дәл осы ұсақ нәрселерде шынайы болады.'],
      ['Ұзақ мерзімге', 'Біз келесі маусымда ескіретін трендтерді емес, бренд пен бірге өсетін жүйелерді жасаймыз.'],
      ['Барлығына мейірім', 'Жақсы жұмыс жақсы қарым-қатынастан туады — клиенттермен, әріптестермен және бір-бірімізбен.'],
    ],
    'a.serviceList': ['Стратегия','Айдентика','Брендбуктер','Арт-дирекшн','Плакаттар','Мерч','SMM-дизайн','Моушн','Мәдени жобалар'],
  },
};
// теги проектов: ключи на английском (в projects.js), колонки — как в фильтре на главной
// сферы деятельности клиентов — фильтр над сеткой проектов (у каждого проекта одно поле field)
const FIELDS = ['Fashion & Apparel', 'Interior & Furniture', 'Film & Media', 'Agencies & Corporate', 'Automotive'];
const TAGS = {
  en: {'Fashion & Apparel':'Fashion','Interior & Furniture':'Interior','Film & Media':'Film','Agencies & Corporate':'Agencies','Websites & UX/UI':'Websites','Motion & 3D':'Motion','Merch & Apparel':'Merch','Events & Spaces':'Events','Film Posters & Key Art':'Film Posters','Titles & Typography':'Typography'},   // одна метка — одно понятие, без «&»
  ru: {'Fashion & Apparel':'Мода','Interior & Furniture':'Интерьер','Film & Media':'Кино','Agencies & Corporate':'Агентства','Automotive':'Автомобили','Branding':'Брендинг','Rebranding':'Ребрендинг','Positioning':'Позиционирование','Naming':'Нейминг','Key Visual':'Key Visual','Art Direction':'Арт-дирекшн','Packaging':'Упаковка','Presentations':'Презентации','Websites & UX/UI':'Сайты','SMM Visuals':'SMM-визуал','Motion & 3D':'Моушн','Merch & Apparel':'Мерч','Events & Spaces':'Ивенты','Print':'Полиграфия','Film Posters & Key Art':'Кинопостеры','Titles & Typography':'Типографика'},
  kk: {'Fashion & Apparel':'Сән','Interior & Furniture':'Интерьер','Film & Media':'Кино','Agencies & Corporate':'Агенттіктер','Automotive':'Автокөлік','Branding':'Брендинг','Rebranding':'Ребрендинг','Positioning':'Позициялау','Naming':'Нейминг','Key Visual':'Key Visual','Art Direction':'Арт-дирекшн','Packaging':'Қаптама','Presentations':'Презентациялар','Websites & UX/UI':'Сайттар','SMM Visuals':'SMM-визуал','Motion & 3D':'Моушн','Merch & Apparel':'Мерч','Events & Spaces':'Ивенттер','Print':'Полиграфия','Film Posters & Key Art':'Кинопостерлер','Titles & Typography':'Типографика'},
};
const LANGS = [['en','EN'],['ru','RU'],['kk','KZ']];
const LOCALE = {en:'en-GB', ru:'ru-RU', kk:'kk-KZ'};
let LANG = (() => { try { return localStorage.getItem('oi-lang'); } catch (e) { return null; } })()
  || ({ru:'ru', kk:'kk'}[(navigator.language || 'en').slice(0,2)] || 'en');

const t = k => (I18N[LANG] && I18N[LANG][k] !== undefined) ? I18N[LANG][k] : (I18N.en[k] !== undefined ? I18N.en[k] : k);
const tr = tag => (TAGS[LANG] && TAGS[LANG][tag]) || tag;

// тексты в разметке: data-i="ключ" → текст, data-ih="ключ" → HTML
function applyI18n(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i]').forEach(e => e.textContent = t(e.dataset.i));
  document.querySelectorAll('[data-ih]').forEach(e => e.innerHTML = t(e.dataset.ih));
  // одна кнопка языка: показывает текущий, по нажатию переключает на следующий (EN → RU → KZ)
  const li = LANGS.findIndex(([k]) => k === LANG), nx = LANGS[(li + 1) % LANGS.length][0];
  document.querySelectorAll('.langs').forEach(el => el.innerHTML = `<button type="button" class="lang-pill" data-lang="${nx}" aria-label="Language">${LANGS[li][1]}</button>`);
}
function setLang(l){
  LANG = l; try { localStorage.setItem('oi-lang', l); } catch (e) {}
  applyI18n();
  if (document.getElementById('contact')) chromeTexts();
  if (typeof window.pageRender === 'function') window.pageRender();
}
document.addEventListener('click', e => { const b = e.target.closest('[data-lang]'); if (b) setLang(b.dataset.lang); });

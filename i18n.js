// Переводы сайта: EN / RU / KZ. Ключ → текст. Казахский и русский — черновой перевод, стоит вычитать носителю.
// Чтобы поправить фразу — меняйте её здесь; на страницах тексты подставляются по ключу.
const I18N = {
  en: {
    'nav.projects': 'Projects', 'nav.gallery': 'Gallery', 'nav.about': 'About Us', 'nav.contact': 'Contact',
    'menu': 'Menu', 'close': 'Close', 'copied': 'Copied',
    'hero': '{WM}is a design laboratory exploring and building <span class="nw">a {ART} new</span><br> visual identity for Central Asia. We create brands, visual systems and design for businesses, cultural projects and people with ideas.',
    'projects': 'Projects', 'viewAll': 'View all',
    'city': 'Almaty', 'cityKZ': 'Almaty, KZ',
    'f.links': 'Other Links:', 'f.question': 'Do you have a question?', 'f.write': 'Write us', 'f.rights': 'All rights reserved © 2026. Oi.Lab Design Studio',
    'c.project': 'Project:', 'c.prev': 'Previous', 'c.next': 'Next', 'c.more': 'Read More', 'c.goal': 'The goal:',
    'c.info': 'Additional Information', 'c.services': 'Services', 'c.year': 'Year', 'c.photo': 'Photo', 'c.photoText': 'Photo for the text',
    'c.tagline': 'Short tagline about the project in one line.',
    'c.statement': 'A short key idea of the project in one or two lines.',
    'c.moreText': ['Longer story for those who want details: who the client is, what was happening with the brand and why it needed change.', 'What the studio found during research and how that shaped the direction.'],
    'c.goalText': ['What the client needed and what the studio set out to do.', 'The first objective of the project, in one or two sentences.', 'The second objective, if there is one.'],
    'c.infoText': 'Additional details: references, materials, production, where the identity lives — from packaging and print to digital and social media.',
    'g.title': 'Gallery', 'g.all': 'All Projects', 'g.shuffle': 'Shuffle', 'b.tip': 'Got a project?', 'b.title': 'Hi! Tell us about your project', 'b.sub': 'Write to us directly or leave a few lines here — we reply within a day.', 'b.name': 'Your name', 'b.reach': 'Email or Telegram', 'b.about': 'About the project', 'b.send': 'Send', 'b.note': 'We reply within a day.', 'b.sending': 'Sending…', 'b.sent': 'Thank you! Your request has been sent — we will get back to you soon.', 'b.error': 'Could not send — opening your mail app instead.', 'soon': 'Coming soon',
    'a.studio': 'The Studio', 'a.studioText': 'Oi.Lab is a design laboratory from Almaty. “Oi” means “thought”: we start every project with an idea and turn it into brands, visual systems, posters and merch for businesses, cultural projects and people with ideas — building a new visual identity for Central Asia.',
    'a.founder': 'Founder', 'a.founderText': "Hi, I'm Tolegen Sagimbay, graphic designer and art director. I started Oi.Lab to show that the visual language of Central Asia can be contemporary, bold and recognisable far beyond the region.",
    'a.founderNote': "Oimen oina — play with thought. If you have an idea, let's talk.",
    'a.portrait': 'Portrait', 'a.studioPh': 'Studio', 'a.process': 'Process',
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
    'nav.projects': 'Проекты', 'nav.gallery': 'Галерея', 'nav.about': 'О нас', 'nav.contact': 'Контакты',
    'menu': 'Меню', 'close': 'Закрыть', 'copied': 'Скопировано',
    'hero': '{WM}дизайн-лаборатория, которая исследует и создаёт <span class="nw">{ART} новую</span><br> визуальную идентичность Центральной Азии. Мы создаём бренды, визуальные системы и дизайн для бизнеса, культурных проектов и людей с идеями.',
    'projects': 'Проекты', 'viewAll': 'Все проекты',
    'city': 'Алматы', 'cityKZ': 'Алматы, KZ',
    'f.links': 'Ссылки:', 'f.question': 'Есть вопрос?', 'f.write': 'Написать нам', 'f.rights': 'Все права защищены © 2026. Oi.Lab Design Studio',
    'c.project': 'Проект:', 'c.prev': 'Назад', 'c.next': 'Дальше', 'c.more': 'Подробнее', 'c.goal': 'Задача:',
    'c.info': 'Дополнительно', 'c.services': 'Услуги', 'c.year': 'Год', 'c.photo': 'Фото', 'c.photoText': 'Фото к тексту',
    'c.tagline': 'Короткая фраза о проекте в одну строку.',
    'c.statement': 'Ключевая мысль проекта в одну-две строки.',
    'c.moreText': ['Подробная история для тех, кому интересно: кто клиент, что происходило с брендом и зачем ему понадобились перемены.', 'Что студия нашла в исследовании и как это определило направление.'],
    'c.goalText': ['Что было нужно клиенту и что студия решила сделать.', 'Первая цель проекта — в одном-двух предложениях.', 'Вторая цель, если она есть.'],
    'c.infoText': 'Дополнительные детали: референсы, материалы, производство, где живёт айдентика — от упаковки и печати до диджитала и соцсетей.',
    'g.title': 'Галерея', 'g.all': 'Все проекты', 'g.shuffle': 'Перемешать', 'b.tip': 'Есть проект?', 'b.title': 'Привет! Расскажите о проекте', 'b.sub': 'Напишите нам напрямую или оставьте пару строк здесь — ответим в течение дня.', 'b.name': 'Ваше имя', 'b.reach': 'Почта или Telegram', 'b.about': 'О проекте', 'b.send': 'Отправить', 'b.note': 'Ответим в течение дня.', 'b.sending': 'Отправляем…', 'b.sent': 'Спасибо! Заявка отправлена — скоро свяжемся с вами.', 'b.error': 'Не получилось отправить — открываем почту.', 'soon': 'Скоро',
    'a.studio': 'Студия', 'a.studioText': 'Oi.Lab — дизайн-лаборатория из Алматы. «Ой» по-казахски — «мысль»: каждый проект мы начинаем с идеи и превращаем её в бренды, визуальные системы, плакаты и мерч для бизнеса, культурных проектов и людей с идеями — создавая новую визуальную идентичность Центральной Азии.',
    'a.founder': 'Основатель', 'a.founderText': 'Привет, я Толеген Сагимбай, графический дизайнер и арт-директор. Я основал Oi.Lab, чтобы показать: визуальный язык Центральной Азии может быть современным, смелым и узнаваемым далеко за пределами региона.',
    'a.founderNote': 'Oimen oina — играй с мыслью. Если у вас есть идея, давайте поговорим.',
    'a.portrait': 'Портрет', 'a.studioPh': 'Студия', 'a.process': 'Процесс',
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
    'nav.projects': 'Жобалар', 'nav.gallery': 'Галерея', 'nav.about': 'Біз туралы', 'nav.contact': 'Байланыс',
    'menu': 'Мәзір', 'close': 'Жабу', 'copied': 'Көшірілді',
    'hero': '{WM}Орталық Азияның <span class="nw">жаңа {ART} визуалды</span> бейнесін зерттеп, жасап жатқан дизайн-зертхана. Біз бизнеске, мәдени жобаларға және идеясы бар адамдарға бренд, визуалды жүйе және дизайн жасаймыз.',
    'projects': 'Жобалар', 'viewAll': 'Барлығы',
    'city': 'Алматы', 'cityKZ': 'Алматы, KZ',
    'f.links': 'Сілтемелер:', 'f.question': 'Сұрағыңыз бар ма?', 'f.write': 'Бізге жазыңыз', 'f.rights': 'Барлық құқықтар қорғалған © 2026. Oi.Lab Design Studio',
    'c.project': 'Жоба:', 'c.prev': 'Алдыңғы', 'c.next': 'Келесі', 'c.more': 'Толығырақ', 'c.goal': 'Мақсат:',
    'c.info': 'Қосымша ақпарат', 'c.services': 'Қызметтер', 'c.year': 'Жыл', 'c.photo': 'Фото', 'c.photoText': 'Мәтінге фото',
    'c.tagline': 'Жоба туралы бір жолдық қысқа сөйлем.',
    'c.statement': 'Жобаның басты ойы бір-екі жолда.',
    'c.moreText': ['Қызығушылар үшін толық әңгіме: клиент кім, брендте не болып жатты және оған неге өзгеріс керек болды.', 'Студия зерттеу барысында не тапты және бұл бағытты қалай анықтады.'],
    'c.goalText': ['Клиентке не керек болды және студия не істеуді көздеді.', 'Жобаның бірінші мақсаты — бір-екі сөйлеммен.', 'Екінші мақсат, егер бар болса.'],
    'c.infoText': 'Қосымша мәліметтер: референстер, материалдар, өндіріс, айдентика қай жерде өмір сүреді — қаптама мен баспадан бастап диджитал мен әлеуметтік желілерге дейін.',
    'g.title': 'Галерея', 'g.all': 'Барлық жобалар', 'g.shuffle': 'Араластыру', 'b.tip': 'Жобаңыз бар ма?', 'b.title': 'Сәлем! Жобаңыз туралы айтыңыз', 'b.sub': 'Бізге тікелей жазыңыз немесе осында бірнеше жол қалдырыңыз — бір күн ішінде жауап береміз.', 'b.name': 'Атыңыз', 'b.reach': 'Пошта немесе Telegram', 'b.about': 'Жоба туралы', 'b.send': 'Жіберу', 'b.note': 'Бір күн ішінде жауап береміз.', 'b.sending': 'Жіберілуде…', 'b.sent': 'Рақмет! Өтінім жіберілді — жақында хабарласамыз.', 'b.error': 'Жіберу мүмкін болмады — поштаны ашамыз.', 'soon': 'Жақында',
    'a.studio': 'Студия', 'a.studioText': 'Oi.Lab — Алматыдағы дизайн-зертхана. «Ой» — бізде әр жоба идеядан басталады: оны бизнеске, мәдени жобаларға және идеясы бар адамдарға арналған брендке, визуалды жүйеге, плакат пен мерчке айналдырамыз — Орталық Азияның жаңа визуалды бейнесін жасаймыз.',
    'a.founder': 'Негізін қалаушы', 'a.founderText': 'Сәлем, мен Төлеген Сағымбай, графикалық дизайнер және арт-директормын. Oi.Lab-ты Орталық Азияның визуалды тілі заманауи, батыл және аймақтан тыс жерде де танымал бола алатынын көрсету үшін аштым.',
    'a.founderNote': 'Oimen oina — оймен ойна. Идеяңыз болса, сөйлесейік.',
    'a.portrait': 'Портрет', 'a.studioPh': 'Студия', 'a.process': 'Процесс',
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
// теги проектов
const TAGS = {
  ru: {'Identity':'Айдентика','Music':'Музыка','Film':'Кино','Fashion':'Фэшн','Digital Design':'Диджитал-дизайн','Technology':'Технологии','Strategy':'Стратегия','Verbal Identity':'Вербальная айдентика','Visual Identity':'Визуальная айдентика','Creative Direction':'Креативное руководство','Narrative':'Нарратив','Motion Design':'Моушн-дизайн','Graphic Design':'Графический дизайн'},
  kk: {'Identity':'Айдентика','Music':'Музыка','Film':'Кино','Fashion':'Сән','Digital Design':'Диджитал-дизайн','Technology':'Технология','Strategy':'Стратегия','Verbal Identity':'Вербалды айдентика','Visual Identity':'Визуалды айдентика','Creative Direction':'Креативті басшылық','Narrative':'Нарратив','Motion Design':'Моушн-дизайн','Graphic Design':'Графикалық дизайн'},
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

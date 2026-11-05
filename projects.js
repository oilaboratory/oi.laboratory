// Данные проектов — общие для главной и страниц кейсов.
// Чтобы добавить проект: новая строка { name, field, img, tags }. field — сфера клиента из FIELDS (i18n.js), по ней фильтр на главной; tags — что мы делали.
const T = {
  nike:["Key Visual", "Motion & 3D", "Art Direction"],
  base:["Motion & 3D", "Art Direction"],
  kindred:["Positioning", "Art Direction", "Branding"],
};
// ——— кейс bülbül по схеме GAA: живые кадры, без слайдов брендбука. Тексты — черновик по слайдам брендбука, проверить.
const BULBUL_CASE = {
  lead: {"en":["Brand identity for an Islamic accessories brand made in Kazakhstan.","bülbül means “nightingale”. The sign joins the letter B and a bird in flight, and a single confident blue holds the whole system together, from silk scarves and tags to packaging and signage."],"ru":["Айдентика бренда исламских аксессуаров, сделанного в Казахстане.","bülbül — это «соловей». Знак соединяет букву B и летящую птицу, а один уверенный синий держит всю систему: от шёлковых платков и бирок до упаковки и вывесок."],"kk":["Қазақстанда жасалған исламдық аксессуарлар брендінің айдентикасы.","bülbül — «бұлбұл». Белгі B әрпі мен ұшып бара жатқан құсты біріктіреді, ал бір батыл көк түс бүкіл жүйені ұстап тұр: жібек орамалдар мен жапсырмалардан бастап қаптама мен маңдайшаларға дейін."]},
  year: '2026', place: {en:'Almaty, KZ', ru:'Алматы, KZ', kk:'Алматы, KZ'},
  tagline: {
    en: 'an Islamic accessories brand made in Kazakhstan.',
    ru: 'бренд исламских аксессуаров, сделанный в Казахстане.',
    kk: 'Қазақстанда жасалған исламдық аксессуарлар бренді.',
  },
  statement: {
    en: 'A bird-shaped sign, a diamond and one confident blue.',
    ru: 'Знак-птица, ромб и один уверенный синий.',
    kk: 'Құс бейнелі белгі, ромб және бір батыл көк түс.',
  },
  more: {
    en: ['bülbül means “nightingale”. The sign joins the letter B and a bird in flight, and the diamond above it becomes the unit of the whole system — from the pattern to bullet points in texts.', 'The identity is built on a single bright blue, TT Norms type and lower-case headlines, so it stays calm next to modest fashion photography and works on silk, labels and signage alike.'],
    ru: ['bülbül — это «соловей». Знак соединяет букву B и летящую птицу, а ромб над ней становится модулем всей системы — от паттерна до буллетов в текстах.', 'Айдентика держится на одном ярком синем, шрифте TT Norms и заголовках со строчной буквы: она спокойно звучит рядом с модест-фотографией и одинаково работает на шёлке, бирках и вывесках.'],
    kk: ['bülbül — «бұлбұл». Белгі B әрпі мен ұшып бара жатқан құсты біріктіреді, ал үстіндегі ромб бүкіл жүйенің модуліне айналады — паттерннен бастап мәтіндегі белгілерге дейін.', 'Айдентика бір ашық көк түске, TT Norms қарпіне және кіші әріппен жазылған тақырыптарға сүйенеді: модест-фотосуреттің қасында сабырлы көрінеді, жібекте де, жапсырмада да, маңдайшада да бірдей жұмыс істейді.'],
  },
  goal: {
    en: ['Create a recognisable identity for a young Kazakh brand of Islamic accessories.', 'Build a flexible system — sign, wordmark, colour, type and pattern — for silk scarves, clothing tags, packaging and retail.'],
    ru: ['Создать узнаваемую айдентику для молодого казахстанского бренда исламских аксессуаров.', 'Собрать гибкую систему — знак, логотип, цвет, шрифт и паттерн — для шёлковых платков, бирок, упаковки и ритейла.'],
    kk: ['Жас қазақстандық исламдық аксессуарлар брендіне танымал айдентика жасау.', 'Жібек орамалдарға, жапсырмаларға, қаптамаға және ритейлге арналған икемді жүйе құру — белгі, логотип, түс, қаріп және паттерн.'],
  },
  info: {
    en: 'Brand identity: logo and sign, colour palette (HEX 266BD7, 318EFE, 29A1FF), TT Norms typography, diamond pattern, silk scarf packaging, clothing and hang tags, size labels, shopping bags, business cards, signage, outdoor and merch.',
    ru: 'Айдентика бренда: логотип и знак, палитра (HEX 266BD7, 318EFE, 29A1FF), шрифт TT Norms, паттерн из ромбов, упаковка шёлковых платков, бирки и размерные лейблы, пакеты, визитки, вывески, наружная реклама и мерч.',
    kk: 'Бренд айдентикасы: логотип пен белгі, палитра (HEX 266BD7, 318EFE, 29A1FF), TT Norms қарпі, ромб паттерні, жібек орамал қаптамасы, жапсырмалар мен өлшем белгілері, пакеттер, визиткалар, маңдайшалар, сыртқы жарнама және мерч.',
  },
  rows: [[["img/bulbul/b01.jpg",1633,2041],["img/bulbul/b02.jpg",1633,2041]],[["img/bulbul/b03.jpg",2800,1583]],{swipe:[["img/bulbul/b04.jpg",1200,1499],["img/bulbul/b05.jpg",1200,1499],["img/bulbul/b06.jpg",1200,1499]]},[["img/bulbul/b07.jpg",1700,2125],["img/bulbul/b08.jpg",1700,2125]],[["img/bulbul/b09.jpg",1700,2126],["img/bulbul/b10.jpg",1700,2125]],[["img/bulbul/b14.jpg",2800,1583]],"statement",[["img/bulbul/b12.jpg",1700,2125],["img/bulbul/b13.jpg",1700,2126]],"carousel",[["img/bulbul/b11.jpg",2800,1583],["img/bulbul/b15.jpg",1700,2125]],[["img/bulbul/b17.jpg",1700,961]],[["img/bulbul/b19.jpg",1700,2125],["img/bulbul/b20.jpg",1700,2125]],[["img/bulbul/b21.jpg",1200,1500],["img/bulbul/b22.jpg",1200,1500],["img/bulbul/b23.jpg",1200,1500]],[["img/bulbul/b24.jpg",2800,1583]],[["img/bulbul/b26.jpg",1700,961]],[["img/bulbul/b27.jpg",2800,1583]]],
  carousel: [["img/bulbul/b28.jpg",1400,1750],["img/bulbul/b29.jpg",1400,1750],["img/bulbul/b30.jpg",1400,1750],["img/bulbul/b31.jpg",1400,1750]],
};

const T720_CASE = {
  lead: {"en":["Brand strategy, positioning and identity system for modern apparel.","As the brand evolves to reach a broader global audience, we redefined its strategic core. Moving beyond basic urban fashion, the new identity balances the fast-paced rhythm of the metropolis with an uncompromising demand for freedom, movement, and refined comfort."],"ru":["Стратегия бренда, позиционирование и айдентика для современной одежды.","Бренд выходит к более широкой мировой аудитории, и мы пересобрали его стратегическое ядро. Новая айдентика выходит за рамки базовой городской моды и уравновешивает быстрый ритм мегаполиса с бескомпромиссной потребностью в свободе, движении и продуманном комфорте."],"kk":["Заманауи киімге арналған бренд стратегиясы, позициялау және айдентика.","Бренд кеңірек әлемдік аудиторияға шығып келеді, сондықтан біз оның стратегиялық өзегін қайта құрдық. Жаңа айдентика қарапайым қала сәнінен асып, мегаполистің жылдам ырғағын еркіндікке, қозғалысқа және ойластырылған жайлылыққа деген мүлтіксіз қажеттілікпен теңестіреді."]},
  year: '2024',
  tagline: {"en":"a clothing brand for people who live in the rhythm of the city.","ru":"бренд одежды для тех, кто живёт в ритме города.","kk":"қала ырғағымен өмір сүретіндерге арналған киім бренді."},
  statement: {"en":"For men who command their time.","ru":"Для мужчин, которые управляют своим временем.","kk":"Уақытын өзі басқаратын ер адамдарға."},
  more: {"en":["7:20 is a moment between morning and the day ahead — the time when the city wakes up. The wordmark is set in geometric Futura, and the clock hands became a graphic element that lives on labels, prints and tissue paper.","Minimalism, urbanism and nature: graphite blue, sea teal and neutral white, Futura paired with Optima. Things that fit the city, the road, the office and a date — and a system calm enough to stay behind them."],"ru":["7:20 — момент между утром и наступающим днём, время, когда просыпается город. Логотип набран геометричной Futura, а стрелки часов стали графическим элементом, который живёт на бирках, принтах и упаковочной бумаге.","Минимализм, урбанизм и природа: графитовый синий, морской бирюзовый и нейтральный белый, Futura в паре с Optima. Вещи, уместные в городе, в дороге, в офисе и на свидании, — и система достаточно спокойная, чтобы оставаться за ними."],"kk":["7:20 — таң мен алдағы күннің арасындағы сәт, қала оянатын уақыт. Логотип геометриялық Futura қарпімен терілген, ал сағат тілдері жапсырмаларда, принттерде және орауыш қағазда өмір сүретін графикалық элементке айналды.","Минимализм, урбанизм және табиғат: графитті көк, теңіз көгілдірі және бейтарап ақ, Futura мен Optima жұбы. Қалада, жолда, кеңседе және кездесуде орынды киімдер — және соларды көлеңкелемейтін сабырлы жүйе."]},
  goal: {"en":["Our approach was guided by two strategic pillars:","Translate the balance between urban utility and natural serenity into a seamless identity for the time-conscious man.","Scale the visual ecosystem to position the brand confidently in the global premium market."],"ru":["Наш подход строился на двух стратегических опорах:","Перевести баланс между городской практичностью и природным спокойствием в цельную айдентику для мужчины, который ценит время.","Масштабировать визуальную экосистему, чтобы уверенно вывести бренд на мировой премиальный рынок."],"kk":["Біздің тәсіл екі стратегиялық тірекке сүйенді:","Қалалық практикалық пен табиғи тыныштық арасындағы тепе-теңдікті уақытты бағалайтын ер адамға арналған біртұтас айдентикаға айналдыру.","Брендті әлемдік премиум нарықта сенімді орналастыру үшін визуалды экожүйені кеңейту."]},
  info: {"en":"Brand identity: wordmark, clock-hand graphics and pattern, colour palette (Graphite Blue 3A3C45, Sea Teal 3F989F, Neutral White FFFFFC), Futura and Optima typography, woven and care labels, hang tags, boxes, mailers, tissue paper, shopping bags, stationery, campaign and event posters.","ru":"Айдентика бренда: логотип, графика стрелок и паттерн, палитра (графитовый синий 3A3C45, морской бирюзовый 3F989F, нейтральный белый FFFFFC), шрифты Futura и Optima, тканые и составники, навесные бирки, коробки, почтовые пакеты, упаковочная бумага, пакеты, деловая документация, постеры кампаний и событий.","kk":"Бренд айдентикасы: логотип, сағат тілдерінің графикасы мен паттерн, палитра (графитті көк 3A3C45, теңіз көгілдірі 3F989F, бейтарап ақ FFFFFC), Futura және Optima қаріптері, тоқылған және күтім жапсырмалары, ілме бирка, қораптар, пошта пакеттері, орауыш қағаз, пакеттер, іс қағаздары, кампания мен іс-шара постерлері."},
  rows: [{eq:[["img/720/v01.jpg",1396,1961],["img/720/v02.jpg",1396,1047]]},{eq:[["img/720/dial.svg",698,873],["img/720/poster.svg",1168,1460]]},[["img/720/v05.jpg",2800,1641]],{eq:[["img/720/v06.jpg",926,1157],["img/720/clock.svg",463,579],["img/720/v08.jpg",926,1157]]},{eq:[["img/720/v09t.jpg",1396,1748],["img/720/v10.jpg",1388,1322]]},"statement",{eq:[["img/720/premium.svg",1768,2210],["img/720/v12.jpg",1396,1745]]},{eq:[["img/720/v13.jpg",1396,1745],"goal"]},[["img/720/v14.jpg",2800,1548]],{eq:[["img/720/v15.jpg",1396,1745],["img/720/v16.jpg",1396,1745]]},{eq:[["img/720/v17.jpg",926,1157],["img/720/v18.jpg",926,1157],["img/720/v19.jpg",926,1157]]},{eq:[["img/720/care.svg",698,559],["img/720/v21.jpg",1396,1745]]},{eq:[["img/720/v22b.jpg",1396,1745],["img/720/v23.jpg",1396,1745]]},{eq:[["img/720/v24.jpg",1396,1861],["img/720/gradient3.svg",1396,1424]]}],
  carousel: [],
};

const KUN_CASE = {
  lead: {"en":["Brand identity for a marketing agency that sets the cultural vector of the market.","In Kazakh kün means “sun”. The letter U turned into rising rays, and warm yellow against cool grey gives the agency a voice as bold as its unconventional approach."],"ru":["Айдентика маркетингового агентства, которое задаёт культурный вектор рынка.","Күн по-казахски — «солнце». Буква U превратилась в восходящие лучи, а тёплый жёлтый на холодном сером дал агентству голос, такой же смелый, как его нестандартный подход."],"kk":["Нарықтың мәдени бағытын айқындайтын маркетинг агенттігінің айдентикасы.","Күн — аспандағы күн. U әрпі шығып келе жатқан сәулелерге айналды, ал суық сұрдың үстіндегі жылы сары агенттікке оның стандарттан тыс тәсіліндей батыл дауыс берді."]},
  year: '2026',
  tagline: {"en":"a marketing agency that sets the cultural vector of the market.","ru":"маркетинговое агентство, которое задаёт культурный вектор рынка.","kk":"нарықтың мәдени бағытын айқындайтын маркетинг агенттігі."},
  statement: {"en":"Kün is the sun. Rays that break through the letters.","ru":"Күн — это солнце. Лучи, которые пробиваются сквозь буквы.","kk":"Күн — күн. Әріптер арасынан жарып шығатын сәулелер."},
  more: {"en":["In Kazakh kün means “sun”. The letter U in the wordmark turned into rising rays, and the twelve-ray star became the sign and the bullet point of every text.","Warm yellow against cool grey, TT Hoves Expand for headlines: an identity that is as loud as an unconventional approach requires, and as precise as a strategy should be."],"ru":["Күн по-казахски — «солнце». Буква U в логотипе превратилась в восходящие лучи, а двенадцатилучевая звезда стала знаком и буллетом в каждом тексте.","Тёплый жёлтый против холодного серого, TT Hoves Expand в заголовках: айдентика звучит так громко, как требует нестандартный подход, и так точно, как требует стратегия."],"kk":["Күн — аспандағы күн. Логотиптегі U әрпі шығып келе жатқан сәулелерге айналды, ал он екі сәулелі жұлдыз белгі мен әр мәтіндегі буллетке айналды.","Суық сұрға қарсы жылы сары, тақырыптарда TT Hoves Expand: айдентика стандарттан тыс тәсіл талап еткендей батыл, стратегия талап еткендей нақты."]},
  goal: {"en":["Create an identity for a marketing agency that goes towards challenges and gets ahead of trends.","Build a system — wordmark, sign, colour and type — that works from presentations and social media to merch."],"ru":["Создать айдентику маркетингового агентства, которое идёт навстречу вызовам и опережает тренды.","Собрать систему — логотип, знак, цвет и шрифт, — которая работает от презентаций и соцсетей до мерча."],"kk":["Сын-қатерлерге қарсы жүретін және трендтерден озатын маркетинг агенттігіне айдентика жасау.","Презентациялар мен әлеуметтік желілерден бастап мерчке дейін жұмыс істейтін жүйе құру — логотип, белгі, түс және қаріп."]},
  info: {"en":"Brand identity: wordmark and descriptor lockups, twelve-ray sign, bullet points, colour palette (yellow, grey, black, white), TT Hoves and TT Hoves Expand typography, presentation layouts, social media posts, posters, tote bags.","ru":"Айдентика бренда: логотип и связки с дескриптором, двенадцатилучевой знак, буллеты, палитра (жёлтый, серый, чёрный, белый), шрифты TT Hoves и TT Hoves Expand, макеты презентаций, посты для соцсетей, постеры, шопперы.","kk":"Бренд айдентикасы: логотип пен дескриптор тіркестері, он екі сәулелі белгі, буллеттер, палитра (сары, сұр, қара, ақ), TT Hoves және TT Hoves Expand қаріптері, презентация макеттері, әлеуметтік желі посттары, постерлер, шопперлер."},
  rows: [[["img/kun/n01.jpg",2800,1641]],{eq:[["img/kun/n02.mp4",1070,1504],["img/kun/n03.jpg",1700,1275]]},{eq:[["img/kun/n04.jpg",1700,1773],["img/kun/n05.jpg",1700,1776]]},[["img/kun/n06.jpg",1728,1013]],"statement",{"eq":[null,"goal"]},{eq:[["img/kun/n07.jpg",1200,1500],["img/kun/n08.jpg",1200,1499],["img/kun/n09.jpg",1200,1500]]},{eq:[["img/kun/n10.jpg",1700,2125],["img/kun/n11.jpg",1700,2125]]}],
  carousel: [],
};

const SEZIM_CASE = {
  lead: {"en":["Brand platform and identity for a clothing brand that gives feelings, not things.","Sezim means “feeling” in Kazakh. Clean, minimal pieces carry a message for a loved one on their inner side, and the identity stays just as quiet: a thin-line S, soft greys and photography about closeness."],"ru":["Бренд-платформа и айдентика бренда одежды, который дарит не вещи, а чувства.","Sezim по-казахски — «чувство». Чистые минималистичные вещи несут на внутренней стороне послание близкому человеку, и айдентика такая же тихая: тонкая S, мягкие серые и фотографии о близости."],"kk":["Зат емес, сезім сыйлайтын киім брендінің бренд-платформасы мен айдентикасы.","Sezim — «сезім». Таза минималистік киімнің ішкі жағында жақын адамға арналған жолдау бар, ал айдентика да сондай тыныш: жіңішке S, жұмсақ сұр түстер және жақындық туралы фотосуреттер."]},
  year: '2026',
  place: {"en":"Astana, KZ","ru":"Астана, KZ","kk":"Астана, KZ"},
  tagline: {"en":"a clothing brand that gives feelings, not things.","ru":"бренд одежды, который дарит не вещи, а чувства.","kk":"зат емес, сезім сыйлайтын киім бренді."},
  statement: {"en":"Sezim. Kózge kórinbeitin — what the eye cannot see.","ru":"Sezim. Kózge kórinbeitin — то, что не видно глазу.","kk":"Sezim. Kózge kórinbeitin — көзге көрінбейтін сезім."},
  more: {"en":["Sezim means “feeling” in Kazakh. The brand makes clean, minimal clothes without prints that become an emotional gift — each piece carries a message for a loved one on its inner side, words that are hard to say out loud.","The identity is as quiet as the clothes: a thin-line S in a circle, a light wordmark, warm whites and soft greys, and photography about closeness — hands, hugs, family. Everyday things become important and special."],"ru":["Sezim по-казахски — «чувство». Бренд делает чистые минималистичные вещи без принтов, которые становятся эмоциональным подарком: на внутренней стороне каждой — послание близкому человеку, слова, которые сложно сказать вслух.","Айдентика такая же тихая, как одежда: тонкая S в круге, лёгкий логотип, тёплые белые и мягкие серые, фотографии о близости — руки, объятия, семья. Вещи для обычной жизни становятся важными и особенными."],"kk":["Sezim — «сезім». Бренд баспасыз, таза минималистік киім жасайды, ол эмоциялық сыйлыққа айналады: әр заттың ішкі жағында жақын адамға арналған жолдау бар — дауыстап айту қиын сөздер.","Айдентика киімнің өзі сияқты тыныш: шеңбердегі жіңішке S, жеңіл логотип, жылы ақ және жұмсақ сұр түстер, жақындық туралы фотосуреттер — қолдар, құшақ, отбасы. Күнделікті заттар маңызды әрі ерекше болады."]},
  goal: {"en":["Build a brand about relationships, where clothing is a gift with an important message for someone close.","Create a calm system — sign, wordmark, colour and photography — for labels, packaging, retail and outdoor."],"ru":["Создать бренд о взаимоотношениях, где одежда — подарок с важным сообщением близкому человеку.","Собрать спокойную систему — знак, логотип, цвет и фотостиль — для бирок, упаковки, ритейла и наружной рекламы."],"kk":["Киім жақын адамға маңызды жолдауы бар сыйлық болатын қарым-қатынас туралы бренд жасау.","Жапсырмаларға, қаптамаға, ритейлге және сыртқы жарнамаға арналған сабырлы жүйе құру — белгі, логотип, түс және фотостиль."]},
  info: {"en":"Brand platform and identity: sign and wordmark, “kózge kórinbeitin” descriptor, colour palette, typography, woven labels, hang tags, gift boxes, shopping bags, envelopes and stickers, business cards, posters, outdoor and social media.","ru":"Бренд-платформа и айдентика: знак и логотип, дескриптор «kózge kórinbeitin», палитра, шрифты, тканые лейблы, навесные бирки, подарочные коробки, пакеты, конверты и наклейки, визитки, постеры, наружная реклама и соцсети.","kk":"Бренд-платформа және айдентика: белгі мен логотип, «kózge kórinbeitin» дескрипторы, палитра, қаріптер, тоқылған жапсырмалар, ілме биркалар, сыйлық қораптары, пакеттер, конверттер мен жапсырмалар, визиткалар, постерлер, сыртқы жарнама және әлеуметтік желілер."},
  rows: [{"eq": [["img/sezim2/z01.jpg", 1396, 1962], ["img/sezim2/z02.mp4", 1080, 1080]]}, [["img/sezim2/z03.mp4", 2400, 1492]], [["img/sezim2/z04.mp4", 1920, 1080]], {"eq": [["img/sezim2/z05.jpg", 1836, 2280], ["img/sezim2/z06.jpg", 1595, 1994, {fx:"reveal", over:"img/sezim2/z06-over.svg"}]], "fr": [921, 475]}, "statement", {"eq": [["img/sezim2/z07.jpg", 1200, 1500, {fx:"reveal", over:"img/sezim2/z07-over.svg"}], ["img/sezim2/z08.jpg", 2800, 1871]], "fr": [267, 1129]}, {"eq": [null, ["img/sezim2/z09.jpg", 840, 1206], "goal"], "fr": [278, 420, 706]}, {"eq": [["img/sezim2/z10.jpg", 1080, 1350, {fx:"unblur", over:"img/sezim2/z10-over.png"}], ["img/sezim2/z11.svg", 698, 873]]}, {"eq": [["img/sezim2/z12.jpg", 2400, 1933], ["img/sezim2/z13.jpg", 1800, 1887]], "fr": [981, 415]}, [["img/sezim2/z14.jpg", 2808, 1646]], {"eq": [["img/sezim2/z15.svg", 698, 873], ["img/sezim2/z16.jpg", 1595, 1994, {fx:"reveal", over:"img/sezim2/z16-over.svg"}]]}, [["img/sezim2/z17.jpg", 2808, 1228]], {"eq": [["img/sezim2/z18.jpg", 1842, 2280], ["img/sezim2/z19.jpg", 1095, 1331, {fx:"reveal", over:"img/sezim2/z19-over.svg"}]], "fr": [921, 475]}, {"eq": [["img/sezim2/z20.jpg", 776, 416], ["img/sezim2/z21.mp4", 640, 642], ["img/sezim2/z22.jpg", 952, 1502]], "fr": [388, 524, 476]}, {"eq": [["img/sezim2/z23.jpg", 1846, 1862], ["img/sezim2/z24.jpg", 946, 966]], "fr": [923, 473]}],
  carousel: [],
};

const SS_CASE = {
  lead: {"en":["Brand platform and identity for a production company grown out of car culture.","Straight Shift shoots cars, music videos and commercials. A racing checker line, a copyright sign built into the name and signal red make the identity work like a team livery on cars, merch, crew vests and trucks."],"ru":["Бренд-платформа и айдентика продакшна, выросшего из автомобильной культуры.","Straight Shift снимает автомобили, клипы и рекламу. Гоночная шашечная линия, знак копирайта в имени и сигнальный красный превращают айдентику в командную ливрею на машинах, мерче, жилетах группы и грузовиках."],"kk":["Автомобиль мәдениетінен өсіп шыққан продакшнның бренд-платформасы мен айдентикасы.","Straight Shift көліктерді, клиптер мен жарнаманы түсіреді. Жарыс шахмат сызығы, атаудағы копирайт белгісі және сигнал қызыл айдентиканы көліктердегі, мерчтегі, топ жилеттеріндегі және жүк көліктеріндегі команда ливреясына айналдырады."]},
  year: '2025',
  tagline: {"en":"a production company grown out of car culture.","ru":"продакшн, выросший из автомобильной культуры.","kk":"автомобиль мәдениетінен өсіп шыққан продакшн."},
  statement: {"en":"From tradition to creation. All gas — no brakes.","ru":"From tradition to creation. All gas — no brakes.","kk":"From tradition to creation. All gas — no brakes."},
  more: {"en":["Straight Shift shoots cars, music videos and commercials, and runs its own ad agency inside. The brand combines the aesthetics of street shooting with professional video production, in a western, cinematic style.","The wordmark sits under a racing checker line, the copyright sign became part of the name, and the palette is navy, white and signal red. The identity works like a team livery — on cars, merch, crew vests and trucks."],"ru":["Straight Shift снимает автомобили, музыкальные клипы и рекламу, а внутри работает собственное рекламное агентство. Бренд соединяет эстетику уличных съёмок с профессиональным видеопродакшном в западном, киношном стиле.","Логотип стоит под гоночной шашечной линией, знак копирайта стал частью имени, палитра — тёмно-синий, белый и сигнальный красный. Айдентика работает как командная ливрея — на машинах, мерче, жилетах съёмочной группы и грузовиках."],"kk":["Straight Shift автомобильдерді, музыкалық клиптер мен жарнаманы түсіреді, ішінде өз жарнама агенттігі бар. Бренд көше түсірілімдерінің эстетикасын батыс, киноға тән стильдегі кәсіби видеопродакшнмен біріктіреді.","Логотип жарыс шахмат сызығының астында тұр, копирайт белгісі атаудың бөлігіне айналды, палитра — қою көк, ақ және сигнал қызыл. Айдентика команда ливреясы сияқты жұмыс істейді — көліктерде, мерчте, түсірілім тобының жилеттерінде және жүк көліктерінде."]},
  goal: {"en":["Build an identity for a production company with a deep connection to car culture and its audience.","Create a system — wordmark, checker line, colour and type — that lives on cars, merch, crew uniform and transport."],"ru":["Создать айдентику продакшна с глубокой связью с автокультурой и её аудиторией.","Собрать систему — логотип, шашечную линию, цвет и шрифт, — которая живёт на машинах, мерче, форме съёмочной группы и транспорте."],"kk":["Автомәдениетпен және оның аудиториясымен терең байланысы бар продакшнға айдентика жасау.","Көліктерде, мерчте, түсірілім тобының формасында және көлікте өмір сүретін жүйе құру — логотип, шахмат сызығы, түс және қаріп."]},
  info: {"en":"Brand platform and identity: wordmark with checker line, archetype (Creator, Rebel, Magician), colour palette (navy, white, signal red), typography, car livery and stickers, merch — hoodies, T-shirts, beanies, caps, lighters, keychains — crew vests, shopping bags, posters and fleet branding.","ru":"Бренд-платформа и айдентика: логотип с шашечной линией, архетип (Творец, Бунтарь, Маг), палитра (тёмно-синий, белый, сигнальный красный), шрифты, ливрея и наклейки на авто, мерч — худи, футболки, шапки, кепки, зажигалки, брелоки, — жилеты съёмочной группы, пакеты, постеры и брендинг транспорта.","kk":"Бренд-платформа және айдентика: шахмат сызығы бар логотип, архетип (Жасаушы, Бүлікші, Сиқыршы), палитра (қою көк, ақ, сигнал қызыл), қаріптер, көлік ливреясы мен жапсырмалары, мерч — худи, футболкалар, бөріктер, кепкалар, оттықтар, брелоктар, — түсірілім тобының жилеттері, пакеттер, постерлер және көлік брендингі."},
  rows: [[["img/straight-shift/ss02.jpg",1700,2549],["img/straight-shift/ss08.jpg",1116,1710]],[["img/straight-shift/ss03.jpg",1920,1080]],[["img/straight-shift/ss04.jpg",1200,1500],["img/straight-shift/ss05.jpg",1200,1500],["img/straight-shift/ss06.jpg",1200,1500]],[["img/straight-shift/ss07.jpg",1920,1080]],"statement",[["img/straight-shift/ss10.jpg",1700,2550],["img/straight-shift/ss11.jpg",1700,2549]],"carousel",[["img/straight-shift/ss12.jpg",1920,1280]],[["img/straight-shift/ss14.jpg",1700,956],["img/straight-shift/ss15.jpg",1920,1080]],[["img/straight-shift/ss16.jpg",1920,1080]],[["img/straight-shift/ss17.jpg",1920,1080]]],
  carousel: [["img/straight-shift/ss01.jpg",1700,2549],["img/straight-shift/ss09.jpg",1116,1710],["img/straight-shift/ss18.jpg",1400,1751],["img/straight-shift/ss19.jpg",1368,1710],["img/straight-shift/ss20.jpg",1368,1710]],
};

const D1135_CASE = {
  year: '2026',
  place: {"en":"Tver, RU","ru":"Тверь, RU","kk":"Тверь, RU"},
  lead: {"en":["Brand identity for 1135, a car detailing studio in Tver.","The name became the sign: the digits 11 turn into speed lines and the 3 into a wheel. A strict black-and-white system with a chamfered frame carries the studio’s promise of precision in every detail, from the reception desk and staff badges to merch, packaging and the truck."],"ru":["Айдентика детейлинг-студии 1135 в Твери.","Название стало знаком: цифры 11 превратились в линии скорости, а 3 — в колесо. Строгая чёрно-белая система со скошенной рамкой несёт обещание студии — точность в каждой детали — от ресепшена и бейджей сотрудников до мерча, упаковки и фуры."],"kk":["Тверьдегі 1135 детейлинг-студиясының айдентикасы.","Атау белгіге айналды: 11 цифрлары жылдамдық сызықтарына, ал 3 доңғалаққа айналды. Қиғаш жиекті қатаң ақ-қара жүйе студияның әр детальдағы дәлдік туралы уәдесін ресепшн мен қызметкерлер бейджінен бастап мерчке, қаптамаға және жүк көлігіне дейін жеткізеді."]},
  tagline: {"en":"a car detailing studio in Tver.","ru":"детейлинг-студия в Твери.","kk":"Тверьдегі детейлинг-студия."},
  statement: {"en":"Building a new visual language for digital marketing.","ru":"Новый визуальный язык для цифрового маркетинга.","kk":"Цифрлық маркетингке арналған жаңа визуалды тіл."},
  more: {"en":[""],"ru":[""],"kk":[""]},
  goal: {"en":["We had two main objectives:","Give a young detailing studio an identity that feels as precise and premium as the cars it works on.","Build a system flexible enough for the space, the team, digital marketing and merch."],"ru":["У нас было две главные задачи:","Дать молодой детейлинг-студии айдентику, такую же точную и премиальную, как автомобили, с которыми она работает.","Собрать систему, которая работает в пространстве, на команде, в цифровом маркетинге и в мерче."],"kk":["Бізде екі басты міндет болды:","Жас детейлинг-студияға ол жұмыс істейтін көліктер сияқты дәл әрі премиум айдентика беру.","Кеңістікте, командада, цифрлық маркетингте және мерчте жұмыс істейтін жүйе құру."]},
  info: {"en":"Brand identity: logo built from the digits 11 and 3, construction grid, chamfered frame system, black-and-white palette with signal red, typography, reception signage, staff badges, merch, business cards, letterhead, packaging, social media, outdoor and fleet branding.","ru":"Айдентика бренда: логотип из цифр 11 и 3, модульная сетка, система скошенных рамок, чёрно-белая палитра с сигнальным красным, шрифты, навигация ресепшена, бейджи сотрудников, мерч, визитки, бланки, упаковка, соцсети, наружная реклама и брендинг транспорта.","kk":"Бренд айдентикасы: 11 және 3 цифрларынан құралған логотип, модульдік тор, қиғаш жиектер жүйесі, сигнал қызылы бар ақ-қара палитра, қаріптер, ресепшн навигациясы, қызметкерлер бейджі, мерч, визиткалар, бланкілер, қаптама, әлеуметтік желілер, сыртқы жарнама және көлік брендингі."},
  rows: [[["img/1135/intro.mp4",1920,1080]],{eq:[["img/1135/d02.jpg",1384,1750],"goal"]},[["img/1135/d03b.jpg",2800,1548]],[["img/1135/d04.jpg",2800,1466]],[["img/1135/d05a.jpg",1400,1750],["img/1135/logo.svg",694,878]],[["img/1135/d06.jpg",2800,1740]],[["img/1135/d07b.jpg",2800,1750]],"statement",[["img/1135/d08.jpg",2800,1750]],[["img/1135/d09.jpg",2800,1154]],[["img/1135/d10.jpg",2800,1750]],[["img/1135/d11t.jpg",2800,1740]],[["img/1135/d12.jpg",2800,1750]],[["img/1135/d13.jpg",2800,1332]],[["img/1135/d16.jpg",988,1235],["img/1135/keys3.mp4",864,1080]],[["img/1135/d15.jpg",2800,1548]]],
  carousel: [],
};

const TA_CASE = {
  year: '2026',
  lead: {"en":["Title design and key art for the feature film «Tastamashy, Ana!».","Based on Aigyz Baimukhametov’s book about an orphanage, the film is about children waiting to be found. We built the title from prison stencils scratched over with a child’s pencil strokes and carried it through the posters, the title sequence and the release campaign."],"ru":["Дизайн титров и ключевой визуал фильма «Тастамашы, Ана!».","Фильм снят по книге Айгыза Баймухаметова о детском доме, о детях, которые ждут, что их найдут. Название мы собрали из тюремного трафарета, исчерканного детским карандашом, и провели его через постеры, титры и прокатную кампанию."],"kk":["«Тастамашы, Ана!» фильмінің титр дизайны мен негізгі визуалы.","Фильм Айғыз Баймұхаметовтың балалар үйі туралы кітабы бойынша түсірілген, өздерін табуды күткен балалар туралы. Атауды бала қарындашымен сызылған түрме трафаретінен құрастырып, оны постерлерге, титрлерге және прокат кампаниясына енгіздік."]},
  tagline: {"en":"title design and key art for a feature film.","ru":"дизайн титров и ключевой визуал фильма.","kk":"фильмнің титр дизайны мен негізгі визуалы."},
  statement: {"en":"Orphan home","ru":"Детский дом","kk":"Балалар үйі"},
  more: {"en":[""],"ru":[""],"kk":[""]},
  goal: {"en":["The project aimed to create a visually haunting title sequence built on a central contrast: the innocence of a child’s handwritten doodles overlapping with the oppressive structure of institutional prison stencils."],"ru":["Задача — создать пронзительную титровую последовательность на одном контрасте: невинные детские каракули поверх давящей структуры казённого тюремного трафарета."],"kk":["Мақсат — бір қарама-қайшылыққа құрылған әсерлі титр тізбегін жасау: баланың бейкүнә сызбалары қатал мекемелік түрме трафаретінің үстіне түседі."]},
  info: {"en":"Film identity: title lettering from stencil and child’s pencil textures, key art and character posters, title sequence, release and credits cards, outdoor and social media.","ru":"Айдентика фильма: леттеринг названия из трафарета и детских карандашных фактур, ключевой визуал и постеры героев, титровая последовательность, карточки премьеры и титров, наружная реклама и соцсети.","kk":"Фильм айдентикасы: трафарет пен балалық қарындаш фактураларынан жасалған атау леттерингі, негізгі визуал және кейіпкерлер постерлері, титр тізбегі, премьера және титр карточкалары, сыртқы жарнама және әлеуметтік желілер."},
  rows: [[["img/ta/t01.jpg",2800,1743]],{eq:[["img/ta/t02.jpg",1700,2125],"goal"]},"statement",{swipe:[["img/ta/t03.jpg",1063,1329],["img/ta/t04.jpg",1063,1329],["img/ta/t05.jpg",1063,1329]]},[["img/ta/t06b.jpg",2800,1575]],[["img/ta/t07.jpg",2530,1575]],{eq:[["img/ta/t08.jpg",1700,2125],{note:{"en":"The film is based on Aigyz Baimukhametov’s book «Tastamashy, Ana!».","ru":"Фильм снят по мотивам книги Айгыза Баймухаметова «Тастамашы, Ана!».","kk":"Фильм Айғыз Баймұхаметовтың «Тастамашы, Ана!» кітабының желісімен түсірілген."}}]},[["img/ta/t09.jpg",1700,1965]],[["img/ta/t10.jpg",2530,1575]]],
  carousel: [],
};

const FT_CASE = {"year": "2026", "lead": {"en": ["Title calligraphy and graphics for the nomadic fashion film «Fading Tales» by Yernur Bashpay.", "A film about the steppe as a living memory: grain, horses, eagles and the people who carry the old stories. We wrote each chapter title by hand in a flowing calligraphy and let it breathe over the footage, like wind over grass."], "ru": ["Каллиграфия титров и графика для номадического фэшн-фильма «Fading Tales» Ернура Башпая.", "Фильм о степи как о живой памяти: зерно, кони, беркуты и люди, которые хранят старые истории. Названия глав мы написали от руки текучей каллиграфией и дали им дышать поверх кадра, как ветер над травой."], "kk": ["Ернұр Башпайдың «Fading Tales» көшпелі фэшн-фильміне арналған титр каллиграфиясы мен графикасы.", "Дала туралы тірі жад ретіндегі фильм: дән, жылқы, бүркіт және ескі әңгімелерді сақтайтын адамдар. Тараулардың атауларын қолмен ағынды каллиграфиямен жазып, оларды кадрдың үстінде желдей еркін қалдырдық."]}, "tagline": {"en": "title calligraphy for a nomadic fashion film.", "ru": "каллиграфия титров для фэшн-фильма.", "kk": "фэшн-фильмге арналған титр каллиграфиясы."}, "statement": {"en": "The Grain of the Steppe", "ru": "Зерно степи", "kk": "Даланың дәні"}, "more": {"en": [""], "ru": [""], "kk": [""]}, "goal": {"en": ["The goal was to give each chapter of the film its own handwritten title — soft, uneven and alive, so the lettering feels like part of the landscape rather than a layer on top of it."], "ru": ["Задача — дать каждой главе фильма свой рукописный титр: мягкий, неровный и живой, чтобы надпись ощущалась частью пейзажа, а не слоем поверх него."], "kk": ["Мақсат — фильмнің әр тарауына өз қолжазба титрін беру: жұмсақ, біркелкі емес және тірі, жазу пейзаждың үстіндегі қабат емес, оның бір бөлігі болып сезілуі үшін."]}, "info": {"en": "Film titles: hand calligraphy for the main title and chapters, animated title cards, colour treatment of lettering, end credits.", "ru": "Титры фильма: рукописная каллиграфия названия и глав, анимированные титровые карточки, цвет надписей, финальные титры.", "kk": "Фильм титрлері: атау мен тараулардың қолжазба каллиграфиясы, анимацияланған титр карточкалары, жазулардың түсі, соңғы титрлер."}, "rows": [[["img/ft/grain.mp4", 1600, 1066]], {"eq": [["img/ft/refs2.mp4", 900, 900], "goal"]}, [["img/ft/day.jpg", 2800, 1359]], {"eq": [["img/ft/fading2.mp4", 1080, 748], ["img/ft/horse.jpg", 1700, 1133]], "fr": [524, 172]}, [["img/ft/steppe.mp4", 1600, 1066]], {"eq": [["img/ft/drink.jpg", 1700, 1133], ["img/ft/steppr.jpg", 1700, 1133]]}, "statement", [["img/ft/heritage.mp4", 1600, 1066]], [["img/ft/credits.mp4", 1600, 1066]]], "carousel": []};

const TAU_CASE = {"year": "2026", "lead": {"en": ["Identity for TAU, an interior and furniture design studio from Almaty.", "Tau means “mountain” in Kazakh. The sign grows out of the letters T and A drawn as a peak, and the whole system is built on warm wood, deep brick red and calm, architectural type — for the studio, its home store, exhibitions and print."], "ru": ["Айдентика для TAU — студии дизайна интерьера и мебели из Алматы.", "Тау по-казахски — «гора». Знак вырастает из букв T и A, нарисованных как вершина, а вся система построена на тёплом дереве, глубоком кирпично-красном и спокойной архитектурной типографике — для студии, её шоурума, выставок и печати."], "kk": ["Алматыдағы интерьер және жиһаз дизайны студиясы TAU үшін айдентика.", "Тау — тау. Белгі шың ретінде салынған T және A әріптерінен өседі, ал бүкіл жүйе жылы ағашқа, терең кірпіш-қызыл түске және сабырлы сәулеттік типографикаға құрылған — студияға, оның шоурумына, көрмелер мен баспаға арналған."]}, "tagline": {"en": "identity for an interior and furniture design studio.", "ru": "айдентика студии дизайна интерьера и мебели.", "kk": "интерьер және жиһаз дизайны студиясының айдентикасы."}, "statement": {"en": "A mountain drawn in two letters.", "ru": "Гора, нарисованная двумя буквами.", "kk": "Екі әріппен салынған тау."}, "more": {"en": [""], "ru": [""], "kk": [""]}, "goal": {"en": ["Give the studio a sign as solid and calm as its furniture, and a system that works from a wax seal to a store front."], "ru": ["Дать студии знак — такой же основательный и спокойный, как её мебель, — и систему, которая работает от сургучной печати до вывески шоурума."], "kk": ["Студияға оның жиһазы сияқты берік әрі сабырлы белгі және сүргіш мөрден шоурум маңдайшасына дейін жұмыс істейтін жүйе беру."]}, "info": {"en": "Identity: sign and wordmark, colour palette, typography, business cards, wax seals, exhibition and event posters, catalogues, social media, store signage and interior navigation.", "ru": "Айдентика: знак и логотип, цветовая палитра, типографика, визитки, сургучные печати, постеры выставок и событий, каталоги, соцсети, вывеска шоурума и навигация в интерьере.", "kk": "Айдентика: белгі мен логотип, түстер палитрасы, типографика, визиткалар, сүргіш мөрлер, көрме мен іс-шара постерлері, каталогтар, әлеуметтік желілер, шоурум маңдайшасы және интерьердегі навигация."}, "rows": [[["img/tau/u01.jpg",2826,1578]], {"eq": [["img/tau/t02.jpg",1400,1435], "goal"], "fr": [698, 706]}, {"eq": [["img/tau/t03a.jpg",1400,1362], ["img/tau/t03b.svg",698,679]]}, [["img/tau/u05.jpg",2808,1644]], [["img/tau/t05.svg",3369,1388]], {"eq": [["img/tau/t06a.jpg",1400,1751], ["img/tau/t09b.jpg",2000,1334]]}, "statement", {"eq": [["img/tau/u11.jpg",1396,1744], ["img/tau/t07b.jpg",1400,1751]]}, [["img/tau/t08.jpg",2800,1548]], {"eq": [["img/tau/t09a.jpg",1400,1733], ["img/tau/u15.jpg",950,1154]], "fr": [921, 475]}, [["img/tau/u16.jpg",2808,1550]], {"eq": [["img/tau/t11a.jpg",1400,1751], ["img/tau/t06b.svg",1767,2209]]}, {"eq": [["img/tau/t12b.jpg",2792,2236], ["img/tau/t11b.jpg",1400,1751]]}, {"eq": [["img/tau/t13a.svg",1767,2209], ["img/tau/t13b.jpg",1400,1750]]}, [["img/tau/t14.jpg",2800,1868]]], "carousel": []};

// ——— тексты кейсов из таблицы «Проекты» (ноябрь 2026): оглавление → lead, манифест → statement, доп. текст → goal («Подход») ———
const CASE_TEXT = {
  '7:20': {
    lead: {ru: ['Бренд одежды для мужчин, которые живут в динамике современного мегаполиса, но сами задают свой ритм и не привязывают себя к одному месту. Обновляя стратегию и айдентику, мы искали визуальную идею, способную передать эту внутреннюю свободу и дисциплину.'],
      en: ['A clothing brand for men who live in the dynamics of a modern metropolis yet set their own rhythm and don’t tie themselves to one place. Updating the strategy and identity, we looked for a visual idea that could convey this inner freedom and discipline.'],
      kk: ['Заманауи мегаполис динамикасында өмір сүретін, бірақ өз ырғағын өзі белгілейтін және бір орынға байланып қалмайтын ерлерге арналған киім бренді. Стратегия мен айдентиканы жаңарта отырып, біз осы ішкі еркіндік пен тәртіпті жеткізетін визуалды идеяны іздедік.']},
    statement: {ru: 'Для мужчин, которые управляют своим временем.', en: 'For men who manage their own time.', kk: 'Өз уақытын өзі басқаратын ерлерге.'},
    goal: {ru: ['В поиске метафоры мы обратились к самому названию бренда и увидели в нём ритм времени: циферблат, движение стрелок, точность и выверенность каждого шага. Этот образ стал базой графической системы, связав городскую мобильность с контролем над собственным временем. Фирменный стиль нашел продолжение в дизайне одежды, моушн-графике и SMM-коммуникации.'],
      en: ['Searching for a metaphor, we turned to the brand’s name itself and saw the rhythm of time in it: a clock face, the movement of the hands, the precision and measure of every step. This image became the basis of the graphic system, linking urban mobility with control over one’s own time. The identity continued into clothing design, motion graphics and SMM communication.'],
      kk: ['Метафора іздеп, біз брендтің атауының өзіне жүгініп, одан уақыт ырғағын көрдік: циферблат, тілдердің қозғалысы, әр қадамның дәлдігі мен өлшемділігі. Бұл бейне графикалық жүйенің негізіне айналып, қалалық ұтқырлықты өз уақытыңды басқарумен байланыстырды. Фирмалық стиль киім дизайнында, моушн-графикада және SMM-коммуникацияда жалғасын тапты.']},
  },
  'TAU': {
    lead: {ru: ['Создание айдентики для бюро интерьера и мебели TAU, работающего на рынках Европы и Евразии. Главной задачей было переосмыслить национальный культурный код Казахстана и сделать его органичной частью современного международного бренда.'],
      en: ['Identity for TAU, an interior and furniture bureau working in the markets of Europe and Eurasia. The main task was to rethink Kazakhstan’s national cultural code and make it an organic part of a contemporary international brand.'],
      kk: ['Еуропа мен Еуразия нарықтарында жұмыс істейтін TAU интерьер және жиһаз бюросына арналған айдентика. Басты міндет — Қазақстанның ұлттық мәдени кодын қайта пайымдап, оны заманауи халықаралық брендтің табиғи бөлігіне айналдыру.']},
    statement: {ru: 'Для тех, для кого мастерство — это путь на вершину.', en: 'For those for whom mastery is the path to the summit.', kk: 'Шеберлікті шыңға апарар жол деп білетіндерге.'},
    goal: {ru: ['В основу графического языка мы заложили пластику древних рун, соединив их с природными текстурами дерева и неровностями камня. В процессе работы абстрактные графические элементы трансформировались в лаконичные силуэты мебели. Тёплая природная палитра и глубокие фактуры подчеркнули натуральность материалов и философию авторского мастерства.'],
      en: ['We built the graphic language on the plasticity of ancient runes, combining them with the natural textures of wood and the roughness of stone. As the work progressed, abstract graphic elements turned into laconic silhouettes of furniture. A warm natural palette and deep textures emphasise the naturalness of the materials and the philosophy of craftsmanship.'],
      kk: ['Графикалық тілдің негізіне ежелгі руналардың пластикасын алып, оны ағаштың табиғи текстураларымен және тастың бұдырлығымен біріктірдік. Жұмыс барысында абстрактілі графикалық элементтер жиһаздың лаконикалық силуэттеріне айналды. Жылы табиғи палитра мен терең фактуралар материалдардың табиғилығы мен авторлық шеберлік философиясын көрсетті.']},
  },
  'Fading Tales': {
    lead: {ru: ['Кастомная каллиграфия титров и визуальное сопровождение для номадического фэшн-фильма «Fading Tales» Ернура Башпая. Картина обращается к степи как к хранителю времени и семейных историй, передающихся из поколения в поколение.'],
      en: ['Custom title calligraphy and visual accompaniment for Yernur Bashpay’s nomadic fashion film «Fading Tales». The film turns to the steppe as a keeper of time and of family stories passed down from generation to generation.'],
      kk: ['Ернұр Башпайдың «Fading Tales» номадтық фэшн-фильміне арналған титрлердің кастом каллиграфиясы мен визуалды сүйемелдеуі. Фильм даланы уақыттың және ұрпақтан ұрпаққа берілетін отбасылық әңгімелердің сақтаушысы ретінде көрсетеді.']},
    statement: {ru: 'Степь как живая память, запечатленная в движении.', en: 'The steppe as living memory, captured in motion.', kk: 'Дала — қозғалыста бейнеленген тірі жад.'},
    goal: {ru: ['Вдохновившись образом степного ветра, мы разработали текучую ручную каллиграфию для названий глав и заглавных титров. Графика накладывается непосредственно на кинокадры, мягко взаимодействуя с движением коней, беркутов и ковыля, превращая шрифтовые элементы в неразрывную часть видеоповествования.'],
      en: ['Inspired by the image of the steppe wind, we developed a flowing hand calligraphy for the chapter names and opening titles. The lettering is laid directly over the film frames, gently interacting with the movement of horses, golden eagles and feather grass, and turning type into an inseparable part of the visual story.'],
      kk: ['Дала желінің бейнесінен шабыт алып, тараулар атауы мен басты титрлерге арналған ағынды қолжазба каллиграфиясын жасадық. Графика тікелей кинокадрлардың үстіне түсіп, жылқы, бүркіт және қау қозғалысымен жұмсақ үйлеседі де, қаріп элементтерін бейнебаянның ажырамас бөлігіне айналдырады.']},
  },
  'Sezim': {
    lead: {ru: ['Бренд одежды, посвященный человеческим отношениям и тихим чувствам, которые сложно выразить словами. Ключевая метафора бренда воплощена в самой конструкции одежды — на её внутренней стороне затаилось личное послание близкому человеку.'],
      en: ['A clothing brand dedicated to human relationships and quiet feelings that are hard to put into words. The brand’s key metaphor is built into the garment itself — a personal message for a loved one is hidden on its inner side.'],
      kk: ['Адами қарым-қатынасқа және сөзбен жеткізу қиын тыныш сезімдерге арналған киім бренді. Брендтің негізгі метафорасы киімнің өз құрылымында: оның ішкі жағында жақын адамға арналған жеке жолдау жасырылған.']},
    statement: {ru: 'Sezim. Kózge kórinbeitin — деликатность, скрытая внутри.', en: 'Sezim. Kózge kórinbeitin — delicacy hidden inside.', kk: 'Sezim. Kózge kórinbeitin — ішке жасырылған нәзіктік.'},
    goal: {ru: ['Чтобы передать эту деликатность, мы построили айдентику на принципах прозрачности, мягкости и визуальной чистоты. Утонченная форма буквы S, сдержанная серая гамма и душевный фотостиль сформировали цельный образ. Графическая система последовательно развернута в дизайне упаковки, бирок, текстильных элементов и социальных сетей.'],
      en: ['To convey this delicacy, we built the identity on the principles of transparency, softness and visual purity. The refined form of the letter S, a restrained grey palette and a heartfelt photographic style shaped a coherent image. The graphic system unfolds consistently across packaging, labels, textile elements and social media.'],
      kk: ['Осы нәзіктікті жеткізу үшін айдентиканы мөлдірлік, жұмсақтық және визуалды тазалық қағидаттарына құрдық. S әрпінің нәзік пішіні, ұстамды сұр гамма және жылы фотостиль тұтас бейне қалыптастырды. Графикалық жүйе қаптама, жапсырма, тоқыма элементтері мен әлеуметтік желілер дизайнында бірізді жалғасады.']},
  },
  'KUN': {
    lead: {ru: ['Разработка айдентики для агентства полного цикла Kүн, совмещающего стратегический маркетинг с реализацией креативных PR, SMM и BTL-кампаний. Бренд транслирует смелость, прозрачность и глубокую экспертизу.'],
      en: ['Identity for Kүн, a full-cycle agency that combines strategic marketing with creative PR, SMM and BTL campaigns. The brand conveys boldness, transparency and deep expertise.'],
      kk: ['Стратегиялық маркетингті креативті PR, SMM және BTL науқандарымен ұштастыратын толық циклді Күн агенттігіне арналған айдентика. Бренд батылдықты, ашықтықты және терең сараптаманы білдіреді.']},
    statement: {ru: 'Ваш бренд — под ярким светом.', en: 'Your brand — in the spotlight.', kk: 'Сіздің брендіңіз — жарқын жарықта.'},
    goal: {ru: ['Название Kүн («солнце» на казахском) подсказало визуальную концепцию: латинская буква U преобразилась в знак восходящих солнечных лучей. Контраст солнечного жёлтого и глубокого серого передает энергию агентства, его системный подход и способность выводить бренды в центр внимания аудитории.'],
      en: ['The name Kүн («sun» in Kazakh) suggested the visual concept: the Latin letter U became a sign of rising sun rays. The contrast of sunny yellow and deep grey conveys the agency’s energy, its systematic approach and its ability to bring brands into the centre of the audience’s attention.'],
      kk: ['Күн атауы визуалды тұжырымды өзі ұсынды: латынның U әрпі күннің шығып келе жатқан шуағының белгісіне айналды. Күн сарысы мен терең сұр түстің контрасты агенттіктің қуатын, жүйелі тәсілін және брендтерді аудитория назарының ортасына шығара алатынын жеткізеді.']},
  },
  '1135': {
    lead: {ru: ['Комплексный брендинг премиального автосервиса из Твери с индивидуальным подходом и высочайшим стандартом обслуживания. Визуальный стиль должен был объединить историческую локальность с культурой ухода за автомобилями.'],
      en: ['Complete branding for a premium car-care studio in Tver with an individual approach and the highest standard of service. The visual style had to unite historical locality with the culture of car care.'],
      kk: ['Тверьдегі жеке тәсілі мен ең жоғары қызмет стандарты бар премиум автосервиске арналған кешенді брендинг. Визуалды стиль тарихи жергілікті болмысты автокөлік күтімі мәдениетімен біріктіруі керек еді.']},
    statement: {ru: 'Эстетика точности и безупречного блеска.', en: 'The aesthetics of precision and flawless shine.', kk: 'Дәлдік пен мінсіз жылтырдың эстетикасы.'},
    goal: {ru: ['Исследовав архитектуру и старинные вывески Твери, мы нашли форму для логотипа, а само число 1135 разложили на графические метафоры: единицы стали динамичными линиями скорости, а цифра 3 — образом вращающегося колеса. Строгий монохромный стиль, скошенные рамки и глянцевые фактуры отражают эстетику чистого кузова. Айдентику последовательно перенесли в оформление пространства, бейджи сотрудников, мерч, упаковку и фирменный автопарк.'],
      en: ['Studying Tver’s architecture and old signage, we found the shape of the logo and broke the number 1135 down into graphic metaphors: the ones became dynamic speed lines and the 3 the image of a spinning wheel. A strict monochrome style, bevelled frames and glossy textures reflect the aesthetics of a clean car body. The identity was carried consistently into the space, staff badges, merch, packaging and the branded fleet.'],
      kk: ['Тверь сәулеті мен ескі маңдайшаларын зерттей келе, логотиптің пішінін таптық, ал 1135 санының өзін графикалық метафораларға бөлдік: бірліктер жылдамдықтың серпінді сызықтарына, ал 3 цифры айналып тұрған дөңгелек бейнесіне айналды. Қатаң монохром стиль, қиғаш рамкалар және жылтыр фактуралар таза кузов эстетикасын бейнелейді. Айдентика кеңістік безендіруіне, қызметкерлер бейджіне, мерчке, қаптамаға және фирмалық автопаркке бірізді көшірілді.']},
  },
  'Кайрат': {
    lead: {ru: ['Шрифтовая система, графический стиль и серия кинопостеров для документального фильма о футбольном клубе «Кайрат», приуроченного к его историческому выходу в Лигу чемпионов.'],
      en: ['Type system, graphic style and a series of film posters for a documentary about FC Kairat, timed to the club’s historic qualification for the Champions League.'],
      kk: ['«Қайрат» футбол клубы туралы деректі фильмге арналған қаріп жүйесі, графикалық стиль және кинопостерлер сериясы — клубтың Чемпиондар лигасына тарихи шығуына орай.']},
    statement: {ru: 'Наследие побед, запечатленное в спортивной типографике.', en: 'A legacy of victories, captured in sports typography.', kk: 'Спорттық типографикада бейнеленген жеңістер мұрасы.'},
    goal: {ru: ['Мы изучили архивное наследие клуба — старые афиши, газетные вырезки и советскую спортивную графику, переосмыслив её в современном ключе. Основой стала кастомная ленточная антиква, дополненная строгими техническими начертаниями. Шрифтовая система стала сквозным элементом титров и серии промо-постеров, соединив истории прошлого с эмоциональными кадрами современных матчей.'],
      en: ['We studied the club’s archive — old posters, newspaper clippings and Soviet sports graphics — and reinterpreted it in a contemporary way. The basis became a custom ribbon serif, complemented by strict technical styles. The type system became a through-line in the titles and the series of promo posters, connecting the stories of the past with the emotional footage of today’s matches.'],
      kk: ['Клубтың архивтік мұрасын — ескі афишаларды, газет қиындыларын және кеңестік спорттық графиканы зерттеп, оны заманауи тұрғыда қайта пайымдадық. Негізге қатаң техникалық сызбалармен толықтырылған кастом таспалы антиква алынды. Қаріп жүйесі титрлер мен промо-постерлер сериясының өзекті элементіне айналып, өткеннің тарихын бүгінгі матчтардың эмоционалды кадрларымен байланыстырды.']},
  },
  'Тастамашы Ана': {
    lead: {ru: ['Арт-дирекшн, дизайн титров и промо-материалов для драматического фильма «Тасташы Ана». История показана сквозь призму восприятия мальчика, чьё детство сталкивается с жесткой и непонятной реальностью взрослых.'],
      en: ['Art direction, title design and promo materials for the drama film «Tastamashy, Ana!». The story is told through the eyes of a boy whose childhood collides with the harsh and incomprehensible reality of adults.'],
      kk: ['«Тастамашы, Ана!» драмалық фильміне арналған арт-дирекшн, титрлер дизайны және промо-материалдар. Оқиға балалық шағы ересектердің қатал әрі түсініксіз шындығымен соқтығысқан баланың көзімен көрсетіледі.']},
    statement: {ru: 'Ребенок в чужом мире взрослых.', en: 'A child in the alien world of adults.', kk: 'Ересектердің бөтен әлеміндегі бала.'},
    goal: {ru: ['Драматический контраст передает шрифтовое решение: грубый трафаретный шрифт, ассоциирующийся с запрещающими знаками, дополнен искренними детскими рукописными подчёркиваниями. В серии кинопостеров ставка сделана на эмоции героя — крупный план мальчика со слезой без лишнего визуального шума передает всю глубину сюжетной драмы.'],
      en: ['The dramatic contrast is carried by the type solution: a rough stencil typeface associated with prohibition signs is complemented by sincere, childlike handwritten underlines. The poster series focuses on the hero’s emotions — a close-up of the boy with a tear, free of visual noise, conveys the full depth of the drama.'],
      kk: ['Драмалық контрастты қаріптік шешім жеткізеді: тыйым белгілерін еске түсіретін дөрекі трафарет қаріп баланың шынайы қолжазба сызықтарымен толықтырылған. Кинопостерлер сериясында басты назар кейіпкердің эмоциясына аударылған — көз жасы бар баланың ірі жоспары артық визуалды шусыз сюжеттің бүкіл тереңдігін жеткізеді.']},
  },
};

const PROJECTS = [
  {name:"7:20", field:"Fashion & Apparel", img:"p07", hover:"img/720/hover2.jpg", case: T720_CASE, tags:["Branding", "Positioning", "SMM Visuals", "Merch & Apparel", "Print"]},
  {name:"TAU", field:"Interior & Furniture", img:"p05b", hover:"img/tau/hover.jpg", case: TAU_CASE, tags:["Branding", "Positioning", "SMM Visuals", "Presentations"]},
  {name:"Fading Tales", field:"Film & Media", img:"p20c", hover:"img/ft/hover2.jpg", case: FT_CASE, tags:["Art Direction", "Film Posters & Key Art", "Titles & Typography", "Motion & 3D"]},
  {name:"Sezim", field:"Fashion & Apparel", img:"p04", hover:"img/sezim/s01.jpg", case: SEZIM_CASE, tags:["Branding", "Positioning", "SMM Visuals", "Merch & Apparel", "Print"]},
  {name:"KUN", field:"Agencies & Corporate", img:"p21", hover:"img/kun/n05.jpg", case: KUN_CASE, tags:["Branding", "Positioning", "SMM Visuals", "Presentations"]},
  {name:"1135", field:"Automotive", img:"p22c", hover:"img/1135/hover2.jpg", case: D1135_CASE, tags:["Branding", "Positioning", "SMM Visuals", "Merch & Apparel", "Print"]},
  {soon:true, name:"Кайрат", field:"Film & Media", img:"p01", case:{intro:["img/kairat/intro.mp4",1920,1080]}, tags:["Titles & Typography", "Film Posters & Key Art"]},
  {name:"Тастамашы Ана", field:"Film & Media", img:"p25b", hover:"img/ta/hover2.jpg", case: TA_CASE, tags:["Art Direction", "Film Posters & Key Art", "Titles & Typography"]},
  {soon:true, name:"Straight Shift", img:"p13", hover:"img/straight-shift/ss01.jpg", case: SS_CASE, tags:["Branding", "Positioning", "Key Visual"]},
  {soon:true, name:"bülbül", field:"Fashion & Apparel", img:"p02", hover:"img/bulbul/hover.jpg", tags:["Branding", "Key Visual", "Art Direction"], case: BULBUL_CASE},
  {name:"14 Music Label", img:"p03", tags:["Positioning", "Art Direction", "Branding"]},
  {name:"ushiro", img:"p06", tags:["Positioning", "Art Direction"]},
  {name:"allfolk", img:"p08", tags:["Motion & 3D", "Art Direction", "Branding"]},
  {name:"Проект 09", img:"p09", tags:["Art Direction", "Positioning"]},
  {name:"SAZY", img:"p10", tags:["Motion & 3D", "Art Direction", "Websites & UX/UI"]},
  {name:"Special Thanks", img:"p11", tags:["Art Direction", "Websites & UX/UI"]},
  {name:"muni", img:"p12", tags:["Positioning", "Naming", "Art Direction", "Key Visual"]},
  {name:"Kira D'Archi", img:"p14", tags:T.base},
  {name:"Pro Coffee", img:"p15", tags:T.kindred},
  {name:"Проект 16", img:"p16", tags:T.nike},
  {name:"Сетка", img:"p17", tags:T.base},
  {name:"Plan B Films", img:"p18", tags:T.kindred},
  {name:"Қарақшы", img:"p19", tags:T.nike},
  {name:"Älem Comedy Fest", img:"p24", tags:T.kindred},
].filter(p => !p.hidden).map(p => p.soon ? {...p, case: undefined} : p);
PROJECTS.forEach(p => p.case && CASE_TEXT[p.name] && Object.assign(p.case, CASE_TEXT[p.name]));   // hidden:true — скрыт с сайта; soon:true — виден, но закрыт («Coming soon»), кейс сохранён

// адрес страницы кейса: латинское имя → «ushiro», «bulbul», «7-20»; кириллица → номер картинки («p01»)
function slug(p){
  const s = p.name.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  return s || p.img;
}

// часы в футере
let clockTick = null;
function startClocks(){
  clockTick = () => { const el = document.getElementById('clocks'); if (el) el.innerHTML =
    `<span>${t('cityKZ')}</span><span>${new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Almaty'})}</span>`; };
  clockTick(); setInterval(() => clockTick(), 1000);
}

// размытие под шапкой включается только после начала прокрутки — чтобы не размывать первый экран
addEventListener('scroll', () => document.body.classList.toggle('scrolled', scrollY > 4), {passive: true});

// векторная анимация (Lottie) в блок с id: пока файл грузится, в блоке остаётся запасная картинка/видео
function playLottie(id, path, fallbackImg){
  const el = document.getElementById(id);
  if (!window.lottie) { if (fallbackImg) el.innerHTML = `<img src="${fallbackImg}" alt="">`; return; }
  const box = document.createElement('div');
  const anim = lottie.loadAnimation({container: box, renderer: 'svg', loop: true, autoplay: true, path});
  anim.addEventListener('DOMLoaded', () => el.replaceChildren(...box.childNodes));
}

// ——— общие для всех страниц: меню, подвал, копирование почты, язык ———
const EMAIL = 'oi.lab.team@proton.me';
// соцсети иконками: подвал, меню телефона и окно связи
const SOCIAL = [
  ['WhatsApp', 'https://wa.me/77767387264', '<path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.3 18.4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9.3 8.2c-.4 2.6 3 6.2 5.6 5.9l.8-1.3-1.9-1-.9.7c-.9-.4-1.8-1.3-2.2-2.2l.7-.9-1-1.9z" fill="currentColor"/>'],
  ['Instagram', 'https://www.instagram.com/oi.lab/', '<rect x="3.75" y="3.75" width="16.5" height="16.5" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3.9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="16.9" cy="7.1" r="1.05" fill="currentColor"/>'],
  ['Telegram', 'https://t.me/o10eye', '<path d="M20.5 4.5L3.5 11.2l5.6 2 2 5.9 3.1-3.6 4.6 3.4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9.1 13.2l11.4-8.7" stroke="currentColor" stroke-width="1.5"/>'],
];
const socialHtml = () => `<span class="social">${SOCIAL.map(([n, h, d]) =>
  `<a href="${h}" target="_blank" rel="noopener" aria-label="${n}" title="${n}"><svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg></a>`).join('')}</span>`;
function siteChrome(){
  // телефон: кнопка Menu + полноэкранный слой с тем же меню (создаются один раз)
  const hdr = document.querySelector('header');
  hdr.insertAdjacentHTML('beforeend', `<button class="menu-btn" type="button" aria-expanded="false" aria-controls="sheet"><span></span> <i aria-hidden="true"></i></button>`);
  document.body.insertAdjacentHTML('beforeend', `<div class="sheet" id="sheet"><nav></nav>
    <div class="meta"><a href="mailto:${EMAIL}" class="copy">${EMAIL}</a>${socialHtml()}<span data-i="cityKZ"></span><span class="langs"></span></div></div>`);
  const btn = hdr.querySelector('.menu-btn');
  const toggle = open => { document.body.classList.toggle('menu-open', open); btn.setAttribute('aria-expanded', open); btn.firstChild.textContent = t(open ? 'close' : 'menu'); };
  btn.onclick = () => toggle(!document.body.classList.contains('menu-open'));
  document.getElementById('sheet').addEventListener('click', e => { if (e.target.closest('a:not(.copy)')) toggle(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
  buddy();
  chromeTexts(); applyI18n(); startClocks(); startWhen(); autoplay();
}

// персонаж в углу (как в Notion): клик открывает окно с контактами и короткой формой о проекте.
// Форма без сервера: «Отправить» открывает почтовое приложение с готовым письмом на EMAIL.
function buddy(){
  document.body.insertAdjacentHTML('beforeend', `
  <section class="bd-win" id="bd-win" role="dialog" aria-modal="true" aria-labelledby="bd-t" hidden>
    <div class="bd-card">
      <div class="bd-top"><i class="bd-dot" aria-hidden="true"></i><h2 id="bd-t" data-i="b.title"></h2><button class="bd-x" type="button" aria-label="Close"><i aria-hidden="true"></i></button></div>
      <div class="bd-in">
        <p class="bd-sub" data-i="b.sub"></p>
        <div class="bd-links"><a href="mailto:${EMAIL}" class="bd-mail">${EMAIL}</a>${socialHtml()}</div>
        <form class="bd-form" id="bd-form">
          <label><span data-i="b.name"></span><input name="name" autocomplete="name" required></label>
          <label><span data-i="b.reach"></span><input name="reach" autocomplete="email" required></label>
          <label class="wide"><span data-i="b.about"></span><textarea name="about" rows="4" required></textarea></label>
          <input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px">
          <div class="bd-foot wide"><button class="bd-send" type="submit" data-i="b.send"></button><small data-i="b.note"></small></div>
        </form>
      </div>
    </div>
  </section>
  <div class="buddy" id="buddy">
    <button class="bd-btn" type="button" aria-expanded="false" aria-controls="bd-win"><span class="bd-tip" data-i="b.tip"></span><span class="mascot"><img src="img/mascot-c.png" alt="" width="150" height="150"><span class="eyes"><img class="eye" src="img/mascot-b-eye0.png" alt="" style="left:25.63%;top:38.39%;width:11.73%"><img class="eye" src="img/mascot-b-eye1.png" alt="" style="left:60.11%;top:38.39%;width:12.88%"></span></span><span class="sr" data-i="b.title"></span></button>
  </div>`);
  const root = document.getElementById('buddy'), win = document.getElementById('bd-win'), btn = root.querySelector('.bd-btn');
  // окно вырастает из кнопки, которая его открыла (маскот или «Связаться с нами»), и сворачивается обратно в неё — как у gaadesign.studio
  const card = win.querySelector('.bd-card'), still = matchMedia('(prefers-reduced-motion: reduce)');
  let from = btn, anim = null;
  const fromRect = () => { const a = from.getBoundingClientRect(), b = card.getBoundingClientRect();
    return `translate(${(a.left + a.width / 2) - (b.left + b.width / 2)}px, ${(a.top + a.height / 2) - (b.top + b.height / 2)}px) scale(${Math.max(a.width / b.width, .08)}, ${Math.max(a.height / b.height, .04)})`; };
  const open = on => {
    if (on === !win.hidden && !anim) return;
    root.classList.toggle('open', on); document.documentElement.classList.toggle('bd-lock', on); btn.setAttribute('aria-expanded', on);
    document.querySelectorAll('.nav-contact').forEach(c => c.classList.toggle('is-on', on));
    if (anim) anim.cancel();
    if (on) win.hidden = false;
    if (still.matches) { win.hidden = !on; if (on) win.querySelector('input').focus(); return; }
    const kf = [{transform: fromRect(), borderRadius: '40px', opacity: 0}, {transform: 'none', borderRadius: '24px', opacity: 1}];
    win.animate([{opacity: 0}, {opacity: 1}], {duration: 420, easing: 'ease', direction: on ? 'normal' : 'reverse', fill: 'both'});
    anim = card.animate(kf, {duration: on ? 560 : 420, easing: on ? 'cubic-bezier(.22,1.12,.36,1)' : 'cubic-bezier(.4,0,.6,1)', direction: on ? 'normal' : 'reverse', fill: 'both'});
    card.querySelector('.bd-in').animate([{opacity: 0}, {opacity: 1}], {duration: on ? 360 : 160, delay: on ? 180 : 0, easing: 'ease', direction: on ? 'normal' : 'reverse', fill: 'both'});
    anim.onfinish = () => { anim = null; if (!on) { win.hidden = true; win.getAnimations({subtree: true}).forEach(a => a.cancel()); } else win.querySelector('input').focus({preventScroll: true}); };
  };
  btn.onclick = () => { from = btn; open(win.hidden); };
  window.openContact = () => { open(true); };
  document.addEventListener('click', e => { const c = e.target.closest('.nav-contact'); if (c) { e.preventDefault(); from = c.offsetParent ? c : btn; open(true); } });
  win.addEventListener('click', e => { if (!card.contains(e.target)) open(false); });   // клик мимо окна закрывает
  // глаза маскота смотрят на курсор (сдвиг до 4% размера кнопки)
  const eyes = root.querySelector('.eyes');
  if (matchMedia('(hover:hover)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) addEventListener('pointermove', e => {
    const r = btn.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2), d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 300) * 4;
    eyes.style.transform = `translate(${(dx / d * k).toFixed(2)}%, ${(dy / d * k).toFixed(2)}%)`;
  }, {passive: true});
  win.querySelector('.bd-x').onclick = () => { open(false); btn.focus(); };
  addEventListener('keydown', e => { if (e.key === 'Escape' && !win.hidden) { open(false); btn.focus(); } });
    // заявка уходит прямо на почту через FormSubmit (без сервера); если сервис недоступен — открываем почтовое приложение
  const form = document.getElementById('bd-form'), send = form.querySelector('.bd-send'), note = form.querySelector('small');
  form.onsubmit = async e => {
    e.preventDefault();
    const f = new FormData(form);
    if (f.get('_honey')) return;   // ловушка для ботов
    send.disabled = true; send.textContent = t('b.sending');
    try {
      const r = await fetch(`https://formsubmit.co/ajax/b767abc441ae779010df1e16cc8fae82`, {signal: AbortSignal.timeout(15000), method: 'POST', headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify({name: f.get('name'), contact: f.get('reach'), message: f.get('about'), page: location.href,
          _subject: 'Заявка с сайта Oi.Lab — ' + f.get('name'), _replyto: /@/.test(f.get('reach')) ? f.get('reach') : undefined, _template: 'table', _captcha: 'false'})});
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.success === 'false' || j.success === false) throw new Error(j.message || r.status);
      form.reset(); form.classList.add('sent'); note.textContent = t('b.sent');
    } catch (err) {
      // не открываем почтовое приложение сами — показываем адрес, текст заявки остаётся в форме
      note.innerHTML = `${t('b.error')} <a href="mailto:${EMAIL}">${EMAIL}</a>`;
    } finally { send.disabled = false; send.textContent = t('b.send'); }
  };

}

// Видео без звука должны играть сами. iPhone в режиме энергосбережения и некоторые встроенные браузеры
// блокируют autoplay и рисуют кнопку «плей» — тогда запускаем при первом касании или прокрутке.
function autoplay(){
  const go = () => document.querySelectorAll('video[autoplay]').forEach(v => { v.muted = true; v.playsInline = true; if (v.paused) v.play().catch(() => {}); });
  go();
  for (const ev of ['pointerdown','touchstart','scroll','keydown']) addEventListener(ev, go, {passive: true, once: true});
  document.addEventListener('visibilitychange', () => { if (!document.hidden) go(); });
}
// тексты меню и подвала на текущем языке (перерисовываются при смене языка)
// плавный переход: сначала плашка становится активной, потом открывается страница
document.addEventListener('click', e => {
  const a = e.target.closest('header nav a:not(.nav-contact)');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || a.getAttribute('aria-current')) return;
  e.preventDefault();
  a.parentElement.querySelectorAll('a[aria-current]').forEach(x => x.removeAttribute('aria-current'));
  a.setAttribute('aria-current', 'page');
  setTimeout(() => { location.href = a.href; }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 320);   // navGo
});
function chromeTexts(){
  // активная вкладка: главная и кейсы → Projects; Contact открывает окно связи маскота
  const here = location.pathname.split('/').pop() || 'index.html';
  const cur = here === 'gallery.html' ? 'gallery.html' : here === 'about.html' ? 'about.html' : './#projects';
  const links = [['nav.projects','./#projects'],['nav.gallery','gallery.html'],['nav.about','about.html']]
    .map(([k,h]) => `<a href="${h}"${h === cur ? ' aria-current="page"' : ''}><span>${t(k)}</span></a>`).join('') +
    `<a href="mailto:${EMAIL}" class="nav-contact"><span>${t('nav.contact')}</span></a>`;
  document.getElementById('nav').innerHTML = links;
  document.querySelector('#sheet nav').innerHTML = links;
  const btn = document.querySelector('.menu-btn');
  btn.firstChild.textContent = t(document.body.classList.contains('menu-open') ? 'close' : 'menu');
  document.getElementById('contact').innerHTML = `
    <div class="clocks" id="clocks"></div>
    <div class="links"><span>${t('f.links')}</span>${socialHtml()}</div>
    <div class="q">${t('f.question')} <a class="write nav-contact" href="mailto:${EMAIL}">${t('f.write')}</a></div>
    <span>${t('f.rights')}</span>`;
  clockTick && clockTick(); whenTick && whenTick();
}
// клик по Contact / Write us: почта копируется, слово на секунду меняется на «Copied»
document.addEventListener('click', e => {
  const a = e.target.closest('.copy'); if (!a) return;
  e.preventDefault();
  const label = a.textContent;
  const show = txt => { a.textContent = txt; setTimeout(() => a.textContent = label, 1600); };
  if (a.dataset.busy) return; a.dataset.busy = 1; setTimeout(() => delete a.dataset.busy, 1600);
  navigator.clipboard.writeText(EMAIL).then(() => show(t('copied')), () => show(EMAIL));
});
// дата и время в шапке: «Sat 24th October, Almaty, 14:58» / «сб, 24 октября, Алматы, 14:58»
let whenTick = null;
function startWhen(){
  const el = document.getElementById('when'); if (!el) return;
  whenTick = () => {
    const d = new Date(), o = {timeZone:'Asia/Almaty'}, loc = LOCALE[LANG];
    const time = d.toLocaleTimeString(loc, {...o, hour:'2-digit', minute:'2-digit'});
    if (LANG === 'kk') {   // в браузерах часто нет казахских названий дат — задаём сами
      const [wd, dd, mm] = ['weekday','day','month'].map(k => d.toLocaleString('en-US', {...o, [k]: k === 'weekday' ? 'short' : 'numeric'}));
      const W = {Sun:'жс',Mon:'дс',Tue:'сс',Wed:'ср',Thu:'бс',Fri:'жм',Sat:'сб'};
      const M = ['қаңтар','ақпан','наурыз','сәуір','мамыр','маусым','шілде','тамыз','қыркүйек','қазан','қараша','желтоқсан'];
      el.textContent = `${W[wd]}, ${dd} ${M[mm - 1]}, ${t('city')}, ${time}`; return;
    }
    if (LANG === 'ru') { el.textContent = `${d.toLocaleDateString(loc, {...o, weekday:'short', day:'numeric', month:'long'})}, ${t('city')}, ${time}`; return; }
    const day = +d.toLocaleString('en-GB',{...o,day:'numeric'});
    const th = (day % 100 >= 11 && day % 100 <= 13) ? 'th' : ({1:'st',2:'nd',3:'rd'}[day % 10] || 'th');
    el.textContent = `${d.toLocaleString('en-GB',{...o,weekday:'short'})} ${day}${th} ${d.toLocaleString('en-GB',{...o,month:'long'})}, Almaty, ${time}`;
  };
  whenTick(); setInterval(() => whenTick(), 10000);
}

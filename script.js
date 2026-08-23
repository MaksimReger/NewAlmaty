const articles = [
{id:"west-east-gates",cat:"ГОРОД",date:"4 августа 2026",title:"Новые дороги и инженерные сети: как продвигаются проекты «Западные ворота» и «Восточные ворота»",desc:"В Алматы продолжаются крупные инфраструктурные проекты, которые должны связать перспективные районы дорогами и инженерными сетями.",source:"Региональная служба коммуникаций Алматы",url:"https://rsk.almaty.kz/ru/news/44249",image:"https://img.inform.kz/kazinform-photobank/media/2024-12-18/38b8fb94-710d-44d6-922a-b3714fcb511a.jpeg"},
{id:"republic-square",cat:"БЛАГОУСТРОЙСТВО",date:"13 июля 2026",title:"Площадь Республики преобразили: что изменилось в одном из ключевых общественных пространств",desc:"В рамках реконструкции улицы Сатпаева обновили территорию площадью 4,5 гектара.",source:"Региональная служба коммуникаций Алматы",url:"https://rsk.almaty.kz/ru/news/44171",image:"https://informburo.kz/storage/photos/175/1280/097a720b-aab3-49c6-903b-35e8e17b6c38.webp"},
{id:"bnu-219",cat:"ГОРОД",date:"2026",title:"В Алматы реализуют 219 проектов «Бюджета народного участия»",desc:"В 2026 году продолжается работа над 219 инициативами жителей: часть уже завершена, остальные находятся на разных стадиях реализации.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1260792?lang=ru",image:"https://static.tengrinews.kz/userdata/u38/2026-05/resize/1a0ccc3c65dba9529234e4b8f2410ebc.jpg"},
{id:"bnu-control",cat:"ГОРОД",date:"2026",title:"За проектами «Бюджета народного участия» в Алматы усилят контроль",desc:"Районным акиматам поручили следить за качеством и сроками работ по общественным пространствам, дворам, скверам и набережным.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1260792?lang=ru",image:"https://static.tengrinews.kz/userdata/u38/2026-05/resize/1a0ccc3c65dba9529234e4b8f2410ebc.jpg"},
{id:"public-spaces",cat:"БЛАГОУСТРОЙСТВО",date:"2026",title:"От Сайрана до Атакента: в Алматы обновили девять общественных пространств",desc:"В городе завершён основной объём работ на девяти объектах, включая набережную Сайрана, площадь Республики и Рощу Баума.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1267494?lang=ru",image:"https://static.tengrinews.kz/userdata/u38/2026-05/resize/1a0ccc3c65dba9529234e4b8f2410ebc.jpg"},
{id:"streets-bostandyk",cat:"ГОРОД",date:"6 апреля 2026",title:"В Бостандыкском районе обновят девять улиц и почти 33 км дорог",desc:"Проект включает благоустройство улиц, модернизацию освещения, велоинфраструктуру и работу с руслом Большой Алматинки.",source:"Региональная служба коммуникаций Алматы",url:"https://rsk.almaty.kz/ru/news/43658",image:"https://aqshamnews.kz/uploads/images/2021/11/image_750x_618dfd17748d7.jpg"},
{id:"traffic-solutions",cat:"ТРАНСПОРТ",date:"2026",title:"В Алматы запустили три новых автобусных маршрута и модернизируют оплату проезда",desc:"В 2026 году начали работать маршруты №96, №130 и №145, а электронную систему Avtobys обновляют поэтапно.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1228863?lang=ru",image:"https://cdn.nur.kz/images/1120/e35e889cc5d2b8d60b86d58a73b93f99.jpeg"},
{id:"stops-led",cat:"ТРАНСПОРТ",date:"2026",title:"На остановках Алматы планируют расширить цифровую инфраструктуру",desc:"В городе насчитывается 2261 остановочный пункт; до конца 2026 года планируется установка LED-табло на остановках общественного транспорта.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1228863?lang=ru",image:"https://almaty.tv/cache/imagine/1200/uploads/news/2024/10/c1767f059a9c2fe56fe5f857b61b5989.jpeg"},
{id:"roads-95",cat:"ИНФРАСТРУКТУРА",date:"2 февраля 2026",title:"Доля дорог Алматы в хорошем и удовлетворительном состоянии достигла 95%",desc:"В 2025 году средний ремонт провели на 347 улицах общей протяжённостью 281 км, сообщили в профильном управлении.",source:"Управление развития дорожной инфраструктуры Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/article/details/224444",image:"https://aqshamnews.kz/uploads/images/2021/11/image_750x_618dfd17748d7.jpg"},
{id:"west-east-plan",cat:"ИНФРАСТРУКТУРА",date:"2026",title:"План развития Алматы до 2030 года предусматривает новые дороги и общественный транспорт",desc:"В городе запланированы крупные проекты в дорожной сети, BRT, метро, микромобильности и инженерной инфраструктуре.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/article/details/219985",image:"https://el.kz/storage/storage/element/2026/04/23/mainphoto/180236/1200x700_r6QDSbCdI1webdszMZcN34k0sblQ0BU5VRZyegWZ.jpg"},
{id:"almaty-kaskelen",cat:"ТРАНСПОРТ",date:"15 июля 2026",title:"Дорогу Алматы — Қаскелен расширят до восьми полос",desc:"Решение принято после поручения по снижению нагрузки на один из наиболее загруженных участков агломерации.",source:"Премьер-министр Республики Казахстан",url:"https://primeminister.kz/ru/news/po-porucheniyu-prezidenta-dorogu-almaty-kaskelen-rasshiryat-do-vosmi-polos-31656",image:"https://www.zakon.kz/pbi/WEBP/2023-12-31/file-f2b483b4-c987-4eef-8334-b9e81b5da1b1/800x1000.webp"},
{id:"facade-to-facade",cat:"БЛАГОУСТРОЙСТВО",date:"2026",title:"Алматы продолжает благоустройство улиц по принципу «от фасада до фасада»",desc:"Город реализует комплексное преобразование улиц с акцентом на пешеходную среду, освещение, озеленение и общественные пространства.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/904824?lang=ru",image:"https://img.inform.kz/kazinform-photobank/media/2025-07-09/684fab6d-dfa0-4936-a7cb-4e97b1a9aad4.jpeg"},
{id:"maxim-story",cat:"ЛЮДИ АЛМАТЫ",date:"23 августа 2026",title:"От ритуальных услуг до TikTok: история молодого алматинца, который строит свою цифровую жизнь",desc:"Максим Индучный начал работать ещё в юности, а параллельно развивает сайты, контент и собственные интернет-проекты.",source:"Авторский материал «Городского контура»",url:"",image:"maxim"},
{id:"maxim-digital",cat:"ЛЮДИ АЛМАТЫ",date:"23 августа 2026",title:"Работа, контент и собственный сайт: как молодой алматинец развивает несколько направлений одновременно",desc:"О TikTok, создании сайта, цифровых технологиях и совмещении работы с интернет-проектами.",source:"Авторский материал «Городского контура»",url:"",image:"maxim"}
];

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));

function placeholder(type="city", extra=""){
  if(type==="maxim") return `<div class="image-placeholder real-photo ${extra}"><img src="assets/images/maxim-main.jpg" alt="Максим Индучный"><span class="photo-fallback">ФОТО МАКСИМА</span></div>`;
  if(type && type.startsWith("http")) return `<div class="image-placeholder real-photo news-photo ${extra}"><img src="${type}" alt="Фото к материалу" loading="lazy" referrerpolicy="no-referrer"><span class="photo-fallback">ФОТО АЛМАТЫ</span></div>`;
  return `<div class="image-placeholder ${extra}"><span>ФОТО АЛМАТЫ</span><small>Фото к материалу</small></div>`;
}

function card(a){
  return `<article class="news-card">${placeholder(a.image)}<div class="story-meta"><span>${esc(a.cat)}</span><span>${esc(a.date)}</span></div><h3><a href="article.html?id=${a.id}">${esc(a.title)}</a></h3><p>${esc(a.desc)}</p></article>`;
}
function cityItem(a){
  return `<article class="city-item"><div class="story-meta"><span>${esc(a.cat)}</span><span>${esc(a.date)}</span></div><h4><a href="article.html?id=${a.id}">${esc(a.title)}</a></h4><p>${esc(a.desc)}</p></article>`;
}

function renderHome(){
  const latest = $("#latestGrid"), city = $("#cityList"), popular = $("#popularGrid");
  if(!latest) return;
  latest.innerHTML = articles.filter(a=>!a.id.startsWith("maxim")).slice(0,6).map(card).join("");
  city.innerHTML = articles.filter(a=>["bnu-219","traffic-solutions","roads-95","facade-to-facade"].includes(a.id)).map(cityItem).join("");
  popular.innerHTML = articles.slice(2,6).map((a,i)=>`<article class="popular-item"><div class="popular-num">0${i+1}</div><h3><a href="article.html?id=${a.id}">${esc(a.title)}</a></h3><span class="story-meta">${esc(a.cat)} · ${esc(a.date)}</span></article>`).join("");
}

function articleText(id){
  const common = {
    "west-east-gates":[
      ["p","В Алматы продолжается реализация двух крупных инфраструктурных проектов — «Западные ворота» и «Восточные ворота». По данным Региональной службы коммуникаций, их задача — обеспечить перспективные районы дорогами, инженерными сетями и коммунальной инфраструктурой."],
      ["p","Один из ключевых участков находится в Алатауском районе — в квадрате улиц Бауыржана Момышулы, Монке Би, Фаризы Онгарсыновой и проспекта Рыскулова. Проект рассматривается как часть дальнейшего развития территории."],
      ["h2","Зачем городу новые связи"],
      ["p","Развитие дорожной и инженерной сети позволяет создавать новые транспортные связи и подготовить территории к появлению социальной и коммунальной инфраструктуры. Для жителей важен не только сам факт строительства, но и то, как новые маршруты будут связаны с уже существующей сетью города."],
    ],
    "republic-square":[
      ["p","В Алматы завершено комплексное благоустройство площади Республики. По информации Региональной службы коммуникаций, обновление стало частью масштабного проекта реконструкции улицы Сатпаева."],
      ["p","Преобразована территория площадью 4,5 гектара. В проекте акцент сделан на условиях для прогулок, отдыха и семейного досуга."],
      ["h2","Общественное пространство как часть маршрута"],
      ["p","Обновление площади рассматривается не отдельно от улицы, а как часть более крупной городской среды. Такой подход связывает пешеходные маршруты, озеленение и места отдыха в единый городской сценарий."],
    ],
    "maxim-story":[
      ["p","Максим Индучный, 2007 года рождения, живёт в Алматы и работает в сфере ритуальных услуг. По его словам, к самостоятельной работе он пришёл ещё в юности — хотел зарабатывать сам, развиваться и постепенно строить собственную траекторию."],
      ["p","Его профессиональная деятельность связана со сферой ритуальных услуг, где он получил около шести лет опыта. Это направление заметно отличается от того, чем Максим занимается в интернете, однако именно сочетание разных интересов стало частью его повседневной жизни."],
      ["h2","От работы — к цифровым проектам"],
      ["p","Параллельно Максим интересуется TikTok, созданием сайтов, интернет-проектами и цифровым контентом. Он развивает собственные страницы и пробует создавать цифровые продукты самостоятельно, без попытки представить это как уже состоявшуюся большую карьеру."],
      ["blockquote","«Мне интересно не останавливаться на одном направлении и постепенно разбираться в том, как устроена современная цифровая среда»."] ,
      ["p","Его TikTok — отдельная площадка для контента, а собственный сайт стал практическим проектом, через который можно экспериментировать с дизайном, структурой и публикацией информации."],
      ["h2","Две разные стороны одной истории"],
      ["p","История Максима интересна именно контрастом: работа в специфической сфере соседствует с интересом к технологиям и контенту. Пока это не история о большой известности или громком успехе — скорее о молодом человеке, который пробует разные направления и постепенно собирает собственный цифровой опыт."],
    ],
    "maxim-digital":[
      ["p","Для Максима Индучного цифровые проекты — не отдельная профессия, а направление, которое он постепенно осваивает параллельно с основной работой в сфере ритуальных услуг."],
      ["p","Один из его интересов — TikTok. Платформа позволяет экспериментировать с коротким форматом, подачей и идеями для контента. Максим ведёт профиль @makss988 и использует соцсеть как часть своей цифровой активности."],
      ["h2","Сайт как практический проект"],
      ["p","Ещё одно направление — создание собственного сайта. Для молодого автора это одновременно творческая и техническая задача: продумать структуру, визуальный стиль, страницы, мобильную версию и публикацию проекта в интернете."],
      ["p","Сайт ritual_almaty стал отдельной площадкой, а работа над ним дала возможность глубже интересоваться веб-разработкой и цифровыми инструментами."],
      ["h2","Совмещать, а не выбирать"],
      ["p","Максим не описывает себя как человека, который уже достиг большой известности в интернете. Его история скорее про совмещение: есть основная работа, а рядом с ней — TikTok, сайты, технологии и интерес к современному контенту."],
    ]
  };
  if(common[id]) return common[id];
  return [
    ["p","Материал подготовлен на основе открытого сообщения источника. «Городской контур» пересказывает информацию своими словами и оставляет ссылку на первоисточник."],
    ["p","Ниже собраны ключевые факты и контекст, которые помогают понять, что происходит в городе и почему это важно для Алматы."],
    ["h2","Что известно"],
    ["p","Информация приведена без добавления непроверенных цитат или фактов. Для уточнения деталей рекомендуем обратиться к первоисточнику, указанному в конце материала."]
  ];
}

function renderArticle(){
  const root=$("#articleRoot"); if(!root) return;
  const id=new URLSearchParams(location.search).get("id")||"west-east-gates";
  const a=articles.find(x=>x.id===id)||articles[0];
  const body=articleText(a.id).map(([tag,text])=>`<${tag}>${tag==="blockquote"?esc(text):esc(text)}</${tag}>`).join("");
  const links = a.id.startsWith("maxim") ? `
    <div class="article-gallery">
      <div class="image-placeholder real-photo"><!-- ЗАМЕНИТЕ НА ФОТО МАКСИМА --><img src="assets/images/maxim-2.jpg" alt="Максим Индучный"><span class="photo-fallback">ФОТО</span></div>
      <div class="image-placeholder real-photo"><!-- ЗАМЕНИТЕ НА ФОТО МАКСИМА --><img src="assets/images/maxim-main.jpg" alt="Максим Индучный"><span class="photo-fallback">ФОТО</span></div>
    </div>
    <div class="article-content"><p><a class="person-link" href="https://www.tiktok.com/@makss988" target="_blank" rel="noopener">TikTok @makss988 →</a><br><a class="person-link" href="https://funeralhomeinalmaty.github.io/ritual_almaty/" target="_blank" rel="noopener">Сайт Ritual Almaty →</a></p></div>` : "";
  root.innerHTML=`<div class="article-wrap container"><header class="article-head"><div class="story-meta"><span>${esc(a.cat)}</span><span>${esc(a.date)}</span></div><h1>${esc(a.title)}</h1><p class="article-deck">${esc(a.desc)}</p><div class="article-info"><span>Автор: <b>${a.id.startsWith("maxim")?"Редакция «Городского контура»":"Редакция «Городского контура»"}</b></span><span>Источник: <b>${esc(a.source)}</b></span></div></header><div class="article-main-image">${a.image==="maxim" ? placeholder("maxim") : placeholder("city")}</div><div class="article-content">${body}</div>${links}<div class="source-box"><b>Первоисточник</b><br>${a.url?`<a href="${a.url}" target="_blank" rel="noopener">${esc(a.source)} — открыть публикацию →</a>`:"Авторский материал «Городского контура»"}</div><div class="related"><span class="kicker">ДАЛЬШЕ</span><h3>Другие материалы</h3><a class="text-link" href="index.html#latest">Вернуться к ленте →</a></div></div>`;
}

function initMenu(){
  const btn=$("#menuBtn"), menu=$("#mobileMenu");
  if(btn&&menu) btn.addEventListener("click",()=>menu.classList.toggle("open"));
}
function initSearch(){
  const btn=$("#searchBtn"), panel=$("#searchPanel"), close=$("#closeSearch"), input=$("#searchInput"), results=$("#searchResults");
  if(!btn||!panel) return;
  btn.addEventListener("click",()=>{panel.classList.add("open");panel.setAttribute("aria-hidden","false");setTimeout(()=>input.focus(),50)});
  close.addEventListener("click",()=>panel.classList.remove("open"));
  input.addEventListener("input",()=>{
    const q=input.value.toLowerCase().trim();
    if(!q){results.innerHTML="";return}
    results.innerHTML=articles.filter(a=>(a.title+" "+a.desc+" "+a.cat).toLowerCase().includes(q)).slice(0,8).map(a=>`<div class="search-result"><small>${esc(a.cat)} · ${esc(a.date)}</small><br><a href="article.html?id=${a.id}">${esc(a.title)}</a></div>`).join("")||"<p>Ничего не найдено.</p>";
  });
}
renderHome(); renderArticle(); initMenu(); initSearch();

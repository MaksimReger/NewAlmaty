const articles = [
{id:"west-east-gates",cat:"ГОРОД",date:"4 августа 2026",title:"Новые дороги и инженерные сети: как продвигаются проекты «Западные ворота» и «Восточные ворота»",desc:"В Алматы продолжаются крупные инфраструктурные проекты, которые должны связать перспективные районы дорогами и инженерными сетями.",source:"Региональная служба коммуникаций Алматы",url:"https://rsk.almaty.kz/ru/news/44249",image:"https://img.inform.kz/kazinform-photobank/media/2024-12-18/38b8fb94-710d-44d6-922a-b3714fcb511a.jpeg"},
{id:"republic-square",cat:"БЛАГОУСТРОЙСТВО",date:"13 июля 2026",title:"Площадь Республики преобразили: что изменилось в одном из ключевых общественных пространств",desc:"В рамках реконструкции улицы Сатпаева обновили территорию площадью 4,5 гектара.",source:"Региональная служба коммуникаций Алматы",url:"https://rsk.almaty.kz/ru/news/44171",image:"https://img.inform.kz/kazinform-photobank/media/2026-03-27/ac3e9ee7-ccf1-4e2c-9c86-c57df29d446d.jpeg"},
{id:"bnu-219",cat:"ГОРОД",date:"2026",title:"В Алматы реализуют 219 проектов «Бюджета народного участия»",desc:"В 2026 году продолжается работа над 219 инициативами жителей: часть уже завершена, остальные находятся на разных стадиях реализации.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1260792?lang=ru",image:"https://img.bes.media/besmedia-photobank/media/2026-04-01/7a0aae5c-9e86-40ef-b386-3b8580be97db.jpeg"},
{id:"bnu-control",cat:"ГОРОД",date:"2026",title:"За проектами «Бюджета народного участия» в Алматы усилят контроль",desc:"Районным акиматам поручили следить за качеством и сроками работ по общественным пространствам, дворам, скверам и набережным.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1260792?lang=ru",image:"https://urbanexpert.kz/userfiles/upload/%D0%94%D0%B2%D0%BE%D1%80%D1%8B%20%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B/%D0%94%D0%B2%D0%BE%D1%80%D1%8B%20%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%20%281%29.jpg"},
{id:"public-spaces",cat:"БЛАГОУСТРОЙСТВО",date:"2026",title:"От Сайрана до Атакента: в Алматы обновили девять общественных пространств",desc:"В городе завершён основной объём работ на девяти объектах, включая набережную Сайрана, площадь Республики и Рощу Баума.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1267494?lang=ru",image:"https://vecher.kz/uploads/images/20240919100233379.jpeg"},
{id:"streets-bostandyk",cat:"ГОРОД",date:"6 апреля 2026",title:"В Бостандыкском районе обновят девять улиц и почти 33 км дорог",desc:"Проект включает благоустройство улиц, модернизацию освещения, велоинфраструктуру и работу с руслом Большой Алматинки.",source:"Региональная служба коммуникаций Алматы",url:"https://rsk.almaty.kz/ru/news/43658",image:"https://www.zakon.kz/pbi/WEBP/2023-12-25/file-724ae5b5-17d5-4e79-943b-34e3e7ded66f/800x451.webp"},
{id:"traffic-solutions",cat:"ТРАНСПОРТ",date:"2026",title:"В Алматы запустили три новых автобусных маршрута и модернизируют оплату проезда",desc:"В 2026 году начали работать маршруты №96, №130 и №145, а электронную систему Avtobys обновляют поэтапно.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1228863?lang=ru",image:"https://www.zakon.kz/pbi/WEBP/2024-01-22/file-6d852543-3832-400c-b8a1-50641171e3a3/800x450.webp"},
{id:"stops-led",cat:"ТРАНСПОРТ",date:"2026",title:"На остановках Алматы планируют расширить цифровую инфраструктуру",desc:"В городе насчитывается 2261 остановочный пункт; до конца 2026 года планируется установка LED-табло на остановках общественного транспорта.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/news/details/1228863?lang=ru",image:"https://tribune.kz/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-15-at-12.-1.jpg"},
{id:"roads-95",cat:"ИНФРАСТРУКТУРА",date:"2 февраля 2026",title:"Доля дорог Алматы в хорошем и удовлетворительном состоянии достигла 95%",desc:"В 2025 году средний ремонт провели на 347 улицах общей протяжённостью 281 км, сообщили в профильном управлении.",source:"Управление развития дорожной инфраструктуры Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/article/details/224444",image:"https://almatydc.kz/uploads/static_content_images/64dc91ecf0286.jpg"},
{id:"west-east-plan",cat:"ИНФРАСТРУКТУРА",date:"2026",title:"План развития Алматы до 2030 года предусматривает новые дороги и общественный транспорт",desc:"В городе запланированы крупные проекты в дорожной сети, BRT, метро, микромобильности и инженерной инфраструктуре.",source:"Акимат Алматы",url:"https://www.gov.kz/memleket/entities/almaty/press/article/details/219985",image:"https://informburo.kz/storage/photos/175/main/960x0/vlMuw935D55AOeAT9ghVfJAkY4wuY2e4deYQarjs.webp"},
{id:"almaty-kaskelen",cat:"ТРАНСПОРТ",date:"15 июля 2026",title:"Дорогу Алматы — Қаскелен расширят до восьми полос",desc:"Решение принято после поручения по снижению нагрузки на один из наиболее загруженных участков агломерации.",source:"Премьер-министр Республики Казахстан",url:"https://primeminister.kz/ru/news/po-porucheniyu-prezidenta-dorogu-almaty-kaskelen-rasshiryat-do-vosmi-polos-31656",image:"https://tengrinews.kz/userdata/news/2022/news_472268/thumb_m/photo_400478.jpeg"},
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
      ["p","Максим Индучный — молодой алматинец, который уже около шести лет работает в сфере ритуальных услуг. По его словам, за это время он прошёл путь от первых самостоятельных заказов до полноценной работы, в которой берёт на себя организацию похорон под ключ — от первых обращений семьи до завершения всех необходимых процедур."],
      ["p","Для большинства людей эта сфера остаётся мало знакомой до тех пор, пока с ней не приходится столкнуться лично. Именно поэтому Максим говорит о своей работе прежде всего как о помощи людям в один из самых тяжёлых периодов их жизни. В его задачах — не только организационные вопросы, но и необходимость спокойно и внимательно сопровождать семью на каждом этапе."],
      ["h2","Алматы — дом и место, где всё начиналось"],
      ["p","Максим родился в Алматы и всю жизнь живёт в Турксибском районе. Здесь он вырос, сформировал своё окружение и постепенно собрал собственную команду. Город для него — не просто место работы, а привычная среда, в которой прошли детство, первые профессиональные шаги и дальнейшее развитие."],
      ["p","По словам Максима, работа в ритуальной сфере научила его особенно внимательно относиться к людям и их обстоятельствам. Когда семья сталкивается с потерей, от организатора требуется не только знание всех необходимых процедур, но и выдержка, тактичность и способность быстро решать практические вопросы."],
      ["h2","Большая семья и жизнь за пределами работы"],
      ["p","За пределами профессиональной деятельности Максим много времени проводит с близкими. Он вырос в большой семье и говорит о ней как об одной из важных частей своей жизни. Отдельное место занимает его личная жизнь: рядом с ним любимая девушка, с которой он строит отношения и которую, по его словам, очень ценит."],
      ["h2","Спорт, теннис и новые интересы"],
      ["p","Свободное время Максим старается не ограничивать только работой. Среди его увлечений — спорт, а одним из периодических занятий стал теннис. Для него это возможность переключиться, поддерживать активный образ жизни и проводить время вне профессиональной среды."],
      ["h2","От работы — к TikTok и цифровым проектам"],
      ["p","Ещё одно направление, которое постепенно стало частью его жизни, — социальные сети. Помимо основной работы Максим развивает TikTok и пробует себя в роли автора коротких видео. Площадка стала для него способом экспериментировать с подачей, общаться с аудиторией и просто находить новое занятие вне привычной профессиональной сферы."],
      ["p","Параллельно Максим интересуется сайтами, интернет-проектами и цифровыми инструментами. Он учится самостоятельно собирать веб-страницы, работать с визуальной подачей и превращать идеи в готовые проекты. Такой подход позволяет ему постепенно расширять круг навыков и не останавливаться на одном направлении."],
      ["blockquote","«Мне всегда было интересно пробовать что-то новое. Работа остаётся основным направлением, но хочется развиваться и в других сферах — спорте, контенте и технологиях»."],
      ["h2","История без громких титулов"],
      ["p","История Максима не столько о готовом успехе, сколько о постоянном движении. Организация похорон остаётся его основной профессиональной сферой, однако рядом с ней появляются спорт, TikTok, цифровые проекты и новые интересы. В этом сочетании и складывается повседневная жизнь молодого алматинца, который строит свою команду и постепенно формирует собственное призвание — помогать людям тогда, когда им особенно нужна поддержка."],
    ],
    "maxim-digital":[
      ["p","За основной работой Максим Индучный постепенно выстроил для себя ещё одно направление — цифровую среду. Он интересуется созданием сайтов, короткими видео и тем, как современные инструменты помогают превращать обычную идею в готовый проект."],
      ["p","Одним из его увлечений стал TikTok. Максим ведёт профиль @makss988, экспериментирует с форматом коротких роликов и постепенно осваивает для себя роль автора контента. Для него это прежде всего хобби и возможность попробовать себя в совершенно другой сфере."],
      ["h2","Сайт как практический проект"],
      ["p","Ещё одно направление — работа с сайтами. Максим самостоятельно интересуется структурой страниц, дизайном, мобильной адаптацией и публикацией проектов в интернете. Такой подход позволяет ему получать практический опыт и одновременно создавать полезные цифровые продукты."],
      ["h2","Когда работа не ограничивается одной профессией"],
      ["p","Основная профессиональная деятельность Максима связана с организацией похорон. Параллельно он развивает личные интересы — спорт, теннис, TikTok и цифровые проекты. Именно это сочетание разных занятий стало одной из характерных особенностей его повседневной жизни."],
      ["p","Пока Максим не называет себя профессиональным блогером или разработчиком. Он воспринимает эти направления как пространство для развития, где можно учиться, экспериментировать и постепенно находить то, что действительно интересно."],
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
      <div class="image-placeholder real-photo"><img src="assets/images/maxim-main.jpg" alt="Максим Индучный"></div>
      <div class="image-placeholder real-photo"><img src="assets/images/maxim-2.jpg" alt="Максим Индучный"></div>
    </div>
    <div class="article-content"><p><a class="person-link" href="https://www.tiktok.com/@makss988" target="_blank" rel="noopener">TikTok @makss988 →</a><br><a class="person-link" href="https://funeralhomeinalmaty.github.io/ritual_almaty/" target="_blank" rel="noopener">Сайт Ritual Almaty →</a></p></div>` : "";
  root.innerHTML=`<div class="article-wrap container"><header class="article-head"><div class="story-meta"><span>${esc(a.cat)}</span><span>${esc(a.date)}</span></div><h1>${esc(a.title)}</h1><p class="article-deck">${esc(a.desc)}</p><div class="article-info"><span>Автор: <b>${a.id.startsWith("maxim")?"Редакция «Городского контура»":"Редакция «Городского контура»"}</b></span><span>Источник: <b>${esc(a.source)}</b></span></div></header><div class="article-main-image">${a.image==="maxim" ? placeholder("maxim") : placeholder("city")}</div><div class="article-content">${body}</div>${links}<div class="source-box"><b>Первоисточник</b><br>${a.url?`<a href="${a.url}" target="_blank" rel="noopener">${esc(a.source)} — открыть публикацию →</a>`:"Авторский материал «Городского контура»"}</div><div class="related"><span class="kicker">ДАЛЬШЕ</span><h3>${a.id.startsWith("maxim") ? "Продолжить знакомство с историей" : "Другие материалы"}</h3>${a.id==="maxim-story"?`<a class="button" href="article.html?id=maxim-digital">Дальше →</a>`:a.id==="maxim-digital"?`<a class="button" href="index.html#people">К разделу «Люди Алматы» →</a>`:`<a class="text-link" href="index.html#latest">Вернуться к ленте →</a>`}</div></div>`;
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

const movies=[
{name:"Jana Nayagan",image:"jana--6c8caf60-dbdd-11f0-a680-332b345d0f23.jpg",category:"tamil",link:"https://www.netflix.com",trending:true,isNew:false},
{name:"Master",image:"master.jpg",category:"tamil",link:"https://www.amazonprimevideo.com",trending:true,isNew:false},
{name:"Mersal",image:"mersal.jpg",category:"tamil",link:"https://www.hotstar.com",trending:false,isNew:false},
{name:"Bigil",image:"bigil.jpg",category:"tamil",link:"https://www.hotstar.com",trending:false,isNew:false},
{name:"Varisu",image:"vaarisu.jpg",category:"tamil",link:"https://www.amazonprimevideo.com",trending:false,isNew:false},
{name:"Beast",image:"beast.jpg",category:"tamil",link:"https://www.netflix.com",trending:false,isNew:false},
{name:"Puli",image:"puli.jpg",category:"tamil",link:"https://www.hotstar.com",trending:false,isNew:false},
{name:"Kathi",image:"kathi.jpg",category:"tamil",link:"https://www.amazonprimevideo.com",trending:false,isNew:false},
{name:"Parasakthi",image:"images.jpg",category:"tamil",link:"https://www.amazonprimevideo.com",trending:true,isNew:false},
{name:"Thalaivar Thambi",image:"Thalaivar-Thambi-Thalaimaiyil-12145180-eeb8-11f0-af41-ad503c0c7315.jpg",category:"tamil",link:"https://www.hotstar.com",trending:true,isNew:true},
{name:"Sirai",image:"download.jpg",category:"tamil",link:"https://www.zee5.com",trending:false,isNew:true},
{name:"Mankatha",image:"mankatha.png",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Viswasam",image:"viswasam.png",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Vedalam",image:"vedalam.png",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Thunivu",image:"thunivu.png",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Jailer",image:"jailer.png",category:"tamil",link:"#",trending:true,isNew:false},
{name:"Kabali",image:"kabali.jpg",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Enthiran",image:"enthiran.png",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Petta",image:"petta.webp",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Vikram",image:"vikram.png",category:"tamil",link:"#",trending:true,isNew:false},
{name:"Indian",image:"indian.png",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Dasavatharam",image:"Dasavatharam.png",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Viswaroopam",image:"viswaroopam.png",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Anniyan",image:"anniyan.webp",category:"tamil",link:"#",trending:false,isNew:false},
{name:"I",image:"I.webp",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Cobra",image:"cobra.webp",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Ponniyin Selvan",image:"ponniyan.webp",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Pichaikkaran",image:"pichai.webp",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Thimiru Pudichavan",image:"thimiru.jpg",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Kodiyil Oruvan",image:"kodiyil.jpg",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Salim",image:"salim.webp",category:"tamil",link:"#",trending:false,isNew:false},
{name:"Avengers Doomsday",image:"avengers-doomsday-poster-featuring-everyone-my-biggest-v0-39utp2oos39g1.webp",category:"english",link:"https://www.hotstar.com",trending:true,isNew:true},
{name:"Avatar 3",image:"avatar-3-fire-and-ash-movie-poster.webp",category:"english",link:"https://www.netflix.com",trending:true,isNew:false},
{name:"Cold Storage",image:"MV5BOWFlZmZiNWMtY2U4Mi00ZGY1LTgzZTItMTkxZjczNjAyNGI0XkEyXkFqcGc@._V1_.jpg",category:"english",link:"https://www.amazonprimevideo.com",trending:false,isNew:true},
{name:"Spider-Man: Brand New Day",image:"images (1).jpg",category:"english",link:"https://www.netflix.com",trending:true,isNew:true},
{name:"The Housemaid",image:"91GxiV5RwdL._AC_UF1000,1000_QL80_.jpg",category:"english",link:"https://www.amazonprimevideo.com",trending:false,isNew:false},
{name:"Primate",image:"images (2).jpg",category:"english",link:"https://www.hotstar.com",trending:false,isNew:false},
{name:"Mercy",image:"MV5BM2UzYmIyZTAtNmZlZi00MGMxLTk4ZDQtNDZjNDVhNzM1NzRmXkEyXkFqcGc@._V1_.jpg",category:"english",link:"https://www.netflix.com",trending:false,isNew:false}
];

const rows=[
{title:"🔥 Trending Now",filter:m=>m.trending},
{title:"🎬 Tamil Movies",filter:m=>m.category==="tamil"},
{title:"🌍 English Movies",filter:m=>m.category==="english"}
];

let activeFilter='all';

const themeToggle=document.getElementById('themeToggle');
let isDark=localStorage.getItem('theme')!=='light';

function applyTheme(){
document.body.classList.toggle('light-mode',!isDark);
if(themeToggle)themeToggle.textContent=isDark?'☀️':'🌙';
}
applyTheme();

if(themeToggle){
themeToggle.addEventListener('click',()=>{
isDark=!isDark;
localStorage.setItem('theme',isDark?'dark':'light');
applyTheme();
});
}

let watchLater=JSON.parse(localStorage.getItem('watchLater')||'[]');

function toggleWatchLater(e,name){
e.preventDefault();
e.stopPropagation();
const btn=e.currentTarget;
if(watchLater.includes(name)){
watchLater=watchLater.filter(m=>m!==name);
btn.innerHTML='🕐';
btn.classList.remove('wl-active');
showToast(`Removed "${name}" from Watch Later`);
}else{
watchLater.push(name);
btn.innerHTML='✅';
btn.classList.add('wl-active');
showToast(`Added "${name}" to Watch Later`);
}
localStorage.setItem('watchLater',JSON.stringify(watchLater));
updateWLCount();
}

function updateWLCount(){
const badge=document.getElementById('wlCount');
if(badge){
badge.textContent=watchLater.length;
badge.style.display=watchLater.length>0?'inline-flex':'none';
}
}

const wlBtn=document.getElementById('watchLaterBtn');
const wlPanel=document.getElementById('wlPanel');
const wlClose=document.getElementById('wlClose');
if(wlBtn)wlBtn.addEventListener('click',()=>{renderWLPanel();wlPanel.classList.add('open');});
if(wlClose)wlClose.addEventListener('click',()=>wlPanel.classList.remove('open'));

function renderWLPanel(){
const list=document.getElementById('wlList');
if(!list)return;
if(watchLater.length===0){
list.innerHTML='<p class="wl-empty">No movies saved yet.<br>Tap 🕐 on any card to add.</p>';
return;
}
list.innerHTML=watchLater.map(name=>{
const m=movies.find(x=>x.name===name);
if(!m)return'';
return `<div class="wl-item">
<img src="${m.image}" alt="${m.name}">
<span>${m.name}</span>
<button onclick="removeWL('${name.replace(/'/g,"\\'")}')" title="Remove">✕</button>
</div>`;
}).join('');
}

function removeWL(name){
watchLater=watchLater.filter(m=>m!==name);
localStorage.setItem('watchLater',JSON.stringify(watchLater));
updateWLCount();
renderWLPanel();
renderRows();
}

function showToast(msg){
let toast=document.getElementById('movieToast');
if(!toast){
toast=document.createElement('div');
toast.id='movieToast';
document.body.appendChild(toast);
}
toast.textContent=msg;
toast.classList.add('toast-show');
clearTimeout(toast._timer);
toast._timer=setTimeout(()=>toast.classList.remove('toast-show'),2800);
}

function openTrailer(name){
const modal=document.getElementById('trailerModal');
const title=document.getElementById('trailerTitle');
const iframe=document.getElementById('trailerFrame');
if(!modal)return;
title.textContent='🎬 '+name+' — Trailer';
iframe.src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
modal.classList.add('open');
document.body.style.overflow='hidden';
}

function closeTrailer(){
const modal=document.getElementById('trailerModal');
const iframe=document.getElementById('trailerFrame');
if(!modal)return;
iframe.src='';
modal.classList.remove('open');
document.body.style.overflow='';
}

document.addEventListener('keydown',e=>{
if(e.key==='Escape'){
closeTrailer();
if(wlPanel)wlPanel.classList.remove('open');
}
});

const menuToggle=document.getElementById('menuToggle');
const navLinks=document.querySelector('.nav-links');
if(menuToggle)menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));

document.querySelectorAll('.filter-pill').forEach(pill=>{
pill.addEventListener('click',()=>{
document.querySelectorAll('.filter-pill').forEach(p=>p.classList.remove('active'));
pill.classList.add('active');
activeFilter=pill.getAttribute('data-filter');
renderRows();
});
});

function renderRows(){
const container=document.getElementById('movieRows');
container.innerHTML='';
rows.forEach((row,rowIdx)=>{
let filtered=movies.filter(row.filter);
if(activeFilter!=='all')filtered=filtered.filter(m=>m.category===activeFilter);
if(filtered.length===0)return;
const section=document.createElement('section');
section.className='movie-row';
const rowId=`row-${rowIdx}`;
section.innerHTML=`
<div class="row-header">
<h2 class="row-title">${row.title}</h2>
</div>
<div class="row-scroll-wrapper">
<button class="scroll-btn prev" onclick="scrollRow('${rowId}',-1)">&#8249;</button>
<div class="row-scroll" id="${rowId}"></div>
<button class="scroll-btn next" onclick="scrollRow('${rowId}',1)">&#8250;</button>
</div>
`;
container.appendChild(section);
const scrollDiv=section.querySelector('.row-scroll');
filtered.forEach(movie=>scrollDiv.appendChild(createCard(movie)));
const obs=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('visible');
obs.unobserve(entry.target);
}
});
},{threshold:0.1});
obs.observe(section);
});
}

function createCard(movie){
const card=document.createElement('div');
card.className='movie-card';
const isWL=watchLater.includes(movie.name);
let badge='';
if(movie.trending)badge=`<div class="card-badge">🔥 Hot</div>`;
if(movie.isNew)badge=`<div class="card-badge new">New</div>`;
card.innerHTML=`
${badge}
<a href="${movie.link}" target="_blank" rel="noopener noreferrer" class="card-img-link">
<img src="${movie.image}" alt="${movie.name}" loading="lazy">
<div class="card-play-overlay">▶</div>
</a>
<div class="card-overlay">
<p class="card-title">${movie.name}</p>
<button class="trailer-btn" onclick="openTrailer('${movie.name.replace(/'/g,"\\'")}')" title="Watch Trailer">🎬 Trailer</button>
</div>
<button class="wl-btn ${isWL?'wl-active':''}" onclick="toggleWatchLater(event,'${movie.name.replace(/'/g,"\\'")}')" title="${isWL?'In Watch Later':'Add to Watch Later'}">${isWL?'✅':'🕐'}</button>
`;
return card;
}

function scrollRow(rowId,direction){
const el=document.getElementById(rowId);
if(el)el.scrollBy({left:direction*600,behavior:'smooth'});
}

window.onload=()=>{
renderRows();
updateWLCount();
};

console.log('🎬 RMDMovies — Movies Page Loaded');
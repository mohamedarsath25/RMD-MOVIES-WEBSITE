const movies=[
{name:"Jana Nayagan",image:"jana--6c8caf60-dbdd-11f0-a680-332b345d0f23.jpg",hero:"Thalapathy Vijay",year:"2026",production:"KVN",category:"tamil",ott:"https://www.netflix.com",ottName:"Netflix",rating:4.8},
{name:"Master",image:"master.jpg",hero:"Thalapathy Vijay",year:"2021",production:"XB Film Creators",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.5},
{name:"Mersal",image:"mersal.jpg",hero:"Thalapathy Vijay",year:"2017",production:"Thenandal Studio",category:"tamil",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:4.6},
{name:"Bigil",image:"bigil.jpg",hero:"Thalapathy Vijay",year:"2019",production:"AGS Entertainment",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.3},
{name:"Varisu",image:"vaarisu.jpg",hero:"Thalapathy Vijay",year:"2023",production:"PVP Cinema",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:3.9},
{name:"Beast",image:"beast.jpg",hero:"Thalapathy Vijay",year:"2022",production:"Sun Pictures",category:"tamil",ott:"https://www.netflix.com",ottName:"Netflix",rating:3.7},
{name:"Puli",image:"puli.jpg",hero:"Thalapathy Vijay",year:"2015",production:"SKT Studios",category:"tamil",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:3.5},
{name:"Kathi",image:"kathi.jpg",hero:"Thalapathy Vijay",year:"2014",production:"AGS Entertainment",category:"tamil",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:4.4},
{name:"Mankatha",image:"mankatha.png",hero:"Ajith Kumar",year:"2011",production:"Cloud Nine Movies",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.2},
{name:"Viswasam",image:"viswasam.png",hero:"Ajith Kumar",year:"2019",production:"Sathya Jyothi Films",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.7},
{name:"Vedalam",image:"vedalam.png",hero:"Ajith Kumar",year:"2015",production:"Sri Sai Raam Creations",category:"tamil",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:4.3},
{name:"Thunivu",image:"thunivu.png",hero:"Ajith Kumar",year:"2023",production:"Zee Studios",category:"tamil",ott:"https://www.zee5.com",ottName:"ZEE5",rating:3.8},
{name:"Jailer",image:"jailer.png",hero:"Rajinikanth",year:"2023",production:"Sun Pictures",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.5},
{name:"Kabali",image:"kabali.jpg",hero:"Rajinikanth",year:"2016",production:"V Creations",category:"tamil",ott:"https://www.netflix.com",ottName:"Netflix",rating:3.9},
{name:"Enthiran",image:"enthiran.png",hero:"Rajinikanth",year:"2010",production:"Sun Pictures",category:"tamil",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:4.8},
{name:"Petta",image:"petta.webp",hero:"Rajinikanth",year:"2019",production:"Sun Pictures",category:"tamil",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:4.2},
{name:"Vikram",image:"vikram.png",hero:"Kamal Haasan",year:"2022",production:"Raaj Kamal Films",category:"tamil",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:4.9},
{name:"Indian",image:"indian.png",hero:"Kamal Haasan",year:"1996",production:"Sri Surya Movies",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.6},
{name:"Dasavatharam",image:"Dasavatharam.png",hero:"Kamal Haasan",year:"2008",production:"Oscar Films",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.0},
{name:"Viswaroopam",image:"viswaroopam.png",hero:"Kamal Haasan",year:"2013",production:"Raaj Kamal Films",category:"tamil",ott:"https://www.netflix.com",ottName:"Netflix",rating:4.3},
{name:"Anniyan",image:"anniyan.webp",hero:"Vikram",year:"2005",production:"Oscar Films",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.7},
{name:"I",image:"I.webp",hero:"Vikram",year:"2015",production:"Aascar Films",category:"tamil",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:4.1},
{name:"Cobra",image:"cobra.webp",hero:"Vikram",year:"2022",production:"Viacom18",category:"tamil",ott:"https://www.jiocinema.com",ottName:"JioCinema",rating:3.6},
{name:"Ponniyin Selvan",image:"ponniyan.webp",hero:"Vikram",year:"2022",production:"Madras Talkies",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.8},
{name:"Pichaikkaran",image:"pichai.webp",hero:"Vijay Antony",year:"2016",production:"Vijay Antony Film Corporation",category:"tamil",ott:"https://www.youtube.com/results?search_query=pichaikkaran",ottName:"YouTube",rating:4.2},
{name:"Thimiru Pudichavan",image:"thimiru.jpg",hero:"Vijay Antony",year:"2018",production:"Vijay Antony Film Corporation",category:"tamil",ott:"https://www.youtube.com/results?search_query=thimiru+pudichavan",ottName:"YouTube",rating:4.0},
{name:"Kodiyil Oruvan",image:"kodiyil.jpg",hero:"Vijay Antony",year:"2021",production:"Vijay Antony Film Corporation",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:3.9},
{name:"Salim",image:"salim.webp",hero:"Vijay Antony",year:"2024",production:"Vijay Antony Film Corporation",category:"tamil",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.1},
{name:"Parasakthi",image:"images.jpg",hero:"Sivakarthikeyan",year:"2026",production:"Seven Screen Studio",category:"tamil",ott:"https://www.netflix.com",ottName:"Netflix",rating:4.2},
{name:"Thalaivar Thambi",image:"Thalaivar-Thambi-Thalaimaiyil-12145180-eeb8-11f0-af41-ad503c0c7315.jpg",hero:"Rajinikanth",year:"2026",production:"Sun Pictures",category:"tamil",ott:null,ottName:"Coming Soon",rating:0},
{name:"Sirai",image:"download.jpg",hero:"Unknown",year:"2026",production:"Unknown",category:"tamil",ott:null,ottName:"Coming Soon",rating:0},
{name:"Avengers Doomsday",image:"avengers-doomsday-poster-featuring-everyone-my-biggest-v0-39utp2oos39g1.webp",hero:"Robert Downey Jr.",year:"2026",production:"Marvel Studios",category:"english",ott:null,ottName:"Coming Soon",rating:0},
{name:"Avatar 3",image:"avatar-3-fire-and-ash-movie-poster.webp",hero:"Sam Worthington",year:"2025",production:"20th Century Studios",category:"english",ott:"https://www.hotstar.com",ottName:"Hotstar",rating:4.4},
{name:"Cold Storage",image:"MV5BOWFlZmZiNWMtY2U4Mi00ZGY1LTgzZTItMTkxZjczNjAyNGI0XkEyXkFqcGc@._V1_.jpg",hero:"Unknown",year:"2026",production:"Unknown",category:"english",ott:null,ottName:"Coming Soon",rating:0},
{name:"Spider-Man: Brand New Day",image:"images (1).jpg",hero:"Tom Holland",year:"2026",production:"Marvel Studios",category:"english",ott:null,ottName:"Coming Soon",rating:0},
{name:"The Housemaid",image:"91GxiV5RwdL._AC_UF1000,1000_QL80_.jpg",hero:"Sydney Sweeney",year:"2026",production:"Amazon Studios",category:"english",ott:"https://www.amazon.com/primevideo",ottName:"Prime Video",rating:4.0},
{name:"Primate",image:"images (2).jpg",hero:"Unknown",year:"2026",production:"Unknown",category:"english",ott:null,ottName:"Coming Soon",rating:0},
{name:"Mercy",image:"MV5BM2UzYmIyZTAtNmZlZi00MGMxLTk4ZDQtNDZjNDVhNzM1NzRmXkEyXkFqcGc@._V1_.jpg",hero:"Unknown",year:"2026",production:"Unknown",category:"english",ott:null,ottName:"Coming Soon",rating:0}
];

const ottColors={
"Netflix":{bg:"#E50914",color:"#fff"},
"Prime Video":{bg:"#00A8E0",color:"#fff"},
"Hotstar":{bg:"#1F80E0",color:"#fff"},
"ZEE5":{bg:"#8B2FC9",color:"#fff"},
"JioCinema":{bg:"#0A3D8F",color:"#fff"},
"YouTube":{bg:"#FF0000",color:"#fff"},
"Coming Soon":{bg:"rgba(255,255,255,0.12)",color:"#a0b4be"}
};

let currentCategory='all';
let currentQuery='';
let currentSort='default';

const searchInput=document.getElementById('searchInput');
const resetBtn=document.getElementById('resetBtn');
const movieContainer=document.getElementById('movieContainer');
const emptyState=document.getElementById('emptyState');
const searchMeta=document.getElementById('searchMeta');
const resultsLabel=document.getElementById('resultsLabel');
const resultCount=document.getElementById('resultCount');

const menuToggle=document.getElementById('menuToggle');
const navLinks=document.querySelector('.nav-links');
if(menuToggle)menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));

document.querySelectorAll('.filter-pill').forEach(pill=>{
pill.addEventListener('click',()=>{
document.querySelectorAll('.filter-pill').forEach(p=>p.classList.remove('active'));
pill.classList.add('active');
currentCategory=pill.getAttribute('data-cat');
runFilter();
});
});

const sortSelect=document.getElementById('sortSelect');
if(sortSelect){
sortSelect.addEventListener('change',()=>{
currentSort=sortSelect.value;
runFilter();
});
}

searchInput.addEventListener('input',()=>{
currentQuery=searchInput.value.trim().toLowerCase();
runFilter();
});

searchInput.addEventListener('keydown',e=>{
if(e.key==='Escape')resetSearch();
if(e.key==='Enter'&&currentQuery)saveRecentSearch(searchInput.value.trim());
});

searchInput.addEventListener('blur',()=>{
if(currentQuery)saveRecentSearch(searchInput.value.trim());
});

resetBtn.addEventListener('click',resetSearch);

function resetSearch(){
searchInput.value='';
currentQuery='';
if(sortSelect){sortSelect.value='default';currentSort='default';}
runFilter();
searchInput.focus();
}

function saveRecentSearch(query){
if(!query)return;
let recent=JSON.parse(localStorage.getItem('recentSearches')||'[]');
recent=[query,...recent.filter(r=>r.toLowerCase()!==query.toLowerCase())].slice(0,5);
localStorage.setItem('recentSearches',JSON.stringify(recent));
renderRecentSearches();
}

function renderRecentSearches(){
const container=document.getElementById('recentSearches');
if(!container)return;
const recent=JSON.parse(localStorage.getItem('recentSearches')||'[]');
if(recent.length===0){container.innerHTML='';return;}
container.innerHTML=`<span class="recent-label">🕐 Recent:</span>`+recent.map(r=>`<button class="recent-chip" onclick="applyRecent('${r}')">${r}</button>`).join('')+`<button class="recent-clear" onclick="clearRecent()">Clear</button>`;
}

function applyRecent(query){
searchInput.value=query;
currentQuery=query.toLowerCase();
runFilter();
}

function clearRecent(){
localStorage.removeItem('recentSearches');
renderRecentSearches();
}

function getStars(rating){
if(!rating)return'';
const full=Math.floor(rating);
const half=(rating%1)>=0.5?1:0;
const empty=5-full-half;
return'★'.repeat(full)+(half?'⯨':'')+'☆'.repeat(empty);
}

function runFilter(){
let filtered=movies.filter(movie=>{
const q=currentQuery;
const matchesQuery=!q||movie.name.toLowerCase().includes(q)||movie.hero.toLowerCase().includes(q)||movie.year.includes(q);
const matchesCat=currentCategory==='all'||movie.category===currentCategory;
return matchesQuery&&matchesCat;
});
if(currentSort==='name-asc')filtered.sort((a,b)=>a.name.localeCompare(b.name));
else if(currentSort==='name-desc')filtered.sort((a,b)=>b.name.localeCompare(a.name));
else if(currentSort==='year-new')filtered.sort((a,b)=>b.year-a.year);
else if(currentSort==='year-old')filtered.sort((a,b)=>a.year-b.year);
else if(currentSort==='rating')filtered.sort((a,b)=>b.rating-a.rating);
displayMovies(filtered);
updateMeta(filtered.length);
}

function displayMovies(arr){
movieContainer.innerHTML='';
if(arr.length===0){
movieContainer.style.display='none';
emptyState.style.display='block';
return;
}
movieContainer.style.display='grid';
emptyState.style.display='none';
arr.forEach((movie,i)=>{
const card=document.createElement('div');
card.className='movie-card';
card.style.animationDelay=`${i*0.04}s`;
const ottStyle=ottColors[movie.ottName]||ottColors["Coming Soon"];
const isClickable=movie.ott!==null;
const imgWrapper=isClickable?`<a href="${movie.ott}" target="_blank" rel="noopener noreferrer" class="poster-link" title="Watch on ${movie.ottName}">`:`<div class="poster-link no-link">`;
const imgWrapperClose=isClickable?`</a>`:`</div>`;
const ratingHtml=movie.rating>0?`<p class="movie-rating"><span class="stars">${getStars(movie.rating)}</span> <span class="rating-num">${movie.rating}/5</span></p>`:`<p class="movie-rating cs-label">🔜 Coming Soon</p>`;
card.innerHTML=`
${imgWrapper}
<img src="${movie.image}" alt="${movie.name}" loading="lazy">
<div class="ott-overlay">
<span class="ott-badge" style="background:${ottStyle.bg};color:${ottStyle.color};">
${isClickable?'▶ ':''}${movie.ottName}
</span>
</div>
${imgWrapperClose}
<div class="movie-details">
<p class="movie-title">${movie.name}</p>
${ratingHtml}
<p><strong>Hero:</strong> ${movie.hero}</p>
<p><strong>Year:</strong> ${movie.year}</p>
<p><strong>Production:</strong> ${movie.production}</p>
</div>
`;
movieContainer.appendChild(card);
});
}

function updateMeta(count){
resultCount.textContent=`${count} result${count!==1?'s':''}`;
if(currentQuery){
resultsLabel.textContent=`Results for "${currentQuery}"`;
searchMeta.textContent=`Showing ${count} movie${count!==1?'s':''} matching your search`;
}else{
const catLabels={all:'All Movies',tamil:'Tamil Movies',english:'English Movies'};
resultsLabel.textContent=catLabels[currentCategory];
searchMeta.textContent='';
}
}

renderRecentSearches();
runFilter();

console.log('🔍 RMDMovies Search — Loaded');
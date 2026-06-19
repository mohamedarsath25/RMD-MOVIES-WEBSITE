const actors=[
{id:'vijay',name:'Vijay',img:'vijay image.jpg',displayName:'Vijay',movies:8},
{id:'ajith',name:'Ajith Kumar',img:'ajith image.jpg',displayName:'Ajith',movies:4},
{id:'rajinikanth',name:'Rajinikanth',img:'rajinikanth image.jpg',displayName:'Rajini',movies:4},
{id:'kamal',name:'Kamal Haasan',img:'kamal hasan.jpg',displayName:'Kamal',movies:4},
{id:'suriya',name:'Suriya',img:'suriya image.jpg',displayName:'Suriya',movies:4},
{id:'dhanush',name:'Dhanush',img:'dhanush image.jpg',displayName:'Dhanush',movies:4},
{id:'str',name:'STR',img:'simbu image.jpg',displayName:'STR',movies:4},
{id:'sivakarthikeyan',name:'Sivakarthikeyan',img:'sivakarthikeyan.jpg',displayName:'SK',movies:4},
{id:'vijayantony',name:'Vijay Antony',img:'Vijay-Antony image.jpg',displayName:'V. Antony',movies:4},
{id:'vikram',name:'Chiyaan Vikram',img:'vikramactor.jpg',displayName:'Vikram',movies:4}
];

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

const menuToggle=document.getElementById('menuToggle');
const navLinks=document.querySelector('.nav-links');
if(menuToggle)menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));

const actorNav=document.getElementById('actorNav');
actors.forEach(actor=>{
const link=document.createElement('a');
link.href=`#${actor.id}`;
link.className='actor-nav-item';
link.setAttribute('data-id',actor.id);
link.innerHTML=`
<img src="${actor.img}" alt="${actor.name}" class="actor-nav-photo">
<span class="actor-nav-name">${actor.displayName}</span>
`;
actorNav.appendChild(link);
});

const actorCards=document.getElementById('actorCards');
actors.forEach((actor,i)=>{
const card=document.createElement('a');
card.href=`#${actor.id}`;
card.className='actor-feature-card';
card.innerHTML=`
<div class="actor-feature-num">0${i+1}</div>
<div class="actor-feature-name">${actor.name}</div>
<div class="actor-feature-meta">
<span class="actor-feature-badge">Tamil</span>
<span class="actor-feature-count">${actor.movies} Movies</span>
</div>
`;
actorCards.appendChild(card);
});

const sections=document.querySelectorAll('.gallery-section');
const sectionObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting)entry.target.classList.add('visible');
});
},{threshold:0.08});
sections.forEach(s=>sectionObserver.observe(s));

const navItems=document.querySelectorAll('.actor-nav-item');
const activeObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const id=entry.target.getAttribute('id');
navItems.forEach(item=>{
item.classList.toggle('active-nav',item.getAttribute('data-id')===id);
});
}
});
},{threshold:0.4,rootMargin:'-100px 0px -60% 0px'});
sections.forEach(s=>activeObserver.observe(s));

function openLightbox(src,caption){
const lb=document.getElementById('lightbox');
const img=document.getElementById('lightboxImg');
const cap=document.getElementById('lightboxCaption');
img.src=src;
img.alt=caption;
cap.textContent=caption;
lb.classList.add('open');
document.body.style.overflow='hidden';
}

function closeLightbox(){
const lb=document.getElementById('lightbox');
lb.classList.remove('open');
document.body.style.overflow='';
setTimeout(()=>{
document.getElementById('lightboxImg').src='';
},300);
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

console.log('🎭 RMDMovies Gallery — Loaded');
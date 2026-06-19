const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');

function resizeCanvas(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize',resizeCanvas);

const PARTICLE_COUNT=60;
const particles=[];

for(let i=0;i<PARTICLE_COUNT;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5+0.3,
dx:(Math.random()-0.5)*0.4,
dy:(Math.random()-0.5)*0.4,
alpha:Math.random()*0.5+0.1
});
}

function drawParticles(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle=`rgba(0,255,213,${p.alpha})`;
ctx.fill();
p.x+=p.dx;
p.y+=p.dy;
if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;
});
requestAnimationFrame(drawParticles);
}
drawParticles();

const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
navbar.classList.toggle('scrolled',window.scrollY>50);
backToTopBtn.classList.toggle('show',window.scrollY>400);
});

const menuToggle=document.getElementById('menuToggle');
const navLinks=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>{
navLinks.classList.toggle('open');
});

const themeToggle=document.getElementById('themeToggle');
let isDark=true;
themeToggle.addEventListener('click',()=>{
isDark=!isDark;
document.body.classList.toggle('light-mode',!isDark);
themeToggle.textContent=isDark?'☀️':'🌙';
localStorage.setItem('theme',isDark?'dark':'light');
});

if(localStorage.getItem('theme')==='light'){
isDark=false;
document.body.classList.add('light-mode');
themeToggle.textContent='🌙';
}

function animateCounter(el,target,suffix=''){
let start=0;
const duration=1800;
const step=(timestamp)=>{
if(!start)start=timestamp;
const progress=Math.min((timestamp-start)/duration,1);
const ease=1-Math.pow(1-progress,3);
el.textContent=Math.floor(ease*target)+suffix;
if(progress<1)requestAnimationFrame(step);
};
requestAnimationFrame(step);
}

const statsObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const nums=entry.target.querySelectorAll('.stat-num');
const targets=[50,10,4];
const suffixes=['+','+',''];
nums.forEach((el,i)=>animateCounter(el,targets[i],suffixes[i]));
statsObserver.unobserve(entry.target);
}
});
},{threshold:0.5});

const heroStats=document.querySelector('.hero-stats');
if(heroStats)statsObserver.observe(heroStats);

const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{
entries.forEach((entry,index)=>{
if(entry.isIntersecting){
entry.target.style.transitionDelay=`${index*0.05}s`;
entry.target.classList.add('visible');
observer.unobserve(entry.target);
}
});
},{threshold:0.12});
reveals.forEach(el=>observer.observe(el));

const cardObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const cards=entry.target.querySelectorAll('.movie-card');
cards.forEach((card,i)=>{
card.style.opacity='0';
card.style.transform='translateY(30px)';
setTimeout(()=>{
card.style.transition='opacity 0.5s ease, transform 0.5s ease';
card.style.opacity='1';
card.style.transform='translateY(0)';
},i*100);
});
cardObserver.unobserve(entry.target);
}
});
},{threshold:0.1});
document.querySelectorAll('.movie-grid').forEach(grid=>cardObserver.observe(grid));

function likeMovie(event){
event.preventDefault();
event.stopPropagation();
const btn=event.currentTarget;
const isLiked=btn.innerHTML==='❤️';
btn.innerHTML=isLiked?'🤍':'❤️';
btn.classList.toggle('liked',!isLiked);
btn.style.transform='scale(1.4)';
setTimeout(()=>{btn.style.transform='';},200);
const card=btn.closest('.movie-card');
const title=card.querySelector('.card-title')?.textContent;
if(title){
let liked=JSON.parse(localStorage.getItem('likedMovies')||'[]');
if(isLiked){
liked=liked.filter(m=>m!==title);
}else{
liked.push(title);
}
localStorage.setItem('likedMovies',JSON.stringify(liked));
}
}

function restoreLikes(){
const liked=JSON.parse(localStorage.getItem('likedMovies')||'[]');
document.querySelectorAll('.movie-card').forEach(card=>{
const title=card.querySelector('.card-title')?.textContent;
const btn=card.querySelector('.like-btn');
if(title&&liked.includes(title)&&btn){
btn.innerHTML='❤️';
btn.classList.add('liked');
}
});
}
restoreLikes();

function subscribeNewsletter(){
const input=document.getElementById('newsletterEmail');
const email=input.value.trim();
const btn=input.nextElementSibling;
if(email&&email.includes('@')&&email.includes('.')){
let subs=JSON.parse(localStorage.getItem('subscribers')||'[]');
if(subs.includes(email)){
btn.textContent='⚠️ Already subscribed!';
btn.style.background='#f0a500';
}else{
subs.push(email);
localStorage.setItem('subscribers',JSON.stringify(subs));
btn.textContent='✅ Subscribed!';
btn.style.background='#00cc88';
}
input.value='';
input.placeholder='Thank you for subscribing!';
setTimeout(()=>{
btn.textContent='Subscribe';
btn.style.background='';
input.placeholder='Enter your email address...';
},3500);
}else{
input.style.borderColor='#ff6b6b';
input.style.boxShadow='0 0 15px rgba(255,60,60,0.3)';
input.placeholder='Please enter a valid email';
input.value='';
setTimeout(()=>{
input.style.borderColor='';
input.style.boxShadow='';
input.placeholder='Enter your email address...';
},2500);
}
}

const backToTopBtn=document.getElementById('backToTop');
if(backToTopBtn){
backToTopBtn.addEventListener('click',()=>{
window.scrollTo({top:0,behavior:'smooth'});
});
}

function typeWriter(el,text,speed=60){
el.textContent='';
let i=0;
const timer=setInterval(()=>{
el.textContent+=text[i];
i++;
if(i>=text.length)clearInterval(timer);
},speed);
}

const eyebrow=document.querySelector('.hero-eyebrow');
if(eyebrow){
setTimeout(()=>typeWriter(eyebrow,'🎬 Your Cinema Universe'),400);
}

console.log('🎬 RMDMovies Home — Loaded');
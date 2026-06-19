const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');

function resizeCanvas(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize',resizeCanvas);

const particles=[];
for(let i=0;i<55;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.4+0.3,
dx:(Math.random()-0.5)*0.35,
dy:(Math.random()-0.5)*0.35,
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

function switchTab(tab){
const loginForm=document.getElementById('loginForm');
const signupForm=document.getElementById('signupForm');
const tabLogin=document.getElementById('tabLogin');
const tabSignup=document.getElementById('tabSignup');
const indicator=document.getElementById('tabIndicator');
clearAllErrors();
if(tab==='login'){
loginForm.classList.add('active');
signupForm.classList.remove('active');
tabLogin.classList.add('active');
tabSignup.classList.remove('active');
indicator.classList.remove('right');
}else{
signupForm.classList.add('active');
loginForm.classList.remove('active');
tabSignup.classList.add('active');
tabLogin.classList.remove('active');
indicator.classList.add('right');
}
}

function togglePassword(inputId,btn){
const input=document.getElementById(inputId);
if(input.type==='password'){
input.type='text';
btn.textContent='🙈';
}else{
input.type='password';
btn.textContent='👁️';
}
}

function updateStrength(value){
const fill=document.getElementById('strengthFill');
const label=document.getElementById('strengthLabel');
if(!fill||!label)return;
let strength=0;
if(value.length>=8)strength++;
if(/[A-Z]/.test(value))strength++;
if(/[0-9]/.test(value))strength++;
if(/[^a-zA-Z0-9]/.test(value))strength++;
if(value.length>=12)strength++;
const levels=[
{pct:'0%',color:'transparent',text:''},
{pct:'25%',color:'#ff4444',text:'⚠️ Weak'},
{pct:'50%',color:'#f0a500',text:'🔶 Fair'},
{pct:'75%',color:'#00a8e0',text:'🔷 Good'},
{pct:'100%',color:'#00ffd5',text:'✅ Strong'},
{pct:'100%',color:'#00ffd5',text:'✅ Strong'}
];
const level=levels[strength]||levels[0];
fill.style.width=level.pct;
fill.style.background=level.color;
label.textContent=level.text;
label.style.color=level.color;
}

function setError(fieldId,msg){
const el=document.getElementById(fieldId);
if(el)el.textContent=msg;
}

function setInputState(inputId,state){
const el=document.getElementById(inputId);
if(!el)return;
el.classList.remove('error','success');
if(state)el.classList.add(state);
}

function clearAllErrors(){
const ids=['loginEmailErr','loginPassErr','signupEmailErr','signupPassErr','confirmPassErr','firstNameErr','termsErr'];
ids.forEach(id=>setError(id,''));
const inputs=['loginEmail','loginPassword','signupEmail','signupPassword','confirmPassword','firstName'];
inputs.forEach(id=>setInputState(id,null));
}

function handleLogin(event){
event.preventDefault();
clearAllErrors();
const email=document.getElementById('loginEmail').value.trim();
const password=document.getElementById('loginPassword').value;
let valid=true;
if(!email){
setError('loginEmailErr','Email is required.');
setInputState('loginEmail','error');
valid=false;
}else if(!isValidEmail(email)){
setError('loginEmailErr','Please enter a valid email address.');
setInputState('loginEmail','error');
valid=false;
}else{
setInputState('loginEmail','success');
}
if(!password){
setError('loginPassErr','Password is required.');
setInputState('loginPassword','error');
valid=false;
}else if(password.length<6){
setError('loginPassErr','Password must be at least 6 characters.');
setInputState('loginPassword','error');
valid=false;
}else{
setInputState('loginPassword','success');
}
if(!valid)return;
const users=JSON.parse(localStorage.getItem('rmdUsers')||'[]');
const user=users.find(u=>u.email===email&&u.password===password);
const btn=document.getElementById('loginBtn');
if(user){
showLoading(btn,true);
setTimeout(()=>{
showLoading(btn,false);
localStorage.setItem('rmdCurrentUser',JSON.stringify(user));
if(document.getElementById('rememberMe').checked){
localStorage.setItem('rmdRemembered',email);
}
showToast('✅',`Welcome back, ${user.firstName}!`,'success');
setTimeout(()=>{
window.location.href='home.html';
},1500);
},1400);
}else{
setError('loginPassErr','Invalid email or password. Please try again.');
setInputState('loginEmail','error');
setInputState('loginPassword','error');
shakeCard();
}
}

function handleSignup(event){
event.preventDefault();
clearAllErrors();
const firstName=document.getElementById('firstName').value.trim();
const lastName=document.getElementById('lastName').value.trim();
const email=document.getElementById('signupEmail').value.trim();
const password=document.getElementById('signupPassword').value;
const confirm=document.getElementById('confirmPassword').value;
const terms=document.getElementById('agreeTerms').checked;
let valid=true;
if(!firstName){
setError('firstNameErr','First name is required.');
setInputState('firstName','error');
valid=false;
}else{
setInputState('firstName','success');
}
if(!email){
setError('signupEmailErr','Email is required.');
setInputState('signupEmail','error');
valid=false;
}else if(!isValidEmail(email)){
setError('signupEmailErr','Please enter a valid email address.');
setInputState('signupEmail','error');
valid=false;
}else{
setInputState('signupEmail','success');
}
if(!password){
setError('signupPassErr','Password is required.');
setInputState('signupPassword','error');
valid=false;
}else if(password.length<8){
setError('signupPassErr','Password must be at least 8 characters.');
setInputState('signupPassword','error');
valid=false;
}else{
setInputState('signupPassword','success');
}
if(!confirm){
setError('confirmPassErr','Please confirm your password.');
setInputState('confirmPassword','error');
valid=false;
}else if(password!==confirm){
setError('confirmPassErr','Passwords do not match.');
setInputState('confirmPassword','error');
valid=false;
}else if(password===confirm&&password.length>=8){
setInputState('confirmPassword','success');
}
if(!terms){
setError('termsErr','You must agree to the Terms of Service.');
valid=false;
}
if(!valid)return;
const users=JSON.parse(localStorage.getItem('rmdUsers')||'[]');
if(users.find(u=>u.email===email)){
setError('signupEmailErr','This email is already registered.');
setInputState('signupEmail','error');
return;
}
const btn=document.getElementById('signupBtn');
showLoading(btn,true);
setTimeout(()=>{
showLoading(btn,false);
const newUser={firstName,lastName,email,password,joined:new Date().toISOString()};
users.push(newUser);
localStorage.setItem('rmdUsers',JSON.stringify(users));
localStorage.setItem('rmdCurrentUser',JSON.stringify(newUser));
showToast('🎬',`Welcome to RMD Movies, ${firstName}!`,'success');
setTimeout(()=>{
window.location.href='home.html';
},1600);
},1500);
}

function socialLogin(provider){
showToast('ℹ️',`${provider} login coming soon!`,'info');
}

function showForgot(){
document.getElementById('forgotOverlay').classList.add('show');
}

function closeForgot(){
document.getElementById('forgotOverlay').classList.remove('show');
}

function sendReset(){
const email=document.getElementById('forgotEmail').value.trim();
if(!email||!isValidEmail(email)){
showToast('⚠️','Please enter a valid email address.','error');
return;
}
closeForgot();
showToast('📧','Password reset link sent! Check your inbox.','success');
}

let toastTimer;
function showToast(icon,msg,type='info'){
const toast=document.getElementById('toast');
document.getElementById('toastIcon').textContent=icon;
document.getElementById('toastMsg').textContent=msg;
const colors={success:'rgba(0,204,136,0.15)',error:'rgba(255,107,107,0.15)',info:'rgba(0,255,213,0.1)'};
const borders={success:'rgba(0,204,136,0.4)',error:'rgba(255,107,107,0.4)',info:'rgba(0,255,213,0.25)'};
toast.style.background=colors[type]||colors.info;
toast.style.borderColor=borders[type]||borders.info;
toast.classList.add('show');
clearTimeout(toastTimer);
toastTimer=setTimeout(()=>toast.classList.remove('show'),3500);
}

function showLoading(btn,loading){
if(loading){
btn.classList.add('loading');
btn.disabled=true;
}else{
btn.classList.remove('loading');
btn.disabled=false;
}
}

function shakeCard(){
const card=document.querySelector('.auth-card');
card.style.animation='none';
card.offsetHeight;
card.style.animation='shake 0.4s ease';
setTimeout(()=>{card.style.animation='';},400);
}

const style=document.createElement('style');
style.textContent=`@keyframes shake{0%,100%{transform:translateX(0);}20%{transform:translateX(-8px);}40%{transform:translateX(8px);}60%{transform:translateX(-5px);}80%{transform:translateX(5px);}}`;
document.head.appendChild(style);

function isValidEmail(email){
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

(function init(){
const remembered=localStorage.getItem('rmdRemembered');
if(remembered){
const emailInput=document.getElementById('loginEmail');
const rememberCb=document.getElementById('rememberMe');
if(emailInput)emailInput.value=remembered;
if(rememberCb)rememberCb.checked=true;
}
})();

const signupEmailInput=document.getElementById('signupEmail');
if(signupEmailInput){
signupEmailInput.addEventListener('blur',()=>{
const val=signupEmailInput.value.trim();
if(val&&!isValidEmail(val)){
setError('signupEmailErr','Please enter a valid email address.');
setInputState('signupEmail','error');
}else if(val){
setError('signupEmailErr','');
setInputState('signupEmail','success');
}
});
}

const confirmInput=document.getElementById('confirmPassword');
if(confirmInput){
confirmInput.addEventListener('input',()=>{
const pass=document.getElementById('signupPassword').value;
if(confirmInput.value&&confirmInput.value!==pass){
setError('confirmPassErr','Passwords do not match.');
setInputState('confirmPassword','error');
}else if(confirmInput.value===pass&&pass.length>=8){
setError('confirmPassErr','');
setInputState('confirmPassword','success');
}
});
}

console.log('🎬 RMDMovies Auth — Loaded');
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

const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{
entries.forEach((entry,i)=>{
if(entry.isIntersecting){
entry.target.style.transitionDelay=`${i*0.06}s`;
entry.target.classList.add('visible');
observer.unobserve(entry.target);
}
});
},{threshold:0.1});
reveals.forEach(el=>observer.observe(el));

function showToast(message,type='success'){
const toast=document.getElementById('toast');
toast.textContent=message;
toast.className=`toast ${type==='error'?'error':''} show`;
setTimeout(()=>{toast.classList.remove('show');},3500);
}

const signoutBtn=document.getElementById('signoutBtn');
const userInfo=document.getElementById('userInfo');
const userAvatar=document.getElementById('userAvatar');
const userName=document.getElementById('userName');
const signoutModal=document.getElementById('signoutModal');
const modalCancel=document.getElementById('modalCancel');
const modalConfirm=document.getElementById('modalConfirm');
const modalUserName=document.getElementById('modalUserName');

function loadUserSession(){
const raw=localStorage.getItem('rmdCurrentUser');
signoutBtn.classList.add('visible');
if(!raw){
userInfo.style.display='none';
modalUserName.textContent='You will be redirected to the sign in page.';
return;
}
try{
const user=JSON.parse(raw);
const displayName=user.firstName||user.email||'User';
userAvatar.textContent=displayName.charAt(0).toUpperCase();
userName.textContent=displayName;
userInfo.classList.add('visible');
modalUserName.textContent=`You are signed in as ${displayName}.`;
}catch(e){
localStorage.removeItem('rmdCurrentUser');
userInfo.style.display='none';
modalUserName.textContent='You will be redirected to the sign in page.';
}
}

loadUserSession();

if(signoutBtn){
signoutBtn.addEventListener('click',()=>{
signoutModal.classList.add('show');
});
}

if(modalCancel){
modalCancel.addEventListener('click',()=>{
signoutModal.classList.remove('show');
});
}

if(signoutModal){
signoutModal.addEventListener('click',(e)=>{
if(e.target===signoutModal)signoutModal.classList.remove('show');
});
}

if(modalConfirm){
modalConfirm.addEventListener('click',()=>{
localStorage.removeItem('rmdCurrentUser');
modalConfirm.textContent='Signing out...';
modalConfirm.disabled=true;
setTimeout(()=>{
window.location.href='auth.html';
},800);
});
}

function setFieldError(fieldId,errorId,msg){
const field=document.getElementById(fieldId);
const err=document.getElementById(errorId);
if(msg){
field.classList.add('field-invalid');
field.classList.remove('field-valid');
err.textContent=msg;
}else{
field.classList.remove('field-invalid');
field.classList.add('field-valid');
err.textContent='';
}
}

document.getElementById('name').addEventListener('blur',function(){
if(!this.value.trim()){
setFieldError('name','nameError','⚠ Name is required');
}else if(this.value.trim().length<2){
setFieldError('name','nameError','⚠ Name must be at least 2 characters');
}else{
setFieldError('name','nameError','');
}
});

document.getElementById('name').addEventListener('input',function(){
if(this.value.trim().length>=2)setFieldError('name','nameError','');
});

document.getElementById('email').addEventListener('blur',function(){
const v=this.value.trim();
if(!v){
setFieldError('email','emailError','⚠ Email is required');
}else if(!v.includes('@')||!v.includes('.')){
setFieldError('email','emailError','⚠ Enter a valid email address');
}else{
setFieldError('email','emailError','');
}
});

document.getElementById('email').addEventListener('input',function(){
const v=this.value.trim();
if(v.includes('@')&&v.includes('.'))setFieldError('email','emailError','');
});

document.getElementById('message').addEventListener('blur',function(){
if(!this.value.trim()){
setFieldError('message','messageError','⚠ Message cannot be empty');
}else if(this.value.trim().length<10){
setFieldError('message','messageError','⚠ Message must be at least 10 characters');
}else{
setFieldError('message','messageError','');
}
});

document.getElementById('message').addEventListener('input',function(){
if(this.value.trim().length>=10)setFieldError('message','messageError','');
});

document.getElementById('feedbackForm').addEventListener('submit',function(e){
e.preventDefault();
const name=document.getElementById('name').value.trim();
const email=document.getElementById('email').value.trim();
const message=document.getElementById('message').value.trim();
let hasError=false;
if(!name||name.length<2){
setFieldError('name','nameError','⚠ Name must be at least 2 characters');
hasError=true;
}
if(!email||!email.includes('@')||!email.includes('.')){
setFieldError('email','emailError','⚠ Enter a valid email address');
hasError=true;
}
if(!message||message.length<10){
setFieldError('message','messageError','⚠ Message must be at least 10 characters');
hasError=true;
}
if(hasError){
showToast('⚠️ Please fix the errors above.','error');
return;
}
const btn=document.getElementById('submitBtn');
btn.textContent='Sending...';
btn.disabled=true;
setTimeout(()=>{
showToast('✅ Feedback sent! Thank you, '+name+'.');
this.reset();
['name','email','message'].forEach(id=>{
document.getElementById(id).classList.remove('field-valid','field-invalid');
});
btn.textContent='Send Message ✉️';
btn.disabled=false;
},1000);
});

document.getElementById('resetBtn').addEventListener('click',()=>{
setTimeout(()=>{
['name','email','message'].forEach(id=>{
document.getElementById(id).classList.remove('field-valid','field-invalid');
});
['nameError','emailError','messageError'].forEach(id=>{
document.getElementById(id).textContent='';
});
},10);
});

console.log('📋 RMDMovies About/Contact — Loaded');
document.documentElement.classList.add('js');
(function(){var els=document.querySelectorAll('.reveal');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(e){o.observe(e)})})();

(function(){var bar=document.getElementById('progress');
function p(){var d=document.documentElement,m=d.scrollHeight-innerHeight;bar.style.transform='scaleX('+(m>0?scrollY/m:0)+')'}
addEventListener('scroll',p,{passive:true});p();
var el=document.getElementById('typed'),w=['React.js','Next.js','JavaScript','Tailwind CSS','MongoDB'];
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=w[0]+', Next.js and more';return}
var i=0,j=0,del=false;
(function t(){var s=w[i];el.textContent=s.slice(0,j);
if(!del&&j<s.length){j++;return setTimeout(t,90)}
if(!del){del=true;return setTimeout(t,1400)}
if(j>0){j--;return setTimeout(t,45)}
del=false;i=(i+1)%w.length;setTimeout(t,300)})();
})();

// Mobile menu
(function(){var b=document.getElementById('menuBtn'),n=document.getElementById('mainnav');if(!b||!n)return;
function set(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o)}
b.addEventListener('click',function(){set(!n.classList.contains('open'))});
n.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
})();

// ---- Contact form (sends to your email through Web3Forms) ----
var WEB3FORMS_KEY='50056a23-6124-4f6e-b382-2782cd551540';
(function(){var f=document.getElementById('cform'),n=document.getElementById('fnote');if(!f)return;
var btn=f.querySelector('button[type="submit"]'),label=btn.textContent;
f.addEventListener('submit',function(e){e.preventDefault();
var ok=true;f.querySelectorAll('input[type="text"],input[type="email"],textarea').forEach(function(x){var v=x.checkValidity()&&x.value.trim();x.classList.toggle('bad',!v);if(!v)ok=false});
if(!ok){n.textContent='Please fill in your name, a valid email and a message.';return}
var d=new FormData(f),name=d.get('name').trim(),email=d.get('email').trim(),msg=d.get('message').trim();
btn.disabled=true;btn.textContent='Sending...';n.textContent='';
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
body:JSON.stringify({access_key:WEB3FORMS_KEY,subject:'Portfolio message from '+name,from_name:'Portfolio website',name:name,email:email,message:msg})})
.then(function(r){return r.json()})
.then(function(j){if(j.success){n.textContent='Thank you! Your message has been sent.';f.reset()}else{throw new Error(j.message||'fail')}})
.catch(function(){n.textContent='Could not send from here. Please email me directly at msnazminakter690@gmail.com.'})
.finally(function(){btn.disabled=false;btn.textContent=label})});
})();
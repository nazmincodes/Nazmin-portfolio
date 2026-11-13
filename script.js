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
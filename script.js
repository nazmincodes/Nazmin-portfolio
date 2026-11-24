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

// ---- Rich project details dialog ----
(function(){
    var dialog=document.getElementById('projectDialog');
    var title=document.getElementById('dialogTitle');
    var content=document.getElementById('dialogContent');
    var close=document.getElementById('dialogClose');
    if(!dialog||!title||!content||!close)return;

    var projects={
        pizzahub:{
            eyebrow:'MULTI-VENDOR E-COMMERCE PLATFORM',
            title:'PizzaHub',
            summary:'PizzaHub is a full-stack pizza ordering and business management platform that brings customers, local pizza vendors and administrators together in one place. Customers can discover pizzas and place orders, vendors can manage their menus and incoming orders, and administrators can oversee platform operations and vendor subscriptions.',
            stats:[
                {value:'03',label:'Access roles'},
                {value:'Free + Premium',label:'Vendor plans'},
                {value:'Stripe',label:'Subscription payments'}
            ],
            sections:[
                {
                    label:'CUSTOMER EXPERIENCE',
                    title:'Discover, order and manage',
                    points:[
                        'Browse available pizza items and explore menu categories.',
                        'Open individual pizza details before choosing what to order.',
                        'Place pizza orders and review order information from a personal customer dashboard.',
                        'Manage a customer profile and account information.'
                    ]
                },
                {
                    label:'VENDOR WORKSPACE',
                    title:'Tools for local pizza businesses',
                    points:[
                        'Access a dedicated vendor dashboard with vendor-specific information.',
                        'Add new pizza products, update existing items and manage the shop menu.',
                        'Review and manage incoming customer orders.',
                        'View the vendor’s current subscription plan and subscription details.'
                    ]
                },
                {
                    label:'ADMINISTRATION',
                    title:'Centralized platform management',
                    points:[
                        'Use a dedicated admin dashboard to manage platform users and vendors.',
                        'Monitor orders and overall platform activity.',
                        'Oversee vendor subscriptions, subscription status and payment history.',
                        'Review vendor plan information, including Free and Premium memberships.'
                    ]
                },
                {
                    label:'AUTHENTICATION & SECURITY',
                    title:'Role-aware account access',
                    points:[
                        'Support email-and-password sign-in as well as Google authentication.',
                        'Use role-based access control for customer, vendor and admin areas.',
                        'Maintain secure user sessions and keep dashboard access tied to user roles.'
                    ]
                },
                {
                    label:'SUBSCRIPTIONS & INTEGRATIONS',
                    title:'Premium plans and connected services',
                    points:[
                        'Offer Free and Premium subscription plans for vendors.',
                        'Integrate Stripe to process Premium subscription payments.',
                        'Keep subscription status, start and expiry information, and payment history available for management.',
                        'Use ImgBB for image hosting and Resend as the configured email service integration.'
                    ]
                }
            ],
            roles:['Customer','Vendor','Admin'],
            stack:['Next.js','React','TypeScript','Tailwind CSS','DaisyUI','Node.js','Express.js','MongoDB','Better Auth','Google OAuth','JWT','Stripe','ImgBB','Resend','Vercel'],
            client:'https://github.com/nazmincodes/PIZZA-GALLERY',
            server:'https://github.com/nazmincodes/PIZZA-GALLERY-server'
        },
        social:{
            eyebrow:'COMMUNITY-DRIVEN SOCIAL IMPACT PLATFORM',
            title:'Shomaj Setu',
            summary:'Shomaj Setu is a social development events platform designed to help people take part in community service. Members can discover upcoming initiatives, create events, join activities and keep track of their own contributions—from winter clothing and blanket drives to clean-up and tree-planting activities.',
            stats:[
                {value:'Create + Join',label:'Community events'},
                {value:'Email + Google',label:'Authentication'},
                {value:'Light + Dark',label:'Display themes'}
            ],
            sections:[
                {
                    label:'EVENT DISCOVERY',
                    title:'Find meaningful community activities',
                    points:[
                        'Explore upcoming community service events in one place.',
                        'Search events, filter by event type and sort the results.',
                        'Keep the upcoming list focused by excluding events whose dates have already passed.',
                        'Open an event details page to learn more before joining.'
                    ]
                },
                {
                    label:'EVENT PARTICIPATION',
                    title:'Join and keep track of activities',
                    points:[
                        'Join an event directly from its details page with a one-click action.',
                        'Save the event and participant relationship in MongoDB.',
                        'View joined events in a personal list arranged by event date.',
                        'Check join status and leave an event when plans change.'
                    ]
                },
                {
                    label:'EVENT ORGANIZER TOOLS',
                    title:'Create and manage your own events',
                    points:[
                        'Create community events with form validation.',
                        'Require event dates to be in the future when creating an event.',
                        'Update or delete events created by the signed-in user.',
                        'Keep event ownership enforced by the protected backend routes.'
                    ]
                },
                {
                    label:'ACCOUNT & USER EXPERIENCE',
                    title:'Personalized and accessible interface',
                    points:[
                        'Register and sign in with email/password or Google using Better Auth.',
                        'Apply password validation rules for uppercase, lowercase and a minimum of six characters.',
                        'Update profile information, including name and profile photo.',
                        'Switch between light and dark themes, with loading skeletons and responsive layouts for mobile, tablet and desktop.'
                    ]
                },
                {
                    label:'BACKEND & DATA SECURITY',
                    title:'Protected API and persistent data',
                    points:[
                        'Use an Express.js REST API connected to MongoDB for event and participation data.',
                        'Protect private endpoints with JWT verification through Better Auth’s JWKS endpoint.',
                        'Restrict event editing and deletion to the event owner.',
                        'Provide API operations for listing, searching, filtering, sorting, viewing, creating, updating and deleting events, plus joining and leaving events.'
                    ]
                }
            ],
            roles:['Community Member','Event Organizer'],
            stack:['Next.js App Router','React','Tailwind CSS','DaisyUI','Better Auth','MongoDB Adapter','Express.js','MongoDB','JWT','JWKS'],
            client:'https://github.com/nazmincodes/somaj-shetu-client',
            server:'https://github.com/nazmincodes/somaj-shetu-server'
        }
    };

    function escapeHTML(value){
        return String(value).replace(/[&<>"']/g,function(char){
            return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char];
        });
    }

    function render(project){
        title.textContent=project.title;
        var stats=project.stats.map(function(stat){
            return '<div class="dialog-stat"><strong>'+escapeHTML(stat.value)+'</strong><span>'+escapeHTML(stat.label)+'</span></div>';
        }).join('');
        var sections=project.sections.map(function(section,index){
            var points=section.points.map(function(point){return '<li>'+escapeHTML(point)+'</li>';}).join('');
            return '<section class="dialog-section">'+
                '<div class="dialog-section-heading"><span class="dialog-number">'+String(index+1).padStart(2,'0')+'</span>'+
                '<div><p class="dialog-label">'+escapeHTML(section.label)+'</p><h3>'+escapeHTML(section.title)+'</h3></div></div>'+
                '<ul>'+points+'</ul></section>';
        }).join('');
        var roles=project.roles.map(function(role){return '<li>'+escapeHTML(role)+'</li>';}).join('');
        var tags=project.stack.map(function(item){return '<li>'+escapeHTML(item)+'</li>';}).join('');

        content.innerHTML=
            '<div class="dialog-hero">'+
                '<p class="dialog-eyebrow">'+escapeHTML(project.eyebrow)+'</p>'+
                '<p class="dialog-lead">'+escapeHTML(project.summary)+'</p>'+
                '<div class="dialog-stats">'+stats+'</div>'+
            '</div>'+
            '<div class="dialog-sections">'+sections+'</div>'+
            '<section class="dialog-bottom-section"><div><p class="dialog-label">WHO IT SERVES</p><h3>User Roles</h3></div><ul class="dialog-role-tags">'+roles+'</ul></section>'+
            '<section class="dialog-bottom-section"><div><p class="dialog-label">BUILT WITH</p><h3>Technology Stack</h3></div><ul class="dialog-tags">'+tags+'</ul></section>'+
            '<div class="dialog-repositories"><div><p class="dialog-label">EXPLORE THE CODE</p><h3>Project Repositories</h3></div>'+
                '<div class="dialog-links">'+
                    '<a class="btn ghost" href="'+project.client+'" target="_blank" rel="noopener noreferrer">Frontend GitHub <span aria-hidden="true">↗</span></a>'+
                    '<a class="btn ghost" href="'+project.server+'" target="_blank" rel="noopener noreferrer">Backend GitHub <span aria-hidden="true">↗</span></a>'+
                '</div></div>';
        dialog.showModal();
        close.focus();
    }

    document.querySelectorAll('[data-project]').forEach(function(button){
        button.addEventListener('click',function(){
            var project=projects[button.getAttribute('data-project')];
            if(project)render(project);
        });
    });
    close.addEventListener('click',function(){dialog.close();});
    dialog.addEventListener('click',function(event){
        if(event.target===dialog)dialog.close();
    });
})();

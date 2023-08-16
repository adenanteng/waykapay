import{_ as je}from"./AppLayout.4e561a2d.js";import{m as ne,k as O,M as $,d as f,y as E,q as Oe,x as Me,s as Ne,i as xe,A as ee,K as be,F as Se,p as y,c as _e,w as x,o as te,a as l,t as Ee,b,g as De,u as w,j,e as Ie,h as Le}from"./app.ee3cb01f.js";import{_ as $e}from"./MobileMenu.93831ba9.js";import{_ as Be}from"./PrimaryButton.b41f9f09.js";import"./moment.9709ab41.js";import"./helper.6fc49847.js";import"./DarkmodeToggle.538f1f93.js";import"./label.8c6aff53.js";import"./focus-management.60952601.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const p={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},ye={itemsToShow:{default:p.itemsToShow,type:Number},itemsToScroll:{default:p.itemsToScroll,type:Number},wrapAround:{default:p.wrapAround,type:Boolean},throttle:{default:p.throttle,type:Number},snapAlign:{default:p.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:p.transition,type:Number},breakpoints:{default:p.breakpoints,type:Object},autoplay:{default:p.autoplay,type:Number},pauseAutoplayOnHover:{default:p.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:p.mouseDrag,type:Boolean},touchDrag:{default:p.touchDrag,type:Boolean},dir:{default:p.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:p.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ve({config:e,slidesCount:a}){const{snapAlign:r,wrapAround:i,itemsToShow:n=1}=e;if(i)return Math.max(a-1,0);let s;switch(r){case"start":s=a-n;break;case"end":s=a-1;break;case"center":case"center-odd":s=a-Math.ceil((n-.5)/2);break;case"center-even":s=a-Math.ceil(n/2);break;default:s=0;break}return Math.max(s,0)}function Pe({config:e,slidesCount:a}){const{wrapAround:r,snapAlign:i,itemsToShow:n=1}=e;let s=0;if(r||n>a)return s;switch(i){case"start":s=0;break;case"end":s=n-1;break;case"center":case"center-odd":s=Math.floor((n-1)/2);break;case"center-even":s=Math.floor((n-2)/2);break;default:s=0;break}return s}function re({val:e,max:a,min:r}){return a<r?e:Math.min(Math.max(e,r),a)}function Re({config:e,currentSlide:a,slidesCount:r}){const{snapAlign:i,wrapAround:n,itemsToShow:s=1}=e;let g=a;switch(i){case"center":case"center-odd":g-=(s-1)/2;break;case"center-even":g-=(s-2)/2;break;case"end":g-=s-1;break}return n?g:re({val:g,max:r-s,min:0})}function ke(e){return e?e.reduce((a,r)=>{var i;return r.type===Se?[...a,...ke(r.children)]:((i=r.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...a,r]:a},[]):[]}function ae({val:e,max:a,min:r=0}){return e>a?ae({val:e-(a+1),max:a,min:r}):e<r?ae({val:e+(a+1),max:a,min:r}):e}function Xe(e,a){let r;return a?function(...i){const n=this;r||(e.apply(n,i),r=!0,setTimeout(()=>r=!1,a))}:e}function Ye(e,a){let r;return function(...i){r&&clearTimeout(r),r=setTimeout(()=>{e(...i),r=null},a)}}function He(e="",a={}){return Object.entries(a).reduce((r,[i,n])=>r.replace(`{${i}}`,String(n)),e)}var Ue=ne({name:"ARIA",setup(){const e=O("config",$(Object.assign({},p))),a=O("currentSlide",f(0)),r=O("slidesCount",f(0));return()=>E("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},He(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:r.value}))}}),Fe=ne({name:"Carousel",props:ye,setup(e,{slots:a,emit:r,expose:i}){var n;const s=f(null),g=f([]),S=f(0),m=f(0),o=$(Object.assign({},p));let h=Object.assign({},p),k;const c=f((n=e.modelValue)!==null&&n!==void 0?n:0),Y=f(0),oe=f(0),M=f(0),D=f(0);let N,H;y("config",o),y("slidesCount",m),y("currentSlide",c),y("maxSlide",M),y("minSlide",D),y("slideWidth",S);function U(){k=Object.assign({},e.breakpoints),h=Object.assign(Object.assign(Object.assign({},h),e),{i18n:Object.assign(Object.assign({},h.i18n),e.i18n),breakpoints:void 0}),se(h)}function B(){if(!k||!Object.keys(k).length)return;const t=Object.keys(k).map(u=>Number(u)).sort((u,_)=>+_-+u);let d=Object.assign({},h);t.some(u=>{const _=window.matchMedia(`(min-width: ${u}px)`).matches;return _&&(d=Object.assign(Object.assign({},d),k[u])),_}),se(d)}function se(t){Object.entries(t).forEach(([d,u])=>o[d]=u)}const ie=Ye(()=>{B(),I()},16);function I(){if(!s.value)return;const t=s.value.getBoundingClientRect();S.value=t.width/o.itemsToShow}function F(){m.value<=0||(oe.value=Math.ceil((m.value-1)/2),M.value=Ve({config:o,slidesCount:m.value}),D.value=Pe({config:o,slidesCount:m.value}),o.wrapAround||(c.value=re({val:c.value,max:M.value,min:D.value})))}Oe(()=>{Me(()=>I()),setTimeout(()=>I(),1e3),B(),de(),window.addEventListener("resize",ie,{passive:!0}),r("init")}),Ne(()=>{H&&clearTimeout(H),N&&clearInterval(N),window.removeEventListener("resize",ie,{passive:!0})});let v=!1;const V={x:0,y:0},P={x:0,y:0},A=$({x:0,y:0}),R=f(!1),G=f(!1),Ae=()=>{R.value=!0},Te=()=>{R.value=!1};function le(t){["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(v=t.type==="touchstart",v||t.preventDefault(),!(!v&&t.button!==0||T.value)&&(V.x=v?t.touches[0].clientX:t.clientX,V.y=v?t.touches[0].clientY:t.clientY,document.addEventListener(v?"touchmove":"mousemove",ue,!0),document.addEventListener(v?"touchend":"mouseup",ce,!0)))}const ue=Xe(t=>{G.value=!0,P.x=v?t.touches[0].clientX:t.clientX,P.y=v?t.touches[0].clientY:t.clientY;const d=P.x-V.x,u=P.y-V.y;A.y=u,A.x=d},o.throttle);function ce(){const t=o.dir==="rtl"?-1:1,d=Math.sign(A.x)*.4,u=Math.round(A.x/S.value+d)*t;if(u&&!v){const _=K=>{K.stopPropagation(),window.removeEventListener("click",_,!0)};window.addEventListener("click",_,!0)}C(c.value-u),A.x=0,A.y=0,G.value=!1,document.removeEventListener(v?"touchmove":"mousemove",ue,!0),document.removeEventListener(v?"touchend":"mouseup",ce,!0)}function de(){!o.autoplay||o.autoplay<=0||(N=setInterval(()=>{o.pauseAutoplayOnHover&&R.value||X()},o.autoplay))}function pe(){N&&(clearInterval(N),N=null),de()}const T=f(!1);function C(t){const d=o.wrapAround?t:re({val:t,max:M.value,min:D.value});c.value===d||T.value||(r("slide-start",{slidingToIndex:t,currentSlideIndex:c.value,prevSlideIndex:Y.value,slidesCount:m.value}),T.value=!0,Y.value=c.value,c.value=d,H=setTimeout(()=>{if(o.wrapAround){const u=ae({val:d,max:M.value,min:0});u!==c.value&&(c.value=u,r("loop",{currentSlideIndex:c.value,slidingToIndex:t}))}r("update:modelValue",c.value),r("slide-end",{currentSlideIndex:c.value,prevSlideIndex:Y.value,slidesCount:m.value}),T.value=!1,pe()},o.transition))}function X(){C(c.value+o.itemsToScroll)}function W(){C(c.value-o.itemsToScroll)}const fe={slideTo:C,next:X,prev:W};y("nav",fe),y("isSliding",T);const me=xe(()=>Re({config:o,currentSlide:c.value,slidesCount:m.value}));y("slidesToScroll",me);const Ce=xe(()=>{const t=o.dir==="rtl"?-1:1,d=me.value*S.value*t;return{transform:`translateX(${A.x-d}px)`,transition:`${T.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${m.value*S.value}px`:"",width:"100%"}});function ge(){U(),B(),F(),I(),pe()}Object.keys(ye).forEach(t=>{["modelValue"].includes(t)||ee(()=>e[t],ge)}),ee(()=>e.modelValue,t=>{t!==c.value&&C(Number(t))}),ee(m,F),r("before-init"),U();const ve={config:o,slidesCount:m,slideWidth:S,next:X,prev:W,slideTo:C,currentSlide:c,maxSlide:M,minSlide:D,middleSlide:oe};i({updateBreakpointsConfigs:B,updateSlidesData:F,updateSlideWidth:I,initDefaultConfigs:U,restartCarousel:ge,slideTo:C,next:X,prev:W,nav:fe,data:ve});const z=a.default||a.slides,q=a.addons,he=$(ve);return()=>{const t=ke(z==null?void 0:z(he)),d=(q==null?void 0:q(he))||[];t.forEach((J,Q)=>J.props.index=Q);let u=t;if(o.wrapAround){const J=t.map((Z,L)=>be(Z,{index:-t.length+L,isClone:!0,key:`clone-before-${L}`})),Q=t.map((Z,L)=>be(Z,{index:t.length+L,isClone:!0,key:`clone-after-${L}`}));u=[...J,...t,...Q]}g.value=t,m.value=Math.max(t.length,1);const _=E("ol",{class:"carousel__track",style:Ce.value,onMousedownCapture:o.mouseDrag?le:null,onTouchstartPassiveCapture:o.touchDrag?le:null},u),K=E("div",{class:"carousel__viewport"},_);return E("section",{ref:s,class:{carousel:!0,"is-sliding":T.value,"is-dragging":G.value,"is-hover":R.value,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":o.i18n.ariaGallery,tabindex:"0",onMouseenter:Ae,onMouseleave:Te},[K,d,E(Ue)])}}}),we;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(we||(we={}));var Ge=ne({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const r=O("config",$(Object.assign({},p))),i=O("currentSlide",f(0)),n=O("slidesToScroll",f(0)),s=O("isSliding",f(!1)),g=()=>e.index===i.value,S=()=>e.index===i.value-1,m=()=>e.index===i.value+1,o=()=>{const h=Math.floor(n.value),k=Math.ceil(n.value+r.itemsToShow-1);return e.index>=h&&e.index<=k};return()=>{var h;return E("li",{style:{width:`${100/r.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":o(),"carousel__slide--active":g(),"carousel__slide--prev":S(),"carousel__slide--next":m(),"carousel__slide--sliding":s.value},"aria-hidden":!o()},(h=a.default)===null||h===void 0?void 0:h.call(a))}}});const We={class:"rounded-3xl bg-gradient-to-bl from-primary-50 to-primary-300 bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg nightwind-prevent-block"},ze={class:"py-4 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between"},qe={class:"tracking-tight"},Ke=l("span",{class:"block text-sm font-medium text-gray-600"},"Saldo Rekening",-1),Je={class:"block text-xl font-extrabold text-primary-600"},Qe={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},Ze={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},et={class:"p-6"},tt={class:"grid grid-cols-4 gap-x-6 gap-y-10 lg:grid-cols-6 lg:gap-x-8"},rt=l("i",{class:"fa-regular fa-mobile text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),at=l("h3",{class:"mt-2 text-sm text-gray-700"},"Pulsa",-1),nt=l("i",{class:"fa-regular fa-lightbulb text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),ot=l("h3",{class:"mt-2 text-sm text-gray-700"},"Listrik",-1),st=l("i",{class:"fa-regular fa-gamepad-modern text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),it=l("h3",{class:"mt-2 text-sm text-gray-700"},"Games",-1),lt=l("i",{class:"fa-regular fa-wallet text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),ut=l("h3",{class:"mt-2 text-sm text-gray-700"},"Topup",-1),ct=l("i",{class:"fa-regular fa-tv-retro text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),dt=l("h3",{class:"mt-2 text-sm text-gray-700"},"TV",-1),pt=l("i",{class:"fa-regular fa-router text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),ft=l("h3",{class:"mt-2 text-sm text-gray-700"},"Internet",-1),mt=["src"],kt={__name:"Dashboard",props:{users:Object,carousel:Object},setup(e){const a=e;function r(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const i={500:{itemsToShow:2,snapAlign:"center"},700:{itemsToShow:2,snapAlign:"center"},1024:{itemsToShow:3,snapAlign:"center"}};return(n,s)=>(te(),_e(je,{title:"Beranda",greeting:"Selamat datang kembali,",name:n.$page.props.user.name,desc:n.$page.props.user.email,avatar:n.$page.props.user.profile_photo_url},{default:x(()=>[l("div",We,[l("div",ze,[l("h2",qe,[Ke,l("span",Je," Rp "+Ee(r(n.$page.props.user.wallet_balance)),1)]),l("div",Qe,[b(Be,{as:"a",href:n.route("deposit.index")},{default:x(()=>[De(" Deposit ")]),_:1},8,["href"])])])]),l("div",Ze,[l("div",et,[l("div",tt,[b(w(j),{href:n.route("pulsa.index"),class:"group text-center"},{default:x(()=>[rt,at]),_:1},8,["href"]),b(w(j),{href:n.route("pln.index"),class:"group text-center"},{default:x(()=>[nt,ot]),_:1},8,["href"]),b(w(j),{href:n.route("games.index"),class:"group text-center"},{default:x(()=>[st,it]),_:1},8,["href"]),b(w(j),{href:n.route("emoney.index"),class:"group text-center"},{default:x(()=>[lt,ut]),_:1},8,["href"]),b(w(j),{href:n.route("television.index"),class:"group text-center"},{default:x(()=>[ct,dt]),_:1},8,["href"]),b(w(j),{href:n.route("internet.index"),class:"group text-center"},{default:x(()=>[pt,ft]),_:1},8,["href"])])])]),b(w(Fe),{"items-to-show":1,wrapAround:!0,autoplay:5e3,breakpoints:i},{default:x(()=>[(te(!0),Ie(Se,null,Le(a.carousel,g=>(te(),_e(w(Ge),{key:g.id,class:""},{default:x(()=>[b(w(j),{href:g.href},{default:x(()=>[l("img",{src:g.media[0].original_url,alt:"",class:"rounded-3xl aspect-video object-cover p-1"},null,8,mt)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1}),b($e)]),_:1},8,["name","desc","avatar"]))}};export{kt as default};
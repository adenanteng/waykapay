import{_ as je}from"./AppLayout.b5ce21fb.js";import{m as ne,k as j,M as $,d as f,y as E,q as Oe,x as Me,s as Ee,i as xe,A as ee,K as be,F as Se,p as b,c as _e,w as _,o as te,a as u,t as Ne,b as w,g as De,u as C,j as L,e as Ie,h as Le}from"./app.a23797f5.js";import{_ as $e}from"./MobileMenu.56dab14c.js";import{_ as Be}from"./PrimaryButton.d9585310.js";import"./moment.9709ab41.js";import"./DarkmodeToggle.1c060a83.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.7e025992.js";import"./label.10fce30c.js";import"./focus-management.f6d07d7b.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const p={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},ye={itemsToShow:{default:p.itemsToShow,type:Number},itemsToScroll:{default:p.itemsToScroll,type:Number},wrapAround:{default:p.wrapAround,type:Boolean},throttle:{default:p.throttle,type:Number},snapAlign:{default:p.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:p.transition,type:Number},breakpoints:{default:p.breakpoints,type:Object},autoplay:{default:p.autoplay,type:Number},pauseAutoplayOnHover:{default:p.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:p.mouseDrag,type:Boolean},touchDrag:{default:p.touchDrag,type:Boolean},dir:{default:p.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:p.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ve({config:e,slidesCount:r}){const{snapAlign:a,wrapAround:i,itemsToShow:n=1}=e;if(i)return Math.max(r-1,0);let s;switch(a){case"start":s=r-n;break;case"end":s=r-1;break;case"center":case"center-odd":s=r-Math.ceil((n-.5)/2);break;case"center-even":s=r-Math.ceil(n/2);break;default:s=0;break}return Math.max(s,0)}function Pe({config:e,slidesCount:r}){const{wrapAround:a,snapAlign:i,itemsToShow:n=1}=e;let s=0;if(a||n>r)return s;switch(i){case"start":s=0;break;case"end":s=n-1;break;case"center":case"center-odd":s=Math.floor((n-1)/2);break;case"center-even":s=Math.floor((n-2)/2);break;default:s=0;break}return s}function ae({val:e,max:r,min:a}){return r<a?e:Math.min(Math.max(e,a),r)}function Re({config:e,currentSlide:r,slidesCount:a}){const{snapAlign:i,wrapAround:n,itemsToShow:s=1}=e;let g=r;switch(i){case"center":case"center-odd":g-=(s-1)/2;break;case"center-even":g-=(s-2)/2;break;case"end":g-=s-1;break}return n?g:ae({val:g,max:a-s,min:0})}function ke(e){return e?e.reduce((r,a)=>{var i;return a.type===Se?[...r,...ke(a.children)]:((i=a.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...r,a]:r},[]):[]}function re({val:e,max:r,min:a=0}){return e>r?re({val:e-(r+1),max:r,min:a}):e<a?re({val:e+(r+1),max:r,min:a}):e}function Xe(e,r){let a;return r?function(...i){const n=this;a||(e.apply(n,i),a=!0,setTimeout(()=>a=!1,r))}:e}function Ye(e,r){let a;return function(...i){a&&clearTimeout(a),a=setTimeout(()=>{e(...i),a=null},r)}}function He(e="",r={}){return Object.entries(r).reduce((a,[i,n])=>a.replace(`{${i}}`,String(n)),e)}var Ue=ne({name:"ARIA",setup(){const e=j("config",$(Object.assign({},p))),r=j("currentSlide",f(0)),a=j("slidesCount",f(0));return()=>E("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},He(e.i18n.itemXofY,{currentSlide:r.value+1,slidesCount:a.value}))}}),Fe=ne({name:"Carousel",props:ye,setup(e,{slots:r,emit:a,expose:i}){var n;const s=f(null),g=f([]),y=f(0),m=f(0),o=$(Object.assign({},p));let h=Object.assign({},p),S;const c=f((n=e.modelValue)!==null&&n!==void 0?n:0),Y=f(0),oe=f(0),O=f(0),N=f(0);let M,H;b("config",o),b("slidesCount",m),b("currentSlide",c),b("maxSlide",O),b("minSlide",N),b("slideWidth",y);function U(){S=Object.assign({},e.breakpoints),h=Object.assign(Object.assign(Object.assign({},h),e),{i18n:Object.assign(Object.assign({},h.i18n),e.i18n),breakpoints:void 0}),se(h)}function B(){if(!S||!Object.keys(S).length)return;const t=Object.keys(S).map(l=>Number(l)).sort((l,x)=>+x-+l);let d=Object.assign({},h);t.some(l=>{const x=window.matchMedia(`(min-width: ${l}px)`).matches;return x&&(d=Object.assign(Object.assign({},d),S[l])),x}),se(d)}function se(t){Object.entries(t).forEach(([d,l])=>o[d]=l)}const ie=Ye(()=>{B(),D()},16);function D(){if(!s.value)return;const t=s.value.getBoundingClientRect();y.value=t.width/o.itemsToShow}function F(){m.value<=0||(oe.value=Math.ceil((m.value-1)/2),O.value=Ve({config:o,slidesCount:m.value}),N.value=Pe({config:o,slidesCount:m.value}),o.wrapAround||(c.value=ae({val:c.value,max:O.value,min:N.value})))}Oe(()=>{Me(()=>D()),setTimeout(()=>D(),1e3),B(),de(),window.addEventListener("resize",ie,{passive:!0}),a("init")}),Ee(()=>{H&&clearTimeout(H),M&&clearInterval(M),window.removeEventListener("resize",ie,{passive:!0})});let v=!1;const V={x:0,y:0},P={x:0,y:0},k=$({x:0,y:0}),R=f(!1),G=f(!1),Ae=()=>{R.value=!0},Te=()=>{R.value=!1};function le(t){["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(v=t.type==="touchstart",v||t.preventDefault(),!(!v&&t.button!==0||A.value)&&(V.x=v?t.touches[0].clientX:t.clientX,V.y=v?t.touches[0].clientY:t.clientY,document.addEventListener(v?"touchmove":"mousemove",ue,!0),document.addEventListener(v?"touchend":"mouseup",ce,!0)))}const ue=Xe(t=>{G.value=!0,P.x=v?t.touches[0].clientX:t.clientX,P.y=v?t.touches[0].clientY:t.clientY;const d=P.x-V.x,l=P.y-V.y;k.y=l,k.x=d},o.throttle);function ce(){const t=o.dir==="rtl"?-1:1,d=Math.sign(k.x)*.4,l=Math.round(k.x/y.value+d)*t;if(l&&!v){const x=K=>{K.stopPropagation(),window.removeEventListener("click",x,!0)};window.addEventListener("click",x,!0)}T(c.value-l),k.x=0,k.y=0,G.value=!1,document.removeEventListener(v?"touchmove":"mousemove",ue,!0),document.removeEventListener(v?"touchend":"mouseup",ce,!0)}function de(){!o.autoplay||o.autoplay<=0||(M=setInterval(()=>{o.pauseAutoplayOnHover&&R.value||X()},o.autoplay))}function pe(){M&&(clearInterval(M),M=null),de()}const A=f(!1);function T(t){const d=o.wrapAround?t:ae({val:t,max:O.value,min:N.value});c.value===d||A.value||(a("slide-start",{slidingToIndex:t,currentSlideIndex:c.value,prevSlideIndex:Y.value,slidesCount:m.value}),A.value=!0,Y.value=c.value,c.value=d,H=setTimeout(()=>{if(o.wrapAround){const l=re({val:d,max:O.value,min:0});l!==c.value&&(c.value=l,a("loop",{currentSlideIndex:c.value,slidingToIndex:t}))}a("update:modelValue",c.value),a("slide-end",{currentSlideIndex:c.value,prevSlideIndex:Y.value,slidesCount:m.value}),A.value=!1,pe()},o.transition))}function X(){T(c.value+o.itemsToScroll)}function W(){T(c.value-o.itemsToScroll)}const fe={slideTo:T,next:X,prev:W};b("nav",fe),b("isSliding",A);const me=xe(()=>Re({config:o,currentSlide:c.value,slidesCount:m.value}));b("slidesToScroll",me);const Ce=xe(()=>{const t=o.dir==="rtl"?-1:1,d=me.value*y.value*t;return{transform:`translateX(${k.x-d}px)`,transition:`${A.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${m.value*y.value}px`:"",width:"100%"}});function ge(){U(),B(),F(),D(),pe()}Object.keys(ye).forEach(t=>{["modelValue"].includes(t)||ee(()=>e[t],ge)}),ee(()=>e.modelValue,t=>{t!==c.value&&T(Number(t))}),ee(m,F),a("before-init"),U();const ve={config:o,slidesCount:m,slideWidth:y,next:X,prev:W,slideTo:T,currentSlide:c,maxSlide:O,minSlide:N,middleSlide:oe};i({updateBreakpointsConfigs:B,updateSlidesData:F,updateSlideWidth:D,initDefaultConfigs:U,restartCarousel:ge,slideTo:T,next:X,prev:W,nav:fe,data:ve});const z=r.default||r.slides,q=r.addons,he=$(ve);return()=>{const t=ke(z==null?void 0:z(he)),d=(q==null?void 0:q(he))||[];t.forEach((J,Q)=>J.props.index=Q);let l=t;if(o.wrapAround){const J=t.map((Z,I)=>be(Z,{index:-t.length+I,isClone:!0,key:`clone-before-${I}`})),Q=t.map((Z,I)=>be(Z,{index:t.length+I,isClone:!0,key:`clone-after-${I}`}));l=[...J,...t,...Q]}g.value=t,m.value=Math.max(t.length,1);const x=E("ol",{class:"carousel__track",style:Ce.value,onMousedownCapture:o.mouseDrag?le:null,onTouchstartPassiveCapture:o.touchDrag?le:null},l),K=E("div",{class:"carousel__viewport"},x);return E("section",{ref:s,class:{carousel:!0,"is-sliding":A.value,"is-dragging":G.value,"is-hover":R.value,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":o.i18n.ariaGallery,tabindex:"0",onMouseenter:Ae,onMouseleave:Te},[K,d,E(Ue)])}}}),we;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(we||(we={}));var Ge=ne({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:r}){const a=j("config",$(Object.assign({},p))),i=j("currentSlide",f(0)),n=j("slidesToScroll",f(0)),s=j("isSliding",f(!1)),g=()=>e.index===i.value,y=()=>e.index===i.value-1,m=()=>e.index===i.value+1,o=()=>{const h=Math.floor(n.value),S=Math.ceil(n.value+a.itemsToShow-1);return e.index>=h&&e.index<=S};return()=>{var h;return E("li",{style:{width:`${100/a.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":o(),"carousel__slide--active":g(),"carousel__slide--prev":y(),"carousel__slide--next":m(),"carousel__slide--sliding":s.value},"aria-hidden":!o()},(h=r.default)===null||h===void 0?void 0:h.call(r))}}});const We={class:"rounded-3xl bg-gradient-to-bl from-primary-50 to-primary-300 bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg nightwind-prevent-block"},ze={class:"py-4 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between"},qe={class:"tracking-tight"},Ke=u("span",{class:"block text-sm font-medium text-gray-600"},"Saldo Rekening",-1),Je={class:"block text-xl font-extrabold text-primary-600"},Qe={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},Ze=u("i",{class:"fa-regular fa-coins mr-1"},null,-1),et={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},tt={class:"p-6"},at={class:"grid grid-cols-4 gap-x-6 gap-y-10 xl:grid-cols-4 xl:gap-x-8"},rt=u("i",{class:"fa-duotone fa-mobile text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),nt=u("h3",{class:"mt-4 text-sm text-gray-700"},"Pulsa & Data",-1),ot=u("i",{class:"fa-duotone fa-lightbulb text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),st=u("h3",{class:"mt-4 text-sm text-gray-700"},"Listrik",-1),it=u("i",{class:"fa-duotone fa-gamepad-modern text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),lt=u("h3",{class:"mt-4 text-sm text-gray-700"},"Games",-1),ut=u("i",{class:"fa-duotone fa-wallet text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),ct=u("h3",{class:"mt-4 text-sm text-gray-700"},"E-Money",-1),dt=["src"],wt={__name:"Dashboard",props:{users:Object,history:Object,carousel:Object},setup(e){const r=e;function a(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const i={500:{itemsToShow:2,snapAlign:"center"},700:{itemsToShow:3,snapAlign:"center"},1024:{itemsToShow:5,snapAlign:"start"}};return(n,s)=>(te(),_e(je,{title:"Beranda",greeting:"Selamat datang kembali,",name:n.$page.props.user.name,desc:n.$page.props.user.email,avatar:n.$page.props.user.profile_photo_url},{default:_(()=>[u("div",We,[u("div",ze,[u("h2",qe,[Ke,u("span",Je," Rp "+Ne(a(n.$page.props.user.wallet_balance)),1)]),u("div",Qe,[w(Be,{as:"a",href:n.route("deposit.index")},{default:_(()=>[Ze,De(" Deposit ")]),_:1},8,["href"])])])]),u("div",et,[u("div",tt,[u("div",at,[w(C(L),{href:n.route("product.pulsa"),class:"group text-center"},{default:_(()=>[rt,nt]),_:1},8,["href"]),w(C(L),{href:n.route("product.pln"),class:"group text-center"},{default:_(()=>[ot,st]),_:1},8,["href"]),w(C(L),{href:n.route("product.games"),class:"group text-center"},{default:_(()=>[it,lt]),_:1},8,["href"]),w(C(L),{href:"#",class:"group text-center"},{default:_(()=>[ut,ct]),_:1})])])]),w(C(Fe),{"items-to-show":1,wrapAround:!0,autoplay:5e3,breakpoints:i},{default:_(()=>[(te(!0),Ie(Se,null,Le(r.carousel,g=>(te(),_e(C(Ge),{key:g.id,class:""},{default:_(()=>[w(C(L),{href:g.href},{default:_(()=>[u("img",{src:g.media[0].original_url,alt:"",class:"rounded-3xl aspect-video object-cover p-1"},null,8,dt)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1}),w($e)]),_:1},8,["name","desc","avatar"]))}};export{wt as default};
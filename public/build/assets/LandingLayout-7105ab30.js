import{o as r,e as i,f as m,i as L,c as B,w as a,r as M,n as h,u as j,m as N,d as _,s as O,z as C,b as t,Z as z,a as e,g as l,l as w,t as g,F as k,a1 as D,O as V}from"./app-05d758bc.js";import"./index-9b5ba775.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as E,a as F}from"./OnlineStatus-536f8aa0.js";import{_ as $,c as b,a as I,d as f}from"./DarkmodeToggle-23b8c518.js";const J={},K=["src"];function R(c,p){return c.$page.props.appSetting!=null?(r(),i("img",{key:0,src:c.$page.props.appSetting.media[0].original_url,class:"h-10 w-auto"},null,8,K)):m("",!0)}const T=P(J,[["render",R]]),S={__name:"NavLink",props:{href:String,active:Boolean},setup(c){const p=c,o=L(()=>p.active?"inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-gray-900 hover:border-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-700 transition");return(n,v)=>(r(),B(j(N),{href:c.href,class:h(o.value)},{default:a(()=>[M(n.$slots,"default")]),_:3},8,["href","class"]))}},W={class:"sticky top-0 z-50"},Y={class:"sticky top-0 z-50"},A={class:"min-h-screen bg-gray-100 bg-glass bg-fixed"},Z={class:"px-3 mb-3 pt-3 w-full z-50 fixed top-0"},q={class:"flex justify-between h-16"},G={class:"flex"},H={class:"shrink-0 flex items-center"},Q={class:"hidden space-x-8 sm:-my-px sm:ml-10 lg:flex"},U={class:"hidden lg:flex sm:items-center sm:ml-6"},X={key:0,class:"ml-3 relative"},ee={class:"ml-3 relative"},se={key:1,class:"ml-3 relative"},te={class:"flex text-sm border-transparent rounded-full focus:outline-none focus:ring focus:ring-primary-300 transition"},ae=["src","alt"],re={key:1,class:"block h-10 w-10 bg-primary-100 flex items-center justify-center rounded-full"},oe=e("i",{class:"fa-duotone fa-user text-2xl text-primary-400"},null,-1),le=[oe],ie=e("div",{class:"border-t border-gray-100"},null,-1),ne={class:"-mr-2 flex items-center lg:hidden"},de={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ce={class:"pt-2 pb-3 space-y-1"},ue={class:"pt-4 pb-1 border-t border-gray-200"},pe={key:0,class:"flex items-center px-4 mb-3"},fe={class:"shrink-0 mr-3"},me=["src","alt"],he={class:"font-medium text-base text-gray-800"},ge={class:"font-medium text-sm text-gray-500"},ve={class:"space-y-1"},_e={class:""},be={key:0,class:"relative"},ye=["src"],xe={class:"absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr to-transparent from-gray-800 dark:from-gray-800"},we={class:"text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0"},ke={class:"max-w-2xl text-white text-4xl lg:text-6xl font-bold capitalize nightwind-prevent"},$e={class:"max-w-xl text-gray-100 text-base mt-1 nightwind-prevent"},Se=D('<div class="sticky inset-x-0 bottom-0 nightwind-prevent-block"><div class="bg-primary-600 bg-opacity-50 backdrop-blur"><div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center"><span class="flex p-2 rounded-lg bg-primary-800"><i class="fa-regular fa-bullhorn text-white"></i></span><p class="ml-3 font-medium text-white truncate"><span class="md:hidden">Website dalam tahap pengembangan! </span><span class="hidden md:inline">Website ini masih dalam tahap pengembangan. </span></p></div></div></div></div></div>',1),Oe={__name:"LandingLayout",props:{title:String,darkMode:Boolean,header:String,desc:String,img:String,page:Object},setup(c){const p=c,o=_(!1);typeof window<"u"&&(o.value=JSON.parse(localStorage.getItem("darkmode"))??!1,O(o,s=>{console.log(`darkmode is ${s}`),localStorage.setItem("darkmode",JSON.stringify(s))}));const n=_(!1),v=()=>{V.post(route("logout"))},u=_(null);return C(()=>{var s=window.pageYOffset;window.addEventListener("scroll",()=>{if(u.value!=null){var d=window.pageYOffset;s>d?(u.value.classList.add("scrolled"),u.value.classList.remove("scrollDown")):(u.value.classList.add("bg-white","bg-opacity-50","backdrop-blur","border","border-gray-300","rounded-full"),u.value.classList.remove("scrolled")),d===0&&(u.value.classList.remove("bg-white","bg-opacity-50","backdrop-blur","border","border-gray-300","rounded-full"),u.value.classList.remove("scrolled")),s=d}})}),(s,d)=>{var y;return r(),i("div",{class:h(["transition duration-1000 nightwind",o.value?"dark":""])},[t(j(z),{title:c.title+" - "+((y=s.$page.props.appSetting)==null?void 0:y.name)},null,8,["title"]),e("div",W,[t(E)]),e("div",Y,[t(F)]),e("div",A,[e("nav",Z,[e("div",{class:"px-3 max-w-screen-xl mx-auto",ref_key:"headRef",ref:u},[e("div",q,[e("div",G,[e("div",H,[t(T,{class:"block h-10 w-auto"})]),e("div",Q,[t(S,{href:s.route("landing.welcome"),active:s.route().current("landing.welcome")},{default:a(()=>[l(" Beranda ")]),_:1},8,["href","active"])])]),e("div",U,[s.$page.props.user==null?(r(),i("div",X,[t(S,{href:s.route("login")},{default:a(()=>[l(" Login ")]),_:1},8,["href"])])):m("",!0),e("div",ee,[t($,{darkMode:o.value,onClick:d[0]||(d[0]=x=>o.value=!o.value)},null,8,["darkMode"])]),s.$page.props.user?(r(),i("div",se,[t(I,{align:"right",width:"48"},{trigger:a(()=>[e("button",te,[s.$page.props.user?(r(),i("img",{key:0,class:"h-10 w-10 rounded-full object-cover",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,ae)):(r(),i("span",re,le))])]),content:a(()=>[t(b,{href:s.route("dashboard")},{default:a(()=>[l(" Dasbor ")]),_:1},8,["href"]),t(b,{href:s.route("profile.show")},{default:a(()=>[l(" Profil ")]),_:1},8,["href"]),ie,e("form",{onSubmit:w(v,["prevent"])},[t(b,{as:"button"},{default:a(()=>[l(" Keluar ")]),_:1})],32)]),_:1})])):m("",!0)]),e("div",ne,[t($,{darkMode:o.value,onClick:d[1]||(d[1]=x=>o.value=!o.value)},null,8,["darkMode"]),e("button",{class:"inline-flex items-center justify-center ml-2 p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:d[2]||(d[2]=x=>n.value=!n.value)},[(r(),i("svg",de,[e("path",{class:h({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:h({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])],512),e("div",{class:h([{block:n.value,hidden:!n.value},"lg:hidden mt-2 bg-white bg-opacity-50 backdrop-blur rounded-3xl border border-gray-300"])},[e("div",ce,[t(f,{href:s.route("landing.welcome"),active:s.route().current("landing.welcome")},{default:a(()=>[l(" Beranda ")]),_:1},8,["href","active"])]),e("div",ue,[s.$page.props.user?(r(),i("div",pe,[e("div",fe,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,me)]),e("div",null,[e("div",he,g(s.$page.props.user.name),1),e("div",ge,g(s.$page.props.user.email),1)])])):m("",!0),e("div",ve,[s.$page.props.user?(r(),i(k,{key:0},[t(f,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:a(()=>[l(" Dasbor ")]),_:1},8,["href","active"]),t(f,{href:s.route("profile.show"),active:s.route().current("profile.show")},{default:a(()=>[l(" Profil ")]),_:1},8,["href","active"]),e("form",{method:"POST",onSubmit:w(v,["prevent"])},[t(f,{as:"button"},{default:a(()=>[l(" Keluar ")]),_:1})],32)],64)):(r(),i(k,{key:1},[t(f,{href:s.route("login")},{default:a(()=>[l(" Masuk ")]),_:1},8,["href"]),t(f,{href:s.route("register")},{default:a(()=>[l(" Daftar ")]),_:1},8,["href"])],64))])])],2)]),e("main",_e,[p.header?(r(),i("div",be,[e("img",{class:"object-cover w-full h-screen",src:p.img},null,8,ye),e("div",xe,[e("div",we,[e("h1",ke,g(p.header),1),e("p",$e,g(p.desc),1)])])])):m("",!0),M(s.$slots,"default")]),Se])],2)}}};export{Oe as _};
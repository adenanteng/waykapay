import{o as r,e as l,f as m,k as L,c as B,w as a,r as M,n as h,u as j,j as N,d as _,p as O,z as C,b as t,Z as z,a as e,g as i,i as x,t as g,F as k,V,O as D}from"./app-CaR_YMvJ.js";import"./helper-Dp3OpoYX.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as E,a as F}from"./OnlineStatus-CYP1rC9a.js";import{_ as $,b,a as I,c as f}from"./DarkmodeToggle-BNYDvKZr.js";import{_ as J}from"./BackgroundParticle-BaXRgoMO.js";const K={},R=["src"];function T(c,p){return c.$page.props.appSetting!=null?(r(),l("img",{key:0,src:c.$page.props.appSetting.media[0].original_url,class:"h-10 w-auto"},null,8,R)):m("",!0)}const W=P(K,[["render",T]]),S={__name:"NavLink",props:{href:String,active:Boolean},setup(c){const p=c,o=L(()=>p.active?"inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-gray-900 hover:border-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-700 transition");return(n,v)=>(r(),B(j(N),{href:c.href,class:h(o.value)},{default:a(()=>[M(n.$slots,"default")]),_:3},8,["href","class"]))}},Y={class:"sticky top-0 z-50"},A={class:"sticky top-0 z-50"},Z={class:"min-h-screen bg-white relative isolate transition duration-1000"},q={class:"px-3 mb-3 pt-3 w-full z-50 fixed top-0"},G={class:"flex justify-between h-16"},H={class:"flex"},Q={class:"shrink-0 flex items-center"},U={class:"hidden space-x-8 sm:-my-px sm:ml-10 lg:flex"},X={class:"hidden lg:flex sm:items-center sm:ml-6"},ee={key:0,class:"ml-3 relative"},se={class:"ml-3 relative"},te={key:1,class:"ml-3 relative"},ae={class:"flex text-sm border-transparent rounded-full focus:outline-none focus:ring focus:ring-primary-300 transition"},re=["src","alt"],oe={key:1,class:"block h-10 w-10 bg-primary-100 flex items-center justify-center rounded-full"},ie=e("i",{class:"fa-duotone fa-user text-2xl text-primary-400"},null,-1),le=[ie],ne=e("div",{class:"border-t border-gray-100"},null,-1),de={class:"-mr-2 flex items-center lg:hidden"},ce={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ue={class:"pt-2 pb-3 space-y-1"},pe={class:"pt-4 pb-1 border-t border-gray-200"},fe={key:0,class:"flex items-center px-4 mb-3"},me={class:"shrink-0 mr-3"},he=["src","alt"],ge={class:"font-medium text-base text-gray-800"},ve={class:"font-medium text-sm text-gray-500"},_e={class:"space-y-1"},be={class:""},ye={key:0,class:"relative"},we=["src"],xe={class:"absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr to-transparent from-gray-800 dark:from-gray-800"},ke={class:"text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0"},$e={class:"max-w-2xl text-white text-4xl lg:text-6xl font-bold capitalize nightwind-prevent"},Se={class:"max-w-xl text-gray-100 text-base mt-1 nightwind-prevent"},Me=V('<div class="fixed inset-x-0 bottom-0 nightwind-prevent-block"><div class="bg-primary-600 bg-opacity-50 backdrop-blur-sm"><div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center"><span class="flex p-2 rounded-lg bg-primary-800"><i class="fa-regular fa-bullhorn text-white"></i></span><p class="ml-3 font-medium text-white truncate"><span class="md:hidden">Website dalam tahap pengembangan! </span><span class="hidden md:inline">Website ini masih dalam tahap pengembangan. </span></p></div></div></div></div></div>',1),ze={__name:"LandingLayout",props:{title:String,darkMode:Boolean,header:String,desc:String,img:String,page:Object},setup(c){const p=c,o=_(!1);typeof window<"u"&&(o.value=JSON.parse(localStorage.getItem("darkmode"))??!1,O(o,s=>{console.log(`darkmode is ${s}`),localStorage.setItem("darkmode",JSON.stringify(s))}));const n=_(!1),v=()=>{D.post(route("logout"))},u=_(null);return C(()=>{var s=window.pageYOffset;window.addEventListener("scroll",()=>{if(u.value!=null){var d=window.pageYOffset;s>d?(u.value.classList.add("scrolled"),u.value.classList.remove("scrollDown")):(u.value.classList.add("bg-white","bg-opacity-20","backdrop-blur-sm","border","border-gray-300","rounded-full"),u.value.classList.remove("scrolled")),d===0&&(u.value.classList.remove("bg-white","bg-opacity-20","backdrop-blur-sm","border","border-gray-300","rounded-full"),u.value.classList.remove("scrolled")),s=d}})}),(s,d)=>{var y;return r(),l("div",{class:h(["transition duration-1000 overflow-hidden nightwind",o.value?"dark":""])},[t(j(z),{title:c.title+" - "+((y=s.$page.props.appSetting)==null?void 0:y.name)},null,8,["title"]),e("div",Y,[t(E)]),e("div",A,[t(F)]),e("div",Z,[t(J),e("nav",q,[e("div",{class:"px-3 max-w-screen-xl mx-auto",ref_key:"headRef",ref:u},[e("div",G,[e("div",H,[e("div",Q,[t(W,{class:"block h-10 w-auto"})]),e("div",U,[t(S,{href:s.route("landing.welcome"),active:s.route().current("landing.welcome")},{default:a(()=>[i(" Beranda ")]),_:1},8,["href","active"])])]),e("div",X,[s.$page.props.user==null?(r(),l("div",ee,[t(S,{href:s.route("login")},{default:a(()=>[i(" Login ")]),_:1},8,["href"])])):m("",!0),e("div",se,[t($,{darkMode:o.value,onClick:d[0]||(d[0]=w=>o.value=!o.value)},null,8,["darkMode"])]),s.$page.props.user?(r(),l("div",te,[t(I,{align:"right",width:"48"},{trigger:a(()=>[e("button",ae,[s.$page.props.user?(r(),l("img",{key:0,class:"h-10 w-10 rounded-full object-cover",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,re)):(r(),l("span",oe,le))])]),content:a(()=>[t(b,{href:s.route("dashboard")},{default:a(()=>[i(" Dasbor ")]),_:1},8,["href"]),t(b,{href:s.route("profile.show")},{default:a(()=>[i(" Profil ")]),_:1},8,["href"]),ne,e("form",{onSubmit:x(v,["prevent"])},[t(b,{as:"button"},{default:a(()=>[i(" Keluar ")]),_:1})],32)]),_:1})])):m("",!0)]),e("div",de,[t($,{darkMode:o.value,onClick:d[1]||(d[1]=w=>o.value=!o.value)},null,8,["darkMode"]),e("button",{class:"inline-flex items-center justify-center ml-2 p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:d[2]||(d[2]=w=>n.value=!n.value)},[(r(),l("svg",ce,[e("path",{class:h({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:h({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])],512),e("div",{class:h([{block:n.value,hidden:!n.value},"lg:hidden mt-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl border border-gray-300"])},[e("div",ue,[t(f,{href:s.route("landing.welcome"),active:s.route().current("landing.welcome")},{default:a(()=>[i(" Beranda ")]),_:1},8,["href","active"])]),e("div",pe,[s.$page.props.user?(r(),l("div",fe,[e("div",me,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,he)]),e("div",null,[e("div",ge,g(s.$page.props.user.name),1),e("div",ve,g(s.$page.props.user.email),1)])])):m("",!0),e("div",_e,[s.$page.props.user?(r(),l(k,{key:0},[t(f,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:a(()=>[i(" Dasbor ")]),_:1},8,["href","active"]),t(f,{href:s.route("profile.show"),active:s.route().current("profile.show")},{default:a(()=>[i(" Profil ")]),_:1},8,["href","active"]),e("form",{method:"POST",onSubmit:x(v,["prevent"])},[t(f,{as:"button"},{default:a(()=>[i(" Keluar ")]),_:1})],32)],64)):(r(),l(k,{key:1},[t(f,{href:s.route("login")},{default:a(()=>[i(" Masuk ")]),_:1},8,["href"]),t(f,{href:s.route("register")},{default:a(()=>[i(" Daftar ")]),_:1},8,["href"])],64))])])],2)]),e("main",be,[p.header?(r(),l("div",ye,[e("img",{class:"object-cover w-full h-screen",src:p.img},null,8,we),e("div",xe,[e("div",ke,[e("h1",$e,g(p.header),1),e("p",Se,g(p.desc),1)])])])):m("",!0),M(s.$slots,"default")]),Me])],2)}}};export{ze as _};

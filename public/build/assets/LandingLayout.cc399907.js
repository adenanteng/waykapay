import{o,e as n,f as p,i as B,c as _,w as r,r as L,n as m,u as y,j as N,d as v,B as C,q as O,Z as w,b as a,a as e,g as i,C as $,t as h,F as M,a2 as D,O as V}from"./app.76cf4377.js";import"./helper.e9fc3b37.js";import{_ as z}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as P}from"./Banner.f5365e81.js";import{_ as S,c as b,a as E,d as f}from"./DarkmodeToggle.4584ea0c.js";const F={},I=["src"];function J(s,u){return s.$page.props.appSetting!=null?(o(),n("img",{key:0,src:s.$page.props.appSetting.media[0].original_url,class:"h-10 w-auto"},null,8,I)):p("",!0)}const K=z(F,[["render",J]]),j={__name:"NavLink",props:{href:String,active:Boolean},setup(s){const u=s,d=B(()=>u.active?"inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-gray-900 hover:border-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-700 transition");return(g,c)=>(o(),_(y(N),{href:s.href,class:m(d.value)},{default:r(()=>[L(g.$slots,"default")]),_:3},8,["href","class"]))}},R={class:"min-h-screen bg-gray-100 bg-glass bg-fixed"},T={class:"px-3 mb-3 pt-3 w-full z-50 fixed top-0"},W={class:"flex justify-between h-16"},Y={class:"flex"},q={class:"shrink-0 flex items-center"},A={class:"hidden space-x-8 sm:-my-px sm:ml-10 lg:flex"},Z={class:"hidden lg:flex sm:items-center sm:ml-6"},G={key:0,class:"ml-3 relative"},H={class:"ml-3 relative"},Q={key:1,class:"ml-3 relative"},U={class:"flex text-sm border-transparent rounded-full focus:outline-none focus:ring focus:ring-primary-300 transition"},X=["src","alt"],ee={key:1,class:"block h-10 w-10 bg-primary-100 flex items-center justify-center rounded-full"},te=e("i",{class:"fa-duotone fa-user text-2xl text-primary-400"},null,-1),se=[te],ae=e("div",{class:"border-t border-gray-100"},null,-1),re={class:"-mr-2 flex items-center lg:hidden"},oe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},le={class:"pt-2 pb-3 space-y-1"},ie={class:"pt-4 pb-1 border-t border-gray-200"},ne={key:0,class:"flex items-center px-4 mb-3"},de={class:"shrink-0 mr-3"},ce=["src","alt"],ue={class:"font-medium text-base text-gray-800"},fe={class:"font-medium text-sm text-gray-500"},pe={class:"space-y-1"},me={class:""},ge={key:0,class:"relative"},he=["src"],ve={class:"absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr to-transparent from-gray-800 dark:from-gray-800"},be={class:"text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0"},_e={class:"max-w-2xl text-white text-4xl lg:text-6xl font-bold capitalize nightwind-prevent"},ye={class:"max-w-xl text-gray-100 text-base mt-1 nightwind-prevent"},ke=D('<div class="sticky inset-x-0 bottom-0 nightwind-prevent-block"><div class="bg-primary-600 bg-opacity-50 backdrop-blur"><div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center"><span class="flex p-2 rounded-lg bg-primary-800"><i class="fa-regular fa-bullhorn text-white"></i></span><p class="ml-3 font-medium text-white truncate"><span class="md:hidden">Website dalam tahap pengembangan! </span><span class="hidden md:inline">Website ini masih dalam tahap pengembangan. </span></p></div></div></div></div></div>',1),je={__name:"LandingLayout",props:{title:String,darkMode:Boolean,header:String,desc:String,img:String,page:Object},setup(s){var k;const u=s;if(typeof window<"u"){const t=v((k=JSON.parse(localStorage.getItem("darkmode")))!=null?k:!1);C(t,l=>{console.log(`darkmode is ${l}`),localStorage.setItem("darkmode",JSON.stringify(l))})}const d=v(!1),g=()=>{V.post(route("logout"))},c=v(null);return O(()=>{var t=window.pageYOffset;window.addEventListener("scroll",()=>{if(c.value!=null){var l=window.pageYOffset;t>l?(c.value.classList.add("scrolled"),c.value.classList.remove("scrollDown")):(c.value.classList.add("bg-white","bg-opacity-50","backdrop-blur","border","border-gray-300","rounded-full"),c.value.classList.remove("scrolled")),l===0&&(c.value.classList.remove("bg-white","bg-opacity-50","backdrop-blur","border","border-gray-300","rounded-full"),c.value.classList.remove("scrolled")),t=l}})}),(t,l)=>(o(),n("div",{class:m(["transition duration-1000 nightwind",s.darkMode?"dark":""])},[t.$page.props.setting!=null?(o(),_(y(w),{key:0,title:s.title+" - "+t.$page.props.setting.name},null,8,["title"])):(o(),_(y(w),{key:1,title:s.title},null,8,["title"])),a(P),e("div",R,[e("nav",T,[e("div",{class:"px-3 max-w-screen-xl mx-auto",ref_key:"headRef",ref:c},[e("div",W,[e("div",Y,[e("div",q,[a(K,{class:"block h-10 w-auto"})]),e("div",A,[a(j,{href:t.route("landing.welcome"),active:t.route().current("landing.welcome")},{default:r(()=>[i(" Beranda ")]),_:1},8,["href","active"])])]),e("div",Z,[t.$page.props.user==null?(o(),n("div",G,[a(j,{href:t.route("login")},{default:r(()=>[i(" Login ")]),_:1},8,["href"])])):p("",!0),e("div",H,[a(S,{darkMode:s.darkMode,onClick:l[0]||(l[0]=x=>s.darkMode=!s.darkMode)},null,8,["darkMode"])]),t.$page.props.user?(o(),n("div",Q,[a(E,{align:"right",width:"48"},{trigger:r(()=>[e("button",U,[t.$page.props.user?(o(),n("img",{key:0,class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,X)):(o(),n("span",ee,se))])]),content:r(()=>[a(b,{href:t.route("dashboard")},{default:r(()=>[i(" Dasbor ")]),_:1},8,["href"]),a(b,{href:t.route("profile.show")},{default:r(()=>[i(" Profil ")]),_:1},8,["href"]),ae,e("form",{onSubmit:$(g,["prevent"])},[a(b,{as:"button"},{default:r(()=>[i(" Keluar ")]),_:1})],32)]),_:1})])):p("",!0)]),e("div",re,[a(S,{darkMode:s.darkMode,onClick:l[1]||(l[1]=x=>s.darkMode=!s.darkMode)},null,8,["darkMode"]),e("button",{class:"inline-flex items-center justify-center ml-2 p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:l[2]||(l[2]=x=>d.value=!d.value)},[(o(),n("svg",oe,[e("path",{class:m({hidden:d.value,"inline-flex":!d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:m({hidden:!d.value,"inline-flex":d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])],512),e("div",{class:m([{block:d.value,hidden:!d.value},"lg:hidden mt-2 bg-white bg-opacity-50 backdrop-blur rounded-3xl border border-gray-300"])},[e("div",le,[a(f,{href:t.route("landing.welcome"),active:t.route().current("landing.welcome")},{default:r(()=>[i(" Beranda ")]),_:1},8,["href","active"])]),e("div",ie,[t.$page.props.user?(o(),n("div",ne,[e("div",de,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,ce)]),e("div",null,[e("div",ue,h(t.$page.props.user.name),1),e("div",fe,h(t.$page.props.user.email),1)])])):p("",!0),e("div",pe,[t.$page.props.user?(o(),n(M,{key:0},[a(f,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[i(" Dasbor ")]),_:1},8,["href","active"]),a(f,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[i(" Profil ")]),_:1},8,["href","active"]),e("form",{method:"POST",onSubmit:$(g,["prevent"])},[a(f,{as:"button"},{default:r(()=>[i(" Keluar ")]),_:1})],32)],64)):(o(),n(M,{key:1},[a(f,{href:t.route("login")},{default:r(()=>[i(" Masuk ")]),_:1},8,["href"]),a(f,{href:t.route("register")},{default:r(()=>[i(" Daftar ")]),_:1},8,["href"])],64))])])],2)]),e("main",me,[u.header?(o(),n("div",ge,[e("img",{class:"object-cover w-full h-screen",src:u.img},null,8,he),e("div",ve,[e("div",be,[e("h1",_e,h(u.header),1),e("p",ye,h(u.desc),1)])])])):p("",!0),L(t.$slots,"default")]),ke])],2))}};export{je as _};

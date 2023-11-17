import{q as y,O as g,d as v,B as b,c as w,w as s,o as c,a as e,t as r,b as a,u as o,j as i,n as k,e as p,f as _,g as $,C as j}from"./app.4281b2dd.js";import{_ as S}from"./AppLayout.c181105c.js";import{_ as z}from"./MobileMenu.9c55c54f.js";import"./helper.e9fc3b37.js";import{_ as B}from"./DangerButton.7ef52fdf.js";import"./moment.8f1c230e.js";import"./Banner.964ce968.js";import"./DarkmodeToggle.84e663b0.js";import"./label.714dac59.js";import"./focus-management.60e340eb.js";const C={class:"col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},N={class:"md:hidden relative"},O=["src"],P={class:"absolute inset-0 bg-gradient-to-tl from-gray-50 dark:from-gray-900 via-transparent via-35% flex justify-end items-end rounded-t-3xl"},V={class:"pb-2 pr-5"},D={class:"font-semibold text-gray-900"},I={class:"text-xs text-gray-700"},M={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},R={class:"flex w-0 flex-1"},T={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},J=e("i",{class:"fa-duotone fa-money-bill-wave text-green-400"},null,-1),q={class:"ml-3"},A=e("div",{class:"text-xs text-gray-500"},"Saldo Rekening",-1),E={class:"text-sm font-medium text-gray-700"},F={class:"-ml-px flex w-0 flex-1"},H={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},K=e("i",{class:"fa-duotone fa-coins text-amber-400"},null,-1),U={class:"ml-3"},G=e("div",{class:"text-xs text-gray-500"},"Poin",-1),L={class:"text-sm font-medium text-gray-700"},Q={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},W={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},X=e("p",{class:"text-sm font-medium text-gray-900"},"Ubah data profil",-1),Y=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),Z=e("p",{class:"text-sm font-medium text-gray-900"},"Daftar Harga",-1),ee=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),te={class:"block lg:hidden"},se={class:"text-sm font-medium text-gray-900"},ae={key:0,class:"col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},oe={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},ie={class:"-ml-px flex w-0 flex-1"},re={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},le=e("i",{class:"fa-duotone fa-money-bill-1-wave text-green-400"},null,-1),de={class:"ml-3"},ne=e("div",{class:"text-xs text-gray-500"},"Digiflazz Saldo",-1),ce={class:"text-sm font-medium text-gray-700"},ue={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},fe={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},ge=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan aplikasi",-1),pe=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),_e=e("p",{class:"text-sm font-medium text-gray-900"},"Transaksi",-1),me=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),he=e("p",{class:"text-sm font-medium text-gray-900"},"Carousel",-1),xe=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ye=e("p",{class:"text-sm font-medium text-gray-900"},"Data pengguna",-1),ve=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),be=["onSubmit"],Ve={__name:"Index",props:{history:Object,digiflazz_saldo:void 0},setup(m){var u;const h=m;y(()=>{g.reload({only:["digiflazz_saldo"]})});const l=v((u=JSON.parse(localStorage.getItem("darkmode")))!=null?u:!1);b(l,t=>{console.log(`darkmode is ${t}`),localStorage.setItem("darkmode",JSON.stringify(t))});const x=()=>{g.post(route("logout"))};function d(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,n)=>(c(),w(S,{title:"Saya",name:t.$page.props.user.name,desc:t.$page.props.user.email,avatar:t.$page.props.user.profile_photo_url},{default:s(()=>{var f;return[e("div",C,[e("div",N,[e("img",{src:t.$page.props.user.profile_photo_url,class:"w-full object-cover rounded-t-3xl aspect-video"},null,8,O),e("div",P,[e("div",V,[e("h3",D," # "+r(t.$page.props.user.slug),1),e("p",I,"Akun "+r(t.$page.props.user.role),1)])])]),e("div",null,[e("div",M,[e("div",R,[e("div",T,[J,e("div",q,[A,e("div",E,"Rp "+r(d(t.$page.props.user.wallet_balance)),1)])])]),e("div",F,[e("div",H,[K,e("div",U,[G,e("div",L,r(d(t.$page.props.user.coin)),1)])])])])])]),e("div",Q,[e("ul",W,[e("li",null,[a(o(i),{href:t.route("profile.show"),class:"flex justify-between px-6 py-4"},{default:s(()=>[X,Y]),_:1},8,["href"])]),e("li",null,[a(o(i),{href:t.route("pricing.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[Z,ee]),_:1},8,["href"])]),e("li",te,[a(o(i),{href:t.route("profile.index"),onClick:n[0]||(n[0]=we=>l.value=!l.value),class:"flex justify-between px-6 py-4"},{default:s(()=>[e("p",se,"Mode "+r(l.value?"gelap":"terang"),1),e("i",{class:k(["fa-regular text-gray-900",l.value?"fa-moon":"fa-sun-bright"])},null,2)]),_:1},8,["href"])])])]),t.$page.props.user.role_id==1?(c(),p("div",ae,[e("div",null,[e("div",oe,[e("div",ie,[e("div",re,[le,e("div",de,[ne,e("div",ce,"Rp "+r(d((f=h.digiflazz_saldo)!=null?f:0)),1)])])])])])])):_("",!0),t.$page.props.user.role_id==1?(c(),p("div",ue,[e("ul",fe,[e("li",null,[a(o(i),{href:t.route("setting.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ge,pe]),_:1},8,["href"])]),e("li",null,[a(o(i),{href:t.route("transaction.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[_e,me]),_:1},8,["href"])]),e("li",null,[a(o(i),{href:t.route("carousel.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[he,xe]),_:1},8,["href"])]),e("li",null,[a(o(i),{href:t.route("user.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ye,ve]),_:1},8,["href"])])])])):_("",!0),e("form",{method:"POST",onSubmit:j(x,["prevent"])},[a(B,{type:"submit",class:"w-full"},{default:s(()=>[$(" Keluar ")]),_:1})],40,be),a(z)]}),_:1},8,["name","desc","avatar"]))}};export{Ve as default};

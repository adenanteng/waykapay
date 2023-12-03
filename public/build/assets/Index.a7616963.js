import{q as x,O as p,d as v,B as b,c as g,w as s,o as d,a as e,t as i,b as a,u as o,j as r,f as u,n as w,e as _,g as k,C as j}from"./app.7cbcdd66.js";import{_ as $}from"./AppLayout.3f3c33b9.js";import{_ as S}from"./MobileMenu.38a3d9f5.js";import"./helper.e9fc3b37.js";import{_ as z}from"./DangerButton.c5747e57.js";import"./moment.b49d8e96.js";import"./Banner.8a52fb81.js";import"./DarkmodeToggle.f73f6f84.js";import"./label.e24b74d3.js";import"./index.4010f064.js";import"./focus-management.47c86403.js";const B={class:"col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},C={class:"md:hidden relative"},N=["src"],O={class:"absolute inset-0 bg-gradient-to-tl from-gray-50 dark:from-gray-900 via-transparent via-35% flex justify-end items-end rounded-t-3xl"},P={class:"pb-2 pr-5 text-right"},V={class:"font-semibold text-gray-900"},D={class:"text-xs text-gray-700"},I={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},K={class:"flex w-0 flex-1"},M={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},R=e("i",{class:"fa-duotone fa-money-bill-wave text-green-400"},null,-1),T={class:"ml-3"},J=e("div",{class:"text-xs text-gray-500"},"Saldo Rekening",-1),L={class:"text-sm font-medium text-gray-700"},q={class:"-ml-px flex w-0 flex-1"},A={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},E=e("i",{class:"fa-duotone fa-coins text-amber-400"},null,-1),F={class:"ml-3"},U=e("div",{class:"text-xs text-gray-500"},"Poin",-1),G={class:"text-sm font-medium text-gray-700"},H={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},Q={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},W=e("p",{class:"text-sm font-medium text-gray-900"},"Ubah data profil",-1),X=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),Y=e("p",{class:"text-sm font-medium text-gray-900"},"Laporan",-1),Z=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ee=e("p",{class:"text-sm font-medium text-gray-900"},"Daftar harga",-1),te=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),se={class:"block lg:hidden"},ae={class:"text-sm font-medium text-gray-900"},oe={key:0,class:"col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},re={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},ie={class:"-ml-px flex w-0 flex-1"},le={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},de=e("i",{class:"fa-duotone fa-money-bill-1-wave text-green-400"},null,-1),ne={class:"ml-3"},ce=e("div",{class:"text-xs text-gray-500"},"Digiflazz Saldo",-1),ue={class:"text-sm font-medium text-gray-700"},fe={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},pe={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},ge=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan aplikasi",-1),_e=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),he=e("p",{class:"text-sm font-medium text-gray-900"},"Transaksi",-1),me=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ye=e("p",{class:"text-sm font-medium text-gray-900"},"Carousel",-1),xe=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ve=e("p",{class:"text-sm font-medium text-gray-900"},"Data pengguna",-1),be=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),we={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},ke={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},je=e("p",{class:"text-sm font-medium text-gray-900"},"Ketentuan Layanan",-1),$e=e("p",{class:"text-sm font-medium text-gray-900"},"Kebijakan Privasi",-1),Se=["onSubmit"],Te={__name:"Index",props:{history:Object,digiflazz_saldo:void 0},setup(h){var f;const m=h;x(()=>{p.reload({only:["digiflazz_saldo"]})});const l=v((f=JSON.parse(localStorage.getItem("darkmode")))!=null?f:!1);b(l,t=>{console.log(`darkmode is ${t}`),localStorage.setItem("darkmode",JSON.stringify(t))});const y=()=>{p.post(route("logout"))};function n(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,c)=>(d(),g($,{title:"Saya",name:t.$page.props.user.name,desc:t.$page.props.user.email,avatar:t.$page.props.user.profile_photo_url},{default:s(()=>[e("div",B,[e("div",C,[e("img",{src:t.$page.props.user.profile_photo_url,class:"w-full object-cover rounded-t-3xl aspect-video"},null,8,N),e("div",O,[e("div",P,[e("h3",V,i(t.$page.props.user.phone),1),e("p",D,"Akun "+i(t.$page.props.user.role),1)])])]),e("div",null,[e("div",I,[e("div",K,[e("div",M,[R,e("div",T,[J,e("div",L,"Rp "+i(n(t.$page.props.user.wallet_balance)),1)])])]),e("div",q,[e("div",A,[E,e("div",F,[U,e("div",G,i(n(t.$page.props.user.coin)),1)])])])])])]),e("div",H,[e("ul",Q,[e("li",null,[a(o(r),{href:t.route("profile.show"),class:"flex justify-between px-6 py-4"},{default:s(()=>[W,X]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("report.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[Y,Z]),_:1},8,["href"])]),e("li",null,[t.$page.props.user.role_id!=3?(d(),g(o(r),{key:0,href:t.route("pricing.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ee,te]),_:1},8,["href"])):u("",!0)]),e("li",se,[a(o(r),{href:t.route("profile.index"),onClick:c[0]||(c[0]=ze=>l.value=!l.value),class:"flex justify-between px-6 py-4"},{default:s(()=>[e("p",ae,"Mode "+i(l.value?"gelap":"terang"),1),e("i",{class:w(["fa-regular text-gray-900",l.value?"fa-moon":"fa-sun-bright"])},null,2)]),_:1},8,["href"])])])]),t.$page.props.user.role_id==1?(d(),_("div",oe,[e("div",null,[e("div",re,[e("div",ie,[e("div",le,[de,e("div",ne,[ce,e("div",ue,"Rp "+i(n(m.digiflazz_saldo)),1)])])])])])])):u("",!0),t.$page.props.user.role_id==1?(d(),_("div",fe,[e("ul",pe,[e("li",null,[a(o(r),{href:t.route("setting.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ge,_e]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("transaction.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[he,me]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("carousel.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ye,xe]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("user.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ve,be]),_:1},8,["href"])])])])):u("",!0),e("div",we,[e("ul",ke,[e("li",null,[a(o(r),{href:t.route("terms.show"),class:"block px-6 py-4"},{default:s(()=>[je]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("policy.show"),class:"block px-6 py-4"},{default:s(()=>[$e]),_:1},8,["href"])])])]),e("form",{method:"POST",onSubmit:j(y,["prevent"])},[a(z,{type:"submit",class:"w-full"},{default:s(()=>[k(" Keluar ")]),_:1})],40,Se),a(S)]),_:1},8,["name","desc","avatar"]))}};export{Te as default};
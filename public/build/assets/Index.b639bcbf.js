import{q as y,O as g,d as v,B as b,c as p,w as s,o as d,a as e,t as i,b as a,u as o,j as r,f as u,n as w,e as _,g as k,C as $}from"./app.8aa4b24c.js";import{_ as j}from"./AppLayout.1efa32d4.js";import{_ as S}from"./MobileMenu.662e7ca1.js";import"./helper.ba786ff7.js";import{_ as z}from"./DangerButton.456e055e.js";import"./moment.d12846e7.js";import"./DarkmodeToggle.e40511c8.js";import"./label.ebb42013.js";import"./focus-management.79c9a766.js";const B={class:"col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},C={class:"md:hidden relative"},N=["src"],O={class:"absolute inset-0 bg-gradient-to-tl from-gray-50 dark:from-gray-900 via-transparent via-35% flex justify-end items-end rounded-t-3xl"},P={class:"pb-2 pr-5 text-right"},V={class:"font-semibold text-gray-900"},D={class:"text-xs text-gray-700"},I={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},M={class:"flex w-0 flex-1"},R={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},T=e("i",{class:"fa-duotone fa-money-bill-wave text-green-400"},null,-1),J={class:"ml-3"},q=e("div",{class:"text-xs text-gray-500"},"Saldo Rekening",-1),A={class:"text-sm font-medium text-gray-700"},E={class:"-ml-px flex w-0 flex-1"},F={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},K=e("i",{class:"fa-duotone fa-coins text-amber-400"},null,-1),L={class:"ml-3"},U=e("div",{class:"text-xs text-gray-500"},"Poin",-1),G={class:"text-sm font-medium text-gray-700"},H={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},Q={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},W=e("p",{class:"text-sm font-medium text-gray-900"},"Ubah data profil",-1),X=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),Y=e("p",{class:"text-sm font-medium text-gray-900"},"Laporan",-1),Z=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ee=e("p",{class:"text-sm font-medium text-gray-900"},"Daftar harga",-1),te=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),se={class:"block lg:hidden"},ae={class:"text-sm font-medium text-gray-900"},oe={key:0,class:"col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},re={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},ie={class:"-ml-px flex w-0 flex-1"},le={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},de=e("i",{class:"fa-duotone fa-money-bill-1-wave text-green-400"},null,-1),ne={class:"ml-3"},ce=e("div",{class:"text-xs text-gray-500"},"Digiflazz Saldo",-1),ue={class:"text-sm font-medium text-gray-700"},fe={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},ge={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},pe=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan aplikasi",-1),_e=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),he=e("p",{class:"text-sm font-medium text-gray-900"},"Transaksi",-1),me=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),xe=e("p",{class:"text-sm font-medium text-gray-900"},"Carousel",-1),ye=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ve=e("p",{class:"text-sm font-medium text-gray-900"},"Data pengguna",-1),be=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),we=["onSubmit"],Ve={__name:"Index",props:{history:Object,digiflazz_saldo:void 0},setup(h){var f;const m=h;y(()=>{g.reload({only:["digiflazz_saldo"]})});const l=v((f=JSON.parse(localStorage.getItem("darkmode")))!=null?f:!1);b(l,t=>{console.log(`darkmode is ${t}`),localStorage.setItem("darkmode",JSON.stringify(t))});const x=()=>{g.post(route("logout"))};function n(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,c)=>(d(),p(j,{title:"Saya",name:t.$page.props.user.name,desc:t.$page.props.user.email,avatar:t.$page.props.user.profile_photo_url},{default:s(()=>[e("div",B,[e("div",C,[e("img",{src:t.$page.props.user.profile_photo_url,class:"w-full object-cover rounded-t-3xl aspect-video"},null,8,N),e("div",O,[e("div",P,[e("h3",V,i(t.$page.props.user.phone),1),e("p",D,"Akun "+i(t.$page.props.user.role),1)])])]),e("div",null,[e("div",I,[e("div",M,[e("div",R,[T,e("div",J,[q,e("div",A,"Rp "+i(n(t.$page.props.user.wallet_balance)),1)])])]),e("div",E,[e("div",F,[K,e("div",L,[U,e("div",G,i(n(t.$page.props.user.coin)),1)])])])])])]),e("div",H,[e("ul",Q,[e("li",null,[a(o(r),{href:t.route("profile.show"),class:"flex justify-between px-6 py-4"},{default:s(()=>[W,X]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("report.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[Y,Z]),_:1},8,["href"])]),e("li",null,[t.$page.props.user.role_id!=3?(d(),p(o(r),{key:0,href:t.route("pricing.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ee,te]),_:1},8,["href"])):u("",!0)]),e("li",se,[a(o(r),{href:t.route("profile.index"),onClick:c[0]||(c[0]=ke=>l.value=!l.value),class:"flex justify-between px-6 py-4"},{default:s(()=>[e("p",ae,"Mode "+i(l.value?"gelap":"terang"),1),e("i",{class:w(["fa-regular text-gray-900",l.value?"fa-moon":"fa-sun-bright"])},null,2)]),_:1},8,["href"])])])]),t.$page.props.user.role_id==1?(d(),_("div",oe,[e("div",null,[e("div",re,[e("div",ie,[e("div",le,[de,e("div",ne,[ce,e("div",ue,"Rp "+i(n(m.digiflazz_saldo)),1)])])])])])])):u("",!0),t.$page.props.user.role_id==1?(d(),_("div",fe,[e("ul",ge,[e("li",null,[a(o(r),{href:t.route("setting.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[pe,_e]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("transaction.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[he,me]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("carousel.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[xe,ye]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("user.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ve,be]),_:1},8,["href"])])])])):u("",!0),e("form",{method:"POST",onSubmit:$(x,["prevent"])},[a(z,{type:"submit",class:"w-full"},{default:s(()=>[k(" Keluar ")]),_:1})],40,we),a(S)]),_:1},8,["name","desc","avatar"]))}};export{Ve as default};

import{A as m,O as p,d as y,s as x,o as d,c as v,w as s,a as e,t as l,b as a,u as o,m as r,e as n,f as c,n as b,g as w,l as k}from"./app-cf45c446.js";import{_ as $}from"./AppLayout-adfd09bc.js";import{_ as j}from"./MobileMenu-ac3d23f5.js";import"./helper-04030b53.js";import{_ as S}from"./DangerButton-4b0f674a.js";import"./moment-2d7ff460.js";import"./OnlineStatus-f4736be6.js";import"./index-6908da4b.js";import"./DarkmodeToggle-348077f6.js";import"./use-controllable-613ff658.js";import"./bcrypt-dd2d21a0.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-4d654214.js";import"./DialogModal-df3fd5d4.js";import"./PrimaryButton-1685342d.js";import"./InputError-eac2e045.js";import"./focus-management-9cd22a97.js";const z={class:"col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300"},N={class:"md:hidden relative"},O=["src"],B={class:"absolute inset-0 bg-gradient-to-tl from-gray-50 dark:from-gray-900 via-transparent via-35% flex justify-end items-end rounded-t-3xl"},C={class:"pb-2 pr-5 text-right"},P={class:"font-semibold text-gray-900"},V={class:"text-xs text-gray-700"},D={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},I={class:"flex w-0 flex-1"},K={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},M=e("i",{class:"fa-duotone fa-money-bill-wave text-green-400"},null,-1),R={class:"ml-3"},T=e("div",{class:"text-xs text-gray-500"},"Saldo Rekening",-1),A={class:"text-sm font-medium text-gray-700"},J={class:"-ml-px flex w-0 flex-1"},E={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},F=e("i",{class:"fa-duotone fa-coins text-amber-400"},null,-1),L={class:"ml-3"},U=e("div",{class:"text-xs text-gray-500"},"Poin",-1),q={class:"text-sm font-medium text-gray-700"},G={class:"rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-gray-300 overflow-hidden shadow-lg"},H={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},Q=e("p",{class:"text-sm font-medium text-gray-900"},"Ubah data profil",-1),W=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),X={key:0},Y=e("p",{class:"text-sm font-medium text-gray-900"},"Laporan",-1),Z=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ee={key:1},te=e("p",{class:"text-sm font-medium text-gray-900"},"Daftar harga",-1),se=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ae={class:"block lg:hidden"},oe={class:"text-sm font-medium text-gray-900"},re=e("p",{class:"text-sm font-medium text-gray-900"},"Perangkat",-1),ie=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),le={key:0,class:"col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300"},de={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},ne={class:"-ml-px flex w-0 flex-1"},ce={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},ue=e("i",{class:"fa-duotone fa-money-bill-1-wave text-green-400"},null,-1),fe={class:"ml-3"},pe=e("div",{class:"text-xs text-gray-500"},"Digiflazz Saldo",-1),ge={class:"text-sm font-medium text-gray-700"},_e={key:1,class:"rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-gray-300 overflow-hidden shadow-lg"},he={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},me=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan aplikasi",-1),ye=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),xe=e("p",{class:"text-sm font-medium text-gray-900"},"Transaksi",-1),ve=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),be=e("p",{class:"text-sm font-medium text-gray-900"},"Carousel",-1),we=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),ke=e("p",{class:"text-sm font-medium text-gray-900"},"Data pengguna",-1),$e=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),je={class:"rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-gray-300 overflow-hidden shadow-lg"},Se={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},ze=e("p",{class:"text-sm font-medium text-gray-900"},"Ketentuan layanan",-1),Ne=e("p",{class:"text-sm font-medium text-gray-900"},"Kebijakan privasi",-1),Ge={__name:"Index",props:{history:Object,digiflazz_saldo:void 0},setup(g){const _=g;m(()=>{p.reload({only:["digiflazz_saldo"]})});const i=y(!1);typeof window<"u"&&(i.value=JSON.parse(localStorage.getItem("darkmode"))??!1,x(i,t=>{console.log(`darkmode is ${t}`),localStorage.setItem("darkmode",JSON.stringify(t))}));const h=()=>{p.post(route("logout"))};function u(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,f)=>(d(),v($,{title:"Saya",name:t.$page.props.user.name,desc:t.$page.props.user.email,avatar:t.$page.props.user.profile_photo_url},{default:s(()=>[e("div",z,[e("div",N,[e("img",{src:t.$page.props.user.profile_photo_url,class:"w-full object-cover rounded-t-3xl aspect-video",loading:"lazy"},null,8,O),e("div",B,[e("div",C,[e("h3",P,l(t.$page.props.user.phone),1),e("p",V,"Akun "+l(t.$page.props.user.role),1)])])]),e("div",null,[e("div",D,[e("div",I,[e("div",K,[M,e("div",R,[T,e("div",A,"Rp "+l(u(t.$page.props.user.wallet_balance)),1)])])]),e("div",J,[e("div",E,[F,e("div",L,[U,e("div",q,l(u(t.$page.props.user.coin)),1)])])])])])]),e("div",G,[e("ul",H,[e("li",null,[a(o(r),{href:t.route("profile.show"),class:"flex justify-between px-6 py-4"},{default:s(()=>[Q,W]),_:1},8,["href"])]),t.$page.props.user.role_id!=3?(d(),n("li",X,[a(o(r),{href:t.route("report.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[Y,Z]),_:1},8,["href"])])):c("",!0),t.$page.props.user.role_id!=3?(d(),n("li",ee,[a(o(r),{href:t.route("pricing.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[te,se]),_:1},8,["href"])])):c("",!0),e("li",ae,[a(o(r),{href:t.route("profile.index"),onClick:f[0]||(f[0]=Oe=>i.value=!i.value),class:"flex justify-between px-6 py-4"},{default:s(()=>[e("p",oe,"Mode "+l(i.value?"gelap":"terang"),1),e("i",{class:b(["fa-regular text-gray-900",i.value?"fa-moon":"fa-sun-bright"])},null,2)]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("device.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[re,ie]),_:1},8,["href"])])])]),t.$page.props.user.role_id==1?(d(),n("div",le,[e("div",null,[e("div",de,[e("div",ne,[e("div",ce,[ue,e("div",fe,[pe,e("div",ge,"Rp "+l(u(_.digiflazz_saldo)),1)])])])])])])):c("",!0),t.$page.props.user.role_id==1?(d(),n("div",_e,[e("ul",he,[e("li",null,[a(o(r),{href:t.route("setting.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[me,ye]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("transaction.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[xe,ve]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("carousel.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[be,we]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("user.index"),class:"flex justify-between px-6 py-4"},{default:s(()=>[ke,$e]),_:1},8,["href"])])])])):c("",!0),e("div",je,[e("ul",Se,[e("li",null,[a(o(r),{href:t.route("terms.show"),class:"block px-6 py-4"},{default:s(()=>[ze]),_:1},8,["href"])]),e("li",null,[a(o(r),{href:t.route("policy.show"),class:"block px-6 py-4"},{default:s(()=>[Ne]),_:1},8,["href"])])])]),e("form",{method:"POST",onSubmit:k(h,["prevent"])},[a(S,{type:"submit",class:"w-full"},{default:s(()=>[w(" Keluar ")]),_:1})],32),a(j)]),_:1},8,["name","desc","avatar"]))}};export{Ge as default};

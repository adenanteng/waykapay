import{_ as g}from"./AppLayout.2067aa42.js";import{q as f,O as _,d as v,c as l,w as y,o as a,a as e,t as r,e as u,h,n as d,g as x,F as b,f as o}from"./app.673f277f.js";import{h as k}from"./moment.9709ab41.js";import"./vue3-lottie.es.bd249e58.js";import w from"./Loading.e6399854.js";import i from"./PriceList.de464aa2.js";import"./Banner.44611870.js";import"./DarkmodeToggle.5c6e84ec.js";import"./helper.e9fc3b37.js";import"./label.9f8d66fa.js";import"./index.58085856.js";import"./focus-management.ea7ec81f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./moment.228fc364.js";import"./FormatEmoney.e0e83a51.js";import"./FormatPulsa.239e84c5.js";import"./FormatVoucher.d28bbc61.js";import"./FormatGames.7c9b3920.js";import"./FormatTV.b5e6ff73.js";import"./FormatPln.c2503db3.js";const S={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},D={class:"flex w-full items-center justify-between space-x-6 p-6"},P={class:"flex-1 truncate"},V=e("div",{class:"flex items-center space-x-3"},[e("h3",{class:"truncate text-sm text-gray-600"},"Total Produk")],-1),M={class:"mt-1 truncate text-sm font-medium text-gray-900"},N=e("i",{class:"fa-duotone fa-cube text-green-600 text-3xl flex-shrink-0"},null,-1),E={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},C={class:"flex w-0 flex-1"},H={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},L={class:"ml-3"},T=e("div",{class:"text-xs text-gray-500"},"Harga per tanggal",-1),A={class:"text-sm font-medium text-gray-700"},B={class:"grid sm:grid-cols-6 gap-5"},O={class:"sm:col-span-2"},G={class:"bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg"},$={class:"px-3 py-5 grid gap-3"},j=e("h3",{class:"font-semibold text-gray-900 ml-2"}," Produk Prabayar ",-1),F=["onClick"],I={key:1,class:"grid sm:col-span-4 gap-5"},pe={__name:"Index",props:{product_count:void 0,pulsa:void 0,data:void 0,emoney:void 0,voucher:void 0,games:void 0,tv:void 0,pln:void 0},setup(c){const s=c;f(()=>{_.reload({only:["product_count","pulsa","data","emoney","voucher","games","tv","pln"]})});function m(){return k().format("DD MMM Y HH:mm")}const t=v("Semua"),p=[{name:"Semua",slug:null,icon:"fa-cube"},{name:"Pulsa",slug:"pulsa",icon:"fa-mobile"},{name:"Data",slug:"pulsa",icon:"fa-mobile"},{name:"E-Money",slug:"emoney",icon:"fa-wallet"},{name:"Voucher",slug:"voucher",icon:"fa-ticket"},{name:"Games",slug:"games",icon:"fa-gamepad-modern"},{name:"TV",slug:"tv",icon:"fa-tv-retro"},{name:"PLN",slug:"pln",icon:"fa-lightbulb"}];return(U,Y)=>(a(),l(g,{title:"Daftar Harga",name:"Daftar Harga",desc:"Daftar harga produk per"},{default:y(()=>[e("div",S,[e("div",D,[e("div",P,[V,e("p",M,r(s.product_count),1)]),N]),e("div",null,[e("div",E,[e("div",C,[e("div",H,[e("div",L,[T,e("div",A,r(m()),1)])])])])])]),e("div",B,[e("div",O,[e("div",G,[e("div",$,[j,(a(),u(b,null,h(p,(n,q)=>e("button",{key:n.id,onClick:z=>t.value=n.name},[e("div",{class:d(["rounded-3xl py-3 px-5 text-left",t.value==n.name?"bg-primary-600 text-white":"bg-gray-200 text-gray-900"])},[e("i",{class:d(["fa-duotone mr-1 w-5",n.icon])},null,2),x(" "+r(n.name),1)],2)],8,F)),64))])])]),s.pulsa===void 0?(a(),l(w,{key:0})):(a(),u("div",I,[t.value=="Pulsa"||t.value=="Semua"?(a(),l(i,{key:0,title:"PULSA",slug:"pulsa",list:s.pulsa},null,8,["list"])):o("",!0),t.value=="Data"||t.value=="Semua"?(a(),l(i,{key:1,title:"DATA",slug:"pulsa",list:s.data},null,8,["list"])):o("",!0),t.value=="E-Money"||t.value=="Semua"?(a(),l(i,{key:2,title:"E-MONEY",slug:"emoney",list:s.emoney},null,8,["list"])):o("",!0),t.value=="Voucher"||t.value=="Semua"?(a(),l(i,{key:3,title:"VOUCHER",slug:"voucher",list:s.voucher},null,8,["list"])):o("",!0),t.value=="Games"||t.value=="Semua"?(a(),l(i,{key:4,title:"GAMES",slug:"games",list:s.games},null,8,["list"])):o("",!0),t.value=="TV"||t.value=="Semua"?(a(),l(i,{key:5,title:"TV",slug:"tv",list:s.tv},null,8,["list"])):o("",!0),t.value=="PLN"||t.value=="Semua"?(a(),l(i,{key:6,title:"PLN",slug:"pln",list:s.pln},null,8,["list"])):o("",!0)]))])]),_:1}))}};export{pe as default};

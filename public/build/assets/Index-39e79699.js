import{_ as g}from"./AppLayout-638f85fe.js";import{z as _,O as f,d as v,o as a,c as l,w as y,a as e,t as r,e as d,h,n as u,g as x,F as b,b as k,f as o}from"./app-728a484a.js";import{h as w}from"./moment-fbc5633a.js";import S from"./Loading-df78fd99.js";import i from"./PriceList-6762f318.js";import"./OnlineStatus-370cf964.js";import"./index-d784b98d.js";import"./DarkmodeToggle-db43c228.js";import"./use-controllable-79c85669.js";import"./focus-management-dc02e435.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-50827259.js";import"./FormatEmoney-836f3a6e.js";import"./FormatPulsa-2e04fe1c.js";import"./FormatVoucher-88030dcc.js";import"./FormatGames-892b5586.js";import"./FormatTV-81854eed.js";import"./FormatPln-a546ab98.js";const D={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},V={class:"flex w-full items-center justify-between space-x-6 p-6"},N={class:"flex-1 truncate"},P=e("div",{class:"flex items-center space-x-3"},[e("h3",{class:"truncate text-sm text-gray-600"},"Total Produk")],-1),M={class:"mt-1 truncate text-sm font-medium text-gray-900"},E=e("i",{class:"fa-duotone fa-cube text-green-600 text-3xl flex-shrink-0"},null,-1),C={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},H={class:"flex w-0 flex-1"},L={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},T={class:"ml-3"},A=e("div",{class:"text-xs text-gray-500"},"Harga per tanggal",-1),B={class:"text-sm font-medium text-gray-700"},O={class:"grid sm:grid-cols-6 gap-5"},G={class:"sm:col-span-2"},$={class:"bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg"},j={class:"px-3 py-5 grid gap-3"},z=e("h3",{class:"font-semibold text-gray-900 ml-2"}," Produk Prabayar ",-1),F=["onClick"],I={key:0},U={key:1,class:"grid sm:col-span-4 gap-5"},pe={__name:"Index",props:{product_count:void 0,pulsa:void 0,data:void 0,emoney:void 0,voucher:void 0,games:void 0,tv:void 0,pln:void 0},setup(c){const s=c;_(()=>{f.reload({only:["product_count","pulsa","data","emoney","voucher","games","tv","pln"]})});function m(){return w().format("DD MMM Y HH:mm")}const t=v("Semua"),p=[{name:"Semua",slug:null,icon:"fa-cube"},{name:"Pulsa",slug:"pulsa",icon:"fa-mobile"},{name:"Data",slug:"pulsa",icon:"fa-mobile"},{name:"E-Money",slug:"emoney",icon:"fa-wallet"},{name:"Voucher",slug:"voucher",icon:"fa-ticket"},{name:"Games",slug:"games",icon:"fa-gamepad-modern"},{name:"TV",slug:"tv",icon:"fa-tv-retro"},{name:"PLN",slug:"pln",icon:"fa-lightbulb"}];return(Y,R)=>(a(),l(g,{title:"Daftar Harga",name:"Daftar Harga",desc:"Daftar harga produk prabayar"},{default:y(()=>[e("div",D,[e("div",V,[e("div",N,[P,e("p",M,r(s.product_count),1)]),E]),e("div",null,[e("div",C,[e("div",H,[e("div",L,[e("div",T,[A,e("div",B,r(m()),1)])])])])])]),e("div",O,[e("div",G,[e("div",$,[e("div",j,[z,(a(),d(b,null,h(p,(n,q)=>e("button",{key:n.id,onClick:J=>t.value=n.name},[e("div",{class:u(["rounded-3xl py-3 px-5 text-left",t.value==n.name?"bg-primary-600 text-white":"bg-gray-200 text-gray-900"])},[e("i",{class:u(["fa-duotone mr-1 w-5",n.icon])},null,2),x(" "+r(n.name),1)],2)],8,F)),64))])])]),s.pulsa===void 0?(a(),d("div",I,[k(S)])):(a(),d("div",U,[t.value=="Pulsa"||t.value=="Semua"?(a(),l(i,{key:0,title:"PULSA",slug:"pulsa",list:s.pulsa},null,8,["list"])):o("",!0),t.value=="Data"||t.value=="Semua"?(a(),l(i,{key:1,title:"DATA",slug:"pulsa",list:s.data},null,8,["list"])):o("",!0),t.value=="E-Money"||t.value=="Semua"?(a(),l(i,{key:2,title:"E-MONEY",slug:"emoney",list:s.emoney},null,8,["list"])):o("",!0),t.value=="Voucher"||t.value=="Semua"?(a(),l(i,{key:3,title:"VOUCHER",slug:"voucher",list:s.voucher},null,8,["list"])):o("",!0),t.value=="Games"||t.value=="Semua"?(a(),l(i,{key:4,title:"GAMES",slug:"games",list:s.games},null,8,["list"])):o("",!0),t.value=="TV"||t.value=="Semua"?(a(),l(i,{key:5,title:"TV",slug:"tv",list:s.tv},null,8,["list"])):o("",!0),t.value=="PLN"||t.value=="Semua"?(a(),l(i,{key:6,title:"PLN",slug:"pln",list:s.pln},null,8,["list"])):o("",!0)]))])]),_:1}))}};export{pe as default};

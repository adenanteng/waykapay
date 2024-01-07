import{_ as g}from"./AppLayout-d30f150e.js";import{z as b,O as x,o as s,c as f,w as p,a as t,e as u,h as v,t as n,g as d,n as h,F as N,b as y}from"./app-7c13986d.js";import"./moment-fbc5633a.js";import{_ as k}from"./PrimaryButton-824be08c.js";import"./OnlineStatus-0b061dc3.js";import"./index-b0ffd0cf.js";import"./DarkmodeToggle-c18a0703.js";import"./use-controllable-c87dad92.js";import"./bcrypt-36c5e2d8.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-853f1519.js";import"./DialogModal-0f828a96.js";import"./InputError-13b33243.js";import"./focus-management-1bf0c644.js";const w={class:"mt-2 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 overflow-hidden rounded-3xl bg-white bg-opacity-50 backdrop-blur border border-gray-300 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x"},T={class:"text-sm font-normal text-gray-900"},R={class:"mt-1 flex items-end justify-between md:block lg:flex"},S={class:"grid items-baseline text-lg font-semibold text-primary-600"},M={class:"text-xs font-medium text-gray-500"},B={key:0,class:"mr-2 text-xs text-green-500 fa-regular fa-arrow-up"},z={key:1,class:"mr-2 text-xs text-red-500 fa-regular fa-arrow-down"},F=t("i",{class:"fa-duotone fa-arrow-right ml-2"},null,-1),H={__name:"Index",props:{trx:void 0,amount:void 0,gross_amount:void 0,prev_trx:void 0,prev_amount:void 0,prev_gross_amount:void 0},setup(c){const e=c;b(()=>{x.reload({only:["trx","amount","gross_amount","prev_trx","prev_amount","prev_gross_amount"]})});let o=Number(e.gross_amount)-Number(e.amount),m=Number(e.prev_gross_amount)-Number(e.prev_amount);const l=[{name:"Total Keuntungan",stat:"Rp "+r(o),previousStat:"Rp "+r(m),change:"Rp "+r(Math.round(Number(o)-Number(m))),changeType:Number(o)>=Number(m)?"increase":"decrease"},{name:"Transaksi Sukses",stat:e.trx,previousStat:e.prev_trx,change:Math.round(Number(e.trx)-Number(e.prev_trx)),changeType:Number(e.trx)>=Number(e.prev_trx)?"increase":"decrease"},{name:"Modal",stat:"Rp "+r(Number(e.amount)),previousStat:"Rp "+r(Number(e.prev_amount)),change:"Rp "+r(Math.round(Number(e.amount)-Number(e.prev_amount))),changeType:Number(e.amount)>=Number(e.prev_amount)?"increase":"decrease"},{name:"Omzet",stat:"Rp "+r(Number(e.gross_amount)),previousStat:"Rp "+r(Number(e.prev_gross_amount)),change:"Rp "+r(Math.round(Number(e.gross_amount)-Number(e.prev_gross_amount))),changeType:Number(e.gross_amount)>=Number(e.prev_gross_amount)?"increase":"decrease"}];function r(i){return(i/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(i,_)=>(s(),f(g,{title:"Transaksi",name:"Transaksi",desc:"Riwayat transaksi semua pengguna"},{default:p(()=>[t("div",null,[t("dl",w,[(s(),u(N,null,v(l,a=>t("div",{key:a.name,class:"px-4 py-5 sm:p-6"},[t("dt",T,n(a.name),1),t("dd",R,[t("div",S,[d(n(a.stat)+" ",1),t("span",M,"dari "+n(a.previousStat),1)]),t("div",{class:h([a.changeType==="increase"?"bg-green-100 text-green-800":"bg-red-100 text-red-800","inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"])},[a.changeType==="increase"?(s(),u("i",B)):(s(),u("i",z)),d(" "+n(a.change),1)],2)])])),64))])]),y(k,{as:"a",href:i.route("transaction.detail"),class:""},{default:p(()=>[d(" Lihat Detail Transaksi "),F]),_:1},8,["href"])]),_:1}))}};export{H as default};

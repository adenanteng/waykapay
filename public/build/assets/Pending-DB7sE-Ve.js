import{D as l,T as p,k as d,o as f,c as u,w as n,Q as m,a as e,b as s,u as h,g as _}from"./app-CaR_YMvJ.js";import"./moment-Cl4UOzQZ.js";import{_ as x}from"./BlankLayout-CXxzhYqA.js";import{_ as g}from"./PrimaryButton-XpxRpvCD.js";import{A as w}from"./ApplicationLogoTitle-By4fa0rc.js";import{V as k}from"./vue3-lottie.es-aHRfLCRM.js";import{P as v,E as b}from"./echo-Bm584l7I.js";import"./OnlineStatus-CYP1rC9a.js";import"./helper-Dp3OpoYX.js";import"./BackgroundParticle-BaXRgoMO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"pt-16 pb-12"},B={class:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"},j={class:"flex flex-shrink-0 justify-center"},E={class:"mt-5"},P={class:"text-center justify-center"},T={class:"px-4 sm:px-6 text-center text-gray-900 text-sm"},V=e("div",{class:""},[e("h1",{class:"text-lg font-bold tracking-tight text-gray-900"},"Transaksi Sedang Diproses"),e("p",{class:"text-gray-500 text-sm"},"Kamu bisa kembali ke Beranda tanpa harus menunggu proses transaksi")],-1),N={class:"mt-5 space-x-2"},U={__name:"Pending",props:{transaction:Object},setup(r){const c=r;l(()=>{window.Echo.leave("transaction-channel")});const o=p({transaction:c.transaction}),{...i}=d(()=>m().props.user).value;return typeof window<"u"&&(window.Pusher=v,window.Echo=new b({broadcaster:"pusher",key:"e4c42e8e3951c6ee37f6",cluster:"ap1",forceTLS:!0}),window.Echo.channel("transaction-channel").listen(".transaction-event",function(t){t.action==="reload"&&t.user===i.slug?(o.get(route("product.status",o),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{}}),console.log(t.action,t.user)):console.log(t)})),(a,t)=>(f(),u(x,{title:"Pending"},{default:n(()=>[e("div",y,[e("main",B,[e("div",j,[s(w)]),e("div",E,[e("div",P,[e("div",T,[s(h(k),{"animation-link":"https://lottie.host/6fea85f2-ef6f-4d4b-aac5-6e9ef6521950/iNhXM2CBCy.json",height:200,width:200})]),V,e("div",N,[s(g,{as:"a",href:a.route("dashboard")},{default:n(()=>[_(" Ke Beranda ")]),_:1},8,["href"])])])])])])]),_:1}))}};export{U as default};

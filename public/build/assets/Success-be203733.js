import{T as i,z as c,o as n,c as l,w as e,a as t,b as a,g as _}from"./app-a082e4a3.js";import"./index-ab6210c8.js";import{_ as d}from"./SecondaryButton-bbda840b.js";import"./moment-fbc5633a.js";import{_ as m}from"./BlankLayout-c86e7c40.js";import{A as x}from"./ApplicationLogoTitle-df787482.js";import"./OnlineStatus-e706e782.js";import"./_plugin-vue_export-helper-c27b6911.js";const p={class:"pt-16 pb-12"},f={class:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"},h={class:"flex flex-shrink-0 justify-center"},u={class:"mt-5"},g={class:"text-center justify-center"},k=t("div",{class:"px-4 sm:px-6 text-center text-gray-900 text-sm"},null,-1),w=t("h1",{class:"text-lg font-bold tracking-tight text-gray-900"},"Transaksi Berhasil",-1),y=t("p",{class:"text-gray-500 text-sm"},"Kamu akan dialihkan dalam ",-1),v={class:"mt-5 space-x-2"},b=t("i",{class:"fa-regular fa-arrow-right ml-1 text-xs"},null,-1),z={__name:"Success",props:{transaction:Object},setup(o){const s=o;return i({transaction:s.transaction}),c(()=>{setTimeout(()=>route("history.show",s.transaction),500)}),(r,B)=>(n(),l(m,{title:"Sukses"},{default:e(()=>[t("div",p,[t("main",f,[t("div",h,[a(x)]),t("div",u,[t("div",g,[k,w,y,t("div",v,[a(d,{as:"a",href:r.route("dashboard")},{default:e(()=>[_(" Ke Beranda "),b]),_:1},8,["href"])])])])])])]),_:1}))}};export{z as default};
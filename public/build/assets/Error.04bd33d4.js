import{T as r,c as i,w as a,o as n,a as t,b as o,t as l,g as _}from"./app.7cbcdd66.js";import"./helper.e9fc3b37.js";import"./moment.9709ab41.js";import{_ as d}from"./BlankLayout.5bf7066d.js";import{_ as p}from"./PrimaryButton.5d95d83a.js";import{A as m}from"./ApplicationLogo.f4b0866b.js";import"./Banner.8a52fb81.js";import"./_plugin-vue_export-helper.cdc0426e.js";const f={class:"pt-16 pb-12"},x={class:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"},h={class:"flex flex-shrink-0 justify-center"},g={class:"mt-5"},u={class:"text-center"},v=t("h1",{class:"text-lg font-bold tracking-tight text-gray-900"},"Transaksi Gagal",-1),b={class:""},k={class:"text-sm text-gray-900"},w={class:"mt-5 space-x-2"},C={__name:"Error",props:{transaction:Object},setup(e){const s=e;return r({transaction:s.transaction}),(c,y)=>(n(),i(d,{title:"Gagal"},{default:a(()=>[t("div",f,[t("main",x,[t("div",h,[o(m)]),t("div",g,[t("div",u,[v,t("div",b,[t("div",k,l(s.transaction.desc),1)]),t("div",w,[o(p,{as:"a",href:c.route("dashboard")},{default:a(()=>[_(" Ke Beranda ")]),_:1},8,["href"])])])])])])]),_:1}))}};export{C as default};
import{v as n,c as l,w as s,o as _,a as t,b as a,t as d,g as o}from"./app.bf86767c.js";import"./helper.021f7452.js";import"./moment.9709ab41.js";import{_ as f,A as p}from"./ApplicationLogo.ba07293d.js";import{_ as c}from"./PrimaryButton.959c340e.js";import"./_plugin-vue_export-helper.cdc0426e.js";const m={class:"pt-16 pb-12"},x={class:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"},h={class:"flex flex-shrink-0 justify-center"},u={class:"mt-5"},g={class:"text-center"},v=t("h1",{class:"text-2xl font-bold tracking-tight text-gray-900"},"Transaksi Gagal",-1),b={class:""},k={class:"text-sm text-gray-900"},y={class:"mt-5 space-x-2"},K={__name:"Error",props:{transaction:Object},setup(r){const e=r;return n({transaction:e.transaction}),(i,w)=>(_(),l(f,{title:"Gagal"},{default:s(()=>[t("div",m,[t("main",x,[t("div",h,[a(p)]),t("div",u,[t("div",g,[v,t("div",b,[t("div",k,d(e.transaction.desc),1)]),t("div",y,[a(c,{as:"a",href:i.route("dashboard")},{default:s(()=>[o(" Ke Beranda ")]),_:1},8,["href"]),a(c,{onclick:"history.back();return false;",replace:""},{default:s(()=>[o(" Kembali ")]),_:1})])])])])])]),_:1}))}};export{K as default};

import{J as i,T as l,o as d,c as _,w as s,a as t,b as o,g as p}from"./app-4085e221.js";import"./index-9efacde3.js";import"./moment-fbc5633a.js";import{_ as m}from"./BlankLayout-808201b1.js";import{_ as f}from"./PrimaryButton-cbca2869.js";import{A as x}from"./ApplicationLogoTitle-df591a8a.js";import"./OnlineStatus-29f96179.js";import"./_plugin-vue_export-helper-c27b6911.js";const u={class:"pt-16 pb-12"},h={class:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"},g={class:"flex flex-shrink-0 justify-center"},v={class:"mt-5"},b={class:"text-center justify-center"},k=t("div",{class:"px-4 sm:px-6 text-center text-gray-900 text-sm"},null,-1),w=t("h1",{class:"text-lg font-bold tracking-tight text-gray-900"},"Transaksi Sedang Diproses",-1),y={class:"mt-5 space-x-2"},$={__name:"Pending",props:{transaction:Object},setup(a){const r=a;i(()=>{clearInterval(n)});const n=setInterval(()=>{e.get(route("product.status",e),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{}})},5e3),e=l({transaction:r.transaction});return(c,B)=>(d(),_(m,{title:"Pending"},{default:s(()=>[t("div",u,[t("main",h,[t("div",g,[o(x)]),t("div",v,[t("div",b,[k,w,t("div",y,[o(f,{as:"a",href:c.route("dashboard")},{default:s(()=>[p(" Ke Beranda ")]),_:1},8,["href"])])])])])])]),_:1}))}};export{$ as default};
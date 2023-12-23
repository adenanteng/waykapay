import{T as b,d as f,s as p,o as y,e as _,b as r,w as a,a as d,F as v,g as t,u as i,n as k}from"./app-6225c7d0.js";import{_ as g}from"./ActionMessage-a2d1c3ec.js";import{_ as $}from"./FormSection-79798c47.js";import{_ as w}from"./InputError-a2b2fe7f.js";import{_ as j}from"./InputLabel-222787c7.js";import{_ as C}from"./PrimaryButton-01c9d676.js";import{_ as x}from"./TextInput-523969a4.js";import{m as S}from"./moment-5e02ce38.js";import{_ as l}from"./SecondaryButton-b813c1fa.js";import"./SectionTitle-a11d7407.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={class:"col-span-6 sm:col-span-3"},V={class:"flex"},F=d("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),I={class:"grid grid-cols-3 lg:grid-cols-6 gap-3"},K={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String},setup(N){const n=b({amount:null}),c=()=>{n.amount=o.value.replaceAll(".",""),n.post(route("deposit.method"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{}})},u=S().format("HH"),o=f(null);return p(o,m=>{o.value=m.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")}),(m,e)=>(y(),_(v,null,[r($,{onSubmitted:c},{title:a(()=>[t(" Mau isi saldo berapa? ")]),description:a(()=>[]),form:a(()=>[d("div",B,[r(j,{for:"amount",value:"Jumlah Saldo"}),d("div",V,[F,r(x,{id:"amount",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),type:"tel",class:"mt-1 block w-full rounded-l-none",min:"1",max:"5000000",required:"",autofocus:""},null,8,["modelValue"])]),r(w,{message:i(n).errors.amount,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[r(g,{on:i(n).recentlySuccessful,class:"mr-3"},{default:a(()=>[t(" Berhasil disimpan. ")]),_:1},8,["on"]),r(g,{on:i(u)>=23,class:"mr-3"},{default:a(()=>[t(" Sistem cut off. ")]),_:1},8,["on"]),r(C,{class:k({"opacity-25":i(n).processing}),disabled:i(n).processing||i(u)>=23},{default:a(()=>[t(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1}),d("div",I,[r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[1]||(e[1]=s=>o.value=1e4)},{default:a(()=>[t("10.000")]),_:1}),r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[2]||(e[2]=s=>o.value=5e4)},{default:a(()=>[t("50.000")]),_:1}),r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[3]||(e[3]=s=>o.value=1e5)},{default:a(()=>[t("100.000")]),_:1}),r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[4]||(e[4]=s=>o.value=15e4)},{default:a(()=>[t("150.000")]),_:1}),r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[5]||(e[5]=s=>o.value=2e5)},{default:a(()=>[t("200.000")]),_:1}),r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[6]||(e[6]=s=>o.value=5e5)},{default:a(()=>[t("500.000")]),_:1}),r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[7]||(e[7]=s=>o.value=1e6)},{default:a(()=>[t("1.000.000")]),_:1}),r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[8]||(e[8]=s=>o.value=2e6)},{default:a(()=>[t("2.000.000")]),_:1}),r(l,{class:"border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50",onClick:e[9]||(e[9]=s=>o.value=5e6)},{default:a(()=>[t("5.000.000")]),_:1})])],64))}};export{K as default};

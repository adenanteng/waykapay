import{v as _,e as d,b as t,w as s,F as u,o as f,a as o,t as p,g as r,u as a,n as b}from"./app.9d5643f2.js";import{_ as x}from"./ActionMessage.1cb69b0a.js";import{_ as g}from"./FormSection.1267418c.js";import{_ as h}from"./InputError.2b837794.js";import{_ as k}from"./InputLabel.f444380d.js";import{_ as v}from"./PrimaryButton.b7a03604.js";import{_ as y}from"./TextInput.a69eb98a.js";import{_ as S}from"./ActionSection.d600ce98.js";import"./SectionTitle.9fc43af2.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"flex items-center px-2"},$={class:"flex-shrink-0"},V=["src","alt"],B={class:"ml-3 min-w-0 flex-1"},N=o("div",{class:"text-base font-medium text-gray-800 truncate capitalize"}," John Doe ",-1),j={class:"text-sm font-medium text-gray-500 truncate"},F={class:"col-span-6 sm:col-span-3"},I={class:"flex"},O=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),A={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String,bank:Object,account_no:String},setup(c){const n=c,e=_({amount:null,bank:n.bank,account_no:n.account_no}),m=()=>{e.post(route("money-transfer.confirm",e),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})};return(z,i)=>(f(),d(u,null,[t(S,null,{title:s(()=>[]),description:s(()=>[]),content:s(()=>[o("div",w,[o("div",$,[o("img",{class:"h-5 w-full",src:n.bank.logo,alt:n.bank.name},null,8,V)]),o("div",B,[N,o("div",j,p(n.account_no),1)])])]),_:1}),t(g,{onSubmitted:m},{title:s(()=>[r(" Mau Transfer berapa? ")]),description:s(()=>[]),form:s(()=>[o("div",F,[t(k,{for:"amount",value:"Nominal"}),o("div",I,[O,t(y,{id:"amount",modelValue:a(e).amount,"onUpdate:modelValue":i[0]||(i[0]=l=>a(e).amount=l),type:"number",class:"mt-1 block w-full rounded-l-none",min:"10000",max:"5000000",required:""},null,8,["modelValue"])]),t(h,{message:a(e).errors.amount,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[t(x,{on:a(e).recentlySuccessful,class:"mr-3"},{default:s(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),t(v,{class:b({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:s(()=>[r(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1})],64))}};export{A as default};
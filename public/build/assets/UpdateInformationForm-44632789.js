import{T as l,o as c,c as d,w as s,g as r,a as t,b as a,u as e,n as u}from"./app-a082e4a3.js";import{_ as p}from"./ActionMessage-289a9222.js";import{_}from"./FormSection-d6460505.js";import{_ as f}from"./InputError-76f9bff6.js";import{_ as b}from"./InputLabel-8404d542.js";import{_ as g}from"./PrimaryButton-58cb756a.js";import{_ as x}from"./TextInput-1d1a4a50.js";import"./SectionTitle-d627e35c.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={class:"col-span-6 sm:col-span-3"},S={class:"flex"},V=t("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),T={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String},setup($){const o=l({amount:null}),m=()=>{o.post(route("deposit.method"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{}})};return(w,n)=>(c(),d(_,{onSubmitted:m},{title:s(()=>[r(" Mau isi saldo berapa? ")]),description:s(()=>[]),form:s(()=>[t("div",h,[a(b,{for:"amount",value:"Jumlah Saldo"}),t("div",S,[V,a(x,{id:"amount",modelValue:e(o).amount,"onUpdate:modelValue":n[0]||(n[0]=i=>e(o).amount=i),type:"number",class:"mt-1 block w-full rounded-l-none",min:"10000",max:"5000000",required:"",autofocus:""},null,8,["modelValue"])]),a(f,{message:e(o).errors.amount,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[a(p,{on:e(o).recentlySuccessful,class:"mr-3"},{default:s(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),a(g,{class:u({"opacity-25":e(o).processing}),disabled:e(o).processing},{default:s(()=>[r(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1}))}};export{T as default};
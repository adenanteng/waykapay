import{v as l,c,w as o,o as d,g as r,a as t,b as a,u as e,n as u}from"./app.d6646a40.js";import{_ as p}from"./ActionMessage.55bc29f6.js";import{_}from"./FormSection.da1e161a.js";import{_ as f}from"./InputError.ad2d4b93.js";import{_ as b}from"./InputLabel.a1e9f9f0.js";import{_ as g}from"./PrimaryButton.38a81f04.js";import{_ as x}from"./TextInput.baffb460.js";import"./SectionTitle.0471b0ec.js";import"./_plugin-vue_export-helper.cdc0426e.js";const h={class:"col-span-6 sm:col-span-3"},S={class:"flex"},V=t("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),U={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String},setup($){const s=l({amount:null}),m=()=>{s.post(route("deposit.method",s),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})};return(v,n)=>(d(),c(_,{onSubmitted:m},{title:o(()=>[r(" Mau isi saldo berapa? ")]),description:o(()=>[]),form:o(()=>[t("div",h,[a(b,{for:"amount",value:"Jumlah Saldo"}),t("div",S,[V,a(x,{id:"amount",modelValue:e(s).amount,"onUpdate:modelValue":n[0]||(n[0]=i=>e(s).amount=i),type:"number",class:"mt-1 block w-full rounded-l-none",min:"10000",max:"9999999",required:""},null,8,["modelValue"])]),a(f,{message:e(s).errors.amount,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[a(p,{on:e(s).recentlySuccessful,class:"mr-3"},{default:o(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),a(g,{class:u({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:o(()=>[r(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1}))}};export{U as default};

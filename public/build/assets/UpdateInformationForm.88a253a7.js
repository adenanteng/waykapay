import{v as i,c as l,w as o,o as c,g as r,a as u,b as e,u as a,n as p}from"./app.521c5d0a.js";import{_}from"./ActionMessage.fe61acdd.js";import{_ as f}from"./FormSection.26b96267.js";import{_ as d}from"./InputError.a0284d34.js";import{_ as b}from"./InputLabel.d598c18f.js";import{_ as g}from"./PrimaryButton.d9eae9d0.js";import{_ as S}from"./TextInput.e5b72897.js";import"./SectionTitle.eeca093f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-3"},C={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String},setup($){const s=i({amount:null}),m=()=>{s.post(route("deposit.method",s),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})};return(x,t)=>(c(),l(f,{onSubmitted:m},{title:o(()=>[r(" Mau isi saldo berapa? ")]),description:o(()=>[]),form:o(()=>[u("div",V,[e(b,{for:"amount",value:"Jumlah Saldo"}),e(S,{id:"amount",modelValue:a(s).amount,"onUpdate:modelValue":t[0]||(t[0]=n=>a(s).amount=n),type:"number",class:"mt-1 block w-full",min:"1",max:"9999999",required:""},null,8,["modelValue"]),e(d,{message:a(s).errors.amount,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[e(_,{on:a(s).recentlySuccessful,class:"mr-3"},{default:o(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),e(g,{class:p({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:o(()=>[r(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1}))}};export{C as default};

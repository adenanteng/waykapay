import{T as _,o as z,c as p,w as i,g as l,a as n,b as s,u as a,n as g}from"./app-05d758bc.js";import{_ as y}from"./ActionMessage-a3033dc7.js";import{_ as k}from"./FormSection-e9e6d713.js";import{_ as m}from"./InputError-8c45caab.js";import{_ as d}from"./InputLabel-c825c03d.js";import{_ as V}from"./PrimaryButton-66de76dc.js";import{_ as f}from"./TextInput-95a34907.js";import"./SectionTitle-d5bf7a8b.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"col-span-6"},x={class:"col-span-6"},N={__name:"UpdateApiDigiflazzForm",props:{setting:Object},setup(c){const r=c,e=_({digiflazz_username:r.setting.digiflazz_username??null,digiflazz_key:r.setting.digiflazz_key??null}),u=()=>{e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0})};return(S,t)=>(z(),p(k,{onSubmitted:u},{title:i(()=>[l(" API Digiflazz ")]),description:i(()=>[l(" Informasi autentikasi API Digiflazz ")]),form:i(()=>[n("div",b,[s(d,{for:"digiflazzUsername",value:"Username"}),s(f,{id:"digiflazzUsername",modelValue:a(e).digiflazz_username,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).digiflazz_username=o),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(m,{message:a(e).errors.digiflazz_username,class:"mt-2"},null,8,["message"])]),n("div",x,[s(d,{for:"digiflazzKey",value:"Key"}),s(f,{id:"digiflazzKey",modelValue:a(e).digiflazz_key,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).digiflazz_key=o),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(m,{message:a(e).errors.digiflazz_key,class:"mt-2"},null,8,["message"])])]),actions:i(()=>[s(y,{on:a(e).recentlySuccessful,class:"mr-3"},{default:i(()=>[l(" Berhasil disimpan. ")]),_:1},8,["on"]),s(V,{class:g({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:i(()=>[l(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{N as default};
import{v as z,c as g,w as i,o as y,g as t,a as d,b as a,u as s,n as k}from"./app.da6f37b1.js";import{_ as V}from"./ActionMessage.6c837b6b.js";import{_ as b}from"./FormSection.60918f8b.js";import{_ as f}from"./InputError.386753fc.js";import{_ as c}from"./InputLabel.10355358.js";import{_ as v}from"./PrimaryButton.4cb68018.js";import{_ as u}from"./TextInput.43ca6f22.js";import"./SectionTitle.aa04cfd5.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},C={__name:"UpdateApiDigiflazzForm",props:{setting:Object},setup(_){var n,m;const r=_,e=z({digiflazz_username:(n=r.setting.digiflazz_username)!=null?n:null,digiflazz_key:(m=r.setting.digiflazz_key)!=null?m:null}),p=()=>{e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0})};return(U,l)=>(y(),g(b,{onSubmitted:p},{title:i(()=>[t(" API Digiflazz ")]),description:i(()=>[t(" Informasi autentikasi API Digiflazz ")]),form:i(()=>[d("div",x,[a(c,{for:"digiflazzUsername",value:"Username"}),a(u,{id:"digiflazzUsername",modelValue:s(e).digiflazz_username,"onUpdate:modelValue":l[0]||(l[0]=o=>s(e).digiflazz_username=o),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(f,{message:s(e).errors.digiflazz_username,class:"mt-2"},null,8,["message"])]),d("div",S,[a(c,{for:"digiflazzKey",value:"Key"}),a(u,{id:"digiflazzKey",modelValue:s(e).digiflazz_key,"onUpdate:modelValue":l[1]||(l[1]=o=>s(e).digiflazz_key=o),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(f,{message:s(e).errors.digiflazz_key,class:"mt-2"},null,8,["message"])])]),actions:i(()=>[a(V,{on:s(e).recentlySuccessful,class:"mr-3"},{default:i(()=>[t(" Berhasil disimpan. ")]),_:1},8,["on"]),a(v,{class:k({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[t(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{C as default};
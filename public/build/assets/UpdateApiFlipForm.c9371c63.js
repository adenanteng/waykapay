import{v as g,c as k,w as o,o as S,g as a,a as m,b as t,u as s,n as V}from"./app.54eee8d4.js";import{_ as b}from"./ActionMessage.1648889a.js";import{_ as v}from"./FormSection.acbf6ada.js";import{_ as c}from"./InputError.39e5e847.js";import{_ as f}from"./InputLabel.bf7ba011.js";import{_ as x}from"./PrimaryButton.233caa21.js";import{_}from"./TextInput.4e322937.js";import"./SectionTitle.a6783e0f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F={class:"col-span-6"},$={class:"col-span-6"},P={__name:"UpdateApiFlipForm",props:{setting:Object},setup(u){var n,p;const r=u,e=g({flip_secret:(n=r.setting.flip_secret)!=null?n:null,flip_token:(p=r.setting.flip_token)!=null?p:null}),d=()=>{e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0})};return(B,l)=>(S(),k(v,{onSubmitted:d},{title:o(()=>[a(" API Flip ")]),description:o(()=>[a(" Informasi autentikasi API Flip ")]),form:o(()=>[m("div",F,[t(f,{for:"flipSecret",value:"Flip Secret"}),t(_,{id:"flipSecret",modelValue:s(e).flip_secret,"onUpdate:modelValue":l[0]||(l[0]=i=>s(e).flip_secret=i),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(c,{message:s(e).errors.flip_secret,class:"mt-2"},null,8,["message"])]),m("div",$,[t(f,{for:"flipToken",value:"Flip Token"}),t(_,{id:"flipToken",modelValue:s(e).flip_token,"onUpdate:modelValue":l[1]||(l[1]=i=>s(e).flip_token=i),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(c,{message:s(e).errors.flip_token,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[t(b,{on:s(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),t(x,{class:V({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:o(()=>[a(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{P as default};
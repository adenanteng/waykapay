import{T as l,o as c,c as _,w as e,g as t,a as i,b as o,u as a,n as f}from"./app-cca8524f.js";import{_ as p}from"./ActionMessage-6e7f7577.js";import{_ as u}from"./FormSection-87ca31d2.js";import{_ as d}from"./InputError-3290985b.js";import{_ as g}from"./InputLabel-e20533fe.js";import{_ as k}from"./PrimaryButton-e5f5f783.js";import{_ as N}from"./TextAreaInput-4bfcabb0.js";import"./SectionTitle-3e381dfd.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"col-span-6"},$=i("i",{class:"fa-regular fa-paper-plane mr-1"},null,-1),z={__name:"NotificationForm",props:{},setup(b){const s=l({message:null}),n=()=>{s.post(route("device.send"),{errorBag:"storeSettingInformation",preserveScroll:!0,onSuccess:()=>{s.reset()}})};return(x,r)=>(c(),_(u,{onSubmitted:n},{title:e(()=>[t(" Notifikasi ")]),description:e(()=>[t(" Kirim notifikasi ke pengguna ")]),form:e(()=>[i("div",V,[o(g,{value:"Pesan Notifikasi"}),o(N,{modelValue:a(s).message,"onUpdate:modelValue":r[0]||(r[0]=m=>a(s).message=m),type:"text",class:"mt-1 block w-full",rows:"3"},null,8,["modelValue"]),o(d,{message:a(s).errors.message,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[o(p,{on:a(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[t(" Berhasil disimpan. ")]),_:1},8,["on"]),o(k,{class:f({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:e(()=>[$,t(" Kirim ")]),_:1},8,["class","disabled"])]),_:1}))}};export{z as default};
import{v as g,c as k,w as a,o as v,g as i,a as o,b as t,u as s,n as V}from"./app.4763e647.js";import{_ as S}from"./ActionMessage.f3fa41d0.js";import{_ as b}from"./FormSection.c081acfb.js";import{_ as m}from"./InputError.8c18e553.js";import{_ as d}from"./InputLabel.5e6a658a.js";import{_ as h}from"./PrimaryButton.32cac93a.js";import{_}from"./TextInput.0c1ef0d4.js";import"./SectionTitle.5fa7251b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I={class:"col-span-6 sm:col-span-4"},x={class:"col-span-6 sm:col-span-4"},K={class:"col-span-6 sm:col-span-4"},j={__name:"UpdateApiMidtransForm",props:{setting:Object},setup(f){var c,u,p;const l=f,e=g({midtrans_id_merchant:(c=l.setting.midtrans_id_merchant)!=null?c:null,midtrans_client_key:(u=l.setting.midtrans_client_key)!=null?u:null,midtrans_server_key:(p=l.setting.midtrans_server_key)!=null?p:null}),y=()=>{e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0})};return(M,r)=>(v(),k(b,{onSubmitted:y},{title:a(()=>[i(" API Midtrans ")]),description:a(()=>[i(" Informasi autentikasi API Midtrans ")]),form:a(()=>[o("div",I,[t(d,{for:"midtransIdMerchant",value:"Id Merchant"}),t(_,{id:"midtransIdMerchant",modelValue:s(e).midtrans_id_merchant,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).midtrans_id_merchant=n),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(m,{message:s(e).errors.midtrans_id_merchant,class:"mt-2"},null,8,["message"])]),o("div",x,[t(d,{for:"midtransClientKey",value:"Client Key"}),t(_,{id:"midtransClientKey",modelValue:s(e).midtrans_client_key,"onUpdate:modelValue":r[1]||(r[1]=n=>s(e).midtrans_client_key=n),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(m,{message:s(e).errors.midtrans_client_key,class:"mt-2"},null,8,["message"])]),o("div",K,[t(d,{for:"midtransServerKey",value:"Server Key"}),t(_,{id:"midtransServerKey",modelValue:s(e).midtrans_server_key,"onUpdate:modelValue":r[2]||(r[2]=n=>s(e).midtrans_server_key=n),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(m,{message:s(e).errors.midtrans_server_key,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[t(S,{on:s(e).recentlySuccessful,class:"mr-3"},{default:a(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),t(h,{class:V({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:a(()=>[i(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{j as default};

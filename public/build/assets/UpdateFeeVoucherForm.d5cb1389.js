import{T as w,c as y,w as c,o as k,g as m,a as l,b as o,u as s,n as R}from"./app.1d2b10dc.js";import{_ as U}from"./ActionMessage.8599b67b.js";import{_ as B}from"./FormSection.99fa9f0e.js";import{_ as a}from"./InputError.d2beaa0a.js";import{_ as d}from"./InputLabel.17ec1eff.js";import{_ as S}from"./PrimaryButton.41dbaec5.js";import{_ as u}from"./TextInput.0d063685.js";import"./SectionTitle.ded8a9c7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const $={class:"col-span-2"},I={class:"flex"},N=l("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),C={class:"col-span-2"},F={class:"flex"},T=l("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),j={class:"col-span-2"},z={class:"flex"},M=l("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),O={class:"col-span-2"},q={class:"flex"},A=l("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),D={class:"col-span-2"},E={class:"flex"},G=l("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),H={class:"col-span-2"},J={class:"flex"},K=l("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),L={class:"col-span-2"},P={class:"flex"},Q=l("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),W={class:"col-span-2"},X={class:"flex"},Y=l("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),ue={__name:"UpdateFeeVoucherForm",props:{setting:Object},setup(g){var i,_,p,h,v,b,x,f;const n=g,e=w({voucher_25:(i=n.setting.voucher_25)!=null?i:null,voucher_50:(_=n.setting.voucher_50)!=null?_:null,voucher_75:(p=n.setting.voucher_75)!=null?p:null,voucher_100:(h=n.setting.voucher_100)!=null?h:null,voucher_200:(v=n.setting.voucher_200)!=null?v:null,voucher_500:(b=n.setting.voucher_500)!=null?b:null,voucher_1000:(x=n.setting.voucher_1000)!=null?x:null,voucher_max:(f=n.setting.voucher_max)!=null?f:null}),V=()=>{e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0})};return(Z,r)=>(k(),y(B,{onSubmitted:V},{title:c(()=>[m(" Informasi Biaya Voucher ")]),description:c(()=>[m(" Informasi biaya voucher ")]),form:c(()=>[l("div",$,[o(d,{value:"Rp 25.000"}),l("div",I,[N,o(u,{modelValue:s(e).voucher_25,"onUpdate:modelValue":r[0]||(r[0]=t=>s(e).voucher_25=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),o(a,{message:s(e).errors.voucher_25,class:"mt-2"},null,8,["message"])]),l("div",C,[o(d,{value:"Rp 50.000"}),l("div",F,[T,o(u,{modelValue:s(e).voucher_50,"onUpdate:modelValue":r[1]||(r[1]=t=>s(e).voucher_50=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),o(a,{message:s(e).errors.voucher_50,class:"mt-2"},null,8,["message"])]),l("div",j,[o(d,{value:"Rp 75.000"}),l("div",z,[M,o(u,{modelValue:s(e).voucher_75,"onUpdate:modelValue":r[2]||(r[2]=t=>s(e).voucher_75=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),o(a,{message:s(e).errors.voucher_75,class:"mt-2"},null,8,["message"])]),l("div",O,[o(d,{value:"Rp 100.000"}),l("div",q,[A,o(u,{modelValue:s(e).voucher_100,"onUpdate:modelValue":r[3]||(r[3]=t=>s(e).voucher_100=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),o(a,{message:s(e).errors.voucher_100,class:"mt-2"},null,8,["message"])]),l("div",D,[o(d,{value:"Rp 200.000"}),l("div",E,[G,o(u,{modelValue:s(e).voucher_200,"onUpdate:modelValue":r[4]||(r[4]=t=>s(e).voucher_200=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),o(a,{message:s(e).errors.voucher_200,class:"mt-2"},null,8,["message"])]),l("div",H,[o(d,{value:"Rp 500.000"}),l("div",J,[K,o(u,{modelValue:s(e).voucher_500,"onUpdate:modelValue":r[5]||(r[5]=t=>s(e).voucher_500=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),o(a,{message:s(e).errors.voucher_500,class:"mt-2"},null,8,["message"])]),l("div",L,[o(d,{value:"Rp 1.000.000"}),l("div",P,[Q,o(u,{modelValue:s(e).voucher_1000,"onUpdate:modelValue":r[6]||(r[6]=t=>s(e).voucher_1000=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),o(a,{message:s(e).errors.voucher_1000,class:"mt-2"},null,8,["message"])]),l("div",W,[o(d,{value:"Max"}),l("div",X,[Y,o(u,{modelValue:s(e).voucher_max,"onUpdate:modelValue":r[7]||(r[7]=t=>s(e).voucher_max=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),o(a,{message:s(e).errors.voucher_max,class:"mt-2"},null,8,["message"])])]),actions:c(()=>[o(U,{on:s(e).recentlySuccessful,class:"mr-3"},{default:c(()=>[m(" Berhasil disimpan. ")]),_:1},8,["on"]),o(S,{class:R({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:c(()=>[m(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ue as default};
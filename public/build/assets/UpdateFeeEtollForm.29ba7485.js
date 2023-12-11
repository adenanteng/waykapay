import{T as v,c as y,w as u,o as k,g as i,a as o,b as s,u as l,n as R}from"./app.dd2d7a46.js";import{_ as U}from"./ActionMessage.49e6299c.js";import{_ as B}from"./FormSection.2e2f558b.js";import{_ as a}from"./InputError.0799b03c.js";import{_ as d}from"./InputLabel.9d08d431.js";import{_ as S}from"./PrimaryButton.7cc0d660.js";import{_ as m}from"./TextInput.3a9cab9a.js";import"./SectionTitle.5f4c948c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const $={class:"col-span-2"},I={class:"flex"},N=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),T={class:"col-span-2"},C={class:"flex"},E=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),F={class:"col-span-2"},j={class:"flex"},z=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),M={class:"col-span-2"},O={class:"flex"},q=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),A={class:"col-span-2"},D={class:"flex"},G=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),H={class:"col-span-2"},J={class:"flex"},K=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),L={class:"col-span-2"},P={class:"flex"},Q=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),W={class:"col-span-2"},X={class:"flex"},Y=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),me={__name:"UpdateFeeEtollForm",props:{setting:Object},setup(V){var _,c,p,b,x,f,g,h;const r=V,e=v({etoll_25:(_=r.setting.etoll_25)!=null?_:null,etoll_50:(c=r.setting.etoll_50)!=null?c:null,etoll_75:(p=r.setting.etoll_75)!=null?p:null,etoll_100:(b=r.setting.etoll_100)!=null?b:null,etoll_200:(x=r.setting.etoll_200)!=null?x:null,etoll_500:(f=r.setting.etoll_500)!=null?f:null,etoll_1000:(g=r.setting.etoll_1000)!=null?g:null,etoll_max:(h=r.setting.etoll_max)!=null?h:null}),w=()=>{e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0})};return(Z,t)=>(k(),y(B,{onSubmitted:w},{title:u(()=>[i(" Informasi Biaya E-Toll ")]),description:u(()=>[i(" Informasi biaya e-toll ")]),form:u(()=>[o("div",$,[s(d,{value:"Rp 25.000"}),o("div",I,[N,s(m,{modelValue:l(e).etoll_25,"onUpdate:modelValue":t[0]||(t[0]=n=>l(e).etoll_25=n),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),s(a,{message:l(e).errors.etoll_25,class:"mt-2"},null,8,["message"])]),o("div",T,[s(d,{value:"Rp 50.000"}),o("div",C,[E,s(m,{modelValue:l(e).etoll_50,"onUpdate:modelValue":t[1]||(t[1]=n=>l(e).etoll_50=n),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),s(a,{message:l(e).errors.etoll_50,class:"mt-2"},null,8,["message"])]),o("div",F,[s(d,{value:"Rp 75.000"}),o("div",j,[z,s(m,{modelValue:l(e).etoll_75,"onUpdate:modelValue":t[2]||(t[2]=n=>l(e).etoll_75=n),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),s(a,{message:l(e).errors.etoll_75,class:"mt-2"},null,8,["message"])]),o("div",M,[s(d,{value:"Rp 100.000"}),o("div",O,[q,s(m,{modelValue:l(e).etoll_100,"onUpdate:modelValue":t[3]||(t[3]=n=>l(e).etoll_100=n),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),s(a,{message:l(e).errors.etoll_100,class:"mt-2"},null,8,["message"])]),o("div",A,[s(d,{value:"Rp 200.000"}),o("div",D,[G,s(m,{modelValue:l(e).etoll_200,"onUpdate:modelValue":t[4]||(t[4]=n=>l(e).etoll_200=n),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),s(a,{message:l(e).errors.etoll_200,class:"mt-2"},null,8,["message"])]),o("div",H,[s(d,{value:"Rp 500.000"}),o("div",J,[K,s(m,{modelValue:l(e).etoll_500,"onUpdate:modelValue":t[5]||(t[5]=n=>l(e).etoll_500=n),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),s(a,{message:l(e).errors.etoll_500,class:"mt-2"},null,8,["message"])]),o("div",L,[s(d,{value:"Rp 1.000.000"}),o("div",P,[Q,s(m,{modelValue:l(e).etoll_1000,"onUpdate:modelValue":t[6]||(t[6]=n=>l(e).etoll_1000=n),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),s(a,{message:l(e).errors.etoll_1000,class:"mt-2"},null,8,["message"])]),o("div",W,[s(d,{value:"Max"}),o("div",X,[Y,s(m,{modelValue:l(e).etoll_max,"onUpdate:modelValue":t[7]||(t[7]=n=>l(e).etoll_max=n),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),s(a,{message:l(e).errors.etoll_max,class:"mt-2"},null,8,["message"])])]),actions:u(()=>[s(U,{on:l(e).recentlySuccessful,class:"mr-3"},{default:u(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),s(S,{class:R({"opacity-25":l(e).processing}),disabled:l(e).processing},{default:u(()=>[i(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{me as default};
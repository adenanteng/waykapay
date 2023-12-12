import{T as c,o as b,c as x,w as m,g as p,a as o,b as l,u as e,n as f}from"./app-38c537a9.js";import{_ as g}from"./ActionMessage-6964db41.js";import{_ as h}from"./FormSection-ed6d921f.js";import{_ as r}from"./InputError-d8a2e7fb.js";import{_ as d}from"./InputLabel-888891a9.js";import{_ as V}from"./PrimaryButton-2f08a671.js";import{_ as u}from"./TextInput-b81cccd4.js";import"./SectionTitle-08146f46.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"col-span-2"},v={class:"flex"},y=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),k={class:"col-span-2"},R={class:"flex"},U=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),B={class:"col-span-2"},S={class:"flex"},$=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),I={class:"col-span-2"},N={class:"flex"},C=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),F={class:"col-span-2"},P={class:"flex"},T=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),j={class:"col-span-2"},z={class:"flex"},M=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),O={class:"col-span-2"},q={class:"flex"},A=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),D={class:"col-span-2"},E={class:"flex"},G=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),es={__name:"UpdateFeePulsaForm",props:{setting:Object},setup(i){const n=i,s=c({pulsa_25:n.setting.pulsa_25??null,pulsa_50:n.setting.pulsa_50??null,pulsa_75:n.setting.pulsa_75??null,pulsa_100:n.setting.pulsa_100??null,pulsa_200:n.setting.pulsa_200??null,pulsa_500:n.setting.pulsa_500??null,pulsa_1000:n.setting.pulsa_1000??null,pulsa_max:n.setting.pulsa_max??null}),_=()=>{s.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0})};return(H,a)=>(b(),x(h,{onSubmitted:_},{title:m(()=>[p(" Informasi Biaya Pulsa ")]),description:m(()=>[p(" Informasi biaya pulsa ")]),form:m(()=>[o("div",w,[l(d,{value:"Rp 25.000"}),o("div",v,[y,l(u,{modelValue:e(s).pulsa_25,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).pulsa_25=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),l(r,{message:e(s).errors.pulsa_25,class:"mt-2"},null,8,["message"])]),o("div",k,[l(d,{value:"Rp 50.000"}),o("div",R,[U,l(u,{modelValue:e(s).pulsa_50,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).pulsa_50=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),l(r,{message:e(s).errors.pulsa_50,class:"mt-2"},null,8,["message"])]),o("div",B,[l(d,{value:"Rp 75.000"}),o("div",S,[$,l(u,{modelValue:e(s).pulsa_75,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).pulsa_75=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),l(r,{message:e(s).errors.pulsa_75,class:"mt-2"},null,8,["message"])]),o("div",I,[l(d,{value:"Rp 100.000"}),o("div",N,[C,l(u,{modelValue:e(s).pulsa_100,"onUpdate:modelValue":a[3]||(a[3]=t=>e(s).pulsa_100=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),l(r,{message:e(s).errors.pulsa_100,class:"mt-2"},null,8,["message"])]),o("div",F,[l(d,{value:"Rp 200.000"}),o("div",P,[T,l(u,{modelValue:e(s).pulsa_200,"onUpdate:modelValue":a[4]||(a[4]=t=>e(s).pulsa_200=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),l(r,{message:e(s).errors.pulsa_200,class:"mt-2"},null,8,["message"])]),o("div",j,[l(d,{value:"Rp 500.000"}),o("div",z,[M,l(u,{modelValue:e(s).pulsa_500,"onUpdate:modelValue":a[5]||(a[5]=t=>e(s).pulsa_500=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),l(r,{message:e(s).errors.pulsa_500,class:"mt-2"},null,8,["message"])]),o("div",O,[l(d,{value:"Rp 1.000.000"}),o("div",q,[A,l(u,{modelValue:e(s).pulsa_1000,"onUpdate:modelValue":a[6]||(a[6]=t=>e(s).pulsa_1000=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),l(r,{message:e(s).errors.pulsa_1000,class:"mt-2"},null,8,["message"])]),o("div",D,[l(d,{value:"Max"}),o("div",E,[G,l(u,{modelValue:e(s).pulsa_max,"onUpdate:modelValue":a[7]||(a[7]=t=>e(s).pulsa_max=t),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),l(r,{message:e(s).errors.pulsa_max,class:"mt-2"},null,8,["message"])])]),actions:m(()=>[l(g,{on:e(s).recentlySuccessful,class:"mr-3"},{default:m(()=>[p(" Berhasil disimpan. ")]),_:1},8,["on"]),l(V,{class:f({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:m(()=>[p(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{es as default};

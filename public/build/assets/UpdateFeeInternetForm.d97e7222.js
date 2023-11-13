import{T as v,c as y,w as m,o as k,g as u,a as s,b as n,u as t,n as R}from"./app.9f704c0e.js";import{_ as U}from"./ActionMessage.0bda0883.js";import{_ as B}from"./FormSection.9673f3a9.js";import{_ as a}from"./InputError.70b9b854.js";import{_ as d}from"./InputLabel.ced27af4.js";import{_ as I}from"./PrimaryButton.75bc8127.js";import{_ as i}from"./TextInput.b48e0db8.js";import"./SectionTitle.3af75ff1.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S={class:"col-span-2"},$={class:"flex"},N=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),C={class:"col-span-2"},F={class:"flex"},T=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),j={class:"col-span-2"},z={class:"flex"},M=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),O={class:"col-span-2"},q={class:"flex"},A=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),D={class:"col-span-2"},E={class:"flex"},G=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),H={class:"col-span-2"},J={class:"flex"},K=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),L={class:"col-span-2"},P={class:"flex"},Q=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),W={class:"col-span-2"},X={class:"flex"},Y=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),ie={__name:"UpdateFeeInternetForm",props:{setting:Object},setup(V){var _,c,p,b,x,f,g,h;const o=V,e=v({internet_25:(_=o.setting.internet_25)!=null?_:null,internet_50:(c=o.setting.internet_50)!=null?c:null,internet_75:(p=o.setting.internet_75)!=null?p:null,internet_100:(b=o.setting.internet_100)!=null?b:null,internet_200:(x=o.setting.internet_200)!=null?x:null,internet_500:(f=o.setting.internet_500)!=null?f:null,internet_1000:(g=o.setting.internet_1000)!=null?g:null,internet_max:(h=o.setting.internet_max)!=null?h:null}),w=()=>{e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0})};return(Z,l)=>(k(),y(B,{onSubmitted:w},{title:m(()=>[u(" Informasi Biaya Internet ")]),description:m(()=>[u(" Informasi biaya internet ")]),form:m(()=>[s("div",S,[n(d,{value:"Rp 25.000"}),s("div",$,[N,n(i,{modelValue:t(e).internet_25,"onUpdate:modelValue":l[0]||(l[0]=r=>t(e).internet_25=r),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),n(a,{message:t(e).errors.internet_25,class:"mt-2"},null,8,["message"])]),s("div",C,[n(d,{value:"Rp 50.000"}),s("div",F,[T,n(i,{modelValue:t(e).internet_50,"onUpdate:modelValue":l[1]||(l[1]=r=>t(e).internet_50=r),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),n(a,{message:t(e).errors.internet_50,class:"mt-2"},null,8,["message"])]),s("div",j,[n(d,{value:"Rp 75.000"}),s("div",z,[M,n(i,{modelValue:t(e).internet_75,"onUpdate:modelValue":l[2]||(l[2]=r=>t(e).internet_75=r),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),n(a,{message:t(e).errors.internet_75,class:"mt-2"},null,8,["message"])]),s("div",O,[n(d,{value:"Rp 100.000"}),s("div",q,[A,n(i,{modelValue:t(e).internet_100,"onUpdate:modelValue":l[3]||(l[3]=r=>t(e).internet_100=r),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),n(a,{message:t(e).errors.internet_100,class:"mt-2"},null,8,["message"])]),s("div",D,[n(d,{value:"Rp 200.000"}),s("div",E,[G,n(i,{modelValue:t(e).internet_200,"onUpdate:modelValue":l[4]||(l[4]=r=>t(e).internet_200=r),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),n(a,{message:t(e).errors.internet_200,class:"mt-2"},null,8,["message"])]),s("div",H,[n(d,{value:"Rp 500.000"}),s("div",J,[K,n(i,{modelValue:t(e).internet_500,"onUpdate:modelValue":l[5]||(l[5]=r=>t(e).internet_500=r),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),n(a,{message:t(e).errors.internet_500,class:"mt-2"},null,8,["message"])]),s("div",L,[n(d,{value:"Rp 1.000.000"}),s("div",P,[Q,n(i,{modelValue:t(e).internet_1000,"onUpdate:modelValue":l[6]||(l[6]=r=>t(e).internet_1000=r),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),n(a,{message:t(e).errors.internet_1000,class:"mt-2"},null,8,["message"])]),s("div",W,[n(d,{value:"Max"}),s("div",X,[Y,n(i,{modelValue:t(e).internet_max,"onUpdate:modelValue":l[7]||(l[7]=r=>t(e).internet_max=r),type:"number",class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue"])]),n(a,{message:t(e).errors.internet_max,class:"mt-2"},null,8,["message"])])]),actions:m(()=>[n(U,{on:t(e).recentlySuccessful,class:"mr-3"},{default:m(()=>[u(" Berhasil disimpan. ")]),_:1},8,["on"]),n(I,{class:R({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:m(()=>[u(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ie as default};

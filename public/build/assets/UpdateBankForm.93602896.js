import{v as b,c as v,w as o,o as u,g as m,a as n,b as s,e as B,h as y,F as x,u as e,n as t}from"./app.54eee8d4.js";import{_ as k}from"./ActionMessage.1648889a.js";import{_ as h}from"./FormSection.acbf6ada.js";import{_ as p}from"./InputError.39e5e847.js";import{_ as R}from"./InputLabel.bf7ba011.js";import{_ as F}from"./PrimaryButton.233caa21.js";import{_ as V}from"./TextInput.4e322937.js";import{O as I,k as S,r as N}from"./CheckCircleIcon.89981b02.js";import"./SectionTitle.a6783e0f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./label.6b10c80a.js";import"./focus-management.4c9f8e7f.js";const $={class:"col-span-6"},w={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},j={class:"flex flex-1 justify-center"},A={class:"flex flex-col items-center"},O=["src"],C={class:"col-span-6"},W={__name:"UpdateBankForm",props:{users:Object|String,response:Object|String},setup(_){var d;const a=b({user_id:(d=_.users.id)!=null?d:null,bank:null,account_no:null}),g=()=>{a.post(route("money-transfer.amount",a),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},f=[{id:1,name:"bca",logo:"/img/vendor/BCA.svg",adminFee:"Biaya admin Rp 4.000"},{id:2,name:"bni",logo:"/img/vendor/BNI.svg",adminFee:"Biaya admin Rp 4.000"},{id:3,name:"bri",logo:"/img/vendor/BRI.svg",adminFee:"Biaya admin Rp 4.000"},{id:4,name:"mandiri",logo:"/img/vendor/MANDIRI.svg",adminFee:"Biaya admin Rp 4.000"},{id:5,name:"permata",logo:"/img/vendor/PERMATA.svg",adminFee:"Biaya admin Rp 4.000"},{id:6,name:"bsm",logo:"/img/vendor/BSI.svg",adminFee:"Biaya admin Rp 4.000"}];return(E,i)=>(u(),v(h,{onSubmitted:g},{title:o(()=>[m(" Pilih Bank. ")]),description:o(()=>[]),form:o(()=>[n("div",$,[s(e(I),{modelValue:e(a).bank,"onUpdate:modelValue":i[0]||(i[0]=r=>e(a).bank=r)},{default:o(()=>[n("div",w,[(u(),B(x,null,y(f,r=>s(e(S),{as:"template",key:r.id,value:r},{default:o(({checked:l,active:c})=>[n("div",{class:t([l?"border-transparent":"border-gray-300",c?"border-primary-500 ring-2 ring-indigo-500":"","relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"])},[n("span",j,[n("span",A,[n("img",{src:r.logo,class:"h-7",alt:""},null,8,O)])]),s(e(N),{class:t([l?"":"invisible","h-5 w-5 text-indigo-600"]),"aria-hidden":"true"},null,8,["class"]),n("span",{class:t([c?"border":"border-2",l?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"]),s(p,{message:e(a).errors.bank,class:"mt-2"},null,8,["message"])]),n("div",C,[s(R,{for:"amount",value:"Nomor Rekening"}),s(V,{id:"account_no",modelValue:e(a).account_no,"onUpdate:modelValue":i[1]||(i[1]=r=>e(a).account_no=r),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(p,{message:e(a).errors.account_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(k,{on:e(a).recentlySuccessful,class:"mr-3"},{default:o(()=>[m(" Berhasil disimpan. ")]),_:1},8,["on"]),s(F,{class:t({"opacity-25":e(a).processing}),disabled:e(a).method===null},{default:o(()=>[m(" Lanjut ")]),_:1},8,["class","disabled"])]),_:1}))}};export{W as default};
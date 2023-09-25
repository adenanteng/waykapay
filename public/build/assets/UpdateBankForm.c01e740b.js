import{v as b,c as v,w as s,o as u,g as m,a as n,b as o,e as y,h as B,u as e,n as t,F as k}from"./app.6fe95229.js";import{_ as x}from"./ActionMessage.4c6bc581.js";import{_ as R}from"./FormSection.c7fe2f92.js";import{_ as p}from"./InputError.c84f32bc.js";import{_ as F}from"./InputLabel.5f3d9118.js";import{_ as V}from"./PrimaryButton.f8cfdc84.js";import{_ as h}from"./TextInput.0b6a78c0.js";import{k as I,r as S,O as N}from"./CheckCircleIcon.8a75941d.js";import"./SectionTitle.42fb90ac.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./label.6c809856.js";import"./focus-management.284ecf71.js";const $={class:"col-span-6"},w={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},j={class:"flex flex-1 justify-center"},A=["src"],O={class:"col-span-6"},Q={__name:"UpdateBankForm",props:{users:Object|String,response:Object|String},setup(_){var d;const a=b({user_id:(d=_.users.id)!=null?d:null,bank:null,account_no:""}),g=()=>{a.post(route("money-transfer.amount",a),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},f=[{id:1,name:"bca",logo:"/img/vendor/BCA.svg",adminFee:"Biaya admin Rp 4.000"},{id:2,name:"bni",logo:"/img/vendor/BNI.svg",adminFee:"Biaya admin Rp 4.000"},{id:3,name:"bri",logo:"/img/vendor/BRI.svg",adminFee:"Biaya admin Rp 4.000"},{id:4,name:"mandiri",logo:"/img/vendor/MANDIRI.svg",adminFee:"Biaya admin Rp 4.000"},{id:5,name:"permata",logo:"/img/vendor/PERMATA.svg",adminFee:"Biaya admin Rp 4.000"},{id:6,name:"bsm",logo:"/img/vendor/BSI.svg",adminFee:"Biaya admin Rp 4.000"}];return(U,i)=>(u(),v(R,{onSubmitted:g},{title:s(()=>[m(" Bank dan nomor rekening ")]),description:s(()=>[]),form:s(()=>[n("div",$,[o(e(N),{modelValue:e(a).bank,"onUpdate:modelValue":i[0]||(i[0]=r=>e(a).bank=r)},{default:s(()=>[n("div",w,[(u(),y(k,null,B(f,r=>o(e(I),{as:"template",key:r.id,value:r},{default:s(({checked:l,active:c})=>[n("div",{class:t([l?"border-transparent":"border-gray-300",c?"border-primary-500 ring-2 ring-primary-500":"","relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"])},[n("div",j,[n("img",{src:r.logo,class:"h-7",alt:""},null,8,A)]),o(e(S),{class:t([l?"":"invisible","h-5 w-5 text-primary-600"]),"aria-hidden":"true"},null,8,["class"]),n("span",{class:t([c?"border":"border-2",l?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"]),o(p,{message:e(a).errors.bank,class:"mt-2"},null,8,["message"])]),n("div",O,[o(F,{for:"amount",value:"Nomor Rekening"}),o(h,{id:"account_no",modelValue:e(a).account_no,"onUpdate:modelValue":i[1]||(i[1]=r=>e(a).account_no=r),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(p,{message:e(a).errors.account_no,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[o(x,{on:e(a).recentlySuccessful,class:"mr-3"},{default:s(()=>[m(" Berhasil disimpan. ")]),_:1},8,["on"]),o(V,{class:t({"opacity-25":e(a).processing}),disabled:e(a).bank===null||e(a).account_no===""},{default:s(()=>[m(" Lanjutkan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{Q as default};
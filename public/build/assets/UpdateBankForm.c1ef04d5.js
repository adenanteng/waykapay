import{v,c as b,w as a,o as u,g as i,a as r,b as o,e as y,h as x,u as e,n as t,t as B,F as h}from"./app.6fe95229.js";import{_ as F}from"./ActionMessage.4c6bc581.js";import{_ as R}from"./FormSection.c7fe2f92.js";import{_ as S}from"./InputError.c84f32bc.js";import{_ as I}from"./PrimaryButton.f8cfdc84.js";import{k as w,w as V,r as k,O as N}from"./CheckCircleIcon.8a75941d.js";import"./SectionTitle.42fb90ac.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./label.6c809856.js";import"./focus-management.284ecf71.js";const A={class:"col-span-6"},O={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},$={class:"flex flex-1 justify-center"},j={class:"flex flex-col items-center"},C=["src"],H={__name:"UpdateBankForm",props:{users:Object|String,response:Object|String,amount:String},setup(g){var l;const d=g,s=v({user_id:(l=d.users.id)!=null?l:null,amount:d.amount,method:null}),_=()=>{s.post(route("deposit.create",s),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},f=[{id:1,name:"bca",logo:"/img/vendor/BCA.svg",adminFee:"Biaya admin Rp 4.000"},{id:2,name:"bni",logo:"/img/vendor/BNI.svg",adminFee:"Biaya admin Rp 4.000"},{id:3,name:"bri",logo:"/img/vendor/BRI.svg",adminFee:"Biaya admin Rp 4.000"},{id:4,name:"mandiri",logo:"/img/vendor/MANDIRI.svg",adminFee:"Biaya admin Rp 4.000"},{id:5,name:"permata",logo:"/img/vendor/PERMATA.svg",adminFee:"Biaya admin Rp 4.000"},{id:6,name:"bsm",logo:"/img/vendor/BSI.svg",adminFee:"Biaya admin Rp 4.000"},{id:7,name:"qris",logo:"/img/vendor/QRIS.svg",adminFee:"Biaya admin 2%"}];return(D,c)=>(u(),b(R,{onSubmitted:_},{title:a(()=>[i(" Pilih metode pembayaranmu. ")]),description:a(()=>[]),form:a(()=>[r("div",A,[o(e(N),{modelValue:e(s).method,"onUpdate:modelValue":c[0]||(c[0]=n=>e(s).method=n)},{default:a(()=>[r("div",O,[(u(),y(h,null,x(f,n=>o(e(w),{as:"template",key:n.id,value:n},{default:a(({checked:m,active:p})=>[r("div",{class:t([m?"border-transparent":"border-gray-300",p?"border-primary-500 ring-2 ring-primary-500":"","relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"])},[r("div",$,[r("div",j,[r("img",{src:n.logo,class:"h-7",alt:""},null,8,C),o(e(V),{as:"span",class:"mt-1 flex text-xs text-gray-500"},{default:a(()=>[i(B(n.adminFee),1)]),_:2},1024)])]),o(e(k),{class:t([m?"":"invisible","h-5 w-5 text-primary-600"]),"aria-hidden":"true"},null,8,["class"]),r("span",{class:t([p?"border":"border-2",m?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"]),o(S,{message:e(s).errors.method,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[o(F,{on:e(s).recentlySuccessful,class:"mr-3"},{default:a(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),o(I,{class:t({"opacity-25":e(s).processing}),disabled:e(s).method===null},{default:a(()=>[i(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1}))}};export{H as default};
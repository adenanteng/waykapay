import{v,c as y,w as a,o as g,g as r,a as s,b as n,e as B,h as b,F as x,u as e,n as t,t as h}from"./app.27aa2c36.js";import{_ as F}from"./ActionMessage.c0dc4b18.js";import{_ as S}from"./FormSection.4d605e5e.js";import{_ as R}from"./InputError.7accbc0c.js";import{_ as A}from"./PrimaryButton.1444ba0a.js";import{O as I,k as N,w as O,r as V}from"./CheckCircleIcon.96a38b93.js";import"./SectionTitle.37de73c0.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./label.a707950a.js";import"./focus-management.2b76db0c.js";const k={class:"col-span-6"},w={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},j={class:"flex flex-1 justify-center"},E={class:"flex flex-col items-center"},P=["src"],Q={__name:"UpdateBankForm",props:{users:Object|String,response:Object|String,amount:String},setup(u){var l;const m=u,o=v({user_id:(l=m.users.id)!=null?l:null,amount:m.amount,method:null}),_=()=>{o.post(route("deposit.create",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},f=[{id:1,name:"bca",logo:"/img/vendor/BCA.svg",adminFee:"Biaya admin Rp 4.000"},{id:2,name:"bni",logo:"/img/vendor/BNI.svg",adminFee:"Biaya admin Rp 4.000"},{id:3,name:"bri",logo:"/img/vendor/BRI.svg",adminFee:"Biaya admin Rp 4.000"},{id:4,name:"mandiri",logo:"/img/vendor/MANDIRI.svg",adminFee:"Biaya admin Rp 4.000"},{id:5,name:"permata",logo:"/img/vendor/PERMATA.svg",adminFee:"Biaya admin Rp 4.000"},{id:6,name:"bsm",logo:"/img/vendor/BSI.svg",adminFee:"Biaya admin Rp 4.000"},{id:7,name:"qris",logo:"/img/vendor/QRIS.svg",adminFee:"Biaya admin 2%"},{id:8,name:"ovo",logo:"/img/vendor/OVO.svg",adminFee:"Biaya admin 2%"},{id:9,name:"shopeepay_app",logo:"/img/vendor/SHOPEEPAY.svg",adminFee:"Biaya admin 2%"},{id:10,name:"linkaja_app",logo:"/img/vendor/LINKAJA.svg",adminFee:"Biaya admin 2%"},{id:11,name:"dana",logo:"/img/vendor/DANA.svg",adminFee:"Biaya admin 2%"}];return($,p)=>(g(),y(S,{onSubmitted:_},{title:a(()=>[r(" Pilih metode pembayaranmu. ")]),description:a(()=>[]),form:a(()=>[s("div",k,[n(e(I),{modelValue:e(o).method,"onUpdate:modelValue":p[0]||(p[0]=i=>e(o).method=i)},{default:a(()=>[s("div",w,[(g(),B(x,null,b(f,i=>n(e(N),{as:"template",key:i.id,value:i},{default:a(({checked:d,active:c})=>[s("div",{class:t([d?"border-transparent":"border-gray-300",c?"border-primary-500 ring-2 ring-indigo-500":"","relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"])},[s("span",j,[s("span",E,[s("img",{src:i.logo,class:"h-7",alt:""},null,8,P),n(e(O),{as:"span",class:"mt-1 flex text-xs text-gray-500"},{default:a(()=>[r(h(i.adminFee),1)]),_:2},1024)])]),n(e(V),{class:t([d?"":"invisible","h-5 w-5 text-indigo-600"]),"aria-hidden":"true"},null,8,["class"]),s("span",{class:t([c?"border":"border-2",d?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"]),n(R,{message:e(o).errors.method,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[n(F,{on:e(o).recentlySuccessful,class:"mr-3"},{default:a(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),n(A,{class:t({"opacity-25":e(o).processing}),disabled:e(o).method===null},{default:a(()=>[r(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1}))}};export{Q as default};

import{T as f,c as v,w as o,o as u,g as d,a as n,b as r,e as k,h as y,u as e,n as i,F as x}from"./app.d165525e.js";import{_ as B}from"./ActionMessage.4298c09d.js";import{_ as h}from"./FormSection.50a683f2.js";import{_ as p}from"./InputError.8b506fdd.js";import{_ as V}from"./InputLabel.297baff6.js";import{_ as A}from"./PrimaryButton.11909b25.js";import{_ as I}from"./TextInput.be954670.js";import{E as S,r as w,k as N}from"./CheckCircleIcon.d24717db.js";import"./SectionTitle.65fdb34e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./label.f08ef1a6.js";import"./focus-management.f51fb033.js";const $={class:"col-span-6"},j={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},E={class:"flex flex-1 justify-center items-center h-full"},R=["src"],C={class:"col-span-6"},H={__name:"UpdateBankForm",props:{users:Object|String,response:Object|String},setup(g){var m;const s=f({user_id:(m=g.users.id)!=null?m:null,bank:null,account_no:""}),_=()=>{s.post(route("money-transfer.amount"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},b=[{id:1,name:"wkp",logo:"/img/vendor/WAYKAPAY.svg",admin:0,disabled:!1},{id:2,name:"bca",logo:"/img/vendor/BCA.svg",admin:4e3,disabled:!0},{id:3,name:"bni",logo:"/img/vendor/BNI.svg",admin:4e3,disabled:!0},{id:4,name:"bri",logo:"/img/vendor/BRI.svg",admin:4e3,disabled:!0},{id:5,name:"mandiri",logo:"/img/vendor/MANDIRI.svg",admin:4e3,disabled:!0},{id:6,name:"permata",logo:"/img/vendor/PERMATA.svg",admin:4e3,disabled:!0},{id:7,name:"bsm",logo:"/img/vendor/BSI.svg",admin:4e3,disabled:!0}];return(L,l)=>(u(),v(h,{onSubmitted:_},{title:o(()=>[d(" Bank dan nomor rekening ")]),description:o(()=>[]),form:o(()=>[n("div",$,[r(e(N),{modelValue:e(s).bank,"onUpdate:modelValue":l[0]||(l[0]=a=>e(s).bank=a)},{default:o(()=>[n("div",j,[(u(),k(x,null,y(b,a=>r(e(S),{as:"template",key:a.id,value:a,disabled:a.disabled,class:i(a.disabled?"bg-gray-200 opacity-75":"")},{default:o(({checked:t,active:c})=>[n("div",{class:i([t?"border-transparent":"border-gray-300",c?"border-primary-500 ring-2 ring-primary-500":"","relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"])},[n("div",E,[n("img",{src:a.logo,class:"h-7",alt:""},null,8,R)]),r(e(w),{class:i([t?"":"invisible","h-5 w-5 text-primary-600"]),"aria-hidden":"true"},null,8,["class"]),n("span",{class:i([c?"border":"border-2",t?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["value","disabled","class"])),64))])]),_:1},8,["modelValue"]),r(p,{message:e(s).errors.bank,class:"mt-2"},null,8,["message"])]),n("div",C,[r(V,{for:"amount",value:"Nomor Rekening"}),r(I,{id:"account_no",modelValue:e(s).account_no,"onUpdate:modelValue":l[1]||(l[1]=a=>e(s).account_no=a),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),r(p,{message:e(s).errors.account_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[r(B,{on:e(s).recentlySuccessful,class:"mr-3"},{default:o(()=>[d(" Berhasil disimpan. ")]),_:1},8,["on"]),r(A,{class:i({"opacity-25":e(s).processing}),disabled:e(s).bank===null||e(s).account_no===""},{default:o(()=>[d(" Lanjutkan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{H as default};
import{d as x,q as v,o as g,e as b,T as h,b as a,w as t,F as w,a as s,t as d,g as p,u as o,n as y}from"./app.94504208.js";import{_ as $}from"./ActionMessage.1bcc93f6.js";import{_ as k}from"./FormSection.49a796aa.js";import{_}from"./InputError.204dd2b8.js";import{_ as f}from"./InputLabel.bb48e568.js";import{_ as V}from"./PrimaryButton.586f2aed.js";import{_ as S}from"./TextInput.fd22eb55.js";import{_ as N}from"./ActionSection.a3ab17c5.js";import"./SectionTitle.dd66c0da.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B=["value"],I={__name:"TextAreaInput",props:{modelValue:String},emits:["update:modelValue"],setup(i,{expose:n}){const e=x(null);return v(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),n({focus:()=>e.value.focus()}),(m,c)=>(g(),b("textarea",{ref_key:"input",ref:e,class:"bg-white text-black border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm",value:i.modelValue,onInput:c[0]||(c[0]=r=>m.$emit("update:modelValue",r.target.value))},null,40,B))}},T={class:"flex items-center px-2"},F={class:"flex-shrink-0"},j=["src","alt"],O={class:"ml-3 min-w-0 flex-1"},R={class:"text-base font-medium text-gray-800 truncate capitalize"},U={class:"text-sm font-medium text-gray-500 truncate"},q={class:"col-span-6 sm:col-span-3"},z={class:"flex"},A=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),C={class:"mt-1 text-xs text-gray-600"},K={class:"col-span-6 sm:col-span-4"},X={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String,bank:Object,account_no:String},setup(i){const n=i,e=h({amount:null,bank:n.bank,account_no:n.account_no,desc:null}),m=()=>{e.post(route("pin.moneyTransfer"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})};function c(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(r,l)=>(g(),b(w,null,[a(N,null,{title:t(()=>[]),description:t(()=>[]),content:t(()=>[s("div",T,[s("div",F,[s("img",{class:"h-5 w-full",src:n.bank.logo,alt:n.bank.name},null,8,j)]),s("div",O,[s("div",R,d(n.users.name),1),s("div",U,d(n.account_no),1)])])]),_:1}),a(k,{onSubmitted:m},{title:t(()=>[p(" Mau Transfer berapa? ")]),description:t(()=>[]),form:t(()=>[s("div",q,[a(f,{for:"amount",value:"Nominal"}),s("div",z,[A,a(S,{id:"amount",modelValue:o(e).amount,"onUpdate:modelValue":l[0]||(l[0]=u=>o(e).amount=u),type:"number",class:"mt-1 block w-full rounded-l-none",min:"1000",max:Number(r.$page.props.user.wallet_balance)<=2e6?r.$page.props.user.wallet_balance:2e6,required:""},null,8,["modelValue","max"])]),a(_,{message:o(e).errors.amount,class:"mt-2"},null,8,["message"]),s("p",C," Nominal Rp 1.000 - Rp "+d(Number(r.$page.props.user.wallet_balance)<=2e6?c(r.$page.props.user.wallet_balance):"2.000.000"),1)]),s("div",K,[a(f,{for:"amount",value:"Keterangan"}),a(I,{id:"desc",modelValue:o(e).desc,"onUpdate:modelValue":l[1]||(l[1]=u=>o(e).desc=u),type:"text",class:"mt-1 block w-full",rows:"1"},null,8,["modelValue"]),a(_,{message:o(e).errors.desc,class:"mt-2"},null,8,["message"])])]),actions:t(()=>[a($,{on:o(e).recentlySuccessful,class:"mr-3"},{default:t(()=>[p(" Berhasil disimpan. ")]),_:1},8,["on"]),a(V,{class:y({"opacity-25":o(e).processing}),disabled:o(e).processing},{default:t(()=>[p(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1})],64))}};export{X as default};

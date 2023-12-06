import{d as v,q as h,o as b,e as x,T as y,i as w,b as a,w as o,F as $,a as s,t as d,g as f,u as t,n as k,Q as V}from"./app.73f98d73.js";import{_ as S}from"./ActionMessage.8cc53b1f.js";import{_ as B}from"./FormSection.1ad0a9bd.js";import{_}from"./InputError.67492910.js";import{_ as g}from"./InputLabel.f718fb5b.js";import{_ as I}from"./PrimaryButton.e8ded2c6.js";import{_ as N}from"./TextInput.07ae56c6.js";import{_ as T}from"./ActionSection.be3b0a3e.js";import"./SectionTitle.1d7c7159.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F=["value"],j={__name:"TextAreaInput",props:{modelValue:String},emits:["update:modelValue"],setup(i,{expose:r}){const e=v(null);return h(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),r({focus:()=>e.value.focus()}),(u,c)=>(b(),x("textarea",{ref_key:"input",ref:e,class:"bg-white text-black border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm",value:i.modelValue,onInput:c[0]||(c[0]=m=>u.$emit("update:modelValue",m.target.value))},null,40,F))}},O={class:"flex items-center px-2"},R={class:"flex-shrink-0"},U=["src","alt"],q={class:"ml-3 min-w-0 flex-1"},z={class:"text-base font-medium text-gray-800 truncate capitalize"},A={class:"text-sm font-medium text-gray-500 truncate"},C={class:"col-span-6 sm:col-span-3"},K={class:"flex"},M=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),D={class:"mt-1 text-xs text-gray-600"},E={class:"col-span-6 sm:col-span-4"},ee={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String,bank:Object,account_no:String},setup(i){const r=i,e=y({amount:null,bank:r.bank,account_no:r.account_no,desc:null}),{...u}=w(()=>V().props.user).value,c=()=>{u.pin?e.post(route("pin.moneyTransfer"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{}}):e.post(route("money-transfer.confirm"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{}})};function m(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(n,l)=>(b(),x($,null,[a(T,null,{title:o(()=>[]),description:o(()=>[]),content:o(()=>[s("div",O,[s("div",R,[s("img",{class:"h-5 w-full",src:r.bank.logo,alt:r.bank.name},null,8,U)]),s("div",q,[s("div",z,d(r.users.name),1),s("div",A,d(r.account_no),1)])])]),_:1}),a(B,{onSubmitted:c},{title:o(()=>[f(" Mau Transfer berapa? ")]),description:o(()=>[]),form:o(()=>[s("div",C,[a(g,{for:"amount",value:"Nominal"}),s("div",K,[M,a(N,{id:"amount",modelValue:t(e).amount,"onUpdate:modelValue":l[0]||(l[0]=p=>t(e).amount=p),type:"number",class:"mt-1 block w-full rounded-l-none",min:"1",max:Number(n.$page.props.user.wallet_balance)<=2e6?n.$page.props.user.wallet_balance:2e6,required:""},null,8,["modelValue","max"])]),a(_,{message:t(e).errors.amount,class:"mt-2"},null,8,["message"]),s("p",D," Nominal Rp 1.000 - Rp "+d(Number(n.$page.props.user.wallet_balance)<=2e6?m(n.$page.props.user.wallet_balance):"2.000.000"),1)]),s("div",E,[a(g,{for:"amount",value:"Keterangan"}),a(j,{id:"desc",modelValue:t(e).desc,"onUpdate:modelValue":l[1]||(l[1]=p=>t(e).desc=p),type:"text",class:"mt-1 block w-full",rows:"1"},null,8,["modelValue"]),a(_,{message:t(e).errors.desc,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[a(S,{on:t(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[f(" Berhasil disimpan. ")]),_:1},8,["on"]),a(I,{class:k({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:o(()=>[f(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1})],64))}};export{ee as default};
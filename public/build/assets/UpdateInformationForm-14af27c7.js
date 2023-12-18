import{T as h,i as w,d as _,s as S,o as k,e as $,b as a,w as o,F as y,Q as N,a as s,t as i,g as u,u as r,n as V}from"./app-cf8b570a.js";import{_ as B}from"./ActionMessage-3d256514.js";import{_ as I}from"./FormSection-4e1f2787.js";import{_ as f}from"./InputError-180dc27e.js";import{_ as g}from"./InputLabel-d304eddb.js";import{_ as F}from"./PrimaryButton-ed552f5c.js";import{_ as T}from"./TextInput-47974816.js";import{_ as j}from"./ActionSection-5eaf850b.js";import{_ as O}from"./TextAreaInput-adb1d179.js";import"./SectionTitle-eb4cf37e.js";import"./_plugin-vue_export-helper-c27b6911.js";const R={class:"flex items-center px-2"},U={class:"flex-shrink-0"},z=["src","alt"],C={class:"ml-3 min-w-0 flex-1"},D={class:"text-base font-medium text-gray-800 truncate capitalize"},K={class:"text-sm font-medium text-gray-500 truncate"},q={class:"col-span-6 sm:col-span-3"},A={class:"flex"},E=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),M={class:"mt-1 text-xs text-gray-600"},P={class:"col-span-6 sm:col-span-4"},ae={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String,bank:Object,account_no:String},setup(b){const n=b,e=h({amount:null,bank:n.bank,account_no:n.account_no,desc:null}),{...p}=w(()=>N().props.user).value,d=_(null),v=()=>{e.amount=l.value.replaceAll(".",""),Number(e.amount)>=Number(p.wallet_balance)?d.value="Saldo kurang":p.pin?e.post(route("pin.moneyTransfer"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{}}):e.post(route("money-transfer.confirm"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{}})};function x(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const l=_(null);return S(l,t=>{l.value=t.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")}),(t,c)=>(k(),$(y,null,[a(j,null,{title:o(()=>[]),description:o(()=>[]),content:o(()=>[s("div",R,[s("div",U,[s("img",{class:"h-5 w-full",src:n.bank.logo,alt:n.bank.name},null,8,z)]),s("div",C,[s("div",D,i(n.users.name),1),s("div",K,i(n.account_no),1)])])]),_:1}),a(I,{onSubmitted:v},{title:o(()=>[u(" Mau Transfer berapa? ")]),description:o(()=>[]),form:o(()=>[s("div",q,[a(g,{for:"amount",value:"Nominal"}),s("div",A,[E,a(T,{id:"amount",modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=m=>l.value=m),type:"tel",class:"mt-1 block w-full rounded-l-none",min:"1",max:Number(t.$page.props.user.wallet_balance)<=2e6?t.$page.props.user.wallet_balance:2e6,required:"",autofocus:""},null,8,["modelValue","max"])]),a(f,{message:r(e).errors.amount||d.value,class:"mt-2"},null,8,["message"]),s("p",M," Nominal Rp 1.000 - Rp "+i(Number(t.$page.props.user.wallet_balance)<=2e6?x(t.$page.props.user.wallet_balance):"2.000.000"),1)]),s("div",P,[a(g,{for:"amount",value:"Keterangan"}),a(O,{id:"desc",modelValue:r(e).desc,"onUpdate:modelValue":c[1]||(c[1]=m=>r(e).desc=m),type:"text",class:"mt-1 block w-full",rows:"1"},null,8,["modelValue"]),a(f,{message:r(e).errors.desc,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[a(B,{on:r(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[u(" Berhasil disimpan. ")]),_:1},8,["on"]),a(F,{class:V({"opacity-25":r(e).processing}),disabled:r(e).processing},{default:o(()=>[u(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1})],64))}};export{ae as default};

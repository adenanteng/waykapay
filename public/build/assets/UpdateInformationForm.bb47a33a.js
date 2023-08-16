import{v as u,e as _,b as t,w as s,F as p,o as f,a as e,t as b,g as r,u as a,n as g}from"./app.4768fc91.js";import{_ as h}from"./ActionMessage.8bdc095d.js";import{_ as x}from"./FormSection.a2fa8f68.js";import{_ as v}from"./InputError.8fc2874b.js";import{_ as $}from"./InputLabel.75bd91c2.js";import{_ as k}from"./PrimaryButton.4b0375b4.js";import{_ as y}from"./TextInput.6527242b.js";import{_ as S}from"./ActionSection.6f03ad6b.js";import"./SectionTitle.9bd31227.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"flex items-center px-5"},V={class:"flex-shrink-0"},B=["src","alt"],j={class:"ml-3 min-w-0 flex-1"},N=e("div",{class:"text-base font-medium text-gray-800 truncate capitalize"}," John Doe ",-1),F={class:"text-sm font-medium text-gray-500 truncate"},I={class:"col-span-6 sm:col-span-3"},O={class:"flex"},z=e("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),A={__name:"UpdateInformationForm",props:{users:Object|String,response:Object|String,bank:Object,account_no:String},setup(l){const n=l,o=u({amount:null,bank:n.bank,account_no:n.account_no}),m=()=>{o.post(route("money-transfer.confirm",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})};return(i,c)=>(f(),_(p,null,[t(S,null,{title:s(()=>[]),description:s(()=>[]),content:s(()=>[e("div",w,[e("div",V,[e("img",{class:"h-12 w-12 rounded-full object-cover",src:i.$page.props.user.profile_photo_url,alt:i.$page.props.user.name},null,8,B)]),e("div",j,[N,e("div",F,b(n.account_no),1)])])]),_:1}),t(x,{onSubmitted:m},{title:s(()=>[r(" Mau Transfer berapa? ")]),description:s(()=>[]),form:s(()=>[e("div",I,[t($,{for:"amount",value:"Nominal"}),e("div",O,[z,t(y,{id:"amount",modelValue:a(o).amount,"onUpdate:modelValue":c[0]||(c[0]=d=>a(o).amount=d),type:"number",class:"mt-1 block w-full rounded-l-none",min:"10000",max:"9999999",required:""},null,8,["modelValue"])]),t(v,{message:a(o).errors.amount,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[t(h,{on:a(o).recentlySuccessful,class:"mr-3"},{default:s(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),t(k,{class:g({"opacity-25":a(o).processing}),disabled:a(o).processing},{default:s(()=>[r(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1})],64))}};export{A as default};

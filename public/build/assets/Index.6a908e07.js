import{_ as c}from"./AppLayout.49b1807d.js";import{T as p,d as u,c as _,w as r,o as d,b as o,g as a,t as f,a as g,u as s,n as b}from"./app.02226c0f.js";import{_ as k}from"./TextInput.77087428.js";import{_ as $}from"./InputError.343cd8e6.js";import{_ as P}from"./PreviousButton.89cf3aa1.js";import{_ as v}from"./FormSection.8b6d23ff.js";import{_ as B}from"./ActionMessage.c147a979.js";import{_ as N}from"./PrimaryButton.e5c2817c.js";import{_ as S}from"./InputLabel.07efbaa9.js";import"./helper.d1a2ae5f.js";import"./DarkmodeToggle.8ce1b49f.js";import"./label.c99a3601.js";import"./focus-management.260e0ddc.js";import"./SectionTitle.f2f073a7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(x){const e=p({customer_no:""}),m=()=>{e.get(route("pln.prepaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function i(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return u("Pulsa"),(t,n)=>(d(),_(c,{title:"PLN Prepaid",name:"PLN Prepaid",desc:"Masukkan nomor meter"},{previous:r(()=>[o(P)]),default:r(()=>[o(v,{onSubmitted:m},{title:r(()=>[a(" Token PLN Prepaid ")]),description:r(()=>[a(" * Saldo Rekening Rp "+f(i(t.$page.props.user.wallet_balance)),1)]),form:r(()=>[g("div",V,[o(S,{for:"number",value:"Masukkan no. meter / id pelanggan"}),o(k,{id:"number",modelValue:s(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>s(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),o($,{message:s(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[o(B,{on:s(e).recentlySuccessful,class:"mr-3"},{default:r(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),o(N,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};

import{_ as p}from"./AppLayout.5f6d33ec.js";import{v as c,d as _,c as u,w as r,o as d,b as o,g as a,t as f,a as g,u as s,n as b}from"./app.76ef19f7.js";import{_ as k}from"./TextInput.d049d762.js";import{_ as $}from"./InputError.b82add93.js";import{_ as P}from"./PreviousButton.97f0282c.js";import{_ as v}from"./FormSection.ca08c0fb.js";import{_ as B}from"./ActionMessage.267f0be9.js";import{_ as N}from"./PrimaryButton.5ea38510.js";import{_ as S}from"./InputLabel.f81d2326.js";import"./helper.1b73f0ca.js";import"./DarkmodeToggle.6ab45a98.js";import"./label.6860666b.js";import"./focus-management.539ad3ba.js";import"./SectionTitle.db7c4495.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(x){const e=c({customer_no:""}),m=()=>{e.post(route("pln.prepaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function i(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return _("Pulsa"),(t,n)=>(d(),u(p,{title:"PLN Prepaid",name:"PLN Prepaid",desc:"Masukkan nomor meter"},{previous:r(()=>[o(P)]),default:r(()=>[o(v,{onSubmitted:m},{title:r(()=>[a(" Token PLN Prepaid ")]),description:r(()=>[a(" * Saldo Rekening Rp "+f(i(t.$page.props.user.wallet_balance)),1)]),form:r(()=>[g("div",V,[o(S,{for:"number",value:"Masukkan no. meter / id pelanggan"}),o(k,{id:"number",modelValue:s(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>s(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:""},null,8,["modelValue"]),o($,{message:s(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[o(B,{on:s(e).recentlySuccessful,class:"mr-3"},{default:r(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),o(N,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};
import{_ as c}from"./AppLayout.bbec15d8.js";import{v as p,d as u,c as _,w as o,o as d,b as s,g as r,t as f,a as g,u as a,n as b}from"./app.713b49ec.js";import{_ as k}from"./TextInput.e96279f6.js";import{_ as $}from"./InputError.083c5509.js";import{_ as P}from"./PreviousButton.f2c6f179.js";import{_ as v}from"./FormSection.f0c54ef8.js";import{_ as B}from"./ActionMessage.d30a1dc2.js";import{_ as N}from"./PrimaryButton.a7c681ab.js";import{_ as S}from"./InputLabel.77b925ca.js";import"./helper.1a28506a.js";import"./DarkmodeToggle.79b0e40d.js";import"./label.404cc3a1.js";import"./focus-management.aa298aef.js";import"./SectionTitle.53c095c7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(x){const e=p({customer_no:""}),m=()=>{e.post(route("pln.postpaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function i(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return u("Pulsa"),(t,n)=>(d(),_(c,{title:"PLN Postpaid",name:"PLN Postpaid",desc:"Masukkan nomor meter"},{previous:o(()=>[s(P)]),default:o(()=>[s(v,{onSubmitted:m},{title:o(()=>[r(" PLN Postpaid ")]),description:o(()=>[r(" * Saldo Rekening Rp "+f(i(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[g("div",V,[s(S,{for:"number",value:"Masukkan no. meter / id pelanggan"}),s(k,{id:"number",modelValue:a(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>a(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),s($,{message:a(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(B,{on:a(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),s(N,{class:b({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:o(()=>[r(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};
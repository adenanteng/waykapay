import{_ as c}from"./AppLayout.07f189c3.js";import{v as p,c as _,w as o,o as u,b as s,g as r,t as d,a as f,u as a,n as g}from"./app.95edcb59.js";import{_ as b}from"./TextInput.23af0db4.js";import{_ as k}from"./InputError.86daec47.js";import{_ as $}from"./PreviousButton.6ffe7e92.js";import{_ as v}from"./FormSection.ad729877.js";import{_ as P}from"./ActionMessage.c76d1a44.js";import{_ as B}from"./PrimaryButton.51c6f363.js";import{_ as N}from"./InputLabel.de57b838.js";import"./Banner.8a741325.js";import"./DarkmodeToggle.65022e3c.js";import"./helper.e9fc3b37.js";import"./label.04e5b9a3.js";import"./focus-management.e1a1c033.js";import"./SectionTitle.3ec3116c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(V){const e=p({customer_no:""}),i=()=>{e.get(route("pln.postpaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function m(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,n)=>(u(),_(c,{title:"PLN Postpaid",name:"PLN Postpaid",desc:"Masukkan nomor meter"},{previous:o(()=>[s($)]),default:o(()=>[s(v,{onSubmitted:i},{title:o(()=>[r(" Tagihan PLN Postpaid ")]),description:o(()=>[r(" * Saldo Rekening Rp "+d(m(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[f("div",S,[s(N,{for:"number",value:"Masukkan no. meter / id pelanggan"}),s(b,{id:"number",modelValue:a(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>a(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),s(k,{message:a(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(P,{on:a(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),s(B,{class:g({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:o(()=>[r(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};

import{_ as c}from"./AppLayout.f7970ecf.js";import{T as p,c as _,w as o,o as u,b as r,g as a,t as d,a as f,u as s,n as g}from"./app.3b3435f0.js";import{_ as b}from"./TextInput.467f407e.js";import{_ as k}from"./InputError.98bd2c9a.js";import{_ as $}from"./PreviousButton.10addfeb.js";import{_ as h}from"./FormSection.ef7505af.js";import{_ as v}from"./ActionMessage.3152c2b1.js";import{_ as B}from"./PrimaryButton.108db426.js";import{_ as I}from"./InputLabel.0b10d138.js";import"./Banner.d16fd67e.js";import"./DarkmodeToggle.15659791.js";import"./helper.e9fc3b37.js";import"./label.c1fe166e.js";import"./index.f7be5b6c.js";import"./focus-management.f1a9a0db.js";import"./SectionTitle.07a70bac.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S={class:"col-span-6 sm:col-span-3"},E={__name:"Index",props:{users:Object},setup(V){const e=p({customer_no:""}),m=()=>{e.post(route("internet.indihome.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function i(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,n)=>(u(),_(c,{title:"Indihome",name:"Indihome",desc:"Masukkan nomor meter"},{previous:o(()=>[r($)]),default:o(()=>[r(h,{onSubmitted:m},{title:o(()=>[a(" Indihome ")]),description:o(()=>[a(" * Saldo Rekening Rp "+d(i(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[f("div",S,[r(I,{for:"number",value:"Masukkan id pelanggan"}),r(b,{id:"number",modelValue:s(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>s(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),r(k,{message:s(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[r(v,{on:s(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),r(B,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:o(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{E as default};
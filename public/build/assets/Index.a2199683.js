import{_ as c}from"./AppLayout.aa08c1bb.js";import{v as p,d as u,c as _,w as o,o as d,b as r,g as a,t as f,a as g,u as s,n as b}from"./app.403f70f3.js";import{_ as k}from"./TextInput.a902d631.js";import{_ as $}from"./InputError.5f4479da.js";import{_ as P}from"./PreviousButton.57939b89.js";import{_ as v}from"./FormSection.d9d87388.js";import{_ as B}from"./ActionMessage.b5b4677b.js";import{_ as N}from"./PrimaryButton.98429e51.js";import{_ as S}from"./InputLabel.645ebda6.js";import"./helper.909b7ace.js";import"./DarkmodeToggle.75376108.js";import"./label.1dd2e6bd.js";import"./focus-management.46bfa99f.js";import"./SectionTitle.925a2849.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(x){const e=p({customer_no:""}),m=()=>{e.post(route("pln.prepaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function i(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return u("Pulsa"),(t,n)=>(d(),_(c,{title:"PLN Prepaid",name:"PLN Prepaid",desc:"Masukkan nomor meter"},{previous:o(()=>[r(P)]),default:o(()=>[r(v,{onSubmitted:m},{title:o(()=>[a(" Token PLN Prepaid ")]),description:o(()=>[a(" * Saldo Rekening Rp "+f(i(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[g("div",V,[r(S,{for:"number",value:"Masukkan no. meter / id pelanggan"}),r(k,{id:"number",modelValue:s(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>s(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),r($,{message:s(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[r(B,{on:s(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),r(N,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:o(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};
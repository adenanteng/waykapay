import{_ as p}from"./AppLayout.c8e4c28e.js";import{v as c,d as _,c as u,w as r,o as d,b as o,g as a,t as f,a as g,u as s,n as k}from"./app.2db1e45b.js";import{_ as b}from"./TextInput.7a5d07dd.js";import{_ as $}from"./InputError.13a3c963.js";import{_ as P}from"./PreviousButton.b2a43857.js";import{_ as v}from"./FormSection.a8c930f9.js";import{_ as B}from"./ActionMessage.0daab4da.js";import{_ as N}from"./PrimaryButton.a98d318d.js";import{_ as S}from"./InputLabel.642a6548.js";import"./helper.facc3933.js";import"./DarkmodeToggle.2a21df91.js";import"./label.786176b5.js";import"./focus-management.8074dedd.js";import"./SectionTitle.004ad887.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(x){const e=c({customer_no:""}),i=()=>{e.post(route("pln.prepaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function m(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return _("Pulsa"),(t,n)=>(d(),u(p,{title:"PLN Prepaid",name:"PLN Prepaid",desc:"Masukkan nomor meter"},{previous:r(()=>[o(P)]),default:r(()=>[o(v,{onSubmitted:i},{title:r(()=>[a(" Token PLN Prepaid ")]),description:r(()=>[a(" * Saldo Rekening Rp "+f(m(t.$page.props.user.wallet_balance)),1)]),form:r(()=>[g("div",V,[o(S,{for:"number",value:"Masukkan no. meter / id pelanggan"}),o(b,{id:"number",modelValue:s(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>s(e).customer_no=l),type:"tel",class:"mt-1 block w-full",minlength:"10",required:""},null,8,["modelValue"]),o($,{message:s(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[o(B,{on:s(e).recentlySuccessful,class:"mr-3"},{default:r(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),o(N,{class:k({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};

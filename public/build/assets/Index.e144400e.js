import{_ as c}from"./AppLayout.2876d65e.js";import{v as p,c as _,w as o,o as u,b as s,g as r,t as d,a as f,u as a,n as g}from"./app.7e03c836.js";import{_ as b}from"./TextInput.a90920db.js";import{_ as k}from"./InputError.80692d2c.js";import{_ as $}from"./PreviousButton.8306c122.js";import{_ as v}from"./FormSection.f6b35851.js";import{_ as P}from"./ActionMessage.c4bf383d.js";import{_ as B}from"./PrimaryButton.b2560234.js";import{_ as N}from"./InputLabel.58db40d6.js";import"./helper.470d32b7.js";import"./DarkmodeToggle.6e5b95c2.js";import"./label.545dfb3c.js";import"./focus-management.46dccdae.js";import"./SectionTitle.d6499c22.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S={class:"col-span-6 sm:col-span-3"},O={__name:"Index",props:{users:Object},setup(V){const e=p({customer_no:""}),i=()=>{e.get(route("pln.postpaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function m(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,n)=>(u(),_(c,{title:"PLN Postpaid",name:"PLN Postpaid",desc:"Masukkan nomor meter"},{previous:o(()=>[s($)]),default:o(()=>[s(v,{onSubmitted:i},{title:o(()=>[r(" Tagihan PLN Postpaid ")]),description:o(()=>[r(" * Saldo Rekening Rp "+d(m(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[f("div",S,[s(N,{for:"number",value:"Masukkan no. meter / id pelanggan"}),s(b,{id:"number",modelValue:a(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>a(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),s(k,{message:a(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(P,{on:a(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),s(B,{class:g({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:o(()=>[r(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{O as default};

import{_ as c}from"./AppLayout.bbec15d8.js";import{v as p,c as u,w as o,o as _,b as s,g as a,t as f,a as d,u as r,n as b}from"./app.713b49ec.js";import{_ as g}from"./TextInput.e96279f6.js";import{_ as k}from"./InputError.083c5509.js";import{_ as y}from"./PreviousButton.f2c6f179.js";import{_ as $}from"./FormSection.f0c54ef8.js";import{_ as v}from"./ActionMessage.d30a1dc2.js";import{_ as B}from"./PrimaryButton.a7c681ab.js";import{_ as S}from"./InputLabel.77b925ca.js";import"./helper.1a28506a.js";import"./DarkmodeToggle.79b0e40d.js";import"./label.404cc3a1.js";import"./focus-management.aa298aef.js";import"./SectionTitle.53c095c7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(x){const e=p({customer_no:""}),i=()=>{e.post(route("internet.myrepublic.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function m(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,n)=>(_(),u(c,{title:"MyRepublic",name:"MyRepublic",desc:"Masukkan nomor meter"},{previous:o(()=>[s(y)]),default:o(()=>[s($,{onSubmitted:i},{title:o(()=>[a(" MyRepublic ")]),description:o(()=>[a(" * Saldo Rekening Rp "+f(m(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[d("div",V,[s(S,{for:"number",value:"Masukkan id pelanggan"}),s(g,{id:"number",modelValue:r(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>r(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),s(k,{message:r(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(v,{on:r(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),s(B,{class:b({"opacity-25":r(e).processing}),disabled:r(e).processing},{default:o(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};
import{_ as c}from"./AppLayout.b5ce21fb.js";import{v as p,d as u,c as _,w as o,o as f,b as s,g as t,t as d,a as g,u as r,n as b}from"./app.a23797f5.js";import{_ as k}from"./TextInput.f70e0561.js";import{_ as $}from"./InputError.dc8d7427.js";import{_ as v}from"./PreviousButton.81a25e2b.js";import{_ as h}from"./FormSection.b8a53074.js";import{_ as B}from"./ActionMessage.59b97e66.js";import{_ as S}from"./PrimaryButton.d9585310.js";import{_ as V}from"./InputLabel.9bbaf73d.js";import"./DarkmodeToggle.1c060a83.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.7e025992.js";import"./label.10fce30c.js";import"./focus-management.f6d07d7b.js";import"./SectionTitle.7dff3197.js";const y={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(P){const e=p({customer_no:""}),m=()=>{e.post(route("product.plnInquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function l(a){return(a/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return u("Pulsa"),(a,n)=>(f(),_(c,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:o(()=>[s(v,{href:a.route("dashboard")},null,8,["href"])]),default:o(()=>[s(h,{onSubmitted:m},{title:o(()=>[t(" Token PLN ")]),description:o(()=>[t(" * Saldo Rekening Rp "+d(l(a.$page.props.user.wallet_balance)),1)]),form:o(()=>[g("div",y,[s(V,{for:"number",value:"Masukkan no. meter / id pelanggan"}),s(k,{id:"number",modelValue:r(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=i=>r(e).customer_no=i),type:"tel",class:"mt-1 block w-full",minlength:"10",required:""},null,8,["modelValue"]),s($,{message:r(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(B,{on:r(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[t(" Berhasil disimpan. ")]),_:1},8,["on"]),s(S,{class:b({"opacity-25":r(e).processing}),disabled:r(e).processing},{default:o(()=>[t(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};
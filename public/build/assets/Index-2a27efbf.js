import{_ as f}from"./AppLayout-949794e2.js";import{T as d,o as g,c as k,w as o,b as s,g as t,a as n,t as l,u as r,n as b}from"./app-dc86a12b.js";import{_ as $}from"./TextInput-efe348ae.js";import{_ as S}from"./InputError-2ed4dc45.js";import{_ as v}from"./PreviousButton-62a92050.js";import{_ as B}from"./FormSection-bad9c11a.js";import{_ as V}from"./ActionMessage-e7b0e041.js";import{_ as h}from"./PrimaryButton-75b986f2.js";import{_ as x}from"./InputLabel-062078be.js";import"./OnlineStatus-cf49adab.js";import"./index-2f9ae09f.js";import"./DarkmodeToggle-c8c93ceb.js";import"./helper-04030b53.js";import"./use-controllable-cac581c0.js";import"./bcrypt-eece9a6d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-29f7133a.js";import"./DialogModal-bb259a2e.js";import"./BackgroundParticle-abb713ee.js";import"./focus-management-507f3882.js";import"./SectionTitle-bd97a9bf.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"capitalize"},w={class:"col-span-6 sm:col-span-3"},W={__name:"Index",props:{sku:String},setup(c){const a=c,e=d({customer_no:"",sku:a.sku}),p=()=>{e.post(route("pasca.inquiry"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0})};function u(m){return(m/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(m,i)=>(g(),k(f,{title:a.sku,name:a.sku,desc:"Masukkan nomor meter"},{previous:o(()=>[s(v)]),default:o(()=>[s(B,{onSubmitted:p},{title:o(()=>[t(" Tagihan "),n("span",y,l(a.sku.replaceAll("-"," ")),1)]),description:o(()=>[t(" * Saldo Rekening Rp "+l(u(m.$page.props.user.wallet_balance)),1)]),form:o(()=>[n("div",w,[s(x,{for:"number",value:"Masukkan nomor pelanggan"}),s($,{id:"number",modelValue:r(e).customer_no,"onUpdate:modelValue":i[0]||(i[0]=_=>r(e).customer_no=_),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),s(S,{message:r(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(V,{on:r(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[t(" Berhasil disimpan. ")]),_:1},8,["on"]),s(h,{class:b({"opacity-25":r(e).processing}),disabled:r(e).processing},{default:o(()=>[t(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1},8,["title","name"]))}};export{W as default};

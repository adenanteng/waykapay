import{_ as f}from"./AppLayout-cda7d3c0.js";import{T as d,o as g,c as k,w as e,b as o,g as t,a as i,t as l,u as a,n as b}from"./app-a234bcce.js";import{_ as $}from"./TextInput-3a836ea5.js";import{_ as S}from"./InputError-c5da591a.js";import{_ as v}from"./PreviousButton-aa336f97.js";import{_ as B}from"./FormSection-85ecf11f.js";import{_ as V}from"./ActionMessage-1846c63a.js";import{_ as h}from"./PrimaryButton-a5a3d9ac.js";import{_ as x}from"./InputLabel-8336cd53.js";import"./OnlineStatus-dcc6b17e.js";import"./index-823f971e.js";import"./DarkmodeToggle-bfd6660e.js";import"./use-controllable-ee60ad7d.js";import"./focus-management-48d712a8.js";import"./SectionTitle-1c785a6c.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"capitalize"},w={class:"col-span-6 sm:col-span-3"},H={__name:"Index",props:{sku:String},setup(c){const r=c,s=d({customer_no:"",sku:r.sku}),p=()=>{s.post(route("pasca.inquiry"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0})};function u(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(n,m)=>(g(),k(f,{title:r.sku,name:r.sku,desc:"Masukkan nomor meter"},{previous:e(()=>[o(v)]),default:e(()=>[o(B,{onSubmitted:p},{title:e(()=>[t(" Tagihan "),i("span",y,l(r.sku.replaceAll("-"," ")),1)]),description:e(()=>[t(" * Saldo Rekening Rp "+l(u(n.$page.props.user.wallet_balance)),1)]),form:e(()=>[i("div",w,[o(x,{for:"number",value:"Masukkan nomor pelanggan"}),o($,{id:"number",modelValue:a(s).customer_no,"onUpdate:modelValue":m[0]||(m[0]=_=>a(s).customer_no=_),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),o(S,{message:a(s).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[o(V,{on:a(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[t(" Berhasil disimpan. ")]),_:1},8,["on"]),o(h,{class:b({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:e(()=>[t(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1},8,["title","name"]))}};export{H as default};
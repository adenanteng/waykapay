import{_}from"./AppLayout-9e399e83.js";import{T as f,o as d,c as g,w as e,b as o,g as t,t as i,a as k,u as r,n as b}from"./app-a082e4a3.js";import{_ as $}from"./TextInput-1d1a4a50.js";import{_ as S}from"./InputError-76f9bff6.js";import{_ as v}from"./PreviousButton-cd6583e2.js";import{_ as B}from"./FormSection-d6460505.js";import{_ as V}from"./ActionMessage-289a9222.js";import{_ as x}from"./PrimaryButton-58cb756a.js";import{_ as y}from"./InputLabel-8404d542.js";import"./OnlineStatus-e706e782.js";import"./index-ab6210c8.js";import"./DarkmodeToggle-bdff96fc.js";import"./use-controllable-15c413b6.js";import"./focus-management-88f95287.js";import"./SectionTitle-d627e35c.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={class:"col-span-6 sm:col-span-3"},G={__name:"Index",props:{sku:String},setup(l){const a=l,s=f({customer_no:"",sku:a.sku}),c=()=>{s.post(route("pasca.inquiry"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0})};function p(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(n,m)=>(d(),g(_,{title:a.sku,name:a.sku,desc:"Masukkan nomor meter"},{previous:e(()=>[o(v)]),default:e(()=>[o(B,{onSubmitted:c},{title:e(()=>[t(" Tagihan "+i(a.sku),1)]),description:e(()=>[t(" * Saldo Rekening Rp "+i(p(n.$page.props.user.wallet_balance)),1)]),form:e(()=>[k("div",h,[o(y,{for:"number",value:"Masukkan nomor pelanggan"}),o($,{id:"number",modelValue:r(s).customer_no,"onUpdate:modelValue":m[0]||(m[0]=u=>r(s).customer_no=u),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),o(S,{message:r(s).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[o(V,{on:r(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[t(" Berhasil disimpan. ")]),_:1},8,["on"]),o(x,{class:b({"opacity-25":r(s).processing}),disabled:r(s).processing},{default:e(()=>[t(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1},8,["title","name"]))}};export{G as default};
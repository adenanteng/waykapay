import{_ as c}from"./AppLayout-62337bf6.js";import{T as p,o as _,c as u,w as o,b as s,g as r,t as d,a as f,u as a,n as g}from"./app-4085e221.js";import{_ as b}from"./TextInput-7f9dc754.js";import{_ as k}from"./InputError-731f314d.js";import{_ as $}from"./PreviousButton-9a2c50f0.js";import{_ as P}from"./FormSection-ad87a98b.js";import{_ as v}from"./ActionMessage-07083329.js";import{_ as B}from"./PrimaryButton-cbca2869.js";import{_ as N}from"./InputLabel-56c7f2ad.js";import"./OnlineStatus-29f96179.js";import"./index-9efacde3.js";import"./DarkmodeToggle-79b75fe7.js";import"./use-controllable-a1e872e2.js";import"./focus-management-6fabc781.js";import"./SectionTitle-105b59b8.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(V){const e=p({customer_no:""}),i=()=>{e.get(route("pln.postpaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function m(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,n)=>(_(),u(c,{title:"PLN Postpaid",name:"PLN Postpaid",desc:"Masukkan nomor meter"},{previous:o(()=>[s($)]),default:o(()=>[s(P,{onSubmitted:i},{title:o(()=>[r(" Tagihan PLN Postpaid ")]),description:o(()=>[r(" * Saldo Rekening Rp "+d(m(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[f("div",S,[s(N,{for:"number",value:"Masukkan no. meter / id pelanggan"}),s(b,{id:"number",modelValue:a(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>a(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),s(k,{message:a(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(v,{on:a(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),s(B,{class:g({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:o(()=>[r(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};
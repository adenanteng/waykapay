import{_ as c}from"./AppLayout-b1eb558d.js";import{T as p,o as u,c as _,w as o,b as r,g as a,t as f,a as d,u as s,n as b}from"./app-38c537a9.js";import{_ as g}from"./TextInput-b81cccd4.js";import{_ as k}from"./InputError-d8a2e7fb.js";import{_ as y}from"./PreviousButton-57bb603f.js";import{_ as $}from"./FormSection-ed6d921f.js";import{_ as v}from"./ActionMessage-6964db41.js";import{_ as B}from"./PrimaryButton-2f08a671.js";import{_ as S}from"./InputLabel-888891a9.js";import"./OnlineStatus-2ddf590e.js";import"./index-67b55ecf.js";import"./DarkmodeToggle-9e599ed8.js";import"./use-controllable-6e5c83eb.js";import"./focus-management-8893ba32.js";import"./SectionTitle-08146f46.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"col-span-6 sm:col-span-3"},A={__name:"Index",props:{users:Object},setup(x){const e=p({customer_no:""}),i=()=>{e.post(route("internet.myrepublic.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function m(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,n)=>(u(),_(c,{title:"MyRepublic",name:"MyRepublic",desc:"Masukkan nomor meter"},{previous:o(()=>[r(y)]),default:o(()=>[r($,{onSubmitted:i},{title:o(()=>[a(" MyRepublic ")]),description:o(()=>[a(" * Saldo Rekening Rp "+f(m(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[d("div",V,[r(S,{for:"number",value:"Masukkan id pelanggan"}),r(g,{id:"number",modelValue:s(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>s(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),r(k,{message:s(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[r(v,{on:s(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),r(B,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:o(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{A as default};

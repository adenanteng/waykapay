import{_ as p}from"./AppLayout-5df73110.js";import{T as c,d as u,o as _,c as d,w as r,b as o,g as a,t as f,a as g,u as s,n as b}from"./app-7b920a22.js";import{_ as k}from"./TextInput-2746597f.js";import{_ as $}from"./InputError-03b72b40.js";import{_ as P}from"./PreviousButton-8b004fc7.js";import{_ as v}from"./FormSection-8832f293.js";import{_ as B}from"./ActionMessage-8525f4bc.js";import{_ as N}from"./PrimaryButton-61babf73.js";import{_ as S}from"./InputLabel-cfbc885d.js";import"./OnlineStatus-0befbef9.js";import"./index-2ef20189.js";import"./DarkmodeToggle-f2bae1fc.js";import"./helper-04030b53.js";import"./use-controllable-4a7bdeb3.js";import"./bcrypt-0ae443fe.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-d56268e8.js";import"./DialogModal-47c15960.js";import"./focus-management-ea855ec9.js";import"./SectionTitle-a8c40a60.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"col-span-6 sm:col-span-3"},K={__name:"Index",props:{users:Object},setup(x){const e=c({customer_no:""}),i=()=>{e.get(route("pln.prepaid.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function n(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return u("Pulsa"),(t,m)=>(_(),d(p,{title:"PLN Prepaid",name:"PLN Prepaid",desc:"Masukkan nomor meter"},{previous:r(()=>[o(P)]),default:r(()=>[o(v,{onSubmitted:i},{title:r(()=>[a(" Token PLN Prepaid ")]),description:r(()=>[a(" * Saldo Rekening Rp "+f(n(t.$page.props.user.wallet_balance)),1)]),form:r(()=>[g("div",V,[o(S,{for:"number",value:"Masukkan no. meter / id pelanggan"}),o(k,{id:"number",modelValue:s(e).customer_no,"onUpdate:modelValue":m[0]||(m[0]=l=>s(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),o($,{message:s(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[o(B,{on:s(e).recentlySuccessful,class:"mr-3"},{default:r(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),o(N,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{K as default};
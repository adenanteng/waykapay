import{_ as c}from"./AppLayout.aa08c1bb.js";import{v as p,c as _,w as o,o as u,b as s,g as a,t as d,a as f,u as r,n as g}from"./app.403f70f3.js";import{_ as b}from"./TextInput.a902d631.js";import{_ as k}from"./InputError.5f4479da.js";import{_ as $}from"./PreviousButton.57939b89.js";import{_ as h}from"./FormSection.d9d87388.js";import{_ as v}from"./ActionMessage.b5b4677b.js";import{_ as B}from"./PrimaryButton.98429e51.js";import{_ as I}from"./InputLabel.645ebda6.js";import"./helper.909b7ace.js";import"./DarkmodeToggle.75376108.js";import"./label.1dd2e6bd.js";import"./focus-management.46bfa99f.js";import"./SectionTitle.925a2849.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S={class:"col-span-6 sm:col-span-3"},U={__name:"Index",props:{users:Object},setup(V){const e=p({customer_no:""}),m=()=>{e.post(route("internet.indihome.inquiry",e),{errorBag:"storeInformation",preserveScroll:!0})};function i(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,n)=>(u(),_(c,{title:"Indihome",name:"Indihome",desc:"Masukkan nomor meter"},{previous:o(()=>[s($)]),default:o(()=>[s(h,{onSubmitted:m},{title:o(()=>[a(" Indihome ")]),description:o(()=>[a(" * Saldo Rekening Rp "+d(i(t.$page.props.user.wallet_balance)),1)]),form:o(()=>[f("div",S,[s(I,{for:"number",value:"Masukkan id pelanggan"}),s(b,{id:"number",modelValue:r(e).customer_no,"onUpdate:modelValue":n[0]||(n[0]=l=>r(e).customer_no=l),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),s(k,{message:r(e).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(v,{on:r(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),s(B,{class:g({"opacity-25":r(e).processing}),disabled:r(e).processing},{default:o(()=>[a(" Cek ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{U as default};
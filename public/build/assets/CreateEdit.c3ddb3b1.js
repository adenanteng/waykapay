import{_ as h}from"./AppLayout.387f14be.js";import{T as y,d as r,c as _,w as o,o as d,b as a,g as l,t,a as s,e as k,n as $,u as p,F as x}from"./app.76649d71.js";import{_ as B}from"./PreviousButton.95a4a774.js";import{_ as N}from"./FormSection.5648f7f8.js";import{_ as w}from"./ActionMessage.69e27b6e.js";import{_ as f}from"./PrimaryButton.a3dce045.js";import{_ as c}from"./InputLabel.9e199ded.js";import"./Banner.34d33dbe.js";import"./DarkmodeToggle.f93d583e.js";import"./helper.e9fc3b37.js";import"./label.e53175a3.js";import"./index.391b5fd0.js";import"./focus-management.e3b7dfc6.js";import"./SectionTitle.198ec890.js";import"./_plugin-vue_export-helper.cdc0426e.js";const T={class:"col-span-6 sm:col-span-3"},I={class:"font-semibold text-gray-900"},R={class:"col-span-6 sm:col-span-3"},S={class:"font-semibold text-gray-900"},j={class:"col-span-6 sm:col-span-3"},C={class:"font-semibold text-gray-900"},F={class:"col-span-6 sm:col-span-3"},P={class:"font-semibold text-gray-900"},V={class:"col-span-6 sm:col-span-3"},E={class:"font-semibold text-gray-900"},O={class:"col-span-6 sm:col-span-3"},z={class:"font-semibold text-gray-900"},A={class:"grid"},se={__name:"CreateEdit",props:{users:Object,customer:Object,fee:Number},setup(g){var u;const e=g,m=y({user_id:(u=e.users.id)!=null?u:null,order_id:e.customer.data.ref_id,customer_no:e.customer.data.customer_no,product_name:e.customer.data.customer_name,sku:e.customer.data.buyer_sku_code,admin:e.customer.data.admin,price:e.customer.data.price,selling_price:e.customer.data.selling_price,category_id:12}),b=()=>{m.post(route("product.topup.pasca"),{errorBag:"storeInformation",preserveScroll:!0})};function i(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return r(!1),r(null),r(null),r(null),r(null),r(null),(n,v)=>(d(),_(h,{title:"Indihome",name:"Indihome",desc:"Masukkan nomor"},{previous:o(()=>[a(B)]),default:o(()=>[a(N,null,{title:o(()=>[l(" Indihome ")]),description:o(()=>[l(" * Saldo Rekening Rp "+t(i(n.$page.props.user.wallet_balance)),1)]),form:o(()=>[s("div",T,[a(c,{for:"number",value:"No. Pelanggan"}),s("div",I,t(e.customer.data.customer_no),1)]),s("div",R,[a(c,{for:"number",value:"Nama Pelanggan"}),s("div",S,t(e.customer.data.customer_name),1)]),s("div",j,[a(c,{for:"number",value:"Lembar Tagihan"}),s("div",C,t(e.customer.data.desc.lembar_tagihan),1)]),s("div",F,[a(c,{for:"number",value:"Harga"}),s("div",P," Rp "+t(i(e.customer.data.price)),1)]),s("div",V,[a(c,{for:"number",value:"Biaya Admin"}),s("div",E," Rp "+t(i(e.customer.data.admin)),1)]),s("div",O,[a(c,{for:"number",value:"Total"}),s("div",z," Rp "+t(i(e.customer.data.selling_price)),1)])]),_:1}),s("div",A,[Number(e.customer.data.buyer_last_saldo)>=Number(e.customer.data.selling_price)?(d(),k(x,{key:0},[a(f,{class:$(["w-full justify-center",{"opacity-25":p(m).processing}]),disabled:p(m).processing||n.$page.props.user.wallet_balance<=e.customer.data.selling_price,onClick:b},{default:o(()=>[l(" Bayar ")]),_:1},8,["class","disabled"]),a(w,{on:n.$page.props.user.wallet_balance<=e.customer.data.selling_price,class:"mr-3"},{default:o(()=>[l(" Saldo anda kurang ")]),_:1},8,["on"])],64)):(d(),_(f,{key:1,class:"w-full justify-center",disabled:""},{default:o(()=>[l(" Tidak Tersedia ")]),_:1}))])]),_:1}))}};export{se as default};
import{_ as h}from"./AppLayout.07f189c3.js";import{v as y,d as t,c as _,w as o,o as m,b as e,g as n,t as r,a,e as k,n as N,u as p,F as P}from"./app.95edcb59.js";import{_ as $}from"./PreviousButton.6ffe7e92.js";import{_ as x}from"./FormSection.ad729877.js";import{_ as B}from"./ActionMessage.c76d1a44.js";import{_ as f}from"./PrimaryButton.51c6f363.js";import{_ as c}from"./InputLabel.de57b838.js";import"./Banner.8a741325.js";import"./DarkmodeToggle.65022e3c.js";import"./helper.e9fc3b37.js";import"./label.04e5b9a3.js";import"./focus-management.e1a1c033.js";import"./SectionTitle.3ec3116c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"col-span-6 sm:col-span-3"},R={class:"font-semibold text-gray-900"},S={class:"col-span-6 sm:col-span-3"},T={class:"font-semibold text-gray-900"},j={class:"col-span-6 sm:col-span-3"},C={class:"font-semibold text-gray-900"},L={class:"col-span-6 sm:col-span-3"},F={class:"font-semibold text-gray-900"},V={class:"col-span-6 sm:col-span-3"},E={class:"font-semibold text-gray-900"},I={class:"col-span-6 sm:col-span-3"},O={class:"font-semibold text-gray-900"},z={class:"grid"},ss={__name:"CreateEdit",props:{users:Object,customer:Object,fee:Number},setup(g){var u;const s=g,i=y({user_id:(u=s.users.id)!=null?u:null,order_id:s.customer.data.ref_id,customer_no:s.customer.data.customer_no,product_name:s.customer.data.customer_name,sku:s.customer.data.buyer_sku_code,admin:s.customer.data.admin,price:s.customer.data.price,selling_price:s.customer.data.selling_price,category_id:12}),b=()=>{i.post(route("product.topup.pasca",i),{errorBag:"storeInformation",preserveScroll:!0})};function d(l){return(l/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return t(!1),t(null),t(null),t(null),t(null),t(null),t("Pulsa"),(l,v)=>(m(),_(h,{title:"PLN Postpaid",name:"PLN Postpaid",desc:"Masukkan nomor"},{previous:o(()=>[e($)]),default:o(()=>[e(x,null,{title:o(()=>[n(" PLN Postpaid ")]),description:o(()=>[n(" * Saldo Rekening Rp "+r(d(l.$page.props.user.wallet_balance)),1)]),form:o(()=>[a("div",w,[e(c,{for:"number",value:"No. Pelanggan"}),a("div",R,r(s.customer.data.customer_no),1)]),a("div",S,[e(c,{for:"number",value:"Nama Pelanggan"}),a("div",T,r(s.customer.data.customer_name),1)]),a("div",j,[e(c,{for:"number",value:"Lembar Tagihan"}),a("div",C,r(s.customer.data.desc.lembar_tagihan),1)]),a("div",L,[e(c,{for:"number",value:"Harga"}),a("div",F," Rp "+r(d(s.customer.data.price)),1)]),a("div",V,[e(c,{for:"number",value:"Biaya Admin"}),a("div",E," Rp "+r(d(s.customer.data.admin)),1)]),a("div",I,[e(c,{for:"number",value:"Total"}),a("div",O," Rp "+r(d(s.customer.data.selling_price)),1)])]),_:1}),a("div",z,[Number(s.customer.data.buyer_last_saldo)>=Number(s.customer.data.selling_price)?(m(),k(P,{key:0},[e(f,{class:N(["w-full justify-center",{"opacity-25":p(i).processing}]),disabled:p(i).processing||l.$page.props.user.wallet_balance<=s.customer.data.selling_price,onClick:b},{default:o(()=>[n(" Bayar ")]),_:1},8,["class","disabled"]),e(B,{on:l.$page.props.user.wallet_balance<=s.customer.data.selling_price,class:"mr-3"},{default:o(()=>[n(" Saldo anda kurang ")]),_:1},8,["on"])],64)):(m(),_(f,{key:1,class:"w-full justify-center",disabled:""},{default:o(()=>[n(" Tidak Tersedia ")]),_:1}))])]),_:1}))}};export{ss as default};
import{_ as h}from"./AppLayout.89f616e0.js";import{v as y,d as t,c as _,w as o,o as m,b as e,g as n,t as r,a,e as k,n as N,u as p,F as P}from"./app.0b0b268b.js";import{_ as $}from"./PreviousButton.05e724b3.js";import{_ as x}from"./FormSection.6ec28e88.js";import{_ as B}from"./ActionMessage.f509a52b.js";import{_ as f}from"./PrimaryButton.41d0c9ca.js";import{_ as c}from"./InputLabel.7286b6e5.js";import"./helper.3f5412c4.js";import"./DarkmodeToggle.218e9c3f.js";import"./label.cf1fbdef.js";import"./focus-management.4d04aa36.js";import"./SectionTitle.a48ca8fd.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"col-span-6 sm:col-span-3"},j={class:"font-semibold text-gray-900"},R={class:"col-span-6 sm:col-span-3"},S={class:"font-semibold text-gray-900"},T={class:"col-span-6 sm:col-span-3"},C={class:"font-semibold text-gray-900"},L={class:"col-span-6 sm:col-span-3"},F={class:"font-semibold text-gray-900"},O={class:"col-span-6 sm:col-span-3"},V={class:"font-semibold text-gray-900"},E={class:"col-span-6 sm:col-span-3"},I={class:"font-semibold text-gray-900"},z={class:"grid"},Z={__name:"CreateEdit",props:{users:Object,response:Object,customer:Object,fee:Number},setup(g){var u;const s=g,i=y({user_id:(u=s.users.id)!=null?u:null,order_id:s.customer.data.ref_id,customer_no:s.customer.data.customer_no,product_name:s.customer.data.customer_name,sku:s.customer.data.buyer_sku_code,admin:s.customer.data.admin,price:s.customer.data.price,selling_price:s.customer.data.selling_price,category_id:12}),b=()=>{i.post(route("product.topup.pasca",i),{errorBag:"storeInformation",preserveScroll:!0})};function d(l){return(l/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return t(!1),t(null),t(null),t(null),t(null),t(null),t("Pulsa"),(l,v)=>(m(),_(h,{title:"PLN Postpaid",name:"PLN Postpaid",desc:"Masukkan nomor"},{previous:o(()=>[e($)]),default:o(()=>[e(x,null,{title:o(()=>[n(" PLN Postpaid ")]),description:o(()=>[n(" * Saldo Rekening Rp "+r(d(l.$page.props.user.wallet_balance)),1)]),form:o(()=>[a("div",w,[e(c,{for:"number",value:"No. Pelanggan"}),a("div",j,r(s.customer.data.customer_no),1)]),a("div",R,[e(c,{for:"number",value:"Nama Pelanggan"}),a("div",S,r(s.customer.data.customer_name),1)]),a("div",T,[e(c,{for:"number",value:"Lembar Tagihan"}),a("div",C,r(s.customer.data.desc.lembar_tagihan),1)]),a("div",L,[e(c,{for:"number",value:"Harga"}),a("div",F," Rp "+r(d(s.customer.data.price)),1)]),a("div",O,[e(c,{for:"number",value:"Biaya Admin"}),a("div",V," Rp "+r(d(s.customer.data.admin)),1)]),a("div",E,[e(c,{for:"number",value:"Total"}),a("div",I," Rp "+r(d(s.customer.data.selling_price)),1)])]),_:1}),a("div",z,[Number(s.customer.data.buyer_last_saldo)>=Number(s.customer.data.selling_price)?(m(),k(P,{key:0},[e(f,{class:N(["w-full justify-center",{"opacity-25":p(i).processing}]),disabled:p(i).processing||l.$page.props.user.wallet_balance<=s.customer.data.selling_price,onClick:b},{default:o(()=>[n(" Bayar ")]),_:1},8,["class","disabled"]),e(B,{on:l.$page.props.user.wallet_balance<=s.customer.data.selling_price,class:"mr-3"},{default:o(()=>[n(" Saldo anda kurang ")]),_:1},8,["on"])],64)):(m(),_(f,{key:1,class:"w-full justify-center",disabled:""},{default:o(()=>[n(" Tidak Tersedia ")]),_:1}))])]),_:1}))}};export{Z as default};

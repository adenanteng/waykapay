import{_ as y}from"./AppLayout.f7970ecf.js";import{T as h,d as t,c as _,w as o,o as d,b as a,g as i,t as r,a as s,e as k,n as $,u as p,F as x}from"./app.3b3435f0.js";import{_ as B}from"./PreviousButton.10addfeb.js";import{_ as N}from"./FormSection.ef7505af.js";import{_ as R}from"./ActionMessage.3152c2b1.js";import{_ as f}from"./PrimaryButton.108db426.js";import{_ as c}from"./InputLabel.0b10d138.js";import"./Banner.d16fd67e.js";import"./DarkmodeToggle.15659791.js";import"./helper.e9fc3b37.js";import"./label.c1fe166e.js";import"./index.f7be5b6c.js";import"./focus-management.f1a9a0db.js";import"./SectionTitle.07a70bac.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"col-span-6 sm:col-span-3"},T={class:"font-semibold text-gray-900"},S={class:"col-span-6 sm:col-span-3"},j={class:"font-semibold text-gray-900"},C={class:"col-span-6 sm:col-span-3"},M={class:"font-semibold text-gray-900"},P={class:"col-span-6 sm:col-span-3"},F={class:"font-semibold text-gray-900"},V={class:"col-span-6 sm:col-span-3"},E={class:"font-semibold text-gray-900"},I={class:"col-span-6 sm:col-span-3"},O={class:"font-semibold text-gray-900"},z={class:"grid"},se={__name:"CreateEdit",props:{users:Object,customer:Object,fee:Number},setup(g){var u;const e=g,m=h({user_id:(u=e.users.id)!=null?u:null,order_id:e.customer.data.ref_id,customer_no:e.customer.data.customer_no,product_name:e.customer.data.customer_name,sku:e.customer.data.buyer_sku_code,admin:e.customer.data.admin,price:e.customer.data.price,selling_price:e.customer.data.selling_price,category_id:12}),b=()=>{m.post(route("product.topup.pasca"),{errorBag:"storeInformation",preserveScroll:!0})};function n(l){return(l/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return t(!1),t(null),t(null),t(null),t(null),t(null),t("Pulsa"),(l,v)=>(d(),_(y,{title:"MyRepublic",name:"MyRepublic",desc:"Masukkan nomor"},{previous:o(()=>[a(B)]),default:o(()=>[a(N,null,{title:o(()=>[i(" MyRepublic ")]),description:o(()=>[i(" * Saldo Rekening Rp "+r(n(l.$page.props.user.wallet_balance)),1)]),form:o(()=>[s("div",w,[a(c,{for:"number",value:"No. Pelanggan"}),s("div",T,r(e.customer.data.customer_no),1)]),s("div",S,[a(c,{for:"number",value:"Nama Pelanggan"}),s("div",j,r(e.customer.data.customer_name),1)]),s("div",C,[a(c,{for:"number",value:"Lembar Tagihan"}),s("div",M,r(e.customer.data.desc.lembar_tagihan),1)]),s("div",P,[a(c,{for:"number",value:"Harga"}),s("div",F," Rp "+r(n(e.customer.data.price)),1)]),s("div",V,[a(c,{for:"number",value:"Biaya Admin"}),s("div",E," Rp "+r(n(e.customer.data.admin)),1)]),s("div",I,[a(c,{for:"number",value:"Total"}),s("div",O," Rp "+r(n(e.customer.data.selling_price)),1)])]),_:1}),s("div",z,[Number(e.customer.data.buyer_last_saldo)>=Number(e.customer.data.selling_price)?(d(),k(x,{key:0},[a(f,{class:$(["w-full justify-center",{"opacity-25":p(m).processing}]),disabled:p(m).processing||l.$page.props.user.wallet_balance<=e.customer.data.selling_price,onClick:b},{default:o(()=>[i(" Bayar ")]),_:1},8,["class","disabled"]),a(R,{on:l.$page.props.user.wallet_balance<=e.customer.data.selling_price,class:"mr-3"},{default:o(()=>[i(" Saldo anda kurang ")]),_:1},8,["on"])],64)):(d(),_(f,{key:1,class:"w-full justify-center",disabled:""},{default:o(()=>[i(" Tidak Tersedia ")]),_:1}))])]),_:1}))}};export{se as default};
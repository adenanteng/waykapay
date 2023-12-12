import{_ as $}from"./AppLayout-b1eb558d.js";import{T as S,i as w,o as c,c as p,w as o,Q as T,b as a,g as n,t,a as s,e as m,f,h as C,F as g,n as P,u as b}from"./app-38c537a9.js";import{_ as R}from"./PreviousButton-57bb603f.js";import{_ as j}from"./FormSection-ed6d921f.js";import{_ as I}from"./ActionMessage-6964db41.js";import{_ as v}from"./PrimaryButton-2f08a671.js";import{_ as r}from"./InputLabel-888891a9.js";import"./OnlineStatus-2ddf590e.js";import"./index-67b55ecf.js";import"./DarkmodeToggle-9e599ed8.js";import"./use-controllable-6e5c83eb.js";import"./focus-management-8893ba32.js";import"./SectionTitle-08146f46.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"col-span-6 sm:col-span-3"},F={class:"font-semibold text-gray-900"},M={class:"col-span-6 sm:col-span-3"},z={class:"font-semibold text-gray-900"},E={key:0,class:"col-span-6 sm:col-span-3"},L={class:"font-semibold text-gray-900"},O={class:"col-span-6 sm:col-span-3"},A={class:"font-semibold text-gray-900"},D={class:"col-span-6 sm:col-span-3"},H={class:"font-semibold text-gray-900"},Q={class:"col-span-6 sm:col-span-3"},q={class:"font-semibold text-gray-900"},G={class:"col-span-6 sm:col-span-3"},J={class:"font-semibold text-gray-900"},K={class:"col-span-6 sm:col-span-3"},U={class:"font-semibold text-gray-900"},W={class:"grid"},me={__name:"CreateEdit",props:{users:Object,customer:Object},setup(y){const e=y,l=S({user_id:e.users.id??null,order_id:e.customer.data.ref_id,customer_no:e.customer.data.customer_no,product_name:e.customer.data.customer_name,sku:e.customer.data.buyer_sku_code,admin:e.customer.data.admin,price:e.customer.data.price,selling_price:e.customer.data.selling_price}),{...h}=w(()=>T().props.user).value,k=()=>{h.pin?l.post(route("pin.topupPasca"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>closeModal()}):l.post(route("product.topup.pasca"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0})};function d(i){return(i/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(i,x)=>(c(),p($,{title:e.customer.data.buyer_sku_code,name:e.customer.data.buyer_sku_code,desc:"Masukkan nomor"},{previous:o(()=>[a(R)]),default:o(()=>[a(j,{class:"sticky top-0 z-40"},{title:o(()=>[n(t(e.customer.data.buyer_sku_code),1)]),description:o(()=>[n(" * Saldo Rekening Rp "+t(d(i.$page.props.user.wallet_balance)),1)]),form:o(()=>{var u,_;return[s("div",V,[a(r,{for:"number",value:"No. Pelanggan"}),s("div",F,t(e.customer.data.customer_no),1)]),s("div",M,[a(r,{for:"number",value:"Nama Pelanggan"}),s("div",z,t(e.customer.data.customer_name),1)]),(u=e.customer.data.desc)!=null&&u.tarif?(c(),m("div",E,[a(r,{for:"number",value:"Stand Meter"}),s("div",L,t(e.customer.data.desc.tarif)+" "+t(e.customer.data.desc.daya??" "),1)])):f("",!0),s("div",O,[a(r,{for:"number",value:"Lembar Tagihan"}),s("div",A,t(e.customer.data.desc.lembar_tagihan),1)]),(_=e.customer.data.desc)!=null&&_.detail?(c(!0),m(g,{key:1},C(e.customer.data.desc.detail,(B,N)=>(c(),m("div",D,[a(r,{for:"number",value:"Periode "+Number(N+1)},null,8,["value"]),s("div",H,t(B.periode),1)]))),256)):f("",!0),s("div",Q,[a(r,{for:"number",value:"Harga"}),s("div",q," Rp "+t(d(e.customer.data.price)),1)]),s("div",G,[a(r,{for:"number",value:"Biaya Admin"}),s("div",J," Rp "+t(d(e.customer.data.admin)),1)]),s("div",K,[a(r,{for:"number",value:"Total"}),s("div",U," Rp "+t(d(e.customer.data.selling_price)),1)])]}),_:1}),s("div",W,[Number(e.customer.data.buyer_last_saldo)>=Number(e.customer.data.selling_price)?(c(),m(g,{key:0},[a(v,{class:P(["w-full justify-center",{"opacity-25":b(l).processing}]),disabled:b(l).processing||i.$page.props.user.wallet_balance<=e.customer.data.selling_price,onClick:k},{default:o(()=>[n(" Bayar ")]),_:1},8,["class","disabled"]),a(I,{on:i.$page.props.user.wallet_balance<=e.customer.data.selling_price,class:"mr-3"},{default:o(()=>[n(" Saldo anda kurang ")]),_:1},8,["on"])],64)):(c(),p(v,{key:1,class:"w-full justify-center",disabled:""},{default:o(()=>[n(" Tidak Tersedia ")]),_:1}))])]),_:1},8,["title","name"]))}};export{me as default};

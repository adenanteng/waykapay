import{_ as $}from"./AppLayout-7a578b1d.js";import{T as w,i as S,o as r,c as u,w as c,Q as R,b as o,a,t as s,g as m,e as p,f as _,h as T,F as b,n as C,u as v}from"./app-e2f5975d.js";import{_ as P}from"./PreviousButton-238acafd.js";import{_ as A}from"./FormSection-3caa5cd3.js";import{_ as I}from"./ActionMessage-1f0fd0be.js";import{_ as y}from"./PrimaryButton-1424018a.js";import{_ as l}from"./InputLabel-cc3d8c13.js";import"./OnlineStatus-d7daad7e.js";import"./index-2575c498.js";import"./DarkmodeToggle-3d700df6.js";import"./use-controllable-d85d784b.js";import"./focus-management-f8782962.js";import"./SectionTitle-56e896f2.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"capitalize"},j={class:"col-span-6 sm:col-span-3"},F={class:"font-semibold text-gray-900"},z={class:"col-span-6 sm:col-span-3"},D={class:"font-semibold text-gray-900"},E={key:0,class:"col-span-6 sm:col-span-3"},M={class:"font-semibold text-gray-900"},L={class:"col-span-6 sm:col-span-3 space-y-5 py-5 border-y border-gray-600 border-dashed"},O={class:"font-semibold text-gray-900"},Q={class:"font-semibold text-gray-900"},q={class:"font-semibold text-gray-900"},G={class:"col-span-6 sm:col-span-3"},H={class:"font-semibold text-gray-900"},J={class:"col-span-6 sm:col-span-3"},K={class:"font-semibold text-gray-900"},U={class:"grid"},ie={__name:"CreateEdit",props:{customer:Object},setup(h){const e=h,i=w({order_id:e.customer.data.ref_id,customer_no:e.customer.data.customer_no,sku:e.customer.data.buyer_sku_code,selling_price:e.customer.data.selling_price}),{...k}=S(()=>R().props.user).value,N=()=>{k.pin?i.post(route("pin.topupPasca"),{errorBag:"storeInformation",preserveScroll:!0}):i.post(route("product.topup.pasca"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0})};function n(d){return(d/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(d,x)=>(r(),u($,{title:e.customer.data.buyer_sku_code.replaceAll("-"," "),name:e.customer.data.buyer_sku_code.replaceAll("-"," "),desc:"Masukkan nomor"},{previous:c(()=>[o(P)]),default:c(()=>[o(A,null,{title:c(()=>[a("span",V,s(e.customer.data.buyer_sku_code.replaceAll("-"," ")),1)]),description:c(()=>[m(" * Saldo Rekening Rp "+s(n(d.$page.props.user.wallet_balance)),1)]),form:c(()=>{var f,g;return[a("div",j,[o(l,{for:"number",value:"No. Pelanggan"}),a("div",F,s(e.customer.data.customer_no),1)]),a("div",z,[o(l,{for:"number",value:"Nama Pelanggan"}),a("div",D,s(e.customer.data.customer_name),1)]),(f=e.customer.data.desc)!=null&&f.tarif?(r(),p("div",E,[o(l,{for:"number",value:"Stand Meter"}),a("div",M,s(e.customer.data.desc.tarif)+" "+s(e.customer.data.desc.daya??" "),1)])):_("",!0),(g=e.customer.data.desc)!=null&&g.detail?(r(!0),p(b,{key:1},T(e.customer.data.desc.detail,(t,B)=>(r(),p("div",L,[a("div",null,[o(l,{for:"number",value:"Periode "+Number(B+1)},null,8,["value"]),a("div",O,s(t.periode),1)]),a("div",null,[t!=null&&t.nilai_tagihan?(r(),u(l,{key:0,for:"number",value:"Nilai Tagihan"})):_("",!0),a("div",Q," Rp "+s(n(t.nilai_tagihan)),1)]),a("div",null,[t!=null&&t.denda?(r(),u(l,{key:0,for:"number",value:"Denda"})):_("",!0),a("div",q," Rp "+s(n(t.denda)),1)])]))),256)):_("",!0),a("div",G,[o(l,{for:"number",value:"Biaya Admin"}),a("div",H," Rp "+s(n(Number(e.customer.data.selling_price)-Number(e.customer.data.price)))+" ",1)]),a("div",J,[o(l,{for:"number",value:"Total"}),a("div",K," Rp "+s(n(e.customer.data.selling_price)),1)])]}),_:1}),a("div",U,[Number(e.customer.data.buyer_last_saldo)>=Number(e.customer.data.selling_price)?(r(),p(b,{key:0},[o(y,{class:C(["w-full justify-center",{"opacity-25":v(i).processing}]),disabled:v(i).processing||d.$page.props.user.wallet_balance<=e.customer.data.selling_price,onClick:N},{default:c(()=>[m(" Bayar ")]),_:1},8,["class","disabled"]),o(I,{on:d.$page.props.user.wallet_balance<=e.customer.data.selling_price,class:"mr-3"},{default:c(()=>[m(" Saldo anda kurang ")]),_:1},8,["on"])],64)):(r(),u(y,{key:1,class:"w-full justify-center",disabled:""},{default:c(()=>[m(" Tidak Tersedia ")]),_:1}))])]),_:1},8,["title","name"]))}};export{ie as default};

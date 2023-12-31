import{_ as E}from"./AppLayout-eb10105f.js";import{T as F,i as z,d as f,o as l,c as R,w as r,Q as D,b as a,a as s,t,g as v,e as u,f as m,h as L,F as I,n as H,u as b}from"./app-cca8524f.js";import{_ as Q}from"./PreviousButton-d827ea68.js";import{_ as U}from"./FormSection-87ca31d2.js";import{_ as q}from"./ActionMessage-6e7f7577.js";import{_ as M}from"./PrimaryButton-e5f5f783.js";import{_ as n}from"./InputLabel-e20533fe.js";import{a as G}from"./DialogModal-ec8c835e.js";import{e as P}from"./vue3-otp-input.esm-b6b23412.js";import{b as J}from"./bcrypt-c5fd232e.js";import"./OnlineStatus-410cdafa.js";import"./index-7538aa88.js";import"./DarkmodeToggle-53e414f8.js";import"./use-controllable-4511d8cc.js";import"./focus-management-d97e1ec5.js";import"./SectionTitle-3e381dfd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjs-dynamic-modules-302442b1.js";const K={class:"capitalize"},W={class:"col-span-6 sm:col-span-3"},X={class:"font-semibold text-gray-900"},Y={class:"col-span-6 sm:col-span-3"},Z={class:"font-semibold text-gray-900"},ee={key:0,class:"col-span-6 sm:col-span-3"},se={class:"font-semibold text-gray-900"},ae={class:"col-span-6 sm:col-span-3 space-y-5 py-5 border-y border-gray-600 border-dashed"},te={class:"font-semibold text-gray-900"},oe={key:0},re={class:"font-semibold text-gray-900"},ne={key:1},le={class:"font-semibold text-gray-900"},ce={class:"col-span-6 sm:col-span-3"},ie={class:"font-semibold text-gray-900"},de={class:"col-span-6 sm:col-span-3"},ue={class:"font-semibold text-gray-900"},pe={class:"col-span-6 sm:col-span-3"},me={class:"font-semibold text-gray-900"},_e={class:"col-span-6 sm:col-span-3"},fe={class:"font-semibold text-gray-900"},ve={class:"grid"},he=s("div",{class:"w-full text-center"}," Masukkan PIN transaksi kamu ",-1),ge={class:"grid justify-center"},ye={key:0,class:"w-full text-center text-sm text-red-600 mt-2"},k=2e3,Ee={__name:"CreateEdit",props:{customer:Object},setup(S){const e=S,h=Number(e.customer.data.selling_price)-Number(e.customer.data.price),x=Number(e.customer.data.admin)-h,g=F({order_id:e.customer.data.ref_id,customer_no:e.customer.data.customer_no,sku:e.customer.data.buyer_sku_code,extra_fee:k}),{...N}=z(()=>D().props.user).value,$=()=>{g.post(route("product.topup.pasca"),{errorBag:"storeInformation",preserveScroll:!0})};function i(c){return(c/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const T=()=>{N.pin?y.value=!0:$()},O=()=>{y.value=!1},y=f(!1),w=f(P|null),C=f(""),B=f(!1),j=c=>{let d=c;d=d.replace(/^\$2y(.+)$/i,"$2a$1"),J.compare(d,N.pin,function(p,_){var o;_?$():(B.value=!0,(o=w.value)==null||o.clearInput())})},A=c=>{};return(c,d)=>(l(),R(E,{title:e.customer.data.buyer_sku_code.replaceAll("-"," "),name:e.customer.data.buyer_sku_code.replaceAll("-"," "),desc:"Masukkan nomor"},{previous:r(()=>[a(Q)]),default:r(()=>[a(U,null,{title:r(()=>[s("span",K,t(e.customer.data.buyer_sku_code.replaceAll("-"," ")),1)]),description:r(()=>[v(" * Saldo Rekening Rp "+t(i(c.$page.props.user.wallet_balance)),1)]),form:r(()=>{var p,_;return[s("div",W,[a(n,{value:"No. Pelanggan"}),s("div",X,t(e.customer.data.customer_no),1)]),s("div",Y,[a(n,{value:"Nama Pelanggan"}),s("div",Z,t(e.customer.data.customer_name),1)]),(p=e.customer.data.desc)!=null&&p.tarif?(l(),u("div",ee,[a(n,{value:"Stand Meter"}),s("div",se,t(e.customer.data.desc.tarif)+" "+t(e.customer.data.desc.daya??" "),1)])):m("",!0),(_=e.customer.data.desc)!=null&&_.detail?(l(!0),u(I,{key:1},L(e.customer.data.desc.detail,(o,V)=>(l(),u("div",ae,[s("div",null,[a(n,{value:"Periode "+Number(V+1)},null,8,["value"]),s("div",te,t(o.periode),1)]),o!=null&&o.nilai_tagihan?(l(),u("div",oe,[a(n,{value:"Nilai Tagihan"}),s("div",re," Rp "+t(i(o.nilai_tagihan)),1)])):m("",!0),o!=null&&o.denda?(l(),u("div",ne,[a(n,{value:"Denda"}),s("div",le," Rp "+t(i(o.denda)),1)])):m("",!0)]))),256)):m("",!0),s("div",ce,[a(n,{for:"number",value:"Harga"}),s("div",ie," Rp "+t(i(e.customer.data.price)),1)]),s("div",de,[a(n,{value:"Biaya Admin"}),s("div",ue," Rp "+t(i(h+k))+" ",1)]),s("div",pe,[a(n,{value:"Biaya Layanan"}),s("div",me," Rp "+t(i(x)),1)]),s("div",_e,[a(n,{value:"Total"}),s("div",fe," Rp "+t(i(Number(e.customer.data.price)+h+x+k)),1)])]}),_:1}),s("div",ve,[Number(e.customer.data.buyer_last_saldo)>=Number(e.customer.data.selling_price)?(l(),u(I,{key:0},[a(M,{class:H(["w-full justify-center",{"opacity-25":b(g).processing}]),disabled:b(g).processing||c.$page.props.user.wallet_balance<=e.customer.data.selling_price,onClick:T},{default:r(()=>[v(" Bayar ")]),_:1},8,["class","disabled"]),a(q,{on:c.$page.props.user.wallet_balance<=e.customer.data.selling_price,class:"mr-3"},{default:r(()=>[v(" Saldo anda kurang ")]),_:1},8,["on"])],64)):(l(),R(M,{key:1,class:"w-full justify-center",disabled:""},{default:r(()=>[v(" Tidak Tersedia ")]),_:1}))]),a(G,{show:y.value,onClose:O},{title:r(()=>[he]),content:r(()=>[s("div",ge,[a(b(P),{ref_key:"otpInput",ref:w,value:C.value,"onUpdate:value":d[0]||(d[0]=p=>C.value=p),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:A,onOnComplete:j},null,8,["value"]),B.value?(l(),u("p",ye,"Pin salah, silahkan coba lagi.")):m("",!0)])]),_:1},8,["show"])]),_:1},8,["title","name"]))}};export{Ee as default};
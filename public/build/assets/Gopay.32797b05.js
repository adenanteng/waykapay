import{_ as C}from"./AppLayout.d3b8a7e0.js";import{q as V,O as G,v as S,d as l,c as x,w as n,o as i,b as a,g as p,t as c,a as e,u as r,e as u,h as M,F as h,n as O,f as w}from"./app.c39bbb5a.js";import{_ as L}from"./TextInput.a45b43e2.js";import{_ as R}from"./InputError.f7641701.js";import{_ as j}from"./PreviousButton.d8913eba.js";import{_ as z}from"./FormSection.f03068b2.js";import{_ as D}from"./ActionMessage.02208bc3.js";import{_ as F}from"./PrimaryButton.1b79183e.js";import{_ as I}from"./InputLabel.b74f688c.js";import{a as q}from"./DialogModal.16c99878.js";import A from"./Loading.90cd70fa.js";import"./helper.f12408fb.js";import"./DarkmodeToggle.f759f31e.js";import"./label.3f9b5eb6.js";import"./focus-management.097144ac.js";import"./SectionTitle.3fac886d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const E={class:"col-span-6 sm:col-span-3"},H={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},T={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},Y=e("div",{class:"flex-shrink-0"},[e("img",{class:"h-10 w-10",src:"/img/vendor/icon/GOPAY.svg",alt:""})],-1),U={class:"flex-1 min-w-0"},J=["onClick"],K=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),Q={class:"text-sm font-medium text-gray-900"},W={class:"text-sm text-gray-500 truncate"},X={key:1,class:"focus:outline-none text-left"},Z={class:"text-sm font-medium text-gray-500"},ee=e("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),se={class:"grid grid-cols-2 justify-between gap-2"},oe=e("div",{class:""}," Produk ",-1),te={class:"text-right font-medium"},re=e("div",{class:""}," Id Player ",-1),ne={class:"text-right font-medium"},ie=e("div",{class:""}," Harga ",-1),ae={class:"text-right font-medium"},ce=e("div",{class:""}," Detail Produk ",-1),le={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Ce={__name:"Gopay",props:{users:Object,response:void 0,fee:Number},setup($){var k;const m=$;V(()=>{G.reload({only:["response"]})});const o=S({user_id:(k=m.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),N=()=>{o.post(route("product.topup",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()})};function f(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=l(!1);l(null);let b=l(null);l(null);let _=l(null),y=l(null);const P=s=>{o.customer_no!==""&&(g.value=!0,o.sku=s.buyer_sku_code,o.amount=s.price,o.product_name=s.product_name,o.category_id=6,s.buyer_sku_code,b=s.product_name,s.brand,_=Number(s.price)+Number(m.fee/100*s.price),y=s.desc)};function B(s){return s.slice().sort(function(d,t){return d.price-t.price})}const v=()=>{g.value=!1};return(s,d)=>(i(),x(C,{title:"Gopay",name:"Gopay",desc:"Lorem ipsum"},{previous:n(()=>[a(j)]),default:n(()=>[a(z,null,{title:n(()=>[p(" Gopay ")]),description:n(()=>[p(" * Saldo Rekening Rp "+c(f(s.$page.props.user.wallet_balance)),1)]),form:n(()=>[e("div",E,[a(I,{for:"number",value:"Nomor HP"}),a(L,{id:"number",modelValue:r(o).customer_no,"onUpdate:modelValue":d[0]||(d[0]=t=>r(o).customer_no=t),type:"number",class:"mt-1 block w-full",minlength:"8",required:""},null,8,["modelValue"]),a(R,{message:r(o).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),e("div",H,[m.response===void 0?(i(),x(A,{key:0})):(i(!0),u(h,{key:1},M(B(m.response.data),t=>(i(),u(h,null,[t.category=="E-Money"?(i(),u(h,{key:0},[t.brand=="GO PAY"?(i(),u("div",T,[Y,e("div",U,[Number(t.price)<Number(s.$page.props.digiflazz_saldo)?(i(),u("button",{key:0,onClick:ue=>P(t),class:"focus:outline-none text-left"},[K,e("p",Q,c(t.product_name),1),e("p",W,"Rp "+c(f(Number(t.price)+Number(m.fee/100*t.price))),1)],8,J)):(i(),u("div",X,[e("p",Z,c(t.product_name),1),ee]))])])):w("",!0)],64)):w("",!0)],64))),256))]),a(q,{show:g.value,onClose:v},{title:n(()=>[p(" Lanjutkan Pembayaran ")]),content:n(()=>[e("div",se,[oe,e("div",te,c(r(b)),1),re,e("div",ne,c(r(o).customer_no),1),ie,e("div",ae," Rp "+c(f(r(_))),1),ce]),e("div",le,c(r(y)),1)]),footer:n(()=>[a(D,{on:s.$page.props.user.wallet_balance<=r(_),class:"mr-3"},{default:n(()=>[p(" Saldo anda kurang ")]),_:1},8,["on"]),a(F,{class:O({"opacity-25":r(o).processing}),disabled:r(o).processing||s.$page.props.user.wallet_balance<=r(_),onClick:N},{default:n(()=>[p(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{Ce as default};

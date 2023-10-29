import{_ as S}from"./AppLayout.07f189c3.js";import{q as B,O as V,v as P,d as u,c as k,w as i,o as l,b as a,g as m,t as c,a as e,u as r,e as p,h as z,F as x,f as L,n as M}from"./app.95edcb59.js";import{_ as R}from"./TextInput.23af0db4.js";import{_ as j}from"./InputError.86daec47.js";import{_ as D}from"./PreviousButton.6ffe7e92.js";import{_ as F}from"./FormSection.ad729877.js";import{_ as O}from"./ActionMessage.c76d1a44.js";import{_ as q}from"./PrimaryButton.51c6f363.js";import{_ as I}from"./InputLabel.de57b838.js";import{a as T}from"./DialogModal.34bfbb65.js";import E from"./Loading.820247d5.js";import"./Banner.8a741325.js";import"./DarkmodeToggle.65022e3c.js";import"./helper.e9fc3b37.js";import"./label.04e5b9a3.js";import"./focus-management.e1a1c033.js";import"./SectionTitle.3ec3116c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const H={class:"col-span-6 sm:col-span-3"},K={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},U={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},A={class:"flex-shrink-0"},G=["src"],J={class:"flex-1 min-w-0"},Q=["onClick"],W=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),X={class:"text-sm font-medium text-gray-900"},Y={class:"text-sm text-gray-500 truncate"},Z={key:1,class:"focus:outline-none text-left"},ee={class:"text-sm font-medium text-gray-500"},se=e("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),oe={class:"grid grid-cols-2 justify-between gap-2"},te=e("div",{class:""}," Produk ",-1),re={class:"text-right font-medium"},ne=e("div",{class:""}," No Customer ",-1),ie={class:"text-right font-medium"},ce=e("div",{class:""}," Harga ",-1),ae={class:"text-right font-medium"},le=e("div",{class:""}," Detail Produk ",-1),ue={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Pe={__name:"Show",props:{users:Object,response:void 0,fee:Number,product:String},setup(w){var y;const n=w;B(()=>{V.reload({only:["response"]})});const o=P({user_id:(y=n.users.id)!=null?y:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),N=()=>{o.post(route("product.topup",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()})};function f(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=u(!1);u(null);let h=u(null);u(null);let _=u(null),b=u(null);const $=s=>{o.customer_no!==""&&(g.value=!0,o.sku=s.buyer_sku_code,o.amount=s.price,o.product_name=s.product_name,o.category_id=6,s.buyer_sku_code,h=s.product_name,s.brand,_=Number(s.price)+Number(n.fee/100*s.price),b=s.desc)};function C(s){return s.slice().sort(function(d,t){return d.price-t.price})}const v=()=>{g.value=!1};return(s,d)=>(l(),k(S,{title:n.product,name:n.product,desc:"Lorem ipsum"},{previous:i(()=>[a(D)]),default:i(()=>[a(F,{class:"sticky top-0 z-40"},{title:i(()=>[m(c(n.product),1)]),description:i(()=>[m(" * Saldo Rekening Rp "+c(f(s.$page.props.user.wallet_balance)),1)]),form:i(()=>[e("div",H,[a(I,{for:"number",value:"No Kustomer"}),a(R,{id:"number",modelValue:r(o).customer_no,"onUpdate:modelValue":d[0]||(d[0]=t=>r(o).customer_no=t),type:"number",class:"mt-1 block w-full",minlength:"8",required:"",autofocus:""},null,8,["modelValue"]),a(j,{message:r(o).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),e("div",K,[n.response===void 0?(l(),k(E,{key:0})):(l(!0),p(x,{key:1},z(C(n.response.data),t=>(l(),p(x,null,[t.brand==n.product?(l(),p("div",U,[e("div",A,[e("img",{class:"w-10",src:"/img/vendor/"+n.product+".svg",alt:""},null,8,G)]),e("div",J,[Number(t.price)<Number(s.$page.props.digiflazz_saldo)?(l(),p("button",{key:0,onClick:de=>$(t),class:"focus:outline-none text-left"},[W,e("p",X,c(t.product_name),1),e("p",Y,"Rp "+c(f(Number(t.price)+Number(n.fee/100*t.price))),1)],8,Q)):(l(),p("div",Z,[e("p",ee,c(t.product_name),1),se]))])])):L("",!0)],64))),256))]),a(T,{show:g.value,onClose:v},{title:i(()=>[m(" Lanjutkan Pembayaran ")]),content:i(()=>[e("div",oe,[te,e("div",re,c(r(h)),1),ne,e("div",ie,c(r(o).customer_no),1),ce,e("div",ae," Rp "+c(f(r(_))),1),le]),e("div",ue,c(r(b)),1)]),footer:i(()=>[a(O,{on:s.$page.props.user.wallet_balance<=r(_),class:"mr-3"},{default:i(()=>[m(" Saldo anda kurang ")]),_:1},8,["on"]),a(q,{class:M({"opacity-25":r(o).processing}),disabled:r(o).processing||s.$page.props.user.wallet_balance<=r(_),onClick:N},{default:i(()=>[m(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1},8,["title","name"]))}};export{Pe as default};

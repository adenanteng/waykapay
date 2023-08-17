import{_ as B}from"./AppLayout.5f6d33ec.js";import{v as C,d as c,c as V,w as n,o as u,b as i,g as m,t as a,a as e,u as r,e as p,h as G,F as b,n as S,f as x}from"./app.76ef19f7.js";import{_ as j}from"./TextInput.d049d762.js";import{_ as M}from"./InputError.b82add93.js";import{_ as O}from"./PreviousButton.97f0282c.js";import{_ as R}from"./FormSection.ca08c0fb.js";import{_ as D}from"./ActionMessage.267f0be9.js";import{_ as F}from"./PrimaryButton.5ea38510.js";import{_ as I}from"./InputLabel.f81d2326.js";import{a as L}from"./DialogModal.8d3b9725.js";import"./helper.1b73f0ca.js";import"./DarkmodeToggle.6ab45a98.js";import"./label.6860666b.js";import"./focus-management.539ad3ba.js";import"./SectionTitle.db7c4495.js";import"./_plugin-vue_export-helper.cdc0426e.js";const A={class:"col-span-6 sm:col-span-3"},E={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},H={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},Y=e("div",{class:"flex-shrink-0"},[e("img",{class:"h-10 w-10",src:"/img/vendor/icon/GOPAY.svg",alt:""})],-1),q={class:"flex-1 min-w-0"},z=["onClick"],T=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),U={class:"text-sm font-medium text-gray-900"},J={class:"text-sm text-gray-500 truncate"},K={class:"grid grid-cols-2 justify-between gap-2"},Q=e("div",{class:""}," Produk ",-1),W={class:"text-right font-medium"},X=e("div",{class:""}," Id Player ",-1),Z={class:"text-right font-medium"},ee=e("div",{class:""}," Harga ",-1),se={class:"text-right font-medium"},oe=e("div",{class:""}," Detail Produk ",-1),re={class:"border border-gray-300 rounded-3xl p-2 mt-2"},ke={__name:"Gopay",props:{users:Object,response:Object,fee:Number},setup(w){var k;const d=w,o=C({user_id:(k=d.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),$=()=>{o.post(route("product.topup",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()})};function f(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=c(!1);c(null);let h=c(null);c(null);let _=c(null),v=c(null);const N=s=>{o.customer_no!==""&&(g.value=!0,o.sku=s.buyer_sku_code,o.amount=s.price,o.product_name=s.product_name,o.category_id=6,s.buyer_sku_code,h=s.product_name,s.brand,_=Number(s.price)+Number(d.fee/100*s.price),v=s.desc)};function P(s){return s.slice().sort(function(l,t){return l.price-t.price})}const y=()=>{g.value=!1};return(s,l)=>(u(),V(B,{title:"Gopay",name:"Gopay",desc:"Lorem ipsum"},{previous:n(()=>[i(O)]),default:n(()=>[i(R,null,{title:n(()=>[m(" Gopay ")]),description:n(()=>[m(" * Saldo Rekening Rp "+a(f(s.$page.props.user.wallet_balance)),1)]),form:n(()=>[e("div",A,[i(I,{for:"number",value:"Nomor HP"}),i(j,{id:"number",modelValue:r(o).customer_no,"onUpdate:modelValue":l[0]||(l[0]=t=>r(o).customer_no=t),type:"number",class:"mt-1 block w-full",minlength:"8",required:""},null,8,["modelValue"]),i(M,{message:r(o).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),e("div",E,[(u(!0),p(b,null,G(P(d.response.data),t=>(u(),p(b,null,[t.category=="E-Money"?(u(),p(b,{key:0},[t.brand=="GO PAY"?(u(),p("div",H,[Y,e("div",q,[e("button",{onClick:te=>N(t),class:"focus:outline-none text-left"},[T,e("p",U,a(t.product_name),1),e("p",J,"Rp "+a(f(Number(t.price)+Number(d.fee/100*t.price))),1)],8,z)])])):x("",!0)],64)):x("",!0)],64))),256))]),i(L,{show:g.value,onClose:y},{title:n(()=>[m(" Lanjutkan Pembayaran ")]),content:n(()=>[e("div",K,[Q,e("div",W,a(r(h)),1),X,e("div",Z,a(r(o).customer_no),1),ee,e("div",se," Rp "+a(f(r(_))),1),oe]),e("div",re,a(r(v)),1)]),footer:n(()=>[i(D,{on:s.$page.props.user.wallet_balance<=r(_),class:"mr-3"},{default:n(()=>[m(" Saldo anda kurang ")]),_:1},8,["on"]),i(F,{class:S({"opacity-25":r(o).processing}),disabled:r(o).processing||s.$page.props.user.wallet_balance<=r(_),onClick:$},{default:n(()=>[m(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{ke as default};
import{_ as M}from"./AppLayout.7e163225.js";import{v as C,d as u,c as L,w as i,o as c,b as n,g as d,t as l,a as o,u as t,e as m,h as S,F as b,n as G,f as x}from"./app.02cf02f7.js";import{_ as w}from"./TextInput.c4d5b946.js";import{_ as $}from"./InputError.3cc95cec.js";import{_ as I}from"./PreviousButton.f5b3814c.js";import{_ as U}from"./FormSection.976e67c8.js";import{_ as j}from"./ActionMessage.a771b705.js";import{_ as D}from"./PrimaryButton.428a84e6.js";import{_ as N}from"./InputLabel.831342cb.js";import{a as E}from"./DialogModal.5bdeed9d.js";import"./helper.8a569878.js";import"./DarkmodeToggle.c761327b.js";import"./label.f5434e50.js";import"./focus-management.81742cdb.js";import"./SectionTitle.11e11897.js";import"./_plugin-vue_export-helper.cdc0426e.js";const R={class:"col-span-4"},F={class:"col-span-2 -ml-3"},O={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},q={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},T=o("div",{class:"flex-shrink-0"},[o("img",{class:"h-10 w-10",src:"/img/games/icons/ML.png",alt:""})],-1),H={class:"flex-1 min-w-0"},Z=["onClick"],A=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),J={class:"text-sm font-medium text-gray-900"},K={class:"text-sm text-gray-500 truncate"},Q={key:1,class:"focus:outline-none text-left"},W={class:"text-sm font-medium text-gray-500"},X=o("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),Y={class:"grid grid-cols-2 justify-between gap-2"},ee=o("div",{class:""}," Produk ",-1),oe={class:"text-right font-medium"},se=o("div",{class:""}," Id Player ",-1),te={class:"text-right font-medium"},re=o("div",{class:""}," Harga ",-1),ne={class:"text-right font-medium"},ie=o("div",{class:""}," Detail Produk ",-1),le={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Ne={__name:"MobileLegends",props:{users:Object,response:Object,fee:Number},setup(z){var k;const _=z,e=C({user_id:(k=_.users.id)!=null?k:null,customer_no:"",zone_no:"",product_name:"",sku:"",amount:"",category_id:""}),B=()=>{e.post(route("product.topup",e),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()})};function f(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=u(!1);u(null);let h=u(null);u(null);let p=u(null),v=u(null);const P=s=>{e.customer_no!==""&&e.zone_no!==""&&(g.value=!0,e.customer_no=e.customer_no+e.zone_no,e.sku=s.buyer_sku_code,e.amount=s.price,e.product_name=s.product_name,e.category_id=4,s.buyer_sku_code,h=s.product_name,s.brand,p=Number(s.price)+Number(_.fee/100*s.price),v=s.desc)};function V(s){return s.slice().sort(function(a,r){return a.price-r.price})}const y=()=>{g.value=!1};return(s,a)=>(c(),L(M,{title:"PUBG Mobile",name:"PUBG Mobile",desc:"Lorem ipsum"},{previous:i(()=>[n(I)]),default:i(()=>[n(U,null,{title:i(()=>[d(" PUBG Mobile ")]),description:i(()=>[d(" * Saldo Rekening Rp "+l(f(s.$page.props.user.wallet_balance)),1)]),form:i(()=>[o("div",R,[n(N,{for:"number",value:"Id Player"}),n(w,{id:"number",modelValue:t(e).customer_no,"onUpdate:modelValue":a[0]||(a[0]=r=>t(e).customer_no=r),type:"number",class:"mt-1 block w-full",minlength:"8",required:""},null,8,["modelValue"]),n($,{message:t(e).errors.customer_no,class:"mt-2"},null,8,["message"])]),o("div",F,[n(N,{for:"number",value:"Zona"}),n(w,{id:"zone",modelValue:t(e).zone_no,"onUpdate:modelValue":a[1]||(a[1]=r=>t(e).zone_no=r),type:"number",class:"mt-1 block w-full",minlength:"3",required:""},null,8,["modelValue"]),n($,{message:t(e).errors.zone_no,class:"mt-2"},null,8,["message"])])]),_:1}),o("div",O,[(c(!0),m(b,null,S(V(_.response.data),r=>(c(),m(b,null,[r.category=="Games"?(c(),m(b,{key:0},[r.brand=="MOBILE LEGENDS"?(c(),m("div",q,[T,o("div",H,[Number(r.price)<Number(s.$page.props.digiflazz_saldo)?(c(),m("button",{key:0,onClick:ae=>P(r),class:"focus:outline-none text-left"},[A,o("p",J,l(r.product_name),1),o("p",K,"Rp "+l(f(Number(r.price)+Number(_.fee/100*r.price))),1)],8,Z)):(c(),m("div",Q,[o("p",W,l(r.product_name),1),X]))])])):x("",!0)],64)):x("",!0)],64))),256))]),n(E,{show:g.value,onClose:y},{title:i(()=>[d(" Lanjutkan Pembayaran ")]),content:i(()=>[o("div",Y,[ee,o("div",oe,l(t(h)),1),se,o("div",te,l(t(e).customer_no)+" ("+l(t(e).zone_no)+") ",1),re,o("div",ne," Rp "+l(f(t(p))),1),ie]),o("div",le,l(t(v)),1)]),footer:i(()=>[n(j,{on:s.$page.props.user.wallet_balance<=t(p),class:"mr-3"},{default:i(()=>[d(" Saldo anda kurang ")]),_:1},8,["on"]),n(D,{class:G({"opacity-25":t(e).processing}),disabled:t(e).processing||s.$page.props.user.wallet_balance<=t(p),onClick:B},{default:i(()=>[d(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{Ne as default};

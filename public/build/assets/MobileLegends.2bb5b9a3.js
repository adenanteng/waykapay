import{_ as P}from"./AppLayout.31aac3e0.js";import{v as M,d as l,c as C,w as r,o as c,b as n,g as m,t as i,a as e,u as t,e as _,h as I,F as h,n as N,f as w}from"./app.083d2cb0.js";import{_ as S}from"./TextInput.52e4ac79.js";import{_ as V}from"./InputError.1d7ff716.js";import{_ as L}from"./PreviousButton.b0d9e7f2.js";import{_ as G}from"./FormSection.75de14b6.js";import{_ as j}from"./ActionMessage.60f48d65.js";import{_ as D}from"./PrimaryButton.b94c59bb.js";import{_ as E}from"./InputLabel.2982ac72.js";import{a as R}from"./DialogModal.1cf1b3d8.js";import"./DarkmodeToggle.aab2d199.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.4b638c09.js";import"./label.f0f8729f.js";import"./focus-management.0c9b550f.js";import"./SectionTitle.ee92fa61.js";const U={class:"col-span-6 sm:col-span-3"},F={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},O={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},q=e("div",{class:"flex-shrink-0"},[e("img",{class:"h-10 w-10",src:"/img/games/icons/mobile-legends.png",alt:""})],-1),z={class:"flex-1 min-w-0"},H=["onClick"],T=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),A={class:"text-sm font-medium text-gray-900"},J={class:"text-sm text-gray-500 truncate"},K={class:"grid grid-cols-2 justify-between gap-2"},Q=e("div",{class:""}," Produk ",-1),W={class:"text-right font-medium"},X=e("div",{class:""}," Id Player ",-1),Y={class:"text-right font-medium"},Z=e("div",{class:""}," Harga ",-1),ee={class:"text-right font-medium"},se=e("div",{class:""}," Detail Produk ",-1),oe={class:"border border-gray-300 rounded-3xl p-2 mt-2"},ye={__name:"MobileLegends",props:{users:Object,response:Object,fee:Number},setup(x){var k;const d=x,o=M({user_id:(k=d.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),$=()=>{o.post(route("product.topup",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()})};function p(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const f=l(!1);l(null);let b=l(null);l(null);let u=l(null),v=l(null);const B=s=>{o.customer_no!==""&&(f.value=!0,o.sku=s.buyer_sku_code,o.amount=s.price,o.product_name=s.product_name,o.category_id=4,s.buyer_sku_code,b=s.product_name,s.brand,u=parseInt(s.price)*d.fee,v=s.desc)},y=()=>{f.value=!1};return(s,g)=>(c(),C(P,{title:"PUBG Mobile",name:"PUBG Mobile",desc:"Lorem ipsum"},{previous:r(()=>[n(L,{href:s.route("product.games")},null,8,["href"])]),default:r(()=>[n(G,null,{title:r(()=>[m(" PUBG Mobile ")]),description:r(()=>[m(" * Saldo Rekening Rp "+i(p(s.$page.props.user.wallet_balance)),1)]),form:r(()=>[e("div",U,[n(E,{for:"number",value:"Id player"}),n(S,{id:"number",modelValue:t(o).customer_no,"onUpdate:modelValue":g[0]||(g[0]=a=>t(o).customer_no=a),type:"tel",class:"mt-1 block w-full",minlength:"8",required:""},null,8,["modelValue"]),n(V,{message:t(o).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),e("div",F,[(c(!0),_(h,null,I(d.response.data,a=>(c(),_(h,null,[a.category=="Games"?(c(),_(h,{key:0},[a.brand=="MOBILE LEGENDS"?(c(),_("div",O,[q,e("div",z,[e("button",{onClick:te=>B(a),class:"focus:outline-none text-left"},[T,e("p",A,i(a.product_name),1),e("p",J,"Rp "+i(p(parseInt(a.price)*d.fee)),1)],8,H)])])):w("",!0)],64)):w("",!0)],64))),256))]),n(R,{show:f.value,onClose:y},{title:r(()=>[m(" Lanjutkan Pembayaran ")]),content:r(()=>[e("div",K,[Q,e("div",W,i(t(b)),1),X,e("div",Y,i(t(o).customer_no),1),Z,e("div",ee," Rp "+i(p(t(u))),1),se]),e("div",oe,i(t(v)),1)]),footer:r(()=>[n(j,{on:s.$page.props.user.wallet_balance<=t(u),class:"mr-3"},{default:r(()=>[m(" Saldo anda kurang ")]),_:1},8,["on"]),n(D,{class:N({"opacity-25":t(o).processing}),disabled:t(o).processing||s.$page.props.user.wallet_balance<=t(u),onClick:$},{default:r(()=>[m(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{ye as default};

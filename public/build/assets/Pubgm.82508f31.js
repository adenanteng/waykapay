import{_ as P}from"./AppLayout.7be517b6.js";import{v as N,d as l,c as C,w as r,o as c,b as a,g as m,t as i,a as e,u as t,e as _,h as M,F as b,n as V,f as x}from"./app.0a848b9c.js";import{_ as G}from"./TextInput.34c5c4cf.js";import{_ as S}from"./InputError.fa9643b2.js";import{_ as U}from"./PreviousButton.54cdb421.js";import{_ as I}from"./FormSection.dab78b13.js";import{_ as j}from"./ActionMessage.218424af.js";import{_ as L}from"./PrimaryButton.0f8abb31.js";import{_ as R}from"./InputLabel.07131d93.js";import{a as D}from"./DialogModal.3edf5e95.js";import"./DarkmodeToggle.b9b2ccc7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.17be2659.js";import"./label.b96ff366.js";import"./focus-management.00178029.js";import"./SectionTitle.1682e6c1.js";const F={class:"col-span-6 sm:col-span-3"},O={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},E={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},q=e("div",{class:"flex-shrink-0"},[e("img",{class:"h-10 w-10",src:"/img/games/icons/PUBG.png",alt:""})],-1),z={class:"flex-1 min-w-0"},H=["onClick"],T=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),A={class:"text-sm font-medium text-gray-900"},J={class:"text-sm text-gray-500 truncate"},K={class:"grid grid-cols-2 justify-between gap-2"},Q=e("div",{class:""}," Produk ",-1),W={class:"text-right font-medium"},X=e("div",{class:""}," Id Player ",-1),Y={class:"text-right font-medium"},Z=e("div",{class:""}," Harga ",-1),ee={class:"text-right font-medium"},se=e("div",{class:""}," Detail Produk ",-1),oe={class:"border border-gray-300 rounded-3xl p-2 mt-2"},ye={__name:"Pubgm",props:{users:Object,response:Object,fee:Number},setup(w){var k;const u=w,o=N({user_id:(k=u.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),B=()=>{o.post(route("product.topup",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()})};function p(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const f=l(!1);l(null);let h=l(null);l(null);let d=l(null),v=l(null);const $=s=>{o.customer_no!==""&&(f.value=!0,o.sku=s.buyer_sku_code,o.amount=s.price,o.product_name=s.product_name,o.category_id=4,s.buyer_sku_code,h=s.product_name,s.brand,d=Number(s.price)+Number(u.fee),v=s.desc)},y=()=>{f.value=!1};return(s,g)=>(c(),C(P,{title:"PUBG Mobile",name:"PUBG Mobile",desc:"Lorem ipsum"},{previous:r(()=>[a(U)]),default:r(()=>[a(I,null,{title:r(()=>[m(" PUBG Mobile ")]),description:r(()=>[m(" * Saldo Rekening Rp "+i(p(s.$page.props.user.wallet_balance)),1)]),form:r(()=>[e("div",F,[a(R,{for:"number",value:"Id player"}),a(G,{id:"number",modelValue:t(o).customer_no,"onUpdate:modelValue":g[0]||(g[0]=n=>t(o).customer_no=n),type:"tel",class:"mt-1 block w-full",minlength:"8",required:""},null,8,["modelValue"]),a(S,{message:t(o).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),e("div",O,[(c(!0),_(b,null,M(u.response.data,n=>(c(),_(b,null,[n.category=="Games"?(c(),_(b,{key:0},[n.brand=="PUBG MOBILE"?(c(),_("div",E,[q,e("div",z,[e("button",{onClick:te=>$(n),class:"focus:outline-none text-left"},[T,e("p",A,i(n.product_name),1),e("p",J,"Rp "+i(p(Number(n.price)+Number(u.fee))),1)],8,H)])])):x("",!0)],64)):x("",!0)],64))),256))]),a(D,{show:f.value,onClose:y},{title:r(()=>[m(" Lanjutkan Pembayaran ")]),content:r(()=>[e("div",K,[Q,e("div",W,i(t(h)),1),X,e("div",Y,i(t(o).customer_no),1),Z,e("div",ee," Rp "+i(p(t(d))),1),se]),e("div",oe,i(t(v)),1)]),footer:r(()=>[a(j,{on:s.$page.props.user.wallet_balance<=t(d),class:"mr-3"},{default:r(()=>[m(" Saldo anda kurang ")]),_:1},8,["on"]),a(L,{class:V({"opacity-25":t(o).processing}),disabled:t(o).processing||s.$page.props.user.wallet_balance<=t(d),onClick:B},{default:r(()=>[m(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{ye as default};

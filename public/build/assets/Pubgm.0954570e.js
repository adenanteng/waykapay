import{_ as P}from"./AppLayout.ab471a51.js";import{v as C,d as l,c as M,w as i,o as c,b as n,g as d,t as a,a as e,u as r,e as u,h as V,F as b,n as G,f as x}from"./app.789c1eee.js";import{_ as S}from"./TextInput.5d9250bd.js";import{_ as U}from"./InputError.d6a47b23.js";import{_ as I}from"./PreviousButton.155fcdf1.js";import{_ as j}from"./FormSection.8a8a7e2f.js";import{_ as L}from"./ActionMessage.3db83bdc.js";import{_ as R}from"./PrimaryButton.a8707ebd.js";import{_ as z}from"./InputLabel.672b42e6.js";import{a as D}from"./DialogModal.b09e5899.js";import"./helper.016c6549.js";import"./DarkmodeToggle.c2fe1ef1.js";import"./label.04daec2f.js";import"./focus-management.758e5fc0.js";import"./SectionTitle.1ea26de3.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F={class:"col-span-6 sm:col-span-3"},O={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},E={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},T=e("div",{class:"flex-shrink-0"},[e("img",{class:"h-10 w-10",src:"/img/games/icons/PUBG.png",alt:""})],-1),q={class:"flex-1 min-w-0"},H=["onClick"],A=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),J={class:"text-sm font-medium text-gray-900"},K={class:"text-sm text-gray-500 truncate"},Q={key:1,class:"focus:outline-none text-left"},W={class:"text-sm font-medium text-gray-500"},X=e("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),Y={class:"grid grid-cols-2 justify-between gap-2"},Z=e("div",{class:""}," Produk ",-1),ee={class:"text-right font-medium"},se=e("div",{class:""}," Id Player ",-1),oe={class:"text-right font-medium"},te=e("div",{class:""}," Harga ",-1),re={class:"text-right font-medium"},ie=e("div",{class:""}," Detail Produk ",-1),ne={class:"border border-gray-300 rounded-3xl p-2 mt-2"},$e={__name:"Pubgm",props:{users:Object,response:Object,fee:Number},setup(w){var k;const _=w,o=C({user_id:(k=_.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),$=()=>{o.post(route("product.topup",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()})};function f(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=l(!1);l(null);let h=l(null);l(null);let p=l(null),y=l(null);const B=s=>{o.customer_no!==""&&(g.value=!0,o.sku=s.buyer_sku_code,o.amount=s.price,o.product_name=s.product_name,o.category_id=4,s.buyer_sku_code,h=s.product_name,s.brand,p=Number(s.price)+Number(_.fee/100*s.price),y=s.desc)};function N(s){return s.slice().sort(function(m,t){return m.price-t.price})}const v=()=>{g.value=!1};return(s,m)=>(c(),M(P,{title:"PUBG Mobile",name:"PUBG Mobile",desc:"Lorem ipsum"},{previous:i(()=>[n(I)]),default:i(()=>[n(j,null,{title:i(()=>[d(" PUBG Mobile ")]),description:i(()=>[d(" * Saldo Rekening Rp "+a(f(s.$page.props.user.wallet_balance)),1)]),form:i(()=>[e("div",F,[n(z,{for:"number",value:"Id player"}),n(S,{id:"number",modelValue:r(o).customer_no,"onUpdate:modelValue":m[0]||(m[0]=t=>r(o).customer_no=t),type:"number",class:"mt-1 block w-full",minlength:"8",required:""},null,8,["modelValue"]),n(U,{message:r(o).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),e("div",O,[(c(!0),u(b,null,V(N(_.response.data),t=>(c(),u(b,null,[t.category=="Games"?(c(),u(b,{key:0},[t.brand=="PUBG MOBILE"?(c(),u("div",E,[T,e("div",q,[Number(t.price)<Number(s.$page.props.digiflazz_saldo)?(c(),u("button",{key:0,onClick:ae=>B(t),class:"focus:outline-none text-left"},[A,e("p",J,a(t.product_name),1),e("p",K,"Rp "+a(f(Number(t.price)+Number(_.fee/100*t.price))),1)],8,H)):(c(),u("div",Q,[e("p",W,a(t.product_name),1),X]))])])):x("",!0)],64)):x("",!0)],64))),256))]),n(D,{show:g.value,onClose:v},{title:i(()=>[d(" Lanjutkan Pembayaran ")]),content:i(()=>[e("div",Y,[Z,e("div",ee,a(r(h)),1),se,e("div",oe,a(r(o).customer_no),1),te,e("div",re," Rp "+a(f(r(p))),1),ie]),e("div",ne,a(r(y)),1)]),footer:i(()=>[n(L,{on:s.$page.props.user.wallet_balance<=r(p),class:"mr-3"},{default:i(()=>[d(" Saldo anda kurang ")]),_:1},8,["on"]),n(R,{class:G({"opacity-25":r(o).processing}),disabled:r(o).processing||s.$page.props.user.wallet_balance<=r(p),onClick:$},{default:i(()=>[d(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{$e as default};

import{_ as S}from"./AppLayout.a73b2dc4.js";import{q as B,O as V,T as P,d,c as x,w as _,o as t,b as f,g as u,t as i,a as o,u as l,e as n,h as z,F as a,f as L,n as M}from"./app.d3814500.js";import{_ as j}from"./TextInput.57b39c9a.js";import{_ as D}from"./InputError.81a0aca0.js";import{_ as F}from"./PreviousButton.24fa0e75.js";import{_ as O}from"./FormSection.2fc00e84.js";import{_ as T}from"./ActionMessage.0ea388f9.js";import{_ as q}from"./PrimaryButton.eea2733c.js";import{_ as I}from"./InputLabel.5dea1e26.js";import{a as E}from"./DialogModal.61175b59.js";import H from"./Loading.a0eceea4.js";import"./vue3-lottie.es.e5c7a949.js";import"./Banner.585c8081.js";import"./DarkmodeToggle.34c3c77a.js";import"./helper.e9fc3b37.js";import"./label.0c99a277.js";import"./focus-management.e66604e7.js";import"./SectionTitle.26a09582.js";import"./_plugin-vue_export-helper.cdc0426e.js";const K={class:"col-span-6 sm:col-span-3"},U={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},A={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},G={class:"flex-shrink-0"},J=["src"],Q={class:"flex-1 min-w-0"},W=["onClick"],X=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),Y={class:"text-sm font-medium text-gray-900"},Z={class:"text-sm text-gray-500 truncate"},ee={key:1,class:"focus:outline-none text-left"},re={class:"text-sm font-medium text-gray-500"},se=o("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),oe={class:"grid grid-cols-2 justify-between gap-2"},ie=o("div",{class:""}," Produk ",-1),te={class:"text-right font-medium"},ce=o("div",{class:""}," No Customer ",-1),ue={class:"text-right font-medium"},ne=o("div",{class:""}," Harga ",-1),me={class:"text-right font-medium"},le=o("div",{class:""}," Detail Produk ",-1),pe={class:"border border-gray-300 rounded-3xl p-2 mt-2"},_e={class:"flex items-center"},Le={__name:"Show",props:{users:Object,response:void 0,product:String,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(w){var k;const r=w;B(()=>{V.reload({only:["response"]})});const c=P({user_id:(k=r.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),$=()=>{m.value!=null&&(c.fee=m.value),c.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()})};function p(e){return(e/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=d(!1);d(null);let h=d(null);d(null);let N=d(null),v=d(null);const m=d(null),R=e=>{c.customer_no!==""&&(g.value=!0,c.sku=e.buyer_sku_code,c.amount=e.price,c.product_name=e.product_name,c.category_id=6,e.buyer_sku_code,h=e.product_name,e.brand,Number(e.price)<25e3?m.value=Number(e.price)+Number(r.fee_25):Number(e.price)<5e4?m.value=Number(e.price)+Number(r.fee_50):Number(e.price)<75e3?m.value=Number(e.price)+Number(r.fee_75):Number(e.price)<1e5?m.value=Number(e.price)+Number(r.fee_100):Number(e.price)<2e5?m.value=Number(e.price)+Number(r.fee_200):Number(e.price)<5e5?m.value=Number(e.price)+Number(r.fee_500):Number(e.price)<1e6?m.value=Number(e.price)+Number(r.fee_1000):m.value=Number(e.price)+Number(r.fee_max),N=m.value,v=e.desc)};function C(e){return e.slice().sort(function(b,s){return b.price-s.price})}const y=()=>{g.value=!1};return(e,b)=>(t(),x(S,{title:r.product,name:r.product,desc:"Lorem ipsum"},{previous:_(()=>[f(F)]),default:_(()=>[f(O,{class:"sticky top-0 z-40"},{title:_(()=>[u(i(r.product),1)]),description:_(()=>[u(" * Saldo Rekening Rp "+i(p(e.$page.props.user.wallet_balance)),1)]),form:_(()=>[o("div",K,[f(I,{for:"number",value:"No Kustomer"}),f(j,{id:"number",modelValue:l(c).customer_no,"onUpdate:modelValue":b[0]||(b[0]=s=>l(c).customer_no=s),type:"number",class:"mt-1 block w-full",minlength:"8",required:"",autofocus:""},null,8,["modelValue"]),f(D,{message:l(c).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),o("div",U,[r.response===void 0?(t(),x(H,{key:0})):(t(!0),n(a,{key:1},z(C(r.response.data),s=>(t(),n(a,null,[s.brand==r.product?(t(),n("div",A,[o("div",G,[o("img",{class:"w-10",src:"/img/games/icons/"+r.product+".png",alt:""},null,8,J)]),o("div",Q,[Number(s.price)<Number(e.$page.props.digiflazz_saldo)?(t(),n("button",{key:0,onClick:ae=>R(s),class:"focus:outline-none text-left"},[X,o("p",Y,i(s.product_name),1),o("p",Z,[Number(s.price)<25e3?(t(),n(a,{key:0},[u(" Rp "+i(p(Number(s.price)+Number(r.fee_25))),1)],64)):Number(s.price)<5e4?(t(),n(a,{key:1},[u(" Rp "+i(p(Number(s.price)+Number(r.fee_50))),1)],64)):Number(s.price)<75e3?(t(),n(a,{key:2},[u(" Rp "+i(p(Number(s.price)+Number(r.fee_75))),1)],64)):Number(s.price)<1e5?(t(),n(a,{key:3},[u(" Rp "+i(p(Number(s.price)+Number(r.fee_100))),1)],64)):Number(s.price)<2e5?(t(),n(a,{key:4},[u(" Rp "+i(p(Number(s.price)+Number(r.fee_200))),1)],64)):Number(s.price)<5e5?(t(),n(a,{key:5},[u(" Rp "+i(p(Number(s.price)+Number(r.fee_500))),1)],64)):Number(s.price)<1e6?(t(),n(a,{key:6},[u(" Rp "+i(p(Number(s.price)+Number(r.fee_1000))),1)],64)):(t(),n(a,{key:7},[u(" Rp "+i(p(Number(s.price)+Number(r.fee_max))),1)],64))])],8,W)):(t(),n("div",ee,[o("p",re,i(s.product_name),1),se]))])])):L("",!0)],64))),256))]),f(E,{show:g.value,onClose:y},{title:_(()=>[u(" Lanjutkan Pembayaran ")]),content:_(()=>[o("div",oe,[ie,o("div",te,i(l(h)),1),ce,o("div",ue,i(l(c).customer_no),1),ne,o("div",me," Rp "+i(p(l(N))),1),le]),o("div",pe,i(l(v)),1)]),footer:_(()=>[o("div",_e,[f(T,{on:e.$page.props.user.wallet_balance<=l(N),class:"mr-3"},{default:_(()=>[u(" Saldo anda kurang ")]),_:1},8,["on"]),f(q,{class:M({"opacity-25":l(c).processing}),disabled:l(c).processing||e.$page.props.user.wallet_balance<=l(N),onClick:$},{default:_(()=>[u(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]),_:1},8,["title","name"]))}};export{Le as default};

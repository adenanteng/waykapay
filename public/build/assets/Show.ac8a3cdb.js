import{_ as S}from"./AppLayout.a76927c1.js";import{q as B,O as V,T as P,d,c as x,w as _,o as i,b as f,g as c,t,a as o,u as l,e as n,h as z,F as a,f as L,n as M}from"./app.1d2b10dc.js";import{_ as j}from"./TextInput.0d063685.js";import{_ as D}from"./InputError.d2beaa0a.js";import{_ as F}from"./PreviousButton.36bdee6c.js";import{_ as O}from"./FormSection.99fa9f0e.js";import{_ as T}from"./ActionMessage.8599b67b.js";import{_ as q}from"./PrimaryButton.41dbaec5.js";import{_ as I}from"./InputLabel.17ec1eff.js";import{a as E}from"./DialogModal.c4be87e6.js";import H from"./Loading.303e7cfc.js";import"./vue3-lottie.es.2c98352c.js";import"./Banner.c457f1bd.js";import"./DarkmodeToggle.bb0b7fe5.js";import"./helper.e9fc3b37.js";import"./label.7a36253b.js";import"./focus-management.e19035bc.js";import"./SectionTitle.ded8a9c7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const K={class:"col-span-6 sm:col-span-3"},U={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},A={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},G={class:"flex-shrink-0"},J=["src"],Q={class:"flex-1 min-w-0"},W=["onClick"],X=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),Y={class:"text-sm font-medium text-gray-900"},Z={class:"text-sm text-gray-500 truncate"},ee={key:1,class:"focus:outline-none text-left"},re={class:"text-sm font-medium text-gray-500"},se=o("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),oe={class:"grid grid-cols-2 justify-between gap-2"},te=o("div",{class:""}," Produk ",-1),ie={class:"text-right font-medium"},ue=o("div",{class:""}," No Customer ",-1),ce={class:"text-right font-medium"},ne=o("div",{class:""}," Harga ",-1),me={class:"text-right font-medium"},le=o("div",{class:""}," Detail Produk ",-1),pe={class:"border border-gray-300 rounded-3xl p-2 mt-2"},_e={class:"flex items-center"},Le={__name:"Show",props:{users:Object,response:void 0,product:String,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(w){var k;const s=w;B(()=>{V.reload({only:["response"]})});const u=P({user_id:(k=s.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),$=()=>{m.value!=null&&(u.fee=m.value),u.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()})};function p(e){return(e/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=d(!1);d(null);let h=d(null);d(null);let N=d(null),v=d(null);const m=d(null),R=e=>{u.customer_no!==""&&(g.value=!0,u.sku=e.buyer_sku_code,u.amount=e.price,u.product_name=e.product_name,u.category_id=6,e.buyer_sku_code,h=e.product_name,e.brand,Number(e.price)<25e3?m.value=Number(e.price)+Number(s.fee_25):Number(e.price)<5e4?m.value=Number(e.price)+Number(s.fee_50):Number(e.price)<75e3?m.value=Number(e.price)+Number(s.fee_75):Number(e.price)<1e5?m.value=Number(e.price)+Number(s.fee_100):Number(e.price)<2e5?m.value=Number(e.price)+Number(s.fee_200):Number(e.price)<5e5?m.value=Number(e.price)+Number(s.fee_500):Number(e.price)<1e6?m.value=Number(e.price)+Number(s.fee_1000):m.value=Number(e.price)+Number(s.fee_max),N=m.value,v=e.desc)};function C(e){return e.slice().sort(function(b,r){return b.price-r.price})}const y=()=>{g.value=!1};return(e,b)=>(i(),x(S,{title:s.product,name:s.product,desc:"Lorem ipsum"},{previous:_(()=>[f(F)]),default:_(()=>[f(O,{class:"sticky top-0 z-40"},{title:_(()=>[c(t(s.product),1)]),description:_(()=>[c(" * Saldo Rekening Rp "+t(p(e.$page.props.user.wallet_balance)),1)]),form:_(()=>[o("div",K,[f(I,{for:"number",value:"No Kustomer"}),f(j,{id:"number",modelValue:l(u).customer_no,"onUpdate:modelValue":b[0]||(b[0]=r=>l(u).customer_no=r),type:"number",class:"mt-1 block w-full",minlength:"8",required:"",autofocus:""},null,8,["modelValue"]),f(D,{message:l(u).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),o("div",U,[s.response===void 0?(i(),x(H,{key:0})):(i(!0),n(a,{key:1},z(C(s.response.data),r=>(i(),n(a,null,[r.brand==s.product?(i(),n("div",A,[o("div",G,[o("img",{class:"w-10",src:"/img/vendor/"+s.product+".svg",alt:""},null,8,J)]),o("div",Q,[Number(r.price)<Number(e.$page.props.digiflazz_saldo)&&r.buyer_product_status?(i(),n("button",{key:0,onClick:ae=>R(r),class:"focus:outline-none text-left"},[X,o("p",Y,t(r.product_name),1),o("p",Z,[Number(r.price)<25e3?(i(),n(a,{key:0},[c(" Rp "+t(p(Number(r.price)+Number(s.fee_25))),1)],64)):Number(r.price)<5e4?(i(),n(a,{key:1},[c(" Rp "+t(p(Number(r.price)+Number(s.fee_50))),1)],64)):Number(r.price)<75e3?(i(),n(a,{key:2},[c(" Rp "+t(p(Number(r.price)+Number(s.fee_75))),1)],64)):Number(r.price)<1e5?(i(),n(a,{key:3},[c(" Rp "+t(p(Number(r.price)+Number(s.fee_100))),1)],64)):Number(r.price)<2e5?(i(),n(a,{key:4},[c(" Rp "+t(p(Number(r.price)+Number(s.fee_200))),1)],64)):Number(r.price)<5e5?(i(),n(a,{key:5},[c(" Rp "+t(p(Number(r.price)+Number(s.fee_500))),1)],64)):Number(r.price)<1e6?(i(),n(a,{key:6},[c(" Rp "+t(p(Number(r.price)+Number(s.fee_1000))),1)],64)):(i(),n(a,{key:7},[c(" Rp "+t(p(Number(r.price)+Number(s.fee_max))),1)],64))])],8,W)):(i(),n("div",ee,[o("p",re,t(r.product_name),1),se]))])])):L("",!0)],64))),256))]),f(E,{show:g.value,onClose:y},{title:_(()=>[c(" Lanjutkan Pembayaran ")]),content:_(()=>[o("div",oe,[te,o("div",ie,t(l(h)),1),ue,o("div",ce,t(l(u).customer_no),1),ne,o("div",me," Rp "+t(p(l(N))),1),le]),o("div",pe,t(l(v)),1)]),footer:_(()=>[o("div",_e,[f(T,{on:e.$page.props.user.wallet_balance<=l(N),class:"mr-3"},{default:_(()=>[c(" Saldo anda kurang ")]),_:1},8,["on"]),f(q,{class:M({"opacity-25":l(u).processing}),disabled:l(u).processing||e.$page.props.user.wallet_balance<=l(N),onClick:$},{default:_(()=>[c(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]),_:1},8,["title","name"]))}};export{Le as default};
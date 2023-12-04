import{_ as C}from"./AppLayout.adc97fb8.js";import{q as V,O as P,T as z,i as I,d as f,c as x,w as _,o as i,b as d,g as c,t,a as o,u as p,e as n,h as L,F as a,f as M,n as j,Q as D}from"./app.95b793db.js";import{_ as F}from"./TextInput.a3b96912.js";import{_ as O}from"./InputError.24fa8bbb.js";import{_ as T}from"./PreviousButton.9af8ccd2.js";import{_ as q}from"./FormSection.0c6645d2.js";import{_ as E}from"./ActionMessage.6fac0319.js";import{_ as H}from"./PrimaryButton.48cb297b.js";import{_ as K}from"./InputLabel.e70fd0a6.js";import{a as Q}from"./DialogModal.5ed0cc84.js";import U from"./Loading.17c6c3da.js";import"./vue3-lottie.es.c9ad74c9.js";import"./Banner.66699ae7.js";import"./DarkmodeToggle.7adacdc4.js";import"./helper.e9fc3b37.js";import"./label.a2272d4d.js";import"./index.89e4c2ac.js";import"./focus-management.dcee4bf5.js";import"./SectionTitle.a2fce12f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const A={class:"col-span-6 sm:col-span-3"},G={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},J={key:0,class:"relative px-6 py-5 shadow-lg flex items-center space-x-3"},W={class:"flex-shrink-0"},X=["src"],Y={class:"flex-1 min-w-0"},Z=["onClick"],ee=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),re={class:"text-sm font-medium text-gray-900"},se={class:"text-sm text-gray-500 truncate"},oe={key:1,class:"focus:outline-none text-left"},te={class:"text-sm font-medium text-gray-500"},ie=o("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),ue={class:"grid grid-cols-2 justify-between gap-2"},ce=o("div",{class:""}," Produk ",-1),ne={class:"text-right font-medium"},le=o("div",{class:""}," No Customer ",-1),me={class:"text-right font-medium"},pe=o("div",{class:""}," Harga ",-1),ae={class:"text-right font-medium"},_e=o("div",{class:""}," Detail Produk ",-1),de={class:"border border-gray-300 rounded-3xl p-2 mt-2"},fe={class:"flex items-center"},De={__name:"Show",props:{users:Object,response:void 0,product:String,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(w){var k;const s=w;V(()=>{P.reload({only:["response"]})});const u=z({user_id:(k=s.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),{...$}=I(()=>D().props.user).value,R=()=>{l.value!=null&&(u.fee=l.value),$.pin?u.post(route("pin.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()}):u.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()})};function m(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=f(!1);f(null);let y=f(null);f(null);let N=f(null),h=f(null);const l=f(null),S=r=>{u.customer_no!==""&&(g.value=!0,u.sku=r.buyer_sku_code,u.amount=r.price,u.product_name=r.product_name,u.category_id=6,r.buyer_sku_code,y=r.product_name,r.brand,Number(r.price)<1e3?l.value=0:Number(r.price)<25e3?l.value=Number(s.fee_25):Number(r.price)<5e4?l.value=Number(s.fee_50):Number(r.price)<75e3?l.value=Number(s.fee_75):Number(r.price)<1e5?l.value=Number(s.fee_100):Number(r.price)<2e5?l.value=Number(s.fee_200):Number(r.price)<5e5?l.value=Number(s.fee_500):Number(r.price)<1e6?l.value=Number(s.fee_1000):l.value=Number(s.fee_max),N=Number(l.value)+Number(r.price),h=r.desc)};function B(r){return r.slice().sort(function(b,e){return b.price-e.price})}const v=()=>{g.value=!1};return(r,b)=>(i(),x(C,{title:s.product,name:s.product,desc:"Lorem ipsum"},{previous:_(()=>[d(T)]),default:_(()=>[d(q,{class:"sticky top-0 z-40"},{title:_(()=>[c(t(s.product),1)]),description:_(()=>[c(" * Saldo Rekening Rp "+t(m(r.$page.props.user.wallet_balance)),1)]),form:_(()=>[o("div",A,[d(K,{for:"number",value:"No Kustomer"}),d(F,{id:"number",modelValue:p(u).customer_no,"onUpdate:modelValue":b[0]||(b[0]=e=>p(u).customer_no=e),type:"number",class:"mt-1 block w-full",minlength:"8",required:"",autofocus:""},null,8,["modelValue"]),d(O,{message:p(u).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),o("ul",G,[s.response===void 0?(i(),x(U,{key:0})):(i(!0),n(a,{key:1},L(B(s.response.data),e=>(i(),n(a,null,[e.brand==s.product?(i(),n("li",J,[o("div",W,[o("img",{class:"w-10",src:"/img/vendor/"+s.product+".svg",alt:""},null,8,X)]),o("div",Y,[Number(e.price)<Number(r.$page.props.digiflazz_saldo)&&e.buyer_product_status?(i(),n("button",{key:0,onClick:be=>S(e),class:"focus:outline-none text-left"},[ee,o("p",re,t(e.product_name),1),o("p",se,[Number(e.price)<1e3?(i(),n(a,{key:0},[c(" Rp "+t(m(Number(e.price))),1)],64)):Number(e.price)<25e3?(i(),n(a,{key:1},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_25))),1)],64)):Number(e.price)<5e4?(i(),n(a,{key:2},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_50))),1)],64)):Number(e.price)<75e3?(i(),n(a,{key:3},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_75))),1)],64)):Number(e.price)<1e5?(i(),n(a,{key:4},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_100))),1)],64)):Number(e.price)<2e5?(i(),n(a,{key:5},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_200))),1)],64)):Number(e.price)<5e5?(i(),n(a,{key:6},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_500))),1)],64)):Number(e.price)<1e6?(i(),n(a,{key:7},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_1000))),1)],64)):(i(),n(a,{key:8},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_max))),1)],64))])],8,Z)):(i(),n("div",oe,[o("p",te,t(e.product_name),1),ie]))])])):M("",!0)],64))),256))]),d(Q,{show:g.value,onClose:v},{title:_(()=>[c(" Lanjutkan Pembayaran ")]),content:_(()=>[o("div",ue,[ce,o("div",ne,t(p(y)),1),le,o("div",me,t(p(u).customer_no),1),pe,o("div",ae," Rp "+t(m(p(N))),1),_e]),o("div",de,t(p(h)),1)]),footer:_(()=>[o("div",fe,[d(E,{on:r.$page.props.user.wallet_balance<=p(N),class:"mr-3"},{default:_(()=>[c(" Saldo anda kurang ")]),_:1},8,["on"]),d(H,{class:j({"opacity-25":p(u).processing}),disabled:p(u).processing||r.$page.props.user.wallet_balance<=p(N),onClick:R},{default:_(()=>[c(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]),_:1},8,["title","name"]))}};export{De as default};

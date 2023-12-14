import{_ as B}from"./AppLayout-00a918e4.js";import{z as C,O as V,T as P,i as z,d as f,o as i,c as k,w as _,Q as j,b as d,g as c,t,a as o,u as p,e as n,h as I,F as a,f as L,n as M}from"./app-c5d5a29d.js";import{_ as D}from"./TextInput-a584e0b3.js";import{_ as F}from"./InputError-a249f732.js";import{_ as O}from"./PreviousButton-1c81beae.js";import{_ as T}from"./FormSection-6520668b.js";import{_ as q}from"./ActionMessage-c4a035af.js";import{_ as E}from"./PrimaryButton-01bdfec0.js";import{_ as H}from"./InputLabel-02b8f308.js";import{a as Q}from"./DialogModal-a0784146.js";import U from"./Loading-8e06827d.js";import"./OnlineStatus-63c675ef.js";import"./index-ccd2cd96.js";import"./DarkmodeToggle-c21dfd7c.js";import"./use-controllable-e21126b4.js";import"./focus-management-f3fd2863.js";import"./SectionTitle-e0a5b68f.js";import"./_plugin-vue_export-helper-c27b6911.js";const A={class:"col-span-6 sm:col-span-3"},G={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},J={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},K={class:"flex-shrink-0"},W=["src"],X={class:"flex-1 min-w-0"},Y=["onClick"],Z=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ee={class:"text-sm font-medium text-gray-900"},re={class:"text-sm text-gray-500 truncate"},se={key:1,class:"focus:outline-none text-left"},oe={class:"text-sm font-medium text-gray-500"},te=o("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),ie={class:"grid grid-cols-2 justify-between gap-2"},ue=o("div",{class:""}," Produk ",-1),ce={class:"text-right font-medium"},ne=o("div",{class:""}," No Customer ",-1),le={class:"text-right font-medium"},me=o("div",{class:""}," Harga ",-1),pe={class:"text-right font-medium"},ae=o("div",{class:""}," Detail Produk ",-1),_e={class:"border border-gray-300 rounded-3xl p-2 mt-2"},de={class:"grid items-center w-full"},Ie={__name:"Show",props:{users:Object,response:void 0,product:String,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(x){const s=x;C(()=>{V.reload({only:["response"]})});const u=P({user_id:s.users.id??null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),{...w}=z(()=>j().props.user).value,$=()=>{l.value!=null&&(u.fee=l.value),w.pin?u.post(route("pin.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()}):u.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()})};function m(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=f(!1);f(null);let y=f(null);f(null);let N=f(null),h=f(null);const l=f(null),R=r=>{u.customer_no!==""&&(g.value=!0,u.sku=r.buyer_sku_code,u.amount=r.price,u.product_name=r.product_name,u.category_id=6,r.buyer_sku_code,y=r.product_name,r.brand,Number(r.price)<1e3?l.value=0:Number(r.price)<25e3?l.value=Number(s.fee_25):Number(r.price)<5e4?l.value=Number(s.fee_50):Number(r.price)<75e3?l.value=Number(s.fee_75):Number(r.price)<1e5?l.value=Number(s.fee_100):Number(r.price)<2e5?l.value=Number(s.fee_200):Number(r.price)<5e5?l.value=Number(s.fee_500):Number(r.price)<1e6?l.value=Number(s.fee_1000):l.value=Number(s.fee_max),N=Number(l.value)+Number(r.price),h=r.desc)};function S(r){return r.slice().sort(function(b,e){return b.price-e.price})}const v=()=>{g.value=!1};return(r,b)=>(i(),k(B,{title:s.product,name:s.product,desc:"Lorem ipsum"},{previous:_(()=>[d(O)]),default:_(()=>[d(T,{class:"sticky top-0 z-40"},{title:_(()=>[c(t(s.product),1)]),description:_(()=>[c(" * Saldo Rekening Rp "+t(m(r.$page.props.user.wallet_balance)),1)]),form:_(()=>[o("div",A,[d(H,{for:"number",value:"No Pelanggan"}),d(D,{id:"number",modelValue:p(u).customer_no,"onUpdate:modelValue":b[0]||(b[0]=e=>p(u).customer_no=e),type:"number",class:"mt-1 block w-full",minlength:"8",required:"",autofocus:""},null,8,["modelValue"]),d(F,{message:p(u).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),o("ul",G,[s.response===void 0?(i(),k(U,{key:0})):(i(!0),n(a,{key:1},I(S(s.response.data),e=>(i(),n(a,null,[e.brand==s.product?(i(),n("li",J,[o("div",K,[o("img",{class:"w-10",src:"/img/vendor/"+s.product+".svg",alt:""},null,8,W)]),o("div",X,[Number(e.price)<Number(r.$page.props.digiflazz_saldo)&&e.buyer_product_status&&e.seller_product_status?(i(),n("button",{key:0,onClick:fe=>R(e),class:"focus:outline-none text-left"},[Z,o("p",ee,t(e.product_name),1),o("p",re,[Number(e.price)<1e3?(i(),n(a,{key:0},[c(" Rp "+t(m(Number(e.price))),1)],64)):Number(e.price)<25e3?(i(),n(a,{key:1},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_25))),1)],64)):Number(e.price)<5e4?(i(),n(a,{key:2},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_50))),1)],64)):Number(e.price)<75e3?(i(),n(a,{key:3},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_75))),1)],64)):Number(e.price)<1e5?(i(),n(a,{key:4},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_100))),1)],64)):Number(e.price)<2e5?(i(),n(a,{key:5},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_200))),1)],64)):Number(e.price)<5e5?(i(),n(a,{key:6},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_500))),1)],64)):Number(e.price)<1e6?(i(),n(a,{key:7},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_1000))),1)],64)):(i(),n(a,{key:8},[c(" Rp "+t(m(Number(e.price)+Number(s.fee_max))),1)],64))])],8,Y)):(i(),n("div",se,[o("p",oe,t(e.product_name),1),te]))])])):L("",!0)],64))),256))]),d(Q,{show:g.value,onClose:v},{title:_(()=>[c(" Lanjutkan Pembayaran ")]),content:_(()=>[o("div",ie,[ue,o("div",ce,t(p(y)),1),ne,o("div",le,t(p(u).customer_no),1),me,o("div",pe," Rp "+t(m(p(N))),1),ae]),o("div",_e,t(p(h)),1)]),footer:_(()=>[o("div",de,[d(q,{on:r.$page.props.user.wallet_balance<=p(N),class:"mr-3"},{default:_(()=>[c(" Saldo anda kurang ")]),_:1},8,["on"]),d(E,{class:M(["w-full justify-center",{"opacity-25":p(u).processing}]),disabled:p(u).processing||r.$page.props.user.wallet_balance<=p(N),onClick:$},{default:_(()=>[c(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]),_:1},8,["title","name"]))}};export{Ie as default};

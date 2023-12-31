import{_ as P}from"./AppLayout-eb10105f.js";import{z as j,O as z,T as L,i as O,d as f,o as t,c as R,w as _,Q as U,b,g as l,t as i,a as o,u as p,n as x,e as u,f as h,h as M,F as m}from"./app-cca8524f.js";import{_ as T}from"./TextInput-4c27bf33.js";import{_ as D}from"./InputError-3290985b.js";import{_ as F}from"./PreviousButton-d827ea68.js";import{_ as K}from"./FormSection-87ca31d2.js";import{_ as q}from"./ActionMessage-6e7f7577.js";import{_ as E}from"./PrimaryButton-e5f5f783.js";import{_ as G}from"./InputLabel-e20533fe.js";import{a as H}from"./DialogModal-ec8c835e.js";import Q from"./Loading-340c5980.js";import"./OnlineStatus-410cdafa.js";import"./index-7538aa88.js";import"./DarkmodeToggle-53e414f8.js";import"./use-controllable-4511d8cc.js";import"./focus-management-d97e1ec5.js";import"./SectionTitle-3e381dfd.js";import"./_plugin-vue_export-helper-c27b6911.js";const A={class:"col-span-6 sm:col-span-3"},J={class:"border-b border-gray-300"},W={class:"-mb-px flex","aria-label":"Tabs"},X={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},Y={key:1,class:"grid justify-center text-center px-5 py-3"},Z=o("i",{class:"fa-regular fa-exclamation-triangle text-2xl text-red-600"},null,-1),ee=o("p",{class:"text-sm text-gray-600"},"Produk sedang tidak tersedia, coba beberapa saat lagi.",-1),re=[Z,ee],se={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},oe={class:"flex-shrink-0"},te=["src"],ie={class:"flex-1 min-w-0"},ue=["onClick"],ne=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),le={class:"text-sm font-medium text-gray-900"},ce={class:"text-sm text-gray-500 truncate"},me={key:1,class:"focus:outline-none text-left"},ae={class:"text-sm font-medium text-gray-500"},pe=o("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),_e={class:"grid grid-cols-2 justify-between gap-2"},de=o("div",{class:""}," Produk ",-1),fe={class:"text-right font-medium"},be=o("div",{class:""}," No Customer ",-1),ge={class:"text-right font-medium"},Ne=o("div",{class:""}," Harga ",-1),ye={class:"text-right font-medium"},ve=o("div",{class:""}," Detail Produk ",-1),ke={class:"border border-gray-300 rounded-3xl p-2 mt-2"},xe={class:"grid items-center w-full"},Ke={__name:"Show",props:{users:Object,response:void 0,product:String,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(S){const r=S;j(()=>{z.reload({only:["response"]})});const n=L({user_id:r.users.id??null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),{...V}=O(()=>U().props.user).value,C=()=>{c.value!=null&&(n.fee=c.value),V.pin?n.post(route("pin.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>k()}):n.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>k()})};function a(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const v=f(!1);f(null);let w=f(null);f(null);let N=f(null),$=f(null);const c=f(null),B=s=>{n.customer_no!==""&&(v.value=!0,n.sku=s.buyer_sku_code,n.amount=s.price,n.product_name=s.product_name,n.category_id=7,s.buyer_sku_code,w=s.product_name,s.brand,Number(s.price)<1e3?c.value=0:Number(s.price)<25e3?c.value=Number(r.fee_25):Number(s.price)<5e4?c.value=Number(r.fee_50):Number(s.price)<75e3?c.value=Number(r.fee_75):Number(s.price)<1e5?c.value=Number(r.fee_100):Number(s.price)<2e5?c.value=Number(r.fee_200):Number(s.price)<5e5?c.value=Number(r.fee_500):Number(s.price)<1e6?c.value=Number(r.fee_1000):c.value=Number(r.fee_max),N=Number(c.value)+Number(s.price),$=s.desc)};function I(s){return s.slice().sort(function(d,y){return d.price-y.price})}const k=()=>{v.value=!1},g=f("Umum");return(s,d)=>(t(),R(P,{title:r.product,name:r.product,desc:"Lorem ipsum"},{previous:_(()=>[b(F)]),default:_(()=>{var y;return[b(K,{class:"sticky top-0 z-40"},{title:_(()=>[l(i(r.product),1)]),description:_(()=>[l(" * Saldo Rekening Rp "+i(a(s.$page.props.user.wallet_balance)),1)]),form:_(()=>[o("div",A,[b(G,{for:"number",value:"No Kustomer"}),b(T,{id:"number",modelValue:p(n).customer_no,"onUpdate:modelValue":d[0]||(d[0]=e=>p(n).customer_no=e),type:"number",class:"mt-1 block w-full",minlength:"8",required:"",autofocus:""},null,8,["modelValue"]),b(D,{message:p(n).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),o("div",J,[o("nav",W,[o("button",{class:x(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",g.value=="Umum"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:d[1]||(d[1]=e=>g.value="Umum")}," Umum ",2),r.product=="K-VISION dan GOL"?(t(),u("button",{key:0,class:x(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",g.value=="Visionku"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:d[2]||(d[2]=e=>g.value="Visionku")}," Visionku ",2)):h("",!0)])]),o("ul",X,[r.response===void 0?(t(),R(Q,{key:0})):(y=r.response.data)!=null&&y.rc?(t(),u("div",Y,re)):(t(!0),u(m,{key:2},M(I(r.response.data),e=>(t(),u(m,null,[e.brand==r.product?(t(),u(m,{key:0},[e.type==g.value?(t(),u("li",se,[o("div",oe,[o("img",{class:"w-10",src:"/img/vendor/"+r.product+".svg",alt:""},null,8,te)]),o("div",ie,[Number(e.price)<Number(s.$page.props.digiflazz_saldo)&&e.buyer_product_status&&e.seller_product_status?(t(),u("button",{key:0,onClick:he=>B(e),class:"focus:outline-none text-left"},[ne,o("p",le,i(e.product_name),1),o("p",ce,[Number(e.price)<1e3?(t(),u(m,{key:0},[l(" Rp "+i(a(Number(e.price))),1)],64)):Number(e.price)<25e3?(t(),u(m,{key:1},[l(" Rp "+i(a(Number(e.price)+Number(r.fee_25))),1)],64)):Number(e.price)<5e4?(t(),u(m,{key:2},[l(" Rp "+i(a(Number(e.price)+Number(r.fee_50))),1)],64)):Number(e.price)<75e3?(t(),u(m,{key:3},[l(" Rp "+i(a(Number(e.price)+Number(r.fee_75))),1)],64)):Number(e.price)<1e5?(t(),u(m,{key:4},[l(" Rp "+i(a(Number(e.price)+Number(r.fee_100))),1)],64)):Number(e.price)<2e5?(t(),u(m,{key:5},[l(" Rp "+i(a(Number(e.price)+Number(r.fee_200))),1)],64)):Number(e.price)<5e5?(t(),u(m,{key:6},[l(" Rp "+i(a(Number(e.price)+Number(r.fee_500))),1)],64)):Number(e.price)<1e6?(t(),u(m,{key:7},[l(" Rp "+i(a(Number(e.price)+Number(r.fee_1000))),1)],64)):(t(),u(m,{key:8},[l(" Rp "+i(a(Number(e.price)+Number(r.fee_max))),1)],64))])],8,ue)):(t(),u("div",me,[o("p",ae,i(e.product_name),1),pe]))])])):h("",!0)],64)):h("",!0)],64))),256))]),b(H,{show:v.value,onClose:k},{title:_(()=>[l(" Lanjutkan Pembayaran ")]),content:_(()=>[o("div",_e,[de,o("div",fe,i(p(w)),1),be,o("div",ge,i(p(n).customer_no),1),Ne,o("div",ye," Rp "+i(a(p(N))),1),ve]),o("div",ke,i(p($)),1)]),footer:_(()=>[o("div",xe,[b(q,{on:s.$page.props.user.wallet_balance<=p(N),class:"mr-3"},{default:_(()=>[l(" Saldo anda kurang ")]),_:1},8,["on"]),b(E,{class:x(["w-full justify-center",{"opacity-25":p(n).processing}]),disabled:p(n).processing||s.$page.props.user.wallet_balance<=p(N),onClick:C},{default:_(()=>[l(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]}),_:1},8,["title","name"]))}};export{Ke as default};
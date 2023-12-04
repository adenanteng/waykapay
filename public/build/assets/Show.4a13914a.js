import{_ as L}from"./AppLayout.51bdf8c6.js";import{q as O,O as P,T as U,i as z,d as f,c as R,w as _,o as t,b,g as l,t as i,a as o,u as a,n as k,e as u,f as x,h as M,F as c,Q as T}from"./app.27afec04.js";import{_ as j}from"./TextInput.ffe06db5.js";import{_ as D}from"./InputError.d89297c4.js";import{_ as F}from"./PreviousButton.b32664b6.js";import{_ as q}from"./FormSection.06e043c4.js";import{_ as K}from"./ActionMessage.26838904.js";import{_ as E}from"./PrimaryButton.e94d1120.js";import{_ as G}from"./InputLabel.e6ba9257.js";import{a as H}from"./DialogModal.4b293b16.js";import Q from"./Loading.d831c432.js";import"./vue3-lottie.es.92ab9fb5.js";import"./Banner.2c3d7b59.js";import"./DarkmodeToggle.72747578.js";import"./helper.e9fc3b37.js";import"./label.578e18f7.js";import"./index.ff8dc426.js";import"./focus-management.06838c5a.js";import"./SectionTitle.c3071b9d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const A={class:"col-span-6 sm:col-span-3"},J={class:"border-b border-gray-300"},W={class:"-mb-px flex","aria-label":"Tabs"},X={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},Y={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},Z={class:"flex-shrink-0"},ee=["src"],re={class:"flex-1 min-w-0"},se=["onClick"],oe=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),te={class:"text-sm font-medium text-gray-900"},ie={class:"text-sm text-gray-500 truncate"},ue={key:1,class:"focus:outline-none text-left"},ne={class:"text-sm font-medium text-gray-500"},le=o("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),me={class:"grid grid-cols-2 justify-between gap-2"},ce=o("div",{class:""}," Produk ",-1),pe={class:"text-right font-medium"},ae=o("div",{class:""}," No Customer ",-1),_e={class:"text-right font-medium"},de=o("div",{class:""}," Harga ",-1),fe={class:"text-right font-medium"},be=o("div",{class:""}," Detail Produk ",-1),Ne={class:"border border-gray-300 rounded-3xl p-2 mt-2"},je={__name:"Show",props:{users:Object,response:void 0,product:String,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(S){var $;const r=S;O(()=>{P.reload({only:["response"]})});const n=U({user_id:($=r.users.id)!=null?$:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),{...V}=z(()=>T().props.user).value,C=()=>{m.value!=null&&(n.fee=m.value),V.pin?n.post(route("pin.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()}):n.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()})};function p(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const v=f(!1);f(null);let h=f(null);f(null);let g=f(null),w=f(null);const m=f(null),B=s=>{n.customer_no!==""&&(v.value=!0,n.sku=s.buyer_sku_code,n.amount=s.price,n.product_name=s.product_name,n.category_id=7,s.buyer_sku_code,h=s.product_name,s.brand,Number(s.price)<1e3?m.value=0:Number(s.price)<25e3?m.value=Number(r.fee_25):Number(s.price)<5e4?m.value=Number(r.fee_50):Number(s.price)<75e3?m.value=Number(r.fee_75):Number(s.price)<1e5?m.value=Number(r.fee_100):Number(s.price)<2e5?m.value=Number(r.fee_200):Number(s.price)<5e5?m.value=Number(r.fee_500):Number(s.price)<1e6?m.value=Number(r.fee_1000):m.value=Number(r.fee_max),g=Number(m.value)+Number(s.price),w=s.desc)};function I(s){return s.slice().sort(function(d,e){return d.price-e.price})}const y=()=>{v.value=!1},N=f("Umum");return(s,d)=>(t(),R(L,{title:r.product,name:r.product,desc:"Lorem ipsum"},{previous:_(()=>[b(F)]),default:_(()=>[b(q,{class:"sticky top-0 z-40"},{title:_(()=>[l(i(r.product),1)]),description:_(()=>[l(" * Saldo Rekening Rp "+i(p(s.$page.props.user.wallet_balance)),1)]),form:_(()=>[o("div",A,[b(G,{for:"number",value:"No Kustomer"}),b(j,{id:"number",modelValue:a(n).customer_no,"onUpdate:modelValue":d[0]||(d[0]=e=>a(n).customer_no=e),type:"number",class:"mt-1 block w-full",minlength:"8",required:"",autofocus:""},null,8,["modelValue"]),b(D,{message:a(n).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),o("div",J,[o("nav",W,[o("button",{class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Umum"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:d[1]||(d[1]=e=>N.value="Umum")}," Umum ",2),r.product=="K-VISION dan GOL"?(t(),u("button",{key:0,class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Visionku"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:d[2]||(d[2]=e=>N.value="Visionku")}," Visionku ",2)):x("",!0)])]),o("ul",X,[r.response===void 0?(t(),R(Q,{key:0})):(t(!0),u(c,{key:1},M(I(r.response.data),e=>(t(),u(c,null,[e.brand==r.product?(t(),u(c,{key:0},[e.type==N.value?(t(),u("li",Y,[o("div",Z,[o("img",{class:"w-10",src:"/img/vendor/"+r.product+".svg",alt:""},null,8,ee)]),o("div",re,[Number(e.price)<Number(s.$page.props.digiflazz_saldo)&&e.buyer_product_status?(t(),u("button",{key:0,onClick:ge=>B(e),class:"focus:outline-none text-left"},[oe,o("p",te,i(e.product_name),1),o("p",ie,[Number(e.price)<1e3?(t(),u(c,{key:0},[l(" Rp "+i(p(Number(e.price))),1)],64)):Number(e.price)<25e3?(t(),u(c,{key:1},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_25))),1)],64)):Number(e.price)<5e4?(t(),u(c,{key:2},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_50))),1)],64)):Number(e.price)<75e3?(t(),u(c,{key:3},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_75))),1)],64)):Number(e.price)<1e5?(t(),u(c,{key:4},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_100))),1)],64)):Number(e.price)<2e5?(t(),u(c,{key:5},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_200))),1)],64)):Number(e.price)<5e5?(t(),u(c,{key:6},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_500))),1)],64)):Number(e.price)<1e6?(t(),u(c,{key:7},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_1000))),1)],64)):(t(),u(c,{key:8},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_max))),1)],64))])],8,se)):(t(),u("div",ue,[o("p",ne,i(e.product_name),1),le]))])])):x("",!0)],64)):x("",!0)],64))),256))]),b(H,{show:v.value,onClose:y},{title:_(()=>[l(" Lanjutkan Pembayaran ")]),content:_(()=>[o("div",me,[ce,o("div",pe,i(a(h)),1),ae,o("div",_e,i(a(n).customer_no),1),de,o("div",fe," Rp "+i(p(a(g))),1),be]),o("div",Ne,i(a(w)),1)]),footer:_(()=>[b(K,{on:s.$page.props.user.wallet_balance<=a(g),class:"mr-3"},{default:_(()=>[l(" Saldo anda kurang ")]),_:1},8,["on"]),b(E,{class:k({"opacity-25":a(n).processing}),disabled:a(n).processing||s.$page.props.user.wallet_balance<=a(g),onClick:C},{default:_(()=>[l(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1},8,["title","name"]))}};export{je as default};

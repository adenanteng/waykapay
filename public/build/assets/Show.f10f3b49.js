import{_ as L}from"./AppLayout.adc97fb8.js";import{q as I,O as P,T as U,i as z,d as f,c as R,w as _,o as t,b,g as l,t as i,a as o,u as a,n as k,e as u,f as h,h as D,F as c,Q as E}from"./app.95b793db.js";import{_ as O}from"./TextInput.a3b96912.js";import{_ as T}from"./InputError.24fa8bbb.js";import{_ as j}from"./PreviousButton.9af8ccd2.js";import{_ as F}from"./FormSection.0c6645d2.js";import{_ as q}from"./ActionMessage.6fac0319.js";import{_ as G}from"./PrimaryButton.48cb297b.js";import{_ as H}from"./InputLabel.e70fd0a6.js";import{a as K}from"./DialogModal.5ed0cc84.js";import Q from"./Loading.17c6c3da.js";import"./vue3-lottie.es.c9ad74c9.js";import"./Banner.66699ae7.js";import"./DarkmodeToggle.7adacdc4.js";import"./helper.e9fc3b37.js";import"./label.a2272d4d.js";import"./index.89e4c2ac.js";import"./focus-management.dcee4bf5.js";import"./SectionTitle.a2fce12f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const A={class:"col-span-6 sm:col-span-3"},J={class:"border-b border-gray-300"},W={class:"-mb-px flex","aria-label":"Tabs"},X={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},Y={key:0,class:"relative px-6 py-5 shadow-lg flex items-center space-x-3"},Z={class:"flex-shrink-0"},ee=["src"],re={class:"flex-1 min-w-0"},se=["onClick"],oe=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),te={class:"text-sm font-medium text-gray-900"},ie={class:"text-sm text-gray-500 truncate"},ue={key:1,class:"focus:outline-none text-left"},ne={class:"text-sm font-medium text-gray-500"},le=o("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),me={class:"grid grid-cols-2 justify-between gap-2"},ce=o("div",{class:""}," Produk ",-1),pe={class:"text-right font-medium"},ae=o("div",{class:""}," No Customer ",-1),_e={class:"text-right font-medium"},de=o("div",{class:""}," Harga ",-1),fe={class:"text-right font-medium"},be=o("div",{class:""}," Detail Produk ",-1),Ne={class:"border border-gray-300 rounded-3xl p-2 mt-2"},ge={class:"flex items-center"},Te={__name:"Show",props:{users:Object,response:void 0,product:String,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(S){var $;const r=S;I(()=>{P.reload({only:["response"]})});const n=U({user_id:($=r.users.id)!=null?$:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),{...C}=z(()=>E().props.user).value,B=()=>{m.value!=null&&(n.fee=m.value),C.pin?n.post(route("pin.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()}):n.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()})};function p(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const y=f(!1);f(null);let x=f(null);f(null);let g=f(null),w=f(null);const m=f(null),M=s=>{n.customer_no!==""&&(y.value=!0,n.sku=s.buyer_sku_code,n.amount=s.price,n.product_name=s.product_name,n.category_id=4,s.buyer_sku_code,x=s.product_name,s.brand,Number(s.price)<1e3?m.value=0:Number(s.price)<25e3?m.value=Number(r.fee_25):Number(s.price)<5e4?m.value=Number(r.fee_50):Number(s.price)<75e3?m.value=Number(r.fee_75):Number(s.price)<1e5?m.value=Number(r.fee_100):Number(s.price)<2e5?m.value=Number(r.fee_200):Number(s.price)<5e5?m.value=Number(r.fee_500):Number(s.price)<1e6?m.value=Number(r.fee_1000):m.value=Number(r.fee_max),g=Number(m.value)+Number(s.price),w=s.desc)};function V(s){return s.slice().sort(function(d,e){return d.price-e.price})}const v=()=>{y.value=!1},N=f("Umum");return(s,d)=>(t(),R(L,{title:r.product,name:r.product,desc:"Lorem ipsum"},{previous:_(()=>[b(j)]),default:_(()=>[b(F,{class:"sticky top-0 z-40"},{title:_(()=>[l(i(r.product),1)]),description:_(()=>[l(" * Saldo Rekening Rp "+i(p(s.$page.props.user.wallet_balance)),1)]),form:_(()=>[o("div",A,[b(H,{for:"number",value:"No Kustomer"}),b(O,{id:"number",modelValue:a(n).customer_no,"onUpdate:modelValue":d[0]||(d[0]=e=>a(n).customer_no=e),type:"number",class:"mt-1 block w-full",minlength:"8",required:"",autofocus:""},null,8,["modelValue"]),b(T,{message:a(n).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),o("div",J,[o("nav",W,[o("button",{class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Umum"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:d[1]||(d[1]=e=>N.value="Umum")}," Umum ",2),r.product=="MOBILE LEGENDS"?(t(),u("button",{key:0,class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Membership"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:d[2]||(d[2]=e=>N.value="Membership")}," Membership ",2)):h("",!0)])]),o("ul",X,[r.response===void 0?(t(),R(Q,{key:0})):(t(!0),u(c,{key:1},D(V(r.response.data),e=>(t(),u(c,null,[e.brand==r.product?(t(),u(c,{key:0},[e.type==N.value?(t(),u("li",Y,[o("div",Z,[o("img",{class:"w-10",src:"/img/games/icons/"+r.product+".png",alt:""},null,8,ee)]),o("div",re,[Number(e.price)<Number(s.$page.props.digiflazz_saldo)&&e.buyer_product_status?(t(),u("button",{key:0,onClick:ye=>M(e),class:"focus:outline-none text-left"},[oe,o("p",te,i(e.product_name),1),o("p",ie,[Number(e.price)<1e3?(t(),u(c,{key:0},[l(" Rp "+i(p(Number(e.price))),1)],64)):Number(e.price)<25e3?(t(),u(c,{key:1},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_25))),1)],64)):Number(e.price)<5e4?(t(),u(c,{key:2},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_50))),1)],64)):Number(e.price)<75e3?(t(),u(c,{key:3},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_75))),1)],64)):Number(e.price)<1e5?(t(),u(c,{key:4},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_100))),1)],64)):Number(e.price)<2e5?(t(),u(c,{key:5},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_200))),1)],64)):Number(e.price)<5e5?(t(),u(c,{key:6},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_500))),1)],64)):Number(e.price)<1e6?(t(),u(c,{key:7},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_1000))),1)],64)):(t(),u(c,{key:8},[l(" Rp "+i(p(Number(e.price)+Number(r.fee_max))),1)],64))])],8,se)):(t(),u("div",ue,[o("p",ne,i(e.product_name),1),le]))])])):h("",!0)],64)):h("",!0)],64))),256))]),b(K,{show:y.value,onClose:v},{title:_(()=>[l(" Lanjutkan Pembayaran ")]),content:_(()=>[o("div",me,[ce,o("div",pe,i(a(x)),1),ae,o("div",_e,i(a(n).customer_no),1),de,o("div",fe," Rp "+i(p(a(g))),1),be]),o("div",Ne,i(a(w)),1)]),footer:_(()=>[o("div",ge,[b(q,{on:s.$page.props.user.wallet_balance<=a(g),class:"mr-3"},{default:_(()=>[l(" Saldo anda kurang ")]),_:1},8,["on"]),b(G,{class:k({"opacity-25":a(n).processing}),disabled:a(n).processing||s.$page.props.user.wallet_balance<=a(g),onClick:B},{default:_(()=>[l(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]),_:1},8,["title","name"]))}};export{Te as default};

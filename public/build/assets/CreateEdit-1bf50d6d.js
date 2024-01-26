import{_ as F}from"./AppLayout-d010e479.js";import{z as H,O as Q,T as U,i as q,d as m,o as i,c as j,w as u,Q as A,b as _,g as l,t as o,a as s,e as n,h as G,F as p,f as B,u as b,n as J}from"./app-0ecba403.js";import{_ as K}from"./PreviousButton-7dc2ed51.js";import{_ as W}from"./FormSection-1f1fe7f3.js";import{_ as X}from"./ActionMessage-bd79595e.js";import{_ as Y}from"./PrimaryButton-a85dd7ab.js";import{_ as k}from"./InputLabel-39114a98.js";import{a as I}from"./DialogModal-bc03d853.js";import Z from"./Loading-046f7704.js";import{e as O}from"./vue3-otp-input.esm-5da8380a.js";import{b as ee}from"./bcrypt-40fb0998.js";import"./OnlineStatus-43bffffc.js";import"./index-04e4a021.js";import"./DarkmodeToggle-cf05e819.js";import"./helper-04030b53.js";import"./use-controllable-2af876c8.js";import"./use-resolve-button-type-6c9ad90a.js";import"./InputError-e09a1aa4.js";import"./BackgroundParticle-03ed74be.js";import"./use-outside-click-7e708575.js";import"./focus-management-3151d16f.js";import"./SectionTitle-83afbb60.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjs-dynamic-modules-302442b1.js";const se={class:"col-span-6 sm:col-span-3"},re={class:"font-semibold text-gray-900"},te={class:"col-span-6 sm:col-span-3"},oe={class:"font-semibold text-gray-900"},ie={class:"col-span-6 sm:col-span-3"},ne={class:"font-semibold text-gray-900"},le={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},ce={key:1,class:"grid justify-center text-center px-5 py-3"},ue=s("i",{class:"fa-regular fa-exclamation-triangle text-2xl text-red-600"},null,-1),ae=s("p",{class:"text-sm text-gray-600"},"Produk sedang tidak tersedia, coba beberapa saat lagi.",-1),me=[ue,ae],pe={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},_e={class:"flex-shrink-0"},de=["src"],fe={class:"flex-1 min-w-0"},be=["onClick"],Ne=s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ve={class:"text-sm font-medium text-gray-900"},ge={class:"text-sm text-gray-500 truncate"},he={key:1,class:"focus:outline-none text-left"},ye={class:"text-sm font-medium text-gray-500"},ke=s("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),xe={class:"grid grid-cols-2 justify-between gap-2"},we=s("div",{class:""}," Produk ",-1),Pe={class:"text-right font-medium"},$e=s("div",{class:""}," No. Customer ",-1),Ce={class:"text-right font-medium"},Re=s("div",{class:""}," Harga ",-1),Me={class:"text-right font-medium"},Le=s("div",{class:""}," Detail Produk ",-1),je={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Be={class:"grid items-center w-full"},Ie=s("div",{class:"w-full text-center"}," Masukkan PIN transaksi kamu ",-1),Oe={class:"grid justify-center"},Se={key:0,class:"w-full text-center text-sm text-red-600 mt-2"},ns={__name:"CreateEdit",props:{response:void 0,category_id:Number,customer:Object,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(S){const t=S;H(()=>{Q.reload({only:["response"]})});const d=U({brand:"PLN",customer_no:t.customer.data.customer_no,product_name:"",sku:"",amount:"",category_id:t.category_id??5,fee:null,pin:null}),{...x}=q(()=>A().props.user).value,w=()=>{c.value!=null&&(d.fee=c.value),d.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>h()})};function a(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const v=m(!1);m(null);let P=m(null);m(null);let g=m(null),$=m(null);const c=m(null),z=r=>{d.customer_no!==""&&(v.value=!0,d.sku=r.buyer_sku_code,d.amount=r.price,d.product_name=r.product_name,r.buyer_sku_code,P=r.product_name,r.brand,Number(r.price)<1e3?c.value=0:Number(r.price)<25e3?c.value=Number(t.fee_25):Number(r.price)<5e4?c.value=Number(t.fee_50):Number(r.price)<75e3?c.value=Number(t.fee_75):Number(r.price)<1e5?c.value=Number(t.fee_100):Number(r.price)<2e5?c.value=Number(t.fee_200):Number(r.price)<5e5?c.value=Number(t.fee_500):Number(r.price)<1e6?c.value=Number(t.fee_1000):c.value=Number(t.fee_max),g=Number(c.value)+Number(r.price),$=r.desc)};function T(r){return r.slice().sort(function(f,N){return f.price-N.price})}const V=()=>{x.pin?(v.value=!1,C.value=!0):w()},h=()=>{v.value=!1},C=m(!1),R=m(O|null),M=m(""),L=m(!1),D=r=>{let f=r;f=f.replace(/^\$2y(.+)$/i,"$2a$1"),ee.compare(f,x.pin,function(N,e){var y;e?w():(L.value=!0,(y=R.value)==null||y.clearInput())})},E=r=>{};return(r,f)=>(i(),j(F,{title:"PLN Prepaid",name:"PLN Prepaid",desc:"Masukkan nomor"},{previous:u(()=>[_(K)]),default:u(()=>{var N;return[_(W,{class:"sticky top-0 z-40"},{title:u(()=>[l(" Token PLN Prepaid ")]),description:u(()=>[l(" * Saldo Rekening Rp "+o(a(r.$page.props.user.wallet_balance)),1)]),form:u(()=>[s("div",se,[_(k,{for:"number",value:"No. Tujuan"}),s("div",re,o(t.customer.data.customer_no),1)]),s("div",te,[_(k,{for:"number",value:"Nama Pelanggan"}),s("div",oe,o(t.customer.data.name),1)]),s("div",ie,[_(k,{for:"number",value:"Stand Meter"}),s("div",ne,o(t.customer.data.segment_power),1)])]),_:1}),s("ul",le,[t.response===void 0?(i(),j(Z,{key:0})):(N=t.response.data)!=null&&N.rc?(i(),n("div",ce,me)):(i(!0),n(p,{key:2},G(T(t.response.data),e=>(i(),n(p,null,[e.category=="PLN"?(i(),n("li",pe,[s("div",_e,[s("img",{class:"h-10 w-10",src:"/img/vendor/"+e.brand+".svg",alt:""},null,8,de)]),s("div",fe,[Number(e.price)<Number(r.$page.props.digiflazz_saldo)&&e.buyer_product_status&&e.seller_product_status?(i(),n("button",{key:0,onClick:y=>z(e),class:"focus:outline-none text-left"},[Ne,s("p",ve,o(e.product_name),1),s("p",ge,[Number(e.price)<1e3?(i(),n(p,{key:0},[l(" Rp "+o(a(Number(e.price))),1)],64)):Number(e.price)<25e3?(i(),n(p,{key:1},[l(" Rp "+o(a(Number(e.price)+Number(t.fee_25))),1)],64)):Number(e.price)<5e4?(i(),n(p,{key:2},[l(" Rp "+o(a(Number(e.price)+Number(t.fee_50))),1)],64)):Number(e.price)<75e3?(i(),n(p,{key:3},[l(" Rp "+o(a(Number(e.price)+Number(t.fee_75))),1)],64)):Number(e.price)<1e5?(i(),n(p,{key:4},[l(" Rp "+o(a(Number(e.price)+Number(t.fee_100))),1)],64)):Number(e.price)<2e5?(i(),n(p,{key:5},[l(" Rp "+o(a(Number(e.price)+Number(t.fee_200))),1)],64)):Number(e.price)<5e5?(i(),n(p,{key:6},[l(" Rp "+o(a(Number(e.price)+Number(t.fee_500))),1)],64)):Number(e.price)<1e6?(i(),n(p,{key:7},[l(" Rp "+o(a(Number(e.price)+Number(t.fee_1000))),1)],64)):(i(),n(p,{key:8},[l(" Rp "+o(a(Number(e.price)+Number(t.fee_max))),1)],64))])],8,be)):(i(),n("div",he,[s("p",ye,o(e.product_name),1),ke]))])])):B("",!0)],64))),256))]),_(I,{show:v.value,onClose:h},{title:u(()=>[l(" Lanjutkan Pembayaran ")]),content:u(()=>[s("div",xe,[we,s("div",Pe,o(b(P)),1),$e,s("div",Ce,o(b(d).customer_no),1),Re,s("div",Me," Rp "+o(a(b(g))),1),Le]),s("div",je,o(b($)),1)]),footer:u(()=>[s("div",Be,[_(X,{on:r.$page.props.user.wallet_balance<=b(g),class:"mr-3"},{default:u(()=>[l(" Saldo anda kurang ")]),_:1},8,["on"]),_(Y,{class:J(["w-full justify-center",{"opacity-25":b(d).processing}]),disabled:b(d).processing||r.$page.props.user.wallet_balance<=b(g),onClick:V},{default:u(()=>[l(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"]),_(I,{show:C.value,onClose:h},{title:u(()=>[Ie]),content:u(()=>[s("div",Oe,[_(b(O),{ref_key:"otpInput",ref:R,value:M.value,"onUpdate:value":f[0]||(f[0]=e=>M.value=e),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:E,onOnComplete:D},null,8,["value"]),L.value?(i(),n("p",Se,"Pin salah, silahkan coba lagi.")):B("",!0)])]),_:1},8,["show"])]}),_:1}))}};export{ns as default};

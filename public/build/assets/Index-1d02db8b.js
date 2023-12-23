import{z as B,O as E,T as z,i as O,d as f,o as s,c as V,w as a,Q as j,b as y,g as c,t as n,a as t,u as p,j as C,v as P,n as k,e as o,f as d,h as U,F as u}from"./app-7832e5fa.js";import{_ as F}from"./AppLayout-738583a9.js";import{_ as A}from"./TextInput-7116adb4.js";import{_ as K}from"./InputError-2ad3e869.js";import{_ as H}from"./PreviousButton-527c7888.js";import{_ as X}from"./FormSection-8e804497.js";import{_ as q}from"./ActionMessage-040dd520.js";import{_ as Q}from"./PrimaryButton-869bfb81.js";import{_ as G}from"./InputLabel-e166ff1a.js";import{a as J}from"./DialogModal-9ae5b617.js";import"./OnlineStatus-0cf0f402.js";import"./index-54803928.js";import"./DarkmodeToggle-fa6f8a70.js";import"./use-controllable-1740a93e.js";import"./focus-management-61c3c6b5.js";import"./SectionTitle-a442a11b.js";import"./_plugin-vue_export-helper-c27b6911.js";const W={class:"col-span-6 sm:col-span-3"},Y={class:"border-b border-gray-300"},Z={class:"-mb-px flex","aria-label":"Tabs"},ee={class:"border-b border-gray-300"},re={class:"-mb-px flex","aria-label":"Tabs"},se={role:"list",class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},te={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},oe={class:"flex-shrink-0"},ie=["src"],ne={class:"flex-1 min-w-0"},ue=["onClick"],ce=t("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),me={class:"text-sm font-medium text-gray-900"},le={class:"text-sm text-gray-500 truncate"},pe={key:1,class:"focus:outline-none text-left"},be={class:"text-sm font-medium text-gray-500"},_e=t("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),ae={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},fe={class:"flex-shrink-0"},de=["src"],ge={class:"flex-1 min-w-0"},ye=["onClick"],Ne=t("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ke={class:"text-sm font-medium text-gray-900"},xe={class:"text-sm text-gray-500 truncate"},he={key:1,class:"focus:outline-none text-left"},ve={class:"text-sm font-medium text-gray-500"},we=t("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),Re={class:"grid grid-cols-2 justify-between gap-2"},Se=t("div",{class:""}," Produk ",-1),$e={class:"text-right font-medium"},Ce=t("div",{class:""}," No. Tujuan ",-1),Pe={class:"text-right font-medium"},Te=t("div",{class:""}," Harga ",-1),De={class:"text-right font-medium"},Ie=t("div",{class:""}," Detail Produk ",-1),Le={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Me={class:"grid items-center w-full"},Ye={__name:"Index",props:{users:Object,response:void 0,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(T){const i=T;B(()=>{E.reload({only:["response"]})});const m=z({user_id:i.users.id??null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),{...D}=O(()=>j().props.user).value,I=()=>{_.value!=null&&(m.fee=_.value),D.pin?m.post(route("pin.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>w()}):m.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>w()})};function l(e){return(e/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function x(e){if(e.substring(0,4)==="0852"||e.substring(0,4)==="0853"||e.substring(0,4)==="0811"||e.substring(0,4)==="0812"||e.substring(0,4)==="0813"||e.substring(0,4)==="0821"||e.substring(0,4)==="0822"||e.substring(0,4)==="0823"||e.substring(0,4)==="0852")return"TELKOMSEL";if(e.substring(0,4)==="0851")return"by.U";if(e.substring(0,4)==="0815"||e.substring(0,4)==="0857"||e.substring(0,4)==="0856")return"INDOSAT";if(e.substring(0,4)==="0896"||e.substring(0,4)==="0895"||e.substring(0,4)==="0897"||e.substring(0,4)==="0898"||e.substring(0,4)==="0899")return"TRI";if(e.substring(0,4)==="0817"||e.substring(0,4)==="0818"||e.substring(0,4)==="0819"||e.substring(0,4)==="0859"||e.substring(0,4)==="0877"||e.substring(0,4)==="0878")return"XL";if(e.substring(0,4)==="0832"||e.substring(0,4)==="0833"||e.substring(0,4)==="0838")return"AXIS";if(e.substring(0,4)==="0881"||e.substring(0,4)==="0882"||e.substring(0,4)==="0883"||e.substring(0,4)==="0884"||e.substring(0,4)==="0885"||e.substring(0,4)==="0886"||e.substring(0,4)==="0887"||e.substring(0,4)==="0888"||e.substring(0,4)==="0889")return"SMARTFREN"}const v=f(!1);f(null);let R=f(null);f(null);let h=f(null),S=f(null);const _=f(null),$=e=>{m.customer_no!==""&&(v.value=!0,m.sku=e.buyer_sku_code,m.amount=e.price,m.product_name=e.product_name,m.category_id=g.value==="Pulsa"?2:3,e.buyer_sku_code,R=e.product_name,e.brand,Number(e.price)<1e3?_.value=0:Number(e.price)<25e3?_.value=Number(i.fee_25):Number(e.price)<5e4?_.value=Number(i.fee_50):Number(e.price)<75e3?_.value=Number(i.fee_75):Number(e.price)<1e5?_.value=Number(i.fee_100):Number(e.price)<2e5?_.value=Number(i.fee_200):Number(e.price)<5e5?_.value=Number(i.fee_500):Number(e.price)<1e6?_.value=Number(i.fee_1000):_.value=Number(i.fee_max),h=Number(_.value)+Number(e.price),S=e.desc)};function L(e){return e.slice().sort(function(b,r){return b.price-r.price})}const w=()=>{v.value=!1},g=f("Pulsa"),N=f("Umum");return(e,b)=>(s(),V(F,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:a(()=>[y(H)]),default:a(()=>[y(X,{class:"sticky top-0 z-40"},{title:a(()=>[c(" Pulsa ")]),description:a(()=>[c(" * Saldo Rekening Rp "+n(l(e.$page.props.user.wallet_balance)),1)]),form:a(()=>[t("div",W,[y(G,{for:"number",value:"Nomor HP"}),y(A,{id:"number",modelValue:p(m).customer_no,"onUpdate:modelValue":b[0]||(b[0]=r=>p(m).customer_no=r),type:"number",class:"mt-1 block w-full",minlength:"10",required:"",autofocus:""},null,8,["modelValue"]),y(K,{message:p(m).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),C(t("div",Y,[t("nav",Z,[t("button",{class:k(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",g.value=="Pulsa"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[1]||(b[1]=r=>g.value="Pulsa")}," Pulsa ",2),t("button",{class:k(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",g.value=="Data"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[2]||(b[2]=r=>g.value="Data")}," Data ",2)])],512),[[P,p(m).customer_no.length>=4]]),C(t("div",ee,[t("nav",re,[t("button",{class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Umum"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[3]||(b[3]=r=>N.value="Umum")}," Umum ",2),x(p(m).customer_no)=="TELKOMSEL"?(s(),o("button",{key:0,class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Combo Sakti"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[4]||(b[4]=r=>N.value="Combo Sakti")}," Combo Sakti ",2)):d("",!0),x(p(m).customer_no)=="TELKOMSEL"?(s(),o("button",{key:1,class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Internet Sakti"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[5]||(b[5]=r=>N.value="Internet Sakti")}," Internet Sakti ",2)):d("",!0)])],512),[[P,g.value=="Data"&&p(m).customer_no.length>=4]]),t("ul",se,[i.response===void 0?(s(),o(u,{key:0},[],64)):(s(!0),o(u,{key:1},U(L(i.response.data),r=>(s(),o(u,null,[g.value=="Pulsa"?(s(),o(u,{key:0},[r.category=="Pulsa"?(s(),o(u,{key:0},[r.brand==x(p(m).customer_no)?(s(),o("li",te,[t("div",oe,[t("img",{class:"h-10 w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,ie)]),t("div",ne,[Number(r.price)<Number(e.$page.props.digiflazz_saldo)&&r.buyer_product_status&&r.seller_product_status?(s(),o("button",{key:0,onClick:M=>$(r),class:"focus:outline-none text-left"},[ce,t("p",me,n(r.product_name),1),t("p",le,[Number(r.price)<1e3?(s(),o(u,{key:0},[c(" Rp "+n(l(Number(r.price))),1)],64)):Number(r.price)<25e3?(s(),o(u,{key:1},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_25))),1)],64)):Number(r.price)<5e4?(s(),o(u,{key:2},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_50))),1)],64)):Number(r.price)<75e3?(s(),o(u,{key:3},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_75))),1)],64)):Number(r.price)<1e5?(s(),o(u,{key:4},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_100))),1)],64)):Number(r.price)<2e5?(s(),o(u,{key:5},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_200))),1)],64)):Number(r.price)<5e5?(s(),o(u,{key:6},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_500))),1)],64)):Number(r.price)<1e6?(s(),o(u,{key:7},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_1000))),1)],64)):(s(),o(u,{key:8},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_max))),1)],64))])],8,ue)):(s(),o("div",pe,[t("p",be,n(r.product_name),1),_e]))])])):d("",!0)],64)):d("",!0)],64)):d("",!0),g.value=="Data"?(s(),o(u,{key:1},[r.category=="Data"?(s(),o(u,{key:0},[r.brand==x(p(m).customer_no)?(s(),o(u,{key:0},[r.type==N.value?(s(),o("li",ae,[t("div",fe,[t("img",{class:"h-10 w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,de)]),t("div",ge,[Number(r.price)<Number(e.$page.props.digiflazz_saldo)&&r.buyer_product_status?(s(),o("button",{key:0,onClick:M=>$(r),class:"focus:outline-none text-left"},[Ne,t("p",ke,n(r.product_name),1),t("p",xe,[Number(r.price)<1e3?(s(),o(u,{key:0},[c(" Rp "+n(l(Number(r.price))),1)],64)):Number(r.price)<25e3?(s(),o(u,{key:1},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_25))),1)],64)):Number(r.price)<5e4?(s(),o(u,{key:2},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_50))),1)],64)):Number(r.price)<75e3?(s(),o(u,{key:3},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_75))),1)],64)):Number(r.price)<1e5?(s(),o(u,{key:4},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_100))),1)],64)):Number(r.price)<2e5?(s(),o(u,{key:5},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_200))),1)],64)):Number(r.price)<5e5?(s(),o(u,{key:6},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_500))),1)],64)):Number(r.price)<1e6?(s(),o(u,{key:7},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_1000))),1)],64)):(s(),o(u,{key:8},[c(" Rp "+n(l(Number(r.price)+Number(i.fee_max))),1)],64))])],8,ye)):(s(),o("div",he,[t("p",ve,n(r.product_name),1),we]))])])):d("",!0)],64)):d("",!0)],64)):d("",!0)],64)):d("",!0)],64))),256))]),y(J,{show:v.value,onClose:w},{title:a(()=>[c(" Lanjutkan Pembayaran ")]),content:a(()=>[t("div",Re,[Se,t("div",$e,n(p(R)),1),Ce,t("div",Pe,n(p(m).customer_no),1),Te,t("div",De," Rp "+n(l(p(h))),1),Ie]),t("div",Le,n(p(S)),1)]),footer:a(()=>[t("div",Me,[y(q,{on:e.$page.props.user.wallet_balance<=p(h),class:"mr-3"},{default:a(()=>[c(" Saldo anda kurang ")]),_:1},8,["on"]),y(Q,{class:k(["w-full justify-center",{"opacity-25":p(m).processing}]),disabled:p(m).processing||e.$page.props.user.wallet_balance<=p(h),onClick:I},{default:a(()=>[c(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]),_:1}))}};export{Ye as default};
import{q as B,O,T as V,i as z,d as f,c as U,w as a,o as s,b as y,g as m,t as n,a as t,u as p,E as P,G as T,n as k,e as o,f as d,h as j,F as u,Q as F}from"./app.23ae28a0.js";import{_ as A}from"./AppLayout.e049fd64.js";import{_ as K}from"./TextInput.37b06847.js";import{_ as q}from"./InputError.bfad1acc.js";import{_ as H}from"./PreviousButton.2985275c.js";import{_ as X}from"./FormSection.9fc132c8.js";import{_ as G}from"./ActionMessage.3fd43755.js";import{_ as Q}from"./PrimaryButton.df7c769c.js";import{_ as J}from"./InputLabel.9cc6889e.js";import{a as W}from"./DialogModal.fc07df31.js";import"./OnlineStatus.d9f7b284.js";import"./index.3066e2b2.js";import"./DarkmodeToggle.25538166.js";import"./label.030abf97.js";import"./focus-management.6d2a912f.js";import"./SectionTitle.e398e806.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Y={class:"col-span-6 sm:col-span-3"},Z={class:"border-b border-gray-300"},ee={class:"-mb-px flex","aria-label":"Tabs"},re={class:"border-b border-gray-300"},se={class:"-mb-px flex","aria-label":"Tabs"},te={role:"list",class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},oe={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},ie={class:"flex-shrink-0"},ne=["src"],ue={class:"flex-1 min-w-0"},me=["onClick"],ce=t("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),le={class:"text-sm font-medium text-gray-900"},pe={class:"text-sm text-gray-500 truncate"},be={key:1,class:"focus:outline-none text-left"},_e={class:"text-sm font-medium text-gray-500"},ae=t("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),fe={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},de={class:"flex-shrink-0"},ge=["src"],ye={class:"flex-1 min-w-0"},Ne=["onClick"],ke=t("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),xe={class:"text-sm font-medium text-gray-900"},he={class:"text-sm text-gray-500 truncate"},ve={key:1,class:"focus:outline-none text-left"},Re={class:"text-sm font-medium text-gray-500"},we=t("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),Se={class:"grid grid-cols-2 justify-between gap-2"},$e=t("div",{class:""}," Produk ",-1),Ce={class:"text-right font-medium"},Pe=t("div",{class:""}," No. Tujuan ",-1),Te={class:"text-right font-medium"},De=t("div",{class:""}," Harga ",-1),Ie={class:"text-right font-medium"},Ee=t("div",{class:""}," Detail Produk ",-1),Le={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Me={class:"flex items-center"},Ze={__name:"Index",props:{users:Object,response:void 0,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(D){var C;const i=D;B(()=>{O.reload({only:["response"]})});const c=V({user_id:(C=i.users.id)!=null?C:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null}),{...I}=z(()=>F().props.user).value,E=()=>{_.value!=null&&(c.fee=_.value),I.pin?c.post(route("pin.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>R()}):c.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>R()})};function l(e){return(e/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function x(e){if(e.substring(0,4)==="0852"||e.substring(0,4)==="0853"||e.substring(0,4)==="0811"||e.substring(0,4)==="0812"||e.substring(0,4)==="0813"||e.substring(0,4)==="0821"||e.substring(0,4)==="0822"||e.substring(0,4)==="0823"||e.substring(0,4)==="0852")return"TELKOMSEL";if(e.substring(0,4)==="0851")return"by.U";if(e.substring(0,4)==="0815"||e.substring(0,4)==="0857"||e.substring(0,4)==="0856")return"INDOSAT";if(e.substring(0,4)==="0896"||e.substring(0,4)==="0895"||e.substring(0,4)==="0897"||e.substring(0,4)==="0898"||e.substring(0,4)==="0899")return"TRI";if(e.substring(0,4)==="0817"||e.substring(0,4)==="0818"||e.substring(0,4)==="0819"||e.substring(0,4)==="0859"||e.substring(0,4)==="0877"||e.substring(0,4)==="0878")return"XL";if(e.substring(0,4)==="0832"||e.substring(0,4)==="0833"||e.substring(0,4)==="0838")return"AXIS";if(e.substring(0,4)==="0881"||e.substring(0,4)==="0882"||e.substring(0,4)==="0883"||e.substring(0,4)==="0884"||e.substring(0,4)==="0885"||e.substring(0,4)==="0886"||e.substring(0,4)==="0887"||e.substring(0,4)==="0888"||e.substring(0,4)==="0889")return"SMARTFREN"}const v=f(!1);f(null);let w=f(null);f(null);let h=f(null),S=f(null);const _=f(null),$=e=>{c.customer_no!==""&&(v.value=!0,c.sku=e.buyer_sku_code,c.amount=e.price,c.product_name=e.product_name,c.category_id=g.value==="Pulsa"?2:3,e.buyer_sku_code,w=e.product_name,e.brand,Number(e.price)<1e3?_.value=0:Number(e.price)<25e3?_.value=Number(i.fee_25):Number(e.price)<5e4?_.value=Number(i.fee_50):Number(e.price)<75e3?_.value=Number(i.fee_75):Number(e.price)<1e5?_.value=Number(i.fee_100):Number(e.price)<2e5?_.value=Number(i.fee_200):Number(e.price)<5e5?_.value=Number(i.fee_500):Number(e.price)<1e6?_.value=Number(i.fee_1000):_.value=Number(i.fee_max),h=Number(_.value)+Number(e.price),S=e.desc)};function L(e){return e.slice().sort(function(b,r){return b.price-r.price})}const R=()=>{v.value=!1},g=f("Pulsa"),N=f("Umum");return(e,b)=>(s(),U(A,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:a(()=>[y(H)]),default:a(()=>[y(X,{class:"sticky top-0 z-40"},{title:a(()=>[m(" Pulsa ")]),description:a(()=>[m(" * Saldo Rekening Rp "+n(l(e.$page.props.user.wallet_balance)),1)]),form:a(()=>[t("div",Y,[y(J,{for:"number",value:"Nomor HP"}),y(K,{id:"number",modelValue:p(c).customer_no,"onUpdate:modelValue":b[0]||(b[0]=r=>p(c).customer_no=r),type:"number",class:"mt-1 block w-full",minlength:"10",required:"",autofocus:""},null,8,["modelValue"]),y(q,{message:p(c).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),P(t("div",Z,[t("nav",ee,[t("button",{class:k(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",g.value=="Pulsa"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[1]||(b[1]=r=>g.value="Pulsa")}," Pulsa ",2),t("button",{class:k(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",g.value=="Data"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[2]||(b[2]=r=>g.value="Data")}," Data ",2)])],512),[[T,p(c).customer_no.length>=4]]),P(t("div",re,[t("nav",se,[t("button",{class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Umum"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[3]||(b[3]=r=>N.value="Umum")}," Umum ",2),x(p(c).customer_no)=="TELKOMSEL"?(s(),o("button",{key:0,class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Combo Sakti"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[4]||(b[4]=r=>N.value="Combo Sakti")}," Combo Sakti ",2)):d("",!0),x(p(c).customer_no)=="TELKOMSEL"?(s(),o("button",{key:1,class:k(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Internet Sakti"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:b[5]||(b[5]=r=>N.value="Internet Sakti")}," Internet Sakti ",2)):d("",!0)])],512),[[T,g.value=="Data"&&p(c).customer_no.length>=4]]),t("ul",te,[i.response===void 0?(s(),o(u,{key:0},[],64)):(s(!0),o(u,{key:1},j(L(i.response.data),r=>(s(),o(u,null,[g.value=="Pulsa"?(s(),o(u,{key:0},[r.category=="Pulsa"?(s(),o(u,{key:0},[r.brand==x(p(c).customer_no)?(s(),o("li",oe,[t("div",ie,[t("img",{class:"h-10 w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,ne)]),t("div",ue,[Number(r.price)<Number(e.$page.props.digiflazz_saldo)&&r.buyer_product_status?(s(),o("button",{key:0,onClick:M=>$(r),class:"focus:outline-none text-left"},[ce,t("p",le,n(r.product_name),1),t("p",pe,[Number(r.price)<1e3?(s(),o(u,{key:0},[m(" Rp "+n(l(Number(r.price))),1)],64)):Number(r.price)<25e3?(s(),o(u,{key:1},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_25))),1)],64)):Number(r.price)<5e4?(s(),o(u,{key:2},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_50))),1)],64)):Number(r.price)<75e3?(s(),o(u,{key:3},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_75))),1)],64)):Number(r.price)<1e5?(s(),o(u,{key:4},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_100))),1)],64)):Number(r.price)<2e5?(s(),o(u,{key:5},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_200))),1)],64)):Number(r.price)<5e5?(s(),o(u,{key:6},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_500))),1)],64)):Number(r.price)<1e6?(s(),o(u,{key:7},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_1000))),1)],64)):(s(),o(u,{key:8},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_max))),1)],64))])],8,me)):(s(),o("div",be,[t("p",_e,n(r.product_name),1),ae]))])])):d("",!0)],64)):d("",!0)],64)):d("",!0),g.value=="Data"?(s(),o(u,{key:1},[r.category=="Data"?(s(),o(u,{key:0},[r.brand==x(p(c).customer_no)?(s(),o(u,{key:0},[r.type==N.value?(s(),o("li",fe,[t("div",de,[t("img",{class:"h-10 w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,ge)]),t("div",ye,[Number(r.price)<Number(e.$page.props.digiflazz_saldo)&&r.buyer_product_status?(s(),o("button",{key:0,onClick:M=>$(r),class:"focus:outline-none text-left"},[ke,t("p",xe,n(r.product_name),1),t("p",he,[Number(r.price)<1e3?(s(),o(u,{key:0},[m(" Rp "+n(l(Number(r.price))),1)],64)):Number(r.price)<25e3?(s(),o(u,{key:1},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_25))),1)],64)):Number(r.price)<5e4?(s(),o(u,{key:2},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_50))),1)],64)):Number(r.price)<75e3?(s(),o(u,{key:3},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_75))),1)],64)):Number(r.price)<1e5?(s(),o(u,{key:4},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_100))),1)],64)):Number(r.price)<2e5?(s(),o(u,{key:5},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_200))),1)],64)):Number(r.price)<5e5?(s(),o(u,{key:6},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_500))),1)],64)):Number(r.price)<1e6?(s(),o(u,{key:7},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_1000))),1)],64)):(s(),o(u,{key:8},[m(" Rp "+n(l(Number(r.price)+Number(i.fee_max))),1)],64))])],8,Ne)):(s(),o("div",ve,[t("p",Re,n(r.product_name),1),we]))])])):d("",!0)],64)):d("",!0)],64)):d("",!0)],64)):d("",!0)],64))),256))]),y(W,{show:v.value,onClose:R},{title:a(()=>[m(" Lanjutkan Pembayaran ")]),content:a(()=>[t("div",Se,[$e,t("div",Ce,n(p(w)),1),Pe,t("div",Te,n(p(c).customer_no),1),De,t("div",Ie," Rp "+n(l(p(h))),1),Ee]),t("div",Le,n(p(S)),1)]),footer:a(()=>[t("div",Me,[y(G,{on:e.$page.props.user.wallet_balance<=p(h),class:"mr-3"},{default:a(()=>[m(" Saldo anda kurang ")]),_:1},8,["on"]),y(Q,{class:k({"opacity-25":p(c).processing}),disabled:p(c).processing||e.$page.props.user.wallet_balance<=p(h),onClick:E},{default:a(()=>[m(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]),_:1}))}};export{Ze as default};

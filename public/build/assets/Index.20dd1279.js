import{_ as v}from"./AppLayout.1240112f.js";import{v as A,d,A as I,c as O,w as n,o as l,b as c,g as b,t as u,a as s,u as o,n as x,e as a,h as F,F as p,f as _}from"./app.15519ff4.js";import{_ as C}from"./TextInput.4f674d6b.js";import{_ as D}from"./InputError.06e3bdf6.js";import{_ as X}from"./PreviousButton.6963399c.js";import{_ as B}from"./FormSection.b22dc446.js";import{_ as K}from"./ActionMessage.8d75553d.js";import{_ as V}from"./PrimaryButton.9b5689d0.js";import{_ as j}from"./InputLabel.6715d4da.js";import{a as H}from"./DialogModal.9bdd1e60.js";import"./helper.81627037.js";import"./DarkmodeToggle.08fc6705.js";import"./label.263ef636.js";import"./focus-management.a8819d64.js";import"./SectionTitle.a5f1ebb4.js";import"./_plugin-vue_export-helper.cdc0426e.js";const J={class:"col-span-6 sm:col-span-3"},U={class:"border-b border-gray-200"},q={class:"-mb-px flex","aria-label":"Tabs"},z={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},G={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},Q={class:"flex-shrink-0"},W=["src"],Y={class:"flex-1 min-w-0"},Z=["onClick"],ee=s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),se={class:"text-sm font-medium text-gray-900"},re={class:"text-sm text-gray-500 truncate"},te={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},oe={class:"flex-shrink-0"},ne=["src"],ie={class:"flex-1 min-w-0"},le=["onClick"],ue=s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ce={class:"text-sm font-medium text-gray-900"},ae={class:"text-sm text-gray-500 truncate"},me={class:"grid grid-cols-2 justify-between gap-2"},de=s("div",{class:""}," Produk ",-1),pe={class:"text-right font-medium"},_e=s("div",{class:""}," No. Tujuan ",-1),fe={class:"text-right font-medium"},be=s("div",{class:""}," Harga ",-1),ge={class:"text-right font-medium"},he=s("div",{class:""}," Detail Produk ",-1),ye={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Fe={__name:"Index",props:{users:Object,response:Object,fee:Number},setup(L){var T,E;const f=L,t=A({user_id:(T=f.users.id)!=null?T:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),M=()=>{t.post(route("product.topup",t),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>N()})};function g(e){return(e/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function k(e){if(e.substring(0,4)==="0852")return"TELKOMSEL";if(e.substring(0,4)==="0853")return"TELKOMSEL";if(e.substring(0,4)==="0811")return"TELKOMSEL";if(e.substring(0,4)==="0812")return"TELKOMSEL";if(e.substring(0,4)==="0813")return"TELKOMSEL";if(e.substring(0,4)==="0821")return"TELKOMSEL";if(e.substring(0,4)==="0852")return"TELKOMSEL";if(e.substring(0,4)==="0851")return"by.U";if(e.substring(0,4)==="0857")return"INDOSAT";if(e.substring(0,4)==="0856")return"INDOSAT";if(e.substring(0,4)==="0896")return"TRI";if(e.substring(0,4)==="0895")return"TRI";if(e.substring(0,4)==="0897")return"TRI";if(e.substring(0,4)==="0898")return"TRI";if(e.substring(0,4)==="0899")return"TRI";if(e.substring(0,4)==="0817")return"XL";if(e.substring(0,4)==="0818")return"XL";if(e.substring(0,4)==="0819")return"XL";if(e.substring(0,4)==="0859")return"XL";if(e.substring(0,4)==="0877")return"XL";if(e.substring(0,4)==="0878")return"XL";if(e.substring(0,4)==="0832")return"AXIS";if(e.substring(0,4)==="0833")return"AXIS";if(e.substring(0,4)==="0838")return"AXIS";if(e.substring(0,4)==="0881")return"SMARTFREN";if(e.substring(0,4)==="0882")return"SMARTFREN";if(e.substring(0,4)==="0883")return"SMARTFREN";if(e.substring(0,4)==="0884")return"SMARTFREN";if(e.substring(0,4)==="0885")return"SMARTFREN";if(e.substring(0,4)==="0886")return"SMARTFREN";if(e.substring(0,4)==="0887")return"SMARTFREN";if(e.substring(0,4)==="0888")return"SMARTFREN";if(e.substring(0,4)==="0889")return"SMARTFREN"}const y=d(!1);d(null);let S=d(null);d(null);let h=d(null),R=d(null);const w=e=>{t.customer_no!==""&&(y.value=!0,t.sku=e.buyer_sku_code,t.amount=e.price,t.product_name=e.product_name,t.category_id=2,e.buyer_sku_code,S=e.product_name,e.brand,h=Number(e.price)+Number(f.fee/100*e.price),R=e.desc)};function P(e){return e.slice().sort(function(i,r){return i.price-r.price})}const N=()=>{y.value=!1},m=d((E=JSON.parse(localStorage.getItem("tabPulsa")))!=null?E:"Pulsa");return I(m,e=>{console.log(`tab is ${e}`),localStorage.setItem("tabPulsa",JSON.stringify(e))}),(e,i)=>(l(),O(v,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:n(()=>[c(X)]),default:n(()=>[c(B,null,{title:n(()=>[b(" Masukkan nomor HP ")]),description:n(()=>[b(" * Saldo Rekening Rp "+u(g(e.$page.props.user.wallet_balance)),1)]),form:n(()=>[s("div",J,[c(j,{for:"number",value:"Nomor HP"}),c(C,{id:"number",modelValue:o(t).customer_no,"onUpdate:modelValue":i[0]||(i[0]=r=>o(t).customer_no=r),type:"tel",class:"mt-1 block w-full",minlength:"10",required:""},null,8,["modelValue"]),c(D,{message:o(t).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),s("div",U,[s("nav",q,[s("button",{class:x(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",m.value=="Pulsa"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:border-gray-300"]),onClick:i[1]||(i[1]=r=>m.value="Pulsa")}," Pulsa ",2),s("button",{class:x(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",m.value=="Data"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:border-gray-300 "]),onClick:i[2]||(i[2]=r=>m.value="Data")}," Data ",2)])]),s("div",z,[(l(!0),a(p,null,F(P(f.response.data),r=>(l(),a(p,null,[m.value=="Pulsa"?(l(),a(p,{key:0},[r.category=="Pulsa"?(l(),a(p,{key:0},[r.brand==k(o(t).customer_no)?(l(),a("div",G,[s("div",Q,[s("img",{class:"h-10 w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,W)]),s("div",Y,[s("button",{onClick:$=>w(r),class:"focus:outline-none text-left"},[ee,s("p",se,u(r.product_name),1),s("p",re,"Rp "+u(g(Number(r.price)+Number(f.fee/100*r.price))),1)],8,Z)])])):_("",!0)],64)):_("",!0)],64)):_("",!0),m.value=="Data"?(l(),a(p,{key:1},[r.category=="Data"?(l(),a(p,{key:0},[r.brand==k(o(t).customer_no)?(l(),a("div",te,[s("div",oe,[s("img",{class:"h-10 w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,ne)]),s("div",ie,[s("button",{onClick:$=>w(r),class:"focus:outline-none text-left"},[ue,s("p",ce,u(r.product_name),1),s("p",ae,"Rp "+u(g(Number(r.price)+Number(f.fee/100*r.price))),1)],8,le)])])):_("",!0)],64)):_("",!0)],64)):_("",!0)],64))),256))]),c(H,{show:y.value,onClose:N},{title:n(()=>[b(" Lanjutkan Pembayaran ")]),content:n(()=>[s("div",me,[de,s("div",pe,u(o(S)),1),_e,s("div",fe,u(o(t).customer_no),1),be,s("div",ge," Rp "+u(g(o(h))),1),he]),s("div",ye,u(o(R)),1)]),footer:n(()=>[c(K,{on:e.$page.props.user.wallet_balance<=o(h),class:"mr-3"},{default:n(()=>[b(" Saldo anda kurang ")]),_:1},8,["on"]),c(V,{class:x(["ml-3",{"opacity-25":o(t).processing}]),disabled:o(t).processing||e.$page.props.user.wallet_balance<=o(h),onClick:M},{default:n(()=>[b(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{Fe as default};

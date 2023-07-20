import{_ as C}from"./AppLayout.ad686c56.js";import{v as L,d as a,c as M,w as o,o as c,b as i,g as u,a as s,u as t,e as d,h as N,F as g,t as l,n as V,f as y}from"./app.f21b3bb0.js";import{_ as S}from"./TextInput.e5f18755.js";import{_ as j}from"./InputError.e38a83f1.js";import{_ as E}from"./PreviousButton.18152b16.js";import{_ as F}from"./FormSection.4094ddd8.js";import{_ as H}from"./PrimaryButton.20f5a679.js";import{_ as O}from"./InputLabel.d9888778.js";import{a as T}from"./DialogModal.23365c71.js";import{_ as D}from"./SecondaryButton.3fe1ddd4.js";import"./DarkmodeToggle.0006a3ed.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.28f3bcc8.js";const I={class:"col-span-6 sm:col-span-3"},K={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},R={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},U={class:"flex-shrink-0"},q=["src"],z={class:"flex-1 min-w-0"},X=["onClick"],A=s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),G={class:"text-sm font-medium text-gray-900"},J={class:"text-sm text-gray-500 truncate"},Q={class:"grid grid-cols-2 justify-between gap-2"},W=s("div",{class:""}," Produk ",-1),Y={class:"text-right font-medium"},Z=s("div",{class:""}," No. Tujuan ",-1),ss={class:"text-right font-medium"},es=s("div",{class:""}," Harga ",-1),os={class:"text-right font-medium"},ts=s("div",{class:""}," Detail Produk ",-1),rs={class:"border border-gray-300 rounded-3xl p-2 mt-2"},vs={__name:"Index",props:{users:Object,response:Object},setup(w){var x;const m=w,r=L({id:(x=m.users.id)!=null?x:null,number:"",sku:""}),P=()=>{r.post(route("deposit.create",m.users),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>f(),onFinish:()=>r.reset()})};function h(e){return(e/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function $(e){if(e.substring(0,4)==="0822")return"TELKOMSEL";if(e.substring(0,4)==="0813")return"TELKOMSEL";if(e.substring(0,4)==="0851")return"by.U";if(e.substring(0,4)==="0877")return"XL"}const _=a(!1);a(null);let b=a(null);a(null);let v=a(null),k=a(null);const B=e=>{_.value=!0,e.buyer_sku_code,b=e.product_name,e.brand,v=e.price,k=e.desc},f=()=>{_.value=!1};return(e,p)=>(c(),M(C,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:o(()=>[i(E,{href:e.route("dashboard")},null,8,["href"])]),default:o(()=>[i(F,null,{title:o(()=>[u(" Masukkan nomor HP ")]),description:o(()=>[u(" Halo halo bandung. ")]),form:o(()=>[s("div",I,[i(O,{for:"number",value:"Nomor HP"}),i(S,{id:"number",modelValue:t(r).number,"onUpdate:modelValue":p[0]||(p[0]=n=>t(r).number=n),type:"tel",class:"mt-1 block w-full",minlength:"10",required:""},null,8,["modelValue"]),i(j,{message:t(r).errors.number,class:"mt-2"},null,8,["message"])])]),_:1}),s("div",K,[(c(!0),d(g,null,N(m.response.data,n=>(c(),d(g,null,[n.category=="Pulsa"?(c(),d(g,{key:0},[n.brand==$(t(r).number)?(c(),d("div",R,[s("div",U,[s("img",{class:"h-10 w-10",src:"/img/vendor/"+n.brand+".svg",alt:""},null,8,q)]),s("div",z,[s("button",{onClick:ns=>B(n),class:"focus:outline-none text-left"},[A,s("p",G,l(n.product_name),1),s("p",J,"Rp "+l(h(n.price)),1)],8,X)])])):y("",!0)],64)):y("",!0)],64))),256))]),i(T,{show:_.value,onClose:f},{title:o(()=>[u(" Lanjutkan Pembayaran ")]),content:o(()=>[s("div",Q,[W,s("div",Y,l(t(b)),1),Z,s("div",ss,l(t(r).number),1),es,s("div",os," Rp "+l(h(t(v))),1),ts]),s("div",rs,l(t(k)),1)]),footer:o(()=>[i(D,{onClick:f},{default:o(()=>[u(" Batal ")]),_:1}),i(H,{class:V(["ml-3",{"opacity-25":t(r).processing}]),disabled:t(r).processing,onClick:P},{default:o(()=>[u(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{vs as default};

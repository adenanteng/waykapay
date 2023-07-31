import{_ as E}from"./AppLayout.95c7edf3.js";import{v as M,d,c as D,w as n,o as i,b as l,g as b,t as a,a as e,u as o,n as v,e as c,h as B,F as _,f as p}from"./app.150ba72e.js";import{_ as T}from"./TextInput.fc8ecc9c.js";import{_ as V}from"./InputError.4144e3db.js";import{_ as O}from"./PreviousButton.9f6a2009.js";import{_ as j}from"./FormSection.ae0919be.js";import{_ as R}from"./ActionMessage.90fd8848.js";import{_ as I}from"./PrimaryButton.dfdcec5d.js";import{_ as K}from"./InputLabel.9ce06099.js";import{a as F}from"./DialogModal.cde105cb.js";import"./DarkmodeToggle.62c4eb22.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.8d67c664.js";import"./label.4eea10f2.js";import"./focus-management.92b82707.js";import"./SectionTitle.8e4fc72d.js";const H={class:"col-span-6 sm:col-span-3"},U={class:"border-b border-gray-200"},q={class:"-mb-px flex","aria-label":"Tabs"},z={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},X={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},A={class:"flex-shrink-0"},G=["src"],J={class:"flex-1 min-w-0"},Q=["onClick"],W=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),Y={class:"text-sm font-medium text-gray-900"},Z={class:"text-sm text-gray-500 truncate"},ee={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},se={class:"flex-shrink-0"},te=["src"],re={class:"flex-1 min-w-0"},oe=["onClick"],ne=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ie={class:"text-sm font-medium text-gray-900"},ae={class:"text-sm text-gray-500 truncate"},le={class:"grid grid-cols-2 justify-between gap-2"},ce=e("div",{class:""}," Produk ",-1),ue={class:"text-right font-medium"},de=e("div",{class:""}," No. Tujuan ",-1),me={class:"text-right font-medium"},_e=e("div",{class:""}," Harga ",-1),pe={class:"text-right font-medium"},fe=e("div",{class:""}," Detail Produk ",-1),be={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Be={__name:"Index",props:{users:Object,response:Object,fee:Number},setup(L){var C;const f=L,r=M({user_id:(C=f.users.id)!=null?C:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),N=()=>{r.post(route("product.topup",r),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>P()})};function g(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function x(s){if(s.substring(0,4)==="0822")return"TELKOMSEL";if(s.substring(0,4)==="0813")return"TELKOMSEL";if(s.substring(0,4)==="0823")return"TELKOMSEL";if(s.substring(0,4)==="0852")return"TELKOMSEL";if(s.substring(0,4)==="0851")return"by.U";if(s.substring(0,4)==="0877")return"XL"}const y=d(!1);d(null);let k=d(null);d(null);let h=d(null),w=d(null);const $=s=>{r.customer_no!==""&&(y.value=!0,r.sku=s.buyer_sku_code,r.amount=s.price,r.product_name=s.product_name,r.category_id=2,s.buyer_sku_code,k=s.product_name,s.brand,h=Number(s.price)+f.fee,w=s.desc)},P=()=>{y.value=!1},m=d("Pulsa");return(s,u)=>(i(),D(E,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:n(()=>[l(O,{href:s.route("dashboard")},null,8,["href"])]),default:n(()=>[l(j,null,{title:n(()=>[b(" Masukkan nomor HP ")]),description:n(()=>[b(" * Saldo Rekening Rp "+a(g(s.$page.props.user.wallet_balance)),1)]),form:n(()=>[e("div",H,[l(K,{for:"number",value:"Nomor HP"}),l(T,{id:"number",modelValue:o(r).customer_no,"onUpdate:modelValue":u[0]||(u[0]=t=>o(r).customer_no=t),type:"tel",class:"mt-1 block w-full",minlength:"10",required:""},null,8,["modelValue"]),l(V,{message:o(r).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),e("div",U,[e("nav",q,[e("button",{class:v(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",m.value=="Pulsa"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:border-gray-300"]),onClick:u[1]||(u[1]=t=>m.value="Pulsa")}," Pulsa ",2),e("button",{class:v(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",m.value=="Data"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:border-gray-300 "]),onClick:u[2]||(u[2]=t=>m.value="Data")}," Data ",2)])]),e("div",z,[(i(!0),c(_,null,B(f.response.data,t=>(i(),c(_,null,[m.value=="Pulsa"?(i(),c(_,{key:0},[t.category=="Pulsa"?(i(),c(_,{key:0},[t.brand==x(o(r).customer_no)?(i(),c("div",X,[e("div",A,[e("img",{class:"h-10 w-10",src:"/img/vendor/"+t.brand+".svg",alt:""},null,8,G)]),e("div",J,[e("button",{onClick:S=>$(t),class:"focus:outline-none text-left"},[W,e("p",Y,a(t.product_name),1),e("p",Z,"Rp "+a(g(parseInt(t.price)+f.fee)),1)],8,Q)])])):p("",!0)],64)):p("",!0)],64)):p("",!0),m.value=="Data"?(i(),c(_,{key:1},[t.category=="Data"?(i(),c(_,{key:0},[t.brand==x(o(r).customer_no)?(i(),c("div",ee,[e("div",se,[e("img",{class:"h-10 w-10",src:"/img/vendor/"+t.brand+".svg",alt:""},null,8,te)]),e("div",re,[e("button",{onClick:S=>$(t),class:"focus:outline-none text-left"},[ne,e("p",ie,a(t.product_name),1),e("p",ae,"Rp "+a(g(Number(t.price)+f.fee)),1)],8,oe)])])):p("",!0)],64)):p("",!0)],64)):p("",!0)],64))),256))]),l(F,{show:y.value,onClose:P},{title:n(()=>[b(" Lanjutkan Pembayaran ")]),content:n(()=>[e("div",le,[ce,e("div",ue,a(o(k)),1),de,e("div",me,a(o(r).customer_no),1),_e,e("div",pe," Rp "+a(g(o(h))),1),fe]),e("div",be,a(o(w)),1)]),footer:n(()=>[l(R,{on:s.$page.props.user.wallet_balance<=o(h),class:"mr-3"},{default:n(()=>[b(" Saldo anda kurang ")]),_:1},8,["on"]),l(I,{class:v(["ml-3",{"opacity-25":o(r).processing}]),disabled:o(r).processing||s.$page.props.user.wallet_balance<=o(h),onClick:N},{default:n(()=>[b(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{Be as default};

import{_ as $}from"./AppLayout.f28e996c.js";import{v as C,d as i,c as j,w as t,o as m,b as n,g as d,t as r,a as e,e as f,h as B,F as k,u as c,n as S,f as M}from"./app.e757f2aa.js";import{_ as L}from"./PreviousButton.6ecfafe3.js";import{_ as R}from"./FormSection.e288e114.js";import{_ as T}from"./ActionMessage.818d8639.js";import{_ as V}from"./PrimaryButton.f956e511.js";import{_ as g}from"./InputLabel.14d1a52f.js";import{a as D}from"./DialogModal.36374ad3.js";import"./DarkmodeToggle.0dbdf0b3.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.2aadabf3.js";import"./label.626210ea.js";import"./focus-management.14d6d262.js";import"./SectionTitle.e7ba7ed1.js";const F={class:"col-span-6 sm:col-span-3"},O={class:"font-semibold text-gray-900"},E={class:"col-span-6 sm:col-span-3"},I={class:"font-semibold text-gray-900"},z={class:"col-span-6 sm:col-span-3"},H={class:"font-semibold text-gray-900"},q={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},A={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},G={class:"flex-shrink-0"},J=["src"],K={class:"flex-1 min-w-0"},Q=["onClick"],U=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),W={class:"text-sm font-medium text-gray-900"},X={class:"text-sm text-gray-500 truncate"},Y={class:"grid grid-cols-2 justify-between gap-2"},Z=e("div",{class:""}," Produk ",-1),ee={class:"text-right font-medium"},se=e("div",{class:""}," No. Tujuan ",-1),oe={class:"text-right font-medium"},te=e("div",{class:""}," Harga ",-1),re={class:"text-right font-medium"},ae=e("div",{class:""}," Detail Produk ",-1),ne={class:"border border-gray-300 rounded-3xl p-2 mt-2"},xe={__name:"CreateEdit",props:{users:Object,response:Object,customer:Object,fee:Number},setup(x){var y;const a=x,o=C({user_id:(y=a.users.id)!=null?y:null,customer_no:a.customer.data.customer_no,product_name:"",sku:"",amount:"",category_id:""}),w=()=>{o.post(route("product.topup",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>v()})};function _(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const p=i(!1);i(null);let h=i(null);i(null);let u=i(null),b=i(null);const N=s=>{o.customer_no!==""&&(p.value=!0,o.sku=s.buyer_sku_code,o.amount=s.price,o.product_name=s.product_name,o.category_id=5,s.buyer_sku_code,h=s.product_name,s.brand,u=Number(s.price)+Number(a.fee),b=s.desc)},v=()=>{p.value=!1};return i("Pulsa"),(s,P)=>(m(),j($,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:t(()=>[n(L,{href:s.route("product.pln")},null,8,["href"])]),default:t(()=>[n(R,null,{title:t(()=>[d(" Token PLN ")]),description:t(()=>[d(" * Saldo Rekening Rp "+r(_(s.$page.props.user.wallet_balance)),1)]),form:t(()=>[e("div",F,[n(g,{for:"number",value:"No. Tujuan"}),e("div",O,r(a.customer.data.customer_no),1)]),e("div",E,[n(g,{for:"number",value:"Nama Pelanggan"}),e("div",I,r(a.customer.data.name),1)]),e("div",z,[n(g,{for:"number",value:"Stand Meter"}),e("div",H,r(a.customer.data.segment_power),1)])]),_:1}),e("div",q,[(m(!0),f(k,null,B(a.response.data,l=>(m(),f(k,null,[l.category=="PLN"?(m(),f("div",A,[e("div",G,[e("img",{class:"h-10 w-10",src:"/img/vendor/"+l.brand+".svg",alt:""},null,8,J)]),e("div",K,[e("button",{onClick:ce=>N(l),class:"focus:outline-none text-left"},[U,e("p",W,r(l.product_name),1),e("p",X,"Rp "+r(_(Number(l.price)+Number(a.fee))),1)],8,Q)])])):M("",!0)],64))),256))]),n(D,{show:p.value,onClose:v},{title:t(()=>[d(" Lanjutkan Pembayaran ")]),content:t(()=>[e("div",Y,[Z,e("div",ee,r(c(h)),1),se,e("div",oe,r(c(o).customer_no),1),te,e("div",re," Rp "+r(_(c(u))),1),ae]),e("div",ne,r(c(b)),1)]),footer:t(()=>[n(T,{on:s.$page.props.user.wallet_balance<=c(u),class:"mr-3"},{default:t(()=>[d(" Saldo anda kurang ")]),_:1},8,["on"]),n(V,{class:S(["ml-3",{"opacity-25":c(o).processing}]),disabled:c(o).processing||s.$page.props.user.wallet_balance<=c(u),onClick:w},{default:t(()=>[d(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{xe as default};

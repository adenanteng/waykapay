import{_ as S}from"./AppLayout.1240112f.js";import{v as B,d as c,c as C,w as n,o as u,b as i,g as m,t as a,a as e,u as r,e as p,h as I,F as h,n as P,f as x}from"./app.15519ff4.js";import{_ as K}from"./TextInput.4f674d6b.js";import{_ as O}from"./InputError.06e3bdf6.js";import{_ as j}from"./PreviousButton.6963399c.js";import{_ as D}from"./FormSection.b22dc446.js";import{_ as L}from"./ActionMessage.8d75553d.js";import{_ as R}from"./PrimaryButton.9b5689d0.js";import{_ as F}from"./InputLabel.6715d4da.js";import{a as M}from"./DialogModal.9bdd1e60.js";import"./helper.81627037.js";import"./DarkmodeToggle.08fc6705.js";import"./label.263ef636.js";import"./focus-management.a8819d64.js";import"./SectionTitle.a5f1ebb4.js";import"./_plugin-vue_export-helper.cdc0426e.js";const T={class:"col-span-6 sm:col-span-3"},q={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},z={key:0,class:"relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50"},E=e("div",{class:"flex-shrink-0"},[e("img",{class:"h-auto w-10",src:"/img/vendor/K-VISION.png",alt:""})],-1),G={class:"flex-1 min-w-0"},H=["onClick"],U=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),A={class:"text-sm font-medium text-gray-900"},J={class:"text-sm text-gray-500 truncate"},Q={class:"grid grid-cols-2 justify-between gap-2"},W=e("div",{class:""}," Produk ",-1),X={class:"text-right font-medium"},Y=e("div",{class:""}," Id Player ",-1),Z={class:"text-right font-medium"},ee=e("div",{class:""}," Harga ",-1),se={class:"text-right font-medium"},oe=e("div",{class:""}," Detail Produk ",-1),re={class:"border border-gray-300 rounded-3xl p-2 mt-2"},ke={__name:"Kvision",props:{users:Object,response:Object,fee:Number},setup(w){var k;const d=w,o=B({user_id:(k=d.users.id)!=null?k:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:""}),N=()=>{o.post(route("product.topup",o),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>y()})};function f(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const g=c(!1);c(null);let b=c(null);c(null);let _=c(null),v=c(null);const $=s=>{o.customer_no!==""&&(g.value=!0,o.sku=s.buyer_sku_code,o.amount=s.price,o.product_name=s.product_name,o.category_id=6,s.buyer_sku_code,b=s.product_name,s.brand,_=Number(s.price)+Number(d.fee/100*s.price),v=s.desc)};function V(s){return s.slice().sort(function(l,t){return l.price-t.price})}const y=()=>{g.value=!1};return(s,l)=>(u(),C(S,{title:"K-Vision",name:"K-Vision",desc:"Lorem ipsum"},{previous:n(()=>[i(j)]),default:n(()=>[i(D,null,{title:n(()=>[m(" Dana ")]),description:n(()=>[m(" * Saldo Rekening Rp "+a(f(s.$page.props.user.wallet_balance)),1)]),form:n(()=>[e("div",T,[i(F,{for:"number",value:"Nomor Pelanggan"}),i(K,{id:"number",modelValue:r(o).customer_no,"onUpdate:modelValue":l[0]||(l[0]=t=>r(o).customer_no=t),type:"tel",class:"mt-1 block w-full",minlength:"8",required:""},null,8,["modelValue"]),i(O,{message:r(o).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),e("div",q,[(u(!0),p(h,null,I(V(d.response.data),t=>(u(),p(h,null,[t.category=="TV"?(u(),p(h,{key:0},[t.brand=="K-VISION dan GOL"?(u(),p("div",z,[E,e("div",G,[e("button",{onClick:te=>$(t),class:"focus:outline-none text-left"},[U,e("p",A,a(t.product_name),1),e("p",J,"Rp "+a(f(Number(t.price)+Number(d.fee/100*t.price))),1)],8,H)])])):x("",!0)],64)):x("",!0)],64))),256))]),i(M,{show:g.value,onClose:y},{title:n(()=>[m(" Lanjutkan Pembayaran ")]),content:n(()=>[e("div",Q,[W,e("div",X,a(r(b)),1),Y,e("div",Z,a(r(o).customer_no),1),ee,e("div",se," Rp "+a(f(r(_))),1),oe]),e("div",re,a(r(v)),1)]),footer:n(()=>[i(L,{on:s.$page.props.user.wallet_balance<=r(_),class:"mr-3"},{default:n(()=>[m(" Saldo anda kurang ")]),_:1},8,["on"]),i(R,{class:P({"opacity-25":r(o).processing}),disabled:r(o).processing||s.$page.props.user.wallet_balance<=r(_),onClick:N},{default:n(()=>[m(" Beli ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{ke as default};

import{_ as b}from"./AppLayout.07f189c3.js";import{v as k,c as h,w as a,o as s,b as o,g as n,a as t,t as c,e as i,u as l,S as y,F as m,f as _,U as g}from"./app.95edcb59.js";import{_ as v}from"./PrimaryButton.51c6f363.js";import{_ as w}from"./PreviousButton.6ffe7e92.js";import{_ as B}from"./FormSection.ad729877.js";import{e as S}from"./popper.esm.758565df.js";import"./moment.b7d9fed5.js";import"./Banner.8a741325.js";import"./DarkmodeToggle.65022e3c.js";import"./helper.e9fc3b37.js";import"./label.04e5b9a3.js";import"./focus-management.e1a1c033.js";import"./SectionTitle.3ec3116c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C={class:"col-span-6 sm:col-span-3"},N={class:"tracking-tight"},V=t("span",{class:"block text-sm font-medium text-gray-600 mt-5"}," Total Pembayaran ",-1),$={class:"block text-xl font-extrabold text-primary-600"},j=t("span",{class:"block text-sm font-medium text-gray-600 mt-5"}," Bank ",-1),D={class:"block text-xl font-extrabold text-primary-600 uppercase"},F=t("span",{class:"block text-sm font-medium text-gray-600 mt-5"}," No. Virtual Account ",-1),K={class:"block text-xl font-extrabold text-primary-600 uppercase"},O=t("i",{class:"fa-duotone fa-paste ml-2"},null,-1),P=[O],R=t("span",{class:"block text-sm font-medium text-gray-600 mt-5"}," Redirect ",-1),q={class:"block text-xl font-extrabold text-primary-600 uppercase"},I=["href"],T=t("span",{class:"block text-sm font-medium text-gray-600 mt-5"}," Qr Code ",-1),A={class:"block text-xl font-extrabold text-primary-600 uppercase"},E=t("span",{class:"block text-sm font-medium text-gray-600 mt-5"}," Redirect ",-1),L={class:"block text-xl font-extrabold text-primary-600 uppercase"},Q=["href"],rt={__name:"Confirm",props:{transaction:Object,virtual_account:Object|String,wallet_account:Object|String},setup(d){const e=d,p=k({transaction:e.transaction}),f=()=>{p.put(route("deposit.confirm",p),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{}})};function x(u){return(u/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(u,r)=>(s(),h(b,{title:"Konfirmasi Deposit",name:"Konfirmasi Deposit",desc:"Lorem ipsum dolor sit amet"},{previous:a(()=>[o(w)]),default:a(()=>[o(B,null,{title:a(()=>[n(" Pembayaran ")]),description:a(()=>[]),form:a(()=>[t("div",C,[t("h2",N,[V,t("span",$," Rp "+c(x(e.transaction.gross_amount)),1),e.virtual_account?(s(),i(m,{key:0},[j,t("span",D,c(e.virtual_account.bank),1),F,t("span",K,[n(c(e.virtual_account.va_number)+" ",1),o(l(S),{class:"text-sm text-gray-900 font-normal lowercase",content:"Sukses copy",arrow:"",placement:"right-end"},{default:a(()=>[t("button",{class:"",onClick:r[0]||(r[0]=U=>l(y)(e.virtual_account.va_number))},P)]),_:1})]),R,t("span",q,[t("a",{target:"_blank",href:e.virtual_account.payment_url},"Bayar",8,I)])],64)):_("",!0),e.wallet_account?(s(),i(m,{key:1},[e.wallet_account.qr_code!=="-"?(s(),i(m,{key:0},[T,t("span",A,[o(l(g),{value:e.wallet_account.qr_code,tag:"svg",options:{width:200,color:{dark:"#000",light:"#fff"}}},null,8,["value"])])],64)):_("",!0),E,t("span",L,[t("a",{target:"_blank",href:e.wallet_account.payment_url},"Bayar",8,Q)])],64)):_("",!0)])])]),actions:a(()=>[o(v,{onClick:f},{default:a(()=>[n(" Kembali ke Beranda ")]),_:1})]),_:1})]),_:1}))}};export{rt as default};
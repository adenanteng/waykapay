import{_}from"./AppLayout.7cd6e4c1.js";import{d as g,v as h,J as b,i as x,c as y,w as s,o as k,b as a,g as r,a as n,t as c,u as i,n as S}from"./app.70ec5318.js";import{_ as v}from"./PrimaryButton.3ac0663e.js";import{_ as B}from"./PreviousButton.e847ad9c.js";import{_ as w}from"./ActionMessage.9c2784f7.js";import{_ as $}from"./FormSection.e787922f.js";import"./DarkmodeToggle.efe73e65.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.6afa7dc3.js";const D={class:"col-span-6 sm:col-span-3"},P={class:"tracking-tight"},j=n("span",{class:"block text-sm font-medium text-gray-600"}," Jumlah Pembayaran ",-1),C={class:"block text-xl font-extrabold text-primary-600"},K={class:"block text-sm font-medium text-gray-600"},T={__name:"Show",props:{users:Object,history:Object,response:Object,amount:String},setup(l){const e=l;g(null);const t=h({id:e.users.id,amount:e.amount}),p=b();x(()=>p.props.response);const m=()=>{t.post(route("deposit.show",t),{preserveScroll:!0,onSuccess:()=>{}})};function u(o){return(o/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const d=()=>{snap.pay(e.response.token,{onSuccess:function(o){console.log("success"),console.log(o),m()},onPending:function(o){console.log("pending"),console.log(o)},onError:function(o){console.log("error"),console.log(o)},onClose:function(){console.log("customer closed the popup without finishing the payment")}})};return(o,f)=>(k(),y(_,{title:"Konfirmasi Deposit",name:"Konfirmasi Deposit",desc:"Lorem ipsum dolor sit amet"},{previous:s(()=>[a(B,{href:o.route("deposit.index")},null,8,["href"])]),default:s(()=>[a($,{onSubmitted:d},{title:s(()=>[r(" Konfirmasi Deposit ")]),description:s(()=>[r(" Perbarui informasi profil akun dan alamat email pengguna. ")]),form:s(()=>[n("div",D,[n("h2",P,[j,n("span",C," Rp "+c(u(e.amount)),1),n("span",K,c(e.response.token),1)])])]),actions:s(()=>[a(w,{on:i(t).recentlySuccessful,class:"mr-3"},{default:s(()=>[r(" Berhasil disimpan. ")]),_:1},8,["on"]),a(v,{class:S({"opacity-25":i(t).processing}),disabled:i(t).processing},{default:s(()=>[r(" Bayar ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{T as default};

import{_}from"./AppLayout.80ef80f7.js";import{d as g,v as h,J as b,i as x,c as k,w as e,o as y,b as a,g as i,a as r,t as l,u as c,n as S}from"./app.7d0210dc.js";import{_ as v}from"./PrimaryButton.f9b1404f.js";import{_ as B}from"./PreviousButton.8682637c.js";import{_ as $}from"./ActionMessage.26a9e7d2.js";import{_ as C}from"./FormSection.e4d5d2aa.js";import"./DarkmodeToggle.6d91bc5e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.7b15135c.js";const D={class:"col-span-6 sm:col-span-3"},P={class:"tracking-tight"},j=r("span",{class:"block text-sm font-medium text-gray-600"}," Jumlah Pembayaran ",-1),w={class:"block text-xl font-extrabold text-primary-600"},K={class:"block text-sm font-medium text-gray-600"},T={__name:"Confirm",props:{users:Object,history:Object,response:Object,amount:String,order_id:String},setup(p){const s=p;g(null);const t=h({user_id:s.users.id,amount:s.amount,token:s.response.token,redirect_url:s.response.redirect_url,status:null,order_id:s.order_id}),m=b();x(()=>m.props.response);const n=o=>{t.status=o,t.post(route("deposit.confirm",t),{preserveScroll:!0,onSuccess:()=>{console.log("hahahaha")}})};function u(o){return(o/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const d=()=>{snap.pay(s.response.token,{onSuccess:function(o){console.log("success"),n("success")},onPending:function(o){console.log("pending"),n("pending")},onError:function(o){console.log("error"),n("error")},onClose:function(){console.log("customer closed the popup without finishing the payment"),n("close")}})};return(o,f)=>(y(),k(_,{title:"Konfirmasi Deposit",name:"Konfirmasi Deposit",desc:"Lorem ipsum dolor sit amet"},{previous:e(()=>[a(B,{href:o.route("deposit.index")},null,8,["href"])]),default:e(()=>[a(C,{onSubmitted:d},{title:e(()=>[i(" Konfirmasi Deposit ")]),description:e(()=>[i(" Perbarui informasi profil akun dan alamat email pengguna. ")]),form:e(()=>[r("div",D,[r("h2",P,[j,r("span",w," Rp "+l(u(s.amount)),1),r("span",K,l(s.response.token),1)])])]),actions:e(()=>[a($,{on:c(t).recentlySuccessful,class:"mr-3"},{default:e(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),a(v,{class:S({"opacity-25":c(t).processing}),disabled:c(t).processing},{default:e(()=>[i(" Bayar ")]),_:1},8,["class","disabled"])]),_:1})]),_:1}))}};export{T as default};

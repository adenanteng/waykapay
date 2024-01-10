import{_ as x}from"./AppLayout-43541922.js";import{T as y,o as e,c as h,w as o,b as c,g as m,a as t,e as i,t as a,u as l,E as u,F as d,G as k,f as r}from"./app-91c3fca6.js";import{_ as g}from"./PrimaryButton-6f2e7c5e.js";import{_ as w}from"./SecondaryButton-fb6cc76e.js";import{_ as j}from"./PreviousButton-bd42be9c.js";import{_ as S}from"./FormSection-c36103dd.js";import{e as f}from"./popper.esm-af67def1.js";import"./moment-ea1ec95f.js";import"./OnlineStatus-b83a1986.js";import"./index-a0d87f7b.js";import"./DarkmodeToggle-06532498.js";import"./helper-04030b53.js";import"./use-controllable-03a4e5ad.js";import"./vue3-otp-input.esm-77a255d4.js";import"./DialogModal-4b64fa4d.js";import"./InputError-6110c785.js";import"./BackgroundParticle-9a28db97.js";import"./focus-management-fab8a39b.js";import"./SectionTitle-3808c5c9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjs-dynamic-modules-302442b1.js";const N={class:"col-span-6"},$={class:"grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"},B={class:"sm:col-span-1 flex sm:block justify-between"},C=t("div",{class:"text-sm"},"Bank",-1),O={class:"text-sm font-semibold"},P={class:"sm:col-span-1 flex sm:block justify-between"},R=t("div",{class:"text-sm"},"No. Virtual Account",-1),V={class:"text-sm font-semibold"},K=t("i",{class:"fa-duotone fa-paste ml-2"},null,-1),A=[K],D={key:0,class:"sm:col-span-2 flex flex-col items-center my-5 gap-3"},F=t("div",{class:"text-sm"},[t("img",{src:"/img/vendor/QRIS.svg",class:"h-8 w-auto",alt:"QRIS"})],-1),T={class:"text-sm font-semibold"},q={class:"sm:col-span-1 flex sm:block justify-between"},E=t("div",{class:"text-sm"},"Metode Pembayaran",-1),I={class:"text-sm font-semibold"},M={class:"sm:col-span-1 flex sm:block justify-between"},Q=t("div",{class:"text-sm"},"No. Pembayaran",-1),U={class:"text-sm font-semibold"},G=t("i",{class:"fa-duotone fa-paste ml-2"},null,-1),H=[G],L={class:"sm:col-span-1 flex sm:block justify-between"},W=t("div",{class:"text-sm"},"Metode Pembayaran",-1),z={class:"text-sm font-semibold"},J=t("div",{class:"sm:col-span-1 flex sm:block justify-between"},[t("div",{class:"text-sm"},"Atas Nama"),t("div",{class:"text-sm font-semibold"},"Agus Suryaman")],-1),X={class:"sm:col-span-1 flex sm:block justify-between"},Y=t("div",{class:"text-sm"},"No. Rekening",-1),Z={class:"text-sm font-semibold"},tt=t("i",{class:"fa-duotone fa-paste ml-2"},null,-1),st=[tt],ot=t("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),et={class:"sm:col-span-1 flex sm:block justify-between"},at=t("div",{class:"text-sm"},"Nominal",-1),nt={class:"text-sm font-semibold"},ct={key:4,class:"sm:col-span-1 flex sm:block justify-between"},it=t("div",{class:"text-sm"},"Kode Unik",-1),lt={class:"text-sm font-semibold"},mt={class:"sm:col-span-1 flex sm:block justify-between"},rt=t("div",{class:"text-sm"},"Total",-1),dt={class:"text-sm font-semibold"},_t={key:5,class:""},ut=t("p",{class:"text-xs text-gray-500"},"Untuk memudahkan transaksi harap transfer nominal beserta kode uniknya ya.",-1),ft=[ut],pt={class:"flex gap-3"},Ft={__name:"Confirm",props:{transaction:Object,virtual_account:Object|String,wallet_account:Object|String,offline_account:Object|String,manual_account:Object|String},setup(v){const s=v;y({transaction:s.transaction});function p(_){return(_/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(_,n)=>(e(),h(x,{title:"Konfirmasi Deposit",name:"Konfirmasi Deposit",desc:"Lorem ipsum dolor sit amet"},{previous:o(()=>[c(j)]),default:o(()=>[c(S,null,{title:o(()=>[m(" Pembayaran ")]),description:o(()=>[]),form:o(()=>[t("div",N,[t("div",$,[s.virtual_account?(e(),i(d,{key:0},[t("div",B,[C,t("div",O,a(s.virtual_account.bank),1)]),t("div",P,[R,t("div",V,[m(a(s.virtual_account.va_number)+" ",1),c(l(f),{class:"text-sm text-primary-900 font-normal lowercase",content:"Sukses copy",arrow:"",placement:"right-end"},{default:o(()=>[t("button",{class:"",onClick:n[0]||(n[0]=b=>l(u)(s.virtual_account.va_number))},A)]),_:1})])])],64)):s.wallet_account?(e(),i(d,{key:1},[s.wallet_account.qr_code!=="-"?(e(),i("div",D,[F,t("div",T,[c(l(k),{value:s.wallet_account.qr_code,tag:"svg",options:{width:200,color:{dark:"#000",light:"#fff"}}},null,8,["value"])])])):r("",!0)],64)):s.offline_account?(e(),i(d,{key:2},[t("div",q,[E,t("div",I,a(s.offline_account.bank),1)]),t("div",M,[Q,t("div",U,[m(a(s.offline_account.payment_code)+" ",1),c(l(f),{class:"text-sm text-primary-900 font-normal lowercase",content:"Sukses copy",arrow:"",placement:"right-end"},{default:o(()=>[t("button",{class:"",onClick:n[1]||(n[1]=b=>l(u)(s.offline_account.payment_code))},H)]),_:1})])])],64)):s.manual_account?(e(),i(d,{key:3},[t("div",L,[W,t("div",z,a(s.manual_account.bank),1)]),J,t("div",X,[Y,t("div",Z,[m(a(s.manual_account.payment_code)+" ",1),c(l(f),{class:"text-sm text-primary-900 font-normal lowercase",content:"Sukses copy",arrow:"",placement:"right-end"},{default:o(()=>[t("button",{class:"",onClick:n[2]||(n[2]=b=>l(u)(s.manual_account.payment_code))},st)]),_:1})])])],64)):r("",!0),ot,t("div",et,[at,t("div",nt,"Rp "+a(p(s.transaction.amount)),1)]),s.manual_account?(e(),i("div",ct,[it,t("div",lt,a(Number(s.transaction.gross_amount)-Number(s.transaction.amount)),1)])):r("",!0),t("div",mt,[rt,t("div",dt,"Rp "+a(p(s.transaction.gross_amount)),1)]),s.manual_account?(e(),i("div",_t,ft)):r("",!0)])])]),actions:o(()=>[t("div",pt,[s.manual_account?(e(),h(w,{key:0,class:"border border-gray-300",as:"outside",href:"https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer",target:"_blank"},{default:o(()=>[m(" Kirim bukti tf ")]),_:1})):r("",!0),c(g,{as:"a",href:_.route("dashboard")},{default:o(()=>[m(" Beranda ")]),_:1},8,["href"])])]),_:1})]),_:1}))}};export{Ft as default};

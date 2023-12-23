import{_ as x}from"./AppLayout-738583a9.js";import{T as y,o as a,c as h,w as e,b as c,g as l,a as t,e as m,t as o,u as i,D as u,F as d,E as k,f as r}from"./app-7832e5fa.js";import{_ as g}from"./PrimaryButton-869bfb81.js";import{_ as w}from"./SecondaryButton-9bd6d407.js";import{_ as j}from"./PreviousButton-527c7888.js";import{_ as S}from"./FormSection-8e804497.js";import{e as f}from"./popper.esm-69cbc497.js";import"./moment-bb8b4782.js";import"./OnlineStatus-0cf0f402.js";import"./index-54803928.js";import"./DarkmodeToggle-fa6f8a70.js";import"./use-controllable-1740a93e.js";import"./focus-management-61c3c6b5.js";import"./SectionTitle-a442a11b.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"col-span-6"},$={class:"grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"},B={class:"sm:col-span-1 flex sm:block justify-between"},C=t("div",{class:"text-sm"},"Bank",-1),O={class:"text-sm font-semibold"},P={class:"sm:col-span-1 flex sm:block justify-between"},R=t("div",{class:"text-sm"},"No. Virtual Account",-1),V={class:"text-sm font-semibold"},D=t("i",{class:"fa-duotone fa-paste ml-2"},null,-1),K=[D],A={key:0,class:"sm:col-span-2 flex flex-col items-center my-5 gap-3"},F=t("div",{class:"text-sm"},[t("img",{src:"/img/vendor/QRIS.svg",class:"h-8 w-auto",alt:"QRIS"})],-1),T={class:"text-sm font-semibold"},q={class:"sm:col-span-1 flex sm:block justify-between"},E=t("div",{class:"text-sm"},"Metode Pembayaran",-1),I={class:"text-sm font-semibold"},M={class:"sm:col-span-1 flex sm:block justify-between"},Q=t("div",{class:"text-sm"},"No. Pembayaran",-1),U={class:"text-sm font-semibold"},H=t("i",{class:"fa-duotone fa-paste ml-2"},null,-1),L=[H],W={class:"sm:col-span-1 flex sm:block justify-between"},z=t("div",{class:"text-sm"},"Metode Pembayaran",-1),G={class:"text-sm font-semibold"},J=t("div",{class:"sm:col-span-1 flex sm:block justify-between"},[t("div",{class:"text-sm"},"Atas Nama"),t("div",{class:"text-sm font-semibold"},"Agus Suryaman")],-1),X={class:"sm:col-span-1 flex sm:block justify-between"},Y=t("div",{class:"text-sm"},"No. Rekening",-1),Z={class:"text-sm font-semibold"},tt=t("i",{class:"fa-duotone fa-paste ml-2"},null,-1),st=[tt],et=t("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),ot={class:"sm:col-span-1 flex sm:block justify-between"},at=t("div",{class:"text-sm"},"Nominal",-1),nt={class:"text-sm font-semibold"},ct={class:"sm:col-span-1 flex sm:block justify-between"},it=t("div",{class:"text-sm"},"Kode Unik",-1),lt={class:"text-sm font-semibold"},mt={class:"sm:col-span-1 flex sm:block justify-between"},dt=t("div",{class:"text-sm"},"Total",-1),rt={class:"text-sm font-semibold"},_t={key:4,class:""},ut=t("p",{class:"text-xs text-gray-500"},"Untuk memudahkan transaksi harap transfer nominal beserta kode uniknya ya.",-1),ft=[ut],pt={class:"flex gap-3"},Pt={__name:"Confirm",props:{transaction:Object,virtual_account:Object|String,wallet_account:Object|String,offline_account:Object|String,manual_account:Object|String},setup(v){const s=v;y({transaction:s.transaction});function p(_){return(_/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(_,n)=>(a(),h(x,{title:"Konfirmasi Deposit",name:"Konfirmasi Deposit",desc:"Lorem ipsum dolor sit amet"},{previous:e(()=>[c(j)]),default:e(()=>[c(S,null,{title:e(()=>[l(" Pembayaran ")]),description:e(()=>[]),form:e(()=>[t("div",N,[t("div",$,[s.virtual_account?(a(),m(d,{key:0},[t("div",B,[C,t("div",O,o(s.virtual_account.bank),1)]),t("div",P,[R,t("div",V,[l(o(s.virtual_account.va_number)+" ",1),c(i(f),{class:"text-sm text-primary-900 font-normal lowercase",content:"Sukses copy",arrow:"",placement:"right-end"},{default:e(()=>[t("button",{class:"",onClick:n[0]||(n[0]=b=>i(u)(s.virtual_account.va_number))},K)]),_:1})])])],64)):s.wallet_account?(a(),m(d,{key:1},[s.wallet_account.qr_code!=="-"?(a(),m("div",A,[F,t("div",T,[c(i(k),{value:s.wallet_account.qr_code,tag:"svg",options:{width:200,color:{dark:"#000",light:"#fff"}}},null,8,["value"])])])):r("",!0)],64)):s.offline_account?(a(),m(d,{key:2},[t("div",q,[E,t("div",I,o(s.offline_account.bank),1)]),t("div",M,[Q,t("div",U,[l(o(s.offline_account.payment_code)+" ",1),c(i(f),{class:"text-sm text-primary-900 font-normal lowercase",content:"Sukses copy",arrow:"",placement:"right-end"},{default:e(()=>[t("button",{class:"",onClick:n[1]||(n[1]=b=>i(u)(s.offline_account.payment_code))},L)]),_:1})])])],64)):s.manual_account?(a(),m(d,{key:3},[t("div",W,[z,t("div",G,o(s.manual_account.bank),1)]),J,t("div",X,[Y,t("div",Z,[l(o(s.manual_account.payment_code)+" ",1),c(i(f),{class:"text-sm text-primary-900 font-normal lowercase",content:"Sukses copy",arrow:"",placement:"right-end"},{default:e(()=>[t("button",{class:"",onClick:n[2]||(n[2]=b=>i(u)(s.manual_account.payment_code))},st)]),_:1})])])],64)):r("",!0),et,t("div",ot,[at,t("div",nt,"Rp "+o(p(s.transaction.amount)),1)]),t("div",ct,[it,t("div",lt,o(Number(s.transaction.gross_amount)-Number(s.transaction.amount)),1)]),t("div",mt,[dt,t("div",rt,"Rp "+o(p(s.transaction.gross_amount)),1)]),s.manual_account?(a(),m("div",_t,ft)):r("",!0)])])]),actions:e(()=>[t("div",pt,[s.manual_account?(a(),h(w,{key:0,class:"border border-gray-300",as:"outside",href:"https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer",target:"_blank"},{default:e(()=>[l(" Kirim bukti tf ")]),_:1})):r("",!0),c(g,{as:"a",href:_.route("dashboard")},{default:e(()=>[l(" Beranda ")]),_:1},8,["href"])])]),_:1})]),_:1}))}};export{Pt as default};
import{_ as b}from"./AppLayout-3e9e0f19.js";import{z as k,O as v,T as y,d as x,o as n,c as p,w as o,b as t,g as l,t as c,a as e,u as a,n as h,e as _,h as $,F as w}from"./app-1b834547.js";import{_ as P}from"./TextInput-1333bf3b.js";import{_ as B}from"./InputError-9065812a.js";import{_ as N}from"./PreviousButton-561e61be.js";import{_ as C}from"./FormSection-11a5ac8e.js";import{_ as L}from"./ActionMessage-0621695b.js";import{_ as S}from"./PrimaryButton-5b822f10.js";import{_ as V}from"./InputLabel-7b4bacaa.js";import F from"./Loading-b7bd0904.js";import"./OnlineStatus-ec430fea.js";import"./index-59e428e6.js";import"./DarkmodeToggle-58abfa50.js";import"./helper-04030b53.js";import"./use-controllable-21302b4f.js";import"./vue3-otp-input.esm-4398a029.js";import"./DialogModal-61c13936.js";import"./BackgroundParticle-ef1c7d01.js";import"./focus-management-c59195aa.js";import"./SectionTitle-514e94f8.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={class:"col-span-6 sm:col-span-3"},M={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},T={class:"relative px-6 py-5 flex items-center space-x-3"},q={class:"flex-shrink-0"},z=["src"],O=["src"],R=["onClick"],D=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),E={class:"text-sm font-medium text-gray-900"},U={class:"text-sm text-gray-500 truncate"},de={__name:"Index",props:{customer_list:void 0},setup(u){const d=u;k(()=>{v.reload({only:["customer_list"]})});const s=y({brand:"PLN",customer_no:""}),f=()=>{s.get(route("pln.prepaid.inquiry",s),{errorBag:"storeInformation",preserveScroll:!0})};function g(m){return(m/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return x("Pulsa"),(m,i)=>(n(),p(b,{title:"PLN Prepaid",name:"PLN Prepaid",desc:"Masukkan nomor meter"},{previous:o(()=>[t(N)]),default:o(()=>[t(C,{onSubmitted:f},{title:o(()=>[l(" Token PLN Prepaid ")]),description:o(()=>[l(" * Saldo Rekening Rp "+c(g(m.$page.props.user.wallet_balance)),1)]),form:o(()=>[e("div",I,[t(V,{for:"number",value:"Masukkan no. meter / id pelanggan"}),t(P,{id:"number",modelValue:a(s).customer_no,"onUpdate:modelValue":i[0]||(i[0]=r=>a(s).customer_no=r),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),t(B,{message:a(s).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[t(L,{on:a(s).recentlySuccessful,class:"mr-3"},{default:o(()=>[l(" Berhasil disimpan. ")]),_:1},8,["on"]),t(S,{class:h({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:o(()=>[l(" Cek ")]),_:1},8,["class","disabled"])]),_:1}),e("ul",M,[d.customer_list===void 0?(n(),p(F,{key:0})):(n(!0),_(w,{key:1},$(d.customer_list,r=>(n(),_("li",T,[e("div",q,[e("img",{class:"w-10",src:"/img/vendor/"+r.brand+".png",alt:""},null,8,z),e("img",{class:"w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,O)]),e("div",{onClick:j=>a(s).customer_no=r.customer_no,class:"flex-1 min-w-0"},[e("button",{onClick:i[1]||(i[1]=()=>{}),class:"focus:outline-none text-left"},[D,e("p",E,c(r.customer_name),1),e("p",U,c(r.customer_no),1)])],8,R)]))),256))])]),_:1}))}};export{de as default};

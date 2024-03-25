import{_ as b}from"./AppLayout-CXrpN_AO.js";import{z as k,O as v,T as y,d as x,o as n,c as p,w as o,b as t,g as l,t as c,a as e,u as a,n as h,e as _,h as $,F as w}from"./app-QibV99os.js";import{_ as P}from"./TextInput-DJ8RwOMj.js";import{_ as B}from"./InputError-DlzXW2Af.js";import{_ as N}from"./PreviousButton-CsfzlEvK.js";import{_ as C}from"./FormSection-0CLrAwZ-.js";import{_ as L}from"./ActionMessage-DUJWNQ1a.js";import{_ as S}from"./PrimaryButton-C6Dw3qtJ.js";import{_ as V}from"./InputLabel-BWZNoA8s.js";import z from"./Loading-B-4ZQuM1.js";import"./OnlineStatus-DCWzCiCY.js";import"./DarkmodeToggle-Cqc7jBaY.js";import"./helper-Dp3OpoYX.js";import"./form-DSaFDzVM.js";import"./use-resolve-button-type-cplCLIAp.js";import"./vue3-otp-input.esm-BF0PA2PJ.js";import"./DialogModal-mt60l-Ca.js";import"./BackgroundParticle-DG75UD1K.js";import"./calculate-active-index-In8VO4po.js";import"./focus-management-DTU98A4s.js";import"./SectionTitle-CpZlNHxR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"col-span-6 sm:col-span-3"},I={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},M={class:"relative px-6 py-5 flex items-center space-x-3"},T={class:"flex-shrink-0"},q=["src"],O=["src"],R=["onClick"],D=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),E={class:"text-sm font-medium text-gray-900 capitalize"},U={class:"text-sm text-gray-500 truncate"},pe={__name:"Index",props:{customer_list:void 0},setup(u){const d=u;k(()=>{v.reload({only:["customer_list"]})});const s=y({brand:"PLN",customer_no:""}),f=()=>{s.get(route("pln.prepaid.inquiry",s),{errorBag:"storeInformation",preserveScroll:!0})};function g(m){return(m/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return x("Pulsa"),(m,i)=>(n(),p(b,{title:"PLN Prepaid",name:"PLN Prepaid",desc:"Masukkan nomor meter"},{previous:o(()=>[t(N)]),default:o(()=>[t(C,{onSubmitted:f},{title:o(()=>[l(" Token PLN Prepaid ")]),description:o(()=>[l(" * Saldo Rekening Rp "+c(g(m.$page.props.user.wallet_balance)),1)]),form:o(()=>[e("div",F,[t(V,{for:"number",value:"Masukkan no. meter / id pelanggan"}),t(P,{id:"number",modelValue:a(s).customer_no,"onUpdate:modelValue":i[0]||(i[0]=r=>a(s).customer_no=r),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),t(B,{message:a(s).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[t(L,{on:a(s).recentlySuccessful,class:"mr-3"},{default:o(()=>[l(" Berhasil disimpan. ")]),_:1},8,["on"]),t(S,{class:h({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:o(()=>[l(" Cek ")]),_:1},8,["class","disabled"])]),_:1}),e("ul",I,[d.customer_list===void 0?(n(),p(z,{key:0})):(n(!0),_(w,{key:1},$(d.customer_list,r=>(n(),_("li",M,[e("div",T,[e("img",{class:"w-10",src:"/img/vendor/"+r.brand+".png",alt:""},null,8,q),e("img",{class:"w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,O)]),e("div",{onClick:j=>a(s).customer_no=r.customer_no,class:"flex-1 min-w-0"},[e("button",{onClick:i[1]||(i[1]=()=>{}),class:"focus:outline-none text-left"},[D,e("p",E,c(r.customer_name),1),e("p",U,c(r.customer_no),1)])],8,R)]))),256))])]),_:1}))}};export{pe as default};
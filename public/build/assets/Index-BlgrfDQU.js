import{_ as k}from"./AppLayout-CXrpN_AO.js";import{z as b,O as h,T as v,o as l,c as u,w as o,b as a,a as e,t as m,g as d,u as t,n as y,e as _,h as x,F as $,f as w}from"./app-QibV99os.js";import{_ as B}from"./TextInput-DJ8RwOMj.js";import{_ as C}from"./InputError-DlzXW2Af.js";import{_ as S}from"./PreviousButton-CsfzlEvK.js";import{_ as V}from"./FormSection-0CLrAwZ-.js";import{_ as z}from"./ActionMessage-DUJWNQ1a.js";import{_ as N}from"./PrimaryButton-C6Dw3qtJ.js";import{_ as F}from"./InputLabel-BWZNoA8s.js";import I from"./Loading-B-4ZQuM1.js";import"./OnlineStatus-DCWzCiCY.js";import"./DarkmodeToggle-Cqc7jBaY.js";import"./helper-Dp3OpoYX.js";import"./form-DSaFDzVM.js";import"./use-resolve-button-type-cplCLIAp.js";import"./vue3-otp-input.esm-BF0PA2PJ.js";import"./DialogModal-mt60l-Ca.js";import"./BackgroundParticle-DG75UD1K.js";import"./calculate-active-index-In8VO4po.js";import"./focus-management-DTU98A4s.js";import"./SectionTitle-CpZlNHxR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const M={class:"capitalize"},q={class:"col-span-6 sm:col-span-3"},L={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},O={class:"relative px-6 py-5 flex items-center space-x-3"},R={class:"flex-shrink-0"},T=["src"],A=["src"],D=["onClick"],E=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),P={class:"text-sm font-medium text-gray-900 capitalize"},U={class:"text-sm text-gray-500 truncate"},_e={__name:"Index",props:{sku:String,customer_list:void 0},setup(p){const n=p;b(()=>{h.reload({only:["customer_list"]})});const s=v({customer_no:"",sku:n.sku}),f=()=>{s.post(route("pasca.inquiry"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0})};function g(c){return(c/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(c,i)=>(l(),u(k,{title:n.sku,name:n.sku,desc:"Masukkan nomor meter"},{previous:o(()=>[a(S)]),default:o(()=>[a(V,{onSubmitted:f},{title:o(()=>[e("span",M,m(n.sku.replaceAll("-"," ")),1)]),description:o(()=>[d(" * Saldo Rekening Rp "+m(g(c.$page.props.user.wallet_balance)),1)]),form:o(()=>[e("div",q,[a(F,{for:"number",value:"Masukkan nomor pelanggan"}),a(B,{id:"number",modelValue:t(s).customer_no,"onUpdate:modelValue":i[0]||(i[0]=r=>t(s).customer_no=r),type:"number",class:"mt-1 block w-full",minlength:"5",required:"",autofocus:""},null,8,["modelValue"]),a(C,{message:t(s).errors.customer_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[a(z,{on:t(s).recentlySuccessful,class:"mr-3"},{default:o(()=>[d(" Berhasil disimpan. ")]),_:1},8,["on"]),a(N,{class:y({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[d(" Cek ")]),_:1},8,["class","disabled"])]),_:1}),e("ul",L,[n.customer_list===void 0?(l(),u(I,{key:0})):t(s).customer_no.length<=4?(l(!0),_($,{key:1},x(n.customer_list,r=>(l(),_("li",O,[e("div",R,[e("img",{class:"w-10",src:"/img/vendor/"+r.brand+".png",alt:""},null,8,T),e("img",{class:"w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,A)]),e("div",{onClick:j=>t(s).customer_no=r.customer_no,class:"flex-1 min-w-0"},[e("button",{onClick:i[1]||(i[1]=()=>{}),class:"focus:outline-none text-left"},[E,e("p",P,m(r.customer_name),1),e("p",U,m(r.customer_no),1)])],8,D)]))),256)):w("",!0)])]),_:1},8,["title","name"]))}};export{_e as default};
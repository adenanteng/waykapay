import{z as R,O as T,d as O,T as U,o as d,e as m,b as a,w as o,F as p,a as n,c as N,u as e,h as y,f,g as l,n as t,t as v}from"./app-f95d9850.js";import{_ as g}from"./ActionMessage-f8060db4.js";import{_ as k}from"./FormSection-ab42ec61.js";import{_ as x}from"./InputError-8a28389b.js";import{_ as I}from"./InputLabel-553db71a.js";import{_ as S}from"./PrimaryButton-1abf74b8.js";import{_ as V}from"./TextInput-d0ab6be6.js";import{h as F}from"./moment-fbc5633a.js";import J from"./Loading-857b4f68.js";import{k as A,E as C,S as q,r as j}from"./CheckCircleIcon-4291bfbe.js";import"./SectionTitle-ac939a20.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-controllable-e6ca23f3.js";import"./focus-management-5f73704a.js";const z={class:"col-span-6"},H={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},P={class:"flex flex-1 justify-center items-center h-full"},W={class:"inline-flex items-center"},Y={class:"col-span-6"},G={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},K={class:"relative px-6 py-5 flex items-center space-x-3"},Q={class:"flex-shrink-0"},X=["src"],Z=["onClick"],ee=n("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),se={class:"text-sm font-medium text-gray-900"},ae={class:"text-sm text-gray-500 truncate"},oe={class:"col-span-6"},ne={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},re={class:"flex flex-1 justify-center items-center h-full"},te=["src"],le={key:0,class:"col-span-6 mt-10"},he={__name:"UpdateBankForm",props:{response:Object|String,customer_list:void 0},setup(L){const h=L;R(()=>{T.reload({only:["customer_list"]})});const b=O(),$=w=>{b.value=w,r.reset()},D=[{id:1,name:"Sesama Waykapay",icon:"fa-wallet",desc:0,disabled:!1},{id:2,name:"Transfer Bank",icon:"fa-bank",desc:0,disabled:!1}],E=[{id:1,name:"wkp",logo:"/img/vendor/WAYKAPAY-LONG.svg",admin:0,disabled:!1}],M=[{id:2,name:"CENAIDJA",logo:"/img/vendor/BCA.svg",admin:4e3,disabled:!1},{id:3,name:"BNINIDJA",logo:"/img/vendor/BNI.svg",admin:4e3,disabled:!1},{id:4,name:"BRINIDJA",logo:"/img/vendor/BRI.svg",admin:4e3,disabled:!0},{id:5,name:"Bank MANDIRI",logo:"/img/vendor/MANDIRI.svg",admin:4e3,disabled:!1},{id:6,name:"permata",logo:"/img/vendor/PERMATA.svg",admin:4e3,disabled:!0},{id:7,name:"bsm",logo:"/img/vendor/BSI.svg",admin:4e3,disabled:!0}],r=U({bank:E[0],account_no:""}),B=()=>{r.post(route("money-transfer.amount"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},_=F().format("HH");return(w,c)=>(d(),m(p,null,[a(k,null,{title:o(()=>[l(" Mau transfer kemana? ")]),description:o(()=>[]),form:o(()=>[n("div",z,[a(e(A),null,{default:o(()=>[n("div",H,[(d(),m(p,null,y(D,s=>a(e(C),{onClick:i=>$(s.id),as:"template",key:s.id,value:s,disabled:s.disabled,class:t(s.disabled?"bg-gray-200 opacity-75":"")},{default:o(({checked:i,active:u})=>[n("div",{class:t([i?"border-transparent":"border-gray-300",u?"border-primary-500 ring-2 ring-primary-500":"","relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"])},[n("div",P,[n("div",W,[n("i",{class:t(["fa-duotone text-primary-600 text-lg mr-2",s.icon])},null,2),a(e(q),{as:"span",class:"flex text-sm font-medium text-gray-900"},{default:o(()=>[l(v(s.name),1)]),_:2},1024)])]),a(e(j),{class:t([i?"":"invisible","h-5 w-5 text-primary-600"]),"aria-hidden":"true"},null,8,["class"]),n("span",{class:t([u?"border":"border-2",i?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["onClick","value","disabled","class"])),64))])]),_:1})])]),_:1}),b.value==1?(d(),m(p,{key:0},[a(k,{onSubmitted:B},{title:o(()=>[l(" Nomor handphone tujuan ")]),description:o(()=>[]),form:o(()=>[n("div",Y,[a(I,{for:"amount",value:"Nomor handphone tujuan"}),a(V,{id:"account_no",modelValue:e(r).account_no,"onUpdate:modelValue":c[0]||(c[0]=s=>e(r).account_no=s),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(x,{message:e(r).errors.account_no,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[a(g,{on:e(r).recentlySuccessful,class:"mr-3"},{default:o(()=>[l(" Berhasil disimpan. ")]),_:1},8,["on"]),a(g,{on:e(_)>=23,class:"mr-3"},{default:o(()=>[l(" Sistem cut off. ")]),_:1},8,["on"]),a(S,{class:t({"opacity-25":e(r).processing}),disabled:e(r).account_no===""||e(_)>=23},{default:o(()=>[l(" Lanjutkan ")]),_:1},8,["class","disabled"])]),_:1}),n("ul",G,[h.customer_list===void 0?(d(),N(J,{key:0})):e(r).account_no.length<=1?(d(!0),m(p,{key:1},y(h.customer_list,s=>(d(),m("li",K,[n("div",Q,[n("img",{class:"w-10",src:"/img/vendor/"+s.brand+".png",alt:""},null,8,X)]),n("div",{onClick:i=>e(r).account_no=s.customer_no,class:"flex-1 min-w-0"},[n("button",{onClick:c[1]||(c[1]=()=>{}),class:"focus:outline-none text-left"},[ee,n("p",se,v(s.customer_name),1),n("p",ae,v(s.customer_no),1)])],8,Z)]))),256)):f("",!0)])],64)):f("",!0),b.value==2?(d(),N(k,{key:1,onSubmitted:B},{title:o(()=>[l(" Bank dan nomor rekening tujuan ")]),description:o(()=>[]),form:o(()=>[n("div",oe,[a(e(A),{modelValue:e(r).bank,"onUpdate:modelValue":c[2]||(c[2]=s=>e(r).bank=s)},{default:o(()=>[n("div",ne,[(d(),m(p,null,y(M,s=>a(e(C),{as:"template",key:s.id,value:s,disabled:s.disabled,class:t(s.disabled?"bg-gray-200 opacity-75":"")},{default:o(({checked:i,active:u})=>[n("div",{class:t([i?"border-transparent":"border-gray-300",u?"border-primary-500 ring-2 ring-primary-500":"","relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"])},[n("div",re,[n("img",{src:s.logo,class:"h-7",alt:""},null,8,te)]),a(e(j),{class:t([i?"":"invisible","h-5 w-5 text-primary-600"]),"aria-hidden":"true"},null,8,["class"]),n("span",{class:t([u?"border":"border-2",i?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["value","disabled","class"])),64))])]),_:1},8,["modelValue"]),a(x,{message:e(r).errors.bank,class:"mt-2"},null,8,["message"]),e(r).bank.id!=1?(d(),m("div",le,[a(I,{for:"amount",value:"Nomor rekening tujuan"}),a(V,{id:"account_no",modelValue:e(r).account_no,"onUpdate:modelValue":c[3]||(c[3]=s=>e(r).account_no=s),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(x,{message:e(r).errors.account_no,class:"mt-2"},null,8,["message"])])):f("",!0)])]),actions:o(()=>[a(g,{on:e(r).recentlySuccessful,class:"mr-3"},{default:o(()=>[l(" Berhasil disimpan. ")]),_:1},8,["on"]),a(g,{on:e(_)>=23,class:"mr-3"},{default:o(()=>[l(" Sistem cut off. ")]),_:1},8,["on"]),a(S,{class:t({"opacity-25":e(r).processing}),disabled:e(r).bank===null||e(r).account_no===""||e(_)>=23},{default:o(()=>[l(" Lanjutkan ")]),_:1},8,["class","disabled"])]),_:1})):f("",!0)],64))}};export{he as default};

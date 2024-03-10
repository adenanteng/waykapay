import{_ as b}from"./AppLayout-AWCuOc-f.js";import{_ as w}from"./TextInput-DglpbX30.js";import{d as f,z as k,O as _,p as j,o as a,c as C,w as m,a as e,b as p,u as c,H as g,g as n,e as r,F as h,h as x,t as o,n as V,j as B}from"./app-D798UzWS.js";import{_ as D}from"./PrimaryButton-En4sk2ac.js";import{m as M}from"./moment-BZyZzS-C.js";import{V as $}from"./vue3-lottie.es-CjAqKTln.js";import"./OnlineStatus-yN7wy3Ir.js";import"./index-q9DgJikW.js";import"./DarkmodeToggle-3Hsw0Nfm.js";import"./helper-Dp3OpoYX.js";import"./use-controllable-BZ9YDFiR.js";import"./use-resolve-button-type-DT7PNIRM.js";import"./vue3-otp-input.esm-CE_zbQvv.js";import"./DialogModal-jsjdBYgo.js";import"./InputError-2_kbYQmp.js";import"./BackgroundParticle-BPFSWV6p.js";import"./use-outside-click-D6wfYdxI.js";import"./focus-management-xygnhuos.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const H={class:"flex justify-between gap-3"},O={class:""},P={class:"relative"},S=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("i",{class:"fa-regular fa-magnifying-glass text-gray-500"})],-1),z={class:""},N={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},U={class:"px-4 py-4 sm:px-6"},E=e("div",{class:"flex items-center justify-between"},[e("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),e("div",{class:"ml-2 flex-shrink-0 flex"},[e("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),F=e("div",{class:"mt-2 sm:flex sm:justify-between"},[e("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),I=[E,F],L={key:1,class:""},T={class:"rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300"},A={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},R={class:"px-4 py-4 sm:px-6"},Y={class:"flex items-center justify-between"},q={class:"text-sm font-medium truncate capitalize text-gray-900"},G={class:"ml-2 flex-shrink-0 flex"},J={class:"flex justify-between"},K={class:"sm:flex gap-3"},Q={class:"flex items-center text-xs text-gray-600"},W={class:"flex items-center text-xs text-gray-600"},X={class:"flex items-end text-xs text-gray-600"},Z={class:""},ee={class:"text-sm text-center text-gray-600 mb-5"},se=e("i",{class:"fa-regular fa-angle-down animate-bounce mt-1"},null,-1),te={key:1,class:"px-4 py-4 sm:px-6 text-center text-gray-900 text-sm"},we={__name:"Index",props:{users:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(y){const u=y;let d=f(u.filters.search),l=f(u.filters.filterPaginate??20);k(()=>{_.reload({only:["users","usersCount","filters"]})}),j([d,l],([t,i])=>{_.get(route("user.index"),{search:t,filter_paginate:i},{preserveState:!0,preserveScroll:!0,replace:!0,only:["users","usersCount","filters"]})});function v(t){return M(t).format("DD MMM Y HH:mm")}return(t,i)=>(a(),C(b,{title:"Pengguna",name:"Pengguna",desc:"Data pengguna"},{default:m(()=>[e("div",H,[e("div",O,[e("div",P,[S,p(w,{type:"search",modelValue:c(d),"onUpdate:modelValue":i[0]||(i[0]=s=>g(d)?d.value=s:d=s),placeholder:"Cari disini",class:"block w-full lg:w-96 shadow pl-10"},null,8,["modelValue"])])]),e("div",z,[p(D,{as:"a",href:t.route("user.create")},{default:m(()=>[n("Tambah")]),_:1},8,["href"])])]),u.users===void 0?(a(),r("div",N,[(a(),r(h,null,x(4,s=>e("div",U,I)),64))])):(a(),r("div",L,[e("div",T,[e("ul",A,[(a(!0),r(h,null,x(u.users.data,s=>(a(),r("li",{key:s.id},[p(c(B),{href:t.route("user.show",s.slug),class:"block hover:bg-primary-50"},{default:m(()=>[e("div",R,[e("div",Y,[e("p",q,o(s.name)+" ",1),e("div",G,[e("p",{class:V(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.color])},o(s.status),3)])]),e("div",J,[e("div",K,[e("p",Q,o(s.phone),1),e("p",W,o(s.email),1)]),e("div",X,o(v(s.updated_at)),1)])])]),_:2},1032,["href"])]))),128))])])])),e("div",Z,[e("div",ee,[n(" Menampilkan "),e("strong",null,o(c(l)),1),n(" dari "),e("strong",null,o(t.$page.props.usersCount),1),n(" hasil ")]),c(l)<=t.$page.props.usersCount?(a(),r("button",{key:0,class:"w-full grid text-gray-900 font-medium",onClick:i[1]||(i[1]=s=>g(l)?l.value+=20:l+=20)},[n(" Selanjutnya "),se])):(a(),r("div",te,[p(c($),{"animation-link":"https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json",height:200,width:200}),n(" Eits, udah mentok hehe ")]))])]),_:1}))}};export{we as default};

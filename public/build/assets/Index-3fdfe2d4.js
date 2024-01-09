import{_ as f}from"./AppLayout-5df73110.js";import{_}from"./TextInput-2746597f.js";import{d as h,s as x,o as l,c as g,w as n,a as e,b as o,u as c,H as y,g as b,e as m,h as v,t as r,n as w,m as k,F as V,O as j}from"./app-7b920a22.js";import{_ as D}from"./PrimaryButton-61babf73.js";import{m as B}from"./moment-a3bc7e6e.js";import{_ as O}from"./Pagination-bc1ed656.js";import"./OnlineStatus-0befbef9.js";import"./index-2ef20189.js";import"./DarkmodeToggle-f2bae1fc.js";import"./helper-04030b53.js";import"./use-controllable-4a7bdeb3.js";import"./bcrypt-0ae443fe.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-d56268e8.js";import"./DialogModal-47c15960.js";import"./InputError-03b72b40.js";import"./focus-management-ea855ec9.js";const C={class:"flex justify-between gap-3"},H={class:""},M={class:""},N={class:"rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300"},$={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},z={class:"px-4 py-4 sm:px-6"},F={class:"flex items-center justify-between"},P={class:"text-sm font-medium truncate capitalize text-gray-900"},S={class:"ml-2 flex-shrink-0 flex"},T={class:"flex justify-between"},E={class:"sm:flex gap-3"},I={class:"flex items-center text-xs text-gray-600"},L={class:"flex items-center text-xs text-gray-600"},R={class:"flex items-end text-xs text-gray-600"},ie={__name:"Index",props:{users:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(p){const i=p;let a=h(i.filters.search);x(a,t=>{j.get(route("user.index"),{search:t},{preserveState:!0,replace:!0})});function u(t){return B(t).format("DD MMM Y HH:mm")}return(t,d)=>(l(),g(f,{title:"Pengguna",name:"Pengguna",desc:"Data pengguna"},{default:n(()=>[e("div",C,[e("div",H,[o(_,{type:"text",modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=s=>y(a)?a.value=s:a=s),placeholder:"Cari disini",class:"block w-full lg:w-96 shadow"},null,8,["modelValue"])]),e("div",M,[o(D,{as:"a",href:t.route("user.create")},{default:n(()=>[b("Tambah")]),_:1},8,["href"])])]),e("div",N,[e("ul",$,[(l(!0),m(V,null,v(i.users.data,s=>(l(),m("li",{key:s.id},[o(c(k),{href:t.route("user.show",s.slug),class:"block hover:bg-primary-50"},{default:n(()=>[e("div",z,[e("div",F,[e("p",P,r(s.name)+" ",1),e("div",S,[e("p",{class:w(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.color])},r(s.status),3)])]),e("div",T,[e("div",E,[e("p",I,r(s.phone),1),e("p",L,r(s.email),1)]),e("div",R,r(u(s.updated_at)),1)])])]),_:2},1032,["href"])]))),128))])]),o(O,{pagination:i.users},null,8,["pagination"])]),_:1}))}};export{ie as default};
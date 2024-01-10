import{_ as f}from"./AppLayout-43541922.js";import{_}from"./TextInput-c4b049c1.js";import{d as h,s as x,o as l,c as g,w as n,a as e,b as o,u as c,H as y,g as b,e as m,h as v,t as r,n as w,m as k,F as V,O as j}from"./app-91c3fca6.js";import{_ as D}from"./PrimaryButton-6f2e7c5e.js";import{m as B}from"./moment-ea1ec95f.js";import{_ as O}from"./Pagination-c46cabd1.js";import"./OnlineStatus-b83a1986.js";import"./index-a0d87f7b.js";import"./DarkmodeToggle-06532498.js";import"./helper-04030b53.js";import"./use-controllable-03a4e5ad.js";import"./vue3-otp-input.esm-77a255d4.js";import"./DialogModal-4b64fa4d.js";import"./InputError-6110c785.js";import"./BackgroundParticle-9a28db97.js";import"./focus-management-fab8a39b.js";import"./_commonjs-dynamic-modules-302442b1.js";const C={class:"flex justify-between gap-3"},H={class:""},M={class:""},N={class:"rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300"},$={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},z={class:"px-4 py-4 sm:px-6"},F={class:"flex items-center justify-between"},P={class:"text-sm font-medium truncate capitalize text-gray-900"},S={class:"ml-2 flex-shrink-0 flex"},T={class:"flex justify-between"},E={class:"sm:flex gap-3"},I={class:"flex items-center text-xs text-gray-600"},L={class:"flex items-center text-xs text-gray-600"},R={class:"flex items-end text-xs text-gray-600"},ie={__name:"Index",props:{users:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(p){const i=p;let a=h(i.filters.search);x(a,t=>{j.get(route("user.index"),{search:t},{preserveState:!0,replace:!0})});function u(t){return B(t).format("DD MMM Y HH:mm")}return(t,d)=>(l(),g(f,{title:"Pengguna",name:"Pengguna",desc:"Data pengguna"},{default:n(()=>[e("div",C,[e("div",H,[o(_,{type:"text",modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=s=>y(a)?a.value=s:a=s),placeholder:"Cari disini",class:"block w-full lg:w-96 shadow"},null,8,["modelValue"])]),e("div",M,[o(D,{as:"a",href:t.route("user.create")},{default:n(()=>[b("Tambah")]),_:1},8,["href"])])]),e("div",N,[e("ul",$,[(l(!0),m(V,null,v(i.users.data,s=>(l(),m("li",{key:s.id},[o(c(k),{href:t.route("user.show",s.slug),class:"block hover:bg-primary-50"},{default:n(()=>[e("div",z,[e("div",F,[e("p",P,r(s.name)+" ",1),e("div",S,[e("p",{class:w(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.color])},r(s.status),3)])]),e("div",T,[e("div",E,[e("p",I,r(s.phone),1),e("p",L,r(s.email),1)]),e("div",R,r(u(s.updated_at)),1)])])]),_:2},1032,["href"])]))),128))])]),o(O,{pagination:i.users},null,8,["pagination"])]),_:1}))}};export{ie as default};

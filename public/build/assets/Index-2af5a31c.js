import{_ as f}from"./AppLayout-d30f150e.js";import{_}from"./TextInput-78260fb4.js";import{d as h,s as x,o as l,c as g,w as n,a as e,b as o,u as c,G as y,g as b,e as m,h as v,t as r,n as w,m as k,F as V,O as j}from"./app-7c13986d.js";import{_ as D}from"./PrimaryButton-824be08c.js";import{m as B}from"./moment-2ffcbd80.js";import{_ as O}from"./Pagination-8cf09446.js";import"./OnlineStatus-0b061dc3.js";import"./index-b0ffd0cf.js";import"./DarkmodeToggle-c18a0703.js";import"./use-controllable-c87dad92.js";import"./bcrypt-36c5e2d8.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-853f1519.js";import"./DialogModal-0f828a96.js";import"./InputError-13b33243.js";import"./focus-management-1bf0c644.js";const C={class:"flex justify-between gap-3"},M={class:""},N={class:""},$={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},z={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},F={class:"px-4 py-4 sm:px-6"},H={class:"flex items-center justify-between"},P={class:"text-sm font-medium truncate capitalize text-gray-900"},S={class:"ml-2 flex-shrink-0 flex"},T={class:"flex justify-between"},E={class:"sm:flex gap-3"},G={class:"flex items-center text-xs text-gray-600"},I={class:"flex items-center text-xs text-gray-600"},L={class:"flex items-end text-xs text-gray-600"},oe={__name:"Index",props:{users:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(p){const i=p;let a=h(i.filters.search);x(a,t=>{j.get(route("user.index"),{search:t},{preserveState:!0,replace:!0})});function u(t){return B(t).format("DD MMM Y HH:mm")}return(t,d)=>(l(),g(f,{title:"Pengguna",name:"Pengguna",desc:"Data pengguna"},{default:n(()=>[e("div",C,[e("div",M,[o(_,{type:"text",modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=s=>y(a)?a.value=s:a=s),placeholder:"Cari disini",class:"block w-full lg:w-96 shadow"},null,8,["modelValue"])]),e("div",N,[o(D,{as:"a",href:t.route("user.create")},{default:n(()=>[b("Tambah")]),_:1},8,["href"])])]),e("div",$,[e("ul",z,[(l(!0),m(V,null,v(i.users.data,s=>(l(),m("li",{key:s.id},[o(c(k),{href:t.route("user.show",s.slug),class:"block hover:bg-primary-50"},{default:n(()=>[e("div",F,[e("div",H,[e("p",P,r(s.name)+" ",1),e("div",S,[e("p",{class:w(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.color])},r(s.status),3)])]),e("div",T,[e("div",E,[e("p",G,r(s.phone),1),e("p",I,r(s.email),1)]),e("div",L,r(u(s.updated_at)),1)])])]),_:2},1032,["href"])]))),128))])]),o(O,{pagination:i.users},null,8,["pagination"])]),_:1}))}};export{oe as default};

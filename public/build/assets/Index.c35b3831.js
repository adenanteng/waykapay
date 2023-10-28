import{_}from"./AppLayout.97492973.js";import{_ as u}from"./TextInput.a5b2c827.js";import{d as f,c as p,w as r,o as a,a as e,b as l,g as c,e as i,h,t as o,f as x,n as g,u as b,j as v,F as y}from"./app.abe08ac1.js";import{_ as w}from"./PrimaryButton.0e0096ed.js";import{m as k}from"./moment.3e2e5ebf.js";import"./helper.92f38628.js";import"./DarkmodeToggle.908b5a08.js";import"./label.a979b03e.js";import"./focus-management.79a9025b.js";const V={class:"flex justify-between gap-3"},j={class:""},B={id:"search"},C={class:""},D={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},N={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},$={class:"px-4 py-4 sm:px-6"},M={class:"flex items-center justify-between"},z={class:"font-medium truncate capitalize text-gray-900"},F={class:"ml-2 flex-shrink-0 flex"},H={key:0,class:"px-2 text-xs leading-5 font-semibold rounded-full mr-2 bg-green-100 text-green-800"},P=e("i",{class:"fa-regular fa-check mr-1"},null,-1),S={class:"flex justify-between"},T={class:"flex"},q={class:"flex items-center text-sm text-gray-600"},E={class:"flex items-center text-sm text-gray-600"},R={__name:"Index",props:{users:Object|String},setup(I){function m(t){return k(t).format("DD MMM Y HH:mm")}const d=f("");return(t,n)=>(a(),p(_,{title:"Pengguna",name:"Pengguna",desc:"lorem ipsum"},{default:r(()=>[e("div",V,[e("div",j,[e("form",B,[l(u,{name:"query",modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=s=>d.value=s),type:"text",class:"block w-full lg:w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])])]),e("div",C,[l(w,{as:"a",href:t.route("user.create")},{default:r(()=>[c("Tambah")]),_:1},8,["href"])])]),e("div",D,[e("ul",N,[(a(!0),i(y,null,h(t.$page.props.users,s=>(a(),i("li",{key:s.id},[l(b(v),{"preserve-scroll":"",href:t.route("user.show",s),class:"block hover:bg-primary-50"},{default:r(()=>[e("div",$,[e("div",M,[e("p",z,o(s.name),1),e("div",F,[s.email_verified_at?(a(),i("p",H,[P,c(" Verified ")])):x("",!0),e("p",{class:g(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.color])},o(s.status),3)])]),e("div",S,[e("div",T,[e("p",q,o(s.email),1)]),e("div",E,o(m(s.updated_at)),1)])])]),_:2},1032,["href"])]))),128))])])]),_:1}))}};export{R as default};

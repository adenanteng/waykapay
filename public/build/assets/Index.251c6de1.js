import{_ as n}from"./AppLayout.9defc0f1.js";import{c as a,w as t,o as i,b as o,a as e,u as r,j as l}from"./app.d165525e.js";import{_ as c}from"./PreviousButton.20db4332.js";import"./Banner.ca99a709.js";import"./DarkmodeToggle.03f73712.js";import"./helper.e9fc3b37.js";import"./label.f08ef1a6.js";import"./focus-management.f51fb033.js";const d={role:"list",class:"grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8"},p={class:"relative"},u={class:"group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg"},_=e("img",{src:"/img/vendor/PLN.svg",alt:"",class:"h-full w-full pointer-events-none group-hover:opacity-75 p-3"},null,-1),m=e("p",{class:"mt-1 block text-sm text-gray-900 truncate pointer-events-none"},"Token PLN",-1),g={class:"relative"},h={class:"group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg"},f=e("img",{src:"/img/vendor/PLN.svg",alt:"",class:"h-full w-full pointer-events-none group-hover:opacity-75 p-3"},null,-1),v=e("p",{class:"mt-1 block text-sm text-gray-900 truncate pointer-events-none"},"Tagihan PLN",-1),T={__name:"Index",props:{users:Object},setup(x){return(s,b)=>(i(),a(n,{title:"PLN",name:"PLN",desc:"Masukkan nomor meter"},{previous:t(()=>[o(c)]),default:t(()=>[e("ul",d,[e("li",p,[e("div",u,[_,o(r(l),{href:s.route("pln.prepaid.index"),class:"absolute inset-0 focus:outline-none"},null,8,["href"])]),m]),e("li",g,[e("div",h,[f,o(r(l),{href:s.route("pln.postpaid.index"),class:"absolute inset-0 focus:outline-none"},null,8,["href"])]),v])])]),_:1}))}};export{T as default};
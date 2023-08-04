import{_ as N}from"./AppLayout.e53ee030.js";import{_ as V}from"./TextInput.c26cbbd4.js";import{d as L,i as T,o as a,e as l,a as r,u as d,F as y,h as C,n as j,g as n,t as u,c as v,w as c,j as p,f as x,b}from"./app.d09f7161.js";import{_ as O}from"./PrimaryButton.b8dec0a2.js";import"./helper.7f8d49f9.js";import"./DarkmodeToggle.1c686305.js";import"./label.357d5093.js";import"./focus-management.52b3d73d.js";const P={class:"bg-white bg-opacity-50 -mx-4 shadow-lg border border-gray-300 ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-3xl overflow-auto"},S={key:0,class:"min-w-full divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl"},z=["onClick"],A={class:"flex items-center"},U={class:"px-3 py-4 text-sm text-gray-700"},K={key:0,class:"pl-3 pr-4 text-right text-sm font-medium"},M={key:1,class:"p-2 text-gray-900"},D={key:0,class:"px-4 py-0 flex items-center justify-between sm:px-6"},E={class:"flex-1 flex justify-between sm:hidden"},F={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},H={class:"text-sm text-gray-700"},q={class:"font-medium"},I={class:"font-medium"},Q={class:"font-medium"},G={class:"relative z-0 inline-flex -space-x-px","aria-label":"Pagination"},J=["innerHTML"],R={__name:"Table",props:{title:Array,data:Array,columns:Array,filterKey:String,routes:String,paginate:Object,slug:{type:Boolean,default:!1},view:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}},setup(s){const i=s,m=L(""),_=L(i.columns.reduce((e,f)=>(e[f]=1,e),{})),w=T(()=>{let{data:e,filterKey:f}=i;f&&(f=f.toLowerCase(),e=e.filter(g=>Object.keys(g).some(t=>String(g[t]).toLowerCase().indexOf(f)>-1)));const h=m.value;if(h){const g=_.value[h];e=e.slice().sort((t,o)=>(t=t[h],o=o[h],(t===o?0:t>o?1:-1)*g))}return e});function B(e){m.value=e,_.value[e]*=-1}function k(e){return e.charAt(0).toUpperCase()+e.slice(1)}return(e,f)=>{var h,g;return a(),l(y,null,[r("div",P,[d(w).length?(a(),l("table",S,[r("thead",null,[r("tr",null,[(a(!0),l(y,null,C(s.columns,(t,o)=>(a(),l("th",{onClick:$=>B(t),class:j([{active:m.value==t},"py-3.5 pl-4 text-left text-sm font-semibold text-gray-900"])},[r("div",A,[n(u(k(s.title[o]))+" ",1),r("span",{class:j(["fa-regular ml-1 text-xs",_.value[t]>0?"fa-angle-down":"fa-angle-up"])},null,2)])],10,z))),256))])]),r("tbody",null,[(a(!0),l(y,null,C(d(w),t=>(a(),l("tr",null,[(a(!0),l(y,null,C(s.columns,o=>{var $;return a(),l("td",U,u(($=t[o])!=null?$:" - "),1)}),256)),s.routes?(a(),l("td",K,[s.slug?(a(),l(y,{key:0},[s.view?(a(),v(d(p),{key:0,href:e.route(s.routes+".show",t.slug),class:"text-primary-600 hover:text-primary-900"},{default:c(()=>[n(" Lihat ")]),_:2},1032,["href"])):x("",!0),s.edit?(a(),v(d(p),{key:1,href:e.route(s.routes+".edit",t.slug),class:"text-primary-600 hover:text-primary-900"},{default:c(()=>[n(" Ubah ")]),_:2},1032,["href"])):x("",!0)],64)):(a(),l(y,{key:1},[s.view?(a(),v(d(p),{key:0,href:e.route(s.routes+".show",t),class:"text-primary-600 hover:text-primary-900"},{default:c(()=>[n(" Lihat ")]),_:2},1032,["href"])):x("",!0),s.edit?(a(),v(d(p),{key:1,href:e.route(s.routes+".edit",t),class:"text-primary-600 hover:text-primary-900"},{default:c(()=>[n(" Ubah ")]),_:2},1032,["href"])):x("",!0)],64))])):x("",!0)]))),256))])])):(a(),l("p",M,"No matches found."))]),i.paginate?(a(),l("div",D,[r("div",E,[b(d(p),{href:(h=i.paginate.prev_page_url)!=null?h:"",class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"},{default:c(()=>[n(" Previous ")]),_:1},8,["href"]),b(d(p),{href:(g=i.paginate.next_page_url)!=null?g:"",class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"},{default:c(()=>[n(" Next ")]),_:1},8,["href"])]),r("div",F,[r("div",null,[r("p",H,[n(" Menampilkan "+u(" ")+" "),r("span",q,u(i.paginate.from),1),n(" "+u(" ")+" sampai "+u(" ")+" "),r("span",I,u(i.paginate.to),1),n(" "+u(" ")+" dari "+u(" ")+" "),r("span",Q,u(i.paginate.total),1),n(" "+u(" ")+" hasil ")])]),r("div",null,[r("nav",G,[(a(!0),l(y,null,C(i.paginate.links,t=>{var o;return a(),v(d(p),{href:(o=t.url)!=null?o:"",class:j(["relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full shadow-lg",t.active?"z-10 bg-primary-50 border-primary-500 text-primary-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 "])},{default:c(()=>[r("span",{innerHTML:t.label},null,8,J)]),_:2},1032,["href","class"])}),256))])])])])):x("",!0)],64)}}},W={class:"flex justify-between"},X={class:""},Y={id:"search"},Z={class:""},oe={__name:"Index",props:{users:Object|String},setup(s){const i=s,m=L(""),_=["Nama","Email","Peran","Bergabung"],w=["name","email","role","created"];return(B,k)=>(a(),v(N,{title:"Pengguna",name:"Pengguna",desc:"lorem ipsum"},{default:c(()=>[r("div",W,[r("div",X,[r("form",Y,[b(V,{name:"query",modelValue:m.value,"onUpdate:modelValue":k[0]||(k[0]=e=>m.value=e),type:"text",class:"block w-full lg:w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])])]),r("div",Z,[b(O,{as:"a",href:B.route("user.create")},{default:c(()=>[n("Tambah")]),_:1},8,["href"])])]),b(R,{title:_,data:i.users.data,paginate:i.users,columns:w,"filter-key":m.value,routes:"user",view:!0},null,8,["data","paginate","filter-key"])]),_:1}))}};export{oe as default};
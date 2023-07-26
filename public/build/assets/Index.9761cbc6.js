import{_ as V}from"./AppLayout.f2796c91.js";import{_ as P}from"./TextInput.c5eb4735.js";import{d as N,i as T,o as a,e as l,a as r,u as d,F as y,h as k,n as L,g as o,t as u,c as v,w as c,j as p,f as x,b as C}from"./app.1710f2ff.js";import"./DarkmodeToggle.a8d7ca49.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.4c5a3124.js";import"./label.b1955abb.js";import"./focus-management.5a63cc4e.js";const O={class:"bg-white bg-opacity-50 -mx-4 shadow-lg border border-gray-300 ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-3xl overflow-auto"},S={key:0,class:"min-w-full divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl"},$=["onClick"],z={class:"flex items-center"},A={class:"px-3 py-4 text-sm text-gray-700"},U={key:0,class:"pl-3 pr-4 text-right text-sm font-medium"},K={key:1,class:"p-2 text-gray-900"},M={key:0,class:"px-4 py-0 flex items-center justify-between sm:px-6"},D={class:"flex-1 flex justify-between sm:hidden"},E={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},F={class:"text-sm text-gray-700"},H={class:"font-medium"},q={class:"font-medium"},I={class:"font-medium"},Q={class:"relative z-0 inline-flex -space-x-px","aria-label":"Pagination"},G=["innerHTML"],J={__name:"Table",props:{title:Array,data:Array,columns:Array,filterKey:String,routes:String,paginate:Object,slug:{type:Boolean,default:!1},view:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}},setup(s){const i=s,m=N(""),b=N(i.columns.reduce((e,f)=>(e[f]=1,e),{})),_=T(()=>{let{data:e,filterKey:f}=i;f&&(f=f.toLowerCase(),e=e.filter(h=>Object.keys(h).some(t=>String(h[t]).toLowerCase().indexOf(f)>-1)));const g=m.value;if(g){const h=b.value[g];e=e.slice().sort((t,n)=>(t=t[g],n=n[g],(t===n?0:t>n?1:-1)*h))}return e});function B(e){m.value=e,b.value[e]*=-1}function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}return(e,f)=>{var g,h;return a(),l(y,null,[r("div",O,[d(_).length?(a(),l("table",S,[r("thead",null,[r("tr",null,[(a(!0),l(y,null,k(s.columns,(t,n)=>(a(),l("th",{onClick:j=>B(t),class:L([{active:m.value==t},"py-3.5 pl-4 text-left text-sm font-semibold text-gray-900"])},[r("div",z,[o(u(w(s.title[n]))+" ",1),r("span",{class:L(["fa-regular ml-1 text-xs",b.value[t]>0?"fa-angle-down":"fa-angle-up"])},null,2)])],10,$))),256))])]),r("tbody",null,[(a(!0),l(y,null,k(d(_),t=>(a(),l("tr",null,[(a(!0),l(y,null,k(s.columns,n=>{var j;return a(),l("td",A,u((j=t[n])!=null?j:" - "),1)}),256)),s.routes?(a(),l("td",U,[s.slug?(a(),l(y,{key:0},[s.view?(a(),v(d(p),{key:0,href:e.route(s.routes+".show",t.slug),class:"text-primary-600 hover:text-primary-900"},{default:c(()=>[o(" Lihat ")]),_:2},1032,["href"])):x("",!0),s.edit?(a(),v(d(p),{key:1,href:e.route(s.routes+".edit",t.slug),class:"text-primary-600 hover:text-primary-900"},{default:c(()=>[o(" Ubah ")]),_:2},1032,["href"])):x("",!0)],64)):(a(),l(y,{key:1},[s.view?(a(),v(d(p),{key:0,href:e.route(s.routes+".show",t),class:"text-primary-600 hover:text-primary-900"},{default:c(()=>[o(" Lihat ")]),_:2},1032,["href"])):x("",!0),s.edit?(a(),v(d(p),{key:1,href:e.route(s.routes+".edit",t),class:"text-primary-600 hover:text-primary-900"},{default:c(()=>[o(" Ubah ")]),_:2},1032,["href"])):x("",!0)],64))])):x("",!0)]))),256))])])):(a(),l("p",K,"No matches found."))]),i.paginate?(a(),l("div",M,[r("div",D,[C(d(p),{href:(g=i.paginate.prev_page_url)!=null?g:"",class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"},{default:c(()=>[o(" Previous ")]),_:1},8,["href"]),C(d(p),{href:(h=i.paginate.next_page_url)!=null?h:"",class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"},{default:c(()=>[o(" Next ")]),_:1},8,["href"])]),r("div",E,[r("div",null,[r("p",F,[o(" Menampilkan "+u(" ")+" "),r("span",H,u(i.paginate.from),1),o(" "+u(" ")+" sampai "+u(" ")+" "),r("span",q,u(i.paginate.to),1),o(" "+u(" ")+" dari "+u(" ")+" "),r("span",I,u(i.paginate.total),1),o(" "+u(" ")+" hasil ")])]),r("div",null,[r("nav",Q,[(a(!0),l(y,null,k(i.paginate.links,t=>{var n;return a(),v(d(p),{href:(n=t.url)!=null?n:"",class:L(["relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full shadow-lg",t.active?"z-10 bg-primary-50 border-primary-500 text-primary-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 "])},{default:c(()=>[r("span",{innerHTML:t.label},null,8,G)]),_:2},1032,["href","class"])}),256))])])])])):x("",!0)],64)}}},R={id:"search"},se={__name:"Index",props:{users:Object|String},setup(s){const i=s,m=N(""),b=["Nama","Email","Peran","Bergabung"],_=["name","email","role","created"];return(B,w)=>(a(),v(V,{title:"Pengguna",name:"Pengguna",desc:"lorem ipsum",action:"Tambah Pengguna",href:B.route("user.create")},{default:c(()=>[r("form",R,[C(P,{name:"query",modelValue:m.value,"onUpdate:modelValue":w[0]||(w[0]=e=>m.value=e),type:"text",class:"mt-1 block w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])]),C(J,{title:b,data:i.users.data,paginate:i.users,columns:_,"filter-key":m.value,routes:"user",edit:!0},null,8,["data","paginate","filter-key"])]),_:1},8,["href"]))}};export{se as default};

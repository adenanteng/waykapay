import{_ as f}from"./AppLayout.f95725a1.js";import{d as u,v as p,c as x,w as o,o as r,a as e,e as l,h as g,F as h,b as i,u as b,j as y,t as a,n as v}from"./app.e72f1e8b.js";import{_ as w}from"./MobileMenu.26927d76.js";import{h as n}from"./moment.9709ab41.js";import"./DarkmodeToggle.6a45885a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const k={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},j={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},B={class:"px-4 py-4 sm:px-6"},D={class:"flex items-center justify-between"},F={class:"font-medium text-primary-600 truncate"},M={class:"ml-2 flex-shrink-0 flex"},R={class:"mt-2 sm:flex sm:justify-between"},$={class:"sm:flex"},C={class:"flex items-center text-sm text-gray-900"},H=e("p",{class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"},[e("i",{class:"fa-regular fa-down-to-bracket text-gray-500 pr-2"})],-1),L={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},N=e("i",{class:"fa-regular fa-calendar text-gray-500 pr-2"},null,-1),O={class:"text-gray-900 ml-2"},Y={__name:"Index",props:{users:Object,history:Object},setup(S){u(null),p({id:null});function c(t){return n(t).format("DD MMM Y")}function d(t){return n(t).format("HH:m")}function m(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,_)=>(r(),x(f,{title:"Riwayat",name:"Riwayat",desc:"Lorem ipsum dolor sit amet"},{default:o(()=>[e("div",k,[e("ul",j,[(r(!0),l(h,null,g(t.$page.props.history,s=>(r(),l("li",null,[i(b(y),{href:t.route("history.show",s),class:"block hover:bg-primary-50"},{default:o(()=>[e("div",B,[e("div",D,[e("p",F,a(s.category),1),e("div",M,[e("p",{class:v(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.status_id==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},a(s.status),3)])]),e("div",R,[e("div",$,[e("p",C," Rp "+a(m(s.amount)),1),H]),e("div",L,[N,e("p",null,a(c(s.created_at)),1),e("p",O,a(d(s.created_at)),1)])])])]),_:2},1032,["href"])]))),256))])]),i(w)]),_:1}))}};export{Y as default};

import{_ as f}from"./AppLayout.c19766c1.js";import{c as p,w as o,o as r,a as e,e as i,h as u,F as x,b as l,u as g,j as h,t as a,n as b}from"./app.796c563c.js";import{_ as v}from"./MobileMenu.06958a5e.js";import{h as n}from"./moment.9709ab41.js";import"./DarkmodeToggle.c2d3eb73.js";import"./_plugin-vue_export-helper.cdc0426e.js";const y={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},w={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},k={class:"px-4 py-4 sm:px-6"},j={class:"flex items-center justify-between"},B={class:"font-medium text-primary-600 truncate"},D={class:"ml-2 flex-shrink-0 flex"},F={class:"mt-2 sm:flex sm:justify-between"},M={class:"sm:flex"},R={class:"flex items-center text-sm text-gray-900"},$={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},C=e("i",{class:"fa-regular fa-calendar text-gray-500 pr-2"},null,-1),H={class:"text-gray-900 ml-2"},I={__name:"Index",props:{users:Object,history:Object},setup(L){function c(t){return n(t).format("DD MMM Y")}function d(t){return n(t).format("HH:mm")}function m(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,_)=>(r(),p(f,{title:"Riwayat",name:"Riwayat",desc:"Lorem ipsum dolor sit amet"},{default:o(()=>[e("div",y,[e("ul",w,[(r(!0),i(x,null,u(t.$page.props.history,s=>(r(),i("li",null,[l(g(h),{"preserve-scroll":"",href:t.route("history.show",s),class:"block hover:bg-primary-50"},{default:o(()=>[e("div",k,[e("div",j,[e("p",B,a(s.category),1),e("div",D,[e("p",{class:b(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.status_id==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},a(s.status),3)])]),e("div",F,[e("div",M,[e("p",R," Rp "+a(m(s.amount)),1)]),e("div",$,[C,e("p",null,a(c(s.created_at)),1),e("p",H,a(d(s.created_at)),1)])])])]),_:2},1032,["href"])]))),256))])]),l(v)]),_:1}))}};export{I as default};

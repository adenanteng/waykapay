import"./moment.305a3552.js";import{e as c,h as p,F as u,o as s,a as e,t as l,c as i,f}from"./app.df14e751.js";import g from"./FormatEmoney.cb527b0c.js";import h from"./FormatPulsa.2a72e47d.js";import x from"./FormatVoucher.7e04b333.js";import y from"./FormatGames.3ea07d00.js";import v from"./FormatTV.5475a7c7.js";import k from"./FormatPln.96f76303.js";const b={class:"text-gray-900 text-sm font-medium mx-5 mt-5 mb-2"},$={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},w={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},B={class:"relative px-6 py-5 flex items-center space-x-3"},S={class:"flex-shrink-0"},F=["src"],L={class:"flex-1 min-w-0"},N={class:"focus:outline-none text-left"},V=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),j={class:"text-sm font-medium text-gray-900"},C={class:"text-sm text-gray-500 truncate"},H={__name:"PriceList",props:{list:Object,slug:String,title:String},setup(d){const t=d;function _(n){return n.slice().sort(function(a,o){return a.price-o.price})}return(n,a)=>(s(!0),c(u,null,p(t.list,(o,m)=>(s(),c("div",null,[e("h3",b,l(t.title)+" "+l(m),1),e("div",$,[e("ul",w,[(s(!0),c(u,null,p(_(o),r=>(s(),c("li",null,[e("div",B,[e("div",S,[e("img",{class:"h-6",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,F)]),e("div",L,[e("div",N,[V,e("p",j,l(r.product_name),1),e("p",C,[t.slug=="pulsa"?(s(),i(h,{key:0,price:r.price},null,8,["price"])):t.slug=="emoney"?(s(),i(g,{key:1,price:r.price},null,8,["price"])):t.slug=="voucher"?(s(),i(x,{key:2,price:r.price},null,8,["price"])):t.slug=="games"?(s(),i(y,{key:3,price:r.price},null,8,["price"])):t.slug=="tv"?(s(),i(v,{key:4,price:r.price},null,8,["price"])):t.slug=="pln"?(s(),i(k,{key:5,price:r.price},null,8,["price"])):f("",!0)])])])])]))),256))])])]))),256))}};export{H as default};

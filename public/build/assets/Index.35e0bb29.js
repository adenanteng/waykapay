import{_ as v}from"./AppLayout.30bae21b.js";import{q as b,O as c,s as y,c as w,w as u,o as s,e as r,F as o,h as m,a as t,b as k,n as d,g as l,t as a,f as h,u as j,j as B}from"./app.db06b18a.js";import{h as D}from"./moment.9709ab41.js";import"./vue3-lottie.es.6f1f1e5d.js";import"./helper.57392c82.js";import"./DarkmodeToggle.75c3e2f7.js";import"./label.ffa20866.js";import"./focus-management.e84dd9cb.js";const M={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},N={class:"px-4 py-4 sm:px-6"},V=t("div",{class:"flex items-center justify-between"},[t("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),t("div",{class:"ml-2 flex-shrink-0 flex"},[t("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),C=t("div",{class:"mt-2 sm:flex sm:justify-between"},[t("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),F=[V,C],I={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},R={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},T={class:"px-4 py-4 sm:px-6"},H={class:"flex items-center justify-between"},L={class:"ml-2 flex-shrink-0 flex"},O={class:"flex justify-between"},S={class:"flex"},$=t("br",null,null,-1),J={__name:"Index",props:{transaction:void 0},setup(_){const p=_;b(()=>{console.log("history"),c.reload({only:["transaction"]})}),y(()=>{clearInterval(x)});const x=setInterval(()=>{console.log("interval"),c.reload({only:["transaction"]})},1e4);function f(n){return D(n).format("DD MMM Y HH:mm")}function i(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(n,g)=>(s(),w(v,{title:"Riwayat Transaksi",name:"Riwayat Transaksi",desc:"Lorem ipsum dolor sit amet"},{default:u(()=>[p.transaction===void 0?(s(),r("div",M,[(s(),r(o,null,m(4,e=>t("div",N,F)),64))])):(s(),r("div",I,[t("ul",R,[(s(!0),r(o,null,m(n.$page.props.transaction,e=>(s(),r("li",{key:e.id},[k(j(B),{"preserve-scroll":"",href:n.route("history.show",e),class:"block hover:bg-primary-50"},{default:u(()=>[t("div",T,[t("div",H,[t("p",{class:d(["font-medium truncate uppercase",e.status_id==1||e.status_id==2?"text-primary-600":"text-gray-500"])},[l(a(e.product_name)+" ",1),e.virtual_account?(s(),r(o,{key:0},[l(a(e.virtual_account.bank),1)],64)):e.wallet_account?(s(),r(o,{key:1},[l(a(e.wallet_account.bank),1)],64)):h("",!0)],2),t("div",L,[t("p",{class:d(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",e.status_id==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},a(e.status),3)])]),t("div",O,[t("div",S,[t("p",{class:d(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},[l(" ("+a(e.user.id)+") "+a(e.user.name)+" ",1),$,l(" "+a(e.category_id==1?"+":"-")+" Rp "+a(e.category_id==1?i(e.amount):i(e.gross_amount)),1)],2)]),t("div",{class:d(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},a(f(e.updated_at)),3)])])]),_:2},1032,["href"])]))),128))])]))]),_:1}))}};export{J as default};
import{_ as x}from"./AppLayout.07f189c3.js";import{q as g,O as b,c as v,w as c,o as s,e as r,F as d,h as u,a as t,b as w,n as o,g as l,t as a,f as k,u as y,j as h}from"./app.95edcb59.js";import{h as j}from"./moment.9709ab41.js";import"./vue3-lottie.es.4ee6e3f1.js";import"./Banner.8a741325.js";import"./DarkmodeToggle.65022e3c.js";import"./helper.e9fc3b37.js";import"./label.04e5b9a3.js";import"./focus-management.e1a1c033.js";const B={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},D={class:"px-4 py-4 sm:px-6"},M=t("div",{class:"flex items-center justify-between"},[t("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),t("div",{class:"ml-2 flex-shrink-0 flex"},[t("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),N=t("div",{class:"mt-2 sm:flex sm:justify-between"},[t("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),V=[M,N],C={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},F={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},R={class:"px-4 py-4 sm:px-6"},T={class:"flex items-center justify-between"},H={class:"ml-2 flex-shrink-0 flex"},L={class:"flex justify-between"},O={class:"flex"},S=t("br",null,null,-1),J={__name:"Index",props:{transaction:void 0},setup(m){const _=m;g(()=>{b.reload({only:["transaction"]})});function p(n){return j(n).format("DD MMM Y HH:mm")}function i(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(n,f)=>(s(),v(x,{title:"Riwayat Transaksi",name:"Riwayat Transaksi",desc:"Lorem ipsum dolor sit amet"},{default:c(()=>[_.transaction===void 0?(s(),r("div",B,[(s(),r(d,null,u(4,e=>t("div",D,V)),64))])):(s(),r("div",C,[t("ul",F,[(s(!0),r(d,null,u(n.$page.props.transaction,e=>(s(),r("li",{key:e.id},[w(y(h),{"preserve-scroll":"",href:n.route("history.show",e),class:"block hover:bg-primary-50"},{default:c(()=>[t("div",R,[t("div",T,[t("p",{class:o(["font-medium truncate uppercase",e.status_id==1||e.status_id==2?"text-primary-600":"text-gray-500"])},[l(a(e.product_name)+" ",1),e.virtual_account?(s(),r(d,{key:0},[l(a(e.virtual_account.bank),1)],64)):e.wallet_account?(s(),r(d,{key:1},[l(a(e.wallet_account.bank),1)],64)):k("",!0)],2),t("div",H,[t("p",{class:o(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",e.color])},a(e.status),3)])]),t("div",L,[t("div",O,[t("p",{class:o(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},[l(" ("+a(e.user.id)+") "+a(e.user.name)+" ",1),S,l(" "+a(e.category_id==1?"+":"-")+" Rp "+a(e.category_id==1?i(e.amount):i(e.gross_amount)),1)],2)]),t("div",{class:o(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},a(p(e.updated_at)),3)])])]),_:2},1032,["href"])]))),128))])]))]),_:1}))}};export{J as default};

import{_ as x}from"./AppLayout.9defc0f1.js";import{q as g,O as v,c as b,w as c,o as s,e as r,F as d,h as u,a as t,b as k,n as o,g as l,t as a,f as y,u as w,j as h}from"./app.d165525e.js";import{h as j}from"./moment.9709ab41.js";import"./vue3-lottie.es.48344b90.js";import"./Banner.ca99a709.js";import"./DarkmodeToggle.03f73712.js";import"./helper.e9fc3b37.js";import"./label.f08ef1a6.js";import"./focus-management.f51fb033.js";const B={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},D={class:"px-4 py-4 sm:px-6"},M=t("div",{class:"flex items-center justify-between"},[t("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),t("div",{class:"ml-2 flex-shrink-0 flex"},[t("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),N=t("div",{class:"mt-2 sm:flex sm:justify-between"},[t("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),V=[M,N],C={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},F={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},R={class:"px-4 py-4 sm:px-6"},T={class:"flex items-center justify-between"},$={class:"ml-2 flex-shrink-0 flex"},H={class:"flex items-end"},L={class:"font-medium text-gray-900"},O={class:"text-sm text-gray-900 ml-2"},S={class:"flex justify-between"},q={class:"flex"},Q={__name:"Index",props:{transaction:void 0},setup(m){const _=m;g(()=>{v.reload({only:["transaction"]})});function p(n){return j(n).format("DD MMM Y HH:mm")}function i(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(n,f)=>(s(),b(x,{title:"Riwayat Transaksi",name:"Riwayat Transaksi",desc:"Lorem ipsum dolor sit amet"},{default:c(()=>[_.transaction===void 0?(s(),r("div",B,[(s(),r(d,null,u(4,e=>t("div",D,V)),64))])):(s(),r("div",C,[t("ul",F,[(s(!0),r(d,null,u(n.$page.props.transaction,e=>(s(),r("li",{key:e.id},[k(w(h),{"preserve-scroll":"",href:n.route("history.show",e.order_id),class:"block hover:bg-primary-50"},{default:c(()=>[t("div",R,[t("div",T,[t("p",{class:o(["font-medium truncate uppercase",e.status_id==1||e.status_id==2?"text-primary-600":"text-gray-500"])},[l(a(e.product_name)+" ",1),e.virtual_account?(s(),r(d,{key:0},[l(a(e.virtual_account.bank),1)],64)):e.wallet_account?(s(),r(d,{key:1},[l(a(e.wallet_account.bank),1)],64)):e.money_transfer?(s(),r(d,{key:2},[l(" ke "+a(e.money_transfer.to.name)+" ",1)],64)):y("",!0)],2),t("div",$,[t("p",{class:o(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",e.color])},a(e.status),3)])]),t("div",H,[t("p",L,a(e.user.name),1),t("p",O,"#"+a(e.user.slug),1)]),t("div",S,[t("div",q,[t("p",{class:o(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},a(e.category_id==1||e.user_id!=n.$page.props.user.id?"+":"-")+" Rp "+a(e.category_id==1?i(e.amount):i(e.gross_amount)),3)]),t("div",{class:o(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},a(p(e.created_at)),3)])])]),_:2},1032,["href"])]))),128))])]))]),_:1}))}};export{Q as default};

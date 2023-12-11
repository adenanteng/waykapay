import{_ as B}from"./AppLayout.e049fd64.js";import{o as s,e as n,a as e,f as k,g as l,t as a,n as c,F as r,q as j,O as h,s as S,d as N,B as R,c as I,w,h as x,b as f,u as C,j as D}from"./app.23ae28a0.js";import{_ as H}from"./MobileMenu.dd2f6581.js";import{h as M}from"./moment.9709ab41.js";import"./OnlineStatus.d9f7b284.js";import"./index.3066e2b2.js";import"./DarkmodeToggle.25538166.js";import"./label.030abf97.js";import"./focus-management.6d2a912f.js";const O={key:0,class:"-ml-1 mr-1.5 h-2 w-2 opacity-50",fill:"currentColor",viewBox:"0 0 8 8"},V=e("circle",{cx:"4",cy:"4",r:"3"},null,-1),F=[V],U=e("template",null,[e("div",{class:"bg-green-100 text-green-800"}),e("div",{class:"bg-amber-100 text-amber-800"}),e("div",{class:"bg-red-100 text-red-800"}),e("div",{class:"bg-gray-100 text-gray-800"})],-1),E={__name:"Badge",props:{name:String|Number,class:{type:String,default:"bg-primary-100 text-primary-800"},dot:{type:Boolean,default:!1}},setup(d){const i=d;return(p,g)=>(s(),n(r,null,[e("span",{class:c(["inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",i.class])},[d.dot?(s(),n("svg",O,F)):k("",!0),l(" "+a(d.name),1)],2),U],64))}},J={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},q={class:"flex w-full items-center justify-between space-x-6 p-6"},z={class:"flex-1 truncate"},K=e("p",{class:"mt-1 truncate text-sm text-gray-500"},"Total transaksi",-1),L={class:"truncate text-sm font-medium text-gray-900"},P=e("span",{class:"truncate text-xs text-gray-500"},"bulan ini",-1),T={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},Y={class:"flex w-0 flex-1"},A={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},G=e("i",{class:"fa-duotone fa-down text-primary-400"},null,-1),Q={class:"ml-3"},W=e("div",{class:"text-xs text-gray-500"},"Uang masuk",-1),X={class:"text-sm font-medium text-gray-700"},Z={class:"-ml-px flex w-0 flex-1"},ee={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},te=e("i",{class:"fa-duotone fa-up text-amber-400"},null,-1),se={class:"ml-3"},ae=e("div",{class:"text-xs text-gray-500"},"Uang Keluar",-1),ne={class:"text-sm font-medium text-gray-700"},re={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},oe={class:"px-4 py-4 sm:px-6"},le=e("div",{class:"flex items-center justify-between"},[e("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),e("div",{class:"ml-2 flex-shrink-0 flex"},[e("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),ie=e("div",{class:"sm:flex sm:justify-between"},[e("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),de=[le,ie],ce={key:1,class:""},ue={class:"text-sm text-gray-900 font-medium ml-5 mt-5 mb-1 flex items-center"},_e={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},me={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},xe={class:"px-4 py-4 sm:px-6"},fe={class:"flex items-center justify-between"},pe={class:"ml-2 flex-shrink-0 flex"},ge={class:"flex justify-between"},ye={class:"flex"},ve=e("div",{class:"px-4 py-4 sm:px-6 text-center text-gray-900 text-sm"}," Eits, udah mentok hehe ",-1),Re={__name:"Index",props:{history:void 0,in_count:void 0,out_count:void 0,all_process:void 0},setup(d){var y;const i=d;j(()=>{h.reload({only:["history","in_count","out_count","all_process"]})}),S(()=>{clearInterval(p)});const p=setInterval(()=>{console.log("interval"),h.reload({only:["history","in_count","out_count","all_process"]})},1e4);function g(o){return M(o).format("DD MMM Y HH:mm")}function u(o){return(o/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}if(typeof window<"u"){const o=N((y=JSON.parse(localStorage.getItem("tabHistory")))!=null?y:2);R(o,_=>{console.log(`tab is ${_}`),localStorage.setItem("tabHistory",JSON.stringify(_))})}return(o,_)=>(s(),I(B,{title:"Riwayat",name:"Riwayat",desc:"Riwayat transaksi kamu"},{default:w(()=>{var v,b;return[e("div",J,[e("div",q,[e("div",z,[K,e("h3",L,[l(a(i.all_process)+" ",1),P])])]),e("div",null,[e("div",T,[e("div",Y,[e("div",A,[G,e("div",Q,[W,e("div",X,"Rp "+a(u((v=i.in_count)!=null?v:0)),1)])])]),e("div",Z,[e("div",ee,[te,e("div",se,[ae,e("div",ne,"Rp "+a(u((b=i.out_count)!=null?b:0)),1)])])])])])]),i.history===void 0?(s(),n("div",re,[(s(),n(r,null,x(4,m=>e("div",oe,de)),64))])):(s(),n("div",ce,[(s(!0),n(r,null,x(i.history,(m,$)=>(s(),n(r,null,[e("h3",ue,[l(a($)+" ",1),f(E,{name:m.length+" transaksi",class:"ml-3 text-xs text-primary-600 bg-primary-100"},null,8,["name"])]),e("div",_e,[e("ul",me,[(s(!0),n(r,null,x(m,t=>(s(),n("li",{key:t.id},[f(C(D),{href:o.route("history.show",t.order_id),class:"block hover:bg-primary-50"},{default:w(()=>[e("div",xe,[e("div",fe,[e("p",{class:c(["font-medium truncate uppercase",t.status_id==1||t.status_id==2?"text-primary-600":"text-gray-500"])},[l(a(t.product_name)+" ",1),t.virtual_account?(s(),n(r,{key:0},[l(a(t.virtual_account.bank),1)],64)):t.wallet_account?(s(),n(r,{key:1},[l(a(t.wallet_account.bank),1)],64)):t.money_transfer?(s(),n(r,{key:2},[t.user_id==o.$page.props.user.id?(s(),n(r,{key:0},[l(" ke "+a(t.money_transfer.to.name),1)],64)):(s(),n(r,{key:1},[l(" dari "+a(t.user.name),1)],64))],64)):k("",!0)],2),e("div",pe,[e("p",{class:c(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.color])},a(t.status),3)])]),e("div",ge,[e("div",ye,[e("p",{class:c(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},a(t.category_id==1||t.user_id!=o.$page.props.user.id?"+":"-")+" Rp "+a(t.category_id==1?u(t.amount):u(t.gross_amount)),3)]),e("div",{class:c(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},a(g(t.created_at)),3)])])]),_:2},1032,["href"])]))),128))])])],64))),256)),ve])),f(H)]}),_:1}))}};export{Re as default};

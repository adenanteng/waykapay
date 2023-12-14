import{_ as w}from"./AppLayout-9034de9e.js";import{o as s,e as n,a as e,f as b,g as l,t as a,n as c,F as r,z as k,O as y,J as $,d as B,s as S,c as j,w as v,h as x,b as f,u as N,m as R}from"./app-6562de8f.js";import{_ as I}from"./MobileMenu-8777720c.js";import{h as C}from"./moment-fbc5633a.js";import"./OnlineStatus-c2b23f88.js";import"./index-71223d7c.js";import"./DarkmodeToggle-cc16ee50.js";import"./use-controllable-4997c733.js";import"./focus-management-e9ac5d0f.js";const D={key:0,class:"-ml-1 mr-1.5 h-2 w-2 opacity-50",fill:"currentColor",viewBox:"0 0 8 8"},H=e("circle",{cx:"4",cy:"4",r:"3"},null,-1),M=[H],O=e("template",null,[e("div",{class:"bg-green-100 text-green-800"}),e("div",{class:"bg-amber-100 text-amber-800"}),e("div",{class:"bg-red-100 text-red-800"}),e("div",{class:"bg-gray-100 text-gray-800"})],-1),V={__name:"Badge",props:{name:String|Number,class:{type:String,default:"bg-primary-100 text-primary-800"},dot:{type:Boolean,default:!1}},setup(d){const i=d;return(p,g)=>(s(),n(r,null,[e("span",{class:c(["inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",i.class])},[d.dot?(s(),n("svg",D,M)):b("",!0),l(" "+a(d.name),1)],2),O],64))}},F={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},J={class:"flex w-full items-center justify-between space-x-6 p-6"},U={class:"flex-1 truncate"},z=e("p",{class:"mt-1 truncate text-sm text-gray-500"},"Bulan ini",-1),E={class:"truncate text-sm font-medium text-gray-900"},K=e("span",{class:"truncate text-xs text-gray-500"},"transaksi sukses",-1),L={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},P={class:"flex w-0 flex-1"},Y={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},q=e("i",{class:"fa-duotone fa-down text-primary-400"},null,-1),A={class:"ml-3"},G=e("div",{class:"text-xs text-gray-500"},"Uang masuk",-1),Q={class:"text-sm font-medium text-gray-700"},T={class:"-ml-px flex w-0 flex-1"},W={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},X=e("i",{class:"fa-duotone fa-up text-amber-400"},null,-1),Z={class:"ml-3"},ee=e("div",{class:"text-xs text-gray-500"},"Uang Keluar",-1),te={class:"text-sm font-medium text-gray-700"},se={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},ae={class:"px-4 py-4 sm:px-6"},ne=e("div",{class:"flex items-center justify-between"},[e("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),e("div",{class:"ml-2 flex-shrink-0 flex"},[e("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),re=e("div",{class:"sm:flex sm:justify-between"},[e("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),oe=[ne,re],le={key:1,class:""},ie={class:"text-sm text-gray-900 font-medium ml-5 mt-5 mb-1 flex items-center"},de={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},ce={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},ue={class:"px-4 py-4 sm:px-6"},_e={class:"flex items-center justify-between"},me={class:"ml-2 flex-shrink-0 flex"},xe={class:"flex justify-between"},fe={class:"flex"},pe=e("div",{class:"px-4 py-4 sm:px-6 text-center text-gray-900 text-sm"}," Eits, udah mentok hehe ",-1),Se={__name:"Index",props:{history:void 0,in_count:void 0,out_count:void 0,all_process:void 0},setup(d){const i=d;k(()=>{y.reload({only:["history","in_count","out_count","all_process"]})}),$(()=>{clearInterval(p)});const p=setInterval(()=>{console.log("interval"),y.reload({only:["history","in_count","out_count","all_process"]})},1e4);function g(o){return C(o).format("DD MMM Y HH:mm")}function u(o){return(o/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}if(typeof window<"u"){const o=B(JSON.parse(localStorage.getItem("tabHistory"))??2);S(o,_=>{console.log(`tab is ${_}`),localStorage.setItem("tabHistory",JSON.stringify(_))})}return(o,_)=>(s(),j(w,{title:"Riwayat",name:"Riwayat",desc:"Riwayat transaksi kamu"},{default:v(()=>[e("div",F,[e("div",J,[e("div",U,[z,e("h3",E,[l(a(i.all_process)+" ",1),K])])]),e("div",null,[e("div",L,[e("div",P,[e("div",Y,[q,e("div",A,[G,e("div",Q,"Rp "+a(u(i.in_count??0)),1)])])]),e("div",T,[e("div",W,[X,e("div",Z,[ee,e("div",te,"Rp "+a(u(i.out_count??0)),1)])])])])])]),i.history===void 0?(s(),n("div",se,[(s(),n(r,null,x(4,m=>e("div",ae,oe)),64))])):(s(),n("div",le,[(s(!0),n(r,null,x(i.history,(m,h)=>(s(),n(r,null,[e("h3",ie,[l(a(h)+" ",1),f(V,{name:m.length+" transaksi",class:"ml-3 text-xs text-primary-600 bg-primary-100"},null,8,["name"])]),e("div",de,[e("ul",ce,[(s(!0),n(r,null,x(m,t=>(s(),n("li",{key:t.id},[f(N(R),{href:o.route("history.show",t.order_id),class:"block hover:bg-primary-50"},{default:v(()=>[e("div",ue,[e("div",_e,[e("p",{class:c(["font-medium truncate uppercase",t.status_id==1||t.status_id==2?"text-primary-600":"text-gray-500"])},[l(a(t.product_name)+" ",1),t.virtual_account?(s(),n(r,{key:0},[l(a(t.virtual_account.bank),1)],64)):t.wallet_account?(s(),n(r,{key:1},[l(a(t.wallet_account.bank),1)],64)):t.money_transfer?(s(),n(r,{key:2},[t.user_id==o.$page.props.user.id?(s(),n(r,{key:0},[l(" ke "+a(t.money_transfer.to.name),1)],64)):(s(),n(r,{key:1},[l(" dari "+a(t.user.name),1)],64))],64)):b("",!0)],2),e("div",me,[e("p",{class:c(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.color])},a(t.status),3)])]),e("div",xe,[e("div",fe,[e("p",{class:c(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},a(t.category_id==1||t.user_id!=o.$page.props.user.id?"+":"-")+" Rp "+a(t.category_id==1?u(t.amount):u(t.gross_amount)),3)]),e("div",{class:c(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},a(g(t.created_at)),3)])])]),_:2},1032,["href"])]))),128))])])],64))),256)),pe])),f(I)]),_:1}))}};export{Se as default};

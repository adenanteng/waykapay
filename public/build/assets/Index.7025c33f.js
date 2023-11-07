import{_ as N}from"./AppLayout.9defc0f1.js";import{o as s,e as a,a as e,f as p,g as n,t as o,n as u,F as d,q as U,O as $,s as C,d as H,B as V,c as R,w as B,b as m,h as j,u as g,j as D}from"./app.d165525e.js";import{_ as M}from"./MobileMenu.9f6197e8.js";import{h as O}from"./moment.9709ab41.js";import{V as S}from"./vue3-lottie.es.48344b90.js";import"./Banner.ca99a709.js";import"./DarkmodeToggle.03f73712.js";import"./helper.e9fc3b37.js";import"./label.f08ef1a6.js";import"./focus-management.f51fb033.js";const F={key:0,class:"-ml-1 mr-1.5 h-2 w-2 opacity-50",fill:"currentColor",viewBox:"0 0 8 8"},L=e("circle",{cx:"4",cy:"4",r:"3"},null,-1),T=[L],z=e("template",null,[e("div",{class:"bg-green-100 text-green-800"}),e("div",{class:"bg-amber-100 text-amber-800"}),e("div",{class:"bg-red-100 text-red-800"}),e("div",{class:"bg-gray-100 text-gray-800"})],-1),I={__name:"Badge",props:{name:String|Number,class:{type:String,default:"bg-primary-100 text-primary-800"},dot:{type:Boolean,default:!1}},setup(l){const c=l;return(f,y)=>(s(),a(d,null,[e("span",{class:u(["inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",c.class])},[l.dot?(s(),a("svg",F,T)):p("",!0),n(" "+o(l.name),1)],2),z],64))}},A={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},J={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},P={class:"flex w-0 flex-1"},q={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},E=e("i",{class:"fa-duotone fa-down text-primary-400"},null,-1),K={class:"ml-3"},Y=e("div",{class:"text-xs text-gray-500"},"Uang masuk",-1),G={class:"text-sm font-medium text-gray-700"},Q={class:"-ml-px flex w-0 flex-1"},W={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},X=e("i",{class:"fa-duotone fa-up text-amber-400"},null,-1),Z={class:"ml-3"},ee=e("div",{class:"text-xs text-gray-500"},"Uang Keluar",-1),te={class:"text-sm font-medium text-gray-700"},se={class:"sticky top-0 z-40 backdrop-blur border-b border-gray-200"},ae={class:"-mb-px flex","aria-label":"Tabs"},oe={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},re={class:"px-4 py-4 sm:px-6"},ne=e("div",{class:"flex items-center justify-between"},[e("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),e("div",{class:"ml-2 flex-shrink-0 flex"},[e("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),le=e("div",{class:"sm:flex sm:justify-between"},[e("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),ie=[ne,le],de={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},ce={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},ue={key:0},me={class:"px-4 py-4 sm:px-6"},_e={class:"flex items-center justify-between"},pe={class:"ml-2 flex-shrink-0 flex"},xe={class:"flex justify-between"},ge={class:"flex"},fe={key:2,class:"px-4 py-4 sm:px-6 text-center text-gray-900"},ye={key:3,class:"px-4 py-4 sm:px-6 text-center text-gray-900"},Ne={__name:"Index",props:{history:void 0,in_count:void 0,out_count:void 0,on_process:void 0,all_process:void 0},setup(l){var b;const c=l;U(()=>{console.log("history"),$.reload({only:["history","in_count","out_count","on_process","all_process"]})}),C(()=>{clearInterval(f)});const f=setInterval(()=>{console.log("interval"),$.reload({only:["history","in_count","out_count","on_process","all_process"]})},1e4);function y(r){return O(r).format("DD MMM Y HH:mm")}function x(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const i=H((b=JSON.parse(localStorage.getItem("tabHistory")))!=null?b:2);return V(i,r=>{console.log(`tab is ${r}`),localStorage.setItem("tabHistory",JSON.stringify(r))}),(r,_)=>(s(),R(N,{title:"Riwayat",name:"Riwayat",desc:"Lorem ipsum dolor sit amet"},{default:B(()=>{var v,h,k,w;return[e("div",A,[e("div",null,[e("div",J,[e("div",P,[e("div",q,[E,e("div",K,[Y,e("div",G,"Rp "+o(x((v=c.in_count)!=null?v:0)),1)])])]),e("div",Q,[e("div",W,[X,e("div",Z,[ee,e("div",te,"Rp "+o(x((h=c.out_count)!=null?h:0)),1)])])])])])]),e("div",se,[e("nav",ae,[e("button",{class:u(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",i.value==2?"border-primary-600 text-primary-600":"text-gray-500 border-gray-300"]),onClick:_[0]||(_[0]=t=>i.value=2)},[n(" Proses "),m(I,{class:"ml-1 bg-primary-600 text-white",name:(k=c.on_process)!=null?k:0},null,8,["name"])],2),e("button",{class:u(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",i.value==99?"border-green-600 text-green-600":"text-gray-500 border-gray-300 "]),onClick:_[1]||(_[1]=t=>i.value=99)},[n(" Semua "),m(I,{class:"ml-1 bg-green-600 text-white",name:(w=c.all_process)!=null?w:0},null,8,["name"])],2)])]),c.history===void 0?(s(),a("div",oe,[(s(),a(d,null,j(4,t=>e("div",re,ie)),64))])):(s(),a("div",de,[e("ul",ce,[(s(!0),a(d,null,j(r.$page.props.history,t=>(s(),a(d,{key:t.id},[t.status_id==i.value||i.value==99?(s(),a("li",ue,[m(g(D),{"preserve-scroll":"",href:r.route("history.show",t.order_id),class:"block hover:bg-primary-50"},{default:B(()=>[e("div",me,[e("div",_e,[e("p",{class:u(["font-medium truncate uppercase",t.status_id==1||t.status_id==2?"text-primary-600":"text-gray-500"])},[n(o(t.product_name)+" ",1),t.virtual_account?(s(),a(d,{key:0},[n(o(t.virtual_account.bank),1)],64)):t.wallet_account?(s(),a(d,{key:1},[n(o(t.wallet_account.bank),1)],64)):t.money_transfer?(s(),a(d,{key:2},[t.user_id==r.$page.props.user.id?(s(),a(d,{key:0},[n(" ke "+o(t.money_transfer.to.name),1)],64)):(s(),a(d,{key:1},[n(" dari "+o(t.user.name),1)],64))],64)):p("",!0)],2),e("div",pe,[e("p",{class:u(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.color])},o(t.status),3)])]),e("div",xe,[e("div",ge,[e("p",{class:u(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},o(t.category_id==1||t.user_id!=r.$page.props.user.id?"+":"-")+" Rp "+o(t.category_id==1?x(t.amount):x(t.gross_amount)),3)]),e("div",{class:u(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},o(y(t.created_at)),3)])])]),_:2},1032,["href"])])):p("",!0)],64))),128))])])),!l.on_process&&l.on_process!==void 0&&i.value==2?(s(),a("div",fe,[m(g(S),{"animation-link":"https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json",height:200,width:200}),n(" Tidak ada transaksi ")])):p("",!0),!l.all_process&&l.all_process!==void 0&&i.value==99?(s(),a("div",ye,[m(g(S),{"animation-link":"https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json",height:200,width:200}),n(" Tidak ada transaksi ")])):p("",!0),m(M)]}),_:1}))}};export{Ne as default};
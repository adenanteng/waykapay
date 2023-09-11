import{_ as N}from"./AppLayout.8632757d.js";import{o as s,e as a,f as x,g as l,t as o,n as c,a as e,q as U,O as B,s as C,d as H,A as V,c as R,w as $,b as u,F as _,h as j,u as g,j as D}from"./app.0adbf25c.js";import{_ as M}from"./MobileMenu.0a55d99a.js";import{h as O}from"./moment.9709ab41.js";import{V as S}from"./vue3-lottie.es.a26766eb.js";import"./helper.d39254bb.js";import"./DarkmodeToggle.dbfe7001.js";import"./label.0006ead4.js";import"./focus-management.68055148.js";const A={key:0,class:"-ml-1 mr-1.5 h-2 w-2 opacity-50",fill:"currentColor",viewBox:"0 0 8 8"},F=e("circle",{cx:"4",cy:"4",r:"3"},null,-1),L=[F],I={__name:"Badge",props:{name:String|Number,class:{type:String,default:"bg-primary-100 text-primary-800"},dot:{type:Boolean,default:!1}},setup(i){const d=i;return(f,y)=>(s(),a("span",{class:c(["inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",d.class])},[i.dot?(s(),a("svg",A,L)):x("",!0),l(" "+o(i.name),1)],2))}},T={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},z={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},J={class:"flex w-0 flex-1"},P={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},q=e("i",{class:"fa-duotone fa-down text-primary-400"},null,-1),E={class:"ml-3"},K=e("div",{class:"text-xs text-gray-500"},"Uang masuk",-1),Y={class:"text-sm font-medium text-gray-700"},G={class:"-ml-px flex w-0 flex-1"},Q={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},W=e("i",{class:"fa-duotone fa-up text-amber-400"},null,-1),X={class:"ml-3"},Z=e("div",{class:"text-xs text-gray-500"},"Uang Keluar",-1),ee={class:"text-sm font-medium text-gray-700"},te={class:"sticky top-0 z-40 backdrop-blur border-b border-gray-200"},se={class:"-mb-px flex","aria-label":"Tabs"},ae={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},oe={class:"px-4 py-4 sm:px-6"},re=e("div",{class:"flex items-center justify-between"},[e("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),e("div",{class:"ml-2 flex-shrink-0 flex"},[e("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),ne=e("div",{class:"mt-2 sm:flex sm:justify-between"},[e("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),ie=[re,ne],le={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},de={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},ce={key:0},ue={class:"px-4 py-4 sm:px-6"},me={class:"flex items-center justify-between"},_e={class:"ml-2 flex-shrink-0 flex"},xe={class:"mt-2 flex justify-between"},pe={class:"flex"},ge={key:2,class:"px-4 py-4 sm:px-6 text-center text-gray-900"},fe={key:3,class:"px-4 py-4 sm:px-6 text-center text-gray-900"},Se={__name:"Index",props:{history:void 0,in_count:void 0,out_count:void 0,on_process:void 0,all_process:void 0},setup(i){var b;const d=i;U(()=>{console.log("history"),B.reload({only:["history","in_count","out_count","on_process","all_process"]})}),C(()=>{clearInterval(f)});const f=setInterval(()=>{console.log("interval"),B.reload({only:["history","in_count","out_count","on_process","all_process"]})},1e4);function y(n){return O(n).format("DD MMM Y HH:mm")}function p(n){return(n/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const r=H((b=JSON.parse(localStorage.getItem("tabHistory")))!=null?b:2);return V(r,n=>{console.log(`tab is ${n}`),localStorage.setItem("tabHistory",JSON.stringify(n))}),(n,m)=>(s(),R(N,{title:"Riwayat",name:"Riwayat",desc:"Lorem ipsum dolor sit amet"},{default:$(()=>{var v,h,k,w;return[e("div",T,[e("div",null,[e("div",z,[e("div",J,[e("div",P,[q,e("div",E,[K,e("div",Y,"Rp "+o(p((v=d.in_count)!=null?v:0)),1)])])]),e("div",G,[e("div",Q,[W,e("div",X,[Z,e("div",ee,"Rp "+o(p((h=d.out_count)!=null?h:0)),1)])])])])])]),e("div",te,[e("nav",se,[e("button",{class:c(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",r.value==2?"border-primary-600 text-primary-600":"text-gray-500 border-gray-300"]),onClick:m[0]||(m[0]=t=>r.value=2)},[l(" Proses "),u(I,{class:"ml-1 bg-primary-600 text-white",name:(k=d.on_process)!=null?k:0},null,8,["name"])],2),e("button",{class:c(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",r.value==99?"border-green-600 text-green-600":"text-gray-500 border-gray-300 "]),onClick:m[1]||(m[1]=t=>r.value=99)},[l(" Semua "),u(I,{class:"ml-1 bg-green-600 text-white",name:(w=d.all_process)!=null?w:0},null,8,["name"])],2)])]),d.history===void 0?(s(),a("div",ae,[(s(),a(_,null,j(4,t=>e("div",oe,ie)),64))])):(s(),a("div",le,[e("ul",de,[(s(!0),a(_,null,j(n.$page.props.history,t=>(s(),a(_,{key:t.id},[t.status_id==r.value||r.value==99?(s(),a("li",ce,[u(g(D),{"preserve-scroll":"",href:n.route("history.show",t),class:"block hover:bg-primary-50"},{default:$(()=>[e("div",ue,[e("div",me,[e("p",{class:c(["font-medium truncate uppercase",t.status_id==1||t.status_id==2?"text-primary-600":"text-gray-500"])},[l(o(t.product_name)+" ",1),t.virtual_account?(s(),a(_,{key:0},[l(o(t.virtual_account.bank),1)],64)):t.wallet_account?(s(),a(_,{key:1},[l(o(t.wallet_account.bank),1)],64)):x("",!0)],2),e("div",_e,[e("p",{class:c(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.status_id==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},o(t.status),3)])]),e("div",xe,[e("div",pe,[e("p",{class:c(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},o(t.category_id==1?"+":"-")+" Rp "+o(t.category_id==1?p(t.amount):p(t.gross_amount)),3)]),e("div",{class:c(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},o(y(t.updated_at)),3)])])]),_:2},1032,["href"])])):x("",!0)],64))),128))])])),!i.on_process&&i.on_process!==void 0&&r.value==2?(s(),a("div",ge,[u(g(S),{"animation-link":"https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json",height:200,width:200}),l(" Tidak ada transaksi ")])):x("",!0),!i.history&&!0&&r.value==99?(s(),a("div",fe,[u(g(S),{"animation-link":"https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json",height:200,width:200}),l(" Tidak ada transaksi ")])):x("",!0),u(M)]}),_:1}))}};export{Se as default};

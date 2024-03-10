import{_ as j}from"./AppLayout-wh16ubAy.js";import{z as B,O as f,D as E,k as R,d as $,p as D,o as s,c as M,w as y,Q as P,a as e,g as o,t as n,e as a,F as i,h as x,b as g,n as c,f as S,u as m,j as V,H as U}from"./app-CaR_YMvJ.js";import{_ as C}from"./MobileMenu-DOd80Kum.js";import{h as H}from"./moment-Cl4UOzQZ.js";import{V as N}from"./vue3-lottie.es-aHRfLCRM.js";import{P as z,E as F}from"./echo-Bm584l7I.js";import"./OnlineStatus-CYP1rC9a.js";import"./DarkmodeToggle-BNYDvKZr.js";import"./helper-Dp3OpoYX.js";import"./form-Dc54o-7j.js";import"./use-resolve-button-type-Zm-aivJ0.js";import"./vue3-otp-input.esm-MqEmeBIT.js";import"./DialogModal-B_9Q7Wv1.js";import"./PrimaryButton-XpxRpvCD.js";import"./InputError-Br9kkj1v.js";import"./BackgroundParticle-BaXRgoMO.js";import"./calculate-active-index-cUslAxhD.js";import"./focus-management-C733IxTb.js";const I={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300"},L={class:"flex w-full items-center justify-between space-x-6 p-6"},O={class:"flex-1 truncate"},A=e("p",{class:"mt-1 truncate text-sm text-gray-500"},"Bulan ini",-1),K={class:"truncate text-sm font-medium text-gray-900"},T=e("span",{class:"truncate text-xs text-gray-500"},"transaksi sukses",-1),Q={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},Y={class:"flex w-0 flex-1"},q={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},G=e("i",{class:"fa-duotone fa-down text-primary-400"},null,-1),J={class:"ml-3"},W=e("div",{class:"text-xs text-gray-500"},"Uang Masuk",-1),X={class:"text-sm font-medium text-gray-700"},Z={class:"-ml-px flex w-0 flex-1"},ee={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},te=e("i",{class:"fa-duotone fa-up text-amber-400"},null,-1),se={class:"ml-3"},ae=e("div",{class:"text-xs text-gray-500"},"Uang Keluar",-1),ne={class:"text-sm font-medium text-gray-700"},oe={key:0,class:"animate-pulse rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y divide-gray-300"},le={class:"px-4 py-4 sm:px-6"},ie=e("div",{class:"flex items-center justify-between"},[e("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),e("div",{class:"ml-2 flex-shrink-0 flex"},[e("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),re=e("div",{class:"sm:flex sm:justify-between"},[e("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),ce=[ie,re],de={key:1,class:""},ue={class:"text-sm text-gray-500 font-medium ml-5 mt-5 mb-1 flex items-center"},_e={class:"rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300"},me={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},pe={class:"px-4 py-4 sm:px-6 flex gap-3"},fe={key:0,class:"flex justify-center items-center text-center"},xe={key:1,class:""},ge={key:2,class:""},ve={key:3,class:""},ye=["src"],be=["src"],he={class:"flex-1"},we={class:"flex items-center justify-between"},ke={class:"ml-2 flex-shrink-0 flex"},je={class:"flex justify-between"},Be={class:"flex"},Ee={class:"mt-10"},Re={class:"text-sm text-center text-gray-600 mb-5"},$e=e("i",{class:"fa-regular fa-angle-down animate-bounce mt-1"},null,-1),De={key:1,class:"px-4 py-4 sm:px-6 text-center text-gray-900 text-sm"},qe={__name:"Index",props:{history:void 0,in_count:void 0,out_count:void 0,all_process:void 0,filters:{type:Object,default:()=>({})}},setup(b){const d=b;B(()=>{f.reload({only:["history","history_count","in_count","out_count","all_process","filters"]})}),E(()=>{window.Echo.leave("transaction-channel")});function h(l){return H(l).format("DD MMM Y HH:mm")}function _(l){return(l/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const{...w}=R(()=>P().props.user).value;typeof window<"u"&&(window.Pusher=z,window.Echo=new F({broadcaster:"pusher",key:"e4c42e8e3951c6ee37f6",cluster:"ap1",forceTLS:!0}),window.Echo.channel("transaction-channel").listen(".transaction-event",function(r){r.action==="reload"&&r.user===w.slug?(f.reload({only:["history","in_count","out_count","all_process"]}),console.log(r.action,r.user)):console.log(r)}));let u=$(d.filters.filterPaginate??20);return D([u],([l])=>{f.get(route("history.index"),{filter_paginate:l},{preserveState:!0,preserveScroll:!0,replace:!0,only:["history","history_count","in_count","out_count","all_process","filters"]})}),(l,r)=>(s(),M(j,{title:"Riwayat",name:"Riwayat",desc:"Riwayat transaksi kamu"},{default:y(()=>[e("div",I,[e("div",L,[e("div",O,[A,e("h3",K,[o(n(d.all_process)+" ",1),T])])]),e("div",null,[e("div",Q,[e("div",Y,[e("div",q,[G,e("div",J,[W,e("div",X,"Rp "+n(_(d.in_count??0)),1)])])]),e("div",Z,[e("div",ee,[te,e("div",se,[ae,e("div",ne,"Rp "+n(_(d.out_count??0)),1)])])])])])]),d.history===void 0?(s(),a("div",oe,[(s(),a(i,null,x(6,p=>e("div",le,ce)),64))])):(s(),a("div",de,[(s(!0),a(i,null,x(d.history,(p,k)=>(s(),a(i,null,[e("h3",ue,n(k),1),e("div",_e,[e("ul",me,[(s(!0),a(i,null,x(p,t=>(s(),a("li",{key:t.id},[g(m(V),{href:l.route("history.show",t.order_id),class:"block hover:bg-primary-50"},{default:y(()=>{var v;return[e("div",pe,[t.product_name==="Deposit"?(s(),a("div",fe,[e("i",{class:c(["fa-duotone fa-sack-dollar text-3xl w-8",t.status_id==1||t.status_id==2?"text-green-600":"text-gray-500"])},null,2)])):t.product_name==="Kirim uang"?(s(),a("div",xe,[e("i",{class:c(["fa-duotone fa-messages-dollar text-2xl w-8",t.status_id==1||t.status_id==2?"text-green-600":"text-gray-500"])},null,2)])):t.brand===null?(s(),a("div",ge,[e("i",{class:c(["fa-regular fa-wallet text-3xl w-8",t.status_id==1||t.status_id==2?"text-primary-600":"text-gray-500"])},null,2)])):(s(),a("div",ve,[e("img",{src:"/img/vendor/"+t.brand+".svg",class:c(["w-8",t.status_id==1||t.status_id==2?"":"grayscale"]),alt:""},null,10,ye),e("img",{src:"/img/vendor/"+t.brand+".png",class:c(["w-8",t.status_id==1||t.status_id==2?"":"grayscale"]),alt:""},null,10,be)])),e("div",he,[e("div",we,[e("p",{class:c(["text-sm font-medium truncate capitalize",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},[o(n(t.product_name.replaceAll("-"," "))+" ",1),t.virtual_account?(s(),a(i,{key:0},[o(n(t.virtual_account.bank),1)],64)):t.wallet_account?(s(),a(i,{key:1},[o(n(t.wallet_account.bank),1)],64)):t.offline_account?(s(),a(i,{key:2},[o(n(t.offline_account.bank),1)],64)):t.manual_account?(s(),a(i,{key:3},[o(n(t.manual_account.bank),1)],64)):t.money_transfer?(s(),a(i,{key:4},[t.user_id==l.$page.props.user.id?(s(),a(i,{key:0},[o(" ke "+n((v=t.money_transfer)==null?void 0:v.to_name),1)],64)):(s(),a(i,{key:1},[o(" dari "+n(t.user.name),1)],64))],64)):S("",!0)],2),e("div",ke,[e("p",{class:c(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.color])},n(t.status),3)])]),e("div",je,[e("div",Be,[e("p",{class:c(["flex items-center text-xs",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},n(t.category_id==1||t.user_id!=l.$page.props.user.id?"+":"-")+" Rp "+n(t.category_id==1?_(t.amount):_(t.gross_amount)),3)]),e("div",{class:c(["flex items-center text-xs",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},n(h(t.created_at)),3)])])])]}),_:2},1032,["href"])]))),128))])])],64))),256)),e("div",Ee,[e("div",Re,[o(" Menampilkan "),e("strong",null,n(m(u)),1),o(" dari "),e("strong",null,n(l.$page.props.history_count),1),o(" hasil ")]),m(u)<=l.$page.props.history_count?(s(),a("button",{key:0,class:"w-full grid text-gray-900 font-medium",onClick:r[0]||(r[0]=p=>U(u)?u.value+=20:u+=20)},[o(" Selanjutnya "),$e])):(s(),a("div",De,[g(m(N),{"animation-link":"https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json",height:200,width:200}),o(" Eits, udah mentok hehe ")]))])])),g(C)]),_:1}))}};export{qe as default};

import{_ as b}from"./AppLayout.0e55abd2.js";import{q as v,O as y,c as h,w as n,o as t,b as _,a as e,e as r,f as m,g as d,t as a,F as i,h as p,n as c,u as k,j as w}from"./app.d1e9cc57.js";import{_ as j}from"./PrimaryButton.9ef57cd4.js";import{_ as $}from"./PreviousButton.d8f345e8.js";import{m as B}from"./moment.67035f47.js";import"./Banner.7e06da44.js";import"./DarkmodeToggle.af21d446.js";import"./helper.e9fc3b37.js";import"./label.769bf966.js";import"./focus-management.060a9aa7.js";const D={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},M={class:"py-4 px-4 lg:flex lg:items-center lg:justify-between"},N={class:"tracking-tight flex gap-5 items-center"},O={class:""},S=["src","alt"],V={class:""},C={class:"block text-xl font-bold text-gray-900 capitalize"},F={class:"text-sm font-medium ml-2 text-gray-500"},z={class:"block font-semibold text-primary-600"},H={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},R={key:0,class:"animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"},q={class:"px-4 py-4 sm:px-6"},E=e("div",{class:"flex items-center justify-between"},[e("p",{class:"bg-gray-300 text-gray-300 w-full rounded-3xl"},"a"),e("div",{class:"ml-2 flex-shrink-0 flex"},[e("p",{class:"px-2 bg-gray-300 text-gray-300 rounded-full w-20"},"b")])],-1),L=e("div",{class:"sm:flex sm:justify-between"},[e("p",{class:"flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"},"c")],-1),P=[E,L],T={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},U={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},Y={class:"px-4 py-4 sm:px-6"},A={class:"flex items-center justify-between"},G={class:"ml-2 flex-shrink-0 flex"},I={class:"flex justify-between"},J={class:"flex"},oe={__name:"Show",props:{users:Object|String,history:{type:Object,default:()=>({})}},setup(f){const o=f;v(()=>{y.reload({only:["history"]})});function g(l){return B(l).format("DD MMM Y HH:mm")}function u(l){return(l/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(l,x)=>(t(),h(b,{title:o.users.name,name:o.users.name,desc:"lorem ipsum"},{previous:n(()=>[_($)]),default:n(()=>[e("div",D,[e("div",M,[e("div",N,[e("div",O,[o.users.profile_photo_url?(t(),r("img",{key:0,class:"mx-auto h-12 w-12 object-cover rounded-full",src:o.users.profile_photo_url,alt:o.users.name},null,8,S)):m("",!0)]),e("div",V,[e("span",C,[d(a(o.users.name)+" ",1),e("span",F,"#"+a(o.users.slug),1)]),e("span",z," Rp "+a(u(o.users.wallet_balance)),1)])]),e("div",H,[_(j,{as:"a",href:l.route("user.edit",o.users)},{default:n(()=>[d(" Ubah Data ")]),_:1},8,["href"])])])]),o.history===void 0?(t(),r("div",R,[(t(),r(i,null,p(4,s=>e("div",q,P)),64))])):(t(),r("div",T,[e("ul",U,[(t(!0),r(i,null,p(l.$page.props.history,s=>(t(),r("li",null,[_(k(w),{"preserve-scroll":"",href:l.route("history.show",s.order_id),class:"block hover:bg-primary-50"},{default:n(()=>[e("div",Y,[e("div",A,[e("p",{class:c(["font-medium truncate uppercase",s.status_id==1||s.status_id==2?"text-primary-600":"text-gray-500"])},[d(a(s.product_name)+" ",1),s.virtual_account?(t(),r(i,{key:0},[d(a(s.virtual_account.bank),1)],64)):s.wallet_account?(t(),r(i,{key:1},[d(a(s.wallet_account.bank),1)],64)):s.money_transfer?(t(),r(i,{key:2},[s.user_id==l.$page.props.user.id?(t(),r(i,{key:0},[d(" ke "+a(s.money_transfer.to.name),1)],64)):(t(),r(i,{key:1},[d(" dari "+a(s.user.name),1)],64))],64)):m("",!0)],2),e("div",G,[e("p",{class:c(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.color])},a(s.status),3)])]),e("div",I,[e("div",J,[e("p",{class:c(["flex items-center text-sm",s.status_id==1||s.status_id==2?"text-gray-900":"text-gray-500"])},a(s.category_id==1||s.user_id!=l.$page.props.user.id?"+":"-")+" Rp "+a(s.category_id==1?u(s.amount):u(s.gross_amount)),3)]),e("div",{class:c(["flex items-center text-sm",s.status_id==1||s.status_id==2?"text-gray-900":"text-gray-500"])},a(g(s.created_at)),3)])])]),_:2},1032,["href"])]))),256))])]))]),_:1},8,["title","name"]))}};export{oe as default};

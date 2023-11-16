import{_ as b}from"./AppLayout.0e75964e.js";import{d as v,B as h,c as k,w as d,o as r,b as u,a as t,e as o,f as m,g as c,t as a,h as w,n,F as i,u as y,j,O as B}from"./app.c5a8f3a4.js";import{_ as D}from"./PrimaryButton.237b2a47.js";import{_ as O}from"./PreviousButton.4442e2ee.js";import{m as S}from"./moment.c5fecd5c.js";import{_ as N}from"./Pagination.afbd3ece.js";import"./Banner.bca6386f.js";import"./DarkmodeToggle.09e46d35.js";import"./helper.e9fc3b37.js";import"./label.6113e346.js";import"./focus-management.cea82651.js";const V={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},$={class:"py-4 px-4 lg:flex lg:items-center lg:justify-between"},C={class:"tracking-tight flex gap-5 items-center"},F={class:""},M=["src","alt"],z={class:""},H={class:"block text-xl font-bold text-gray-900 capitalize"},R={class:"text-sm font-medium ml-2 text-gray-500"},E={class:"block font-medium text-gray-600"},L={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},P=t("div",{class:"flex justify-between gap-3"},[t("div",{class:""}),t("div",{class:""})],-1),T={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},U={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},Y={class:"px-4 py-4 sm:px-6"},q={class:"flex items-center justify-between"},A={class:"ml-2 flex-shrink-0 flex"},G={class:"flex justify-between"},I={class:"flex"},le={__name:"Show",props:{users:Object|String,history:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(f){const s=f;let p=v(s.filters.search);h(p,l=>{B.get(route("user.show",s.users),{search:l},{preserveState:!0,replace:!0})});function x(l){return S(l).format("DD MMM Y HH:mm")}function _(l){return(l/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(l,g)=>(r(),k(b,{title:s.users.name,name:s.users.name,desc:"lorem ipsum"},{previous:d(()=>[u(O)]),default:d(()=>[t("div",V,[t("div",$,[t("div",C,[t("div",F,[s.users.profile_photo_url?(r(),o("img",{key:0,class:"mx-auto h-12 w-12 object-cover rounded-full",src:s.users.profile_photo_url,alt:s.users.name},null,8,M)):m("",!0)]),t("div",z,[t("span",H,[c(a(s.users.name)+" ",1),t("span",R,"#"+a(s.users.slug),1)]),t("span",E," Rp "+a(_(s.users.wallet_balance)),1)])]),t("div",L,[u(D,{as:"a",href:l.route("user.edit",s.users)},{default:d(()=>[c(" Ubah Data ")]),_:1},8,["href"])])])]),P,t("div",T,[t("ul",U,[(r(!0),o(i,null,w(s.history.data,e=>(r(),o("li",null,[u(y(j),{"preserve-scroll":"",href:l.route("history.show",e.order_id),class:"block hover:bg-primary-50"},{default:d(()=>[t("div",Y,[t("div",q,[t("p",{class:n(["font-medium truncate uppercase",e.status_id==1||e.status_id==2?"text-primary-600":"text-gray-500"])},[c(a(e.product_name)+" ",1),e.virtual_account?(r(),o(i,{key:0},[c(a(e.virtual_account.bank),1)],64)):e.wallet_account?(r(),o(i,{key:1},[c(a(e.wallet_account.bank),1)],64)):e.money_transfer?(r(),o(i,{key:2},[e.user_id==s.users.id?(r(),o(i,{key:0},[c(" ke "+a(e.money_transfer.to.name),1)],64)):(r(),o(i,{key:1},[c(" dari "+a(e.user.name),1)],64))],64)):m("",!0)],2),t("div",A,[t("p",{class:n(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",e.color])},a(e.status),3)])]),t("div",G,[t("div",I,[t("p",{class:n(["flex items-center text-sm mr-2",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])}," #"+a(e.order_id),3),t("p",{class:n(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])}," Rp "+a(e.category_id==1?_(e.amount):_(e.gross_amount)),3)]),t("div",{class:n(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},a(x(e.created_at)),3)])])]),_:2},1032,["href"])]))),256))])]),u(N,{pagination:s.history},null,8,["pagination"])]),_:1},8,["title","name"]))}};export{le as default};
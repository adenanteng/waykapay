import{_ as b}from"./AppLayout-d30f150e.js";import{d as v,s as h,o as r,c as k,w as c,b as d,a as e,e as i,f as _,g as o,t as a,h as w,n as u,F as n,u as y,m as j,O as $}from"./app-7c13986d.js";import{_ as B}from"./PrimaryButton-824be08c.js";import{_ as D}from"./PreviousButton-19b062af.js";import{m as O}from"./moment-2ffcbd80.js";import{_ as S}from"./Pagination-8cf09446.js";import{_ as z}from"./SecondaryButton-824eef5a.js";import"./OnlineStatus-0b061dc3.js";import"./index-b0ffd0cf.js";import"./DarkmodeToggle-c18a0703.js";import"./use-controllable-c87dad92.js";import"./bcrypt-36c5e2d8.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-853f1519.js";import"./DialogModal-0f828a96.js";import"./InputError-13b33243.js";import"./focus-management-1bf0c644.js";const N={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},V={class:"py-4 px-4 lg:flex lg:items-center lg:justify-between"},C={class:"tracking-tight flex gap-5 items-center"},F={class:""},M=["src","alt"],H={class:""},R={class:"block text-xl font-bold text-gray-900 capitalize"},T={class:"text-sm font-medium ml-2 text-gray-500"},A={class:"block text-sm font-medium text-gray-600"},E=e("i",{class:"fa-regular fa-mobile mr-1 w-3"},null,-1),L=e("i",{class:"fa-regular fa-envelope mr-1 w-3"},null,-1),P={class:"block text-sm font-medium text-gray-600"},U={class:"block text-sm font-medium text-primary-600"},Y={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},q=e("i",{class:"fa-regular fa-arrows-rotate"},null,-1),G=e("div",{class:"flex justify-between gap-3"},[e("div",{class:""}),e("div",{class:""})],-1),I={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},J={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},K={class:"px-4 py-4 sm:px-6"},Q={class:"flex items-center justify-between"},W={class:"ml-2 flex-shrink-0 flex"},X={class:"flex justify-between"},Z={class:"flex"},xe={__name:"Show",props:{users:Object|String,history:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(f){const s=f;let p=v(s.filters.search);h(p,l=>{$.get(route("user.show",s.users),{search:l},{preserveState:!0,replace:!0})});function g(l){return O(l).format("DD MMM Y HH:mm")}function m(l){return(l/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(l,x)=>(r(),k(b,{title:s.users.name,name:s.users.name,desc:"lorem ipsum"},{previous:c(()=>[d(D)]),default:c(()=>[e("div",N,[e("div",V,[e("div",C,[e("div",F,[s.users.profile_photo_url?(r(),i("img",{key:0,class:"mx-auto h-12 w-12 object-cover rounded-full",src:s.users.profile_photo_url,alt:s.users.name},null,8,M)):_("",!0)]),e("div",H,[e("div",R,[o(a(s.users.name)+" ",1),e("span",T,"#"+a(s.users.slug),1)]),e("div",A,[e("p",null,[E,o(" "+a(s.users.phone),1)]),e("p",null,[L,o(" "+a(s.users.email),1)])]),e("div",P," Akun "+a(s.users.role),1),e("div",U," Rp "+a(m(s.users.wallet_balance)),1)])]),e("div",Y,[d(z,{as:"a",href:l.route("user.normalizeTransaction",s.users)},{default:c(()=>[q]),_:1},8,["href"]),d(B,{as:"a",href:l.route("user.edit",s.users)},{default:c(()=>[o(" Ubah Data ")]),_:1},8,["href"])])])]),G,e("div",I,[e("ul",J,[(r(!0),i(n,null,w(s.history.data,t=>(r(),i("li",null,[d(y(j),{"preserve-scroll":"",href:l.route("history.show",t.order_id),class:"block hover:bg-primary-50"},{default:c(()=>[e("div",K,[e("div",Q,[e("p",{class:u(["text-sm font-medium truncate capitalize",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},[o(a(t.product_name)+" ",1),t.virtual_account?(r(),i(n,{key:0},[o(a(t.virtual_account.bank),1)],64)):t.wallet_account?(r(),i(n,{key:1},[o(a(t.wallet_account.bank),1)],64)):t.offline_account?(r(),i(n,{key:2},[o(a(t.offline_account.bank),1)],64)):t.manual_account?(r(),i(n,{key:3},[o(a(t.manual_account.bank),1)],64)):t.money_transfer?(r(),i(n,{key:4},[t.user_id==l.$page.props.user.id?(r(),i(n,{key:0},[o(" ke "+a(t.money_transfer.to.name),1)],64)):(r(),i(n,{key:1},[o(" dari "+a(t.user.name),1)],64))],64)):_("",!0)],2),e("div",W,[e("p",{class:u(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.color])},a(t.status),3)])]),e("div",X,[e("div",Z,[e("p",{class:u(["flex items-center text-xs",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},a(t.category_id==1||t.user_id!=s.users.id?"+":"-")+" Rp "+a(t.category_id==1?m(t.amount):m(t.gross_amount)),3)]),e("div",{class:u(["flex items-center text-xs",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},a(g(t.created_at)),3)])])]),_:2},1032,["href"])]))),256))])]),d(S,{pagination:s.history},null,8,["pagination"])]),_:1},8,["title","name"]))}};export{xe as default};
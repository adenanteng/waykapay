import{_ as x}from"./AppLayout.97492973.js";import{c as b,w as c,o,b as u,a as t,e as l,f as m,t as s,g as i,h as v,n,F as _,u as h,j as k}from"./app.abe08ac1.js";import{_ as w}from"./PrimaryButton.0e0096ed.js";import{_ as y}from"./PreviousButton.51cd04f4.js";import{m as j}from"./moment.3e2e5ebf.js";import"./helper.92f38628.js";import"./DarkmodeToggle.908b5a08.js";import"./label.a979b03e.js";import"./focus-management.79a9025b.js";const B={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},D={class:"py-4 px-4 lg:flex lg:items-center lg:justify-between"},N={class:"tracking-tight flex gap-5 items-center"},S={class:""},V=["src","alt"],$={class:""},C={class:"block text-xl font-bold text-gray-900 capitalize"},F={class:"block font-semibold text-primary-600"},M={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},P={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},z={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},O={class:"px-4 py-4 sm:px-6"},R={class:"flex items-center justify-between"},E={class:"ml-2 flex-shrink-0 flex"},L={class:"flex justify-between"},T={class:"flex"},Q={__name:"Show",props:{users:Object|String,history:Object},setup(p){const r=p;function f(a){return j(a).format("DD MMM Y")}function d(a){return(a/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(a,g)=>(o(),b(x,{title:"Pengguna",name:"Pengguna",desc:"lorem ipsum"},{previous:c(()=>[u(y)]),default:c(()=>[t("div",B,[t("div",D,[t("div",N,[t("div",S,[r.users.profile_photo_url?(o(),l("img",{key:0,class:"mx-auto h-12 w-12 object-cover rounded-full",src:r.users.profile_photo_url,alt:r.users.name},null,8,V)):m("",!0)]),t("div",$,[t("span",C,s(r.users.name),1),t("span",F," Rp "+s(d(r.users.wallet_balance)),1)])]),t("div",M,[u(w,{as:"a",href:a.route("user.edit",r.users)},{default:c(()=>[i(" Ubah Data ")]),_:1},8,["href"])])])]),t("div",P,[t("ul",z,[(o(!0),l(_,null,v(a.$page.props.history,e=>(o(),l("li",null,[u(h(k),{"preserve-scroll":"",href:a.route("history.show",e),class:"block hover:bg-primary-50"},{default:c(()=>[t("div",O,[t("div",R,[t("p",{class:n(["font-medium truncate uppercase",e.status_id==1||e.status_id==2?"text-primary-600":"text-gray-500"])},[i(s(e.product_name)+" ",1),e.virtual_account?(o(),l(_,{key:0},[i(s(e.virtual_account.bank),1)],64)):e.wallet_account?(o(),l(_,{key:1},[i(s(e.wallet_account.bank),1)],64)):m("",!0)],2),t("div",E,[t("p",{class:n(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",e.color])},s(e.status),3)])]),t("div",L,[t("div",T,[t("p",{class:n(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},s(e.category_id==1?"+":"-")+" Rp "+s(e.category_id==1?d(e.amount):d(e.gross_amount)),3)]),t("div",{class:n(["flex items-center text-sm",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},s(f(e.updated_at)),3)])])]),_:2},1032,["href"])]))),256))])])]),_:1}))}};export{Q as default};
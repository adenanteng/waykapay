import{_ as C}from"./AppLayout-949794e2.js";import{z as S,d,s as Y,o,c as $,w,a,b as u,u as _,G as x,e as r,h as j,n as v,g as i,t as l,F as n,f as D,m as L,O as N}from"./app-dc86a12b.js";import{h as O}from"./moment-fbc5633a.js";import{_ as U}from"./TextInput-efe348ae.js";import{_ as z}from"./Pagination-0cce6916.js";import{_ as y}from"./SelectInput-14c18893.js";import{G as F}from"./vue-tailwind-datepicker-4bfcc7d2.js";import"./OnlineStatus-cf49adab.js";import"./index-2f9ae09f.js";import"./DarkmodeToggle-c8c93ceb.js";import"./helper-04030b53.js";import"./use-controllable-cac581c0.js";import"./bcrypt-eece9a6d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-29f7133a.js";import"./DialogModal-bb259a2e.js";import"./PrimaryButton-75b986f2.js";import"./InputError-2ed4dc45.js";import"./BackgroundParticle-abb713ee.js";import"./focus-management-507f3882.js";const G={class:""},H={class:"w-full"},R={class:"grid lg:flex space-y-5 lg:space-y-0 lg:gap-3"},T={class:"w-full"},E={class:"grid grid-cols-2 gap-2 w-full"},K={class:""},P={class:"rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300"},q={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},A={class:"px-4 py-4 sm:px-6"},I={class:"flex items-center justify-between"},J={class:"ml-2 flex-shrink-0 flex"},Q={class:"flex justify-between"},W={class:"flex"},ke={__name:"Detail",props:{transaction:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(M){const c=M;S(()=>{});let p=d(c.filters.search),m=d(c.filters.filterStatus),f=d(c.filters.filterCategory);const k=d([]);Y([p,m,f,k],([t,s,e,g])=>{N.get(route("report.detail"),{search:t,filter_status:s,filter_category:e,date_start:g?g[0]:null,date_end:g?g[1]:null},{preserveState:!0,replace:!0})});const V=d({date:"YYYY-MM-DD",month:"MMM"}),B=d({shortcuts:{today:"Hari ini",yesterday:"Kemarin",past:t=>t+" hari terakhir",currentMonth:"Bulan ini",pastMonth:"Bulan lalu"},footer:{apply:"Terapkan",cancel:"Batal"}});function h(t){return O(t).format("DD MMM Y HH:mm")}function b(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,s)=>(o(),$(C,{title:"Laporan",name:"Laporan",desc:"Laporan transaksi kamu"},{default:w(()=>[a("div",G,[a("div",H,[u(U,{type:"text",modelValue:_(p),"onUpdate:modelValue":s[0]||(s[0]=e=>x(p)?p.value=e:p=e),placeholder:"Cari disini",class:"block w-full lg:w-96 shadow"},null,8,["modelValue"])])]),a("div",R,[a("div",T,[u(_(F),{modelValue:k.value,"onUpdate:modelValue":s[1]||(s[1]=e=>k.value=e),"input-classes":"bg-white text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm rounded-full",options:B.value,formatter:V.value,placeholder:"Bulan",separator:" - ","use-range":"","as-single":"",i18n:"id"},null,8,["modelValue","options","formatter"])]),a("div",E,[u(y,{"model-value":_(m),"onUpdate:modelValue":s[2]||(s[2]=e=>x(m)?m.value=e:m=e),"model-valueModifiers":{number:!0},option:t.$page.props.selectStatus,class:"block w-full shadow"},null,8,["model-value","option"]),u(y,{"model-value":_(f),"onUpdate:modelValue":s[3]||(s[3]=e=>x(f)?f.value=e:f=e),"model-valueModifiers":{number:!0},option:t.$page.props.selectCategory,class:"block w-full shadow"},null,8,["model-value","option"])])]),a("div",K,[a("div",P,[a("ul",q,[(o(!0),r(n,null,j(c.transaction.data,e=>(o(),r("li",{key:e.id},[u(_(L),{href:t.route("history.show",e.order_id),class:"block hover:bg-primary-50"},{default:w(()=>[a("div",A,[a("div",I,[a("p",{class:v(["text-sm font-medium truncate capitalize",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},[i(l(e.product_name)+" ",1),e.virtual_account?(o(),r(n,{key:0},[i(l(e.virtual_account.bank),1)],64)):e.wallet_account?(o(),r(n,{key:1},[i(l(e.wallet_account.bank),1)],64)):e.offline_account?(o(),r(n,{key:2},[i(l(e.offline_account.bank),1)],64)):e.manual_account?(o(),r(n,{key:3},[i(l(e.manual_account.bank),1)],64)):e.money_transfer?(o(),r(n,{key:4},[e.user_id==t.$page.props.user.id?(o(),r(n,{key:0},[i(" ke "+l(e.money_transfer.to.name),1)],64)):(o(),r(n,{key:1},[i(" dari "+l(e.user.name),1)],64))],64)):D("",!0)],2),a("div",J,[a("p",{class:v(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",e.color])},l(e.status),3)])]),a("div",Q,[a("div",W,[a("p",{class:v(["flex items-center text-xs",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},l(e.category_id==1||e.user_id!=t.$page.props.user.id?"+":"-")+" Rp "+l(e.category_id==1?b(e.amount):b(e.gross_amount)),3)]),a("div",{class:v(["flex items-center text-xs",e.status_id==1||e.status_id==2?"text-gray-900":"text-gray-500"])},l(h(e.created_at)),3)])])]),_:2},1032,["href"])]))),128))])])]),u(z,{pagination:c.transaction},null,8,["pagination"])]),_:1}))}};export{ke as default};

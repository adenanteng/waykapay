import{_ as N}from"./AppLayout.94a17322.js";import{q as j,d as m,B as C,c as T,w as b,o,a as e,t as s,b as x,u as g,J as y,e as i,h,F as n,n as _,g as p,f as Y,j as L,O}from"./app.73f98d73.js";import{h as R}from"./moment.9709ab41.js";import"./vue3-lottie.es.71afbc66.js";import{_ as D}from"./TextInput.07ae56c6.js";import{_ as F}from"./SelectInput.6854d5f6.js";import{G as H}from"./vue-tailwind-datepicker.bfa67fac.js";import"./Banner.82747116.js";import"./DarkmodeToggle.ff6dbe4e.js";import"./helper.e9fc3b37.js";import"./label.bc285627.js";import"./index.cc324b4d.js";import"./focus-management.dfea8d65.js";const S={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},U={class:"flex w-full items-center justify-between space-x-6 p-6"},$={class:"flex-1 truncate"},G=e("div",{class:"flex items-center space-x-3"},[e("h3",{class:"truncate text-sm text-gray-600"},"Laba")],-1),q={class:"mt-1 truncate text-sm font-medium text-gray-900"},z=e("i",{class:"fa-duotone fa-money-bill-1-wave text-green-600 text-3xl flex-shrink-0"},null,-1),E={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},I={class:"flex w-0 flex-1"},J={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},K={class:"ml-3 text-center"},P=e("div",{class:"text-xs text-gray-500"},"Transaksi",-1),A={class:"text-sm font-medium text-gray-700"},Q={class:""},W={class:"w-full"},X={class:"grid lg:flex space-y-5 lg:space-y-0 lg:gap-3"},Z={class:"w-full"},ee={class:"w-full"},te={class:""},ae={class:"text-sm text-gray-900 font-medium ml-5 mt-5 mb-1"},se={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},re={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},oe={class:"px-4 py-4 sm:px-6"},le={class:"flex items-center justify-between"},ie={class:"ml-2 flex-shrink-0 flex"},ne={class:"flex justify-between"},de={class:"flex"},we={__name:"Index",props:{transaction:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})},gross_amount:Number,agent_commission:Number,transaction_count:Number},setup(k){const d=k;j(()=>{});let c=m(d.filters.search),u=m(d.filters.filter);const v=m([]);C([c,u,v],([r,l,a])=>{O.get(route("report.index"),{search:r,filter:l,date_start:a?a[0]:null,date_end:a?a[1]:null},{preserveState:!0,replace:!0})});const w=m({date:"YYYY-MM-DD",month:"MMM"}),M=m({shortcuts:{today:"Hari ini",yesterday:"Kemarin",past:r=>r+" hari terakhir",currentMonth:"Bulan ini",pastMonth:"Bulan lalu"},footer:{apply:"Terapkan",cancel:"Batal"}});function V(r){return R(r).format("DD MMM Y HH:mm")}function f(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(r,l)=>(o(),T(N,{title:"Laporan Transaksi",name:"Laporan Transaksi",desc:"Riwayat transaksi kamu"},{default:b(()=>[e("div",S,[e("div",U,[e("div",$,[G,e("p",q,"Rp "+s(f(Number(d.agent_commission))),1)]),z]),e("div",null,[e("div",E,[e("div",I,[e("div",J,[e("div",K,[P,e("div",A,s(f(d.transaction_count)),1)])])])])])]),e("div",Q,[e("div",W,[x(D,{type:"text",modelValue:g(c),"onUpdate:modelValue":l[0]||(l[0]=a=>y(c)?c.value=a:c=a),placeholder:"Cari disini",class:"block w-full lg:w-96 shadow"},null,8,["modelValue"])])]),e("div",X,[e("div",Z,[x(g(H),{modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=a=>v.value=a),"input-classes":"bg-white text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm rounded-full",options:M.value,formatter:w.value,placeholder:"Bulan",separator:" - ","use-range":"","as-single":"",i18n:"id"},null,8,["modelValue","options","formatter"])]),e("div",ee,[x(F,{"model-value":g(u),"onUpdate:modelValue":l[2]||(l[2]=a=>y(u)?u.value=a:u=a),"model-valueModifiers":{number:!0},option:r.$page.props.selectCategory,class:"block w-full shadow"},null,8,["model-value","option"])])]),e("div",te,[(o(!0),i(n,null,h(d.transaction,(a,B)=>(o(),i(n,null,[e("h3",ae,s(B),1),e("div",se,[e("ul",re,[(o(!0),i(n,null,h(a,t=>(o(),i("li",{key:t.id},[x(g(L),{href:r.route("history.show",t.order_id),class:"block hover:bg-primary-50"},{default:b(()=>[e("div",oe,[e("div",le,[e("p",{class:_(["font-medium truncate uppercase",t.status_id==1||t.status_id==2?"text-primary-600":"text-gray-500"])},[p(s(t.product_name)+" ",1),t.virtual_account?(o(),i(n,{key:0},[p(s(t.virtual_account.bank),1)],64)):t.wallet_account?(o(),i(n,{key:1},[p(s(t.wallet_account.bank),1)],64)):t.money_transfer?(o(),i(n,{key:2},[t.user_id==r.$page.props.user.id?(o(),i(n,{key:0},[p(" ke "+s(t.money_transfer.to.name),1)],64)):(o(),i(n,{key:1},[p(" dari "+s(t.user.name),1)],64))],64)):Y("",!0)],2),e("div",ie,[e("p",{class:_(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.color])},s(t.status),3)])]),e("div",ne,[e("div",de,[e("p",{class:_(["flex items-center text-sm mr-2",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])}," #"+s(t.order_id),3),e("p",{class:_(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])}," Rp "+s(t.category_id==1?f(t.amount):f(t.gross_amount)),3)]),e("div",{class:_(["flex items-center text-sm",t.status_id==1||t.status_id==2?"text-gray-900":"text-gray-500"])},s(V(t.created_at)),3)])])]),_:2},1032,["href"])]))),128))])])],64))),256))])]),_:1}))}};export{we as default};
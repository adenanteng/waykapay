import{_ as p}from"./AppLayout-b0f2656d.js";import{z as c,o as s,c as r,w as a,a as e,t as i,e as m,f as o,n as u,u as d,m as n,g as l}from"./app-bd6038e9.js";import"./moment-fbc5633a.js";import f from"./NotificationForm-afaeced2.js";import"./OnlineStatus-e233dfbd.js";import"./index-58c9e70f.js";import"./DarkmodeToggle-a24df129.js";import"./use-controllable-0a79744b.js";import"./focus-management-3ed93a7e.js";import"./ActionMessage-513269db.js";import"./FormSection-61165cd0.js";import"./SectionTitle-6ea83e97.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-b2ba1046.js";import"./InputLabel-54c202b2.js";import"./PrimaryButton-666f09e7.js";import"./TextAreaInput-4ffcf605.js";const _={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},g={class:"flex w-full items-center justify-between space-x-6 p-6"},x={class:"flex-1 truncate"},k=e("div",{class:"flex items-center space-x-3"},[e("h3",{class:"truncate text-sm text-gray-600"},"Notifikasi Perangkat")],-1),h={class:"mt-1 truncate text-sm font-medium text-gray-900"},v={key:0,class:"mt-1 text-xs text-gray-500"},y={class:"flex divide-x divide-gray-300 dark:divide-gray-600"},b={class:"flex w-0 flex-1"},$={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},w={class:"ml-3 truncate"},B=e("div",{class:"text-xs text-gray-500"},null,-1),H={__name:"Index",props:{},setup(N){return c(()=>{}),(t,P)=>(s(),r(p,{title:"Perangkat",name:"Perangkat",desc:"Profil perangkat kamu"},{default:a(()=>[e("div",_,[e("div",g,[e("div",x,[k,e("p",h,i(t.$page.props.user.device_token?"Aktif":"Tidak aktif"),1),t.$page.props.user.device_token?(s(),m("p",v,i(t.$page.props.user.device_token),1)):o("",!0)]),e("i",{class:u(["fa-duotone fa-mobile-android text-3xl flex-shrink-0",t.$page.props.user.device_token?"text-green-600":"text-red-600"])},null,2)]),e("div",null,[e("div",y,[e("div",b,[e("div",$,[e("div",w,[B,t.$page.url.startsWith("/device/store")?(s(),r(d(n),{key:0,class:"text-sm font-medium text-primary-600 truncate",href:t.route("dashboard"),replace:""},{default:a(()=>[l(" Kembali ke dasbor ")]),_:1},8,["href"])):(s(),r(d(n),{key:1,class:"text-sm font-medium text-primary-600 truncate",href:t.route("device.store",{user:t.$page.props.user.slug}),replace:""},{default:a(()=>[l(" Refresh perangkat ")]),_:1},8,["href"]))])])])])])]),t.$page.props.user.role_id==1?(s(),r(f,{key:0})):o("",!0)]),_:1}))}};export{H as default};
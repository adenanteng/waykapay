import{_ as l}from"./AppLayout-CXrpN_AO.js";import{z as c,o as r,c as s,w as a,a as e,t as i,e as m,f as o,n as u,u as d,j as n,g as p}from"./app-QibV99os.js";import"./moment-Cl4UOzQZ.js";import f from"./NotificationForm-DsUKKDs_.js";import"./OnlineStatus-DCWzCiCY.js";import"./DarkmodeToggle-Cqc7jBaY.js";import"./helper-Dp3OpoYX.js";import"./form-DSaFDzVM.js";import"./use-resolve-button-type-cplCLIAp.js";import"./vue3-otp-input.esm-BF0PA2PJ.js";import"./DialogModal-mt60l-Ca.js";import"./PrimaryButton-C6Dw3qtJ.js";import"./InputError-DlzXW2Af.js";import"./BackgroundParticle-DG75UD1K.js";import"./calculate-active-index-In8VO4po.js";import"./focus-management-DTU98A4s.js";import"./ActionMessage-DUJWNQ1a.js";import"./FormSection-0CLrAwZ-.js";import"./SectionTitle-CpZlNHxR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./InputLabel-BWZNoA8s.js";import"./TextAreaInput-DistGQdZ.js";const _={class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 shadow-lg border border-gray-300"},g={class:"flex w-full items-center justify-between space-x-6 p-6"},x={class:"flex-1 truncate"},k=e("div",{class:"flex items-center space-x-3"},[e("h3",{class:"truncate text-sm text-gray-600"},"Notifikasi Perangkat")],-1),h={class:"mt-1 truncate text-sm font-medium text-gray-900"},v={key:0,class:"mt-1 text-xs text-gray-500"},y={class:"flex divide-x divide-gray-300 dark:divide-gray-600"},b={class:"flex w-0 flex-1"},$={class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},w={class:"ml-3 truncate"},B=e("div",{class:"text-xs text-gray-500"},null,-1),U={__name:"Index",props:{},setup(N){return c(()=>{}),(t,P)=>(r(),s(l,{title:"Perangkat",name:"Perangkat",desc:"Profil perangkat kamu"},{default:a(()=>[e("div",_,[e("div",g,[e("div",x,[k,e("p",h,i(t.$page.props.user.device_token?"Aktif":"Tidak aktif"),1),t.$page.props.user.device_token?(r(),m("p",v,i(t.$page.props.user.device_token),1)):o("",!0)]),e("i",{class:u(["fa-duotone fa-mobile-android text-3xl flex-shrink-0",t.$page.props.user.device_token?"text-green-600":"text-red-600"])},null,2)]),e("div",null,[e("div",y,[e("div",b,[e("div",$,[e("div",w,[B,t.$page.url.startsWith("/device/store")?(r(),s(d(n),{key:0,class:"text-sm font-medium text-primary-600 truncate",href:t.route("dashboard"),replace:""},{default:a(()=>[p(" Kembali ke dasbor ")]),_:1},8,["href"])):(r(),s(d(n),{key:1,class:"text-sm font-medium text-primary-600 truncate",href:t.route("device.store",{user:t.$page.props.user.slug}),replace:""},{default:a(()=>[p(" Refresh perangkat ")]),_:1},8,["href"]))])])])])])]),t.$page.props.user.role_id==1?(r(),s(f,{key:0})):o("",!0)]),_:1}))}};export{U as default};
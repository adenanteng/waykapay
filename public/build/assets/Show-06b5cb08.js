import{_ as n}from"./AppLayout-eb10105f.js";import m from"./UpdateAppInformationForm-d16fb228.js";import{_ as l}from"./PreviousButton-d827ea68.js";import{S as i}from"./SectionBorder-8cf80d51.js";import{T as g,i as f,o as c,c as _,w as r,Q as u,b as t,a as s,g as d}from"./app-cca8524f.js";import $ from"./UpdateApiDigiflazzForm-d2519f97.js";import S from"./UpdateFeePulsaForm-9ea64453.js";import h from"./UpdateFeeEmoneyForm-2d95d0d7.js";import v from"./UpdateFeeEtollForm-9c000d73.js";import b from"./UpdateFeeGamesForm-97d5b270.js";import k from"./UpdateFeeInternetForm-3f74a646.js";import w from"./UpdateFeePlnForm-be9df088.js";import y from"./UpdateFeeTVForm-b3837e53.js";import B from"./UpdateFeeVoucherForm-62154c4c.js";import{_ as C}from"./DangerButton-1bc62e21.js";import"./OnlineStatus-410cdafa.js";import"./index-7538aa88.js";import"./DarkmodeToggle-53e414f8.js";import"./use-controllable-4511d8cc.js";import"./focus-management-d97e1ec5.js";import"./ActionMessage-6e7f7577.js";import"./FormSection-87ca31d2.js";import"./SectionTitle-3e381dfd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./InputError-3290985b.js";import"./InputLabel-e20533fe.js";import"./PrimaryButton-e5f5f783.js";import"./SecondaryButton-e89dec41.js";import"./TextInput-4c27bf33.js";const N={class:"relative py-8"},V=s("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[s("div",{class:"w-full border-t border-gray-300"})],-1),P={class:"relative flex justify-center"},T=s("i",{class:"fa-regular fa-trash mr-2"},null,-1),nt={__name:"Show",setup(j){const p=g({}),{...o}=f(()=>u().props.appSetting).value,a=()=>{p.delete(route("setting.destroy",o),{preserveScroll:!0,onSuccess:()=>{}})};return(e,A)=>(c(),_(n,{title:"Pengaturan",name:"Pengaturan Aplikasi",desc:"lorem ipsum"},{previous:r(()=>[t(l,{href:e.route("profile.index")},null,8,["href"])]),default:r(()=>[t(m,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(h,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(v,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(b,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(k,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(w,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(S,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(y,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(B,{setting:e.$page.props.appSetting},null,8,["setting"]),s("div",N,[V,s("div",P,[t(C,{class:"",onClick:a},{default:r(()=>[T,d(" Hapus Cache ")]),_:1})])]),t($,{setting:e.$page.props.appSetting},null,8,["setting"])]),_:1}))}};export{nt as default};
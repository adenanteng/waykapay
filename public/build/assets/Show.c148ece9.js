import{_ as n}from"./AppLayout.e049fd64.js";import m from"./UpdateAppInformationForm.30d92c9e.js";import{_ as l}from"./PreviousButton.2985275c.js";import{S as i}from"./SectionBorder.1b496a8a.js";import{T as g,i as f,c,w as r,o as _,b as t,a as s,g as u,Q as d}from"./app.23ae28a0.js";import $ from"./UpdateApiDigiflazzForm.cfcf14a7.js";import S from"./UpdateFeePulsaForm.6d5350ac.js";import h from"./UpdateFeeEmoneyForm.6c95d3ea.js";import v from"./UpdateFeeEtollForm.8b58a3bb.js";import b from"./UpdateFeeGamesForm.6e0a5433.js";import k from"./UpdateFeeInternetForm.c14ee287.js";import w from"./UpdateFeePlnForm.67deb9ee.js";import y from"./UpdateFeeTVForm.d6f70107.js";import B from"./UpdateFeeVoucherForm.4891f2f7.js";import{_ as C}from"./DangerButton.c517a5f4.js";import"./OnlineStatus.d9f7b284.js";import"./index.3066e2b2.js";import"./DarkmodeToggle.25538166.js";import"./label.030abf97.js";import"./focus-management.6d2a912f.js";import"./ActionMessage.3fd43755.js";import"./FormSection.9fc132c8.js";import"./SectionTitle.e398e806.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./InputError.bfad1acc.js";import"./InputLabel.9cc6889e.js";import"./PrimaryButton.df7c769c.js";import"./SecondaryButton.70e28449.js";import"./TextInput.37b06847.js";const N={class:"relative py-8"},V=s("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[s("div",{class:"w-full border-t border-gray-300"})],-1),P={class:"relative flex justify-center"},T=s("i",{class:"fa-regular fa-trash mr-2"},null,-1),nt={__name:"Show",setup(j){const p=g({}),{...o}=f(()=>d().props.appSetting).value,a=()=>{p.delete(route("setting.destroy",o),{preserveScroll:!0,onSuccess:()=>{}})};return(e,A)=>(_(),c(n,{title:"Pengaturan",name:"Pengaturan Aplikasi",desc:"lorem ipsum"},{previous:r(()=>[t(l,{href:e.route("profile.index")},null,8,["href"])]),default:r(()=>[t(m,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(h,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(v,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(b,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(k,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(w,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(S,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(y,{setting:e.$page.props.appSetting},null,8,["setting"]),t(i),t(B,{setting:e.$page.props.appSetting},null,8,["setting"]),s("div",N,[V,s("div",P,[t(C,{class:"",onClick:a},{default:r(()=>[T,u(" Hapus Cache ")]),_:1})])]),t($,{setting:e.$page.props.appSetting},null,8,["setting"])]),_:1}))}};export{nt as default};

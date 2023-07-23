import{d as y,v,c as x,w as e,o as a,g as t,e as n,F as k,h as b,f as S,a as r,b as l,u as c,P as B,n as C,t as i}from"./app.a1e6ac86.js";import{_ as L}from"./ActionMessage.511c5737.js";import{_ as V}from"./ActionSection.8df0c5f9.js";import{a as $}from"./DialogModal.f7668100.js";import{_ as O}from"./InputError.9b7c0f97.js";import{_ as g}from"./PrimaryButton.aae3e241.js";import{_ as F}from"./SecondaryButton.3624fcad.js";import{_ as I}from"./TextInput.b0a7161a.js";import"./SectionTitle.22c5a55f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const N=r("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1),K={key:0,class:"mt-5 space-y-6"},P={key:0,class:"fa-regular fa-desktop text-2xl text-gray-500"},T={key:1,class:"fa-regular fa-mobile-android text-2xl text-gray-500"},U={class:"ml-3"},D={class:"text-sm text-gray-600"},E={class:"text-xs text-gray-500"},M={key:0,class:"text-green-500 font-semibold"},z={key:1},A={class:"flex items-center mt-5"},j={class:"mt-4"},es={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(_){const d=y(!1),u=y(null),o=v({password:""}),w=()=>{d.value=!0,setTimeout(()=>u.value.focus(),250)},f=()=>{o.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>u.value.focus(),onFinish:()=>o.reset()})},m=()=>{d.value=!1,o.reset()};return(q,p)=>(a(),x(V,null,{title:e(()=>[t(" Browser Sessions ")]),description:e(()=>[t(" Manage and log out your active sessions on other browsers and devices. ")]),content:e(()=>[N,_.sessions.length>0?(a(),n("div",K,[(a(!0),n(k,null,b(_.sessions,(s,h)=>(a(),n("div",{key:h,class:"flex items-center"},[r("div",null,[s.agent.is_desktop?(a(),n("i",P)):(a(),n("i",T))]),r("div",U,[r("div",D,i(s.agent.platform?s.agent.platform:"Unknown")+" - "+i(s.agent.browser?s.agent.browser:"Unknown"),1),r("div",null,[r("div",E,[t(i(s.ip_address)+", ",1),s.is_current_device?(a(),n("span",M,"This device")):(a(),n("span",z,"Last active "+i(s.last_active),1))])])])]))),128))])):S("",!0),r("div",A,[l(g,{onClick:w},{default:e(()=>[t(" Log Out ")]),_:1}),l(L,{on:c(o).recentlySuccessful,class:"ml-3"},{default:e(()=>[t(" Done. ")]),_:1},8,["on"])]),l($,{show:d.value,onClose:m},{title:e(()=>[t(" Log Out Other Browser Sessions ")]),content:e(()=>[t(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),r("div",j,[l(I,{ref_key:"passwordInput",ref:u,modelValue:c(o).password,"onUpdate:modelValue":p[0]||(p[0]=s=>c(o).password=s),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:B(f,["enter"])},null,8,["modelValue","onKeyup"]),l(O,{message:c(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[l(F,{onClick:m},{default:e(()=>[t(" Cancel ")]),_:1}),l(g,{class:C(["ml-3",{"opacity-25":c(o).processing}]),disabled:c(o).processing,onClick:f},{default:e(()=>[t(" Log Out ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{es as default};
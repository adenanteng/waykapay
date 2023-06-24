import{d as i,v as _,c as f,w as e,o as g,g as n,a as l,b as r,u as o,n as V}from"./app.70ec5318.js";import{_ as v}from"./ActionMessage.9c2784f7.js";import{_ as y}from"./FormSection.e787922f.js";import{_ as d}from"./InputError.356c67e7.js";import{_ as p}from"./InputLabel.21483e70.js";import{_ as P}from"./PrimaryButton.3ac0663e.js";import{_ as c}from"./TextInput.76a7ca2c.js";import"./SectionTitle.6afa7dc3.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},B={class:"col-span-6 sm:col-span-4"},T={__name:"UpdatePasswordForm",setup($){const u=i(null),m=i(null),s=_({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(S,a)=>(g(),f(y,{onSubmitted:w},{title:e(()=>[n(" Update Password ")]),description:e(()=>[n(" Ensure your account is using a long, random password to stay secure. ")]),form:e(()=>[l("div",b,[r(p,{for:"current_password",value:"Password"}),r(c,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:o(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(d,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",k,[r(p,{for:"password",value:"Password Baru"}),r(c,{id:"password",ref_key:"passwordInput",ref:u,modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(d,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",B,[r(p,{for:"password_confirmation",value:"Konfirmasi Password Baru"}),r(c,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(d,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(v,{on:o(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Berhasil disimpan. ")]),_:1},8,["on"]),r(P,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:e(()=>[n(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{T as default};

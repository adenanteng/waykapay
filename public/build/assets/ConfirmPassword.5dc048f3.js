import{v as m,d as c,e as d,b as o,u as e,w as r,F as u,o as f,X as p,a,n as _,g as w,B as b}from"./app.d09f7161.js";import{_ as g}from"./AuthenticationCard.3dfecda0.js";import{_ as h}from"./AuthenticationCardLogo.c734ca5f.js";import{_ as v}from"./InputError.81eef821.js";import{_ as x}from"./InputLabel.0fc71399.js";import{_ as y}from"./PrimaryButton.b8dec0a2.js";import{_ as V}from"./TextInput.c26cbbd4.js";const $=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),k=["onSubmit"],B={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup(C){const s=m({password:""}),t=c(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(F,i)=>(f(),d(u,null,[o(e(p),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[$,a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[o(x,{for:"password",value:"Password"}),o(V,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(v,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",B,[o(y,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,k)]),_:1})],64))}};export{z as default};
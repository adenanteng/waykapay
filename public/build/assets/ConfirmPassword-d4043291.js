import{T as i,d,o as c,e as u,b as a,u as e,w as r,F as p,Z as f,a as o,n as _,g as w,l as g}from"./app-01e31d22.js";import{_ as b,a as x}from"./AuthenticationCardLogo-2294c730.js";import{_ as k}from"./InputError-ac269078.js";import{_ as v}from"./InputLabel-0625e1d5.js";import{_ as V}from"./PrimaryButton-bea28cd7.js";import{_ as $}from"./TextInput-af00b154.js";const y=o("div",{class:"mb-4 text-sm text-gray-600"}," Masukkan password ",-1),h={class:"flex justify-end mt-4"},T={__name:"ConfirmPassword",setup(B){const s=i({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(C,l)=>(c(),u(p,null,[a(e(f),{title:"Secure Area"}),a(b,null,{logo:r(()=>[a(x)]),default:r(()=>[y,o("form",{onSubmit:g(n,["prevent"])},[o("div",null,[a(v,{for:"password",value:"Password"}),a($,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":l[0]||(l[0]=m=>e(s).password=m),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(k,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",h,[a(V,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[w(" Konfirmasi ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{T as default};

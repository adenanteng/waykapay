import{T as i,d,e as c,b as a,u as o,w as r,F as u,o as p,Z as f,a as e,n as _,g as w,C as b}from"./app.7cbcdd66.js";import{_ as g,a as x}from"./AuthenticationCardLogo.8d24fe6c.js";import{_ as k}from"./InputError.a0d88a84.js";import{_ as v}from"./InputLabel.15ac392d.js";import{_ as V}from"./PrimaryButton.5d95d83a.js";import{_ as $}from"./TextInput.e20285c6.js";const h=e("div",{class:"mb-4 text-sm text-gray-600"}," Masukkan password ",-1),y=["onSubmit"],C={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(B){const s=i({password:""}),t=d(null),l=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(F,n)=>(p(),c(u,null,[a(o(f),{title:"Secure Area"}),a(g,null,{logo:r(()=>[a(x)]),default:r(()=>[h,e("form",{onSubmit:b(l,["prevent"])},[e("div",null,[a(v,{for:"password",value:"Password"}),a($,{id:"password",ref_key:"passwordInput",ref:t,modelValue:o(s).password,"onUpdate:modelValue":n[0]||(n[0]=m=>o(s).password=m),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(k,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",C,[a(V,{class:_(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:r(()=>[w(" Konfirmasi ")]),_:1},8,["class","disabled"])])],40,y)]),_:1})],64))}};export{j as default};
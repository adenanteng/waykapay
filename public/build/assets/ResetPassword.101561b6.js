import{v as _,e as f,b as o,u as a,w as i,F as u,o as w,X as g,a as r,n as V,g as b,B as k}from"./app.6fe95229.js";import{_ as v}from"./AuthenticationCard.8c2ff644.js";import{_ as $}from"./AuthenticationCardLogo.e330f940.js";import{_ as m}from"./InputError.c84f32bc.js";import{_ as l}from"./InputLabel.5f3d9118.js";import{_ as x}from"./PrimaryButton.f8cfdc84.js";import{_ as d}from"./TextInput.0b6a78c0.js";const P=["onSubmit"],h={class:"mt-4"},y={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},z={__name:"ResetPassword",props:{email:String,token:String},setup(p){const n=p,s=_({token:n.token,email:n.email,password:"",password_confirmation:""}),c=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,e)=>(w(),f(u,null,[o(a(g),{title:"Reset Password"}),o(v,null,{logo:i(()=>[o($)]),default:i(()=>[r("form",{onSubmit:k(c,["prevent"])},[r("div",h,[o(l,{for:"password",value:"Password"}),o(d,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":e[0]||(e[0]=t=>a(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",y,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(d,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":e[1]||(e[1]=t=>a(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),r("div",B,[o(x,{class:V({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:i(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{z as default};
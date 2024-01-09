import{T as f,o as _,e as u,b as o,u as a,w as i,F as w,Z as g,a as r,n as V,g as b,l as k}from"./app-dc86a12b.js";import{_ as v,a as $}from"./AuthenticationCardLogo-5a49d97a.js";import{_ as l}from"./InputError-2ed4dc45.js";import{_ as m}from"./InputLabel-062078be.js";import{_ as x}from"./PrimaryButton-75b986f2.js";import{_ as d}from"./TextInput-efe348ae.js";import"./BackgroundParticle-abb713ee.js";import"./index-2f9ae09f.js";const P={class:"mt-4"},y={class:"mt-4"},h={class:"flex items-center justify-end mt-4"},j={__name:"ResetPassword",props:{email:String,token:String},setup(p){const n=p,s=f({token:n.token,email:n.email,password:"",password_confirmation:""}),c=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(B,e)=>(_(),u(w,null,[o(a(g),{title:"Reset Password"}),o(v,null,{logo:i(()=>[o($)]),default:i(()=>[r("form",{onSubmit:k(c,["prevent"])},[r("div",P,[o(m,{for:"password",value:"Password"}),o(d,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":e[0]||(e[0]=t=>a(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",y,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(d,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":e[1]||(e[1]=t=>a(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),r("div",h,[o(x,{class:V({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:i(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{j as default};

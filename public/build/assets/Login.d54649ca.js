import{v as b,e as d,b as s,u as a,w as t,F as y,o as u,X as x,g as l,j as c,t as h,f,a as m,c as k,n as v,B as V}from"./app.a1e6ac86.js";import{_ as B}from"./AuthenticationCard.e2117e80.js";import{_ as $}from"./AuthenticationCardLogo.f1fc9f65.js";import{_ as p}from"./InputError.9b7c0f97.js";import{_}from"./InputLabel.7d22604c.js";import{_ as N}from"./PrimaryButton.aae3e241.js";import{_ as g}from"./TextInput.b0a7161a.js";const S={key:0,class:"mb-4 font-medium text-sm text-green-600"},q=["onSubmit"],C={class:"mt-4"},F={class:"flex items-center justify-end mt-4"},U={__name:"Login",props:{canResetPassword:Boolean,status:String,darkMode:Boolean},setup(i){const e=b({email:"",password:"",remember:!1}),w=()=>{e.transform(o=>({...o,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(o,r)=>(u(),d(y,null,[s(a(x),{title:"Login"}),s(B,null,{logo:t(()=>[s($)]),title:t(()=>[l(" Belum punya akun? "),s(a(c),{class:"underline text-sm text-gray-600 hover:text-gray-900",href:o.route("register")},{default:t(()=>[l("Daftar")]),_:1},8,["href"])]),default:t(()=>[i.status?(u(),d("div",S,h(i.status),1)):f("",!0),m("form",{onSubmit:V(w,["prevent"])},[m("div",null,[s(_,{for:"email",value:"Email"}),s(g,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>a(e).email=n),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"email",autofocus:""},null,8,["modelValue"]),s(p,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),m("div",C,[s(_,{for:"password",value:"Password"}),s(g,{id:"password",modelValue:a(e).password,"onUpdate:modelValue":r[1]||(r[1]=n=>a(e).password=n),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),s(p,{class:"mt-2",message:a(e).errors.password},null,8,["message"])]),m("div",F,[i.canResetPassword?(u(),k(a(c),{key:0,href:o.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:t(()=>[l(" Lupa password? ")]),_:1},8,["href"])):f("",!0),s(N,{class:v(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:t(()=>[l(" Masuk ")]),_:1},8,["class","disabled"])])],40,q)]),_:1})],64))}};export{U as default};
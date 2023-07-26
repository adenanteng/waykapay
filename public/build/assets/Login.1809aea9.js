import{v,d as x,e as f,b as s,u as a,w as r,F as h,o as d,X as k,g as i,j as c,t as V,f as p,a as t,n as g,c as B,B as $}from"./app.1710f2ff.js";import{_ as C}from"./AuthenticationCard.ae4072b8.js";import{_ as N}from"./AuthenticationCardLogo.80e43890.js";import{_}from"./InputError.2b3633c9.js";import{_ as w}from"./InputLabel.bc6730d5.js";import{_ as P}from"./PrimaryButton.52aef3c8.js";import{_ as b}from"./TextInput.c5eb4735.js";const S={key:0,class:"mb-4 font-medium text-sm text-green-600"},q=["onSubmit"],F={class:"mt-4"},L={class:"flex"},M={class:"flex items-center justify-end mt-4"},X={__name:"Login",props:{canResetPassword:Boolean,status:String,darkMode:Boolean},setup(u){const e=v({email:"",password:"",remember:!1}),y=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})},l=x(!1);return(n,o)=>(d(),f(h,null,[s(a(k),{title:"Login"}),s(C,null,{logo:r(()=>[s(N)]),title:r(()=>[i(" Belum punya akun? "),s(a(c),{class:"underline text-sm text-gray-600 hover:text-gray-900",href:n.route("register")},{default:r(()=>[i("Daftar")]),_:1},8,["href"])]),default:r(()=>[u.status?(d(),f("div",S,V(u.status),1)):p("",!0),t("form",{onSubmit:$(y,["prevent"])},[t("div",null,[s(w,{for:"email",value:"Email"}),s(b,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":o[0]||(o[0]=m=>a(e).email=m),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"email",autofocus:""},null,8,["modelValue"]),s(_,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),t("div",F,[s(w,{for:"password",value:"Password"}),t("div",L,[s(b,{id:"password",modelValue:a(e).password,"onUpdate:modelValue":o[1]||(o[1]=m=>a(e).password=m),type:l.value?"text":"password",class:"mt-1 block w-full rounded-r-none",required:"",autocomplete:"current-password"},null,8,["modelValue","type"]),t("button",{type:"button",onClick:o[2]||(o[2]=m=>l.value=!l.value),class:"bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"},[t("i",{class:g(["fa-regular",l.value?"fa-eye-slash":"fa-eye"])},null,2)])]),s(_,{class:"mt-2",message:a(e).errors.password},null,8,["message"])]),t("div",M,[u.canResetPassword?(d(),B(a(c),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:r(()=>[i(" Lupa password? ")]),_:1},8,["href"])):p("",!0),s(P,{class:g(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:r(()=>[i(" Masuk ")]),_:1},8,["class","disabled"])])],40,q)]),_:1})],64))}};export{X as default};
import{T as x,d as v,e as f,b as s,u as a,w as o,F as h,o as d,Z as k,g as i,j as c,t as V,f as p,a as t,n as g,c as B,C as $}from"./app.83736037.js";import{_ as C,a as N}from"./AuthenticationCardLogo.c56e45c4.js";import{_ as w}from"./InputError.b41c3446.js";import{_}from"./InputLabel.d4c45794.js";import{_ as P}from"./PrimaryButton.5a85aa4d.js";import{_ as y}from"./TextInput.f013a07a.js";const q={key:0,class:"mb-4 font-medium text-sm text-green-600"},F={class:"mt-4"},L={class:"flex"},M={class:"flex items-center justify-end mt-4"},U={__name:"Login",props:{canResetPassword:Boolean,status:String,darkMode:Boolean},setup(u){const e=x({email:"",password:"",remember:!1}),b=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})},l=v(!1);return(n,r)=>(d(),f(h,null,[s(a(k),{title:"Login"}),s(C,null,{logo:o(()=>[s(N)]),title:o(()=>[i(" Belum punya akun? "),s(a(c),{class:"underline text-sm text-gray-600 hover:text-gray-900",href:n.route("register")},{default:o(()=>[i("Daftar")]),_:1},8,["href"])]),default:o(()=>[u.status?(d(),f("div",q,V(u.status),1)):p("",!0),t("form",{onSubmit:$(b,["prevent"])},[t("div",null,[s(_,{for:"email",value:"Email"}),s(y,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":r[0]||(r[0]=m=>a(e).email=m),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"email",autofocus:""},null,8,["modelValue"]),s(w,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),t("div",F,[s(_,{for:"password",value:"Password"}),t("div",L,[s(y,{id:"password",modelValue:a(e).password,"onUpdate:modelValue":r[1]||(r[1]=m=>a(e).password=m),type:l.value?"text":"password",class:"mt-1 block w-full rounded-r-none",required:"",autocomplete:"current-password"},null,8,["modelValue","type"]),t("button",{type:"button",onClick:r[2]||(r[2]=m=>l.value=!l.value),class:"bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"},[t("i",{class:g(["fa-regular",l.value?"fa-eye-slash":"fa-eye"])},null,2)])]),s(w,{class:"mt-2",message:a(e).errors.password},null,8,["message"])]),t("div",M,[u.canResetPassword?(d(),B(a(c),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:o(()=>[i(" Lupa password? ")]),_:1},8,["href"])):p("",!0),s(P,{class:g(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:o(()=>[i(" Masuk ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{U as default};
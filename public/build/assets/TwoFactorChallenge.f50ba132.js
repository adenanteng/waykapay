import{d,T as x,e as s,b as o,u as t,w as m,F as r,o as a,Z as h,a as i,g as n,C as y,n as C,z as w}from"./app.4cf44362.js";import{_ as V,a as $}from"./AuthenticationCardLogo.393b90e1.js";import{_ as p}from"./InputError.a68cda9c.js";import{_ as v}from"./InputLabel.8d81aaba.js";import{_ as T}from"./PrimaryButton.e92c679c.js";import{_ as g}from"./TextInput.22592c6c.js";const I={class:"mb-4 text-sm text-gray-600"},U=["onSubmit"],B={key:0},F={key:1},N={class:"flex items-center justify-end mt-4"},z=["onClick"],q={__name:"TwoFactorChallenge",setup(P){const c=d(!1),e=x({code:"",recovery_code:""}),_=d(null),f=d(null),k=async()=>{c.value^=!0,await w(),c.value?(_.value.focus(),e.code=""):(f.value.focus(),e.recovery_code="")},b=()=>{e.post(route("two-factor.login"))};return(R,l)=>(a(),s(r,null,[o(t(h),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o($)]),default:m(()=>[i("div",I,[c.value?(a(),s(r,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(a(),s(r,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:y(b,["prevent"])},[c.value?(a(),s("div",F,[o(v,{for:"recovery_code",value:"Recovery Code"}),o(g,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:_,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(a(),s("div",B,[o(v,{for:"code",value:"Code"}),o(g,{id:"code",ref_key:"codeInput",ref:f,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",N,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(k,["prevent"])},[c.value?(a(),s(r,{key:1},[n(" Use an authentication code ")],64)):(a(),s(r,{key:0},[n(" Use a recovery code ")],64))],8,z),o(T,{class:C(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],40,U)]),_:1})],64))}};export{q as default};

import{T as k,d as s,o as i,c as y,w as p,a as e,b as o,g as u,t as b,u as c,e as C,f as O}from"./app-7c13986d.js";import"./moment-fbc5633a.js";import{_ as w}from"./BlankLayout-abea6592.js";import{A as B}from"./ApplicationLogo-d10e3a31.js";import{e as m}from"./vue3-otp-input.esm-853f1519.js";import{_ as I}from"./InputError-13b33243.js";import{_ as S}from"./ActionMessage-bd473fcc.js";import"./OnlineStatus-0b061dc3.js";import"./index-b0ffd0cf.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"relative isolate overflow-hidden"},N={class:"mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"},P={class:"mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"},T=e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},"Verifikasi Whatsapp",-1),$={class:"mt-10"},q={class:""},A={key:0,class:"text-sm text-red-600 mt-2"},H={__name:"Otp",props:{request:Object},setup(E){const t=k({pin:null}),f=()=>{t.pin=a.value,t.post(route("otp.verify"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},d=()=>{t.get(route("otp.request"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{r.value=!0},onFinish:()=>{r.value=!0}})},_=s(m|null),a=s(""),x=n=>{f()},g=n=>{},r=s(!1),v=s(!1);return(n,l)=>(i(),y(w,{title:"Pin"},{default:p(()=>[e("div",V,[e("div",N,[e("div",P,[o(B,{class:"mb-10"}),T,e("p",{class:"text-sm text-gray-600"},[u("Masukkan kode OTP kamu, "),e("button",{onClick:d,class:"text-primary-600 underline"},"kirim OTP")]),o(S,{on:r.value,class:"mt-1"},{default:p(()=>[u(" Berhasil kirim ulang ke "+b(n.$page.props.user.phone)+". ",1)]),_:1},8,["on"]),e("div",$,[e("div",q,[o(c(m),{ref_key:"otpInput",ref:_,value:a.value,"onUpdate:value":l[0]||(l[0]=h=>a.value=h),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:g,onOnComplete:x},null,8,["value"]),o(I,{message:c(t).errors.pin,class:"mt-2"},null,8,["message"]),v.value?(i(),C("p",A,"Pin salah")):O("",!0)])])])])])]),_:1}))}};export{H as default};
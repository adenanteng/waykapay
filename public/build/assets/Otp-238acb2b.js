import{T as k,d as o,o as i,c as y,w as p,a as e,b as s,g as m,t as b,u,e as C,f as O}from"./app-61f03d6b.js";import"./moment-fbc5633a.js";import{_ as w}from"./BlankLayout-384b62fe.js";import{A as B}from"./ApplicationLogo-20d9d1ea.js";import{e as c}from"./vue3-otp-input.esm-f98c23eb.js";import{_ as I}from"./InputError-e1b2d35a.js";import{_ as S}from"./ActionMessage-5bc788ad.js";import"./OnlineStatus-e040ce81.js";import"./index-de252311.js";import"./helper-04030b53.js";import"./BackgroundParticle-5e10e23f.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"relative isolate overflow-hidden"},N={class:"mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"},P={class:"mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"},T=e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},"Verifikasi Whatsapp",-1),$={class:"mt-10"},q={class:""},A={key:0,class:"text-sm text-red-600 mt-2"},K={__name:"Otp",props:{request:Object},setup(E){const t=k({pin:null}),f=()=>{t.pin=a.value,t.post(route("otp.verify"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},d=()=>{t.get(route("otp.request"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{r.value=!0},onFinish:()=>{r.value=!0}})},_=o(c|null),a=o(""),x=n=>{f()},g=n=>{},r=o(!1),v=o(!1);return(n,l)=>(i(),y(w,{title:"Pin"},{default:p(()=>[e("div",V,[e("div",N,[e("div",P,[s(B,{class:"mb-10"}),T,e("p",{class:"text-sm text-gray-600"},[m("Masukkan kode OTP kamu, "),e("button",{onClick:d,class:"text-primary-600 underline"},"kirim OTP")]),s(S,{on:r.value,class:"mt-1"},{default:p(()=>[m(" Berhasil kirim ulang ke "+b(n.$page.props.user.phone)+". ",1)]),_:1},8,["on"]),e("div",$,[e("div",q,[s(u(c),{ref_key:"otpInput",ref:_,value:a.value,"onUpdate:value":l[0]||(l[0]=h=>a.value=h),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:g,onOnComplete:x},null,8,["value"]),s(I,{message:u(t).errors.pin,class:"mt-2"},null,8,["message"]),v.value?(i(),C("p",A,"Pin salah")):O("",!0)])])])])])]),_:1}))}};export{K as default};
import{T as k,d as s,c as y,w as i,o as p,a as e,b as o,g as c,t as b,u as m,e as C,f as O}from"./app.33ba8430.js";import"./moment.9709ab41.js";import{_ as w}from"./BlankLayout.c72443f2.js";import{A as B}from"./ApplicationLogo.a8277459.js";import{e as u}from"./vue3-otp-input.esm.76f47930.js";import{_ as I}from"./InputError.014a7a7c.js";import{_ as S}from"./ActionMessage.1b40073d.js";import"./Banner.95fe71aa.js";import"./helper.e9fc3b37.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"relative isolate overflow-hidden"},N={class:"mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"},P={class:"mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"},T=e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},"Verifikasi Whatsapp",-1),$={class:"mt-10"},q={class:""},A={key:0,class:"text-sm text-red-600 mt-2"},H={__name:"Otp",props:{request:Object},setup(E){const t=k({pin:null}),d=()=>{t.pin=a.value,t.post(route("otp.acc"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},f=()=>{t.get(route("otp.req"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{r.value=!0},onFinish:()=>{r.value=!0}})},_=s(u|null),a=s(""),x=n=>{d()},g=n=>{},r=s(!1),h=s(!1);return(n,l)=>(p(),y(w,{title:"Pin"},{default:i(()=>[e("div",V,[e("div",N,[e("div",P,[o(B,{class:"mb-10"}),T,e("p",{class:"text-sm text-gray-600"},[c("Masukkan kode OTP kamu, "),e("button",{onClick:f,class:"text-primary-600 underline"},"kirim OTP")]),o(S,{on:r.value,class:"mt-1"},{default:i(()=>[c(" Berhasil kirim ulang ke "+b(n.$page.props.user.phone)+". ",1)]),_:1},8,["on"]),e("div",$,[e("div",q,[o(m(u),{ref_key:"otpInput",ref:_,value:a.value,"onUpdate:value":l[0]||(l[0]=v=>a.value=v),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:g,onOnComplete:x},null,8,["value"]),o(I,{message:m(t).errors.pin,class:"mt-2"},null,8,["message"]),h.value?(p(),C("p",A,"Pin salah")):O("",!0)])])])])])]),_:1}))}};export{H as default};

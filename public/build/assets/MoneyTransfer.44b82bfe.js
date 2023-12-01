import{T as h,d as l,c as v,w as g,o as k,a as t,b as i,u}from"./app.6d387ce2.js";import"./moment.9709ab41.js";import"./vue3-lottie.es.d5bde970.js";import{_ as b}from"./BlankLayout.633f746e.js";import{e as c}from"./vue3-otp-input.esm.5bad00e9.js";import{_ as y}from"./InputError.d7ce7c7d.js";import"./Banner.e659cd0a.js";import"./helper.e9fc3b37.js";const w={class:"relative isolate overflow-hidden"},C={class:"mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"},q={class:"mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"},O=t("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},"Masukkan Pin",-1),B=t("p",{class:"text-sm text-gray-600"},"Masukkan pin transaksi kamu",-1),I={class:"mt-10"},M={class:""},z={__name:"MoneyTransfer",props:{request:Object},setup(p){var n;const e=p,s=h({amount:e.request.amount,bank:e.request.bank,account_no:e.request.account_no,desc:(n=e.request.desc)!=null?n:null,pin:null}),m=()=>{s.pin=o.value,s.post(route("money-transfer.confirm"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},d=l(c|null),o=l(""),_=a=>{m()},f=a=>{};return(a,r)=>(k(),v(b,{title:"Pin"},{default:g(()=>[t("div",w,[t("div",C,[t("div",q,[O,B,t("div",I,[t("div",M,[i(u(c),{ref_key:"otpInput",ref:d,value:o.value,"onUpdate:value":r[0]||(r[0]=x=>o.value=x),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:f,onOnComplete:_},null,8,["value"]),i(y,{message:u(s).errors.pin,class:"mt-2"},null,8,["message"])])])])])])]),_:1}))}};export{z as default};
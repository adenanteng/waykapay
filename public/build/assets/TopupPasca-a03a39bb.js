import{T as h,d as a,o as i,c as v,w as k,a as t,b as r,u as c,e as b,f as w}from"./app-cf45c446.js";import"./moment-fbc5633a.js";import{_ as y}from"./BlankLayout-6e7dc78c.js";import{A as C}from"./ApplicationLogo-45c3a61e.js";import{e as p}from"./vue3-otp-input.esm-4d654214.js";import{_ as B}from"./InputError-eac2e045.js";import"./OnlineStatus-f4736be6.js";import"./index-6908da4b.js";import"./helper-04030b53.js";import"./_plugin-vue_export-helper-c27b6911.js";const O={class:"relative isolate overflow-hidden"},I={class:"mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"},P={class:"mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"},M=t("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},"Masukkan Pin",-1),N=t("p",{class:"text-sm text-gray-600"},"Masukkan pin transaksi kamu",-1),V={class:"mt-10"},A={class:""},E={key:0,class:"text-sm text-red-600 mt-2"},G={__name:"TopupPasca",props:{customer:Object},setup(m){const e=m,s=h({order_id:e.customer.data.ref_id,customer_no:e.customer.data.customer_no,sku:e.customer.data.sku,selling_price:e.customer.data.selling_price,pin:null}),u=()=>{s.pin=o.value,s.post(route("product.topup.pasca"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},d=a(p|null),o=a(""),_=n=>{u()},f=n=>{},x=a(!1);return(n,l)=>(i(),v(y,{title:"Pin"},{default:k(()=>[t("div",O,[t("div",I,[t("div",P,[r(C,{class:"mb-10"}),M,N,t("div",V,[t("div",A,[r(c(p),{ref_key:"otpInput",ref:d,value:o.value,"onUpdate:value":l[0]||(l[0]=g=>o.value=g),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:f,onOnComplete:_},null,8,["value"]),r(B,{message:c(s).errors.pin,class:"mt-2"},null,8,["message"]),x.value?(i(),b("p",E,"Pin salah")):w("",!0)])])])])])]),_:1}))}};export{G as default};

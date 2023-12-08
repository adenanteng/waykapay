import{T as h,d as a,c as v,w as k,o as u,a as t,b as n,u as i,e as y,f as b}from"./app.76649d71.js";import"./moment.9709ab41.js";import"./vue3-lottie.es.dc40f5ae.js";import{_ as q}from"./BlankLayout.d8fba266.js";import{A as w}from"./ApplicationLogo.889754c1.js";import{e as c}from"./vue3-otp-input.esm.57edfdf8.js";import{_ as C}from"./InputError.58ada1b0.js";import"./Banner.34d33dbe.js";import"./helper.e9fc3b37.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B={class:"relative isolate overflow-hidden"},O={class:"mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"},I={class:"mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"},M=t("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},"Masukkan Pin",-1),N=t("p",{class:"text-sm text-gray-600"},"Masukkan pin transaksi kamu",-1),P={class:"mt-10"},V={class:""},A={key:0,class:"text-sm text-red-600 mt-2"},G={__name:"Topup",props:{request:Object},setup(p){const e=p,s=h({customer_no:e.request.customer_no,product_name:e.request.product_name,sku:e.request.sku,amount:e.request.amount,category_id:e.request.category_id,fee:e.request.fee,pin:null}),m=()=>{s.pin=o.value,s.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},d=a(c|null),o=a(""),_=r=>{m()},f=r=>{},x=a(!1);return(r,l)=>(u(),v(q,{title:"Pin"},{default:k(()=>[t("div",B,[t("div",O,[t("div",I,[n(w,{class:"mb-10"}),M,N,t("div",P,[t("div",V,[n(i(c),{ref_key:"otpInput",ref:d,value:o.value,"onUpdate:value":l[0]||(l[0]=g=>o.value=g),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:f,onOnComplete:_},null,8,["value"]),n(C,{message:i(s).errors.pin,class:"mt-2"},null,8,["message"]),x.value?(u(),y("p",A,"Pin salah")):b("",!0)])])])])])]),_:1}))}};export{G as default};

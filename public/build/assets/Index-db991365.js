import{z as K,O as H,T as q,i as Q,d as b,o as t,c as G,w as d,Q as J,b as g,g as c,t as n,a as s,u as p,j as E,v as j,n as x,e as o,f,h as W,F as u}from"./app-d775b913.js";import{_ as Y}from"./AppLayout-b3a2b67f.js";import{_ as Z}from"./TextInput-eceebd05.js";import{_ as ee}from"./InputError-87124f06.js";import{_ as re}from"./PreviousButton-599ea6d5.js";import{_ as se}from"./FormSection-61e4b3f0.js";import{_ as te}from"./ActionMessage-8a80a642.js";import{_ as oe}from"./PrimaryButton-cf8d1efa.js";import{_ as ie}from"./InputLabel-99460797.js";import{a as z}from"./DialogModal-32a49635.js";import{e as B}from"./vue3-otp-input.esm-535b1a76.js";import{b as ne}from"./bcrypt-1a525b9b.js";import"./OnlineStatus-b21b9bab.js";import"./index-b2625300.js";import"./DarkmodeToggle-374a0ed8.js";import"./use-controllable-c8e32799.js";import"./focus-management-ff9ce8ac.js";import"./SectionTitle-92737737.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjs-dynamic-modules-302442b1.js";const ue={class:"col-span-6 sm:col-span-3"},le={class:"border-b border-gray-300"},ce={class:"-mb-px flex","aria-label":"Tabs"},me={class:"border-b border-gray-300"},ae={class:"-mb-px flex","aria-label":"Tabs"},pe={role:"list",class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},be={key:1,class:"grid justify-center text-center px-5 py-3"},_e=s("i",{class:"fa-regular fa-exclamation-triangle text-2xl text-red-600"},null,-1),de=s("p",{class:"text-sm text-gray-600"},"Produk sedang tidak tersedia, coba beberapa saat lagi.",-1),fe=[_e,de],ge={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},ye={class:"flex-shrink-0"},Ne=["src"],xe={class:"flex-1 min-w-0"},ke=["onClick"],he=s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ve={class:"text-sm font-medium text-gray-900"},we={class:"text-sm text-gray-500 truncate"},Ce={key:1,class:"focus:outline-none text-left"},$e={class:"text-sm font-medium text-gray-500"},Re=s("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),Pe={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},Se={class:"flex-shrink-0"},Me=["src"],Ie={class:"flex-1 min-w-0"},Te=["onClick"],De=s("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),Le={class:"text-sm font-medium text-gray-900"},Oe={class:"text-sm text-gray-500 truncate"},Ee={key:1,class:"focus:outline-none text-left"},je={class:"text-sm font-medium text-gray-500"},ze=s("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),Be={class:"grid grid-cols-2 justify-between gap-2"},Ue=s("div",{class:""}," Produk ",-1),Ve={class:"text-right font-medium"},Xe=s("div",{class:""}," No. Tujuan ",-1),Fe={class:"text-right font-medium"},Ae=s("div",{class:""}," Harga ",-1),Ke={class:"text-right font-medium"},He=s("div",{class:""}," Detail Produk ",-1),qe={class:"border border-gray-300 rounded-3xl p-2 mt-2"},Qe={class:"grid items-center w-full"},Ge=s("div",{class:"w-full text-center"}," Masukkan PIN transaksi kamu ",-1),Je={class:"grid justify-center"},We={key:0,class:"w-full text-center text-sm text-red-600 mt-2"},yr={__name:"Index",props:{response:void 0,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(U){const i=U;K(()=>{H.reload({only:["response"]})});const m=q({customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null,pin:null}),{...R}=Q(()=>J().props.user).value,P=()=>{_.value!=null&&(m.fee=_.value),m.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>$()})};function a(e){return(e/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function k(e){if(e.substring(0,4)==="0852"||e.substring(0,4)==="0853"||e.substring(0,4)==="0811"||e.substring(0,4)==="0812"||e.substring(0,4)==="0813"||e.substring(0,4)==="0821"||e.substring(0,4)==="0822"||e.substring(0,4)==="0823"||e.substring(0,4)==="0852")return"TELKOMSEL";if(e.substring(0,4)==="0851")return"by.U";if(e.substring(0,4)==="0815"||e.substring(0,4)==="0857"||e.substring(0,4)==="0856")return"INDOSAT";if(e.substring(0,4)==="0896"||e.substring(0,4)==="0895"||e.substring(0,4)==="0897"||e.substring(0,4)==="0898"||e.substring(0,4)==="0899")return"TRI";if(e.substring(0,4)==="0817"||e.substring(0,4)==="0818"||e.substring(0,4)==="0819"||e.substring(0,4)==="0859"||e.substring(0,4)==="0877"||e.substring(0,4)==="0878")return"XL";if(e.substring(0,4)==="0832"||e.substring(0,4)==="0833"||e.substring(0,4)==="0838")return"AXIS";if(e.substring(0,4)==="0881"||e.substring(0,4)==="0882"||e.substring(0,4)==="0883"||e.substring(0,4)==="0884"||e.substring(0,4)==="0885"||e.substring(0,4)==="0886"||e.substring(0,4)==="0887"||e.substring(0,4)==="0888"||e.substring(0,4)==="0889")return"SMARTFREN"}const v=b(!1);b(null);let S=b(null);b(null);let w=b(null),M=b(null);const _=b(null),I=e=>{m.customer_no!==""&&(v.value=!0,m.sku=e.buyer_sku_code,m.amount=e.price,m.product_name=e.product_name,m.category_id=N.value==="Pulsa"?2:3,e.buyer_sku_code,S=e.product_name,e.brand,Number(e.price)<1e3?_.value=0:Number(e.price)<25e3?_.value=Number(i.fee_25):Number(e.price)<5e4?_.value=Number(i.fee_50):Number(e.price)<75e3?_.value=Number(i.fee_75):Number(e.price)<1e5?_.value=Number(i.fee_100):Number(e.price)<2e5?_.value=Number(i.fee_200):Number(e.price)<5e5?_.value=Number(i.fee_500):Number(e.price)<1e6?_.value=Number(i.fee_1000):_.value=Number(i.fee_max),w=Number(_.value)+Number(e.price),M=e.desc)};function V(e){return e.slice().sort(function(l,h){return l.price-h.price})}const X=()=>{R.pin?(v.value=!1,T.value=!0):P()},$=()=>{v.value=!1},N=b("Pulsa"),y=b("Umum"),T=b(!1),D=b(B|null),L=b(""),O=b(!1),F=e=>{let l=e;l=l.replace(/^\$2y(.+)$/i,"$2a$1"),ne.compare(l,R.pin,function(h,r){var C;r?P():(O.value=!0,(C=D.value)==null||C.clearInput())})},A=e=>{};return(e,l)=>(t(),G(Y,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:d(()=>[g(re)]),default:d(()=>{var h;return[g(se,{class:"sticky top-0 z-40"},{title:d(()=>[c(" Pulsa ")]),description:d(()=>[c(" * Saldo Rekening Rp "+n(a(e.$page.props.user.wallet_balance)),1)]),form:d(()=>[s("div",ue,[g(ie,{for:"number",value:"Nomor HP"}),g(Z,{id:"number",modelValue:p(m).customer_no,"onUpdate:modelValue":l[0]||(l[0]=r=>p(m).customer_no=r),type:"number",class:"mt-1 block w-full",minlength:"10",required:"",autofocus:""},null,8,["modelValue"]),g(ee,{message:p(m).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),E(s("div",le,[s("nav",ce,[s("button",{class:x(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Pulsa"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:l[1]||(l[1]=r=>N.value="Pulsa")}," Pulsa ",2),s("button",{class:x(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",N.value=="Data"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:l[2]||(l[2]=r=>N.value="Data")}," Data ",2)])],512),[[j,p(m).customer_no.length>=4]]),E(s("div",me,[s("nav",ae,[s("button",{class:x(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",y.value=="Umum"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:l[3]||(l[3]=r=>y.value="Umum")}," Umum ",2),k(p(m).customer_no)=="TELKOMSEL"?(t(),o("button",{key:0,class:x(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",y.value=="Combo Sakti"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:l[4]||(l[4]=r=>y.value="Combo Sakti")}," Combo Sakti ",2)):f("",!0),k(p(m).customer_no)=="TELKOMSEL"?(t(),o("button",{key:1,class:x(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",y.value=="Internet Sakti"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:l[5]||(l[5]=r=>y.value="Internet Sakti")}," Internet Sakti ",2)):f("",!0),k(p(m).customer_no)=="XL"?(t(),o("button",{key:2,class:x(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",y.value=="Xtra Combo Mini"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:l[6]||(l[6]=r=>y.value="Xtra Combo Mini")}," Xtra Combo Mini ",2)):f("",!0)])],512),[[j,N.value=="Data"&&p(m).customer_no.length>=4]]),s("ul",pe,[i.response===void 0?(t(),o(u,{key:0},[],64)):(h=i.response.data)!=null&&h.rc?(t(),o("div",be,fe)):(t(!0),o(u,{key:2},W(V(i.response.data),r=>(t(),o(u,null,[N.value=="Pulsa"?(t(),o(u,{key:0},[r.category=="Pulsa"?(t(),o(u,{key:0},[r.brand==k(p(m).customer_no)?(t(),o("li",ge,[s("div",ye,[s("img",{class:"h-10 w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,Ne)]),s("div",xe,[Number(r.price)<Number(e.$page.props.digiflazz_saldo)&&r.buyer_product_status&&r.seller_product_status?(t(),o("button",{key:0,onClick:C=>I(r),class:"focus:outline-none text-left"},[he,s("p",ve,n(r.product_name),1),s("p",we,[Number(r.price)<1e3?(t(),o(u,{key:0},[c(" Rp "+n(a(Number(r.price))),1)],64)):Number(r.price)<25e3?(t(),o(u,{key:1},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_25))),1)],64)):Number(r.price)<5e4?(t(),o(u,{key:2},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_50))),1)],64)):Number(r.price)<75e3?(t(),o(u,{key:3},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_75))),1)],64)):Number(r.price)<1e5?(t(),o(u,{key:4},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_100))),1)],64)):Number(r.price)<2e5?(t(),o(u,{key:5},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_200))),1)],64)):Number(r.price)<5e5?(t(),o(u,{key:6},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_500))),1)],64)):Number(r.price)<1e6?(t(),o(u,{key:7},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_1000))),1)],64)):(t(),o(u,{key:8},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_max))),1)],64))])],8,ke)):(t(),o("div",Ce,[s("p",$e,n(r.product_name),1),Re]))])])):f("",!0)],64)):f("",!0)],64)):f("",!0),N.value=="Data"?(t(),o(u,{key:1},[r.category=="Data"?(t(),o(u,{key:0},[r.brand==k(p(m).customer_no)?(t(),o(u,{key:0},[r.type==y.value?(t(),o("li",Pe,[s("div",Se,[s("img",{class:"h-10 w-10",src:"/img/vendor/"+r.brand+".svg",alt:""},null,8,Me)]),s("div",Ie,[Number(r.price)<Number(e.$page.props.digiflazz_saldo)&&r.buyer_product_status?(t(),o("button",{key:0,onClick:C=>I(r),class:"focus:outline-none text-left"},[De,s("p",Le,n(r.product_name),1),s("p",Oe,[Number(r.price)<1e3?(t(),o(u,{key:0},[c(" Rp "+n(a(Number(r.price))),1)],64)):Number(r.price)<25e3?(t(),o(u,{key:1},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_25))),1)],64)):Number(r.price)<5e4?(t(),o(u,{key:2},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_50))),1)],64)):Number(r.price)<75e3?(t(),o(u,{key:3},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_75))),1)],64)):Number(r.price)<1e5?(t(),o(u,{key:4},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_100))),1)],64)):Number(r.price)<2e5?(t(),o(u,{key:5},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_200))),1)],64)):Number(r.price)<5e5?(t(),o(u,{key:6},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_500))),1)],64)):Number(r.price)<1e6?(t(),o(u,{key:7},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_1000))),1)],64)):(t(),o(u,{key:8},[c(" Rp "+n(a(Number(r.price)+Number(i.fee_max))),1)],64))])],8,Te)):(t(),o("div",Ee,[s("p",je,n(r.product_name),1),ze]))])])):f("",!0)],64)):f("",!0)],64)):f("",!0)],64)):f("",!0)],64))),256))]),g(z,{show:v.value,onClose:$},{title:d(()=>[c(" Lanjutkan Pembayaran ")]),content:d(()=>[s("div",Be,[Ue,s("div",Ve,n(p(S)),1),Xe,s("div",Fe,n(p(m).customer_no),1),Ae,s("div",Ke," Rp "+n(a(p(w))),1),He]),s("div",qe,n(p(M)),1)]),footer:d(()=>[s("div",Qe,[g(te,{on:e.$page.props.user.wallet_balance<=p(w),class:"mr-3"},{default:d(()=>[c(" Saldo anda kurang ")]),_:1},8,["on"]),g(oe,{class:x(["w-full justify-center",{"opacity-25":p(m).processing}]),disabled:p(m).processing||e.$page.props.user.wallet_balance<=p(w),onClick:X},{default:d(()=>[c(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"]),g(z,{show:T.value,onClose:$},{title:d(()=>[Ge]),content:d(()=>[s("div",Je,[g(p(B),{ref_key:"otpInput",ref:D,value:L.value,"onUpdate:value":l[7]||(l[7]=r=>L.value=r),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:A,onOnComplete:F},null,8,["value"]),O.value?(t(),o("p",We,"Pin salah, silahkan coba lagi.")):f("",!0)])]),_:1},8,["show"])]}),_:1}))}};export{yr as default};

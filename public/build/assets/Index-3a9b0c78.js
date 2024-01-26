import{z as G,O as z,T as J,i as W,d as b,I as Y,o as t,c as R,w as d,Q as Z,b as g,g as m,t as i,a as r,u as a,j,v as B,n as N,e as o,f,h as U,F as u}from"./app-0ecba403.js";import{_ as ee}from"./AppLayout-d010e479.js";import{_ as se}from"./TextInput-8e33dcfe.js";import{_ as re}from"./InputError-e09a1aa4.js";import{_ as te}from"./PreviousButton-7dc2ed51.js";import{_ as oe}from"./FormSection-1f1fe7f3.js";import{_ as ne}from"./ActionMessage-bd79595e.js";import{_ as ie}from"./PrimaryButton-a85dd7ab.js";import{_ as ue}from"./InputLabel-39114a98.js";import{a as V}from"./DialogModal-bc03d853.js";import X from"./Loading-046f7704.js";import{e as F}from"./vue3-otp-input.esm-5da8380a.js";import{b as le}from"./bcrypt-40fb0998.js";import"./OnlineStatus-43bffffc.js";import"./index-04e4a021.js";import"./DarkmodeToggle-cf05e819.js";import"./helper-04030b53.js";import"./use-controllable-2af876c8.js";import"./use-resolve-button-type-6c9ad90a.js";import"./BackgroundParticle-03ed74be.js";import"./use-outside-click-7e708575.js";import"./focus-management-3151d16f.js";import"./SectionTitle-83afbb60.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjs-dynamic-modules-302442b1.js";const ce={class:"col-span-6 sm:col-span-3"},me={class:"border-b border-gray-300"},ae={class:"-mb-px flex","aria-label":"Tabs"},pe={class:"border-b border-gray-300"},be={class:"-mb-px flex","aria-label":"Tabs"},_e={role:"list",class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},de={class:"relative px-6 py-5 flex items-center space-x-3"},fe={class:"flex-shrink-0"},ge=["src"],ye=["src"],xe=["onClick"],Ne=r("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ke={class:"text-sm font-medium text-gray-900 capitalize"},he={class:"text-sm text-gray-500 truncate"},ve={key:3,class:"grid justify-center text-center px-5 py-3"},we=r("i",{class:"fa-regular fa-exclamation-triangle text-2xl text-red-600"},null,-1),Ce=r("p",{class:"text-sm text-gray-600"},"Produk sedang tidak tersedia, coba beberapa saat lagi.",-1),$e=[we,Ce],Re={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},Pe={class:"flex-shrink-0"},Se=["src"],Me={class:"flex-1 min-w-0"},Ie=["onClick"],Te=r("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),De={class:"text-sm font-medium text-gray-900"},Le={class:"text-sm text-gray-500 truncate"},Ee={key:1,class:"focus:outline-none text-left"},Oe={class:"text-sm font-medium text-gray-500"},ze=r("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),je={key:0,class:"relative px-6 py-5 flex items-center space-x-3"},Be={class:"flex-shrink-0"},Ue=["src"],Ve={class:"flex-1 min-w-0"},Xe=["onClick"],Fe=r("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),Ae={class:"text-sm font-medium text-gray-900"},Ke={class:"text-sm text-gray-500 truncate"},He={key:1,class:"focus:outline-none text-left"},qe={class:"text-sm font-medium text-gray-500"},Qe=r("p",{class:"text-sm text-gray-500 truncate"},"Tidak tersedia",-1),Ge={class:"grid grid-cols-2 justify-between gap-2"},Je=r("div",{class:""}," Produk ",-1),We={class:"text-right font-medium"},Ye=r("div",{class:""}," No. Tujuan ",-1),Ze={class:"text-right font-medium"},es=r("div",{class:""}," Harga ",-1),ss={class:"text-right font-medium"},rs=r("div",{class:""}," Detail Produk ",-1),ts={class:"border border-gray-300 rounded-3xl p-2 mt-2"},os={class:"grid items-center w-full"},ns=r("div",{class:"w-full text-center"}," Masukkan PIN transaksi kamu ",-1),is={class:"grid justify-center"},us={key:0,class:"w-full text-center text-sm text-red-600 mt-2"},Ds={__name:"Index",props:{response:void 0,customer_list:void 0,fee_25:Number,fee_50:Number,fee_75:Number,fee_100:Number,fee_200:Number,fee_500:Number,fee_1000:Number,fee_max:Number},setup(A){const n=A;G(()=>{z.reload({only:["customer_list"]})});const l=J({brand:null,customer_no:"",product_name:"",sku:"",amount:"",category_id:"",fee:null,pin:null}),{...P}=W(()=>Z().props.user).value,S=()=>{_.value!=null&&(l.fee=_.value),l.brand=k(l.customer_no),l.post(route("product.topup"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>$()})};function p(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function k(s){if(s.substring(0,4)==="0852"||s.substring(0,4)==="0853"||s.substring(0,4)==="0811"||s.substring(0,4)==="0812"||s.substring(0,4)==="0813"||s.substring(0,4)==="0821"||s.substring(0,4)==="0822"||s.substring(0,4)==="0823"||s.substring(0,4)==="0852")return"TELKOMSEL";if(s.substring(0,4)==="0851")return"by.U";if(s.substring(0,4)==="0815"||s.substring(0,4)==="0857"||s.substring(0,4)==="0856")return"INDOSAT";if(s.substring(0,4)==="0896"||s.substring(0,4)==="0895"||s.substring(0,4)==="0897"||s.substring(0,4)==="0898"||s.substring(0,4)==="0899")return"TRI";if(s.substring(0,4)==="0817"||s.substring(0,4)==="0818"||s.substring(0,4)==="0819"||s.substring(0,4)==="0859"||s.substring(0,4)==="0877"||s.substring(0,4)==="0878")return"XL";if(s.substring(0,4)==="0832"||s.substring(0,4)==="0833"||s.substring(0,4)==="0838")return"AXIS";if(s.substring(0,4)==="0881"||s.substring(0,4)==="0882"||s.substring(0,4)==="0883"||s.substring(0,4)==="0884"||s.substring(0,4)==="0885"||s.substring(0,4)==="0886"||s.substring(0,4)==="0887"||s.substring(0,4)==="0888"||s.substring(0,4)==="0889")return"SMARTFREN"}const w=b(!1);b(null);let M=b(null);b(null);let C=b(null),I=b(null);const _=b(null),T=s=>{l.customer_no!==""&&(w.value=!0,l.sku=s.buyer_sku_code,l.amount=s.price,l.product_name=s.product_name,l.category_id=x.value==="Pulsa"?2:3,s.buyer_sku_code,M=s.product_name,s.brand,Number(s.price)<1e3?_.value=0:Number(s.price)<25e3?_.value=Number(n.fee_25):Number(s.price)<5e4?_.value=Number(n.fee_50):Number(s.price)<75e3?_.value=Number(n.fee_75):Number(s.price)<1e5?_.value=Number(n.fee_100):Number(s.price)<2e5?_.value=Number(n.fee_200):Number(s.price)<5e5?_.value=Number(n.fee_500):Number(s.price)<1e6?_.value=Number(n.fee_1000):_.value=Number(n.fee_max),C=Number(_.value)+Number(s.price),I=s.desc)};function K(s){return s.slice().sort(function(c,h){return c.price-h.price})}const H=()=>{P.pin?(w.value=!1,D.value=!0):S()},$=()=>{w.value=!1},x=b("Pulsa"),y=b("Umum"),D=b(!1),L=b(F|null),E=b(""),O=b(!1),q=s=>{let c=s;c=c.replace(/^\$2y(.+)$/i,"$2a$1"),le.compare(c,P.pin,function(h,e){var v;e?S():(O.value=!0,(v=L.value)==null||v.clearInput())})},Q=s=>{};return typeof window<"u"&&Y(()=>{var s;l.customer_no.length>=4&&(n.response===void 0||(s=n.response.data)!=null&&s.rc)&&z.reload({only:["response"]})}),(s,c)=>(t(),R(ee,{title:"Pulsa",name:"Pulsa",desc:"Masukkan nomor"},{previous:d(()=>[g(te)]),default:d(()=>{var h;return[g(oe,{class:"sticky top-0 z-40"},{title:d(()=>[m(" Pulsa ")]),description:d(()=>[m(" * Saldo Rekening Rp "+i(p(s.$page.props.user.wallet_balance)),1)]),form:d(()=>[r("div",ce,[g(ue,{for:"number",value:"Nomor HP"}),g(se,{id:"number",modelValue:a(l).customer_no,"onUpdate:modelValue":c[0]||(c[0]=e=>a(l).customer_no=e),type:"number",class:"mt-1 block w-full",minlength:"10",required:"",autofocus:""},null,8,["modelValue"]),g(re,{message:a(l).errors.customer_no,class:"mt-2"},null,8,["message"])])]),_:1}),j(r("div",me,[r("nav",ae,[r("button",{class:N(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",x.value=="Pulsa"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:c[1]||(c[1]=e=>x.value="Pulsa")}," Pulsa ",2),r("button",{class:N(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",x.value=="Data"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:c[2]||(c[2]=e=>x.value="Data")}," Data ",2)])],512),[[B,a(l).customer_no.length>=5]]),j(r("div",pe,[r("nav",be,[r("button",{class:N(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",y.value=="Umum"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:c[3]||(c[3]=e=>y.value="Umum")}," Umum ",2),k(a(l).customer_no)=="TELKOMSEL"?(t(),o("button",{key:0,class:N(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",y.value=="Combo Sakti"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:c[4]||(c[4]=e=>y.value="Combo Sakti")}," Combo Sakti ",2)):f("",!0),k(a(l).customer_no)=="TELKOMSEL"?(t(),o("button",{key:1,class:N(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",y.value=="Internet Sakti"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:c[5]||(c[5]=e=>y.value="Internet Sakti")}," Internet Sakti ",2)):f("",!0),k(a(l).customer_no)=="XL"?(t(),o("button",{key:2,class:N(["w-full py-4 px-1 text-center border-b-2 font-medium text-sm",y.value=="Xtra Combo Mini"?"border-primary-500 text-primary-600":"text-gray-500 border-gray-300"]),onClick:c[6]||(c[6]=e=>y.value="Xtra Combo Mini")}," Xtra Combo Mini ",2)):f("",!0)])],512),[[B,x.value=="Data"&&a(l).customer_no.length>=5]]),r("ul",_e,[n.customer_list===void 0?(t(),R(X,{key:0})):a(l).customer_no.length<=4?(t(!0),o(u,{key:1},U(n.customer_list,e=>(t(),o("li",de,[r("div",fe,[r("img",{class:"w-10",src:"/img/vendor/"+e.brand+".png",alt:""},null,8,ge),r("img",{class:"w-10",src:"/img/vendor/"+e.brand+".svg",alt:""},null,8,ye)]),r("div",{onClick:v=>a(l).customer_no=e.customer_no,class:"flex-1 min-w-0"},[r("button",{onClick:c[7]||(c[7]=()=>{}),class:"focus:outline-none text-left"},[Ne,r("p",ke,i(e.customer_name),1),r("p",he,i(e.customer_no),1)])],8,xe)]))),256)):n.response===void 0?(t(),R(X,{key:2})):(h=n.response.data)!=null&&h.rc?(t(),o("div",ve,$e)):(t(!0),o(u,{key:4},U(K(n.response.data),e=>(t(),o(u,null,[x.value=="Pulsa"?(t(),o(u,{key:0},[e.category=="Pulsa"?(t(),o(u,{key:0},[e.brand==k(a(l).customer_no)?(t(),o("li",Re,[r("div",Pe,[r("img",{class:"h-10 w-10",src:"/img/vendor/"+e.brand+".svg",alt:""},null,8,Se)]),r("div",Me,[Number(e.price)<Number(s.$page.props.digiflazz_saldo)&&e.buyer_product_status&&e.seller_product_status?(t(),o("button",{key:0,onClick:v=>T(e),class:"focus:outline-none text-left"},[Te,r("p",De,i(e.product_name),1),r("p",Le,[Number(e.price)<1e3?(t(),o(u,{key:0},[m(" Rp "+i(p(Number(e.price))),1)],64)):Number(e.price)<25e3?(t(),o(u,{key:1},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_25))),1)],64)):Number(e.price)<5e4?(t(),o(u,{key:2},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_50))),1)],64)):Number(e.price)<75e3?(t(),o(u,{key:3},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_75))),1)],64)):Number(e.price)<1e5?(t(),o(u,{key:4},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_100))),1)],64)):Number(e.price)<2e5?(t(),o(u,{key:5},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_200))),1)],64)):Number(e.price)<5e5?(t(),o(u,{key:6},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_500))),1)],64)):Number(e.price)<1e6?(t(),o(u,{key:7},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_1000))),1)],64)):(t(),o(u,{key:8},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_max))),1)],64))])],8,Ie)):(t(),o("div",Ee,[r("p",Oe,i(e.product_name),1),ze]))])])):f("",!0)],64)):f("",!0)],64)):f("",!0),x.value=="Data"?(t(),o(u,{key:1},[e.category=="Data"?(t(),o(u,{key:0},[e.brand==k(a(l).customer_no)?(t(),o(u,{key:0},[e.type==y.value?(t(),o("li",je,[r("div",Be,[r("img",{class:"w-10",src:"/img/vendor/"+e.brand+".svg",alt:""},null,8,Ue)]),r("div",Ve,[Number(e.price)<Number(s.$page.props.digiflazz_saldo)&&e.buyer_product_status?(t(),o("button",{key:0,onClick:v=>T(e),class:"focus:outline-none text-left"},[Fe,r("p",Ae,i(e.product_name),1),r("p",Ke,[Number(e.price)<1e3?(t(),o(u,{key:0},[m(" Rp "+i(p(Number(e.price))),1)],64)):Number(e.price)<25e3?(t(),o(u,{key:1},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_25))),1)],64)):Number(e.price)<5e4?(t(),o(u,{key:2},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_50))),1)],64)):Number(e.price)<75e3?(t(),o(u,{key:3},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_75))),1)],64)):Number(e.price)<1e5?(t(),o(u,{key:4},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_100))),1)],64)):Number(e.price)<2e5?(t(),o(u,{key:5},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_200))),1)],64)):Number(e.price)<5e5?(t(),o(u,{key:6},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_500))),1)],64)):Number(e.price)<1e6?(t(),o(u,{key:7},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_1000))),1)],64)):(t(),o(u,{key:8},[m(" Rp "+i(p(Number(e.price)+Number(n.fee_max))),1)],64))])],8,Xe)):(t(),o("div",He,[r("p",qe,i(e.product_name),1),Qe]))])])):f("",!0)],64)):f("",!0)],64)):f("",!0)],64)):f("",!0)],64))),256))]),g(V,{show:w.value,onClose:$},{title:d(()=>[m(" Lanjutkan Pembayaran ")]),content:d(()=>[r("div",Ge,[Je,r("div",We,i(a(M)),1),Ye,r("div",Ze,i(a(l).customer_no),1),es,r("div",ss," Rp "+i(p(a(C))),1),rs]),r("div",ts,i(a(I)),1)]),footer:d(()=>[r("div",os,[g(ne,{on:s.$page.props.user.wallet_balance<=a(C),class:"mr-3"},{default:d(()=>[m(" Saldo anda kurang ")]),_:1},8,["on"]),g(ie,{class:N(["w-full justify-center",{"opacity-25":a(l).processing}]),disabled:a(l).processing||s.$page.props.user.wallet_balance<=a(C),onClick:H},{default:d(()=>[m(" Beli ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"]),g(V,{show:D.value,onClose:$},{title:d(()=>[ns]),content:d(()=>[r("div",is,[g(a(F),{ref_key:"otpInput",ref:L,value:E.value,"onUpdate:value":c[8]||(c[8]=e=>E.value=e),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:Q,onOnComplete:q},null,8,["value"]),O.value?(t(),o("p",us,"Pin salah, silahkan coba lagi.")):f("",!0)])]),_:1},8,["show"])]}),_:1}))}};export{Ds as default};

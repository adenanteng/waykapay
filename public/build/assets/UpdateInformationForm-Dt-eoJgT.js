import{T as U,k as z,d as c,p as F,z as T,D as K,o as i,e as f,b as l,w as r,c as R,f as I,F as C,Q as q,a as s,t as p,g as x,u,n as L}from"./app-DIj1AIGT.js";import{_ as Q}from"./ActionMessage-J1sZ07UF.js";import{_ as G}from"./FormSection-C92xadbM.js";import{_ as V}from"./InputError-B5mJH3He.js";import{_ as A}from"./InputLabel-CG4klQP5.js";import{_ as H}from"./PrimaryButton-DdyNBhSw.js";import{_ as J}from"./TextInput-BfDTj5vF.js";import{_ as W}from"./ActionSection-BMAsB1pj.js";import{_ as X}from"./TextAreaInput-D0wd83II.js";import{e as B}from"./vue3-otp-input.esm-BpdoiaiK.js";import{b as Y}from"./bcrypt-BMhoAxQk.js";import{a as Z}from"./DialogModal-BUBI5Flq.js";import{P as ee,E as se}from"./echo-DFctjmtm.js";import"./SectionTitle-BgADvdRT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const ae={key:0,class:"flex items-center px-2"},te={class:"flex-shrink-0"},ne=["src","alt"],oe={class:"ml-3 min-w-0 flex-1"},le={class:"text-base font-medium text-gray-800 truncate capitalize"},re={class:"text-sm font-medium text-gray-500 truncate"},ce={key:1,class:"text-center"},ie=s("i",{class:"fa-regular fa-triangle-exclamation text-2xl text-red-600"},null,-1),ue={class:"text-gray-900"},me={key:2,class:"fa-regular fa-spinner-third animate-spin"},fe={key:1,class:"flex items-center px-2"},pe={class:"flex-shrink-0"},de=["src","alt"],_e={class:"ml-3 min-w-0 flex-1"},be={class:"text-base font-medium text-gray-800 truncate capitalize"},ve={class:"text-sm font-medium text-gray-500 truncate"},ye={class:"col-span-6 sm:col-span-3"},ge={class:"relative"},he=s("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"}," Rp ",-1),xe={class:"mt-1 text-xs text-gray-600"},ke={class:"col-span-6 sm:col-span-4"},we=s("div",{class:"w-full text-center"}," Masukkan PIN transaksi kamu ",-1),Ne={class:"grid justify-center"},$e={key:0,class:"w-full text-center text-sm text-red-600 mt-2"},Ke={__name:"UpdateInformationForm",props:{users:Object|String,beneficiary:Object|String,token:String,response:Object|String,bank:Object,account_no:String},setup(M){const t=M,n=U({amount:null,bank:t.bank,account_no:t.account_no,desc:null,beneficiary:t.beneficiary??null,token:t.token??null}),{...g}=z(()=>q().props.user).value,k=c(null),w=()=>{Number(m.value)>=Number(g.wallet_balance)?(b.value=!1,k.value="Saldo kurang"):t.beneficiary?(n.amount=m.value.replaceAll(".",""),n.beneficiary.beneficiaryDetails.beneficiaryName=d.value,n.post(route("money-transfer.confirmAyo"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{var a;(a=v.value)==null||a.clearInput()}})):(n.amount=m.value.replaceAll(".",""),n.post(route("money-transfer.confirm"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onSuccess:()=>{var a;(a=v.value)==null||a.clearInput()}}))};function O(a){return(a/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const m=c(null);F(m,a=>{m.value=a.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")});const b=c(!1),v=c(B|null),N=c(""),$=c(!1),E=()=>{g.pin?b.value=!0:w()},j=()=>{b.value=!1},D=a=>{let e=a;e=e.replace(/^\$2y(.+)$/i,"$2a$1"),Y.compare(e,g.pin,function(o,y){var _;y?w():($.value=!0,(_=v.value)==null||_.clearInput())})},P=a=>{},d=c(),h=c();return typeof window<"u"&&(window.Pusher=ee,window.Echo=new se({broadcaster:"pusher",key:"e4c42e8e3951c6ee37f6",cluster:"ap1",forceTLS:!0}),window.Echo.channel("ayo-beneficiary-channel").listen(".ayo-beneficiary-event",function(e){var o,y,_,S;e.action==="success"&&((y=(o=t.beneficiary)==null?void 0:o.beneficiaryDetails)==null?void 0:y.beneficiaryAccountNumber)==e.beneficiaryAccountNumber?(d.value=e.beneficiaryName,console.log(e.beneficiaryName,e.beneficiaryAccountNumber)):e.action==="error"&&((S=(_=t.beneficiary)==null?void 0:_.beneficiaryDetails)==null?void 0:S.beneficiaryAccountNumber)==e.beneficiaryAccountNumber?(h.value=e.message,console.log(e.message,e.beneficiaryAccountNumber)):console.log(e)})),T(()=>{}),K(()=>{window.Echo.leave("ayo-beneficiary-channel")}),(a,e)=>(i(),f(C,null,[l(W,null,{title:r(()=>[]),description:r(()=>[]),content:r(()=>{var o;return[t.beneficiary?(i(),f("div",ae,[d.value?(i(),f(C,{key:0},[s("div",te,[s("img",{class:"h-5 w-full",src:t.bank.logo,alt:t.bank.name},null,8,ne)]),s("div",oe,[s("div",le,p(d.value),1),s("div",re,p(t.account_no),1)])],64)):h.value?(i(),f("div",ce,[ie,s("p",ue,p(h.value),1)])):(i(),f("i",me))])):(i(),f("div",fe,[s("div",pe,[s("img",{class:"h-5 w-full",src:t.bank.logo,alt:t.bank.name},null,8,de)]),s("div",_e,[s("div",be,p((o=t.users)==null?void 0:o.name),1),s("div",ve,p(t.account_no),1)])]))]}),_:1}),d.value||!t.beneficiary?(i(),R(G,{key:0},{title:r(()=>[x(" Mau Transfer berapa? ")]),description:r(()=>[]),form:r(()=>[s("div",ye,[l(A,{for:"amount",value:"Nominal"}),s("div",ge,[he,l(J,{id:"amount",modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=o=>m.value=o),type:"tel",class:"mt-1 block w-full pl-10",min:"1",max:Number(a.$page.props.user.wallet_balance)<=2e6?a.$page.props.user.wallet_balance:2e6,required:"",autofocus:""},null,8,["modelValue","max"])]),l(V,{message:u(n).errors.amount||k.value,class:"mt-2"},null,8,["message"]),s("p",xe," Max Rp "+p(Number(a.$page.props.user.wallet_balance)<=2e6?O(a.$page.props.user.wallet_balance):"2.000.000"),1)]),s("div",ke,[l(A,{for:"amount",value:"Keterangan"}),l(X,{id:"desc",modelValue:u(n).desc,"onUpdate:modelValue":e[1]||(e[1]=o=>u(n).desc=o),type:"text",class:"mt-1 block w-full",rows:"1"},null,8,["modelValue"]),l(V,{message:u(n).errors.desc,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[l(Q,{on:u(n).recentlySuccessful,class:"mr-3"},{default:r(()=>[x(" Berhasil disimpan. ")]),_:1},8,["on"]),l(H,{class:L(["w-full justify-center",{"opacity-25":u(n).processing}]),disabled:u(n).processing,onClick:E},{default:r(()=>[x(" Konfirmasi ")]),_:1},8,["class","disabled"])]),_:1})):I("",!0),l(Z,{show:b.value,onClose:j},{title:r(()=>[we]),content:r(()=>[s("div",Ne,[l(u(B),{ref_key:"otpInput",ref:v,value:N.value,"onUpdate:value":e[2]||(e[2]=o=>N.value=o),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:P,onOnComplete:D},null,8,["value"]),$.value?(i(),f("p",$e,"Pin salah, silahkan coba lagi.")):I("",!0)])]),_:1},8,["show"])],64))}};export{Ke as default};

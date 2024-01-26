import{d as T,K as J,i as B,y as ve,z as q,s as de,B as ae,F as E,D as me,I as fe,q as j,J as be,$ as I,O as ge,T as xe,o as $,e as C,b as m,w as f,a as b,c as le,u as r,h as Q,f as U,g as P,n as V,t as z,N as ye}from"./app-0ecba403.js";import{_ as H}from"./ActionMessage-bd79595e.js";import{_ as G}from"./FormSection-1f1fe7f3.js";import{_ as X}from"./InputError-e09a1aa4.js";import{_ as Z}from"./InputLabel-39114a98.js";import{_ as oe}from"./PrimaryButton-a85dd7ab.js";import{_ as ne}from"./TextInput-8e33dcfe.js";import{h as _e}from"./moment-fbc5633a.js";import he from"./Loading-046f7704.js";import{k as ke,E as Se,S as Oe,r as we}from"./CheckCircleIcon-d8e08ff9.js";import{o as O,d as Be,u as N,e as Le,f as Re,K as Te,a as De,H as W,T as Ie,t as ee,N as ie,b as S}from"./use-controllable-2af876c8.js";import{x as $e,a as D,y as Pe,c as Ae,l as K,p as Ve}from"./use-outside-click-7e708575.js";import{b as Ce}from"./use-resolve-button-type-6c9ad90a.js";import{w as Ne,h as Fe,O as je}from"./focus-management-3151d16f.js";import"./SectionTitle-83afbb60.js";import"./_plugin-vue_export-helper-c27b6911.js";function se(t){return[t.screenX,t.screenY]}function Ee(){let t=T([-1,-1]);return{wasMoved(u){let d=se(u);return t.value[0]===d[0]&&t.value[1]===d[1]?!1:(t.value=d,!0)},update(u){t.value=se(u)}}}let re=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ue(t){var u,d;let _=(u=t.innerText)!=null?u:"",e=t.cloneNode(!0);if(!(e instanceof HTMLElement))return _;let p=!1;for(let o of e.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))o.remove(),p=!0;let g=p?(d=e.innerText)!=null?d:"":_;return re.test(g)&&(g=g.replace(re,"")),g}function Me(t){let u=t.getAttribute("aria-label");if(typeof u=="string")return u.trim();let d=t.getAttribute("aria-labelledby");if(d){let _=d.split(" ").map(e=>{let p=document.getElementById(e);if(p){let g=p.getAttribute("aria-label");return typeof g=="string"?g.trim():ue(p).trim()}return null}).filter(Boolean);if(_.length>0)return _.join(", ")}return ue(t).trim()}function Ue(t){let u=T(""),d=T("");return()=>{let _=O(t);if(!_)return"";let e=_.innerText;if(u.value===e)return d.value;let p=Me(_).trim().toLowerCase();return u.value=e,d.value=p,p}}function ze(t,u){return t===u}var He=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(He||{}),qe=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(qe||{}),Ke=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Ke||{});function Je(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ce=Symbol("ListboxContext");function Y(t){let u=be(ce,null);if(u===null){let d=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,Y),d}return u}let We=J({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>ze},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:u,attrs:d,emit:_}){let e=T(1),p=T(null),g=T(null),o=T(null),h=T([]),a=T(""),l=T(null),y=T(1);function n(i=s=>s){let s=l.value!==null?h.value[l.value]:null,c=je(i(h.value.slice()),R=>O(R.dataRef.domRef)),x=s?c.indexOf(s):null;return x===-1&&(x=null),{options:c,activeOptionIndex:x}}let k=B(()=>t.multiple?1:0),[w,F]=Be(B(()=>t.modelValue),i=>_("update:modelValue",i),B(()=>t.defaultValue)),A=B(()=>w.value===void 0?N(k.value,{[1]:[],[0]:void 0}):w.value),v={listboxState:e,value:A,mode:k,compare(i,s){if(typeof t.by=="string"){let c=t.by;return(i==null?void 0:i[c])===(s==null?void 0:s[c])}return t.by(i,s)},orientation:B(()=>t.horizontal?"horizontal":"vertical"),labelRef:p,buttonRef:g,optionsRef:o,disabled:B(()=>t.disabled),options:h,searchQuery:a,activeOptionIndex:l,activationTrigger:y,closeListbox(){t.disabled||e.value!==1&&(e.value=1,l.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(i,s,c){if(t.disabled||e.value===1)return;let x=n(),R=$e(i===D.Specific?{focus:D.Specific,id:s}:{focus:i},{resolveItems:()=>x.options,resolveActiveIndex:()=>x.activeOptionIndex,resolveId:M=>M.id,resolveDisabled:M=>M.dataRef.disabled});a.value="",l.value=R,y.value=c??1,h.value=x.options},search(i){if(t.disabled||e.value===1)return;let s=a.value!==""?0:1;a.value+=i.toLowerCase();let c=(l.value!==null?h.value.slice(l.value+s).concat(h.value.slice(0,l.value+s)):h.value).find(R=>R.dataRef.textValue.startsWith(a.value)&&!R.dataRef.disabled),x=c?h.value.indexOf(c):-1;x===-1||x===l.value||(l.value=x,y.value=1)},clearSearch(){t.disabled||e.value!==1&&a.value!==""&&(a.value="")},registerOption(i,s){let c=n(x=>[...x,{id:i,dataRef:s}]);h.value=c.options,l.value=c.activeOptionIndex},unregisterOption(i){let s=n(c=>{let x=c.findIndex(R=>R.id===i);return x!==-1&&c.splice(x,1),c});h.value=s.options,l.value=s.activeOptionIndex,y.value=1},theirOnChange(i){t.disabled||F(i)},select(i){t.disabled||F(N(k.value,{[0]:()=>i,[1]:()=>{let s=I(v.value.value).slice(),c=I(i),x=s.findIndex(R=>v.compare(c,I(R)));return x===-1?s.push(c):s.splice(x,1),s}}))}};Pe([g,o],(i,s)=>{var c;v.closeListbox(),Ne(s,Fe.Loose)||(i.preventDefault(),(c=O(g))==null||c.focus())},B(()=>e.value===0)),ve(ce,v),Ae(B(()=>N(e.value,{[0]:K.Open,[1]:K.Closed})));let L=B(()=>{var i;return(i=O(g))==null?void 0:i.closest("form")});return q(()=>{de([L],()=>{if(!L.value||t.defaultValue===void 0)return;function i(){v.theirOnChange(t.defaultValue)}return L.value.addEventListener("reset",i),()=>{var s;(s=L.value)==null||s.removeEventListener("reset",i)}},{immediate:!0})}),()=>{let{name:i,modelValue:s,disabled:c,form:x,...R}=t,M={open:e.value===0,disabled:c,value:A.value};return ae(E,[...i!=null&&A.value!=null?Le({[i]:A.value}).map(([te,pe])=>ae(Re,Te({features:De.Hidden,key:te,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:x,name:te,value:pe}))):[],W({ourProps:{},theirProps:{...d,...Ie(R,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:M,slots:u,attrs:d,name:"Listbox"})])}}}),Ye=J({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${ee()}`}},setup(t,{attrs:u,slots:d,expose:_}){let e=Y("ListboxButton");_({el:e.buttonRef,$el:e.buttonRef});function p(a){switch(a.key){case S.Space:case S.Enter:case S.ArrowDown:a.preventDefault(),e.openListbox(),j(()=>{var l;(l=O(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(D.First)});break;case S.ArrowUp:a.preventDefault(),e.openListbox(),j(()=>{var l;(l=O(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(D.Last)});break}}function g(a){switch(a.key){case S.Space:a.preventDefault();break}}function o(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),j(()=>{var l;return(l=O(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),Je(()=>{var l;return(l=O(e.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let h=Ce(B(()=>({as:t.as,type:u.type})),e.buttonRef);return()=>{var a,l;let y={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:n,...k}=t,w={ref:e.buttonRef,id:n,type:h.value,"aria-haspopup":"listbox","aria-controls":(a=O(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(l=O(e.labelRef))==null?void 0:l.id,n].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:p,onKeyup:g,onClick:o};return W({ourProps:w,theirProps:k,slot:y,attrs:u,slots:d,name:"ListboxButton"})}}}),Qe=J({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${ee()}`}},setup(t,{attrs:u,slots:d,expose:_}){let e=Y("ListboxOptions"),p=T(null);_({el:e.optionsRef,$el:e.optionsRef});function g(a){switch(p.value&&clearTimeout(p.value),a.key){case S.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case S.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let l=e.options.value[e.activeOptionIndex.value];e.select(l.dataRef.value)}e.mode.value===0&&(e.closeListbox(),j(()=>{var l;return(l=O(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case N(e.orientation.value,{vertical:S.ArrowDown,horizontal:S.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(D.Next);case N(e.orientation.value,{vertical:S.ArrowUp,horizontal:S.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(D.Previous);case S.Home:case S.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(D.First);case S.End:case S.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(D.Last);case S.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),j(()=>{var l;return(l=O(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case S.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),p.value=setTimeout(()=>e.clearSearch(),350));break}}let o=Ve(),h=B(()=>o!==null?(o.value&K.Open)===K.Open:e.listboxState.value===0);return()=>{var a,l,y,n;let k={open:e.listboxState.value===0},{id:w,...F}=t,A={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(n=(l=O(e.labelRef))==null?void 0:l.id)!=null?n:(y=O(e.buttonRef))==null?void 0:y.id,"aria-orientation":e.orientation.value,id:w,onKeydown:g,role:"listbox",tabIndex:0,ref:e.optionsRef};return W({ourProps:A,theirProps:F,slot:k,attrs:u,slots:d,features:ie.RenderStrategy|ie.Static,visible:h.value,name:"ListboxOptions"})}}}),Ge=J({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${ee()}`}},setup(t,{slots:u,attrs:d,expose:_}){let e=Y("ListboxOption"),p=T(null);_({el:p,$el:p});let g=B(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),o=B(()=>N(e.mode.value,{[0]:()=>e.compare(I(e.value.value),I(t.value)),[1]:()=>I(e.value.value).some(v=>e.compare(I(v),I(t.value)))})),h=B(()=>N(e.mode.value,{[1]:()=>{var v;let L=I(e.value.value);return((v=e.options.value.find(i=>L.some(s=>e.compare(I(s),I(i.dataRef.value)))))==null?void 0:v.id)===t.id},[0]:()=>o.value})),a=Ue(p),l=B(()=>({disabled:t.disabled,value:t.value,get textValue(){return a()},domRef:p}));q(()=>e.registerOption(t.id,l)),me(()=>e.unregisterOption(t.id)),q(()=>{de([e.listboxState,o],()=>{e.listboxState.value===0&&o.value&&N(e.mode.value,{[1]:()=>{h.value&&e.goToOption(D.Specific,t.id)},[0]:()=>{e.goToOption(D.Specific,t.id)}})},{immediate:!0})}),fe(()=>{e.listboxState.value===0&&g.value&&e.activationTrigger.value!==0&&j(()=>{var v,L;return(L=(v=O(p))==null?void 0:v.scrollIntoView)==null?void 0:L.call(v,{block:"nearest"})})});function y(v){if(t.disabled)return v.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),j(()=>{var L;return(L=O(e.buttonRef))==null?void 0:L.focus({preventScroll:!0})}))}function n(){if(t.disabled)return e.goToOption(D.Nothing);e.goToOption(D.Specific,t.id)}let k=Ee();function w(v){k.update(v)}function F(v){k.wasMoved(v)&&(t.disabled||g.value||e.goToOption(D.Specific,t.id,0))}function A(v){k.wasMoved(v)&&(t.disabled||g.value&&e.goToOption(D.Nothing))}return()=>{let{disabled:v}=t,L={active:g.value,selected:o.value,disabled:v},{id:i,value:s,disabled:c,...x}=t,R={id:i,ref:p,role:"option",tabIndex:v===!0?void 0:-1,"aria-disabled":v===!0?!0:void 0,"aria-selected":o.value,disabled:void 0,onClick:y,onFocus:n,onPointerenter:w,onMouseenter:w,onPointermove:F,onMousemove:F,onPointerleave:A,onMouseleave:A};return W({ourProps:R,theirProps:x,slot:L,attrs:d,slots:u,name:"ListboxOption"})}}});const Xe={class:"col-span-6"},Ze={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},et={class:"flex flex-1 justify-center items-center h-full"},tt={class:"inline-flex items-center"},at={class:"col-span-6"},lt={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},ot={class:"relative px-6 py-5 flex items-center space-x-3"},nt={class:"flex-shrink-0"},it=["src"],st=["onClick"],rt=b("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ut={class:"text-sm font-medium text-gray-900"},dt={class:"text-sm text-gray-500 truncate"},ct={class:"col-span-6"},pt={class:"relative mt-1"},vt={class:"block truncate"},mt=b("span",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},[b("i",{class:"fa-regular fa-arrows-up-down text-gray-400 mr-2"})],-1),ft={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600"},bt=b("i",{class:"fa-duotone fa-check"},null,-1),gt=[bt],xt={key:1,class:"absolute inset-y-0 flex items-center right-0 pr-3 text-xs text-red-400 font-medium"},yt={class:"col-span-6 mt-5"},Ct={__name:"UpdateBankForm",props:{response:Object|String,customer_list:void 0},setup(t){const u=t;q(()=>{ge.reload({only:["customer_list"]})});const d=T(),_=l=>{d.value=l,o.reset()},e=[{id:1,name:"Sesama Waykapay",icon:"fa-wallet",desc:0,disabled:!1},{id:2,name:"Transfer Bank",icon:"fa-bank",desc:0,disabled:!1}],p=[{id:1,name:"wkp",title:"Waykapay",logo:"/img/vendor/WAYKAPAY-LONG.svg",admin:0,disabled:!1}],g=[{id:2,name:"CENAIDJA",title:"BCA",logo:"/img/vendor/BCA.svg",admin:0,disabled:!1},{id:3,name:"BNINIDJA",title:"BNI",logo:"/img/vendor/BNI.svg",admin:0,disabled:!1},{id:4,name:"BRINIDJA",title:"BRI",logo:"/img/vendor/BRI.svg",admin:0,disabled:!0},{id:5,name:"BMRIIDJA",title:"Mandiri",logo:"/img/vendor/MANDIRI.svg",admin:0,disabled:!1},{id:6,name:"permata",title:"Permata Bank",logo:"/img/vendor/PERMATA.svg",admin:0,disabled:!0},{id:7,name:"bsm",title:"BSI",logo:"/img/vendor/BSI.svg",admin:0,disabled:!0}],o=xe({bank:null,account_no:""}),h=()=>{o.bank==null&&(o.bank=p[0]),o.post(route("money-transfer.amount"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},a=_e().format("HH");return(l,y)=>($(),C(E,null,[m(G,null,{title:f(()=>[P(" Mau transfer kemana? ")]),description:f(()=>[]),form:f(()=>[b("div",Xe,[m(r(ke),null,{default:f(()=>[b("div",Ze,[($(),C(E,null,Q(e,n=>m(r(Se),{onClick:k=>_(n.id),as:"template",key:n.id,value:n,disabled:n.disabled,class:V(n.disabled?"bg-gray-200 opacity-75":"")},{default:f(({checked:k,active:w})=>[b("div",{class:V([k?"border-transparent":"border-gray-300",w?"border-primary-500 ring-2 ring-primary-500":"","relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"])},[b("div",et,[b("div",tt,[b("i",{class:V(["fa-duotone text-primary-600 text-lg mr-2",n.icon])},null,2),m(r(Oe),{as:"span",class:"flex text-sm font-medium text-gray-900"},{default:f(()=>[P(z(n.name),1)]),_:2},1024)])]),m(r(we),{class:V([k?"":"invisible","h-5 w-5 text-primary-600"]),"aria-hidden":"true"},null,8,["class"]),b("span",{class:V([w?"border":"border-2",k?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["onClick","value","disabled","class"])),64))])]),_:1})])]),_:1}),d.value==1?($(),C(E,{key:0},[m(G,{onSubmitted:h},{title:f(()=>[P(" Nomor handphone tujuan ")]),description:f(()=>[]),form:f(()=>[b("div",at,[m(Z,{for:"amount",value:"Nomor handphone tujuan"}),m(ne,{id:"account_no",modelValue:r(o).account_no,"onUpdate:modelValue":y[0]||(y[0]=n=>r(o).account_no=n),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),m(X,{message:r(o).errors.account_no,class:"mt-2"},null,8,["message"])])]),actions:f(()=>[m(H,{on:r(o).recentlySuccessful,class:"mr-3"},{default:f(()=>[P(" Berhasil disimpan. ")]),_:1},8,["on"]),m(H,{on:r(a)>=23,class:"mr-3"},{default:f(()=>[P(" Sistem cut off. ")]),_:1},8,["on"]),m(oe,{class:V({"opacity-25":r(o).processing}),disabled:r(o).account_no===""||r(a)>=23},{default:f(()=>[P(" Lanjutkan ")]),_:1},8,["class","disabled"])]),_:1}),b("ul",lt,[u.customer_list===void 0?($(),le(he,{key:0})):r(o).account_no.length<=1?($(!0),C(E,{key:1},Q(u.customer_list,n=>($(),C("li",ot,[b("div",nt,[b("img",{class:"w-10",src:"/img/vendor/"+n.brand+".png",alt:""},null,8,it)]),b("div",{onClick:k=>r(o).account_no=n.customer_no,class:"flex-1 min-w-0"},[b("button",{onClick:y[1]||(y[1]=()=>{}),class:"focus:outline-none text-left"},[rt,b("p",ut,z(n.customer_name),1),b("p",dt,z(n.customer_no),1)])],8,st)]))),256)):U("",!0)])],64)):U("",!0),d.value==2?($(),le(G,{key:1,onSubmitted:h},{title:f(()=>[P(" Bank dan nomor rekening tujuan ")]),description:f(()=>[]),form:f(()=>[b("div",ct,[m(Z,{for:"amount",value:"Bank tujuan"}),m(r(We),{modelValue:r(o).bank,"onUpdate:modelValue":y[2]||(y[2]=n=>r(o).bank=n)},{default:f(()=>[b("div",pt,[m(r(Ye),{class:"relative w-full cursor-pointer text-left bg-white py-2 pl-3 pr-10 text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"},{default:f(()=>{var n;return[b("span",vt,z(((n=r(o).bank)==null?void 0:n.title)??"Pilih Bank"),1),mt]}),_:1}),m(ye,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:f(()=>[m(r(Qe),{class:"absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-3xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"},{default:f(()=>[($(),C(E,null,Q(g,n=>m(r(Ge),{key:n.name,value:n,as:"template",disabled:n.disabled},{default:f(({active:k,selected:w})=>[b("li",{class:V([k?"bg-primary-100 text-primary-900":"text-gray-900","relative cursor-pointer select-none py-2 pl-10 pr-4"])},[b("span",{class:V([w?"font-medium":"font-normal","block truncate"])},z(n.title),3),w?($(),C("span",ft,gt)):U("",!0),n.disabled?($(),C("span",xt,"Tidak tersedia")):U("",!0)],2)]),_:2},1032,["value","disabled"])),64))]),_:1})]),_:1})])]),_:1},8,["modelValue"]),m(X,{message:r(o).errors.bank,class:"mt-2"},null,8,["message"]),b("div",yt,[m(Z,{for:"amount",value:"Nomor rekening tujuan"}),m(ne,{id:"account_no",modelValue:r(o).account_no,"onUpdate:modelValue":y[3]||(y[3]=n=>r(o).account_no=n),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),m(X,{message:r(o).errors.account_no,class:"mt-2"},null,8,["message"])])])]),actions:f(()=>[m(H,{on:r(o).recentlySuccessful,class:"mr-3"},{default:f(()=>[P(" Berhasil disimpan. ")]),_:1},8,["on"]),m(H,{on:r(a)>=23,class:"mr-3"},{default:f(()=>[P(" Sistem cut off. ")]),_:1},8,["on"]),m(oe,{class:V({"opacity-25":r(o).processing}),disabled:r(o).bank===null||r(o).account_no===""||r(a)>=23},{default:f(()=>[P(" Lanjutkan ")]),_:1},8,["class","disabled"])]),_:1})):U("",!0)],64))}};export{Ct as default};

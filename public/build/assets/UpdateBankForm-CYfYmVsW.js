import{d as w,K,k as O,y as ve,z as q,p as de,B as ae,F as M,D as me,I as fe,m as E,J as be,$ as L,O as ge,T as ye,o as A,e as C,b as f,w as b,a as v,c as le,u as r,h as G,f as J,g as P,n as T,t as z}from"./app-BdJe4Deo.js";import{_ as U}from"./ActionMessage-BKzYqQiN.js";import{_ as Q}from"./FormSection-BxBSWXxv.js";import{_ as X}from"./InputError-B2vzISqZ.js";import{_ as Z}from"./InputLabel-C_KAo0yl.js";import{_ as oe}from"./PrimaryButton-CvG6lhcF.js";import{_ as ne}from"./TextInput-CglvukqO.js";import{h as xe}from"./moment-Cl4UOzQZ.js";import he from"./Loading-CdcIhVTt.js";import{h as _e,O as ke,E as Oe,r as Se}from"./CheckCircleIcon-BQ8en5S4.js";import{o as S,d as De,u as V,e as Ie,f as we,E as Be,s as Le,A as W,T as Re,I as ee,N as ie,a as k}from"./form-EMrTyUK1.js";import{f as Ae,c as B,a as Pe,t as Te,i as H,l as $e}from"./calculate-active-index-BfFNoBY1.js";import{s as Ce}from"./use-resolve-button-type-CG-IYDA-.js";import{w as Ve,h as Fe,O as Ne}from"./focus-management-CkmM9GRB.js";import"./SectionTitle-Ca9Ffs8r.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function se(t){return[t.screenX,t.screenY]}function je(){let t=w([-1,-1]);return{wasMoved(u){let c=se(u);return t.value[0]===c[0]&&t.value[1]===c[1]?!1:(t.value=c,!0)},update(u){t.value=se(u)}}}let re=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ue(t){var u,c;let h=(u=t.innerText)!=null?u:"",s=t.cloneNode(!0);if(!(s instanceof HTMLElement))return h;let p=!1;for(let n of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))n.remove(),p=!0;let e=p?(c=s.innerText)!=null?c:"":h;return re.test(e)&&(e=e.replace(re,"")),e}function Ee(t){let u=t.getAttribute("aria-label");if(typeof u=="string")return u.trim();let c=t.getAttribute("aria-labelledby");if(c){let h=c.split(" ").map(s=>{let p=document.getElementById(s);if(p){let e=p.getAttribute("aria-label");return typeof e=="string"?e.trim():ue(p).trim()}return null}).filter(Boolean);if(h.length>0)return h.join(", ")}return ue(t).trim()}function Me(t){let u=w(""),c=w("");return()=>{let h=S(t);if(!h)return"";let s=h.innerText;if(u.value===s)return c.value;let p=Ee(h).trim().toLowerCase();return u.value=s,c.value=p,p}}function Je(t,u){return t===u}var ze=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ze||{}),Ue=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(Ue||{}),qe=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(qe||{});function He(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ce=Symbol("ListboxContext");function Y(t){let u=be(ce,null);if(u===null){let c=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,Y),c}return u}let Ke=K({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Je},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:u,attrs:c,emit:h}){let s=w(1),p=w(null),e=w(null),n=w(null),y=w([]),g=w(""),x=w(null),o=w(1);function a(l=i=>i){let i=x.value!==null?y.value[x.value]:null,d=Ne(l(y.value.slice()),I=>S(I.dataRef.domRef)),m=i?d.indexOf(i):null;return m===-1&&(m=null),{options:d,activeOptionIndex:m}}let _=O(()=>t.multiple?1:0),[D,R]=De(O(()=>t.modelValue),l=>h("update:modelValue",l),O(()=>t.defaultValue)),F=O(()=>D.value===void 0?V(_.value,{1:[],0:void 0}):D.value),$={listboxState:s,value:F,mode:_,compare(l,i){if(typeof t.by=="string"){let d=t.by;return(l==null?void 0:l[d])===(i==null?void 0:i[d])}return t.by(l,i)},orientation:O(()=>t.horizontal?"horizontal":"vertical"),labelRef:p,buttonRef:e,optionsRef:n,disabled:O(()=>t.disabled),options:y,searchQuery:g,activeOptionIndex:x,activationTrigger:o,closeListbox(){t.disabled||s.value!==1&&(s.value=1,x.value=null)},openListbox(){t.disabled||s.value!==0&&(s.value=0)},goToOption(l,i,d){if(t.disabled||s.value===1)return;let m=a(),I=Ae(l===B.Specific?{focus:B.Specific,id:i}:{focus:l},{resolveItems:()=>m.options,resolveActiveIndex:()=>m.activeOptionIndex,resolveId:j=>j.id,resolveDisabled:j=>j.dataRef.disabled});g.value="",x.value=I,o.value=d??1,y.value=m.options},search(l){if(t.disabled||s.value===1)return;let i=g.value!==""?0:1;g.value+=l.toLowerCase();let d=(x.value!==null?y.value.slice(x.value+i).concat(y.value.slice(0,x.value+i)):y.value).find(I=>I.dataRef.textValue.startsWith(g.value)&&!I.dataRef.disabled),m=d?y.value.indexOf(d):-1;m===-1||m===x.value||(x.value=m,o.value=1)},clearSearch(){t.disabled||s.value!==1&&g.value!==""&&(g.value="")},registerOption(l,i){let d=a(m=>[...m,{id:l,dataRef:i}]);y.value=d.options,x.value=d.activeOptionIndex},unregisterOption(l){let i=a(d=>{let m=d.findIndex(I=>I.id===l);return m!==-1&&d.splice(m,1),d});y.value=i.options,x.value=i.activeOptionIndex,o.value=1},theirOnChange(l){t.disabled||R(l)},select(l){t.disabled||R(V(_.value,{0:()=>l,1:()=>{let i=L($.value.value).slice(),d=L(l),m=i.findIndex(I=>$.compare(d,L(I)));return m===-1?i.push(d):i.splice(m,1),i}}))}};Pe([e,n],(l,i)=>{var d;$.closeListbox(),Ve(i,Fe.Loose)||(l.preventDefault(),(d=S(e))==null||d.focus())},O(()=>s.value===0)),ve(ce,$),Te(O(()=>V(s.value,{0:H.Open,1:H.Closed})));let N=O(()=>{var l;return(l=S(e))==null?void 0:l.closest("form")});return q(()=>{de([N],()=>{if(!N.value||t.defaultValue===void 0)return;function l(){$.theirOnChange(t.defaultValue)}return N.value.addEventListener("reset",l),()=>{var i;(i=N.value)==null||i.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,modelValue:i,disabled:d,form:m,...I}=t,j={open:s.value===0,disabled:d,value:F.value};return ae(M,[...l!=null&&F.value!=null?Ie({[l]:F.value}).map(([te,pe])=>ae(we,Be({features:Le.Hidden,key:te,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:m,name:te,value:pe}))):[],W({ourProps:{},theirProps:{...c,...Re(I,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:j,slots:u,attrs:c,name:"Listbox"})])}}}),We=K({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(t,{attrs:u,slots:c,expose:h}){var s;let p=(s=t.id)!=null?s:`headlessui-listbox-button-${ee()}`,e=Y("ListboxButton");h({el:e.buttonRef,$el:e.buttonRef});function n(o){switch(o.key){case k.Space:case k.Enter:case k.ArrowDown:o.preventDefault(),e.openListbox(),E(()=>{var a;(a=S(e.optionsRef))==null||a.focus({preventScroll:!0}),e.value.value||e.goToOption(B.First)});break;case k.ArrowUp:o.preventDefault(),e.openListbox(),E(()=>{var a;(a=S(e.optionsRef))==null||a.focus({preventScroll:!0}),e.value.value||e.goToOption(B.Last)});break}}function y(o){switch(o.key){case k.Space:o.preventDefault();break}}function g(o){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),E(()=>{var a;return(a=S(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(o.preventDefault(),e.openListbox(),He(()=>{var a;return(a=S(e.optionsRef))==null?void 0:a.focus({preventScroll:!0})})))}let x=Ce(O(()=>({as:t.as,type:u.type})),e.buttonRef);return()=>{var o,a;let _={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{...D}=t,R={ref:e.buttonRef,id:p,type:x.value,"aria-haspopup":"listbox","aria-controls":(o=S(e.optionsRef))==null?void 0:o.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(a=S(e.labelRef))==null?void 0:a.id,p].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:n,onKeyup:y,onClick:g};return W({ourProps:R,theirProps:D,slot:_,attrs:u,slots:c,name:"ListboxButton"})}}}),Ye=K({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:u,slots:c,expose:h}){var s;let p=(s=t.id)!=null?s:`headlessui-listbox-options-${ee()}`,e=Y("ListboxOptions"),n=w(null);h({el:e.optionsRef,$el:e.optionsRef});function y(o){switch(n.value&&clearTimeout(n.value),o.key){case k.Space:if(e.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),e.search(o.key);case k.Enter:if(o.preventDefault(),o.stopPropagation(),e.activeOptionIndex.value!==null){let a=e.options.value[e.activeOptionIndex.value];e.select(a.dataRef.value)}e.mode.value===0&&(e.closeListbox(),E(()=>{var a;return(a=S(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})}));break;case V(e.orientation.value,{vertical:k.ArrowDown,horizontal:k.ArrowRight}):return o.preventDefault(),o.stopPropagation(),e.goToOption(B.Next);case V(e.orientation.value,{vertical:k.ArrowUp,horizontal:k.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),e.goToOption(B.Previous);case k.Home:case k.PageUp:return o.preventDefault(),o.stopPropagation(),e.goToOption(B.First);case k.End:case k.PageDown:return o.preventDefault(),o.stopPropagation(),e.goToOption(B.Last);case k.Escape:o.preventDefault(),o.stopPropagation(),e.closeListbox(),E(()=>{var a;return(a=S(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})});break;case k.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(e.search(o.key),n.value=setTimeout(()=>e.clearSearch(),350));break}}let g=$e(),x=O(()=>g!==null?(g.value&H.Open)===H.Open:e.listboxState.value===0);return()=>{var o,a;let _={open:e.listboxState.value===0},{...D}=t,R={"aria-activedescendant":e.activeOptionIndex.value===null||(o=e.options.value[e.activeOptionIndex.value])==null?void 0:o.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(a=S(e.buttonRef))==null?void 0:a.id,"aria-orientation":e.orientation.value,id:p,onKeydown:y,role:"listbox",tabIndex:0,ref:e.optionsRef};return W({ourProps:R,theirProps:D,slot:_,attrs:u,slots:c,features:ie.RenderStrategy|ie.Static,visible:x.value,name:"ListboxOptions"})}}}),Ge=K({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(t,{slots:u,attrs:c,expose:h}){var s;let p=(s=t.id)!=null?s:`headlessui-listbox-option-${ee()}`,e=Y("ListboxOption"),n=w(null);h({el:n,$el:n});let y=O(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===p:!1),g=O(()=>V(e.mode.value,{0:()=>e.compare(L(e.value.value),L(t.value)),1:()=>L(e.value.value).some(l=>e.compare(L(l),L(t.value)))})),x=O(()=>V(e.mode.value,{1:()=>{var l;let i=L(e.value.value);return((l=e.options.value.find(d=>i.some(m=>e.compare(L(m),L(d.dataRef.value)))))==null?void 0:l.id)===p},0:()=>g.value})),o=Me(n),a=O(()=>({disabled:t.disabled,value:t.value,get textValue(){return o()},domRef:n}));q(()=>e.registerOption(p,a)),me(()=>e.unregisterOption(p)),q(()=>{de([e.listboxState,g],()=>{e.listboxState.value===0&&g.value&&V(e.mode.value,{1:()=>{x.value&&e.goToOption(B.Specific,p)},0:()=>{e.goToOption(B.Specific,p)}})},{immediate:!0})}),fe(()=>{e.listboxState.value===0&&y.value&&e.activationTrigger.value!==0&&E(()=>{var l,i;return(i=(l=S(n))==null?void 0:l.scrollIntoView)==null?void 0:i.call(l,{block:"nearest"})})});function _(l){if(t.disabled)return l.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),E(()=>{var i;return(i=S(e.buttonRef))==null?void 0:i.focus({preventScroll:!0})}))}function D(){if(t.disabled)return e.goToOption(B.Nothing);e.goToOption(B.Specific,p)}let R=je();function F(l){R.update(l)}function $(l){R.wasMoved(l)&&(t.disabled||y.value||e.goToOption(B.Specific,p,0))}function N(l){R.wasMoved(l)&&(t.disabled||y.value&&e.goToOption(B.Nothing))}return()=>{let{disabled:l}=t,i={active:y.value,selected:g.value,disabled:l},{value:d,disabled:m,...I}=t,j={id:p,ref:n,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":g.value,disabled:void 0,onClick:_,onFocus:D,onPointerenter:F,onMouseenter:F,onPointermove:$,onMousemove:$,onPointerleave:N,onMouseleave:N};return W({ourProps:j,theirProps:I,slot:i,attrs:c,slots:u,name:"ListboxOption"})}}});const Qe={class:"col-span-6"},Xe={class:"mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"},Ze={class:"flex flex-1 justify-center items-center h-full"},et={class:"inline-flex items-center"},tt={class:"col-span-6"},at={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},lt={class:"relative px-6 py-5 flex items-center space-x-3"},ot={class:"flex-shrink-0"},nt=["src"],it=["onClick"],st=v("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),rt={class:"text-sm font-medium text-gray-900"},ut={class:"text-sm text-gray-500 truncate"},dt={class:"col-span-6"},ct={class:"relative mt-1"},pt={class:"block truncate"},vt=v("span",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},[v("i",{class:"fa-regular fa-arrows-up-down text-gray-400 mr-2"})],-1),mt={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600"},ft=v("i",{class:"fa-duotone fa-check"},null,-1),bt=[ft],gt={key:1,class:"absolute inset-y-0 flex items-center right-0 pr-3 text-xs text-red-400 font-medium"},yt={class:"col-span-6 mt-5"},Ct={__name:"UpdateBankForm",props:{response:Object|String,customer_list:void 0},setup(t){const u=t;q(()=>{ge.reload({only:["customer_list"]})});const c=w(),h=x=>{c.value=x,n.reset()},s=[{id:1,name:"Sesama Waykapay",icon:"fa-wallet",desc:0,disabled:!1},{id:2,name:"Transfer Bank",icon:"fa-bank",desc:0,disabled:!1}],p=[{id:1,name:"wkp",title:"Waykapay",logo:"/img/vendor/WAYKAPAY-LONG.svg",admin:0,disabled:!1}],e=[{id:2,name:"CENAIDJA",title:"BCA",logo:"/img/vendor/BCA.svg",admin:665,service:335,disabled:!1},{id:3,name:"BNINIDJA",title:"BNI",logo:"/img/vendor/BNI.svg",admin:665,service:335,disabled:!1},{id:4,name:"BRINIDJA",title:"BRI",logo:"/img/vendor/BRI.svg",admin:665,service:335,disabled:!1},{id:5,name:"BMRIIDJA",title:"Mandiri",logo:"/img/vendor/MANDIRI.svg",admin:665,service:335,disabled:!1},{id:6,name:"BBBAIDJA",title:"Permata Bank",logo:"/img/vendor/PERMATA.svg",admin:665,service:335,disabled:!1},{id:7,name:"BSMDIDJA",title:"BSI",logo:"/img/vendor/BSI.svg",admin:665,service:335,disabled:!1},{id:10,name:"PDLPIDJ1",title:"BPD Lampung",logo:"/img/vendor/BSI.svg",admin:665,service:335,disabled:!1},{id:100,name:"APIDIDJ1",title:"ShopeePay",logo:"/img/vendor/BSI.svg",admin:665,service:335,disabled:!1},{id:101,name:"DANAIDJ1",title:"Dana",logo:"/img/vendor/BSI.svg",admin:665,service:335,disabled:!1},{id:103,name:"ACRIOVO1",title:"OVO",logo:"/img/vendor/BSI.svg",admin:665,service:335,disabled:!1},{id:104,name:"ACRIGPY1",title:"Gopay",logo:"/img/vendor/BSI.svg",admin:665,service:335,disabled:!1}],n=ye({bank:null,account_no:""}),y=()=>{n.bank==null&&(n.bank=p[0]),n.post(route("money-transfer.amount"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{}})},g=xe().format("HH");return(x,o)=>(A(),C(M,null,[f(Q,null,{title:b(()=>[P(" Mau transfer kemana? ")]),description:b(()=>[]),form:b(()=>[v("div",Qe,[f(r(_e),null,{default:b(()=>[v("div",Xe,[(A(),C(M,null,G(s,a=>f(r(ke),{onClick:_=>h(a.id),as:"template",key:a.id,value:a,disabled:a.disabled,class:T(a.disabled?"bg-gray-200 opacity-75":"")},{default:b(({checked:_,active:D})=>[v("div",{class:T([_?"border-transparent":"border-gray-300",D?"border-primary-500 ring-2 ring-primary-500":"","relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"])},[v("div",Ze,[v("div",et,[v("i",{class:T(["fa-duotone text-primary-600 text-lg mr-2",a.icon])},null,2),f(r(Oe),{as:"span",class:"flex text-sm font-medium text-gray-900"},{default:b(()=>[P(z(a.name),1)]),_:2},1024)])]),f(r(Se),{class:T([_?"":"invisible","h-5 w-5 text-primary-600"]),"aria-hidden":"true"},null,8,["class"]),v("span",{class:T([D?"border":"border-2",_?"border-primary-500":"border-transparent","pointer-events-none absolute -inset-px rounded-3xl"]),"aria-hidden":"true"},null,2)],2)]),_:2},1032,["onClick","value","disabled","class"])),64))])]),_:1})])]),_:1}),c.value==1?(A(),C(M,{key:0},[f(Q,{onSubmitted:y},{title:b(()=>[P(" Nomor handphone tujuan ")]),description:b(()=>[]),form:b(()=>[v("div",tt,[f(Z,{for:"amount",value:"Nomor handphone tujuan"}),f(ne,{id:"account_no",modelValue:r(n).account_no,"onUpdate:modelValue":o[0]||(o[0]=a=>r(n).account_no=a),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),f(X,{message:r(n).errors.account_no,class:"mt-2"},null,8,["message"])])]),actions:b(()=>[f(U,{on:r(n).recentlySuccessful,class:"mr-3"},{default:b(()=>[P(" Berhasil disimpan. ")]),_:1},8,["on"]),f(U,{on:r(g)>=23,class:"mr-3"},{default:b(()=>[P(" Sistem cut off. ")]),_:1},8,["on"]),f(oe,{class:T({"opacity-25":r(n).processing}),disabled:r(n).account_no===""||r(g)>=23},{default:b(()=>[P(" Lanjutkan ")]),_:1},8,["class","disabled"])]),_:1}),v("ul",at,[u.customer_list===void 0?(A(),le(he,{key:0})):r(n).account_no.length<=1?(A(!0),C(M,{key:1},G(u.customer_list,a=>(A(),C("li",lt,[v("div",ot,[v("img",{class:"w-10",src:"/img/vendor/"+a.brand+".png",alt:""},null,8,nt)]),v("div",{onClick:_=>r(n).account_no=a.customer_no,class:"flex-1 min-w-0"},[v("button",{onClick:o[1]||(o[1]=()=>{}),class:"focus:outline-none text-left"},[st,v("p",rt,z(a.customer_name),1),v("p",ut,z(a.customer_no),1)])],8,it)]))),256)):J("",!0)])],64)):J("",!0),c.value==2?(A(),le(Q,{key:1,onSubmitted:y},{title:b(()=>[P(" Bank dan nomor rekening tujuan ")]),description:b(()=>[]),form:b(()=>[v("div",dt,[f(Z,{for:"amount",value:"Bank tujuan"}),f(r(Ke),{modelValue:r(n).bank,"onUpdate:modelValue":o[2]||(o[2]=a=>r(n).bank=a)},{default:b(()=>[v("div",ct,[f(r(We),{class:"relative w-full cursor-pointer text-left bg-white py-2 pl-3 pr-10 text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"},{default:b(()=>{var a;return[v("span",pt,z(((a=r(n).bank)==null?void 0:a.title)??"Pilih Bank"),1),vt]}),_:1}),f(r(Ye),{class:"absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-3xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"},{default:b(()=>[(A(),C(M,null,G(e,a=>f(r(Ge),{key:a.name,value:a,as:"template",disabled:a.disabled},{default:b(({active:_,selected:D})=>[v("li",{class:T([_?"bg-primary-100 text-primary-900":"text-gray-900","relative cursor-pointer select-none py-2 pl-10 pr-4"])},[v("span",{class:T([D?"font-medium":"font-normal","block truncate"])},z(a.title),3),D?(A(),C("span",mt,bt)):J("",!0),a.disabled?(A(),C("span",gt,"Tidak tersedia")):J("",!0)],2)]),_:2},1032,["value","disabled"])),64))]),_:1})])]),_:1},8,["modelValue"]),f(X,{message:r(n).errors.bank,class:"mt-2"},null,8,["message"]),v("div",yt,[f(Z,{for:"amount",value:"Nomor rekening tujuan"}),f(ne,{id:"account_no",modelValue:r(n).account_no,"onUpdate:modelValue":o[3]||(o[3]=a=>r(n).account_no=a),type:"number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),f(X,{message:r(n).errors.account_no,class:"mt-2"},null,8,["message"])])])]),actions:b(()=>[f(U,{on:r(n).recentlySuccessful,class:"mr-3"},{default:b(()=>[P(" Berhasil disimpan. ")]),_:1},8,["on"]),f(U,{on:r(g)>=23,class:"mr-3"},{default:b(()=>[P(" Sistem cut off. ")]),_:1},8,["on"]),f(oe,{class:T({"opacity-25":r(n).processing}),disabled:r(n).bank===null||r(n).account_no===""||r(g)>=23},{default:b(()=>[P(" Lanjutkan ")]),_:1},8,["class","disabled"])]),_:1})):J("",!0)],64))}};export{Ct as default};

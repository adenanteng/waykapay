import{_ as ie}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as m,e as g,f as C,d as x,i as v,J as I,A as z,u as l,n as y,a as f,t as ue,B as ce,s as $,x as B,r as E,H as P,D as U,E as V,b as q,w as O,T as de,c as F,j as G,K as pe,y as T,F as W,l as fe,q as j,p as A,k as H}from"./app.a1e6ac86.js";const me={},he=["src"];function ge(e,n){return e.$page.props.appSetting!=null?(m(),g("img",{key:0,src:e.$page.props.appSetting.media[0].original_url,class:"h-10 w-auto"},null,8,he)):C("",!0)}const Ye=ie(me,[["render",ge]]),ve={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},be={class:"flex items-center justify-between flex-wrap"},ye={class:"w-0 flex-1 flex items-center min-w-0"},we={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ke=f("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),xe=[ke],Se={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},_e=f("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),Ee=[_e],$e={class:"ml-3 font-medium text-sm text-white truncate"},je={class:"shrink-0 sm:ml-3"},Le=f("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),Ce=[Le],Je={__name:"Banner",setup(e){const n=x(!0),t=v(()=>{var o;return((o=I().props.jetstream.flash)==null?void 0:o.bannerStyle)||"success"}),r=v(()=>{var o;return((o=I().props.jetstream.flash)==null?void 0:o.banner)||""});return z(r,async()=>{n.value=!0}),(o,s)=>(m(),g("div",null,[n.value&&l(r)?(m(),g("div",{key:0,class:y({"bg-green-500":l(t)=="success","bg-red-700":l(t)=="danger"})},[f("div",ve,[f("div",be,[f("div",ye,[f("span",{class:y(["flex p-2 rounded-3xl",{"bg-green-600":l(t)=="success","bg-red-600":l(t)=="danger"}])},[l(t)=="success"?(m(),g("svg",we,xe)):C("",!0),l(t)=="danger"?(m(),g("svg",Se,Ee)):C("",!0)],2),f("p",$e,ue(l(r)),1)]),f("div",je,[f("button",{type:"button",class:y(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-green-600 focus:bg-green-600":l(t)=="success","hover:bg-red-600 focus:bg-red-600":l(t)=="danger"}]),"aria-label":"Dismiss",onClick:s[0]||(s[0]=ce(a=>n.value=!1,["prevent"]))},[(m(),g("svg",{class:y(["h-5 w-5 text-white dark:text-gray-900",{"text-green-600":l(t)=="success","text-red-600":l(t)=="danger"}]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ce,2))],2)])])])],2)):C("",!0)]))}},Me={class:"relative"},Xe={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","px-1","bg-white","bg-opacity-50","backdrop-blur"]}},setup(e){const n=e;let t=x(!1);const r=a=>{t.value&&a.key==="Escape"&&(t.value=!1)};$(()=>document.addEventListener("keydown",r)),B(()=>document.removeEventListener("keydown",r));const o=v(()=>({48:"w-48"})[n.width.toString()]),s=v(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(a,u)=>(m(),g("div",Me,[f("div",{onClick:u[0]||(u[0]=p=>P(t)?t.value=!l(t):t=!l(t))},[E(a.$slots,"trigger")]),U(f("div",{class:"fixed inset-0 z-50",onClick:u[1]||(u[1]=p=>P(t)?t.value=!1:t=!1)},null,512),[[V,l(t)]]),q(de,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:O(()=>[U(f("div",{class:y(["absolute z-50 mt-5 rounded-3xl shadow-lg",[l(o),l(s)]]),style:{display:"none"},onClick:u[2]||(u[2]=p=>P(t)?t.value=!1:t=!1)},[f("div",{class:y(["rounded-3xl border border-gray-300",e.contentClasses])},[E(a.$slots,"content")],2)],2),[[V,l(t)]])]),_:3})]))}},Oe={key:0,type:"submit",class:"rounded-3xl block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition"},Pe=["href"],Ze={__name:"DropdownLink",props:{href:String,as:String},setup(e){return(n,t)=>(m(),g("div",null,[e.as==="button"?(m(),g("button",Oe,[E(n.$slots,"default")])):e.as==="a"?(m(),g("a",{key:1,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition"},[E(n.$slots,"default")],8,Pe)):(m(),F(l(G),{key:2,href:e.href,class:"rounded-3xl block px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition"},{default:O(()=>[E(n.$slots,"default")]),_:3},8,["href"]))]))}},et={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(e){const n=e,t=v(()=>n.active?"block pl-3 pr-4 py-2 border-l-4 border-primary-400 text-base font-medium text-primary-700 bg-primary-50 focus:outline-none focus:text-primary-800 focus:bg-primary-100 focus:border-primary-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(r,o)=>(m(),g("div",null,[e.as=="button"?(m(),g("button",{key:0,class:y([l(t),"w-full text-left"])},[E(r.$slots,"default")],2)):(m(),F(l(G),{key:1,href:e.href,class:y(l(t))},{default:O(()=>[E(r.$slots,"default")]),_:3},8,["href","class"]))]))}};function Q(e,n,...t){if(e in n){let o=n[e];return typeof o=="function"?o(...t):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Q),r}var Ne=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Ne||{}),Te=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Te||{});function L({visible:e=!0,features:n=0,ourProps:t,theirProps:r,...o}){var s;let a=J(r,t),u=Object.assign(o,{props:a});if(e||n&2&&a.static)return N(u);if(n&1){let p=(s=a.unmount)==null||s?0:1;return Q(p,{[0](){return null},[1](){return N({...o,props:{...a,hidden:!0,style:{display:"none"}}})}})}return N(u)}function N({props:e,attrs:n,slots:t,slot:r,name:o}){var s,a;let{as:u,...p}=X(e,["unmount","static"]),d=(s=t.default)==null?void 0:s.call(t,r),h={};if(r){let b=!1,w=[];for(let[S,_]of Object.entries(r))typeof _=="boolean"&&(b=!0),_===!0&&w.push(S);b&&(h["data-headlessui-state"]=w.join(" "))}if(u==="template"){if(d=Y(d!=null?d:[]),Object.keys(p).length>0||Object.keys(n).length>0){let[b,...w]=d!=null?d:[];if(!Be(b)||w.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(n)).map(c=>c.trim()).filter((c,i,k)=>k.indexOf(c)===i).sort((c,i)=>c.localeCompare(i)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let S=J((a=b.props)!=null?a:{},p),_=pe(b,S);for(let c in S)c.startsWith("on")&&(_.props||(_.props={}),_.props[c]=S[c]);return _}return Array.isArray(d)&&d.length===1?d[0]:d}return T(u,Object.assign({},p,h),{default:()=>d})}function Y(e){return e.flatMap(n=>n.type===W?Y(n.children):[n])}function J(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(t).map(r=>[r,void 0])));for(let r in t)Object.assign(n,{[r](o,...s){let a=t[r];for(let u of a){if(o instanceof Event&&o.defaultPrevented)return;u(o,...s)}}});return n}function De(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function X(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function Be(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ae=0;function He(){return++Ae}function R(){return He()}var D=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(D||{});function M(e){var n;return e==null||e.value==null?null:(n=e.value.$el)!=null?n:e.value}function K(e,n){if(e)return e;let t=n!=null?n:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function Re(e,n){let t=x(K(e.value.type,e.value.as));return $(()=>{t.value=K(e.value.type,e.value.as)}),fe(()=>{var r;t.value||!M(n)||M(n)instanceof HTMLButtonElement&&!((r=M(n))!=null&&r.hasAttribute("type"))&&(t.value="button")}),t}var Z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Z||{});let Ie=j({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:n,attrs:t}){return()=>{let{features:r,...o}=e,s={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return L({ourProps:s,theirProps:o,slot:{},attrs:t,slots:n,name:"Hidden"})}}});function Ue(e){var n;let t=(n=e==null?void 0:e.form)!=null?n:e.closest("form");if(t){for(let r of t.elements)if(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image"){r.click();return}}}function Ve(e,n,t){let r=x(t==null?void 0:t.value),o=v(()=>e.value!==void 0);return[v(()=>o.value?e.value:r.value),function(s){return o.value||(r.value=s),n==null?void 0:n(s)}]}let ee=Symbol("DescriptionContext");function Ke(){let e=H(ee,null);if(e===null)throw new Error("Missing parent");return e}function ze({slot:e=x({}),name:n="Description",props:t={}}={}){let r=x([]);function o(s){return r.value.push(s),()=>{let a=r.value.indexOf(s);a!==-1&&r.value.splice(a,1)}}return A(ee,{register:o,slot:e,name:n,props:t}),v(()=>r.value.length>0?r.value.join(" "):void 0)}let tt=j({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${R()}`}},setup(e,{attrs:n,slots:t}){let r=Ke();return $(()=>B(r.register(e.id))),()=>{let{name:o="Description",slot:s=x({}),props:a={}}=r,{id:u,...p}=e,d={...Object.entries(a).reduce((h,[b,w])=>Object.assign(h,{[b]:l(w)}),{}),id:u};return L({ourProps:d,theirProps:p,slot:s.value,attrs:n,slots:t,name:o})}}}),te=Symbol("LabelContext");function ne(){let e=H(te,null);if(e===null){let n=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,ne),n}return e}function qe({slot:e={},name:n="Label",props:t={}}={}){let r=x([]);function o(s){return r.value.push(s),()=>{let a=r.value.indexOf(s);a!==-1&&r.value.splice(a,1)}}return A(te,{register:o,slot:e,name:n,props:t}),v(()=>r.value.length>0?r.value.join(" "):void 0)}let nt=j({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${R()}`}},setup(e,{slots:n,attrs:t}){let r=ne();return $(()=>B(r.register(e.id))),()=>{let{name:o="Label",slot:s={},props:a={}}=r,{id:u,passive:p,...d}=e,h={...Object.entries(a).reduce((b,[w,S])=>Object.assign(b,{[w]:l(S)}),{}),id:u};return p&&(delete h.onClick,delete d.onClick),L({ourProps:h,theirProps:d,slot:s,attrs:t,slots:n,name:o})}}}),re=Symbol("GroupContext");j({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:t}){let r=x(null),o=qe({name:"SwitchLabel",props:{onClick(){!r.value||(r.value.click(),r.value.focus({preventScroll:!0}))}}}),s=ze({name:"SwitchDescription"});return A(re,{switchRef:r,labelledby:o,describedby:s}),()=>L({theirProps:e,ourProps:{},slot:{},slots:n,attrs:t,name:"SwitchGroup"})}});let Fe=j({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${R()}`}},inheritAttrs:!1,setup(e,{emit:n,attrs:t,slots:r,expose:o}){let s=H(re,null),[a,u]=Ve(v(()=>e.modelValue),i=>n("update:modelValue",i),v(()=>e.defaultChecked));function p(){u(!a.value)}let d=x(null),h=s===null?d:s.switchRef,b=Re(v(()=>({as:e.as,type:t.type})),h);o({el:h,$el:h});function w(i){i.preventDefault(),p()}function S(i){i.key===D.Space?(i.preventDefault(),p()):i.key===D.Enter&&Ue(i.currentTarget)}function _(i){i.preventDefault()}let c=v(()=>{var i,k;return(k=(i=M(h))==null?void 0:i.closest)==null?void 0:k.call(i,"form")});return $(()=>{z([c],()=>{if(!c.value||e.defaultChecked===void 0)return;function i(){u(e.defaultChecked)}return c.value.addEventListener("reset",i),()=>{var k;(k=c.value)==null||k.removeEventListener("reset",i)}},{immediate:!0})}),()=>{let{id:i,name:k,value:oe,...se}=e,ae={checked:a.value},le={id:i,ref:h,role:"switch",type:b.value,tabIndex:0,"aria-checked":a.value,"aria-labelledby":s==null?void 0:s.labelledby.value,"aria-describedby":s==null?void 0:s.describedby.value,onClick:w,onKeyup:S,onKeypress:_};return T(W,[k!=null&&a.value!=null?T(Ie,De({features:Z.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:a.value,name:k,value:oe})):null,L({ourProps:le,theirProps:{...t,...X(se,["modelValue","defaultChecked"])},slot:ae,attrs:t,slots:r,name:"Switch"})])}}});var Ge={exports:{}};(function(e){e.exports={init:()=>`
      (function() {
        function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
                const hasPersistedPreference = typeof persistedColorPreference === 'string';
                if (hasPersistedPreference) {
                  return persistedColorPreference;
                }
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                if (hasMediaQueryPreference) {
                  return mql.matches ? 'dark' : 'light';
                }
                return 'light';
        }
        getInitialColorMode() == 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
      })()
    `,beforeTransition:()=>{const n=document.documentElement,t=()=>{n.classList.remove("nightwind"),n.removeEventListener("transitionend",t)};n.addEventListener("transitionend",t),n.classList.contains("nightwind")||n.classList.add("nightwind")},toggle:()=>{e.exports.beforeTransition(),document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),window.localStorage.setItem("nightwind-mode","light")):(document.documentElement.classList.add("dark"),window.localStorage.setItem("nightwind-mode","dark"))},enable:n=>{const t=n?"dark":"light",r=n?"light":"dark";e.exports.beforeTransition(),document.documentElement.classList.contains(r)&&document.documentElement.classList.remove(r),document.documentElement.classList.add(t),window.localStorage.setItem("nightwind-mode",t)},checkNightMode:()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,watchNightMode:()=>{!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").addListener(e.exports.addNightModeSelector())},addNightModeSelector:()=>{e.exports.checkNightMode()?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},addNightTransitions:()=>{document.documentElement.classList.contains("nightwind")||document.documentElement.classList.add("nightwind")},initNightwind:()=>{e.exports.watchNightMode(),e.exports.addNightModeSelector(),e.exports.addNightTransitions()},toggleNightMode:()=>{document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),window.localStorage.setItem("nightwind-mode","light")):(document.documentElement.classList.add("dark"),window.localStorage.setItem("nightwind-mode","dark"))}}})(Ge);const rt={__name:"DarkmodeToggle",props:{darkMode:Boolean},setup(e){return(n,t)=>(m(),g("button",null,[q(l(Fe),{class:y([e.darkMode?"bg-primary-600":"bg-gray-200","block inline-flex items-center h-10 w-16 rounded-full cursor-pointer transition-colors ease-in-out duration-200 hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300"])},{default:O(()=>[f("span",{class:y([e.darkMode?"translate-x-6":"translate-x-0","flex justify-center items-center pointer-events-none inline-block h-8 w-8 m-1 rounded-full bg-white shadow transform transition ease-in-out duration-500"])},[f("i",{class:y(["fa-light text-black",e.darkMode?"fa-moon":"fa-sun-bright"])},null,2)],2)]),_:1},8,["class"])]))}};export{Ye as A,L as H,Ne as N,Te as S,X as T,Je as _,D as a,Re as b,Z as c,rt as d,Xe as e,Ie as f,Ze as g,et as h,M as o,R as t,Q as u};
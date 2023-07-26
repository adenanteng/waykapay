import{K as R,y as B,F,m as j,d as b,i as g,q as O,s as S,u as $,k as E,p as k}from"./app.1710f2ff.js";function P(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,P),n}var M=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(M||{}),I=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(I||{});function w({visible:e=!0,features:t=0,ourProps:r,theirProps:n,...o}){var a;let l=A(n,r),u=Object.assign(o,{props:l});if(e||t&2&&l.static)return y(u);if(t&1){let p=(a=l.unmount)==null||a?0:1;return P(p,{[0](){return null},[1](){return y({...o,props:{...l,hidden:!0,style:{display:"none"}}})}})}return y(u)}function y({props:e,attrs:t,slots:r,slot:n,name:o}){var a,l;let{as:u,...p}=K(e,["unmount","static"]),s=(a=r.default)==null?void 0:a.call(r,n),f={};if(n){let c=!1,d=[];for(let[m,h]of Object.entries(n))typeof h=="boolean"&&(c=!0),h===!0&&d.push(m);c&&(f["data-headlessui-state"]=d.join(" "))}if(u==="template"){if(s=T(s!=null?s:[]),Object.keys(p).length>0||Object.keys(t).length>0){let[c,...d]=s!=null?s:[];if(!W(c)||d.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(t)).map(i=>i.trim()).filter((i,v,C)=>C.indexOf(i)===v).sort((i,v)=>i.localeCompare(v)).map(i=>`  - ${i}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(i=>`  - ${i}`).join(`
`)].join(`
`));let m=A((l=c.props)!=null?l:{},p),h=R(c,m);for(let i in m)i.startsWith("on")&&(h.props||(h.props={}),h.props[i]=m[i]);return h}return Array.isArray(s)&&s.length===1?s[0]:s}return B(u,Object.assign({},p,f),{default:()=>s})}function T(e){return e.flatMap(t=>t.type===F?T(t.children):[t])}function A(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(n[o])):t[o]=n[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](o,...a){let l=r[n];for(let u of l){if(o instanceof Event&&o.defaultPrevented)return;u(o,...a)}}});return t}function X(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function K(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}function W(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Y=0;function q(){return++Y}function N(){return q()}var V=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(V||{});function Z(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}var z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(z||{});let _=j({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{let{features:n,...o}=e,a={"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return w({ourProps:a,theirProps:o,slot:{},attrs:r,slots:t,name:"Hidden"})}}});function G(e={},t=null,r=[]){for(let[n,o]of Object.entries(e))H(r,D(t,n),o);return r}function D(e,t){return e?e+"["+t+"]":t}function H(e,t,r){if(Array.isArray(r))for(let[n,o]of r.entries())H(e,D(t,n.toString()),o);else r instanceof Date?e.push([t,r.toISOString()]):typeof r=="boolean"?e.push([t,r?"1":"0"]):typeof r=="string"?e.push([t,r]):typeof r=="number"?e.push([t,`${r}`]):r==null?e.push([t,""]):G(r,t,e)}function ee(e){var t;let r=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(r){for(let n of r.elements)if(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image"){n.click();return}}}function te(e,t,r){let n=b(r==null?void 0:r.value),o=g(()=>e.value!==void 0);return[g(()=>o.value?e.value:n.value),function(a){return o.value||(n.value=a),t==null?void 0:t(a)}]}let U=Symbol("DescriptionContext");function J(){let e=E(U,null);if(e===null)throw new Error("Missing parent");return e}function ne({slot:e=b({}),name:t="Description",props:r={}}={}){let n=b([]);function o(a){return n.value.push(a),()=>{let l=n.value.indexOf(a);l!==-1&&n.value.splice(l,1)}}return k(U,{register:o,slot:e,name:t,props:r}),g(()=>n.value.length>0?n.value.join(" "):void 0)}let re=j({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${N()}`}},setup(e,{attrs:t,slots:r}){let n=J();return O(()=>S(n.register(e.id))),()=>{let{name:o="Description",slot:a=b({}),props:l={}}=n,{id:u,...p}=e,s={...Object.entries(l).reduce((f,[c,d])=>Object.assign(f,{[c]:$(d)}),{}),id:u};return w({ourProps:s,theirProps:p,slot:a.value,attrs:t,slots:r,name:o})}}}),x=Symbol("LabelContext");function L(){let e=E(x,null);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return e}function oe({slot:e={},name:t="Label",props:r={}}={}){let n=b([]);function o(a){return n.value.push(a),()=>{let l=n.value.indexOf(a);l!==-1&&n.value.splice(l,1)}}return k(x,{register:o,slot:e,name:t,props:r}),g(()=>n.value.length>0?n.value.join(" "):void 0)}let ae=j({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${N()}`}},setup(e,{slots:t,attrs:r}){let n=L();return O(()=>S(n.register(e.id))),()=>{let{name:o="Label",slot:a={},props:l={}}=n,{id:u,passive:p,...s}=e,f={...Object.entries(l).reduce((c,[d,m])=>Object.assign(c,{[d]:$(m)}),{}),id:u};return p&&(delete f.onClick,delete s.onClick),w({ourProps:f,theirProps:s,slot:a,attrs:r,slots:t,name:o})}}});export{re as E,w as H,oe as K,ne as M,M as N,I as S,K as T,V as a,z as b,X as c,te as d,G as e,_ as f,ae as g,Z as o,ee as p,N as t,P as u};

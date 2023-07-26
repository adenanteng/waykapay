import{l as E,x as b}from"./app.1710f2ff.js";import{o as p,u as w}from"./label.b1955abb.js";class F{constructor(){this.current=this.detect(),this.currentId=0}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let S=new F;function m(e){if(S.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=p(e);if(t)return t.ownerDocument}return document}function k({container:e,accept:t,walk:r,enabled:n}){E(()=>{let i=e.value;if(!i||n!==void 0&&!n.value)return;let o=m(e);if(!o)return;let s=Object.assign(f=>t(f),{acceptNode:t}),u=o.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,s,!1);for(;u.nextNode();)r(u.currentNode)})}let v=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var O=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(O||{}),A=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(A||{}),I=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(I||{});function h(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(v)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var T=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(T||{});function g(e,t=0){var r;return e===((r=m(e))==null?void 0:r.body)?!1:w(t,{[0](){return e.matches(v)},[1](){let n=e;for(;n!==null;){if(n.matches(v))return!0;n=n.parentElement}return!1}})}function C(e){let t=m(e);b(()=>{t&&!g(t.activeElement,0)&&y(e)})}function y(e){e==null||e.focus({preventScroll:!0})}let M=["textarea","input"].join(",");function P(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,M))!=null?r:!1}function D(e,t=r=>r){return e.slice().sort((r,n)=>{let i=t(r),o=t(n);if(i===null||o===null)return 0;let s=i.compareDocumentPosition(o);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function G(e,t){return L(h(),t,{relativeTo:e})}function L(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:i=[]}={}){var o;let s=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,u=Array.isArray(e)?r?D(e):e:h(e);i.length>0&&u.length>1&&(u=u.filter(c=>!i.includes(c))),n=n!=null?n:s.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),N=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(n))-1;if(t&4)return Math.max(0,u.indexOf(n))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=t&32?{preventScroll:!0}:{},d=0,a=u.length,l;do{if(d>=a||d+a<=0)return 0;let c=N+d;if(t&16)c=(c+a)%a;else{if(c<0)return 3;if(c>=a)return 1}l=u[c],l==null||l.focus(x),d+=f}while(l!==s.activeElement);return t&6&&P(l)&&l.select(),l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),2}export{G as D,T as F,D as I,O as N,L as O,g as S,A as T,h as d,m,S as n,k as p,C as v};

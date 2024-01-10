import{i as I,o as B,e as R,a as u,n as D,g as T,r as ue,c as Ve,w as O,u as F,m as We,I as q,y as K,J as N,d as y,K as U,B as A,F as le,z as V,D as ae,s as ze,T as st,Q as Ke,L as rt,b as k,f as it,O as qe,M as Me,Z as ut,t as W,l as Be}from"./app-91c3fca6.js";import{_ as dt,a as ct}from"./OnlineStatus-b83a1986.js";import{b as vt,_ as Ae,a as pt,c as Ne,d as je}from"./DarkmodeToggle-06532498.js";import{e as Re}from"./vue3-otp-input.esm-77a255d4.js";import{a as ft}from"./DialogModal-4b64fa4d.js";import{_ as mt}from"./PrimaryButton-6f2e7c5e.js";import{_ as ht}from"./InputError-6110c785.js";import{_ as gt}from"./BackgroundParticle-9a28db97.js";import{o as p,a as de,f as ce,u as j,H as ee,t as X,N as ne,b as G,S as Q,T as yt}from"./use-controllable-03a4e5ad.js";import{c as ve,w as $e,h as Ee,m as pe,O as bt,E as Oe,P as J,N as z,T as we}from"./focus-management-fab8a39b.js";const xt={class:"flex items-center gap-2"},_t={class:"flex items-center gap-2"},se={__name:"NavLinkAlt",props:{href:String,active:Boolean,icon:String,flyout:{type:Boolean,default:!1}},setup(e){const l=e,n=I(()=>l.active?" text-primary-700 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10":" text-gray-900 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10");return(s,o)=>e.flyout?(B(),R("button",{key:0,class:D(n.value)},[u("div",xt,[u("i",{class:D(["fa-duotone",e.icon])},null,2),T(),ue(s.$slots,"default")])],2)):(B(),Ve(F(We),{key:1,href:e.href,class:D(n.value)},{default:O(()=>[u("div",_t,[u("i",{class:D(["fa-duotone",e.icon])},null,2),T(),ue(s.$slots,"default")])]),_:3},8,["href","class"]))}};function wt(e){throw new Error("Unexpected object: "+e)}var Se=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(Se||{});function St(e,l){let n=l.resolveItems();if(n.length<=0)return null;let s=l.resolveActiveIndex(),o=s??-1,t=(()=>{switch(e.focus){case 0:return n.findIndex(a=>!l.resolveDisabled(a));case 1:{let a=n.slice().reverse().findIndex((r,d,c)=>o!==-1&&c.length-d-1>=o?!1:!l.resolveDisabled(r));return a===-1?a:n.length-1-a}case 2:return n.findIndex((a,r)=>r<=o?!1:!l.resolveDisabled(a));case 3:{let a=n.slice().reverse().findIndex(r=>!l.resolveDisabled(r));return a===-1?a:n.length-1-a}case 4:return n.findIndex(a=>l.resolveId(a)===e.id);case 5:return null;default:wt(e)}})();return t===-1?s:t}let Ue=Symbol("Context");var L=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(L||{});function kt(){return fe()!==null}function fe(){return q(Ue,null)}function Ie(e){K(Ue,e)}function re(e,l,n){ve.isServer||N(s=>{document.addEventListener(e,l,n),s(()=>document.removeEventListener(e,l,n))})}function Ye(e,l,n){ve.isServer||N(s=>{window.addEventListener(e,l,n),s(()=>window.removeEventListener(e,l,n))})}function Ze(e,l,n=I(()=>!0)){function s(t,a){if(!n.value||t.defaultPrevented)return;let r=a(t);if(r===null||!r.getRootNode().contains(r))return;let d=function c(i){return typeof i=="function"?c(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);for(let c of d){if(c===null)continue;let i=c instanceof HTMLElement?c:p(c);if(i!=null&&i.contains(r)||t.composed&&t.composedPath().includes(i))return}return!$e(r,Ee.Loose)&&r.tabIndex!==-1&&t.preventDefault(),l(t,r)}let o=y(null);re("pointerdown",t=>{var a,r;n.value&&(o.value=((r=(a=t.composedPath)==null?void 0:a.call(t))==null?void 0:r[0])||t.target)},!0),re("mousedown",t=>{var a,r;n.value&&(o.value=((r=(a=t.composedPath)==null?void 0:a.call(t))==null?void 0:r[0])||t.target)},!0),re("click",t=>{o.value&&(s(t,()=>o.value),o.value=null)},!0),re("touchend",t=>s(t,()=>t.target instanceof HTMLElement?t.target:null),!0),Ye("blur",t=>s(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Pt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(l=>setTimeout(()=>{throw l}))}function Le(){let e=[],l={addEventListener(n,s,o,t){return n.addEventListener(s,o,t),l.add(()=>n.removeEventListener(s,o,t))},requestAnimationFrame(...n){let s=requestAnimationFrame(...n);l.add(()=>cancelAnimationFrame(s))},nextFrame(...n){l.requestAnimationFrame(()=>{l.requestAnimationFrame(...n)})},setTimeout(...n){let s=setTimeout(...n);l.add(()=>clearTimeout(s))},microTask(...n){let s={current:!0};return Pt(()=>{s.current&&n[0]()}),l.add(()=>{s.current=!1})},style(n,s,o){let t=n.style.getPropertyValue(s);return Object.assign(n.style,{[s]:o}),this.add(()=>{Object.assign(n.style,{[s]:t})})},group(n){let s=Le();return n(s),this.add(()=>s.dispose())},add(n){return e.push(n),()=>{let s=e.indexOf(n);if(s>=0)for(let o of e.splice(s,1))o()}},dispose(){for(let n of e.splice(0))n()}};return l}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Ge(){let e=y(0);return Ye("keydown",l=>{l.key==="Tab"&&(e.value=l.shiftKey?1:0)}),e}function $t(e,l,n,s){ve.isServer||N(o=>{e=e??window,e.addEventListener(l,n,s),o(()=>e.removeEventListener(l,n,s))})}let De=Symbol("PortalParentContext");function Et(){let e=q(De,null),l=y([]);function n(t){return l.value.push(t),e&&e.register(t),()=>s(t)}function s(t){let a=l.value.indexOf(t);a!==-1&&l.value.splice(a,1),e&&e.unregister(t)}let o={register:n,unregister:s,portals:l};return[l,U({name:"PortalWrapper",setup(t,{slots:a}){return K(De,o),()=>{var r;return(r=a.default)==null?void 0:r.call(a)}}})]}function Ot({defaultContainers:e=[],portals:l,mainTreeNodeRef:n}={}){let s=y(null),o=pe(s);function t(){var a;let r=[];for(let d of e)d!==null&&(d instanceof HTMLElement?r.push(d):"value"in d&&d.value instanceof HTMLElement&&r.push(d.value));if(l!=null&&l.value)for(let d of l.value)r.push(d);for(let d of(a=o==null?void 0:o.querySelectorAll("html > *, body > *"))!=null?a:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(p(s))||r.some(c=>d.contains(c))||r.push(d));return r}return{resolveContainers:t,contains(a){return t().some(r=>r.contains(a))},mainTreeNodeRef:s,MainTreeNode(){return n!=null?null:A(ce,{features:de.Hidden,ref:s})}}}var It=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(It||{}),Lt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Lt||{});let Tt=Symbol("MenuContext"),Ct=U({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:l,attrs:n}){let s=y(1),o=y(null),t=y(null),a=y([]),r=y(""),d=y(null),c=y(1);function i(b=v=>v){let v=d.value!==null?a.value[d.value]:null,x=bt(b(a.value.slice()),g=>p(g.dataRef.domRef)),h=v?x.indexOf(v):null;return h===-1&&(h=null),{items:x,activeItemIndex:h}}let S={menuState:s,buttonRef:o,itemsRef:t,items:a,searchQuery:r,activeItemIndex:d,activationTrigger:c,closeMenu:()=>{s.value=1,d.value=null},openMenu:()=>s.value=0,goToItem(b,v,x){let h=i(),g=St(b===Se.Specific?{focus:Se.Specific,id:v}:{focus:b},{resolveItems:()=>h.items,resolveActiveIndex:()=>h.activeItemIndex,resolveId:$=>$.id,resolveDisabled:$=>$.dataRef.disabled});r.value="",d.value=g,c.value=x??1,a.value=h.items},search(b){let v=r.value!==""?0:1;r.value+=b.toLowerCase();let x=(d.value!==null?a.value.slice(d.value+v).concat(a.value.slice(0,d.value+v)):a.value).find(g=>g.dataRef.textValue.startsWith(r.value)&&!g.dataRef.disabled),h=x?a.value.indexOf(x):-1;h===-1||h===d.value||(d.value=h,c.value=1)},clearSearch(){r.value=""},registerItem(b,v){let x=i(h=>[...h,{id:b,dataRef:v}]);a.value=x.items,d.value=x.activeItemIndex,c.value=1},unregisterItem(b){let v=i(x=>{let h=x.findIndex(g=>g.id===b);return h!==-1&&x.splice(h,1),x});a.value=v.items,d.value=v.activeItemIndex,c.value=1}};return Ze([o,t],(b,v)=>{var x;S.closeMenu(),$e(v,Ee.Loose)||(b.preventDefault(),(x=p(o))==null||x.focus())},I(()=>s.value===0)),K(Tt,S),Ie(I(()=>j(s.value,{[0]:L.Open,[1]:L.Closed}))),()=>{let b={open:s.value===0,close:S.closeMenu};return ee({ourProps:{},theirProps:e,slot:b,slots:l,attrs:n,name:"Menu"})}}});var Ft=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ft||{});let Qe=Symbol("PopoverContext");function me(e){let l=q(Qe,null);if(l===null){let n=new Error(`<${e} /> is missing a parent <${et.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,me),n}return l}let Mt=Symbol("PopoverGroupContext");function Je(){return q(Mt,null)}let Xe=Symbol("PopoverPanelContext");function Bt(){return q(Xe,null)}let et=U({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:l,attrs:n,expose:s}){var o;let t=y(null);s({el:t,$el:t});let a=y(1),r=y(null),d=y(null),c=y(null),i=y(null),S=I(()=>pe(t)),b=I(()=>{var f,w;if(!p(r)||!p(i))return!1;for(let M of document.querySelectorAll("body > *"))if(Number(M==null?void 0:M.contains(p(r)))^Number(M==null?void 0:M.contains(p(i))))return!0;let P=Oe(),C=P.indexOf(p(r)),te=(C+P.length-1)%P.length,ge=(C+1)%P.length,ye=P[te],be=P[ge];return!((f=p(i))!=null&&f.contains(ye))&&!((w=p(i))!=null&&w.contains(be))}),v={popoverState:a,buttonId:y(null),panelId:y(null),panel:i,button:r,isPortalled:b,beforePanelSentinel:d,afterPanelSentinel:c,togglePopover(){a.value=j(a.value,{[0]:1,[1]:0})},closePopover(){a.value!==1&&(a.value=1)},close(f){v.closePopover();let w=(()=>f?f instanceof HTMLElement?f:f.value instanceof HTMLElement?p(f):p(v.button):p(v.button))();w==null||w.focus()}};K(Qe,v),Ie(I(()=>j(a.value,{[0]:L.Open,[1]:L.Closed})));let x={buttonId:v.buttonId,panelId:v.panelId,close(){v.closePopover()}},h=Je(),g=h==null?void 0:h.registerPopover,[$,_]=Et(),m=Ot({mainTreeNodeRef:h==null?void 0:h.mainTreeNodeRef,portals:$,defaultContainers:[r,i]});function E(){var f,w,P,C;return(C=h==null?void 0:h.isFocusWithinPopoverGroup())!=null?C:((f=S.value)==null?void 0:f.activeElement)&&(((w=p(r))==null?void 0:w.contains(S.value.activeElement))||((P=p(i))==null?void 0:P.contains(S.value.activeElement)))}return N(()=>g==null?void 0:g(x)),$t((o=S.value)==null?void 0:o.defaultView,"focus",f=>{var w,P;f.target!==window&&f.target instanceof HTMLElement&&a.value===0&&(E()||r&&i&&(m.contains(f.target)||(w=p(v.beforePanelSentinel))!=null&&w.contains(f.target)||(P=p(v.afterPanelSentinel))!=null&&P.contains(f.target)||v.closePopover()))},!0),Ze(m.resolveContainers,(f,w)=>{var P;v.closePopover(),$e(w,Ee.Loose)||(f.preventDefault(),(P=p(r))==null||P.focus())},I(()=>a.value===0)),()=>{let f={open:a.value===0,close:v.close};return A(le,[A(_,{},()=>ee({theirProps:{...e,...n},ourProps:{ref:t},slot:f,slots:l,attrs:n,name:"Popover"})),A(m.MainTreeNode)])}}}),At=U({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${X()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:n,expose:s}){let o=me("PopoverButton"),t=I(()=>pe(o.button));s({el:o.button,$el:o.button}),V(()=>{o.buttonId.value=e.id}),ae(()=>{o.buttonId.value=null});let a=Je(),r=a==null?void 0:a.closeOthers,d=Bt(),c=I(()=>d===null?!1:d.value===o.panelId.value),i=y(null),S=`headlessui-focus-sentinel-${X()}`;c.value||N(()=>{o.button.value=i.value});let b=vt(I(()=>({as:e.as,type:l.type})),i);function v(m){var E,f,w,P,C;if(c.value){if(o.popoverState.value===1)return;switch(m.key){case G.Space:case G.Enter:m.preventDefault(),(f=(E=m.target).click)==null||f.call(E),o.closePopover(),(w=p(o.button))==null||w.focus();break}}else switch(m.key){case G.Space:case G.Enter:m.preventDefault(),m.stopPropagation(),o.popoverState.value===1&&(r==null||r(o.buttonId.value)),o.togglePopover();break;case G.Escape:if(o.popoverState.value!==0)return r==null?void 0:r(o.buttonId.value);if(!p(o.button)||(P=t.value)!=null&&P.activeElement&&!((C=p(o.button))!=null&&C.contains(t.value.activeElement)))return;m.preventDefault(),m.stopPropagation(),o.closePopover();break}}function x(m){c.value||m.key===G.Space&&m.preventDefault()}function h(m){var E,f;e.disabled||(c.value?(o.closePopover(),(E=p(o.button))==null||E.focus()):(m.preventDefault(),m.stopPropagation(),o.popoverState.value===1&&(r==null||r(o.buttonId.value)),o.togglePopover(),(f=p(o.button))==null||f.focus()))}function g(m){m.preventDefault(),m.stopPropagation()}let $=Ge();function _(){let m=p(o.panel);if(!m)return;function E(){j($.value,{[H.Forwards]:()=>J(m,z.First),[H.Backwards]:()=>J(m,z.Last)})===we.Error&&J(Oe().filter(f=>f.dataset.headlessuiFocusGuard!=="true"),j($.value,{[H.Forwards]:z.Next,[H.Backwards]:z.Previous}),{relativeTo:p(o.button)})}E()}return()=>{let m=o.popoverState.value===0,E={open:m},{id:f,...w}=e,P=c.value?{ref:i,type:b.value,onKeydown:v,onClick:h}:{ref:i,id:f,type:b.value,"aria-expanded":o.popoverState.value===0,"aria-controls":p(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:v,onKeyup:x,onClick:h,onMousedown:g};return A(le,[ee({ourProps:P,theirProps:{...l,...w},slot:E,attrs:l,slots:n,name:"PopoverButton"}),m&&!c.value&&o.isPortalled.value&&A(ce,{id:S,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:_})])}}}),Nt=U({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:l,slots:n}){let s=me("PopoverOverlay"),o=`headlessui-popover-overlay-${X()}`,t=fe(),a=I(()=>t!==null?(t.value&L.Open)===L.Open:s.popoverState.value===0);function r(){s.closePopover()}return()=>{let d={open:s.popoverState.value===0};return ee({ourProps:{id:o,"aria-hidden":!0,onClick:r},theirProps:e,slot:d,attrs:l,slots:n,features:ne.RenderStrategy|ne.Static,visible:a.value,name:"PopoverOverlay"})}}}),jt=U({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${X()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:n,expose:s}){let{focus:o}=e,t=me("PopoverPanel"),a=I(()=>pe(t.panel)),r=`headlessui-focus-sentinel-before-${X()}`,d=`headlessui-focus-sentinel-after-${X()}`;s({el:t.panel,$el:t.panel}),V(()=>{t.panelId.value=e.id}),ae(()=>{t.panelId.value=null}),K(Xe,t.panelId),N(()=>{var g,$;if(!o||t.popoverState.value!==0||!t.panel)return;let _=(g=a.value)==null?void 0:g.activeElement;($=p(t.panel))!=null&&$.contains(_)||J(p(t.panel),z.First)});let c=fe(),i=I(()=>c!==null?(c.value&L.Open)===L.Open:t.popoverState.value===0);function S(g){var $,_;switch(g.key){case G.Escape:if(t.popoverState.value!==0||!p(t.panel)||a.value&&!(($=p(t.panel))!=null&&$.contains(a.value.activeElement)))return;g.preventDefault(),g.stopPropagation(),t.closePopover(),(_=p(t.button))==null||_.focus();break}}function b(g){var $,_,m,E,f;let w=g.relatedTarget;w&&p(t.panel)&&(($=p(t.panel))!=null&&$.contains(w)||(t.closePopover(),((m=(_=p(t.beforePanelSentinel))==null?void 0:_.contains)!=null&&m.call(_,w)||(f=(E=p(t.afterPanelSentinel))==null?void 0:E.contains)!=null&&f.call(E,w))&&w.focus({preventScroll:!0})))}let v=Ge();function x(){let g=p(t.panel);if(!g)return;function $(){j(v.value,{[H.Forwards]:()=>{var _;J(g,z.First)===we.Error&&((_=p(t.afterPanelSentinel))==null||_.focus())},[H.Backwards]:()=>{var _;(_=p(t.button))==null||_.focus({preventScroll:!0})}})}$()}function h(){let g=p(t.panel);if(!g)return;function $(){j(v.value,{[H.Forwards]:()=>{let _=p(t.button),m=p(t.panel);if(!_)return;let E=Oe(),f=E.indexOf(_),w=E.slice(0,f+1),P=[...E.slice(f+1),...w];for(let C of P.slice())if(C.dataset.headlessuiFocusGuard==="true"||m!=null&&m.contains(C)){let te=P.indexOf(C);te!==-1&&P.splice(te,1)}J(P,z.First,{sorted:!1})},[H.Backwards]:()=>{var _;J(g,z.Previous)===we.Error&&((_=p(t.button))==null||_.focus())}})}$()}return()=>{let g={open:t.popoverState.value===0,close:t.close},{id:$,focus:_,...m}=e,E={ref:t.panel,id:$,onKeydown:S,onFocusout:o&&t.popoverState.value===0?b:void 0,tabIndex:-1};return ee({ourProps:E,theirProps:{...l,...m},attrs:l,slot:g,slots:{...n,default:(...f)=>{var w;return[A(le,[i.value&&t.isPortalled.value&&A(ce,{id:r,ref:t.beforePanelSentinel,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:x}),(w=n.default)==null?void 0:w.call(n,...f),i.value&&t.isPortalled.value&&A(ce,{id:d,ref:t.afterPanelSentinel,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h})])]}},features:ne.RenderStrategy|ne.Static,visible:i.value,name:"PopoverPanel"})}}});function Rt(e){let l={called:!1};return(...n)=>{if(!l.called)return l.called=!0,e(...n)}}function _e(e,...l){e&&l.length>0&&e.classList.add(...l)}function ie(e,...l){e&&l.length>0&&e.classList.remove(...l)}var ke=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(ke||{});function Dt(e,l){let n=Le();if(!e)return n.dispose;let{transitionDuration:s,transitionDelay:o}=getComputedStyle(e),[t,a]=[s,o].map(r=>{let[d=0]=r.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,i)=>i-c);return d});return t!==0?n.setTimeout(()=>l("finished"),t+a):l("finished"),n.add(()=>l("cancelled")),n.dispose}function He(e,l,n,s,o,t){let a=Le(),r=t!==void 0?Rt(t):()=>{};return ie(e,...o),_e(e,...l,...n),a.nextFrame(()=>{ie(e,...n),_e(e,...s),a.add(Dt(e,d=>(ie(e,...s,...l),_e(e,...o),r(d))))}),a.add(()=>ie(e,...l,...n,...s,...o)),a.add(()=>r("cancelled")),a.dispose}function Z(e=""){return e.split(" ").filter(l=>l.trim().length>1)}let Te=Symbol("TransitionContext");var Ht=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ht||{});function Vt(){return q(Te,null)!==null}function Wt(){let e=q(Te,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function zt(){let e=q(Ce,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ce=Symbol("NestingContext");function he(e){return"children"in e?he(e.children):e.value.filter(({state:l})=>l==="visible").length>0}function tt(e){let l=y([]),n=y(!1);V(()=>n.value=!0),ae(()=>n.value=!1);function s(t,a=Q.Hidden){let r=l.value.findIndex(({id:d})=>d===t);r!==-1&&(j(a,{[Q.Unmount](){l.value.splice(r,1)},[Q.Hidden](){l.value[r].state="hidden"}}),!he(l)&&n.value&&(e==null||e()))}function o(t){let a=l.value.find(({id:r})=>r===t);return a?a.state!=="visible"&&(a.state="visible"):l.value.push({id:t,state:"visible"}),()=>s(t,Q.Unmount)}return{children:l,register:o,unregister:s}}let lt=ne.RenderStrategy,Pe=U({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:n,slots:s,expose:o}){let t=y(0);function a(){t.value|=L.Opening,l("beforeEnter")}function r(){t.value&=~L.Opening,l("afterEnter")}function d(){t.value|=L.Closing,l("beforeLeave")}function c(){t.value&=~L.Closing,l("afterLeave")}if(!Vt()&&kt())return()=>A(nt,{...e,onBeforeEnter:a,onAfterEnter:r,onBeforeLeave:d,onAfterLeave:c},s);let i=y(null),S=I(()=>e.unmount?Q.Unmount:Q.Hidden);o({el:i,$el:i});let{show:b,appear:v}=Wt(),{register:x,unregister:h}=zt(),g=y(b.value?"visible":"hidden"),$={value:!0},_=X(),m={value:!1},E=tt(()=>{!m.value&&g.value!=="hidden"&&(g.value="hidden",h(_),c())});V(()=>{let M=x(_);ae(M)}),N(()=>{if(S.value===Q.Hidden&&_){if(b.value&&g.value!=="visible"){g.value="visible";return}j(g.value,{hidden:()=>h(_),visible:()=>x(_)})}});let f=Z(e.enter),w=Z(e.enterFrom),P=Z(e.enterTo),C=Z(e.entered),te=Z(e.leave),ge=Z(e.leaveFrom),ye=Z(e.leaveTo);V(()=>{N(()=>{if(g.value==="visible"){let M=p(i);if(M instanceof Comment&&M.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function be(M){let xe=$.value&&!v.value,Y=p(i);!Y||!(Y instanceof HTMLElement)||xe||(m.value=!0,b.value&&a(),b.value||d(),M(b.value?He(Y,f,w,P,C,oe=>{m.value=!1,oe===ke.Finished&&r()}):He(Y,te,ge,ye,C,oe=>{m.value=!1,oe===ke.Finished&&(he(E)||(g.value="hidden",h(_),c()))})))}return V(()=>{ze([b],(M,xe,Y)=>{be(Y),$.value=!1},{immediate:!0})}),K(Ce,E),Ie(I(()=>j(g.value,{visible:L.Open,hidden:L.Closed})|t.value)),()=>{let{appear:M,show:xe,enter:Y,enterFrom:oe,enterTo:Vl,entered:Wl,leave:zl,leaveFrom:Kl,leaveTo:ql,...Fe}=e,at={ref:i},ot={...Fe,...v.value&&b.value&&ve.isServer?{class:D([n.class,Fe.class,...f,...w])}:{}};return ee({theirProps:ot,ourProps:at,slot:{},slots:s,attrs:n,features:lt,visible:g.value==="visible",name:"TransitionChild"})}}}),Kt=Pe,nt=U({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:n,slots:s}){let o=fe(),t=I(()=>e.show===null&&o!==null?(o.value&L.Open)===L.Open:e.show);N(()=>{if(![!0,!1].includes(t.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let a=y(t.value?"visible":"hidden"),r=tt(()=>{a.value="hidden"}),d=y(!0),c={show:t,appear:I(()=>e.appear||!d.value)};return V(()=>{N(()=>{d.value=!1,t.value?a.value="visible":he(r)||(a.value="hidden")})}),K(Ce,r),K(Te,c),()=>{let i=yt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),S={unmount:e.unmount};return ee({ourProps:{...S,as:"template"},theirProps:{},slot:{},slots:{...s,default:()=>[A(Kt,{onBeforeEnter:()=>l("beforeEnter"),onAfterEnter:()=>l("afterEnter"),onBeforeLeave:()=>l("beforeLeave"),onAfterLeave:()=>l("afterLeave"),...n,...S,...i},s.default)]},attrs:{},features:lt,visible:a.value==="visible",name:"Transition"})}}});const qt=u("div",{class:"w-full text-center"}," Satu Langkah Lagi ",-1),Ut=u("div",{class:"text-center text-xs text-gray-600"}," Proses verifikasi ini hanya dilakukan satu kali. ",-1),Yt=u("i",{class:"fa-brands fa-whatsapp mr-1.5"},null,-1),Zt={__name:"OtpWhatsapp",props:{greet:{type:Boolean,default:!0}},setup(e){const l=e,n=st({pin:null}),{...s}=I(()=>Ke().props.user).value,o=()=>{},t=y(s.phone_verified_at==null),a=y(l.greet),r=y(Re|null),d=y(""),c=y(!1),i=v=>{n.pin=d.value,n.post(route("otp.verify"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onError:x=>{var h;c.value=!0,(h=r.value)==null||h.clearInput()},onSuccess:()=>{t.value=!1}})},S=v=>{},b=()=>{qe.post(route("otp.request"),null,{onBefore:v=>{},onStart:v=>{},onProgress:v=>{},onSuccess:v=>{},onError:v=>{},onCancel:()=>{},onFinish:()=>{a.value=!1}}),console.log(a.value+" asf")};return V(()=>{}),(v,x)=>(B(),Ve(ft,{show:t.value,onClose:o},rt({_:2},[a.value?{name:"title",fn:O(()=>[qt,Ut]),key:"0"}:{name:"title",fn:O(()=>[u("div",{class:"w-full text-center"}," Masukkan kode OTP Whatsapp "),u("div",{class:"text-center text-xs text-gray-600"},[T(" Tidak menerima kode? "),k(F(We),{class:"text-primary-600 underline font-medium",href:""},{default:O(()=>[T("Kirim ulang kode OTP")]),_:1})])]),key:"1"},a.value?{name:"content",fn:O(()=>[k(mt,{onClick:b,class:"w-full justify-center"},{default:O(()=>[Yt,T(" Verifikasi Whatsapp ")]),_:1})]),key:"2"}:{name:"content",fn:O(()=>[u("div",{class:"grid justify-center"},[k(F(Re),{ref_key:"otpInput",ref:r,value:d.value,"onUpdate:value":x[0]||(x[0]=h=>d.value=h),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:S,onOnComplete:i},null,8,["value"]),k(ht,{message:F(n).errors.pin,class:"mt-2"},null,8,["message"]),c.value?(B(),R("p",{key:0,class:"w-full text-center text-sm text-red-600 mt-2"},"Kode OTP salah, silahkan coba lagi.")):it("",!0)])]),key:"3"}]),1032,["show"]))}},Gt={class:"sticky top-0 z-50"},Qt={class:"sticky top-0 z-50"},Jt={class:"min-h-screen bg-white relative isolate transition duration-1000 pt-28 sm:pt-0"},Xt={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},el={class:"relative flex flex-wrap items-center justify-start lg:justify-between"},tl={key:1,class:"sm:flex sm:space-x-5"},ll={class:"sm:mt-0 sm:pt-1 text-left"},nl=u("span",{class:"font-medium text-gray-600"},"Halo,",-1),al={class:"text-sm font-medium text-gray-600"},ol={class:"hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"},sl={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},rl=["src","alt"],il={key:1,class:"inline-flex rounded-3xl"},ul={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},dl=u("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[u("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),cl=u("div",{class:"border-t border-gray-100"},null,-1),vl={class:"hidden lg:flex w-full py-10 lg:py-5 lg:border-t lg:border-gray-300"},pl={class:"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"},fl={class:"hidden lg:block lg:col-span-2"},ml={class:"flex space-x-4"},hl=u("div",{class:"px-12 lg:px-0"},[u("div",{class:"flex justify-end"})],-1),gl=u("div",{class:"absolute right-0 flex-shrink-0 lg:hidden"},null,-1),yl={class:"lg:hidden"},bl={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"},xl={class:"pt-3 pb-2"},_l={class:"flex items-center justify-between px-4"},wl={class:"-mr-2"},Sl={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},kl=u("div",{class:"mt-3 px-2 space-y-1"},null,-1),Pl={class:"pt-4 pb-2"},$l={class:"flex items-center px-5"},El={class:"flex-shrink-0"},Ol=["src","alt"],Il={class:"ml-3 min-w-0 flex-1"},Ll={class:"text-base font-medium text-gray-800 truncate capitalize"},Tl={class:"text-sm font-medium text-gray-500 truncate"},Cl={class:"mt-3 px-2 space-y-1"},Fl={class:"mt-5"},Ml={class:"max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Bl={class:""},Al={class:"max-w-7xl mx-auto space-y-5 relative"},Nl={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"},jl=u("div",{class:"py-16 sm:py-5 block"},null,-1),Rl={class:"border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"},Dl={class:"block sm:inline capitalize"},Hl=u("span",{class:"block sm:inline"},"All rights reserved.",-1),nn={__name:"AppLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(e){const l=e;I(()=>Ke().props.user).value;const n=y(!1);typeof window<"u"&&(n.value=JSON.parse(localStorage.getItem("darkmode"))??!1,ze(n,i=>{console.log(`darkmode is ${i}`),localStorage.setItem("darkmode",JSON.stringify(i))}));const s=y(!1);I(()=>!!Me().action);const o=I(()=>!!Me().previous),t=l.name.split(" "),a=()=>{qe.post(route("logout"))},r=y(null),d=y(null),c=y(null);return V(()=>{var i=window.pageYOffset;window.addEventListener("scroll",()=>{if(r.value!=null&&d.value!=null){var S=window.pageYOffset;i>S||o.value||(r.value.classList.add("backdrop-blur-sm","border","border-gray-300","mx-4","rounded-full","sm:mx-0","sm:border-0","sm:rounded-none"),d.value.classList.add("text-xl"),c.value.classList.remove("py-5"),c.value.classList.add("py-2")),S===0&&(o.value||(r.value.classList.remove("backdrop-blur-sm","border","border-gray-300","mx-4","rounded-full","sm:mx-0","sm:border-0","sm:rounded-none"),d.value.classList.remove("text-xl"),c.value.classList.add("py-5"),c.value.classList.remove("py-2"))),i=S}})}),ae(()=>{}),(i,S)=>{var b,v;return B(),R("div",{class:D(["transition duration-1000",n.value?"nightwind dark":"nightwind"])},[k(F(ut),{title:e.title+" - "+((b=i.$page.props.appSetting)==null?void 0:b.name)},null,8,["title"]),u("div",Gt,[k(dt)]),u("div",Qt,[k(ct)]),u("div",Jt,[k(gt),u("div",{class:D(["transition duration-1000",o.value?"":"sticky sm:relative top-3 right-0 left-0 z-40 "]),ref_key:"headRef",ref:r},[k(F(et),{as:"header",class:""},{default:O(({open:x})=>[u("div",Xt,[u("div",el,[u("div",{class:"py-5 flex-shrink-0 flex items-center",ref_key:"paddingRef",ref:c},[o.value?ue(i.$slots,"previous",{key:0}):(B(),R("div",tl,[u("div",ll,[u("p",{class:"text-4xl sm:text-2xl font-bold text-gray-900 capitalize",ref_key:"titleRef",ref:d},[l.greeting?(B(),R(le,{key:0},[nl,T(" "+W(F(t)[0])+". ",1)],64)):(B(),R(le,{key:1},[T(W(l.name)+W(l.name?".":""),1)],64))],512),u("p",al,W(l.desc),1)])]))],512),u("div",ol,[k(Ae,{darkMode:n.value,onClick:S[0]||(S[0]=h=>n.value=!n.value)},null,8,["darkMode"]),k(F(Ct),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:O(()=>[k(pt,{align:"right",width:"48"},{trigger:O(()=>[i.$page.props.jetstream.managesProfilePhotos?(B(),R("button",sl,[u("img",{class:"h-10 w-10 rounded-full object-cover",src:i.$page.props.user.profile_photo_url,alt:i.$page.props.user.name},null,8,rl)])):(B(),R("span",il,[u("button",ul,[T(W(i.$page.props.user.name)+" ",1),dl])]))]),content:O(()=>[k(Ne,{href:i.route("profile.show")},{default:O(()=>[T(" Profil ")]),_:1},8,["href"]),cl,u("form",{onSubmit:Be(a,["prevent"])},[k(Ne,{as:"button"},{default:O(()=>[T(" Keluar ")]),_:1})],32)]),_:1})]),_:1})]),u("div",vl,[u("div",pl,[u("div",fl,[u("nav",ml,[k(se,{href:i.route("dashboard"),active:i.$page.component.startsWith("Dashboard"),icon:"fa-house",replace:""},{default:O(()=>[T(" Beranda ")]),_:1},8,["href","active"]),k(se,{href:i.route("history.index"),active:i.$page.component.startsWith("History"),icon:"fa-files"},{default:O(()=>[T(" Riwayat ")]),_:1},8,["href","active"]),k(se,{href:i.route("information.index"),active:i.$page.component.startsWith("Information"),icon:"fa-circle-info"},{default:O(()=>[T(" Informasi ")]),_:1},8,["href","active"]),k(se,{href:i.route("profile.index"),active:i.$page.component.startsWith("Profile"),icon:"fa-user"},{default:O(()=>[T(" Saya ")]),_:1},8,["href","active"])])]),hl])]),gl])]),k(F(nt),{as:"template",show:x},{default:O(()=>[u("div",yl,[k(F(Pe),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:O(()=>[k(F(Nt),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),k(F(Pe),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:O(()=>[k(F(jt),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:O(()=>[u("div",bl,[u("div",xl,[u("div",_l,[u("div",null,[k(Ae,{darkMode:n.value,onClick:S[1]||(S[1]=h=>n.value=!n.value)},null,8,["darkMode"])]),u("div",wl,[k(F(At),{class:"bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:O(()=>[u("button",{class:"inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:S[2]||(S[2]=h=>s.value=!s.value)},[(B(),R("svg",Sl,[u("path",{class:D({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),u("path",{class:D({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),kl]),u("div",Pl,[u("div",$l,[u("div",El,[u("img",{class:"h-12 w-12 rounded-full object-cover",src:i.$page.props.user.profile_photo_url,alt:i.$page.props.user.name},null,8,Ol)]),u("div",Il,[u("div",Ll,W(i.$page.props.user.name),1),u("div",Tl,W(i.$page.props.user.email),1)])]),u("div",Cl,[k(je,{href:i.route("profile.show"),active:i.route().current("profile.show")},{default:O(()=>[T(" Profil ")]),_:1},8,["href","active"]),u("form",{method:"POST",onSubmit:Be(a,["prevent"])},[k(je,{as:"button"},{default:O(()=>[T(" Keluar ")]),_:1})],32)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:3})],2),u("main",Fl,[u("div",Ml,[u("div",Bl,[u("div",Al,[ue(i.$slots,"default")])])])]),u("footer",null,[u("div",Nl,[jl,u("div",Rl,[u("span",Dl,"© 2023 "+W((v=i.$page.props.appSetting)==null?void 0:v.name)+". ",1),Hl])])])]),k(Zt)],2)}}};export{nn as _,Ie as c,L as l,fe as p};

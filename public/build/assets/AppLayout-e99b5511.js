import{i as L,o as R,e as z,a as u,n as j,g as C,r as ie,c as tt,w as I,u as M,m as lt,H as K,y as q,I as A,d as w,J as U,B,F as le,z as W,K as ce,s as He,L as Me,b as $,Z as nt,t as H,l as Be,O as at}from"./app-e077f49a.js";import{_ as ot,a as rt}from"./OnlineStatus-dac23aa5.js";import{b as st,_ as Ae,a as it,c as Ne,d as Re}from"./DarkmodeToggle-8d75ce25.js";import{o as v,a as ue,f as de,u as N,H as ee,t as X,N as ne,b as G,S as J,T as ut}from"./use-controllable-811bdcaf.js";import{c as ve,w as Ee,h as $e,m as fe,O as dt,E as Le,P as Q,N as V,T as _e}from"./focus-management-8087af56.js";const ct={class:"flex items-center gap-2"},vt={class:"flex items-center gap-2"},oe={__name:"NavLinkAlt",props:{href:String,active:Boolean,icon:String,flyout:{type:Boolean,default:!1}},setup(e){const l=e,n=L(()=>l.active?" text-primary-700 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10":" text-gray-900 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10");return(r,o)=>e.flyout?(R(),z("button",{key:0,class:j(n.value)},[u("div",ct,[u("i",{class:j(["fa-duotone",e.icon])},null,2),C(),ie(r.$slots,"default")])],2)):(R(),tt(M(lt),{key:1,href:e.href,class:j(n.value)},{default:I(()=>[u("div",vt,[u("i",{class:j(["fa-duotone",e.icon])},null,2),C(),ie(r.$slots,"default")])]),_:3},8,["href","class"]))}};function ft(e){throw new Error("Unexpected object: "+e)}var Se=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(Se||{});function pt(e,l){let n=l.resolveItems();if(n.length<=0)return null;let r=l.resolveActiveIndex(),o=r??-1,t=(()=>{switch(e.focus){case 0:return n.findIndex(a=>!l.resolveDisabled(a));case 1:{let a=n.slice().reverse().findIndex((s,d,c)=>o!==-1&&c.length-d-1>=o?!1:!l.resolveDisabled(s));return a===-1?a:n.length-1-a}case 2:return n.findIndex((a,s)=>s<=o?!1:!l.resolveDisabled(a));case 3:{let a=n.slice().reverse().findIndex(s=>!l.resolveDisabled(s));return a===-1?a:n.length-1-a}case 4:return n.findIndex(a=>l.resolveId(a)===e.id);case 5:return null;default:ft(e)}})();return t===-1?r:t}let ze=Symbol("Context");var O=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(O||{});function mt(){return pe()!==null}function pe(){return K(ze,null)}function Ie(e){q(ze,e)}function re(e,l,n){ve.isServer||A(r=>{document.addEventListener(e,l,n),r(()=>document.removeEventListener(e,l,n))})}function Ve(e,l,n){ve.isServer||A(r=>{window.addEventListener(e,l,n),r(()=>window.removeEventListener(e,l,n))})}function We(e,l,n=L(()=>!0)){function r(t,a){if(!n.value||t.defaultPrevented)return;let s=a(t);if(s===null||!s.getRootNode().contains(s))return;let d=function c(i){return typeof i=="function"?c(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);for(let c of d){if(c===null)continue;let i=c instanceof HTMLElement?c:v(c);if(i!=null&&i.contains(s)||t.composed&&t.composedPath().includes(i))return}return!Ee(s,$e.Loose)&&s.tabIndex!==-1&&t.preventDefault(),l(t,s)}let o=w(null);re("pointerdown",t=>{var a,s;n.value&&(o.value=((s=(a=t.composedPath)==null?void 0:a.call(t))==null?void 0:s[0])||t.target)},!0),re("mousedown",t=>{var a,s;n.value&&(o.value=((s=(a=t.composedPath)==null?void 0:a.call(t))==null?void 0:s[0])||t.target)},!0),re("click",t=>{o.value&&(r(t,()=>o.value),o.value=null)},!0),re("touchend",t=>r(t,()=>t.target instanceof HTMLElement?t.target:null),!0),Ve("blur",t=>r(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function gt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(l=>setTimeout(()=>{throw l}))}function Oe(){let e=[],l={addEventListener(n,r,o,t){return n.addEventListener(r,o,t),l.add(()=>n.removeEventListener(r,o,t))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);l.add(()=>cancelAnimationFrame(r))},nextFrame(...n){l.requestAnimationFrame(()=>{l.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);l.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return gt(()=>{r.current&&n[0]()}),l.add(()=>{r.current=!1})},style(n,r,o){let t=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:t})})},group(n){let r=Oe();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return l}var D=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(D||{});function qe(){let e=w(0);return Ve("keydown",l=>{l.key==="Tab"&&(e.value=l.shiftKey?1:0)}),e}function ht(e,l,n,r){ve.isServer||A(o=>{e=e??window,e.addEventListener(l,n,r),o(()=>e.removeEventListener(l,n,r))})}let je=Symbol("PortalParentContext");function yt(){let e=K(je,null),l=w([]);function n(t){return l.value.push(t),e&&e.register(t),()=>r(t)}function r(t){let a=l.value.indexOf(t);a!==-1&&l.value.splice(a,1),e&&e.unregister(t)}let o={register:n,unregister:r,portals:l};return[l,U({name:"PortalWrapper",setup(t,{slots:a}){return q(je,o),()=>{var s;return(s=a.default)==null?void 0:s.call(a)}}})]}function bt({defaultContainers:e=[],portals:l,mainTreeNodeRef:n}={}){let r=w(null),o=fe(r);function t(){var a;let s=[];for(let d of e)d!==null&&(d instanceof HTMLElement?s.push(d):"value"in d&&d.value instanceof HTMLElement&&s.push(d.value));if(l!=null&&l.value)for(let d of l.value)s.push(d);for(let d of(a=o==null?void 0:o.querySelectorAll("html > *, body > *"))!=null?a:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(v(r))||s.some(c=>d.contains(c))||s.push(d));return s}return{resolveContainers:t,contains(a){return t().some(s=>s.contains(a))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:B(de,{features:ue.Hidden,ref:r})}}}var xt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(xt||{}),wt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(wt||{});let _t=Symbol("MenuContext"),St=U({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:l,attrs:n}){let r=w(1),o=w(null),t=w(null),a=w([]),s=w(""),d=w(null),c=w(1);function i(y=p=>p){let p=d.value!==null?a.value[d.value]:null,_=dt(y(a.value.slice()),g=>v(g.dataRef.domRef)),h=p?_.indexOf(p):null;return h===-1&&(h=null),{items:_,activeItemIndex:h}}let S={menuState:r,buttonRef:o,itemsRef:t,items:a,searchQuery:s,activeItemIndex:d,activationTrigger:c,closeMenu:()=>{r.value=1,d.value=null},openMenu:()=>r.value=0,goToItem(y,p,_){let h=i(),g=pt(y===Se.Specific?{focus:Se.Specific,id:p}:{focus:y},{resolveItems:()=>h.items,resolveActiveIndex:()=>h.activeItemIndex,resolveId:k=>k.id,resolveDisabled:k=>k.dataRef.disabled});s.value="",d.value=g,c.value=_??1,a.value=h.items},search(y){let p=s.value!==""?0:1;s.value+=y.toLowerCase();let _=(d.value!==null?a.value.slice(d.value+p).concat(a.value.slice(0,d.value+p)):a.value).find(g=>g.dataRef.textValue.startsWith(s.value)&&!g.dataRef.disabled),h=_?a.value.indexOf(_):-1;h===-1||h===d.value||(d.value=h,c.value=1)},clearSearch(){s.value=""},registerItem(y,p){let _=i(h=>[...h,{id:y,dataRef:p}]);a.value=_.items,d.value=_.activeItemIndex,c.value=1},unregisterItem(y){let p=i(_=>{let h=_.findIndex(g=>g.id===y);return h!==-1&&_.splice(h,1),_});a.value=p.items,d.value=p.activeItemIndex,c.value=1}};return We([o,t],(y,p)=>{var _;S.closeMenu(),Ee(p,$e.Loose)||(y.preventDefault(),(_=v(o))==null||_.focus())},L(()=>r.value===0)),q(_t,S),Ie(L(()=>N(r.value,{[0]:O.Open,[1]:O.Closed}))),()=>{let y={open:r.value===0,close:S.closeMenu};return ee({ourProps:{},theirProps:e,slot:y,slots:l,attrs:n,name:"Menu"})}}});var Pt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Pt||{});let Ke=Symbol("PopoverContext");function me(e){let l=K(Ke,null);if(l===null){let n=new Error(`<${e} /> is missing a parent <${Ze.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,me),n}return l}let kt=Symbol("PopoverGroupContext");function Ue(){return K(kt,null)}let Ye=Symbol("PopoverPanelContext");function Et(){return K(Ye,null)}let Ze=U({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:l,attrs:n,expose:r}){var o;let t=w(null);r({el:t,$el:t});let a=w(1),s=w(null),d=w(null),c=w(null),i=w(null),S=L(()=>fe(t)),y=L(()=>{var f,x;if(!v(s)||!v(i))return!1;for(let F of document.querySelectorAll("body > *"))if(Number(F==null?void 0:F.contains(v(s)))^Number(F==null?void 0:F.contains(v(i))))return!0;let P=Le(),T=P.indexOf(v(s)),te=(T+P.length-1)%P.length,he=(T+1)%P.length,ye=P[te],be=P[he];return!((f=v(i))!=null&&f.contains(ye))&&!((x=v(i))!=null&&x.contains(be))}),p={popoverState:a,buttonId:w(null),panelId:w(null),panel:i,button:s,isPortalled:y,beforePanelSentinel:d,afterPanelSentinel:c,togglePopover(){a.value=N(a.value,{[0]:1,[1]:0})},closePopover(){a.value!==1&&(a.value=1)},close(f){p.closePopover();let x=(()=>f?f instanceof HTMLElement?f:f.value instanceof HTMLElement?v(f):v(p.button):v(p.button))();x==null||x.focus()}};q(Ke,p),Ie(L(()=>N(a.value,{[0]:O.Open,[1]:O.Closed})));let _={buttonId:p.buttonId,panelId:p.panelId,close(){p.closePopover()}},h=Ue(),g=h==null?void 0:h.registerPopover,[k,b]=yt(),m=bt({mainTreeNodeRef:h==null?void 0:h.mainTreeNodeRef,portals:k,defaultContainers:[s,i]});function E(){var f,x,P,T;return(T=h==null?void 0:h.isFocusWithinPopoverGroup())!=null?T:((f=S.value)==null?void 0:f.activeElement)&&(((x=v(s))==null?void 0:x.contains(S.value.activeElement))||((P=v(i))==null?void 0:P.contains(S.value.activeElement)))}return A(()=>g==null?void 0:g(_)),ht((o=S.value)==null?void 0:o.defaultView,"focus",f=>{var x,P;f.target!==window&&f.target instanceof HTMLElement&&a.value===0&&(E()||s&&i&&(m.contains(f.target)||(x=v(p.beforePanelSentinel))!=null&&x.contains(f.target)||(P=v(p.afterPanelSentinel))!=null&&P.contains(f.target)||p.closePopover()))},!0),We(m.resolveContainers,(f,x)=>{var P;p.closePopover(),Ee(x,$e.Loose)||(f.preventDefault(),(P=v(s))==null||P.focus())},L(()=>a.value===0)),()=>{let f={open:a.value===0,close:p.close};return B(le,[B(b,{},()=>ee({theirProps:{...e,...n},ourProps:{ref:t},slot:f,slots:l,attrs:n,name:"Popover"})),B(m.MainTreeNode)])}}}),$t=U({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${X()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:n,expose:r}){let o=me("PopoverButton"),t=L(()=>fe(o.button));r({el:o.button,$el:o.button}),W(()=>{o.buttonId.value=e.id}),ce(()=>{o.buttonId.value=null});let a=Ue(),s=a==null?void 0:a.closeOthers,d=Et(),c=L(()=>d===null?!1:d.value===o.panelId.value),i=w(null),S=`headlessui-focus-sentinel-${X()}`;c.value||A(()=>{o.button.value=i.value});let y=st(L(()=>({as:e.as,type:l.type})),i);function p(m){var E,f,x,P,T;if(c.value){if(o.popoverState.value===1)return;switch(m.key){case G.Space:case G.Enter:m.preventDefault(),(f=(E=m.target).click)==null||f.call(E),o.closePopover(),(x=v(o.button))==null||x.focus();break}}else switch(m.key){case G.Space:case G.Enter:m.preventDefault(),m.stopPropagation(),o.popoverState.value===1&&(s==null||s(o.buttonId.value)),o.togglePopover();break;case G.Escape:if(o.popoverState.value!==0)return s==null?void 0:s(o.buttonId.value);if(!v(o.button)||(P=t.value)!=null&&P.activeElement&&!((T=v(o.button))!=null&&T.contains(t.value.activeElement)))return;m.preventDefault(),m.stopPropagation(),o.closePopover();break}}function _(m){c.value||m.key===G.Space&&m.preventDefault()}function h(m){var E,f;e.disabled||(c.value?(o.closePopover(),(E=v(o.button))==null||E.focus()):(m.preventDefault(),m.stopPropagation(),o.popoverState.value===1&&(s==null||s(o.buttonId.value)),o.togglePopover(),(f=v(o.button))==null||f.focus()))}function g(m){m.preventDefault(),m.stopPropagation()}let k=qe();function b(){let m=v(o.panel);if(!m)return;function E(){N(k.value,{[D.Forwards]:()=>Q(m,V.First),[D.Backwards]:()=>Q(m,V.Last)})===_e.Error&&Q(Le().filter(f=>f.dataset.headlessuiFocusGuard!=="true"),N(k.value,{[D.Forwards]:V.Next,[D.Backwards]:V.Previous}),{relativeTo:v(o.button)})}E()}return()=>{let m=o.popoverState.value===0,E={open:m},{id:f,...x}=e,P=c.value?{ref:i,type:y.value,onKeydown:p,onClick:h}:{ref:i,id:f,type:y.value,"aria-expanded":o.popoverState.value===0,"aria-controls":v(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:p,onKeyup:_,onClick:h,onMousedown:g};return B(le,[ee({ourProps:P,theirProps:{...l,...x},slot:E,attrs:l,slots:n,name:"PopoverButton"}),m&&!c.value&&o.isPortalled.value&&B(de,{id:S,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:b})])}}}),Lt=U({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:l,slots:n}){let r=me("PopoverOverlay"),o=`headlessui-popover-overlay-${X()}`,t=pe(),a=L(()=>t!==null?(t.value&O.Open)===O.Open:r.popoverState.value===0);function s(){r.closePopover()}return()=>{let d={open:r.popoverState.value===0};return ee({ourProps:{id:o,"aria-hidden":!0,onClick:s},theirProps:e,slot:d,attrs:l,slots:n,features:ne.RenderStrategy|ne.Static,visible:a.value,name:"PopoverOverlay"})}}}),It=U({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${X()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:n,expose:r}){let{focus:o}=e,t=me("PopoverPanel"),a=L(()=>fe(t.panel)),s=`headlessui-focus-sentinel-before-${X()}`,d=`headlessui-focus-sentinel-after-${X()}`;r({el:t.panel,$el:t.panel}),W(()=>{t.panelId.value=e.id}),ce(()=>{t.panelId.value=null}),q(Ye,t.panelId),A(()=>{var g,k;if(!o||t.popoverState.value!==0||!t.panel)return;let b=(g=a.value)==null?void 0:g.activeElement;(k=v(t.panel))!=null&&k.contains(b)||Q(v(t.panel),V.First)});let c=pe(),i=L(()=>c!==null?(c.value&O.Open)===O.Open:t.popoverState.value===0);function S(g){var k,b;switch(g.key){case G.Escape:if(t.popoverState.value!==0||!v(t.panel)||a.value&&!((k=v(t.panel))!=null&&k.contains(a.value.activeElement)))return;g.preventDefault(),g.stopPropagation(),t.closePopover(),(b=v(t.button))==null||b.focus();break}}function y(g){var k,b,m,E,f;let x=g.relatedTarget;x&&v(t.panel)&&((k=v(t.panel))!=null&&k.contains(x)||(t.closePopover(),((m=(b=v(t.beforePanelSentinel))==null?void 0:b.contains)!=null&&m.call(b,x)||(f=(E=v(t.afterPanelSentinel))==null?void 0:E.contains)!=null&&f.call(E,x))&&x.focus({preventScroll:!0})))}let p=qe();function _(){let g=v(t.panel);if(!g)return;function k(){N(p.value,{[D.Forwards]:()=>{var b;Q(g,V.First)===_e.Error&&((b=v(t.afterPanelSentinel))==null||b.focus())},[D.Backwards]:()=>{var b;(b=v(t.button))==null||b.focus({preventScroll:!0})}})}k()}function h(){let g=v(t.panel);if(!g)return;function k(){N(p.value,{[D.Forwards]:()=>{let b=v(t.button),m=v(t.panel);if(!b)return;let E=Le(),f=E.indexOf(b),x=E.slice(0,f+1),P=[...E.slice(f+1),...x];for(let T of P.slice())if(T.dataset.headlessuiFocusGuard==="true"||m!=null&&m.contains(T)){let te=P.indexOf(T);te!==-1&&P.splice(te,1)}Q(P,V.First,{sorted:!1})},[D.Backwards]:()=>{var b;Q(g,V.Previous)===_e.Error&&((b=v(t.button))==null||b.focus())}})}k()}return()=>{let g={open:t.popoverState.value===0,close:t.close},{id:k,focus:b,...m}=e,E={ref:t.panel,id:k,onKeydown:S,onFocusout:o&&t.popoverState.value===0?y:void 0,tabIndex:-1};return ee({ourProps:E,theirProps:{...l,...m},attrs:l,slot:g,slots:{...n,default:(...f)=>{var x;return[B(le,[i.value&&t.isPortalled.value&&B(de,{id:s,ref:t.beforePanelSentinel,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:_}),(x=n.default)==null?void 0:x.call(n,...f),i.value&&t.isPortalled.value&&B(de,{id:d,ref:t.afterPanelSentinel,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h})])]}},features:ne.RenderStrategy|ne.Static,visible:i.value,name:"PopoverPanel"})}}});function Ot(e){let l={called:!1};return(...n)=>{if(!l.called)return l.called=!0,e(...n)}}function we(e,...l){e&&l.length>0&&e.classList.add(...l)}function se(e,...l){e&&l.length>0&&e.classList.remove(...l)}var Pe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Pe||{});function Tt(e,l){let n=Oe();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[t,a]=[r,o].map(s=>{let[d=0]=s.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,i)=>i-c);return d});return t!==0?n.setTimeout(()=>l("finished"),t+a):l("finished"),n.add(()=>l("cancelled")),n.dispose}function De(e,l,n,r,o,t){let a=Oe(),s=t!==void 0?Ot(t):()=>{};return se(e,...o),we(e,...l,...n),a.nextFrame(()=>{se(e,...n),we(e,...r),a.add(Tt(e,d=>(se(e,...r,...l),we(e,...o),s(d))))}),a.add(()=>se(e,...l,...n,...r,...o)),a.add(()=>s("cancelled")),a.dispose}function Z(e=""){return e.split(" ").filter(l=>l.trim().length>1)}let Te=Symbol("TransitionContext");var Ft=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ft||{});function Ct(){return K(Te,null)!==null}function Mt(){let e=K(Te,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Bt(){let e=K(Fe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Fe=Symbol("NestingContext");function ge(e){return"children"in e?ge(e.children):e.value.filter(({state:l})=>l==="visible").length>0}function Ge(e){let l=w([]),n=w(!1);W(()=>n.value=!0),ce(()=>n.value=!1);function r(t,a=J.Hidden){let s=l.value.findIndex(({id:d})=>d===t);s!==-1&&(N(a,{[J.Unmount](){l.value.splice(s,1)},[J.Hidden](){l.value[s].state="hidden"}}),!ge(l)&&n.value&&(e==null||e()))}function o(t){let a=l.value.find(({id:s})=>s===t);return a?a.state!=="visible"&&(a.state="visible"):l.value.push({id:t,state:"visible"}),()=>r(t,J.Unmount)}return{children:l,register:o,unregister:r}}let Je=ne.RenderStrategy,ke=U({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:n,slots:r,expose:o}){let t=w(0);function a(){t.value|=O.Opening,l("beforeEnter")}function s(){t.value&=~O.Opening,l("afterEnter")}function d(){t.value|=O.Closing,l("beforeLeave")}function c(){t.value&=~O.Closing,l("afterLeave")}if(!Ct()&&mt())return()=>B(Qe,{...e,onBeforeEnter:a,onAfterEnter:s,onBeforeLeave:d,onAfterLeave:c},r);let i=w(null),S=L(()=>e.unmount?J.Unmount:J.Hidden);o({el:i,$el:i});let{show:y,appear:p}=Mt(),{register:_,unregister:h}=Bt(),g=w(y.value?"visible":"hidden"),k={value:!0},b=X(),m={value:!1},E=Ge(()=>{!m.value&&g.value!=="hidden"&&(g.value="hidden",h(b),c())});W(()=>{let F=_(b);ce(F)}),A(()=>{if(S.value===J.Hidden&&b){if(y.value&&g.value!=="visible"){g.value="visible";return}N(g.value,{hidden:()=>h(b),visible:()=>_(b)})}});let f=Z(e.enter),x=Z(e.enterFrom),P=Z(e.enterTo),T=Z(e.entered),te=Z(e.leave),he=Z(e.leaveFrom),ye=Z(e.leaveTo);W(()=>{A(()=>{if(g.value==="visible"){let F=v(i);if(F instanceof Comment&&F.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function be(F){let xe=k.value&&!p.value,Y=v(i);!Y||!(Y instanceof HTMLElement)||xe||(m.value=!0,y.value&&a(),y.value||d(),F(y.value?De(Y,f,x,P,T,ae=>{m.value=!1,ae===Pe.Finished&&s()}):De(Y,te,he,ye,T,ae=>{m.value=!1,ae===Pe.Finished&&(ge(E)||(g.value="hidden",h(b),c()))})))}return W(()=>{He([y],(F,xe,Y)=>{be(Y),k.value=!1},{immediate:!0})}),q(Fe,E),Ie(L(()=>N(g.value,{visible:O.Open,hidden:O.Closed})|t.value)),()=>{let{appear:F,show:xe,enter:Y,enterFrom:ae,enterTo:Tl,entered:Fl,leave:Cl,leaveFrom:Ml,leaveTo:Bl,...Ce}=e,Xe={ref:i},et={...Ce,...p.value&&y.value&&ve.isServer?{class:j([n.class,Ce.class,...f,...x])}:{}};return ee({theirProps:et,ourProps:Xe,slot:{},slots:r,attrs:n,features:Je,visible:g.value==="visible",name:"TransitionChild"})}}}),At=ke,Qe=U({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:n,slots:r}){let o=pe(),t=L(()=>e.show===null&&o!==null?(o.value&O.Open)===O.Open:e.show);A(()=>{if(![!0,!1].includes(t.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let a=w(t.value?"visible":"hidden"),s=Ge(()=>{a.value="hidden"}),d=w(!0),c={show:t,appear:L(()=>e.appear||!d.value)};return W(()=>{A(()=>{d.value=!1,t.value?a.value="visible":ge(s)||(a.value="hidden")})}),q(Fe,s),q(Te,c),()=>{let i=ut(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),S={unmount:e.unmount};return ee({ourProps:{...S,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[B(At,{onBeforeEnter:()=>l("beforeEnter"),onAfterEnter:()=>l("afterEnter"),onBeforeLeave:()=>l("beforeLeave"),onAfterLeave:()=>l("afterLeave"),...n,...S,...i},r.default)]},attrs:{},features:Je,visible:a.value==="visible",name:"Transition"})}}});const Nt={class:"sticky top-0 z-50"},Rt={class:"sticky top-0 z-50"},jt={class:"min-h-screen bg-white relative isolate"},Dt=u("div",{class:"fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true"},[u("div",{class:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-100 sm:left-[calc(50%-30rem)]",style:{"clip-path":"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})],-1),Ht=u("div",{class:"fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true"},[u("div",{class:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-100 sm:left-[calc(50%+36rem)]",style:{"clip-path":"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})],-1),zt={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},Vt={class:"relative flex flex-wrap items-center justify-start lg:justify-between"},Wt={key:1,class:"sm:flex sm:space-x-5"},qt={class:"sm:mt-0 sm:pt-1 text-left"},Kt=u("span",{class:"font-medium text-gray-600"},"Halo,",-1),Ut={class:"text-sm font-medium text-gray-600"},Yt={class:"hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"},Zt={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Gt=["src","alt"],Jt={key:1,class:"inline-flex rounded-3xl"},Qt={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Xt=u("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[u("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),el=u("div",{class:"border-t border-gray-100"},null,-1),tl={class:"hidden lg:flex w-full py-10 lg:py-5 lg:border-t lg:border-gray-300"},ll={class:"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"},nl={class:"hidden lg:block lg:col-span-2"},al={class:"flex space-x-4"},ol=u("div",{class:"px-12 lg:px-0"},[u("div",{class:"flex justify-end"})],-1),rl=u("div",{class:"absolute right-0 flex-shrink-0 lg:hidden"},null,-1),sl={class:"lg:hidden"},il={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"},ul={class:"pt-3 pb-2"},dl={class:"flex items-center justify-between px-4"},cl={class:"-mr-2"},vl={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},fl=u("div",{class:"mt-3 px-2 space-y-1"},null,-1),pl={class:"pt-4 pb-2"},ml={class:"flex items-center px-5"},gl={class:"flex-shrink-0"},hl=["src","alt"],yl={class:"ml-3 min-w-0 flex-1"},bl={class:"text-base font-medium text-gray-800 truncate capitalize"},xl={class:"text-sm font-medium text-gray-500 truncate"},wl={class:"mt-3 px-2 space-y-1"},_l={class:"mt-5"},Sl={class:"max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Pl={class:""},kl={class:"max-w-7xl mx-auto space-y-5 relative"},El={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"},$l=u("div",{class:"py-16 sm:py-5 block"},null,-1),Ll={class:"border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"},Il={class:"block sm:inline capitalize"},Ol=u("span",{class:"block sm:inline"},"All rights reserved.",-1),Hl={__name:"AppLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(e){const l=e,n=w(!1);typeof window<"u"&&(n.value=JSON.parse(localStorage.getItem("darkmode"))??!1,He(n,i=>{console.log(`darkmode is ${i}`),localStorage.setItem("darkmode",JSON.stringify(i))}));const r=w(!1);L(()=>!!Me().action);const o=L(()=>!!Me().previous),t=l.name.split(" "),a=()=>{at.post(route("logout"))},s=w(null),d=w(null),c=w(null);return W(()=>{var i=window.pageYOffset;window.addEventListener("scroll",()=>{if(s.value!=null&&d.value!=null){var S=window.pageYOffset;i>S||o.value||(s.value.classList.add("backdrop-blur","border","border-gray-300","mx-4","rounded-full","sm:mx-0","sm:border-0","sm:rounded-none"),d.value.classList.add("text-xl"),c.value.classList.remove("py-5"),c.value.classList.add("py-2")),S===0&&(o.value||(s.value.classList.remove("backdrop-blur","border","border-gray-300","mx-4","rounded-full","sm:mx-0","sm:border-0","sm:rounded-none"),d.value.classList.remove("text-xl"),c.value.classList.add("py-5"),c.value.classList.remove("py-2"))),i=S}})}),(i,S)=>{var y,p;return R(),z("div",{class:j(["transition duration-1000",n.value?"nightwind dark":"nightwind"])},[$(M(nt),{title:e.title+" - "+((y=i.$page.props.appSetting)==null?void 0:y.name)},null,8,["title"]),u("div",Nt,[$(ot)]),u("div",Rt,[$(rt)]),u("div",jt,[Dt,Ht,u("div",{class:j(["",o.value?"":"sticky sm:relative top-3 right-0 left-0 z-40"]),ref_key:"headRef",ref:s},[$(M(Ze),{as:"header",class:""},{default:I(({open:_})=>[u("div",zt,[u("div",Vt,[u("div",{class:"py-5 flex-shrink-0 flex items-center",ref_key:"paddingRef",ref:c},[o.value?ie(i.$slots,"previous",{key:0}):(R(),z("div",Wt,[u("div",qt,[u("p",{class:"text-4xl sm:text-2xl font-bold text-gray-900 capitalize",ref_key:"titleRef",ref:d},[l.greeting?(R(),z(le,{key:0},[Kt,C(" "+H(M(t)[0])+". ",1)],64)):(R(),z(le,{key:1},[C(H(l.name)+H(l.name?".":""),1)],64))],512),u("p",Ut,H(l.desc),1)])]))],512),u("div",Yt,[$(Ae,{darkMode:n.value,onClick:S[0]||(S[0]=h=>n.value=!n.value)},null,8,["darkMode"]),$(M(St),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:I(()=>[$(it,{align:"right",width:"48"},{trigger:I(()=>[i.$page.props.jetstream.managesProfilePhotos?(R(),z("button",Zt,[u("img",{class:"h-10 w-10 rounded-full object-cover",src:i.$page.props.user.profile_photo_url,alt:i.$page.props.user.name},null,8,Gt)])):(R(),z("span",Jt,[u("button",Qt,[C(H(i.$page.props.user.name)+" ",1),Xt])]))]),content:I(()=>[$(Ne,{href:i.route("profile.show")},{default:I(()=>[C(" Profil ")]),_:1},8,["href"]),el,u("form",{onSubmit:Be(a,["prevent"])},[$(Ne,{as:"button"},{default:I(()=>[C(" Keluar ")]),_:1})],32)]),_:1})]),_:1})]),u("div",tl,[u("div",ll,[u("div",nl,[u("nav",al,[$(oe,{href:i.route("dashboard"),active:i.$page.component.startsWith("Dashboard"),icon:"fa-house",replace:""},{default:I(()=>[C(" Beranda ")]),_:1},8,["href","active"]),$(oe,{href:i.route("history.index"),active:i.$page.component.startsWith("History"),icon:"fa-files"},{default:I(()=>[C(" Riwayat ")]),_:1},8,["href","active"]),$(oe,{href:i.route("information.index"),active:i.$page.component.startsWith("Information"),icon:"fa-circle-info"},{default:I(()=>[C(" Informasi ")]),_:1},8,["href","active"]),$(oe,{href:i.route("profile.index"),active:i.$page.component.startsWith("Profile"),icon:"fa-user"},{default:I(()=>[C(" Saya ")]),_:1},8,["href","active"])])]),ol])]),rl])]),$(M(Qe),{as:"template",show:_},{default:I(()=>[u("div",sl,[$(M(ke),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:I(()=>[$(M(Lt),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),$(M(ke),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:I(()=>[$(M(It),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:I(()=>[u("div",il,[u("div",ul,[u("div",dl,[u("div",null,[$(Ae,{darkMode:n.value,onClick:S[1]||(S[1]=h=>n.value=!n.value)},null,8,["darkMode"])]),u("div",cl,[$(M($t),{class:"bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:I(()=>[u("button",{class:"inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:S[2]||(S[2]=h=>r.value=!r.value)},[(R(),z("svg",vl,[u("path",{class:j({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),u("path",{class:j({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),fl]),u("div",pl,[u("div",ml,[u("div",gl,[u("img",{class:"h-12 w-12 rounded-full object-cover",src:i.$page.props.user.profile_photo_url,alt:i.$page.props.user.name},null,8,hl)]),u("div",yl,[u("div",bl,H(i.$page.props.user.name),1),u("div",xl,H(i.$page.props.user.email),1)])]),u("div",wl,[$(Re,{href:i.route("profile.show"),active:i.route().current("profile.show")},{default:I(()=>[C(" Profil ")]),_:1},8,["href","active"]),u("form",{method:"POST",onSubmit:Be(a,["prevent"])},[$(Re,{as:"button"},{default:I(()=>[C(" Keluar ")]),_:1})],32)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:3})],2),u("main",_l,[u("div",Sl,[u("div",Pl,[u("div",kl,[ie(i.$slots,"default")])])])]),u("footer",null,[u("div",El,[$l,u("div",Ll,[u("span",Il,"© 2023 "+H((p=i.$page.props.appSetting)==null?void 0:p.name)+". ",1),Ol])])])])],2)}}};export{Hl as _,Ie as c,O as l,pe as p};

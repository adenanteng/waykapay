import{i as _,o as M,e as V,a as p,n as J,g as O,r as pe,u as C,c as re,w as $,j as ut,k as Y,p as Q,l as D,d as P,m as R,q as z,s as ie,x as se,y as ae,F as Ke,z as dt,A as Ve,X as Le,b as F,t as X,B as Be,f as ce,C as De,O as ct}from"./app.6fe95229.js";import{_ as vt}from"./helper.7158c2b3.js";import{b as We,_ as Re,a as pt,c as Ae,d as je}from"./DarkmodeToggle.bba5df4e.js";import{o as c,u as K,H as A,t as H,N as oe,a as I,f as we,b as Pe,S as ne,T as ft}from"./label.6c809856.js";import{n as fe,S as Ee,F as $e,p as mt,D as gt,N,v as ze,I as ht,m as me,d as Fe,O as le,T as _e}from"./focus-management.284ecf71.js";const bt={class:"flex items-center gap-2"},yt={class:"flex items-center gap-2"},ee={__name:"NavLinkAlt",props:{href:String,active:Boolean,icon:String,flyout:{type:Boolean,default:!1}},setup(e){const l=e,o=_(()=>l.active?" text-primary-700 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10":" text-gray-900 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10");return(s,t)=>e.flyout?(M(),V("button",{key:0,class:J(C(o))},[p("div",bt,[p("i",{class:J(["fa-duotone",e.icon])},null,2),O(),pe(s.$slots,"default")])],2)):(M(),re(C(ut),{key:1,href:e.href,class:J(C(o))},{default:$(()=>[p("div",yt,[p("i",{class:J(["fa-duotone",e.icon])},null,2),O(),pe(s.$slots,"default")])]),_:3},8,["href","class"]))}};function xt(e){throw new Error("Unexpected object: "+e)}var L=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(L||{});function St(e,l){let o=l.resolveItems();if(o.length<=0)return null;let s=l.resolveActiveIndex(),t=s!=null?s:-1,n=(()=>{switch(e.focus){case 0:return o.findIndex(r=>!l.resolveDisabled(r));case 1:{let r=o.slice().reverse().findIndex((u,i,d)=>t!==-1&&d.length-i-1>=t?!1:!l.resolveDisabled(u));return r===-1?r:o.length-1-r}case 2:return o.findIndex((r,u)=>u<=t?!1:!l.resolveDisabled(r));case 3:{let r=o.slice().reverse().findIndex(u=>!l.resolveDisabled(u));return r===-1?r:o.length-1-r}case 4:return o.findIndex(r=>l.resolveId(r)===e.id);case 5:return null;default:xt(e)}})();return n===-1?s:n}let qe=Symbol("Context");var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function wt(){return ue()!==null}function ue(){return Y(qe,null)}function Te(e){Q(qe,e)}function xe(e,l,o){fe.isServer||D(s=>{document.addEventListener(e,l,o),s(()=>document.removeEventListener(e,l,o))})}function Ue(e,l,o=_(()=>!0)){function s(n,r){if(!o.value||n.defaultPrevented)return;let u=r(n);if(u===null||!u.getRootNode().contains(u))return;let i=function d(a){return typeof a=="function"?d(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let d of i){if(d===null)continue;let a=d instanceof HTMLElement?d:c(d);if(a!=null&&a.contains(u)||n.composed&&n.composedPath().includes(a))return}return!Ee(u,$e.Loose)&&u.tabIndex!==-1&&n.preventDefault(),l(n,u)}let t=P(null);xe("mousedown",n=>{var r,u;o.value&&(t.value=((u=(r=n.composedPath)==null?void 0:r.call(n))==null?void 0:u[0])||n.target)},!0),xe("click",n=>{!t.value||(s(n,()=>t.value),t.value=null)},!0),xe("blur",n=>s(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Ne(e){return[e.screenX,e.screenY]}function Pt(){let e=P([-1,-1]);return{wasMoved(l){let o=Ne(l);return e.value[0]===o[0]&&e.value[1]===o[1]?!1:(e.value=o,!0)},update(l){e.value=Ne(l)}}}function _t(e,l,o){fe.isServer||D(s=>{window.addEventListener(e,l,o),s(()=>window.removeEventListener(e,l,o))})}var W=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(W||{});function Ge(){let e=P(0);return _t("keydown",l=>{l.key==="Tab"&&(e.value=l.shiftKey?1:0)}),e}function It(e,l,o,s){fe.isServer||D(t=>{e=e!=null?e:window,e.addEventListener(l,o,s),t(()=>e.removeEventListener(l,o,s))})}function Xe(){let e=[],l=[],o={enqueue(s){l.push(s)},addEventListener(s,t,n,r){return s.addEventListener(t,n,r),o.add(()=>s.removeEventListener(t,n,r))},requestAnimationFrame(...s){let t=requestAnimationFrame(...s);o.add(()=>cancelAnimationFrame(t))},nextFrame(...s){o.requestAnimationFrame(()=>{o.requestAnimationFrame(...s)})},setTimeout(...s){let t=setTimeout(...s);o.add(()=>clearTimeout(t))},add(s){e.push(s)},style(s,t,n){let r=s.style.getPropertyValue(t);return Object.assign(s.style,{[t]:n}),this.add(()=>{Object.assign(s.style,{[t]:r})})},dispose(){for(let s of e.splice(0))s()},async workQueue(){for(let s of l.splice(0))await s()}};return o}var kt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(kt||{}),Et=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Et||{});function $t(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Je=Symbol("MenuContext");function ge(e){let l=Y(Je,null);if(l===null){let o=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,ge),o}return l}let Ft=R({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:l,attrs:o}){let s=P(1),t=P(null),n=P(null),r=P([]),u=P(""),i=P(null),d=P(1);function a(h=f=>f){let f=i.value!==null?r.value[i.value]:null,m=ht(h(r.value.slice()),x=>c(x.dataRef.domRef)),y=f?m.indexOf(f):null;return y===-1&&(y=null),{items:m,activeItemIndex:y}}let g={menuState:s,buttonRef:t,itemsRef:n,items:r,searchQuery:u,activeItemIndex:i,activationTrigger:d,closeMenu:()=>{s.value=1,i.value=null},openMenu:()=>s.value=0,goToItem(h,f,m){let y=a(),x=St(h===L.Specific?{focus:L.Specific,id:f}:{focus:h},{resolveItems:()=>y.items,resolveActiveIndex:()=>y.activeItemIndex,resolveId:b=>b.id,resolveDisabled:b=>b.dataRef.disabled});u.value="",i.value=x,d.value=m!=null?m:1,r.value=y.items},search(h){let f=u.value!==""?0:1;u.value+=h.toLowerCase();let m=(i.value!==null?r.value.slice(i.value+f).concat(r.value.slice(0,i.value+f)):r.value).find(x=>x.dataRef.textValue.startsWith(u.value)&&!x.dataRef.disabled),y=m?r.value.indexOf(m):-1;y===-1||y===i.value||(i.value=y,d.value=1)},clearSearch(){u.value=""},registerItem(h,f){let m=a(y=>[...y,{id:h,dataRef:f}]);r.value=m.items,i.value=m.activeItemIndex,d.value=1},unregisterItem(h){let f=a(m=>{let y=m.findIndex(x=>x.id===h);return y!==-1&&m.splice(y,1),m});r.value=f.items,i.value=f.activeItemIndex,d.value=1}};return Ue([t,n],(h,f)=>{var m;g.closeMenu(),Ee(f,$e.Loose)||(h.preventDefault(),(m=c(t))==null||m.focus())},_(()=>s.value===0)),Q(Je,g),Te(_(()=>K(s.value,{[0]:T.Open,[1]:T.Closed}))),()=>{let h={open:s.value===0,close:g.closeMenu};return A({ourProps:{},theirProps:e,slot:h,slots:l,attrs:o,name:"Menu"})}}});R({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${H()}`}},setup(e,{attrs:l,slots:o,expose:s}){let t=ge("MenuButton");s({el:t.buttonRef,$el:t.buttonRef});function n(d){switch(d.key){case I.Space:case I.Enter:case I.ArrowDown:d.preventDefault(),d.stopPropagation(),t.openMenu(),se(()=>{var a;(a=c(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(L.First)});break;case I.ArrowUp:d.preventDefault(),d.stopPropagation(),t.openMenu(),se(()=>{var a;(a=c(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(L.Last)});break}}function r(d){switch(d.key){case I.Space:d.preventDefault();break}}function u(d){e.disabled||(t.menuState.value===0?(t.closeMenu(),se(()=>{var a;return(a=c(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),t.openMenu(),$t(()=>{var a;return(a=c(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let i=We(_(()=>({as:e.as,type:l.type})),t.buttonRef);return()=>{var d;let a={open:t.menuState.value===0},{id:g,...h}=e,f={ref:t.buttonRef,id:g,type:i.value,"aria-haspopup":"menu","aria-controls":(d=c(t.itemsRef))==null?void 0:d.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:n,onKeyup:r,onClick:u};return A({ourProps:f,theirProps:h,slot:a,attrs:l,slots:o,name:"MenuButton"})}}});R({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${H()}`}},setup(e,{attrs:l,slots:o,expose:s}){let t=ge("MenuItems"),n=P(null);s({el:t.itemsRef,$el:t.itemsRef}),mt({container:_(()=>c(t.itemsRef)),enabled:_(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function r(a){var g;switch(n.value&&clearTimeout(n.value),a.key){case I.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case I.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let h=t.items.value[t.activeItemIndex.value];(g=c(h.dataRef.domRef))==null||g.click()}t.closeMenu(),ze(c(t.buttonRef));break;case I.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(L.Next);case I.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(L.Previous);case I.Home:case I.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(L.First);case I.End:case I.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(L.Last);case I.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),se(()=>{var h;return(h=c(t.buttonRef))==null?void 0:h.focus({preventScroll:!0})});break;case I.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),se(()=>gt(c(t.buttonRef),a.shiftKey?N.Previous:N.Next));break;default:a.key.length===1&&(t.search(a.key),n.value=setTimeout(()=>t.clearSearch(),350));break}}function u(a){switch(a.key){case I.Space:a.preventDefault();break}}let i=ue(),d=_(()=>i!==null?(i.value&T.Open)===T.Open:t.menuState.value===0);return()=>{var a,g;let h={open:t.menuState.value===0},{id:f,...m}=e,y={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(g=c(t.buttonRef))==null?void 0:g.id,id:f,onKeydown:r,onKeyup:u,role:"menu",tabIndex:0,ref:t.itemsRef};return A({ourProps:y,theirProps:m,slot:h,attrs:l,slots:o,features:oe.RenderStrategy|oe.Static,visible:d.value,name:"MenuItems"})}}});R({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${H()}`}},setup(e,{slots:l,attrs:o,expose:s}){let t=ge("MenuItem"),n=P(null);s({el:n,$el:n});let r=_(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),u=_(()=>({disabled:e.disabled,textValue:"",domRef:n}));z(()=>{var m,y;let x=(y=(m=c(n))==null?void 0:m.textContent)==null?void 0:y.toLowerCase().trim();x!==void 0&&(u.value.textValue=x)}),z(()=>t.registerItem(e.id,u)),ie(()=>t.unregisterItem(e.id)),D(()=>{t.menuState.value===0&&(!r.value||t.activationTrigger.value!==0&&se(()=>{var m,y;return(y=(m=c(n))==null?void 0:m.scrollIntoView)==null?void 0:y.call(m,{block:"nearest"})}))});function i(m){if(e.disabled)return m.preventDefault();t.closeMenu(),ze(c(t.buttonRef))}function d(){if(e.disabled)return t.goToItem(L.Nothing);t.goToItem(L.Specific,e.id)}let a=Pt();function g(m){a.update(m)}function h(m){!a.wasMoved(m)||e.disabled||r.value||t.goToItem(L.Specific,e.id,0)}function f(m){!a.wasMoved(m)||e.disabled||!r.value||t.goToItem(L.Nothing)}return()=>{let{disabled:m}=e,y={active:r.value,disabled:m,close:t.closeMenu},{id:x,...b}=e;return A({ourProps:{id:x,ref:n,role:"menuitem",tabIndex:m===!0?void 0:-1,"aria-disabled":m===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:d,onPointerenter:g,onMouseenter:g,onPointermove:h,onMousemove:h,onPointerleave:f,onMouseleave:f},theirProps:{...o,...b},slot:y,attrs:o,slots:l,name:"MenuItem"})}}});var Tt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Tt||{});let Qe=Symbol("PopoverContext");function he(e){let l=Y(Qe,null);if(l===null){let o=new Error(`<${e} /> is missing a parent <${tt.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,he),o}return l}let Ye=Symbol("PopoverGroupContext");function Ze(){return Y(Ye,null)}let et=Symbol("PopoverPanelContext");function Mt(){return Y(et,null)}let tt=R({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:l,attrs:o,expose:s}){var t;let n=P(null);s({el:n,$el:n});let r=P(1),u=P(null),i=P(null),d=P(null),a=P(null),g=_(()=>me(n)),h=_(()=>{var v,S;if(!c(u)||!c(a))return!1;for(let U of document.querySelectorAll("body > *"))if(Number(U==null?void 0:U.contains(c(u)))^Number(U==null?void 0:U.contains(c(a))))return!0;let w=Fe(),k=w.indexOf(c(u)),E=(k+w.length-1)%w.length,j=(k+1)%w.length,B=w[E],q=w[j];return!((v=c(a))!=null&&v.contains(B))&&!((S=c(a))!=null&&S.contains(q))}),f={popoverState:r,buttonId:P(null),panelId:P(null),panel:a,button:u,isPortalled:h,beforePanelSentinel:i,afterPanelSentinel:d,togglePopover(){r.value=K(r.value,{[0]:1,[1]:0})},closePopover(){r.value!==1&&(r.value=1)},close(v){f.closePopover();let S=(()=>v?v instanceof HTMLElement?v:v.value instanceof HTMLElement?c(v):c(f.button):c(f.button))();S==null||S.focus()}};Q(Qe,f),Te(_(()=>K(r.value,{[0]:T.Open,[1]:T.Closed})));let m={buttonId:f.buttonId,panelId:f.panelId,close(){f.closePopover()}},y=Ze(),x=y==null?void 0:y.registerPopover;function b(){var v,S,w,k;return(k=y==null?void 0:y.isFocusWithinPopoverGroup())!=null?k:((v=g.value)==null?void 0:v.activeElement)&&(((S=c(u))==null?void 0:S.contains(g.value.activeElement))||((w=c(a))==null?void 0:w.contains(g.value.activeElement)))}return D(()=>x==null?void 0:x(m)),It((t=g.value)==null?void 0:t.defaultView,"focus",v=>{var S,w;r.value===0&&(b()||!u||!a||v.target!==window&&((S=c(f.beforePanelSentinel))!=null&&S.contains(v.target)||(w=c(f.afterPanelSentinel))!=null&&w.contains(v.target)||f.closePopover()))},!0),Ue([u,a],(v,S)=>{var w;f.closePopover(),Ee(S,$e.Loose)||(v.preventDefault(),(w=c(u))==null||w.focus())},_(()=>r.value===0)),()=>{let v={open:r.value===0,close:f.close};return A({theirProps:e,ourProps:{ref:n},slot:v,slots:l,attrs:o,name:"Popover"})}}}),Ot=R({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${H()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:o,expose:s}){let t=he("PopoverButton"),n=_(()=>me(t.button));s({el:t.button,$el:t.button}),z(()=>{t.buttonId.value=e.id}),ie(()=>{t.buttonId.value=null});let r=Ze(),u=r==null?void 0:r.closeOthers,i=Mt(),d=_(()=>i===null?!1:i.value===t.panelId.value),a=P(null),g=`headlessui-focus-sentinel-${H()}`;d.value||D(()=>{t.button.value=a.value});let h=We(_(()=>({as:e.as,type:l.type})),a);function f(b){var v,S,w,k,E;if(d.value){if(t.popoverState.value===1)return;switch(b.key){case I.Space:case I.Enter:b.preventDefault(),(S=(v=b.target).click)==null||S.call(v),t.closePopover(),(w=c(t.button))==null||w.focus();break}}else switch(b.key){case I.Space:case I.Enter:b.preventDefault(),b.stopPropagation(),t.popoverState.value===1&&(u==null||u(t.buttonId.value)),t.togglePopover();break;case I.Escape:if(t.popoverState.value!==0)return u==null?void 0:u(t.buttonId.value);if(!c(t.button)||((k=n.value)==null?void 0:k.activeElement)&&!((E=c(t.button))!=null&&E.contains(n.value.activeElement)))return;b.preventDefault(),b.stopPropagation(),t.closePopover();break}}function m(b){d.value||b.key===I.Space&&b.preventDefault()}function y(b){var v,S;e.disabled||(d.value?(t.closePopover(),(v=c(t.button))==null||v.focus()):(b.preventDefault(),b.stopPropagation(),t.popoverState.value===1&&(u==null||u(t.buttonId.value)),t.togglePopover(),(S=c(t.button))==null||S.focus()))}function x(b){b.preventDefault(),b.stopPropagation()}return()=>{let b=t.popoverState.value===0,v={open:b},{id:S,...w}=e,k=d.value?{ref:a,type:h.value,onKeydown:f,onClick:y}:{ref:a,id:S,type:h.value,"aria-expanded":e.disabled?void 0:t.popoverState.value===0,"aria-controls":c(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:f,onKeyup:m,onClick:y,onMousedown:x},E=Ge();function j(){let B=c(t.panel);if(!B)return;function q(){K(E.value,{[W.Forwards]:()=>le(B,N.First),[W.Backwards]:()=>le(B,N.Last)})===_e.Error&&le(Fe().filter(U=>U.dataset.headlessuiFocusGuard!=="true"),K(E.value,{[W.Forwards]:N.Next,[W.Backwards]:N.Previous}),{relativeTo:c(t.button)})}q()}return ae(Ke,[A({ourProps:k,theirProps:{...l,...w},slot:v,attrs:l,slots:o,name:"PopoverButton"}),b&&!d.value&&t.isPortalled.value&&ae(we,{id:g,features:Pe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:j})])}}}),Ct=R({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:l,slots:o}){let s=he("PopoverOverlay"),t=`headlessui-popover-overlay-${H()}`,n=ue(),r=_(()=>n!==null?(n.value&T.Open)===T.Open:s.popoverState.value===0);function u(){s.closePopover()}return()=>{let i={open:s.popoverState.value===0};return A({ourProps:{id:t,"aria-hidden":!0,onClick:u},theirProps:e,slot:i,attrs:l,slots:o,features:oe.RenderStrategy|oe.Static,visible:r.value,name:"PopoverOverlay"})}}}),Lt=R({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${H()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:o,expose:s}){let{focus:t}=e,n=he("PopoverPanel"),r=_(()=>me(n.panel)),u=`headlessui-focus-sentinel-before-${H()}`,i=`headlessui-focus-sentinel-after-${H()}`;s({el:n.panel,$el:n.panel}),z(()=>{n.panelId.value=e.id}),ie(()=>{n.panelId.value=null}),Q(et,n.panelId),D(()=>{var x,b;if(!t||n.popoverState.value!==0||!n.panel)return;let v=(x=r.value)==null?void 0:x.activeElement;(b=c(n.panel))!=null&&b.contains(v)||le(c(n.panel),N.First)});let d=ue(),a=_(()=>d!==null?(d.value&T.Open)===T.Open:n.popoverState.value===0);function g(x){var b,v;switch(x.key){case I.Escape:if(n.popoverState.value!==0||!c(n.panel)||r.value&&!((b=c(n.panel))!=null&&b.contains(r.value.activeElement)))return;x.preventDefault(),x.stopPropagation(),n.closePopover(),(v=c(n.button))==null||v.focus();break}}function h(x){var b,v,S,w,k;let E=x.relatedTarget;!E||!c(n.panel)||(b=c(n.panel))!=null&&b.contains(E)||(n.closePopover(),(((S=(v=c(n.beforePanelSentinel))==null?void 0:v.contains)==null?void 0:S.call(v,E))||((k=(w=c(n.afterPanelSentinel))==null?void 0:w.contains)==null?void 0:k.call(w,E)))&&E.focus({preventScroll:!0}))}let f=Ge();function m(){let x=c(n.panel);if(!x)return;function b(){K(f.value,{[W.Forwards]:()=>{var v;le(x,N.First)===_e.Error&&((v=c(n.afterPanelSentinel))==null||v.focus())},[W.Backwards]:()=>{var v;(v=c(n.button))==null||v.focus({preventScroll:!0})}})}b()}function y(){let x=c(n.panel);if(!x)return;function b(){K(f.value,{[W.Forwards]:()=>{let v=c(n.button),S=c(n.panel);if(!v)return;let w=Fe(),k=w.indexOf(v),E=w.slice(0,k+1),j=[...w.slice(k+1),...E];for(let B of j.slice())if(B.dataset.headlessuiFocusGuard==="true"||(S==null?void 0:S.contains(B))){let q=j.indexOf(B);q!==-1&&j.splice(q,1)}le(j,N.First,{sorted:!1})},[W.Backwards]:()=>{var v;le(x,N.Previous)===_e.Error&&((v=c(n.button))==null||v.focus())}})}b()}return()=>{let x={open:n.popoverState.value===0,close:n.close},{id:b,focus:v,...S}=e,w={ref:n.panel,id:b,onKeydown:g,onFocusout:t&&n.popoverState.value===0?h:void 0,tabIndex:-1};return A({ourProps:w,theirProps:{...l,...S},attrs:l,slot:x,slots:{...o,default:(...k)=>{var E;return[ae(Ke,[a.value&&n.isPortalled.value&&ae(we,{id:u,ref:n.beforePanelSentinel,features:Pe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:m}),(E=o.default)==null?void 0:E.call(o,...k),a.value&&n.isPortalled.value&&ae(we,{id:i,ref:n.afterPanelSentinel,features:Pe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:y})])]}},features:oe.RenderStrategy|oe.Static,visible:a.value,name:"PopoverPanel"})}}});R({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:l,slots:o,expose:s}){let t=P(null),n=dt([]),r=_(()=>me(t));s({el:t,$el:t});function u(g){let h=n.value.indexOf(g);h!==-1&&n.value.splice(h,1)}function i(g){return n.value.push(g),()=>{u(g)}}function d(){var g;let h=r.value;if(!h)return!1;let f=h.activeElement;return(g=c(t))!=null&&g.contains(f)?!0:n.value.some(m=>{var y,x;return((y=h.getElementById(m.buttonId.value))==null?void 0:y.contains(f))||((x=h.getElementById(m.panelId.value))==null?void 0:x.contains(f))})}function a(g){for(let h of n.value)h.buttonId.value!==g&&h.close()}return Q(Ye,{registerPopover:i,unregisterPopover:u,isFocusWithinPopoverGroup:d,closeOthers:a}),()=>A({ourProps:{ref:t},theirProps:e,slot:{},attrs:l,slots:o,name:"PopoverGroup"})}});function Bt(e){let l={called:!1};return(...o)=>{if(!l.called)return l.called=!0,e(...o)}}function Se(e,...l){e&&l.length>0&&e.classList.add(...l)}function ve(e,...l){e&&l.length>0&&e.classList.remove(...l)}var Ie=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ie||{});function Dt(e,l){let o=Xe();if(!e)return o.dispose;let{transitionDuration:s,transitionDelay:t}=getComputedStyle(e),[n,r]=[s,t].map(u=>{let[i=0]=u.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,a)=>a-d);return i});return n!==0?o.setTimeout(()=>l("finished"),n+r):l("finished"),o.add(()=>l("cancelled")),o.dispose}function He(e,l,o,s,t,n){let r=Xe(),u=n!==void 0?Bt(n):()=>{};return ve(e,...t),Se(e,...l,...o),r.nextFrame(()=>{ve(e,...o),Se(e,...s),r.add(Dt(e,i=>(ve(e,...s,...l),Se(e,...t),u(i))))}),r.add(()=>ve(e,...l,...o,...s,...t)),r.add(()=>u("cancelled")),r.dispose}function te(e=""){return e.split(" ").filter(l=>l.trim().length>1)}let Me=Symbol("TransitionContext");var Rt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Rt||{});function At(){return Y(Me,null)!==null}function jt(){let e=Y(Me,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Nt(){let e=Y(Oe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Oe=Symbol("NestingContext");function be(e){return"children"in e?be(e.children):e.value.filter(({state:l})=>l==="visible").length>0}function nt(e){let l=P([]),o=P(!1);z(()=>o.value=!0),ie(()=>o.value=!1);function s(n,r=ne.Hidden){let u=l.value.findIndex(({id:i})=>i===n);u!==-1&&(K(r,{[ne.Unmount](){l.value.splice(u,1)},[ne.Hidden](){l.value[u].state="hidden"}}),!be(l)&&o.value&&(e==null||e()))}function t(n){let r=l.value.find(({id:u})=>u===n);return r?r.state!=="visible"&&(r.state="visible"):l.value.push({id:n,state:"visible"}),()=>s(n,ne.Unmount)}return{children:l,register:t,unregister:s}}let lt=oe.RenderStrategy,ke=R({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:o,slots:s,expose:t}){let n=P(0);function r(){n.value|=T.Opening,l("beforeEnter")}function u(){n.value&=~T.Opening,l("afterEnter")}function i(){n.value|=T.Closing,l("beforeLeave")}function d(){n.value&=~T.Closing,l("afterLeave")}if(!At()&&wt())return()=>ae(at,{...e,onBeforeEnter:r,onAfterEnter:u,onBeforeLeave:i,onAfterLeave:d},s);let a=P(null),g=P("visible"),h=_(()=>e.unmount?ne.Unmount:ne.Hidden);t({el:a,$el:a});let{show:f,appear:m}=jt(),{register:y,unregister:x}=Nt(),b={value:!0},v=H(),S={value:!1},w=nt(()=>{!S.value&&g.value!=="hidden"&&(g.value="hidden",x(v),d())});z(()=>{let G=y(v);ie(G)}),D(()=>{if(h.value===ne.Hidden&&!!v){if(f&&g.value!=="visible"){g.value="visible";return}K(g.value,{hidden:()=>x(v),visible:()=>y(v)})}});let k=te(e.enter),E=te(e.enterFrom),j=te(e.enterTo),B=te(e.entered),q=te(e.leave),U=te(e.leaveFrom),ot=te(e.leaveTo);z(()=>{D(()=>{if(g.value==="visible"){let G=c(a);if(G instanceof Comment&&G.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function rt(G){let ye=b.value&&!m.value,Z=c(a);!Z||!(Z instanceof HTMLElement)||ye||(S.value=!0,f.value&&r(),f.value||i(),G(f.value?He(Z,k,E,j,B,de=>{S.value=!1,de===Ie.Finished&&u()}):He(Z,q,U,ot,B,de=>{S.value=!1,de===Ie.Finished&&(be(w)||(g.value="hidden",x(v),d()))})))}return z(()=>{Ve([f],(G,ye,Z)=>{rt(Z),b.value=!1},{immediate:!0})}),Q(Oe,w),Te(_(()=>K(g.value,{visible:T.Open,hidden:T.Closed})|n.value)),()=>{let{appear:G,show:ye,enter:Z,enterFrom:de,enterTo:jn,entered:Nn,leave:Hn,leaveFrom:Kn,leaveTo:Vn,...Ce}=e,st={ref:a},it={...Ce,...m&&f&&fe.isServer?{class:J([Ce.class,...k,...E])}:{}};return A({theirProps:it,ourProps:st,slot:{},slots:s,attrs:o,features:lt,visible:g.value==="visible",name:"TransitionChild"})}}}),Ht=ke,at=R({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:o,slots:s}){let t=ue(),n=_(()=>e.show===null&&t!==null?(t.value&T.Open)===T.Open:e.show);D(()=>{if(![!0,!1].includes(n.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=P(n.value?"visible":"hidden"),u=nt(()=>{r.value="hidden"}),i=P(!0),d={show:n,appear:_(()=>e.appear||!i.value)};return z(()=>{D(()=>{i.value=!1,n.value?r.value="visible":be(u)||(r.value="hidden")})}),Q(Oe,u),Q(Me,d),()=>{let a=ft(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),g={unmount:e.unmount};return A({ourProps:{...g,as:"template"},theirProps:{},slot:{},slots:{...s,default:()=>[ae(Ht,{onBeforeEnter:()=>l("beforeEnter"),onAfterEnter:()=>l("afterEnter"),onBeforeLeave:()=>l("beforeLeave"),onAfterLeave:()=>l("afterLeave"),...o,...g,...a},s.default)]},attrs:{},features:lt,visible:r.value==="visible",name:"Transition"})}}});const Kt={class:"sticky top-0 z-50"},Vt={class:"min-h-screen bg-gray-100 bg-glass bg-fixed"},Wt={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},zt={class:"relative flex flex-wrap items-center justify-center lg:justify-between"},qt={class:"absolute left-0 py-5 flex-shrink-0 lg:static flex items-center"},Ut={key:1,class:"sm:flex sm:space-x-5"},Gt={class:"mt-4 sm:mt-0 sm:pt-1 text-left"},Xt={key:0,class:"text-2xl font-bold text-gray-900 sm:text-2xl capitalize"},Jt=p("span",{class:"font-medium text-gray-600"},"Halo,",-1),Qt={key:1,class:"text-2xl font-bold text-gray-900 sm:text-2xl capitalize"},Yt={class:"text-sm font-medium text-gray-600"},Zt={class:"hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"},en={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},tn=["src","alt"],nn={key:1,class:"inline-flex rounded-3xl"},ln={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},an=p("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[p("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),on=p("div",{class:"border-t border-gray-100"},null,-1),rn=["onSubmit"],sn={class:"w-full py-10 lg:py-5 lg:border-t lg:border-gray-300"},un={class:"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"},dn={class:"hidden lg:block lg:col-span-2"},cn={class:"flex space-x-4"},vn=p("div",{class:"px-12 lg:px-0"},[p("div",{class:"flex justify-end"})],-1),pn=p("div",{class:"absolute right-0 flex-shrink-0 lg:hidden"},null,-1),fn={class:"lg:hidden"},mn={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"},gn={class:"pt-3 pb-2"},hn={class:"flex items-center justify-between px-4"},bn={class:"-mr-2"},yn={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},xn=p("div",{class:"mt-3 px-2 space-y-1"},null,-1),Sn={class:"pt-4 pb-2"},wn={class:"flex items-center px-5"},Pn={class:"flex-shrink-0"},_n=["src","alt"],In={class:"ml-3 min-w-0 flex-1"},kn={class:"text-base font-medium text-gray-800 truncate capitalize"},En={class:"text-sm font-medium text-gray-500 truncate"},$n={class:"mt-3 px-2 space-y-1"},Fn=["onSubmit"],Tn={class:""},Mn={class:"max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},On={class:""},Cn={class:"max-w-7xl mx-auto py-5 space-y-5 relative"},Ln={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"},Bn=p("div",{class:"py-10 block lg:hidden"},null,-1),Dn={key:0,class:"border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"},Rn={class:"block sm:inline capitalize"},An=p("span",{class:"block sm:inline"},"All rights reserved.",-1),Xn={__name:"AppLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(e){var u;const l=e,o=P((u=JSON.parse(localStorage.getItem("darkmode")))!=null?u:!1);Ve(o,i=>{console.log(`darkmode is ${i}`),localStorage.setItem("darkmode",JSON.stringify(i))});const s=P(!1);_(()=>!!De().action);const t=_(()=>!!De().previous),n=l.name.split(" "),r=()=>{ct.post(route("logout"))};return(i,d)=>(M(),V("div",{class:J(["transition duration-1000",o.value?"nightwind dark":"nightwind"])},[i.$page.props.appSetting?(M(),re(C(Le),{key:0,title:e.title+" - "+i.$page.props.appSetting.name},null,8,["title"])):(M(),re(C(Le),{key:1,title:e.title},null,8,["title"])),p("div",Kt,[F(vt)]),p("div",Vt,[F(C(tt),{as:"header",class:""},{default:$(({open:a})=>[p("div",Wt,[p("div",zt,[p("div",qt,[C(t)?pe(i.$slots,"previous",{key:0}):(M(),V("div",Ut,[p("div",Gt,[l.greeting?(M(),V("p",Xt,[Jt,O(" "+X(C(n)[0])+". ",1)])):(M(),V("p",Qt,X(l.name)+X(l.name?".":""),1)),p("p",Yt,X(l.desc),1)])]))]),p("div",Zt,[F(Re,{darkMode:o.value,onClick:d[0]||(d[0]=g=>o.value=!o.value)},null,8,["darkMode"]),F(C(Ft),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:$(()=>[F(pt,{align:"right",width:"48"},{trigger:$(()=>[i.$page.props.jetstream.managesProfilePhotos?(M(),V("button",en,[p("img",{class:"h-10 w-10 rounded-full object-cover",src:i.$page.props.user.profile_photo_url,alt:i.$page.props.user.name},null,8,tn)])):(M(),V("span",nn,[p("button",ln,[O(X(i.$page.props.user.name)+" ",1),an])]))]),content:$(()=>[F(Ae,{href:i.route("profile.show")},{default:$(()=>[O(" Profil ")]),_:1},8,["href"]),on,p("form",{onSubmit:Be(r,["prevent"])},[F(Ae,{as:"button"},{default:$(()=>[O(" Keluar ")]),_:1})],40,rn)]),_:1})]),_:1})]),p("div",sn,[p("div",un,[p("div",dn,[p("nav",cn,[F(ee,{href:i.route("dashboard"),active:i.$page.component.startsWith("Dashboard"),icon:"fa-house",replace:""},{default:$(()=>[O(" Beranda ")]),_:1},8,["href","active"]),F(ee,{href:i.route("history.index"),active:i.$page.component.startsWith("History"),icon:"fa-files"},{default:$(()=>[O(" Riwayat ")]),_:1},8,["href","active"]),F(ee,{href:i.route("information.index"),active:i.$page.component.startsWith("Information"),icon:"fa-circle-info"},{default:$(()=>[O(" Informasi ")]),_:1},8,["href","active"]),i.$page.props.user.role_id==1?(M(),re(ee,{key:0,href:i.route("transaction.index"),active:i.$page.component.startsWith("Transaction"),icon:"fa-money-from-bracket"},{default:$(()=>[O(" Transaksi ")]),_:1},8,["href","active"])):ce("",!0),i.$page.props.user.role_id==1?(M(),re(ee,{key:1,href:i.route("carousel.index"),active:i.$page.component.startsWith("Carousel"),icon:"fa-images"},{default:$(()=>[O(" Carousel ")]),_:1},8,["href","active"])):ce("",!0),i.$page.props.user.role_id==1?(M(),re(ee,{key:2,href:i.route("user.index"),active:i.$page.component.startsWith("User"),icon:"fa-person"},{default:$(()=>[O(" Pengguna ")]),_:1},8,["href","active"])):ce("",!0),F(ee,{href:i.route("profile.index"),active:i.$page.component.startsWith("Profile"),icon:"fa-user"},{default:$(()=>[O(" Saya ")]),_:1},8,["href","active"])])]),vn])]),pn])]),F(C(at),{as:"template",show:a},{default:$(()=>[p("div",fn,[F(C(ke),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:$(()=>[F(C(Ct),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),F(C(ke),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:$(()=>[F(C(Lt),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:$(()=>[p("div",mn,[p("div",gn,[p("div",hn,[p("div",null,[F(Re,{darkMode:o.value,onClick:d[1]||(d[1]=g=>o.value=!o.value)},null,8,["darkMode"])]),p("div",bn,[F(C(Ot),{class:"bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:$(()=>[p("button",{class:"inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:d[2]||(d[2]=g=>s.value=!s.value)},[(M(),V("svg",yn,[p("path",{class:J({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),p("path",{class:J({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),xn]),p("div",Sn,[p("div",wn,[p("div",Pn,[p("img",{class:"h-12 w-12 rounded-full object-cover",src:i.$page.props.user.profile_photo_url,alt:i.$page.props.user.name},null,8,_n)]),p("div",In,[p("div",kn,X(i.$page.props.user.name),1),p("div",En,X(i.$page.props.user.email),1)])]),p("div",$n,[F(je,{href:i.route("profile.show"),active:i.route().current("profile.show")},{default:$(()=>[O(" Profil ")]),_:1},8,["href","active"]),p("form",{method:"POST",onSubmit:Be(r,["prevent"])},[F(je,{as:"button"},{default:$(()=>[O(" Keluar ")]),_:1})],40,Fn)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:3}),p("main",Tn,[p("div",Mn,[p("div",On,[p("main",Cn,[pe(i.$slots,"default")])])])]),p("footer",null,[p("div",Ln,[Bn,i.$page.props.appSetting?(M(),V("div",Dn,[p("span",Rn,"\xA9 2023 "+X(i.$page.props.appSetting.name)+". ",1),An])):ce("",!0)])])])],2))}};export{Xn as _,Te as c,T as l,ue as p};
import{i as _,o as B,e as W,a as c,n as X,g as M,r as de,u as O,c as ne,w as I,j as Ve,k as Q,p as J,l as A,d as P,m as D,q,s as ce,x as ie,y as oe,F as qe,z as ct,A as ze,X as Ae,b as k,t as Z,B as De,f as se,C as Re,O as vt}from"./app.1710f2ff.js";import{b as Ue,_ as je,a as pt,c as Se,A as Ne,d as ee}from"./DarkmodeToggle.a8d7ca49.js";import{_ as ft}from"./helper.4c5a3124.js";import{o as v,u as K,H as R,t as H,N as re,a as E,f as _e,b as ke,S as le,T as mt}from"./label.b1955abb.js";import{n as me,S as Fe,F as Te,p as gt,v as Ge,I as ht,D as bt,N,m as ge,d as Me,O as ae,T as Ie}from"./focus-management.5a63cc4e.js";const yt={class:"flex items-center gap-2"},xt={class:"flex items-center gap-2"},ue={__name:"NavLinkAlt",props:{href:String,active:Boolean,icon:String,flyout:{type:Boolean,default:!1}},setup(e){const l=e,r=_(()=>l.active?"nightwind-prevent text-primary-300 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10":"nightwind-prevent text-white text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10");return(i,t)=>e.flyout?(B(),W("button",{key:0,class:X(O(r))},[c("div",yt,[c("i",{class:X(["fa-duotone",e.icon])},null,2),M(),de(i.$slots,"default")])],2)):(B(),ne(O(Ve),{key:1,href:e.href,class:X(O(r))},{default:I(()=>[c("div",xt,[c("i",{class:X(["fa-duotone",e.icon])},null,2),M(),de(i.$slots,"default")])]),_:3},8,["href","class"]))}};function St(e){throw new Error("Unexpected object: "+e)}var L=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(L||{});function wt(e,l){let r=l.resolveItems();if(r.length<=0)return null;let i=l.resolveActiveIndex(),t=i!=null?i:-1,n=(()=>{switch(e.focus){case 0:return r.findIndex(s=>!l.resolveDisabled(s));case 1:{let s=r.slice().reverse().findIndex((u,o,d)=>t!==-1&&d.length-o-1>=t?!1:!l.resolveDisabled(u));return s===-1?s:r.length-1-s}case 2:return r.findIndex((s,u)=>u<=t?!1:!l.resolveDisabled(s));case 3:{let s=r.slice().reverse().findIndex(u=>!l.resolveDisabled(u));return s===-1?s:r.length-1-s}case 4:return r.findIndex(s=>l.resolveId(s)===e.id);case 5:return null;default:St(e)}})();return n===-1?i:n}let We=Symbol("Context");var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function Pt(){return ve()!==null}function ve(){return Q(We,null)}function Oe(e){J(We,e)}function we(e,l,r){me.isServer||A(i=>{document.addEventListener(e,l,r),i(()=>document.removeEventListener(e,l,r))})}function Xe(e,l,r=_(()=>!0)){function i(n,s){if(!r.value||n.defaultPrevented)return;let u=s(n);if(u===null||!u.getRootNode().contains(u))return;let o=function d(a){return typeof a=="function"?d(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let d of o){if(d===null)continue;let a=d instanceof HTMLElement?d:v(d);if(a!=null&&a.contains(u)||n.composed&&n.composedPath().includes(a))return}return!Fe(u,Te.Loose)&&u.tabIndex!==-1&&n.preventDefault(),l(n,u)}let t=P(null);we("mousedown",n=>{var s,u;r.value&&(t.value=((u=(s=n.composedPath)==null?void 0:s.call(n))==null?void 0:u[0])||n.target)},!0),we("click",n=>{!t.value||(i(n,()=>t.value),t.value=null)},!0),we("blur",n=>i(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function He(e){return[e.screenX,e.screenY]}function _t(){let e=P([-1,-1]);return{wasMoved(l){let r=He(l);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(l){e.value=He(l)}}}function kt(e,l,r){me.isServer||A(i=>{window.addEventListener(e,l,r),i(()=>window.removeEventListener(e,l,r))})}var V=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(V||{});function Je(){let e=P(0);return kt("keydown",l=>{l.key==="Tab"&&(e.value=l.shiftKey?1:0)}),e}function It(e,l,r,i){me.isServer||A(t=>{e=e!=null?e:window,e.addEventListener(l,r,i),t(()=>e.removeEventListener(l,r,i))})}function Qe(){let e=[],l=[],r={enqueue(i){l.push(i)},addEventListener(i,t,n,s){return i.addEventListener(t,n,s),r.add(()=>i.removeEventListener(t,n,s))},requestAnimationFrame(...i){let t=requestAnimationFrame(...i);r.add(()=>cancelAnimationFrame(t))},nextFrame(...i){r.requestAnimationFrame(()=>{r.requestAnimationFrame(...i)})},setTimeout(...i){let t=setTimeout(...i);r.add(()=>clearTimeout(t))},add(i){e.push(i)},style(i,t,n){let s=i.style.getPropertyValue(t);return Object.assign(i.style,{[t]:n}),this.add(()=>{Object.assign(i.style,{[t]:s})})},dispose(){for(let i of e.splice(0))i()},async workQueue(){for(let i of l.splice(0))await i()}};return r}var Et=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Et||{}),$t=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))($t||{});function Ft(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ye=Symbol("MenuContext");function he(e){let l=Q(Ye,null);if(l===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,he),r}return l}let Tt=D({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:l,attrs:r}){let i=P(1),t=P(null),n=P(null),s=P([]),u=P(""),o=P(null),d=P(1);function a(h=f=>f){let f=o.value!==null?s.value[o.value]:null,m=ht(h(s.value.slice()),x=>v(x.dataRef.domRef)),y=f?m.indexOf(f):null;return y===-1&&(y=null),{items:m,activeItemIndex:y}}let g={menuState:i,buttonRef:t,itemsRef:n,items:s,searchQuery:u,activeItemIndex:o,activationTrigger:d,closeMenu:()=>{i.value=1,o.value=null},openMenu:()=>i.value=0,goToItem(h,f,m){let y=a(),x=wt(h===L.Specific?{focus:L.Specific,id:f}:{focus:h},{resolveItems:()=>y.items,resolveActiveIndex:()=>y.activeItemIndex,resolveId:b=>b.id,resolveDisabled:b=>b.dataRef.disabled});u.value="",o.value=x,d.value=m!=null?m:1,s.value=y.items},search(h){let f=u.value!==""?0:1;u.value+=h.toLowerCase();let m=(o.value!==null?s.value.slice(o.value+f).concat(s.value.slice(0,o.value+f)):s.value).find(x=>x.dataRef.textValue.startsWith(u.value)&&!x.dataRef.disabled),y=m?s.value.indexOf(m):-1;y===-1||y===o.value||(o.value=y,d.value=1)},clearSearch(){u.value=""},registerItem(h,f){let m=a(y=>[...y,{id:h,dataRef:f}]);s.value=m.items,o.value=m.activeItemIndex,d.value=1},unregisterItem(h){let f=a(m=>{let y=m.findIndex(x=>x.id===h);return y!==-1&&m.splice(y,1),m});s.value=f.items,o.value=f.activeItemIndex,d.value=1}};return Xe([t,n],(h,f)=>{var m;g.closeMenu(),Fe(f,Te.Loose)||(h.preventDefault(),(m=v(t))==null||m.focus())},_(()=>i.value===0)),J(Ye,g),Oe(_(()=>K(i.value,{[0]:T.Open,[1]:T.Closed}))),()=>{let h={open:i.value===0,close:g.closeMenu};return R({ourProps:{},theirProps:e,slot:h,slots:l,attrs:r,name:"Menu"})}}});D({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${H()}`}},setup(e,{attrs:l,slots:r,expose:i}){let t=he("MenuButton");i({el:t.buttonRef,$el:t.buttonRef});function n(d){switch(d.key){case E.Space:case E.Enter:case E.ArrowDown:d.preventDefault(),d.stopPropagation(),t.openMenu(),ie(()=>{var a;(a=v(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(L.First)});break;case E.ArrowUp:d.preventDefault(),d.stopPropagation(),t.openMenu(),ie(()=>{var a;(a=v(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(L.Last)});break}}function s(d){switch(d.key){case E.Space:d.preventDefault();break}}function u(d){e.disabled||(t.menuState.value===0?(t.closeMenu(),ie(()=>{var a;return(a=v(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),t.openMenu(),Ft(()=>{var a;return(a=v(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let o=Ue(_(()=>({as:e.as,type:l.type})),t.buttonRef);return()=>{var d;let a={open:t.menuState.value===0},{id:g,...h}=e,f={ref:t.buttonRef,id:g,type:o.value,"aria-haspopup":"menu","aria-controls":(d=v(t.itemsRef))==null?void 0:d.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:n,onKeyup:s,onClick:u};return R({ourProps:f,theirProps:h,slot:a,attrs:l,slots:r,name:"MenuButton"})}}});D({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${H()}`}},setup(e,{attrs:l,slots:r,expose:i}){let t=he("MenuItems"),n=P(null);i({el:t.itemsRef,$el:t.itemsRef}),gt({container:_(()=>v(t.itemsRef)),enabled:_(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function s(a){var g;switch(n.value&&clearTimeout(n.value),a.key){case E.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case E.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let h=t.items.value[t.activeItemIndex.value];(g=v(h.dataRef.domRef))==null||g.click()}t.closeMenu(),Ge(v(t.buttonRef));break;case E.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(L.Next);case E.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(L.Previous);case E.Home:case E.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(L.First);case E.End:case E.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(L.Last);case E.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),ie(()=>{var h;return(h=v(t.buttonRef))==null?void 0:h.focus({preventScroll:!0})});break;case E.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),ie(()=>bt(v(t.buttonRef),a.shiftKey?N.Previous:N.Next));break;default:a.key.length===1&&(t.search(a.key),n.value=setTimeout(()=>t.clearSearch(),350));break}}function u(a){switch(a.key){case E.Space:a.preventDefault();break}}let o=ve(),d=_(()=>o!==null?(o.value&T.Open)===T.Open:t.menuState.value===0);return()=>{var a,g;let h={open:t.menuState.value===0},{id:f,...m}=e,y={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(g=v(t.buttonRef))==null?void 0:g.id,id:f,onKeydown:s,onKeyup:u,role:"menu",tabIndex:0,ref:t.itemsRef};return R({ourProps:y,theirProps:m,slot:h,attrs:l,slots:r,features:re.RenderStrategy|re.Static,visible:d.value,name:"MenuItems"})}}});D({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${H()}`}},setup(e,{slots:l,attrs:r,expose:i}){let t=he("MenuItem"),n=P(null);i({el:n,$el:n});let s=_(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),u=_(()=>({disabled:e.disabled,textValue:"",domRef:n}));q(()=>{var m,y;let x=(y=(m=v(n))==null?void 0:m.textContent)==null?void 0:y.toLowerCase().trim();x!==void 0&&(u.value.textValue=x)}),q(()=>t.registerItem(e.id,u)),ce(()=>t.unregisterItem(e.id)),A(()=>{t.menuState.value===0&&(!s.value||t.activationTrigger.value!==0&&ie(()=>{var m,y;return(y=(m=v(n))==null?void 0:m.scrollIntoView)==null?void 0:y.call(m,{block:"nearest"})}))});function o(m){if(e.disabled)return m.preventDefault();t.closeMenu(),Ge(v(t.buttonRef))}function d(){if(e.disabled)return t.goToItem(L.Nothing);t.goToItem(L.Specific,e.id)}let a=_t();function g(m){a.update(m)}function h(m){!a.wasMoved(m)||e.disabled||s.value||t.goToItem(L.Specific,e.id,0)}function f(m){!a.wasMoved(m)||e.disabled||!s.value||t.goToItem(L.Nothing)}return()=>{let{disabled:m}=e,y={active:s.value,disabled:m,close:t.closeMenu},{id:x,...b}=e;return R({ourProps:{id:x,ref:n,role:"menuitem",tabIndex:m===!0?void 0:-1,"aria-disabled":m===!0?!0:void 0,disabled:void 0,onClick:o,onFocus:d,onPointerenter:g,onMouseenter:g,onPointermove:h,onMousemove:h,onPointerleave:f,onMouseleave:f},theirProps:{...r,...b},slot:y,attrs:r,slots:l,name:"MenuItem"})}}});var Mt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Mt||{});let Ze=Symbol("PopoverContext");function be(e){let l=Q(Ze,null);if(l===null){let r=new Error(`<${e} /> is missing a parent <${lt.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,be),r}return l}let et=Symbol("PopoverGroupContext");function tt(){return Q(et,null)}let nt=Symbol("PopoverPanelContext");function Ot(){return Q(nt,null)}let lt=D({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:l,attrs:r,expose:i}){var t;let n=P(null);i({el:n,$el:n});let s=P(1),u=P(null),o=P(null),d=P(null),a=P(null),g=_(()=>ge(n)),h=_(()=>{var p,S;if(!v(u)||!v(a))return!1;for(let U of document.querySelectorAll("body > *"))if(Number(U==null?void 0:U.contains(v(u)))^Number(U==null?void 0:U.contains(v(a))))return!0;let w=Me(),$=w.indexOf(v(u)),F=($+w.length-1)%w.length,j=($+1)%w.length,C=w[F],z=w[j];return!((p=v(a))!=null&&p.contains(C))&&!((S=v(a))!=null&&S.contains(z))}),f={popoverState:s,buttonId:P(null),panelId:P(null),panel:a,button:u,isPortalled:h,beforePanelSentinel:o,afterPanelSentinel:d,togglePopover(){s.value=K(s.value,{[0]:1,[1]:0})},closePopover(){s.value!==1&&(s.value=1)},close(p){f.closePopover();let S=(()=>p?p instanceof HTMLElement?p:p.value instanceof HTMLElement?v(p):v(f.button):v(f.button))();S==null||S.focus()}};J(Ze,f),Oe(_(()=>K(s.value,{[0]:T.Open,[1]:T.Closed})));let m={buttonId:f.buttonId,panelId:f.panelId,close(){f.closePopover()}},y=tt(),x=y==null?void 0:y.registerPopover;function b(){var p,S,w,$;return($=y==null?void 0:y.isFocusWithinPopoverGroup())!=null?$:((p=g.value)==null?void 0:p.activeElement)&&(((S=v(u))==null?void 0:S.contains(g.value.activeElement))||((w=v(a))==null?void 0:w.contains(g.value.activeElement)))}return A(()=>x==null?void 0:x(m)),It((t=g.value)==null?void 0:t.defaultView,"focus",p=>{var S,w;s.value===0&&(b()||!u||!a||p.target!==window&&((S=v(f.beforePanelSentinel))!=null&&S.contains(p.target)||(w=v(f.afterPanelSentinel))!=null&&w.contains(p.target)||f.closePopover()))},!0),Xe([u,a],(p,S)=>{var w;f.closePopover(),Fe(S,Te.Loose)||(p.preventDefault(),(w=v(u))==null||w.focus())},_(()=>s.value===0)),()=>{let p={open:s.value===0,close:f.close};return R({theirProps:e,ourProps:{ref:n},slot:p,slots:l,attrs:r,name:"Popover"})}}}),Bt=D({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${H()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:r,expose:i}){let t=be("PopoverButton"),n=_(()=>ge(t.button));i({el:t.button,$el:t.button}),q(()=>{t.buttonId.value=e.id}),ce(()=>{t.buttonId.value=null});let s=tt(),u=s==null?void 0:s.closeOthers,o=Ot(),d=_(()=>o===null?!1:o.value===t.panelId.value),a=P(null),g=`headlessui-focus-sentinel-${H()}`;d.value||A(()=>{t.button.value=a.value});let h=Ue(_(()=>({as:e.as,type:l.type})),a);function f(b){var p,S,w,$,F;if(d.value){if(t.popoverState.value===1)return;switch(b.key){case E.Space:case E.Enter:b.preventDefault(),(S=(p=b.target).click)==null||S.call(p),t.closePopover(),(w=v(t.button))==null||w.focus();break}}else switch(b.key){case E.Space:case E.Enter:b.preventDefault(),b.stopPropagation(),t.popoverState.value===1&&(u==null||u(t.buttonId.value)),t.togglePopover();break;case E.Escape:if(t.popoverState.value!==0)return u==null?void 0:u(t.buttonId.value);if(!v(t.button)||(($=n.value)==null?void 0:$.activeElement)&&!((F=v(t.button))!=null&&F.contains(n.value.activeElement)))return;b.preventDefault(),b.stopPropagation(),t.closePopover();break}}function m(b){d.value||b.key===E.Space&&b.preventDefault()}function y(b){var p,S;e.disabled||(d.value?(t.closePopover(),(p=v(t.button))==null||p.focus()):(b.preventDefault(),b.stopPropagation(),t.popoverState.value===1&&(u==null||u(t.buttonId.value)),t.togglePopover(),(S=v(t.button))==null||S.focus()))}function x(b){b.preventDefault(),b.stopPropagation()}return()=>{let b=t.popoverState.value===0,p={open:b},{id:S,...w}=e,$=d.value?{ref:a,type:h.value,onKeydown:f,onClick:y}:{ref:a,id:S,type:h.value,"aria-expanded":e.disabled?void 0:t.popoverState.value===0,"aria-controls":v(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:f,onKeyup:m,onClick:y,onMousedown:x},F=Je();function j(){let C=v(t.panel);if(!C)return;function z(){K(F.value,{[V.Forwards]:()=>ae(C,N.First),[V.Backwards]:()=>ae(C,N.Last)})===Ie.Error&&ae(Me().filter(U=>U.dataset.headlessuiFocusGuard!=="true"),K(F.value,{[V.Forwards]:N.Next,[V.Backwards]:N.Previous}),{relativeTo:v(t.button)})}z()}return oe(qe,[R({ourProps:$,theirProps:{...l,...w},slot:p,attrs:l,slots:r,name:"PopoverButton"}),b&&!d.value&&t.isPortalled.value&&oe(_e,{id:g,features:ke.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:j})])}}}),Lt=D({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:l,slots:r}){let i=be("PopoverOverlay"),t=`headlessui-popover-overlay-${H()}`,n=ve(),s=_(()=>n!==null?(n.value&T.Open)===T.Open:i.popoverState.value===0);function u(){i.closePopover()}return()=>{let o={open:i.popoverState.value===0};return R({ourProps:{id:t,"aria-hidden":!0,onClick:u},theirProps:e,slot:o,attrs:l,slots:r,features:re.RenderStrategy|re.Static,visible:s.value,name:"PopoverOverlay"})}}}),Ct=D({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${H()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:r,expose:i}){let{focus:t}=e,n=be("PopoverPanel"),s=_(()=>ge(n.panel)),u=`headlessui-focus-sentinel-before-${H()}`,o=`headlessui-focus-sentinel-after-${H()}`;i({el:n.panel,$el:n.panel}),q(()=>{n.panelId.value=e.id}),ce(()=>{n.panelId.value=null}),J(nt,n.panelId),A(()=>{var x,b;if(!t||n.popoverState.value!==0||!n.panel)return;let p=(x=s.value)==null?void 0:x.activeElement;(b=v(n.panel))!=null&&b.contains(p)||ae(v(n.panel),N.First)});let d=ve(),a=_(()=>d!==null?(d.value&T.Open)===T.Open:n.popoverState.value===0);function g(x){var b,p;switch(x.key){case E.Escape:if(n.popoverState.value!==0||!v(n.panel)||s.value&&!((b=v(n.panel))!=null&&b.contains(s.value.activeElement)))return;x.preventDefault(),x.stopPropagation(),n.closePopover(),(p=v(n.button))==null||p.focus();break}}function h(x){var b,p,S,w,$;let F=x.relatedTarget;!F||!v(n.panel)||(b=v(n.panel))!=null&&b.contains(F)||(n.closePopover(),(((S=(p=v(n.beforePanelSentinel))==null?void 0:p.contains)==null?void 0:S.call(p,F))||(($=(w=v(n.afterPanelSentinel))==null?void 0:w.contains)==null?void 0:$.call(w,F)))&&F.focus({preventScroll:!0}))}let f=Je();function m(){let x=v(n.panel);if(!x)return;function b(){K(f.value,{[V.Forwards]:()=>{var p;ae(x,N.First)===Ie.Error&&((p=v(n.afterPanelSentinel))==null||p.focus())},[V.Backwards]:()=>{var p;(p=v(n.button))==null||p.focus({preventScroll:!0})}})}b()}function y(){let x=v(n.panel);if(!x)return;function b(){K(f.value,{[V.Forwards]:()=>{let p=v(n.button),S=v(n.panel);if(!p)return;let w=Me(),$=w.indexOf(p),F=w.slice(0,$+1),j=[...w.slice($+1),...F];for(let C of j.slice())if(C.dataset.headlessuiFocusGuard==="true"||(S==null?void 0:S.contains(C))){let z=j.indexOf(C);z!==-1&&j.splice(z,1)}ae(j,N.First,{sorted:!1})},[V.Backwards]:()=>{var p;ae(x,N.Previous)===Ie.Error&&((p=v(n.button))==null||p.focus())}})}b()}return()=>{let x={open:n.popoverState.value===0,close:n.close},{id:b,focus:p,...S}=e,w={ref:n.panel,id:b,onKeydown:g,onFocusout:t&&n.popoverState.value===0?h:void 0,tabIndex:-1};return R({ourProps:w,theirProps:{...l,...S},attrs:l,slot:x,slots:{...r,default:(...$)=>{var F;return[oe(qe,[a.value&&n.isPortalled.value&&oe(_e,{id:u,ref:n.beforePanelSentinel,features:ke.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:m}),(F=r.default)==null?void 0:F.call(r,...$),a.value&&n.isPortalled.value&&oe(_e,{id:o,ref:n.afterPanelSentinel,features:ke.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:y})])]}},features:re.RenderStrategy|re.Static,visible:a.value,name:"PopoverPanel"})}}});D({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:l,slots:r,expose:i}){let t=P(null),n=ct([]),s=_(()=>ge(t));i({el:t,$el:t});function u(g){let h=n.value.indexOf(g);h!==-1&&n.value.splice(h,1)}function o(g){return n.value.push(g),()=>{u(g)}}function d(){var g;let h=s.value;if(!h)return!1;let f=h.activeElement;return(g=v(t))!=null&&g.contains(f)?!0:n.value.some(m=>{var y,x;return((y=h.getElementById(m.buttonId.value))==null?void 0:y.contains(f))||((x=h.getElementById(m.panelId.value))==null?void 0:x.contains(f))})}function a(g){for(let h of n.value)h.buttonId.value!==g&&h.close()}return J(et,{registerPopover:o,unregisterPopover:u,isFocusWithinPopoverGroup:d,closeOthers:a}),()=>R({ourProps:{ref:t},theirProps:e,slot:{},attrs:l,slots:r,name:"PopoverGroup"})}});function At(e){let l={called:!1};return(...r)=>{if(!l.called)return l.called=!0,e(...r)}}function Pe(e,...l){e&&l.length>0&&e.classList.add(...l)}function fe(e,...l){e&&l.length>0&&e.classList.remove(...l)}var Ee=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ee||{});function Dt(e,l){let r=Qe();if(!e)return r.dispose;let{transitionDuration:i,transitionDelay:t}=getComputedStyle(e),[n,s]=[i,t].map(u=>{let[o=0]=u.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,a)=>a-d);return o});return n!==0?r.setTimeout(()=>l("finished"),n+s):l("finished"),r.add(()=>l("cancelled")),r.dispose}function Ke(e,l,r,i,t,n){let s=Qe(),u=n!==void 0?At(n):()=>{};return fe(e,...t),Pe(e,...l,...r),s.nextFrame(()=>{fe(e,...r),Pe(e,...i),s.add(Dt(e,o=>(fe(e,...i,...l),Pe(e,...t),u(o))))}),s.add(()=>fe(e,...l,...r,...i,...t)),s.add(()=>u("cancelled")),s.dispose}function te(e=""){return e.split(" ").filter(l=>l.trim().length>1)}let Be=Symbol("TransitionContext");var Rt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Rt||{});function jt(){return Q(Be,null)!==null}function Nt(){let e=Q(Be,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Ht(){let e=Q(Le,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Le=Symbol("NestingContext");function ye(e){return"children"in e?ye(e.children):e.value.filter(({state:l})=>l==="visible").length>0}function at(e){let l=P([]),r=P(!1);q(()=>r.value=!0),ce(()=>r.value=!1);function i(n,s=le.Hidden){let u=l.value.findIndex(({id:o})=>o===n);u!==-1&&(K(s,{[le.Unmount](){l.value.splice(u,1)},[le.Hidden](){l.value[u].state="hidden"}}),!ye(l)&&r.value&&(e==null||e()))}function t(n){let s=l.value.find(({id:u})=>u===n);return s?s.state!=="visible"&&(s.state="visible"):l.value.push({id:n,state:"visible"}),()=>i(n,le.Unmount)}return{children:l,register:t,unregister:i}}let ot=re.RenderStrategy,$e=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:r,slots:i,expose:t}){let n=P(0);function s(){n.value|=T.Opening,l("beforeEnter")}function u(){n.value&=~T.Opening,l("afterEnter")}function o(){n.value|=T.Closing,l("beforeLeave")}function d(){n.value&=~T.Closing,l("afterLeave")}if(!jt()&&Pt())return()=>oe(rt,{...e,onBeforeEnter:s,onAfterEnter:u,onBeforeLeave:o,onAfterLeave:d},i);let a=P(null),g=P("visible"),h=_(()=>e.unmount?le.Unmount:le.Hidden);t({el:a,$el:a});let{show:f,appear:m}=Nt(),{register:y,unregister:x}=Ht(),b={value:!0},p=H(),S={value:!1},w=at(()=>{!S.value&&g.value!=="hidden"&&(g.value="hidden",x(p),d())});q(()=>{let G=y(p);ce(G)}),A(()=>{if(h.value===le.Hidden&&!!p){if(f&&g.value!=="visible"){g.value="visible";return}K(g.value,{hidden:()=>x(p),visible:()=>y(p)})}});let $=te(e.enter),F=te(e.enterFrom),j=te(e.enterTo),C=te(e.entered),z=te(e.leave),U=te(e.leaveFrom),st=te(e.leaveTo);q(()=>{A(()=>{if(g.value==="visible"){let G=v(a);if(G instanceof Comment&&G.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function it(G){let xe=b.value&&!m.value,Y=v(a);!Y||!(Y instanceof HTMLElement)||xe||(S.value=!0,f.value&&s(),f.value||o(),G(f.value?Ke(Y,$,F,j,C,pe=>{S.value=!1,pe===Ee.Finished&&u()}):Ke(Y,z,U,st,C,pe=>{S.value=!1,pe===Ee.Finished&&(ye(w)||(g.value="hidden",x(p),d()))})))}return q(()=>{ze([f],(G,xe,Y)=>{it(Y),b.value=!1},{immediate:!0})}),J(Le,w),Oe(_(()=>K(g.value,{visible:T.Open,hidden:T.Closed})|n.value)),()=>{let{appear:G,show:xe,enter:Y,enterFrom:pe,enterTo:Un,entered:Gn,leave:Wn,leaveFrom:Xn,leaveTo:Jn,...Ce}=e,ut={ref:a},dt={...Ce,...m&&f&&me.isServer?{class:X([Ce.class,...$,...F])}:{}};return R({theirProps:dt,ourProps:ut,slot:{},slots:i,attrs:r,features:ot,visible:g.value==="visible",name:"TransitionChild"})}}}),Kt=$e,rt=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:r,slots:i}){let t=ve(),n=_(()=>e.show===null&&t!==null?(t.value&T.Open)===T.Open:e.show);A(()=>{if(![!0,!1].includes(n.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let s=P(n.value?"visible":"hidden"),u=at(()=>{s.value="hidden"}),o=P(!0),d={show:n,appear:_(()=>e.appear||!o.value)};return q(()=>{A(()=>{o.value=!1,n.value?s.value="visible":ye(u)||(s.value="hidden")})}),J(Le,u),J(Be,d),()=>{let a=mt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),g={unmount:e.unmount};return R({ourProps:{...g,as:"template"},theirProps:{},slot:{},slots:{...i,default:()=>[oe(Kt,{onBeforeEnter:()=>l("beforeEnter"),onAfterEnter:()=>l("afterEnter"),onBeforeLeave:()=>l("beforeLeave"),onAfterLeave:()=>l("afterLeave"),...r,...g,...a},i.default)]},attrs:{},features:ot,visible:s.value==="visible",name:"Transition"})}}});const Vt={class:"sticky top-0 z-50"},qt={class:"min-h-screen bg-gray-100 bg-glass bg-fixed"},zt={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},Ut={class:"relative flex flex-wrap items-center justify-center lg:justify-between"},Gt={class:"absolute left-0 py-5 flex-shrink-0 lg:static flex items-center"},Wt={class:"hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"},Xt={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Jt=["src","alt"],Qt={key:1,class:"inline-flex rounded-3xl"},Yt={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Zt=c("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[c("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),en=c("div",{class:"border-t border-gray-100"},null,-1),tn=["onSubmit"],nn={class:"w-full py-10 lg:py-5 lg:border-t lg:border-gray-300"},ln={class:"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"},an={class:"hidden lg:block lg:col-span-2"},on={class:"flex space-x-4"},rn=c("div",{class:"px-12 lg:px-0"},[c("div",{class:"flex justify-end"})],-1),sn={class:"absolute right-0 flex-shrink-0 lg:hidden"},un={class:"lg:hidden"},dn={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"},cn={class:"pt-3 pb-2"},vn={class:"flex items-center justify-between px-4"},pn={class:"-mr-2"},fn={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},mn={class:"mt-3 px-2 space-y-1"},gn={class:"pt-4 pb-2"},hn={class:"flex items-center px-5"},bn={class:"flex-shrink-0"},yn=["src","alt"],xn={class:"ml-3 min-w-0 flex-1"},Sn={class:"text-base font-medium text-gray-800 truncate capitalize"},wn={class:"text-sm font-medium text-gray-500 truncate"},Pn={class:"mt-3 px-2 space-y-1"},_n=["onSubmit"],kn={class:"-mt-24"},In={class:"max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},En={class:""},$n={class:""},Fn={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},Tn={class:"p-6"},Mn={class:"sm:flex sm:items-center sm:justify-between"},On={class:"sm:flex sm:space-x-5"},Bn={class:"flex-shrink-0"},Ln=["src","alt"],Cn={class:"mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left"},An={class:"text-sm font-medium text-gray-600"},Dn={class:"text-xl font-bold text-gray-900 sm:text-2xl capitalize"},Rn={class:"text-sm font-medium text-gray-600"},jn={key:0,class:"mt-3 grid justify-center sm:mt-0"},Nn={class:"max-w-7xl mx-auto py-5 space-y-5 relative"},Hn={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"},Kn=c("div",{class:"py-10 block lg:hidden"},null,-1),Vn={key:0,class:"border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"},qn={class:"block sm:inline capitalize"},zn=c("span",{class:"block sm:inline"},"All rights reserved.",-1),nl={__name:"AppLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(e){var u;const l=e,r=P((u=JSON.parse(localStorage.getItem("darkmode")))!=null?u:!1);ze(r,o=>{console.log(`darkmode is ${o}`),localStorage.setItem("darkmode",JSON.stringify(o))});const i=P(!1),t=_(()=>!!Re().action),n=_(()=>!!Re().previous),s=()=>{vt.post(route("logout"))};return(o,d)=>(B(),W("div",{class:X(["transition duration-1000",r.value?"nightwind dark":"nightwind"])},[o.$page.props.appSetting?(B(),ne(O(Ae),{key:0,title:e.title+" - "+o.$page.props.appSetting.name},null,8,["title"])):(B(),ne(O(Ae),{key:1,title:e.title},null,8,["title"])),c("div",Vt,[k(ft)]),c("div",qt,[k(O(lt),{as:"header",class:"pb-24 bg-gradient-to-r from-primary-800 to-primary-400"},{default:I(({open:a})=>[c("div",zt,[c("div",Ut,[c("div",Gt,[O(n)?de(o.$slots,"previous",{key:0}):(B(),ne(Ne,{key:1,class:"block h-10 w-auto"}))]),c("div",Wt,[k(je,{darkMode:r.value,onClick:d[0]||(d[0]=g=>r.value=!r.value)},null,8,["darkMode"]),k(O(Tt),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:I(()=>[k(pt,{align:"right",width:"48"},{trigger:I(()=>[o.$page.props.jetstream.managesProfilePhotos?(B(),W("button",Xt,[c("img",{class:"h-10 w-10 rounded-full object-cover",src:o.$page.props.user.profile_photo_url,alt:o.$page.props.user.name},null,8,Jt)])):(B(),W("span",Qt,[c("button",Yt,[M(Z(o.$page.props.user.name)+" ",1),Zt])]))]),content:I(()=>[k(Se,{href:o.route("dashboard")},{default:I(()=>[M(" Beranda ")]),_:1},8,["href"]),k(Se,{href:o.route("profile.show")},{default:I(()=>[M(" Profil ")]),_:1},8,["href"]),en,c("form",{onSubmit:De(s,["prevent"])},[k(Se,{as:"button"},{default:I(()=>[M(" Keluar ")]),_:1})],40,tn)]),_:1})]),_:1})]),c("div",nn,[c("div",ln,[c("div",an,[c("nav",on,[k(ue,{href:o.route("dashboard"),active:o.$page.url=="/dashboard",icon:"fa-house"},{default:I(()=>[M(" Beranda ")]),_:1},8,["href","active"]),k(ue,{href:o.route("history.index"),active:o.$page.url=="/history",icon:"fa-files"},{default:I(()=>[M(" Riwayat ")]),_:1},8,["href","active"]),k(ue,{href:o.route("information.index"),active:o.$page.url=="/information",icon:"fa-circle-info"},{default:I(()=>[M(" Informasi ")]),_:1},8,["href","active"]),k(ue,{href:o.route("user.index"),active:o.$page.url=="/user",icon:"fa-person"},{default:I(()=>[M(" Pengguna ")]),_:1},8,["href","active"]),k(ue,{href:o.route("profile.index"),active:o.$page.url=="/profile",icon:"fa-user"},{default:I(()=>[M(" Saya ")]),_:1},8,["href","active"])])]),rn])]),c("div",sn,[k(je,{darkMode:r.value,onClick:d[1]||(d[1]=g=>r.value=!r.value)},null,8,["darkMode"])])])]),k(O(rt),{as:"template",show:a},{default:I(()=>[c("div",un,[k(O($e),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:I(()=>[k(O(Lt),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),k(O($e),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:I(()=>[k(O(Ct),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:I(()=>[c("div",dn,[c("div",cn,[c("div",vn,[c("div",null,[k(O(Ve),{href:o.route("dashboard")},{default:I(()=>[k(Ne,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),c("div",pn,[k(O(Bt),{class:"bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:I(()=>[c("button",{class:"inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:d[2]||(d[2]=g=>i.value=!i.value)},[(B(),W("svg",fn,[c("path",{class:X({hidden:i.value,"inline-flex":!i.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),c("path",{class:X({hidden:!i.value,"inline-flex":i.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),c("div",mn,[k(ee,{href:o.route("dashboard"),active:o.route().current("dashboard")},{default:I(()=>[M(" Dasbor ")]),_:1},8,["href","active"]),o.$page.props.user.role_id==1?(B(),ne(ee,{key:0,href:o.route("user.index"),active:o.$page.url.startsWith("/user")},{default:I(()=>[M(" Pengguna ")]),_:1},8,["href","active"])):se("",!0),o.$page.props.user.role_id==1?(B(),ne(ee,{key:1,href:o.route("setting.index"),active:o.$page.url.startsWith("/setting")},{default:I(()=>[M(" Pengaturan ")]),_:1},8,["href","active"])):se("",!0)])]),c("div",gn,[c("div",hn,[c("div",bn,[c("img",{class:"h-12 w-12 rounded-full object-cover",src:o.$page.props.user.profile_photo_url,alt:o.$page.props.user.name},null,8,yn)]),c("div",xn,[c("div",Sn,Z(o.$page.props.user.name),1),c("div",wn,Z(o.$page.props.user.email),1)])]),c("div",Pn,[k(ee,{href:o.route("landing.welcome"),active:o.route().current("landing.welcome")},{default:I(()=>[M(" Beranda ")]),_:1},8,["href","active"]),k(ee,{href:o.route("profile.show"),active:o.route().current("profile.show")},{default:I(()=>[M(" Profil ")]),_:1},8,["href","active"]),o.$page.props.jetstream.hasApiFeatures?(B(),ne(ee,{key:0,href:o.route("api-tokens.index"),active:o.route().current("api-tokens.index")},{default:I(()=>[M(" API Tokens ")]),_:1},8,["href","active"])):se("",!0),c("form",{method:"POST",onSubmit:De(s,["prevent"])},[k(ee,{as:"button"},{default:I(()=>[M(" Keluar ")]),_:1})],40,_n)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:3}),c("main",kn,[c("div",In,[c("div",En,[c("section",$n,[c("div",Fn,[c("div",Tn,[c("div",Mn,[c("div",On,[c("div",Bn,[l.avatar?(B(),W("img",{key:0,class:"mx-auto h-20 w-20 object-cover rounded-full",src:l.avatar,alt:l.avatar},null,8,Ln)):se("",!0)]),c("div",Cn,[c("p",An,Z(l.greeting),1),c("p",Dn,Z(l.name),1),c("p",Rn,Z(l.desc),1)])]),O(t)?(B(),W("div",jn,[de(o.$slots,"action")])):se("",!0)])])])]),c("main",Nn,[de(o.$slots,"default")])])])]),c("footer",null,[c("div",Hn,[Kn,o.$page.props.appSetting?(B(),W("div",Vn,[c("span",qn,"\xA9 2023 "+Z(o.$page.props.appSetting.name)+". ",1),zn])):se("",!0)])])])],2))}};export{nl as _};

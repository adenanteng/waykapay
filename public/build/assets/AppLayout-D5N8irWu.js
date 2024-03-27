import{k as T,o as A,e as D,a as r,n as H,g as L,r as de,c as Re,w as E,u as I,j as Ne,I as q,d as x,B as j,J as te,K as G,y as ee,F as ne,z as V,D as se,p as De,T as at,Q as He,L as nt,b as S,f as ot,O as ze,M as Te,Z as st,t as W,i as Le}from"./app-BdJe4Deo.js";import{_ as rt,a as it}from"./OnlineStatus-Db2azOaP.js";import{_ as Ce,a as ut,b as Ie,c as Fe}from"./DarkmodeToggle-CK6PJrkx.js";import{e as Be}from"./vue3-otp-input.esm-CtT9JNbc.js";import{a as dt}from"./DialogModal-LhPJchy7.js";import{_ as ct}from"./PrimaryButton-CvG6lhcF.js";import{_ as pt}from"./InputError-B2vzISqZ.js";import{_ as vt}from"./BackgroundParticle-CV1grG5d.js";import{w as ft,a as Ve,t as we,i as C,f as mt,c as Me,l as Se,s as ht}from"./calculate-active-index-BfFNoBY1.js";import{s as ce,f as pe,o as v,u as N,A as le,I as X,N as oe,a as Z,S as J,T as gt}from"./form-EMrTyUK1.js";import{c as We,i as ve,w as Ke,h as qe,O as yt,E as ke,P as Y,N as K,T as be}from"./focus-management-CkmM9GRB.js";import{s as bt}from"./use-resolve-button-type-CG-IYDA-.js";const xt={class:"flex items-center gap-2"},_t={class:"flex items-center gap-2"},ie={__name:"NavLinkAlt",props:{href:String,active:Boolean,icon:String,flyout:{type:Boolean,default:!1}},setup(e){const l=e,n=T(()=>l.active?" text-primary-700 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10":" text-gray-900 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10");return(s,d)=>e.flyout?(A(),D("button",{key:0,class:H(n.value)},[r("div",xt,[r("i",{class:H(["fa-duotone",e.icon])},null,2),L(),de(s.$slots,"default")])],2)):(A(),Re(I(Ne),{key:1,href:e.href,class:H(n.value)},{default:E(()=>[r("div",_t,[r("i",{class:H(["fa-duotone",e.icon])},null,2),L(),de(s.$slots,"default")])]),_:3},8,["href","class"]))}};function wt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(l=>setTimeout(()=>{throw l}))}function $e(){let e=[],l={addEventListener(n,s,d,i){return n.addEventListener(s,d,i),l.add(()=>n.removeEventListener(s,d,i))},requestAnimationFrame(...n){let s=requestAnimationFrame(...n);l.add(()=>cancelAnimationFrame(s))},nextFrame(...n){l.requestAnimationFrame(()=>{l.requestAnimationFrame(...n)})},setTimeout(...n){let s=setTimeout(...n);l.add(()=>clearTimeout(s))},microTask(...n){let s={current:!0};return wt(()=>{s.current&&n[0]()}),l.add(()=>{s.current=!1})},style(n,s,d){let i=n.style.getPropertyValue(s);return Object.assign(n.style,{[s]:d}),this.add(()=>{Object.assign(n.style,{[s]:i})})},group(n){let s=$e();return n(s),this.add(()=>s.dispose())},add(n){return e.push(n),()=>{let s=e.indexOf(n);if(s>=0)for(let d of e.splice(s,1))d()}},dispose(){for(let n of e.splice(0))n()}};return l}function St(e,l,n,s){We.isServer||q(d=>{e=e??window,e.addEventListener(l,n,s),d(()=>e.removeEventListener(l,n,s))})}var z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(z||{});function Ge(){let e=x(0);return ft("keydown",l=>{l.key==="Tab"&&(e.value=l.shiftKey?1:0)}),e}function kt({defaultContainers:e=[],portals:l,mainTreeNodeRef:n}={}){let s=x(null),d=ve(s);function i(){var t,a,c;let f=[];for(let o of e)o!==null&&(o instanceof HTMLElement?f.push(o):"value"in o&&o.value instanceof HTMLElement&&f.push(o.value));if(l!=null&&l.value)for(let o of l.value)f.push(o);for(let o of(t=d==null?void 0:d.querySelectorAll("html > *, body > *"))!=null?t:[])o!==document.body&&o!==document.head&&o instanceof HTMLElement&&o.id!=="headlessui-portal-root"&&(o.contains(v(s))||o.contains((c=(a=v(s))==null?void 0:a.getRootNode())==null?void 0:c.host)||f.some(h=>o.contains(h))||f.push(o));return f}return{resolveContainers:i,contains(t){return i().some(a=>a.contains(t))},mainTreeNodeRef:s,MainTreeNode(){return n!=null?null:j(pe,{features:ce.Hidden,ref:s})}}}let Ae=Symbol("PortalParentContext");function $t(){let e=te(Ae,null),l=x([]);function n(i){return l.value.push(i),e&&e.register(i),()=>s(i)}function s(i){let t=l.value.indexOf(i);t!==-1&&l.value.splice(t,1),e&&e.unregister(i)}let d={register:n,unregister:s,portals:l};return[l,G({name:"PortalWrapper",setup(i,{slots:t}){return ee(Ae,d),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}})]}var Pt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Pt||{}),Et=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Et||{});let Ot=Symbol("MenuContext"),Tt=G({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:l,attrs:n}){let s=x(1),d=x(null),i=x(null),t=x([]),a=x(""),c=x(null),f=x(1);function o(g=p=>p){let p=c.value!==null?t.value[c.value]:null,_=yt(g(t.value.slice()),$=>v($.dataRef.domRef)),m=p?_.indexOf(p):null;return m===-1&&(m=null),{items:_,activeItemIndex:m}}let h={menuState:s,buttonRef:d,itemsRef:i,items:t,searchQuery:a,activeItemIndex:c,activationTrigger:f,closeMenu:()=>{s.value=1,c.value=null},openMenu:()=>s.value=0,goToItem(g,p,_){let m=o(),$=mt(g===Me.Specific?{focus:Me.Specific,id:p}:{focus:g},{resolveItems:()=>m.items,resolveActiveIndex:()=>m.activeItemIndex,resolveId:F=>F.id,resolveDisabled:F=>F.dataRef.disabled});a.value="",c.value=$,f.value=_??1,t.value=m.items},search(g){let p=a.value!==""?0:1;a.value+=g.toLowerCase();let _=(c.value!==null?t.value.slice(c.value+p).concat(t.value.slice(0,c.value+p)):t.value).find($=>$.dataRef.textValue.startsWith(a.value)&&!$.dataRef.disabled),m=_?t.value.indexOf(_):-1;m===-1||m===c.value||(c.value=m,f.value=1)},clearSearch(){a.value=""},registerItem(g,p){let _=o(m=>[...m,{id:g,dataRef:p}]);t.value=_.items,c.value=_.activeItemIndex,f.value=1},unregisterItem(g){let p=o(_=>{let m=_.findIndex($=>$.id===g);return m!==-1&&_.splice(m,1),_});t.value=p.items,c.value=p.activeItemIndex,f.value=1}};return Ve([d,i],(g,p)=>{var _;h.closeMenu(),Ke(p,qe.Loose)||(g.preventDefault(),(_=v(d))==null||_.focus())},T(()=>s.value===0)),ee(Ot,h),we(T(()=>N(s.value,{0:C.Open,1:C.Closed}))),()=>{let g={open:s.value===0,close:h.closeMenu};return le({ourProps:{},theirProps:e,slot:g,slots:l,attrs:n,name:"Menu"})}}});var Lt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Lt||{});let Ue=Symbol("PopoverContext");function fe(e){let l=te(Ue,null);if(l===null){let n=new Error(`<${e} /> is missing a parent <${Je.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,fe),n}return l}let Ct=Symbol("PopoverGroupContext");function Qe(){return te(Ct,null)}let Ze=Symbol("PopoverPanelContext");function It(){return te(Ze,null)}let Je=G({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:l,attrs:n,expose:s}){var d;let i=x(null);s({el:i,$el:i});let t=x(1),a=x(null),c=x(null),f=x(null),o=x(null),h=T(()=>ve(i)),g=T(()=>{var u,y;if(!v(a)||!v(o))return!1;for(let B of document.querySelectorAll("body > *"))if(Number(B==null?void 0:B.contains(v(a)))^Number(B==null?void 0:B.contains(v(o))))return!0;let b=ke(),O=b.indexOf(v(a)),M=(O+b.length-1)%b.length,R=(O+1)%b.length,ae=b[M],he=b[R];return!((u=v(o))!=null&&u.contains(ae))&&!((y=v(o))!=null&&y.contains(he))}),p={popoverState:t,buttonId:x(null),panelId:x(null),panel:o,button:a,isPortalled:g,beforePanelSentinel:c,afterPanelSentinel:f,togglePopover(){t.value=N(t.value,{0:1,1:0})},closePopover(){t.value!==1&&(t.value=1)},close(u){p.closePopover();let y=u?u instanceof HTMLElement?u:u.value instanceof HTMLElement?v(u):v(p.button):v(p.button);y==null||y.focus()}};ee(Ue,p),we(T(()=>N(t.value,{0:C.Open,1:C.Closed})));let _={buttonId:p.buttonId,panelId:p.panelId,close(){p.closePopover()}},m=Qe(),$=m==null?void 0:m.registerPopover,[F,k]=$t(),P=kt({mainTreeNodeRef:m==null?void 0:m.mainTreeNodeRef,portals:F,defaultContainers:[a,o]});function w(){var u,y,b,O;return(O=m==null?void 0:m.isFocusWithinPopoverGroup())!=null?O:((u=h.value)==null?void 0:u.activeElement)&&(((y=v(a))==null?void 0:y.contains(h.value.activeElement))||((b=v(o))==null?void 0:b.contains(h.value.activeElement)))}return q(()=>$==null?void 0:$(_)),St((d=h.value)==null?void 0:d.defaultView,"focus",u=>{var y,b;u.target!==window&&u.target instanceof HTMLElement&&t.value===0&&(w()||a&&o&&(P.contains(u.target)||(y=v(p.beforePanelSentinel))!=null&&y.contains(u.target)||(b=v(p.afterPanelSentinel))!=null&&b.contains(u.target)||p.closePopover()))},!0),Ve(P.resolveContainers,(u,y)=>{var b;p.closePopover(),Ke(y,qe.Loose)||(u.preventDefault(),(b=v(a))==null||b.focus())},T(()=>t.value===0)),()=>{let u={open:t.value===0,close:p.close};return j(ne,[j(k,{},()=>le({theirProps:{...e,...n},ourProps:{ref:i},slot:u,slots:l,attrs:n,name:"Popover"})),j(P.MainTreeNode)])}}}),Ft=G({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:l,slots:n,expose:s}){var d;let i=(d=e.id)!=null?d:`headlessui-popover-button-${X()}`,t=fe("PopoverButton"),a=T(()=>ve(t.button));s({el:t.button,$el:t.button}),V(()=>{t.buttonId.value=i}),se(()=>{t.buttonId.value=null});let c=Qe(),f=c==null?void 0:c.closeOthers,o=It(),h=T(()=>o===null?!1:o.value===t.panelId.value),g=x(null),p=`headlessui-focus-sentinel-${X()}`;h.value||q(()=>{t.button.value=v(g)});let _=bt(T(()=>({as:e.as,type:l.type})),g);function m(u){var y,b,O,M,R;if(h.value){if(t.popoverState.value===1)return;switch(u.key){case Z.Space:case Z.Enter:u.preventDefault(),(b=(y=u.target).click)==null||b.call(y),t.closePopover(),(O=v(t.button))==null||O.focus();break}}else switch(u.key){case Z.Space:case Z.Enter:u.preventDefault(),u.stopPropagation(),t.popoverState.value===1&&(f==null||f(t.buttonId.value)),t.togglePopover();break;case Z.Escape:if(t.popoverState.value!==0)return f==null?void 0:f(t.buttonId.value);if(!v(t.button)||(M=a.value)!=null&&M.activeElement&&!((R=v(t.button))!=null&&R.contains(a.value.activeElement)))return;u.preventDefault(),u.stopPropagation(),t.closePopover();break}}function $(u){h.value||u.key===Z.Space&&u.preventDefault()}function F(u){var y,b;e.disabled||(h.value?(t.closePopover(),(y=v(t.button))==null||y.focus()):(u.preventDefault(),u.stopPropagation(),t.popoverState.value===1&&(f==null||f(t.buttonId.value)),t.togglePopover(),(b=v(t.button))==null||b.focus()))}function k(u){u.preventDefault(),u.stopPropagation()}let P=Ge();function w(){let u=v(t.panel);if(!u)return;function y(){N(P.value,{[z.Forwards]:()=>Y(u,K.First),[z.Backwards]:()=>Y(u,K.Last)})===be.Error&&Y(ke().filter(b=>b.dataset.headlessuiFocusGuard!=="true"),N(P.value,{[z.Forwards]:K.Next,[z.Backwards]:K.Previous}),{relativeTo:v(t.button)})}y()}return()=>{let u=t.popoverState.value===0,y={open:u},{...b}=e,O=h.value?{ref:g,type:_.value,onKeydown:m,onClick:F}:{ref:g,id:i,type:_.value,"aria-expanded":t.popoverState.value===0,"aria-controls":v(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:m,onKeyup:$,onClick:F,onMousedown:k};return j(ne,[le({ourProps:O,theirProps:{...l,...b},slot:y,attrs:l,slots:n,name:"PopoverButton"}),u&&!h.value&&t.isPortalled.value&&j(pe,{id:p,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:w})])}}}),Bt=G({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:l,slots:n}){let s=fe("PopoverOverlay"),d=`headlessui-popover-overlay-${X()}`,i=Se(),t=T(()=>i!==null?(i.value&C.Open)===C.Open:s.popoverState.value===0);function a(){s.closePopover()}return()=>{let c={open:s.popoverState.value===0};return le({ourProps:{id:d,"aria-hidden":!0,onClick:a},theirProps:e,slot:c,attrs:l,slots:n,features:oe.RenderStrategy|oe.Static,visible:t.value,name:"PopoverOverlay"})}}}),Mt=G({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:l,slots:n,expose:s}){var d;let i=(d=e.id)!=null?d:`headlessui-popover-panel-${X()}`,{focus:t}=e,a=fe("PopoverPanel"),c=T(()=>ve(a.panel)),f=`headlessui-focus-sentinel-before-${X()}`,o=`headlessui-focus-sentinel-after-${X()}`;s({el:a.panel,$el:a.panel}),V(()=>{a.panelId.value=i}),se(()=>{a.panelId.value=null}),ee(Ze,a.panelId),q(()=>{var k,P;if(!t||a.popoverState.value!==0||!a.panel)return;let w=(k=c.value)==null?void 0:k.activeElement;(P=v(a.panel))!=null&&P.contains(w)||Y(v(a.panel),K.First)});let h=Se(),g=T(()=>h!==null?(h.value&C.Open)===C.Open:a.popoverState.value===0);function p(k){var P,w;switch(k.key){case Z.Escape:if(a.popoverState.value!==0||!v(a.panel)||c.value&&!((P=v(a.panel))!=null&&P.contains(c.value.activeElement)))return;k.preventDefault(),k.stopPropagation(),a.closePopover(),(w=v(a.button))==null||w.focus();break}}function _(k){var P,w,u,y,b;let O=k.relatedTarget;O&&v(a.panel)&&((P=v(a.panel))!=null&&P.contains(O)||(a.closePopover(),((u=(w=v(a.beforePanelSentinel))==null?void 0:w.contains)!=null&&u.call(w,O)||(b=(y=v(a.afterPanelSentinel))==null?void 0:y.contains)!=null&&b.call(y,O))&&O.focus({preventScroll:!0})))}let m=Ge();function $(){let k=v(a.panel);if(!k)return;function P(){N(m.value,{[z.Forwards]:()=>{var w;Y(k,K.First)===be.Error&&((w=v(a.afterPanelSentinel))==null||w.focus())},[z.Backwards]:()=>{var w;(w=v(a.button))==null||w.focus({preventScroll:!0})}})}P()}function F(){let k=v(a.panel);if(!k)return;function P(){N(m.value,{[z.Forwards]:()=>{let w=v(a.button),u=v(a.panel);if(!w)return;let y=ke(),b=y.indexOf(w),O=y.slice(0,b+1),M=[...y.slice(b+1),...O];for(let R of M.slice())if(R.dataset.headlessuiFocusGuard==="true"||u!=null&&u.contains(R)){let ae=M.indexOf(R);ae!==-1&&M.splice(ae,1)}Y(M,K.First,{sorted:!1})},[z.Backwards]:()=>{var w;Y(k,K.Previous)===be.Error&&((w=v(a.button))==null||w.focus())}})}P()}return()=>{let k={open:a.popoverState.value===0,close:a.close},{focus:P,...w}=e,u={ref:a.panel,id:i,onKeydown:p,onFocusout:t&&a.popoverState.value===0?_:void 0,tabIndex:-1};return le({ourProps:u,theirProps:{...l,...w},attrs:l,slot:k,slots:{...n,default:(...y)=>{var b;return[j(ne,[g.value&&a.isPortalled.value&&j(pe,{id:f,ref:a.beforePanelSentinel,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:$}),(b=n.default)==null?void 0:b.call(n,...y),g.value&&a.isPortalled.value&&j(pe,{id:o,ref:a.afterPanelSentinel,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:F})])]}},features:oe.RenderStrategy|oe.Static,visible:g.value,name:"PopoverPanel"})}}});function At(e){let l={called:!1};return(...n)=>{if(!l.called)return l.called=!0,e(...n)}}function ye(e,...l){e&&l.length>0&&e.classList.add(...l)}function ue(e,...l){e&&l.length>0&&e.classList.remove(...l)}var xe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(xe||{});function jt(e,l){let n=$e();if(!e)return n.dispose;let{transitionDuration:s,transitionDelay:d}=getComputedStyle(e),[i,t]=[s,d].map(a=>{let[c=0]=a.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):parseFloat(f)*1e3).sort((f,o)=>o-f);return c});return i!==0?n.setTimeout(()=>l("finished"),i+t):l("finished"),n.add(()=>l("cancelled")),n.dispose}function je(e,l,n,s,d,i){let t=$e(),a=i!==void 0?At(i):()=>{};return ue(e,...d),ye(e,...l,...n),t.nextFrame(()=>{ue(e,...n),ye(e,...s),t.add(jt(e,c=>(ue(e,...s,...l),ye(e,...d),a(c))))}),t.add(()=>ue(e,...l,...n,...s,...d)),t.add(()=>a("cancelled")),t.dispose}function Q(e=""){return e.split(/\s+/).filter(l=>l.length>1)}let Pe=Symbol("TransitionContext");var Rt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Rt||{});function Nt(){return te(Pe,null)!==null}function Dt(){let e=te(Pe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Ht(){let e=te(Ee,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ee=Symbol("NestingContext");function me(e){return"children"in e?me(e.children):e.value.filter(({state:l})=>l==="visible").length>0}function Ye(e){let l=x([]),n=x(!1);V(()=>n.value=!0),se(()=>n.value=!1);function s(i,t=J.Hidden){let a=l.value.findIndex(({id:c})=>c===i);a!==-1&&(N(t,{[J.Unmount](){l.value.splice(a,1)},[J.Hidden](){l.value[a].state="hidden"}}),!me(l)&&n.value&&(e==null||e()))}function d(i){let t=l.value.find(({id:a})=>a===i);return t?t.state!=="visible"&&(t.state="visible"):l.value.push({id:i,state:"visible"}),()=>s(i,J.Unmount)}return{children:l,register:d,unregister:s}}let Xe=oe.RenderStrategy,_e=G({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:n,slots:s,expose:d}){let i=x(0);function t(){i.value|=C.Opening,l("beforeEnter")}function a(){i.value&=~C.Opening,l("afterEnter")}function c(){i.value|=C.Closing,l("beforeLeave")}function f(){i.value&=~C.Closing,l("afterLeave")}if(!Nt()&&ht())return()=>j(et,{...e,onBeforeEnter:t,onAfterEnter:a,onBeforeLeave:c,onAfterLeave:f},s);let o=x(null),h=T(()=>e.unmount?J.Unmount:J.Hidden);d({el:o,$el:o});let{show:g,appear:p}=Dt(),{register:_,unregister:m}=Ht(),$=x(g.value?"visible":"hidden"),F={value:!0},k=X(),P={value:!1},w=Ye(()=>{!P.value&&$.value!=="hidden"&&($.value="hidden",m(k),f())});V(()=>{let B=_(k);se(B)}),q(()=>{if(h.value===J.Hidden&&k){if(g.value&&$.value!=="visible"){$.value="visible";return}N($.value,{hidden:()=>m(k),visible:()=>_(k)})}});let u=Q(e.enter),y=Q(e.enterFrom),b=Q(e.enterTo),O=Q(e.entered),M=Q(e.leave),R=Q(e.leaveFrom),ae=Q(e.leaveTo);V(()=>{q(()=>{if($.value==="visible"){let B=v(o);if(B instanceof Comment&&B.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function he(B){let ge=F.value&&!p.value,U=v(o);!U||!(U instanceof HTMLElement)||ge||(P.value=!0,g.value&&t(),g.value||c(),B(g.value?je(U,u,y,b,O,re=>{P.value=!1,re===xe.Finished&&a()}):je(U,M,R,ae,O,re=>{P.value=!1,re===xe.Finished&&(me(w)||($.value="hidden",m(k),f()))})))}return V(()=>{De([g],(B,ge,U)=>{he(U),F.value=!1},{immediate:!0})}),ee(Ee,w),we(T(()=>N($.value,{visible:C.Open,hidden:C.Closed})|i.value)),()=>{let{appear:B,show:ge,enter:U,enterFrom:re,enterTo:Nl,entered:Dl,leave:Hl,leaveFrom:zl,leaveTo:Vl,...Oe}=e,tt={ref:o},lt={...Oe,...p.value&&g.value&&We.isServer?{class:H([n.class,Oe.class,...u,...y])}:{}};return le({theirProps:lt,ourProps:tt,slot:{},slots:s,attrs:n,features:Xe,visible:$.value==="visible",name:"TransitionChild"})}}}),zt=_e,et=G({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:n,slots:s}){let d=Se(),i=T(()=>e.show===null&&d!==null?(d.value&C.Open)===C.Open:e.show);q(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let t=x(i.value?"visible":"hidden"),a=Ye(()=>{t.value="hidden"}),c=x(!0),f={show:i,appear:T(()=>e.appear||!c.value)};return V(()=>{q(()=>{c.value=!1,i.value?t.value="visible":me(a)||(t.value="hidden")})}),ee(Ee,a),ee(Pe,f),()=>{let o=gt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),h={unmount:e.unmount};return le({ourProps:{...h,as:"template"},theirProps:{},slot:{},slots:{...s,default:()=>[j(zt,{onBeforeEnter:()=>l("beforeEnter"),onAfterEnter:()=>l("afterEnter"),onBeforeLeave:()=>l("beforeLeave"),onAfterLeave:()=>l("afterLeave"),...n,...h,...o},s.default)]},attrs:{},features:Xe,visible:t.value==="visible",name:"Transition"})}}});const Vt=r("div",{class:"w-full text-center"}," Satu Langkah Lagi ",-1),Wt=r("div",{class:"text-center text-xs text-gray-600"}," Proses verifikasi ini hanya dilakukan satu kali. ",-1),Kt=r("i",{class:"fa-brands fa-whatsapp mr-1.5"},null,-1),qt={__name:"OtpWhatsapp",props:{greet:{type:Boolean,default:!0}},setup(e){const l=e,n=at({pin:null}),{...s}=T(()=>He().props.user).value,d=()=>{},i=x(s.phone_verified_at==null),t=x(l.greet),a=x(Be|null),c=x(""),f=x(!1),o=p=>{n.pin=c.value,n.post(route("otp.verify"),{errorBag:"storeInformation",preserveScroll:!0,replace:!0,onError:_=>{var m;f.value=!0,(m=a.value)==null||m.clearInput()},onSuccess:()=>{i.value=!1}})},h=p=>{},g=()=>{ze.post(route("otp.request"),null,{onBefore:p=>{},onStart:p=>{},onProgress:p=>{},onSuccess:p=>{},onError:p=>{},onCancel:()=>{},onFinish:()=>{t.value=!1}}),console.log(t.value+" asf")};return V(()=>{}),(p,_)=>(A(),Re(dt,{show:i.value,onClose:d},nt({_:2},[t.value?{name:"title",fn:E(()=>[Vt,Wt]),key:"0"}:{name:"title",fn:E(()=>[r("div",{class:"w-full text-center"}," Masukkan kode OTP Whatsapp "),r("div",{class:"text-center text-xs text-gray-600"},[L(" Tidak menerima kode? "),S(I(Ne),{class:"text-primary-600 underline font-medium",href:""},{default:E(()=>[L("Kirim ulang kode OTP")]),_:1})])]),key:"1"},t.value?{name:"content",fn:E(()=>[S(ct,{onClick:g,class:"w-full justify-center"},{default:E(()=>[Kt,L(" Verifikasi Whatsapp ")]),_:1})]),key:"2"}:{name:"content",fn:E(()=>[r("div",{class:"grid justify-center"},[S(I(Be),{ref_key:"otpInput",ref:a,value:c.value,"onUpdate:value":_[0]||(_[0]=m=>c.value=m),"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"input-type":"letter-numeric",conditionalClass:["one","two","three","four","five","six"],onOnChange:h,onOnComplete:o},null,8,["value"]),S(pt,{message:I(n).errors.pin,class:"mt-2"},null,8,["message"]),f.value?(A(),D("p",{key:0,class:"w-full text-center text-sm text-red-600 mt-2"},"Kode OTP salah, silahkan coba lagi.")):ot("",!0)])]),key:"3"}]),1032,["show"]))}},Gt={class:"sticky top-0 z-50"},Ut={class:"sticky top-0 z-50"},Qt={class:"min-h-screen bg-white relative isolate transition duration-1000"},Zt={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},Jt={class:"relative flex flex-wrap items-center justify-start lg:justify-between"},Yt={key:1,class:"sm:flex sm:space-x-5"},Xt={class:"sm:mt-0 sm:pt-1 text-left"},el=r("span",{class:"font-medium text-gray-600"},"Halo,",-1),tl={class:"text-sm font-medium text-gray-600"},ll={class:"hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"},al={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},nl=["src","alt"],ol={key:1,class:"inline-flex rounded-3xl"},sl={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},rl=r("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),il=r("div",{class:"border-t border-gray-100"},null,-1),ul={class:"hidden lg:flex w-full py-10 lg:py-5 lg:border-t lg:border-gray-300"},dl={class:"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"},cl={class:"hidden lg:block lg:col-span-2"},pl={class:"flex space-x-4"},vl=r("div",{class:"px-12 lg:px-0"},[r("div",{class:"flex justify-end"})],-1),fl=r("div",{class:"absolute right-0 flex-shrink-0 lg:hidden"},null,-1),ml={class:"lg:hidden"},hl={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"},gl={class:"pt-3 pb-2"},yl={class:"flex items-center justify-between px-4"},bl={class:"-mr-2"},xl={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},_l=r("div",{class:"mt-3 px-2 space-y-1"},null,-1),wl={class:"pt-4 pb-2"},Sl={class:"flex items-center px-5"},kl={class:"flex-shrink-0"},$l=["src","alt"],Pl={class:"ml-3 min-w-0 flex-1"},El={class:"text-base font-medium text-gray-800 truncate capitalize"},Ol={class:"text-sm font-medium text-gray-500 truncate"},Tl={class:"mt-3 px-2 space-y-1"},Ll={class:"mt-5"},Cl={class:"max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Il={class:""},Fl={class:"max-w-7xl mx-auto space-y-5 relative"},Bl={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"},Ml=r("div",{class:"py-16 sm:py-5 block"},null,-1),Al={class:"border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"},jl={class:"block sm:inline capitalize"},Rl=r("span",{class:"block sm:inline"},"All rights reserved.",-1),la={__name:"AppLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(e){const l=e;T(()=>He().props.user).value;const n=x(!1);typeof window<"u"&&(n.value=JSON.parse(localStorage.getItem("darkmode"))??!1,De(n,o=>{console.log(`darkmode is ${o}`),localStorage.setItem("darkmode",JSON.stringify(o))}));const s=x(!1);T(()=>!!Te().action);const d=T(()=>!!Te().previous),i=l.name.split(" "),t=()=>{ze.post(route("logout"))},a=x(null),c=x(null),f=x(null);return V(()=>{var o=window.pageYOffset;window.addEventListener("scroll",()=>{if(a.value!=null&&c.value!=null){var h=window.pageYOffset;o>h||d.value||(a.value.classList.add("backdrop-blur-sm","border","border-gray-300","mx-4","rounded-full","sm:mx-0","sm:border-0","sm:rounded-none"),c.value.classList.add("text-xl"),f.value.classList.remove("py-5"),f.value.classList.add("py-2")),h===0&&(d.value||(a.value.classList.remove("backdrop-blur-sm","border","border-gray-300","mx-4","rounded-full","sm:mx-0","sm:border-0","sm:rounded-none"),c.value.classList.remove("text-xl"),f.value.classList.add("py-5"),f.value.classList.remove("py-2"))),o=h}})}),se(()=>{}),(o,h)=>{var g,p;return A(),D("div",{class:H(["transition duration-1000",n.value?"nightwind dark":"nightwind"])},[S(I(st),{title:e.title+" - "+((g=o.$page.props.appSetting)==null?void 0:g.name)},null,8,["title"]),r("div",Gt,[S(rt)]),r("div",Ut,[S(it)]),r("div",Qt,[S(vt),r("div",{class:H(["transition duration-1000",d.value?"":"sticky sm:relative top-3 right-0 left-0 z-40 "]),ref_key:"headRef",ref:a},[S(I(Je),{as:"header",class:""},{default:E(({open:_})=>[r("div",Zt,[r("div",Jt,[r("div",{class:"py-5 flex-shrink-0 flex items-center",ref_key:"paddingRef",ref:f},[d.value?de(o.$slots,"previous",{key:0}):(A(),D("div",Yt,[r("div",Xt,[r("p",{class:"text-4xl sm:text-2xl font-bold text-gray-900 capitalize",ref_key:"titleRef",ref:c},[l.greeting?(A(),D(ne,{key:0},[el,L(" "+W(I(i)[0])+". ",1)],64)):(A(),D(ne,{key:1},[L(W(l.name)+W(l.name?".":""),1)],64))],512),r("p",tl,W(l.desc),1)])]))],512),r("div",ll,[S(Ce,{darkMode:n.value,onClick:h[0]||(h[0]=m=>n.value=!n.value)},null,8,["darkMode"]),S(I(Tt),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:E(()=>[S(ut,{align:"right",width:"48"},{trigger:E(()=>[o.$page.props.jetstream.managesProfilePhotos?(A(),D("button",al,[r("img",{class:"h-10 w-10 rounded-full object-cover",src:o.$page.props.user.profile_photo_url,alt:o.$page.props.user.name},null,8,nl)])):(A(),D("span",ol,[r("button",sl,[L(W(o.$page.props.user.name)+" ",1),rl])]))]),content:E(()=>[S(Ie,{href:o.route("profile.show")},{default:E(()=>[L(" Profil ")]),_:1},8,["href"]),il,r("form",{onSubmit:Le(t,["prevent"])},[S(Ie,{as:"button"},{default:E(()=>[L(" Keluar ")]),_:1})],32)]),_:1})]),_:1})]),r("div",ul,[r("div",dl,[r("div",cl,[r("nav",pl,[S(ie,{href:o.route("dashboard"),active:o.$page.component.startsWith("Dashboard"),icon:"fa-house",replace:""},{default:E(()=>[L(" Beranda ")]),_:1},8,["href","active"]),S(ie,{href:o.route("history.index"),active:o.$page.component.startsWith("History"),icon:"fa-files"},{default:E(()=>[L(" Riwayat ")]),_:1},8,["href","active"]),S(ie,{href:o.route("information.index"),active:o.$page.component.startsWith("Information"),icon:"fa-circle-info"},{default:E(()=>[L(" Informasi ")]),_:1},8,["href","active"]),S(ie,{href:o.route("profile.index"),active:o.$page.component.startsWith("Profile"),icon:"fa-user"},{default:E(()=>[L(" Saya ")]),_:1},8,["href","active"])])]),vl])]),fl])]),S(I(et),{as:"template",show:_},{default:E(()=>[r("div",ml,[S(I(_e),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:E(()=>[S(I(Bt),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),S(I(_e),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:E(()=>[S(I(Mt),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:E(()=>[r("div",hl,[r("div",gl,[r("div",yl,[r("div",null,[S(Ce,{darkMode:n.value,onClick:h[1]||(h[1]=m=>n.value=!n.value)},null,8,["darkMode"])]),r("div",bl,[S(I(Ft),{class:"bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:E(()=>[r("button",{class:"inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:h[2]||(h[2]=m=>s.value=!s.value)},[(A(),D("svg",xl,[r("path",{class:H({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),r("path",{class:H({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),_l]),r("div",wl,[r("div",Sl,[r("div",kl,[r("img",{class:"h-12 w-12 rounded-full object-cover",src:o.$page.props.user.profile_photo_url,alt:o.$page.props.user.name},null,8,$l)]),r("div",Pl,[r("div",El,W(o.$page.props.user.name),1),r("div",Ol,W(o.$page.props.user.email),1)])]),r("div",Tl,[S(Fe,{href:o.route("profile.show"),active:o.route().current("profile.show")},{default:E(()=>[L(" Profil ")]),_:1},8,["href","active"]),r("form",{method:"POST",onSubmit:Le(t,["prevent"])},[S(Fe,{as:"button"},{default:E(()=>[L(" Keluar ")]),_:1})],32)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:3})],2),r("main",Ll,[r("div",Cl,[r("div",Il,[r("div",Fl,[de(o.$slots,"default")])])])]),r("footer",null,[r("div",Bl,[Ml,r("div",Al,[r("span",jl,"© 2023 "+W((p=o.$page.props.appSetting)==null?void 0:p.name)+". ",1),Rl])])])]),S(qt)],2)}}};export{la as _};
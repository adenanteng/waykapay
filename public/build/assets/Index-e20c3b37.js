import{c as L,l as w,p as z,_ as F}from"./AppLayout-eb10105f.js";import{J as P,d as f,y as $,i as D,z as H,K as M,I as U,H as T,o as g,c as J,w as h,a as t,e as _,h as C,t as u,n as v,f as R,F as I,b as k,u as O}from"./app-cca8524f.js";import{_ as X}from"./MobileMenu-b2034f45.js";import{m as Y}from"./moment-c3684936.js";import{t as K,u as E,o as m,H as B,N as A,b as x}from"./use-controllable-4511d8cc.js";import{b as Q}from"./DarkmodeToggle-53e414f8.js";import"./OnlineStatus-410cdafa.js";import"./index-7538aa88.js";import"./focus-management-d97e1ec5.js";import"./_commonjs-dynamic-modules-302442b1.js";var Z=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Z||{});let W=Symbol("DisclosureContext");function j(s){let r=T(W,null);if(r===null){let d=new Error(`<${s} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,j),d}return r}let N=Symbol("DisclosurePanelContext");function ee(){return T(N,null)}let te=P({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(s,{slots:r,attrs:d}){let o=f(s.defaultOpen?0:1),a=f(null),c=f(null),l={buttonId:f(`headlessui-disclosure-button-${K()}`),panelId:f(`headlessui-disclosure-panel-${K()}`),disclosureState:o,panel:a,button:c,toggleDisclosure(){o.value=E(o.value,{[0]:1,[1]:0})},closeDisclosure(){o.value!==1&&(o.value=1)},close(e){l.closeDisclosure();let i=(()=>e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?m(e):m(l.button):m(l.button))();i==null||i.focus()}};return $(W,l),L(D(()=>E(o.value,{[0]:w.Open,[1]:w.Closed}))),()=>{let{defaultOpen:e,...i}=s,p={open:o.value===0,close:l.close};return B({theirProps:i,ourProps:{},slot:p,slots:r,attrs:d,name:"Disclosure"})}}}),ae=P({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(s,{attrs:r,slots:d,expose:o}){let a=j("DisclosureButton"),c=ee(),l=D(()=>c===null?!1:c.value===a.panelId.value);H(()=>{l.value||s.id!==null&&(a.buttonId.value=s.id)}),M(()=>{l.value||(a.buttonId.value=null)});let e=f(null);o({el:e,$el:e}),l.value||U(()=>{a.button.value=e.value});let i=Q(D(()=>({as:s.as,type:r.type})),e);function p(){var n;s.disabled||(l.value?(a.toggleDisclosure(),(n=m(a.button))==null||n.focus()):a.toggleDisclosure())}function y(n){var b;if(!s.disabled)if(l.value)switch(n.key){case x.Space:case x.Enter:n.preventDefault(),n.stopPropagation(),a.toggleDisclosure(),(b=m(a.button))==null||b.focus();break}else switch(n.key){case x.Space:case x.Enter:n.preventDefault(),n.stopPropagation(),a.toggleDisclosure();break}}function S(n){switch(n.key){case x.Space:n.preventDefault();break}}return()=>{var n;let b={open:a.disclosureState.value===0},{id:V,...q}=s,G=l.value?{ref:e,type:i.value,onClick:p,onKeydown:y}:{id:(n=a.buttonId.value)!=null?n:V,ref:e,type:i.value,"aria-expanded":a.disclosureState.value===0,"aria-controls":a.disclosureState.value===0||m(a.panel)?a.panelId.value:void 0,disabled:s.disabled?!0:void 0,onClick:p,onKeydown:y,onKeyup:S};return B({ourProps:G,theirProps:q,slot:b,attrs:r,slots:d,name:"DisclosureButton"})}}}),se=P({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(s,{attrs:r,slots:d,expose:o}){let a=j("DisclosurePanel");H(()=>{s.id!==null&&(a.panelId.value=s.id)}),M(()=>{a.panelId.value=null}),o({el:a.panel,$el:a.panel}),$(N,a.panelId);let c=z(),l=D(()=>c!==null?(c.value&w.Open)===w.Open:a.disclosureState.value===0);return()=>{var e;let i={open:a.disclosureState.value===0,close:a.close},{id:p,...y}=s,S={id:(e=a.panelId.value)!=null?e:p,ref:a.panel};return B({ourProps:S,theirProps:y,slot:i,attrs:r,slots:d,features:A.RenderStrategy|A.Static,visible:l.value,name:"DisclosurePanel"})}}});const le={role:"list",class:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},ne={class:"flex w-full items-center justify-between space-x-6 p-6"},oe={class:"flex-1 truncate"},re={class:"flex items-center space-x-3"},ie={class:"truncate text-sm font-medium text-gray-900"},de={class:"mt-1 truncate text-sm text-gray-500"},ue={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},ce={class:"flex w-0 flex-1"},pe=["href"],fe={class:"ml-3"},me={key:0,class:"-ml-px flex w-0 flex-1"},ge=["href"],ve={class:"ml-3"},xe={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},ye={class:"divide-y divide-gray-300 dark:divide-gray-600"},be={class:"text-sm font-medium text-gray-900"},he={class:"ml-6 flex items-center"},_e={class:"text-sm text-gray-500"},ke={role:"list",class:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y divide-gray-300 dark:divide-gray-600"},we={class:"flex w-full items-center justify-between space-x-6 p-6"},De={class:"flex-1"},Se={class:"flex items-center space-x-2"},Ce={class:"truncate text-sm font-medium text-gray-900"},Ie={class:"mt-1 text-sm text-gray-500"},Te={__name:"Index",props:{},setup(s){const r=Y().format("HH"),d=[{name:"Kontak Admin",title:"Online 08.30 - 22.00",role:r>=22?"Nonaktif":"Aktif",roleClass:r>=22?"text-red-800 bg-red-100":"text-green-800 bg-green-100",icon:"fa-whatsapp text-green-500",btn:"Admin 1",btn2:"Admin 2",link:"https://wa.me/6285156875180",link2:"https://wa.me/6285156875180"},{name:"Grup Whatsapp",title:"Gabung grup whatsapp",role:"Aktif",roleClass:"text-green-800 bg-green-100",icon:"fa-whatsapp text-green-500",btn:"Grup Whatsapp",link:"https://wa.me/6285156875180"}],o=[{question:"Mengalami Kendala Transaksi?",answer:"Konten belum tersedia."},{question:"Mengalami Kendala Deposit?",answer:"Konten belum tersedia."}],a=[{name:"Admin Waykapay",desc:"Semua transaksi terpantau lancar bosku.",role:"fa-circle-info",roleClass:"text-blue-700"},{name:"Admin Waykapay",desc:"Sesuai syarat dan ketentuan Waykapay tidak pernah menerima dana isi ulang atas pencairan paylater dalam bentuk apapun, maka dari itu mohon dipatuhi dan diikuti bosku.",role:"fa-megaphone",roleClass:"text-green-700"},{name:"Admin Waykapay",desc:"Hindari transaksi di jam 23:00 hingga 00:10 dikarenakan cut off & pemeliharaan sistem.",role:"fa-power-off",roleClass:"text-red-700"}];return(c,l)=>(g(),J(F,{title:"Informasi",name:"Informasi",desc:"Pusat informasi"},{default:h(()=>[t("ul",le,[(g(),_(I,null,C(d,e=>t("li",{key:e.name,class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},[t("div",ne,[t("div",oe,[t("div",re,[t("h3",ie,u(e.name),1),t("span",{class:v(["inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",e.roleClass])},u(e.role),3)]),t("p",de,u(e.title),1)]),t("i",{class:v(["fa-brands text-3xl flex-shrink-0",e.icon])},null,2)]),t("div",null,[t("div",ue,[t("div",ce,[t("a",{href:e.link,class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"},[t("span",fe,u(e.btn),1)],8,pe)]),e.btn2?(g(),_("div",me,[t("a",{href:e.link2,class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"},[t("span",ve,u(e.btn2),1)],8,ge)])):R("",!0)])])])),64))]),t("div",xe,[t("div",ye,[(g(),_(I,null,C(o,e=>k(O(te),{as:"div",key:e.question,class:""},{default:h(({open:i})=>[t("dt",null,[k(O(ae),{class:"flex w-full items-start justify-between text-left px-6 py-4"},{default:h(()=>[t("span",be,u(e.question),1),t("span",he,[t("i",{class:v(["fa-regular text-gray-900",i?"fa-minus":"fa-chevron-down"])},null,2)])]),_:2},1024)]),k(O(se),{as:"dd",class:"px-6 pt-0 pb-4"},{default:h(()=>[t("p",_e,u(e.answer),1)]),_:2},1024)]),_:2},1024)),64))])]),t("ul",ke,[(g(),_(I,null,C(a,e=>t("li",{key:e.name,class:""},[t("div",we,[t("div",De,[t("div",Se,[t("span",{class:v(["inline-block flex-shrink-0 rounded-full text-sm font-medium",e.roleClass])},[t("i",{class:v(["fa-regular w-4",e.role])},null,2)],2),t("h3",Ce,u(e.name),1)]),t("p",Ie,u(e.desc),1)])])])),64))]),k(X)]),_:1}))}};export{Te as default};
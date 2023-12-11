import{d,i as m,B as u,o as i,e as r,a as e,r as a,t as x,C as f,f as h,n as v,Q as p}from"./app.3b3435f0.js";const w={class:"min-h-screen flex bg-white bg-glass bg-fixed"},k={class:"min-h-screen flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},b={class:"mx-auto w-full max-w-sm lg:w-96 py-10"},y=e("h2",{class:"mt-6 text-3xl font-extrabold text-gray-900"},"Selamat Datang",-1),S={class:"mt-2 text-sm text-gray-600"},$={class:"mt-8"},C={class:"mb-5"},j={key:0,class:"bg-red-700 rounded-3xl"},B={class:"max-w-screen-xl mx-auto py-3 px-3"},M={class:"flex items-center justify-between flex-wrap"},L={class:"w-0 flex-1 flex items-center min-w-0"},N=e("span",{class:"flex bg-red-600 p-2 rounded-3xl"},[e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),z={class:"ml-3 font-medium text-sm text-white"},A={class:"shrink-0 sm:ml-3 p-2"},D=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),I=[D],J=e("div",{class:"hidden lg:block relative w-0 flex-1"},[e("img",{class:"absolute inset-0 h-full w-full object-cover",src:"/img/minion.jpg",alt:""})],-1),E={__name:"AuthenticationCard",props:{darkMode:Boolean},setup(_){var c;const t=d(!0);m(()=>{var s;return((s=p().props.jetstream.flash)==null?void 0:s.bannerStyle)||"success"});const o=m(()=>{var s;return((s=p().props.jetstream.flash)==null?void 0:s.banner)||""});u(o,async()=>{t.value=!0});const l=d((c=JSON.parse(localStorage.getItem("darkmode")))!=null?c:!1);return u(l,s=>{console.log(`darkmode is ${s}`),localStorage.setItem("darkmode",JSON.stringify(s))}),(s,n)=>(i(),r("div",{class:v(["",l.value?"nightwind dark":"nightwind"])},[e("div",w,[e("div",k,[e("div",b,[e("div",null,[e("button",{onClick:n[0]||(n[0]=g=>l.value=!l.value)},[a(s.$slots,"logo")]),y,e("p",S,[a(s.$slots,"title")])]),e("div",$,[e("div",C,[t.value&&o.value?(i(),r("div",j,[e("div",B,[e("div",M,[e("div",L,[N,e("p",z,x(o.value),1)]),e("div",A,[e("button",{type:"button",class:"-mr-1 flex p-2 hover:bg-red-600 focus:bg-red-600 rounded-3xl focus:outline-none sm:-mr-2 transition","aria-label":"Dismiss",onClick:n[1]||(n[1]=f(g=>t.value=!1,["prevent"]))},I)])])])])):h("",!0)]),a(s.$slots,"default")])])]),J])],2))}},O=["src"],Q={__name:"AuthenticationCardLogo",setup(_){return(t,o)=>t.$page.props.appSetting!=null?(i(),r("img",{key:0,src:t.$page.props.appSetting.media[0].original_url,class:"h-20 w-auto"},null,8,O)):h("",!0)}};export{E as _,Q as a};

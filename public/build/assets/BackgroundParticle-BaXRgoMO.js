import{S as u,U as p,k as e,o as v,e as h,a as m,s as f,u as i,V as x}from"./app-CaR_YMvJ.js";const g={class:"absolute inset-0 overflow-hidden"},_=x('<div class="fixed inset-0 -z-10 transform-gpu" aria-hidden="true"><svg viewBox="0 0 1024 1024" class="absolute -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="#0284c7" fill-opacity="0.7"></circle><defs><radialGradient id="759c1415-0410-454c-8f7c-9a820de03641"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg></div>',1),z={__name:"BackgroundParticle",setup(y){const{x:t,y:s}=u(),{width:r,height:n}=p(),l=e(()=>Math.abs(t.value-r.value/2)),o=e(()=>Math.abs(s.value-n.value/2)),c=e(()=>Math.sqrt(l.value*l.value+o.value*o.value)),a=e(()=>Math.max(160-c.value/3,100)),d=e(()=>Math.min(Math.max(a.value/300,.7),1));return(w,b)=>(v(),h("div",g,[m("div",{class:"absolute bg-primary-400 -z-10 rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-2xl",style:f({opacity:d.value,left:`${i(t)}px`,top:`${i(s)}px`,width:`${a.value}px`,height:`${a.value}px`})},null,4),_]))}};export{z as _};

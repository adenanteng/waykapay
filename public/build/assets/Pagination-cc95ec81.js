import{o as i,e as d,a as t,g as a,t as e,b as c,w as r,u as o,m as l,F as p,h as _,c as g,n as f}from"./app-dfbf0605.js";const h={class:"px-4 py-0 flex items-center justify-between sm:px-6"},u={class:"grid w-full sm:hidden"},x={class:"mb-3 text-center"},b={class:"text-sm text-gray-700"},y={class:"font-medium"},v={class:"font-medium"},w={class:"font-medium"},j={class:"flex justify-between"},k={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},B={class:"text-sm text-gray-700"},M={class:"font-medium"},N={class:"font-medium"},z={class:"font-medium"},L={class:"relative z-0 inline-flex -space-x-px","aria-label":"Pagination"},P=["innerHTML"],F={__name:"Pagination",props:{pagination:Object},setup(m){const s=m;return(T,V)=>(i(),d("div",h,[t("div",u,[t("div",x,[t("p",b,[a(" Menampilkan "+e(" ")+" "),t("span",y,e(s.pagination.from),1),a(" "+e(" ")+" sampai "+e(" ")+" "),t("span",v,e(s.pagination.to),1),a(" "+e(" ")+" dari "+e(" ")+" "),t("span",w,e(s.pagination.total),1),a(" "+e(" ")+" hasil ")])]),t("div",j,[c(o(l),{replace:"",href:s.pagination.prev_page_url??"",class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"},{default:r(()=>[a(" Previous ")]),_:1},8,["href"]),c(o(l),{replace:"",href:s.pagination.next_page_url??"",class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"},{default:r(()=>[a(" Next ")]),_:1},8,["href"])])]),t("div",k,[t("div",null,[t("p",B,[a(" Menampilkan "+e(" ")+" "),t("span",M,e(s.pagination.from),1),a(" "+e(" ")+" sampai "+e(" ")+" "),t("span",N,e(s.pagination.to),1),a(" "+e(" ")+" dari "+e(" ")+" "),t("span",z,e(s.pagination.total),1),a(" "+e(" ")+" hasil ")])]),t("div",null,[t("nav",L,[(i(!0),d(p,null,_(s.pagination.links,n=>(i(),g(o(l),{replace:"",href:n.url??"",class:f(["relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full shadow-lg",n.active?"z-10 bg-primary-50 border-primary-500 text-primary-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 "])},{default:r(()=>[t("span",{innerHTML:n.label},null,8,P)]),_:2},1032,["href","class"]))),256))])])])]))}};export{F as _};
import{_ as p}from"./AppLayout.e85a7a0b.js";import{c as x,w as a,o as u,b as r,a as t,t as e,g}from"./app.f04e0c07.js";import{_ as f}from"./MobileMenu.bcfdb331.js";import{_ as y}from"./PrimaryButton.0a12fa21.js";import{h as c}from"./moment.9709ab41.js";import{_ as v}from"./PreviousButton.995476d5.js";import"./DarkmodeToggle.30a1b91b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},k=t("div",{class:"px-4 py-5 sm:px-6"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Detail Transaksi"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Personal details and application.")],-1),w={class:"border-t border-gray-200 px-4 py-5 sm:px-6"},D={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},B={class:"sm:col-span-1"},S=t("dt",{class:"text-sm font-medium text-gray-500"},"Waktu Transaksi",-1),T={class:"mt-1 text-sm text-gray-900"},$={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},j={class:"text-gray-900 ml-2"},C={class:"sm:col-span-1"},H=t("dt",{class:"text-sm font-medium text-gray-500"},"Kategori",-1),M={class:"mt-1 text-sm text-gray-900"},N={class:"sm:col-span-1"},P=t("dt",{class:"text-sm font-medium text-gray-500"},"Status",-1),V={class:"mt-1 text-sm text-gray-900"},K={class:"sm:col-span-1"},O=t("dt",{class:"text-sm font-medium text-gray-500"},"Total Bayar",-1),E={class:"mt-1 text-sm text-gray-900"},F={class:"sm:col-span-1"},I=t("dt",{class:"text-sm font-medium text-gray-500"},"Id",-1),R={class:"mt-1 text-sm text-gray-900"},W={class:"sm:col-span-2"},Y=t("dt",{class:"text-sm font-medium text-gray-500"},"Keterangan",-1),q={class:"mt-1 text-sm text-gray-900"},z=["href"],tt={__name:"Show",props:{users:Object,history:Object},setup(n){const o=n,d=()=>{snap.pay(o.history.token,{onSuccess:function(s){console.log("success")},onPending:function(s){console.log("pending")},onError:function(s){console.log("error")},onClose:function(){console.log("customer closed the popup without finishing the payment")}})};function m(s){return c(s).format("DD MMM Y")}function l(s){return c(s).format("HH:mm")}function _(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(s,h)=>(u(),x(p,{title:"Deposit",name:"Deposit",desc:"lorem ipsum dolor sit"},{previous:a(()=>[r(v,{href:s.route("history.index")},null,8,["href"])]),default:a(()=>{var i;return[t("div",b,[k,t("div",w,[t("dl",D,[t("div",B,[S,t("dd",T,[t("div",$,[t("p",null,e(m(o.history.created_at)),1),t("p",j,e(l(o.history.created_at)),1)])])]),t("div",C,[H,t("dd",M,e(o.history.category),1)]),t("div",N,[P,t("dd",V,e(o.history.status),1)]),t("div",K,[O,t("dd",E,"Rp "+e(_(o.history.amount)),1)]),t("div",F,[I,t("dd",R,e(o.history.order_id),1)]),t("div",W,[Y,t("dd",q,e((i=o.history.desc)!=null?i:"-"),1)])]),t("a",{href:o.history.redirect_url}," jangan di klik ",8,z),r(y,{onClick:d},{default:a(()=>[g(" Haaha ")]),_:1})])]),r(f)]}),_:1}))}};export{tt as default};

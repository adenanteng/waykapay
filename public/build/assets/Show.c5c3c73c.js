import{_ as p}from"./AppLayout.f2796c91.js";import{c as x,w as a,o as u,b as i,a as t,t as e,g}from"./app.1710f2ff.js";import{_ as f}from"./PrimaryButton.52aef3c8.js";import{h as c}from"./moment.9709ab41.js";import{_ as y}from"./PreviousButton.e3e86b5e.js";import"./DarkmodeToggle.a8d7ca49.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.4c5a3124.js";import"./label.b1955abb.js";import"./focus-management.5a63cc4e.js";const v={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},b=t("div",{class:"px-4 py-5 sm:px-6"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Detail Transaksi"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Personal details and application.")],-1),k={class:"border-t border-gray-200 px-4 py-5 sm:px-6"},w={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},D={class:"sm:col-span-1"},B=t("dt",{class:"text-sm font-medium text-gray-500"},"Waktu Transaksi",-1),S={class:"mt-1 text-sm text-gray-900"},T={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},j={class:"text-gray-900 ml-2"},C={class:"sm:col-span-1"},H=t("dt",{class:"text-sm font-medium text-gray-500"},"Kategori",-1),M={class:"mt-1 text-sm text-gray-900"},N={class:"sm:col-span-1"},P=t("dt",{class:"text-sm font-medium text-gray-500"},"Status",-1),V={class:"mt-1 text-sm text-gray-900"},$={class:"sm:col-span-1"},K=t("dt",{class:"text-sm font-medium text-gray-500"},"Total Bayar",-1),O={class:"mt-1 text-sm text-gray-900"},E={class:"sm:col-span-1"},F=t("dt",{class:"text-sm font-medium text-gray-500"},"Id",-1),I={class:"mt-1 text-sm text-gray-900"},R={class:"sm:col-span-2"},W=t("dt",{class:"text-sm font-medium text-gray-500"},"Keterangan",-1),Y={class:"mt-1 text-sm text-gray-900"},q=["href"],st={__name:"Show",props:{users:Object,history:Object},setup(n){const o=n,d=()=>{snap.pay(o.history.token,{onSuccess:function(s){console.log("success")},onPending:function(s){console.log("pending")},onError:function(s){console.log("error")},onClose:function(){console.log("customer closed the popup without finishing the payment")}})};function m(s){return c(s).format("DD MMM Y")}function l(s){return c(s).format("HH:mm")}function _(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(s,h)=>(u(),x(p,{title:"Deposit",name:"Deposit",desc:"lorem ipsum dolor sit"},{previous:a(()=>[i(y,{href:s.route("history.index")},null,8,["href"])]),default:a(()=>{var r;return[t("div",v,[b,t("div",k,[t("dl",w,[t("div",D,[B,t("dd",S,[t("div",T,[t("p",null,e(m(o.history.created_at)),1),t("p",j,e(l(o.history.created_at)),1)])])]),t("div",C,[H,t("dd",M,e(o.history.category),1)]),t("div",N,[P,t("dd",V,e(o.history.status),1)]),t("div",$,[K,t("dd",O,"Rp "+e(_(o.history.amount)),1)]),t("div",E,[F,t("dd",I,e(o.history.order_id),1)]),t("div",R,[W,t("dd",Y,e((r=o.history.desc)!=null?r:"-"),1)])]),t("a",{href:o.history.redirect_url}," jangan di klik ",8,q),i(f,{onClick:d},{default:a(()=>[g(" Haaha ")]),_:1})])])]}),_:1}))}};export{st as default};
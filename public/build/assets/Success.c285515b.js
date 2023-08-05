import{v as x,c as f,w as c,o as u,a as t,b as i,t as e,g as h}from"./app.663ef1ad.js";import"./helper.3128119a.js";import{h as d}from"./moment.9709ab41.js";import{_ as p,A as y}from"./ApplicationLogo.938189bc.js";import{_ as g}from"./PrimaryButton.fba7db17.js";import{_ as v}from"./Badge.d97e0619.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"pt-16 pb-12"},w={class:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"},j={class:"flex flex-shrink-0 justify-center"},k={class:"py-16"},B={class:"text-center"},T=t("h1",{class:"mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"},"Transaksi Berhasil",-1),S={class:"grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-1 mt-5"},D={class:"sm:col-span-1 flex justify-between"},N=t("div",{class:"text-sm font-medium text-gray-500"},"Waktu Transaksi",-1),A={class:"text-sm text-gray-900"},K={class:"flex items-center text-sm text-gray-500 sm:mt-0"},M={class:"text-gray-900 ml-2"},R={class:"sm:col-span-1 flex justify-between"},V=t("div",{class:"text-sm font-medium text-gray-500"},"Id Transaksi",-1),$={class:"text-sm text-gray-900"},H={class:"sm:col-span-1 flex justify-between"},P=t("div",{class:"text-sm font-medium text-gray-500"},"Produk",-1),C={class:"text-sm text-gray-900"},F={class:"sm:col-span-1 flex justify-between"},I=t("div",{class:"text-sm font-medium text-gray-500"},"No. Kustomer",-1),L={class:"text-sm text-gray-900"},O={class:"sm:col-span-1 flex justify-between"},W=t("div",{class:"text-sm font-medium text-gray-500"},"Status",-1),Y={class:"text-sm text-gray-900"},q={class:"sm:col-span-1 flex justify-between"},z=t("div",{class:"text-sm font-medium text-gray-500"},"Bayar",-1),E={class:"text-sm text-gray-900"},G={class:"sm:col-span-1 flex justify-between"},J=t("div",{class:"text-sm font-medium text-gray-500"},"Biaya Admin",-1),Q={class:"text-sm text-gray-900"},U={class:"sm:col-span-1 flex justify-between"},X=t("div",{class:"text-sm font-medium text-gray-500"},"Total Bayar",-1),Z={class:"text-sm text-gray-900"},tt={class:"sm:col-span-1 flex justify-between"},st=t("div",{class:"text-sm font-medium text-gray-500"},"Ket",-1),et={class:"text-sm text-gray-900"},at={class:"mt-6 space-x-2"},mt={__name:"Success",props:{transaction:Object},setup(r){const s=r;x({transaction:s.transaction});function _(a){return d(a).format("DD MMM Y")}function m(a){return d(a).format("HH:mm")}function o(a){return(a/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(a,l)=>(u(),f(p,{title:"Sukses"},{default:c(()=>{var n;return[t("div",b,[t("main",w,[t("div",j,[i(y)]),t("div",k,[t("div",B,[T,t("div",S,[t("div",D,[N,t("div",A,[t("div",K,[t("p",null,e(_(s.transaction.created_at)),1),t("p",M,e(m(s.transaction.created_at)),1)])])]),t("div",R,[V,t("div",$,e(s.transaction.order_id),1)]),t("div",H,[P,t("div",C,e(s.transaction.product_name),1)]),t("div",F,[I,t("div",L,e(s.transaction.customer_no),1)]),t("div",O,[W,t("div",Y,[i(v,{name:s.transaction.status},null,8,["name"])])]),t("div",q,[z,t("div",E,"Rp "+e(s.transaction.category_id==1?o(s.transaction.amount):o(s.transaction.gross_amount)),1)]),t("div",G,[J,t("div",Q,"Rp "+e(s.transaction.category_id==1?o(s.transaction.admin_fee):"0"),1)]),t("div",U,[X,t("div",Z,"Rp "+e(o(s.transaction.gross_amount)),1)]),t("div",tt,[st,t("div",et,e((n=s.transaction.desc)!=null?n:"-"),1)])]),t("div",at,[i(g,{as:"a",href:a.route("dashboard")},{default:c(()=>[h(" Ke Beranda ")]),_:1},8,["href"])])])])])])]}),_:1}))}};export{mt as default};

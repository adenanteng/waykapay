import{_ as p}from"./AppLayout.a768e582.js";import{c as d,w as r,o as n,a as e,t as c,b as a,g as m,u as s,j as o}from"./app.82a5fe9c.js";import{_ as g}from"./MobileMenu.33c61303.js";import{_ as u}from"./PrimaryButton.ad9f27bd.js";import"./moment.9709ab41.js";import"./DarkmodeToggle.f13f4744.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.5a88271d.js";import"./label.3b10e134.js";import"./focus-management.70d00f05.js";const _={class:"rounded-3xl bg-gradient-to-bl from-primary-50 to-primary-300 bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg nightwind-prevent-block"},h={class:"py-4 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between"},f={class:"tracking-tight"},x=e("span",{class:"block text-sm font-medium text-gray-600"},"Saldo Rekening",-1),b={class:"block text-xl font-extrabold text-primary-600"},y={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},v=e("i",{class:"fa-regular fa-coins mr-1"},null,-1),k={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},w={class:"p-6"},$={class:"grid grid-cols-3 gap-x-6 gap-y-10 xl:grid-cols-4 xl:gap-x-8"},B=e("i",{class:"fa-duotone fa-mobile text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),j=e("h3",{class:"mt-4 text-sm text-gray-700"},"Pulsa & Data",-1),D=e("i",{class:"fa-duotone fa-lightbulb text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),S=e("h3",{class:"mt-4 text-sm text-gray-700"},"Listrik",-1),N=e("i",{class:"fa-duotone fa-gamepad-modern text-4xl text-primary-600 group-hover:text-primary-800"},null,-1),V=e("h3",{class:"mt-4 text-sm text-gray-700"},"Games",-1),E={__name:"Dashboard",props:{users:Object,history:Object},setup(O){function l(t){return(t/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(t,i)=>(n(),d(p,{title:"Beranda",greeting:"Selamat datang kembali,",name:t.$page.props.user.name,desc:t.$page.props.user.email,avatar:t.$page.props.user.profile_photo_url},{default:r(()=>[e("div",_,[e("div",h,[e("h2",f,[x,e("span",b," Rp "+c(l(t.$page.props.user.wallet_balance)),1)]),e("div",y,[a(u,{as:"a",href:t.route("deposit.index")},{default:r(()=>[v,m(" Deposit ")]),_:1},8,["href"])])])]),e("div",k,[e("div",w,[e("div",$,[a(s(o),{href:t.route("product.pulsa"),class:"group text-center"},{default:r(()=>[B,j]),_:1},8,["href"]),a(s(o),{href:t.route("product.pln"),class:"group text-center"},{default:r(()=>[D,S]),_:1},8,["href"]),a(s(o),{href:t.route("product.games"),class:"group text-center"},{default:r(()=>[N,V]),_:1},8,["href"])])])]),a(g)]),_:1},8,["name","desc","avatar"]))}};export{E as default};

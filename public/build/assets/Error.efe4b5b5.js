import{v as f,c as o,w as e,o as r,a as t,b as c,g as n,f as m}from"./app.4a2ac90e.js";import"./helper.9832f3f8.js";import"./moment.9709ab41.js";import{_ as p,A as u}from"./ApplicationLogo.62f16916.js";import{_ as i}from"./PrimaryButton.604058db.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x={class:"pt-16 pb-12"},h={class:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"},g={class:"flex flex-shrink-0 justify-center"},k={class:"py-16"},v={class:"text-center"},b=t("h1",{class:"mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"},"Transaksi Gagal",-1),y={class:"mt-6 space-x-2"},A={__name:"Error",props:{transaction:Object},setup(l){const s=l,a=f({transaction:s.transaction}),_=()=>{a.put(route("product.status",a),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{}})};return(d,w)=>(r(),o(p,{title:"Pending"},{default:e(()=>[t("div",x,[t("main",h,[t("div",g,[c(u)]),t("div",k,[t("div",v,[b,t("div",y,[c(i,{as:"a",href:d.route("dashboard")},{default:e(()=>[n(" Kembali ke Beranda ")]),_:1},8,["href"]),s.transaction.category_id!=1?(r(),o(i,{key:0,onClick:_},{default:e(()=>[n(" Cek Status ")]),_:1})):m("",!0)])])])])])]),_:1}))}};export{A as default};

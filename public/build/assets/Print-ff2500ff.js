import{h as k}from"./moment-fbc5633a.js";import{z as w,o,c as j,w as f,a as s,b,t as e,e as i,f as a,F as p,u as x,D as N}from"./app-5be67cd2.js";import{e as B}from"./popper.esm-b0da52fe.js";import{_ as T}from"./PrintLayout-236fdf20.js";import{A as C}from"./ApplicationLogoTitle-37037456.js";import"./_plugin-vue_export-helper-c27b6911.js";const D={class:"border border-gray-300 my-5"},K={class:"px-4 py-5 flex flex-col justify-center items-center"},S=s("h3",{class:"mt-1 text-lg font-bold leading-6 text-gray-900"},"Transaksi Berhasil",-1),M={class:"border-t border-gray-600 border-dashed px-4 py-5"},P={class:"grid grid-cols-1 gap-x-4 gap-y-2 text-gray-900"},R={class:"flex justify-between"},A=s("div",{class:"text-sm"},"Tanggal",-1),V={class:"text-sm font-semibold"},F={class:"flex justify-between"},L=s("div",{class:"text-sm"},"Kode Referensi",-1),H={class:"text-sm font-semibold"},J=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),O={key:0,class:"flex justify-between"},W=s("div",{class:"text-sm"},"Kategori",-1),$={class:"text-sm font-semibold"},z={key:1,class:"flex justify-between"},E=s("div",{class:"text-sm"},"Sumber Dana",-1),Y={key:0,class:"text-sm font-semibold uppercase"},q={key:1,class:"text-sm font-semibold uppercase"},G={key:2,class:"text-sm font-semibold uppercase"},I={class:"flex justify-between"},Q=s("div",{class:"text-sm"},"Jenis Transaksi",-1),U={class:"text-sm font-semibold uppercase"},X={class:"flex justify-between"},Z=s("div",{class:"text-sm"},"Bank Tujuan",-1),ss={class:"text-sm font-semibold uppercase"},ts={class:"flex justify-between"},es=s("div",{class:"text-sm"},"Nama Tujuan",-1),os={class:"text-sm font-semibold uppercase"},is={class:"flex justify-between"},as=s("div",{class:"text-sm"},"No. Rekening Tujuan",-1),ds={class:"text-sm font-semibold uppercase"},rs={key:3,class:"flex justify-between"},ns=s("div",{class:"text-sm"},"Produk",-1),cs={class:"text-sm font-semibold uppercase"},_s={key:4,class:"flex justify-between"},ls=s("div",{class:"text-sm"},"No. Kustomer",-1),ms={class:"text-sm font-semibold"},hs={class:"flex justify-between"},ys=s("div",{class:"text-sm"},"Nama Kustomer",-1),us={class:"text-sm font-semibold"},fs={class:"flex justify-between"},bs=s("div",{class:"text-sm"},"Stroom",-1),ps={class:"text-sm font-bold"},xs={key:6,class:"flex justify-between gap-5"},vs=s("div",{class:"text-sm"},"Keterangan",-1),gs={class:"text-sm font-semibold text-right"},ks=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),ws={class:"flex justify-between"},js=s("div",{class:"text-sm"},"Nominal",-1),Ns={class:"text-sm font-semibold"},Bs={class:"flex justify-between"},Ts=s("div",{class:"text-sm"},"Biaya Admin",-1),Cs={class:"text-sm font-semibold"},Ds=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),Ks={class:"flex justify-between"},Ss=s("div",{class:"text-sm font-bold"},"Total",-1),Ms={class:"text-sm font-bold"},Ps=s("div",{class:"border-t border-gray-600 border-dashed px-4 py-5 text-xs text-gray-500"},[s("p",null,"CV Cahaya Matahari Dunia"),s("p",null,"NPWP: 50.079.228.8-326.000"),s("p",null,"Jl. Lintas Sumatera, Baradatu, Way Kanan, Lampung - 34761")],-1),Os={__name:"Print",props:{users:Object,history:Object},setup(v){const t=v;w(()=>{window.print()});function g(r){return k(r).format("DD MMM Y HH:mm")}function d(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(r,n)=>(o(),j(T,{title:t.history.product_name,name:t.history.product_name,desc:"lorem ipsum dolor sit"},{default:f(()=>{var c,_,l,m,h,y,u;return[s("div",D,[s("div",K,[b(C),S]),s("div",M,[s("div",P,[s("div",R,[A,s("div",V,e(g(t.history.updated_at)),1)]),s("div",F,[L,s("div",H,e(t.history.order_id),1)]),J,t.history.category_id==1?(o(),i("div",O,[W,s("div",$,e(t.history.category),1)])):a("",!0),t.history.category_id==1?(o(),i("div",z,[E,t.history.virtual_account?(o(),i("div",Y,e(t.history.virtual_account.bank),1)):a("",!0),t.history.wallet_account?(o(),i("div",q,e(t.history.wallet_account.bank),1)):a("",!0),t.history.offline_account?(o(),i("div",G,e(t.history.offline_account.bank),1)):a("",!0)])):a("",!0),t.history.category_id==99?(o(),i(p,{key:2},[s("div",I,[Q,s("div",U,e(t.history.product_name),1)]),s("div",X,[Z,s("div",ss,e((c=t.history.money_transfer)==null?void 0:c.bank),1)]),s("div",ts,[es,s("div",os,e((l=(_=t.history.money_transfer)==null?void 0:_.to)==null?void 0:l.name),1)]),s("div",is,[as,s("div",ds,e((h=(m=t.history.money_transfer)==null?void 0:m.to)==null?void 0:h.phone),1)])],64)):a("",!0),t.history.category_id!=99&&t.history.category_id!=1?(o(),i("div",rs,[ns,s("div",cs,e(t.history.product_name),1)])):a("",!0),t.history.category_id!=99&&t.history.category_id!=1?(o(),i("div",_s,[ls,s("div",ms,e(t.history.customer_no),1)])):a("",!0),t.history.category_id==5?(o(),i(p,{key:5},[s("div",hs,[ys,s("div",us,e(t.history.desc.split("/")[1]),1)]),s("div",fs,[bs,s("div",ps,[b(x(B),{content:"Sukses Copy",arrow:"",placement:"right-end"},{default:f(()=>[s("button",{onClick:n[0]||(n[0]=Rs=>x(N)(t.history.desc.split("/")[0])),class:""},e(t.history.desc.split("/")[0]),1)]),_:1})])])],64)):(o(),i("div",xs,[vs,s("div",gs,e(((u=(y=t.history)==null?void 0:y.desc)==null?void 0:u.replaceAll("/"," "))??"-"),1)])),ks,s("div",ws,[js,s("div",Ns," Rp "+e(t.history.category_id==1||t.history.category_id>=8?d(Number(t.history.amount)+Number(t.history.agent_commission)):d(Number(t.history.gross_amount)+Number(t.history.agent_commission))),1)]),s("div",Bs,[Ts,s("div",Cs," Rp "+e(t.history.category_id==1||t.history.category_id>=8?d(t.history.admin_fee):"0"),1)]),Ds,s("div",Ks,[Ss,s("div",Ms,"Rp "+e(d(Number(t.history.gross_amount)+Number(t.history.agent_commission))),1)])])]),Ps])]}),_:1},8,["title","name"]))}};export{Os as default};

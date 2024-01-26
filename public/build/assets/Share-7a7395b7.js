import{d as n,z as w,o,c as j,w as b,a as s,b as x,t as e,e as i,f as a,F as p,u as v,E as N}from"./app-61f03d6b.js";import"./helper-04030b53.js";import{c as B}from"./index-de252311.js";import{h as S}from"./moment-fbc5633a.js";import{e as T}from"./popper.esm-1804335f.js";import{A as C}from"./ApplicationLogoTitle-acd16358.js";import{_ as D}from"./PrintLayout-14fedf12.js";import"./_plugin-vue_export-helper-c27b6911.js";const K={class:"min-h-screen flex justify-center items-center py-5"},R={class:"bg-white overflow-hidden border border-gray-300"},M={class:"px-4 py-5 flex flex-col justify-center items-center"},A=s("h3",{class:"mt-1 text-lg font-bold leading-6 text-gray-900"},"Transaksi Berhasil",-1),L={class:"border-t border-gray-600 border-dashed px-4 py-5"},P={class:"grid grid-cols-1 gap-x-4 gap-y-2 text-gray-900"},V={class:"flex justify-between"},F=s("div",{class:"text-sm"},"Tanggal",-1),E={class:"text-sm font-semibold"},H={class:"flex justify-between"},J=s("div",{class:"text-sm"},"Kode Referensi",-1),W={class:"text-sm font-semibold"},$=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),z={key:0,class:"flex justify-between"},O=s("div",{class:"text-sm"},"Kategori",-1),Y={class:"text-sm font-semibold"},q={key:1,class:"flex justify-between"},G=s("div",{class:"text-sm"},"Sumber Dana",-1),I={key:0,class:"text-sm font-semibold uppercase"},Q={key:1,class:"text-sm font-semibold uppercase"},U={key:2,class:"text-sm font-semibold uppercase"},X={class:"flex justify-between"},Z=s("div",{class:"text-sm"},"Jenis Transaksi",-1),ss={class:"text-sm font-semibold uppercase"},ts={class:"flex justify-between"},es=s("div",{class:"text-sm"},"Bank Tujuan",-1),os={class:"text-sm font-semibold uppercase"},is={class:"flex justify-between"},as=s("div",{class:"text-sm"},"Nama Tujuan",-1),ds={class:"text-sm font-semibold uppercase"},rs={class:"flex justify-between"},ns=s("div",{class:"text-sm"},"No. Rekening Tujuan",-1),cs={class:"text-sm font-semibold uppercase"},ls={key:3,class:"flex justify-between"},_s=s("div",{class:"text-sm"},"Produk",-1),ms={class:"text-sm font-semibold uppercase"},hs={key:4,class:"flex justify-between"},ys=s("div",{class:"text-sm"},"No. Kustomer",-1),us={class:"text-sm font-semibold"},fs={class:"flex justify-between"},bs=s("div",{class:"text-sm"},"Nama Kustomer",-1),xs={class:"text-sm font-semibold"},ps={class:"block justify-between"},vs=s("div",{class:"text-sm"},"Stroom",-1),gs={class:"text-sm mt-2 font-bold text-center"},ks={key:6,class:"block justify-between"},ws=s("div",{class:"text-sm"},"Keterangan",-1),js={class:"text-sm mt-2 font-semibold text-center"},Ns=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),Bs={class:"flex justify-between"},Ss=s("div",{class:"text-sm"},"Nominal",-1),Ts={class:"text-sm font-semibold"},Cs={class:"flex justify-between"},Ds=s("div",{class:"text-sm"},"Biaya Admin",-1),Ks={class:"text-sm font-semibold"},Rs={key:7,class:"flex justify-between"},Ms=s("div",{class:"text-sm"},"Biaya Layanan",-1),As={class:"text-sm font-semibold"},Ls=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),Ps={class:"flex justify-between"},Vs=s("div",{class:"text-sm font-bold"},"Total",-1),Fs={class:"text-sm font-bold"},Es=s("div",{class:"border-t border-gray-600 border-dashed px-4 py-5 text-xs text-gray-500"},[s("p",null,"CV Cahaya Matahari Dunia"),s("p",null,"NPWP: 50.079.228.8-326.000"),s("p",null,"Jl. Lintas Sumatera, Baradatu, Way Kanan, Lampung - 34761")],-1),Is={__name:"Share",props:{history:Object},setup(g){const t=g;B(),n(null),w(()=>{}),n(null),n(null),n(null);function k(r){return S(r).format("DD MMM Y HH:mm")}function d(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(r,c)=>(o(),j(D,{title:t.history.product_name,name:t.history.product_name,desc:"lorem ipsum dolor sit"},{default:b(()=>{var l,_,m,h,y,u,f;return[s("div",K,[s("div",R,[s("div",M,[x(C),A]),s("div",L,[s("div",P,[s("div",V,[F,s("div",E,e(k(t.history.updated_at)),1)]),s("div",H,[J,s("div",W,e(t.history.order_id),1)]),$,t.history.category_id==1?(o(),i("div",z,[O,s("div",Y,e(t.history.category),1)])):a("",!0),t.history.category_id==1?(o(),i("div",q,[G,t.history.virtual_account?(o(),i("div",I,e(t.history.virtual_account.bank),1)):a("",!0),t.history.wallet_account?(o(),i("div",Q,e(t.history.wallet_account.bank),1)):a("",!0),t.history.offline_account?(o(),i("div",U,e(t.history.offline_account.bank),1)):a("",!0)])):a("",!0),t.history.category_id==99?(o(),i(p,{key:2},[s("div",X,[Z,s("div",ss,e(t.history.product_name),1)]),s("div",ts,[es,s("div",os,e((l=t.history.money_transfer)==null?void 0:l.bank),1)]),s("div",is,[as,s("div",ds,e((m=(_=t.history.money_transfer)==null?void 0:_.to)==null?void 0:m.name),1)]),s("div",rs,[ns,s("div",cs,e((y=(h=t.history.money_transfer)==null?void 0:h.to)==null?void 0:y.phone),1)])],64)):a("",!0),t.history.category_id!=99&&t.history.category_id!=1?(o(),i("div",ls,[_s,s("div",ms,e(t.history.product_name),1)])):a("",!0),t.history.category_id!=99&&t.history.category_id!=1?(o(),i("div",hs,[ys,s("div",us,e(t.history.customer_no),1)])):a("",!0),t.history.category_id==5?(o(),i(p,{key:5},[s("div",fs,[bs,s("div",xs,e(t.history.desc.split("/")[1]),1)]),s("div",ps,[vs,s("div",gs,[x(v(T),{content:"Sukses Copy",arrow:"",placement:"right-end"},{default:b(()=>[s("button",{onClick:c[0]||(c[0]=Hs=>v(N)(t.history.desc.split("/")[0])),class:"text-lg"},e(t.history.desc.split("/")[0]),1)]),_:1})])])],64)):(o(),i("div",ks,[ws,s("div",js,e(((f=(u=t.history)==null?void 0:u.desc)==null?void 0:f.replaceAll("/"," "))??"-"),1)])),Ns,s("div",Bs,[Ss,s("div",Ts," Rp "+e(t.history.category_id==1||t.history.category_id>=8?d(Number(t.history.amount)+Number(t.history.agent_commission)):d(Number(t.history.gross_amount)+Number(t.history.agent_commission))),1)]),s("div",Cs,[Ds,s("div",Ks," Rp "+e(t.history.category_id==1||t.history.category_id>=8?d(t.history.admin_fee):"0"),1)]),t.history.service_fee!=0?(o(),i("div",Rs,[Ms,s("div",As," Rp "+e(d(t.history.service_fee)),1)])):a("",!0),Ls,s("div",Ps,[Vs,s("div",Fs,"Rp "+e(d(Number(t.history.gross_amount)+Number(t.history.agent_commission))),1)])])]),Es])])]}),_:1},8,["title","name"]))}};export{Is as default};
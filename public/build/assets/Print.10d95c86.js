import{h as g}from"./moment.9709ab41.js";import{q as k,c as w,w as u,o,a as s,b as f,t as e,e as i,f as a,F as b,u as p,X as j}from"./app.07510105.js";import{e as N}from"./popper.esm.6dc6690c.js";import{_ as B}from"./PrintLayout.b74340e7.js";import{A as C}from"./ApplicationLogoTitle.5b20cc37.js";import"./_plugin-vue_export-helper.cdc0426e.js";const T={class:"border border-gray-300 my-5"},D={class:"px-4 py-5 flex flex-col justify-center items-center"},K=s("h3",{class:"mt-1 text-lg font-bold leading-6 text-gray-900"},"Transaksi Berhasil",-1),S={class:"border-t border-gray-600 border-dashed px-4 py-5"},M={class:"grid grid-cols-1 gap-x-4 gap-y-2 text-gray-900"},P={class:"flex justify-between"},R=s("div",{class:"text-sm"},"Tanggal",-1),A={class:"text-sm font-semibold"},V={class:"flex justify-between"},F=s("div",{class:"text-sm"},"Kode Referensi",-1),L={class:"text-sm font-semibold"},H=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),J={key:0,class:"flex justify-between"},O=s("div",{class:"text-sm"},"Kategori",-1),W={class:"text-sm font-semibold"},$={key:1,class:"flex justify-between"},q=s("div",{class:"text-sm"},"Sumber Dana",-1),E={key:0,class:"text-sm font-semibold uppercase"},X={key:1,class:"text-sm font-semibold uppercase"},Y={key:2,class:"text-sm font-semibold uppercase"},z={class:"flex justify-between"},G=s("div",{class:"text-sm"},"Jenis Transaksi",-1),I={class:"text-sm font-semibold uppercase"},Q={class:"flex justify-between"},U=s("div",{class:"text-sm"},"Bank Tujuan",-1),Z={class:"text-sm font-semibold uppercase"},ss={class:"flex justify-between"},ts=s("div",{class:"text-sm"},"Nama Tujuan",-1),es={class:"text-sm font-semibold uppercase"},os={class:"flex justify-between"},is=s("div",{class:"text-sm"},"No. Rekening Tujuan",-1),as={class:"text-sm font-semibold uppercase"},ds={key:3,class:"flex justify-between"},rs=s("div",{class:"text-sm"},"Produk",-1),ns={class:"text-sm font-semibold uppercase"},cs={key:4,class:"flex justify-between"},_s=s("div",{class:"text-sm"},"No. Kustomer",-1),ls={class:"text-sm font-semibold"},ms={class:"flex justify-between"},hs=s("div",{class:"text-sm"},"Nama Kustomer",-1),ys={class:"text-sm font-semibold"},us={class:"flex justify-between"},fs=s("div",{class:"text-sm"},"Stroom",-1),bs={class:"text-sm font-bold"},ps={key:6,class:"flex justify-between gap-5"},xs=s("div",{class:"text-sm"},"Keterangan",-1),vs={class:"text-sm font-semibold text-right truncate"},gs=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),ks={class:"flex justify-between"},ws=s("div",{class:"text-sm"},"Nominal",-1),js={class:"text-sm font-semibold"},Ns={class:"flex justify-between"},Bs=s("div",{class:"text-sm"},"Biaya Admin",-1),Cs={class:"text-sm font-semibold"},Ts=s("span",{class:"my-2 border-t border-gray-600 border-dashed block"},null,-1),Ds={class:"flex justify-between"},Ks=s("div",{class:"text-sm font-bold"},"Total",-1),Ss={class:"text-sm font-bold"},Ms=s("div",{class:"border-t border-gray-600 border-dashed px-4 py-5 text-xs text-gray-500"},[s("p",null,"CV Cahaya Matahari Dunia"),s("p",null,"NPWP: 50.079.228.8-326.000"),s("p",null,"Jl. Lintas Sumatera, Campur Asri, Baradatu, Way Kanan, Lampung - 34761")],-1),Js={__name:"Print",props:{users:Object,history:Object},setup(x){const t=x;k(()=>{window.print()});function v(r){return g(r).format("DD MMM Y HH:mm")}function d(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(r,n)=>(o(),w(B,{title:t.history.product_name,name:t.history.product_name,desc:"lorem ipsum dolor sit"},{default:u(()=>{var c,_,l,m,h,y;return[s("div",T,[s("div",D,[f(C),K]),s("div",S,[s("div",M,[s("div",P,[R,s("div",A,e(v(t.history.updated_at)),1)]),s("div",V,[F,s("div",L,e(t.history.order_id),1)]),H,t.history.category_id==1?(o(),i("div",J,[O,s("div",W,e(t.history.category),1)])):a("",!0),t.history.category_id==1?(o(),i("div",$,[q,t.history.virtual_account?(o(),i("div",E,e(t.history.virtual_account.bank),1)):a("",!0),t.history.wallet_account?(o(),i("div",X,e(t.history.wallet_account.bank),1)):a("",!0),t.history.offline_account?(o(),i("div",Y,e(t.history.offline_account.bank),1)):a("",!0)])):a("",!0),t.history.category_id==99?(o(),i(b,{key:2},[s("div",z,[G,s("div",I,e(t.history.product_name),1)]),s("div",Q,[U,s("div",Z,e((c=t.history.money_transfer)==null?void 0:c.bank),1)]),s("div",ss,[ts,s("div",es,e((l=(_=t.history.money_transfer)==null?void 0:_.to)==null?void 0:l.name),1)]),s("div",os,[is,s("div",as,e((h=(m=t.history.money_transfer)==null?void 0:m.to)==null?void 0:h.phone),1)])],64)):a("",!0),t.history.category_id!=99&&t.history.category_id!=1?(o(),i("div",ds,[rs,s("div",ns,e(t.history.product_name),1)])):a("",!0),t.history.category_id!=99&&t.history.category_id!=1?(o(),i("div",cs,[_s,s("div",ls,e(t.history.customer_no),1)])):a("",!0),t.history.category_id==5?(o(),i(b,{key:5},[s("div",ms,[hs,s("div",ys,e(t.history.desc.split("/")[1]),1)]),s("div",us,[fs,s("div",bs,[f(p(N),{content:"Sukses Copy",arrow:"",placement:"right-end"},{default:u(()=>[s("button",{onClick:n[0]||(n[0]=Ps=>p(j)(t.history.desc.split("/")[0])),class:""},e(t.history.desc.split("/")[0]),1)]),_:1})])])],64)):(o(),i("div",ps,[xs,s("div",vs,e((y=t.history.desc)!=null?y:"-"),1)])),gs,s("div",ks,[ws,s("div",js," Rp "+e(t.history.category_id==1||t.history.category_id>=8?d(Number(t.history.amount)+Number(t.history.agent_commission)):d(Number(t.history.gross_amount)+Number(t.history.agent_commission))),1)]),s("div",Ns,[Bs,s("div",Cs," Rp "+e(t.history.category_id==1||t.history.category_id>=8?d(t.history.admin_fee):"0"),1)]),Ts,s("div",Ds,[Ks,s("div",Ss,"Rp "+e(d(Number(t.history.gross_amount)+Number(t.history.agent_commission))),1)])])]),Ms])]}),_:1},8,["title","name"]))}};export{Js as default};

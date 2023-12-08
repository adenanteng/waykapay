import{T as V,d as P,q as A,c as f,w as r,o,f as a,e as i,a as s,b as c,u as d,g as m,F as y,t as e,X as v,C as D,n as M,Y as L}from"./app.76649d71.js";import{_ as q}from"./AppLayout.387f14be.js";import{h as I}from"./moment.9709ab41.js";import{_ as F}from"./PreviousButton.95a4a774.js";import{e as g}from"./popper.esm.8ff0f5e0.js";import{_ as H}from"./InputLabel.9e199ded.js";import{_ as J}from"./TextInput.088e3afe.js";import{_ as Q}from"./InputError.58ada1b0.js";import{_ as p}from"./PrimaryButton.a3dce045.js";import{_ as U}from"./ActionMessage.69e27b6e.js";import{_ as R}from"./SecondaryButton.ecf548a9.js";import{A as b}from"./ApplicationLogoTitle.a54f867d.js";import{V as W}from"./vue3-lottie.es.dc40f5ae.js";import"./Banner.34d33dbe.js";import"./DarkmodeToggle.f93d583e.js";import"./helper.e9fc3b37.js";import"./label.e53175a3.js";import"./index.391b5fd0.js";import"./focus-management.e3b7dfc6.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Y={key:0,class:"pt-16 pb-12"},z={class:"mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"},E={class:"flex flex-shrink-0 justify-center"},O={class:"mt-5"},X={class:"text-center justify-center"},G={class:"px-4 sm:px-6 text-center text-gray-900 text-sm"},Z=s("h1",{class:"text-lg font-bold tracking-tight text-gray-900"},"Transaksi Berhasil",-1),ss=s("p",{class:"text-gray-500 text-sm"},"Kamu akan dialihkan dalam 5 detik",-1),ts={class:"mt-5 gap-x-2"},es=s("i",{class:"fa-regular fa-arrow-right ml-1 text-xs"},null,-1),os={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},is={class:"px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"},as=s("h3",{class:"mt-1 text-lg font-bold leading-6 text-gray-900"},"Transaksi Berhasil",-1),cs={class:"border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"},ds={class:"grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"},ns={class:"sm:col-span-1 flex sm:block justify-between"},ls=s("div",{class:"text-sm"},"Tanggal",-1),rs={class:"text-sm font-semibold"},_s={class:"sm:col-span-1 flex sm:block justify-between"},ms=s("div",{class:"text-sm"},"Kode Referensi",-1),hs={class:"text-sm font-semibold"},ys=s("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),us={key:0,class:"sm:col-span-1 flex sm:block justify-between"},fs=s("div",{class:"text-sm"},"Kategori",-1),ps={class:"text-sm font-semibold"},bs={key:1,class:"sm:col-span-1 flex sm:block justify-between"},xs=s("div",{class:"text-sm"},"Sumber Dana",-1),vs={key:0,class:"text-sm font-semibold uppercase"},gs={key:1,class:"text-sm font-semibold uppercase"},ks={key:2,class:"text-sm font-semibold uppercase"},ws={class:"sm:col-span-1 flex sm:block justify-between"},js=s("div",{class:"text-sm"},"Jenis Transaksi",-1),Bs={class:"text-sm font-semibold uppercase"},Ss={class:"sm:col-span-1 flex sm:block justify-between"},Ns=s("div",{class:"text-sm"},"Bank Tujuan",-1),Ts={class:"text-sm font-semibold uppercase"},Cs={class:"sm:col-span-1 flex sm:block justify-between"},Rs=s("div",{class:"text-sm"},"Nama Tujuan",-1),$s={class:"text-sm font-semibold uppercase"},Ks={class:"sm:col-span-1 flex sm:block justify-between"},Vs=s("div",{class:"text-sm"},"No. Rekening Tujuan",-1),Ps={class:"text-sm font-semibold uppercase"},As={key:3,class:"sm:col-span-1 flex sm:block justify-between"},Ds=s("div",{class:"text-sm"},"Produk",-1),Ms={class:"text-sm font-semibold uppercase"},Ls={key:4,class:"sm:col-span-1 flex sm:block justify-between"},qs=s("div",{class:"text-sm"},"No. Kustomer",-1),Is={class:"text-sm font-semibold"},Fs={class:"sm:col-span-1 flex sm:block justify-between"},Hs=s("div",{class:"text-sm"},"Nama Kustomer",-1),Js={class:"text-sm font-semibold"},Qs={class:"sm:col-span-1 flex sm:block justify-between"},Us=s("div",{class:"text-sm"},"Stroom",-1),Ws={class:"text-sm font-bold"},Ys={key:6,class:"sm:col-span-2 flex sm:block justify-between gap-5"},zs=s("div",{class:"text-sm"},"Keterangan",-1),Es={class:"text-sm font-semibold text-right sm:text-left truncate"},Os=s("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),Xs={class:"sm:col-span-1 flex sm:block justify-between"},Gs=s("div",{class:"text-sm"},"Nominal",-1),Zs={class:"text-sm font-semibold"},st={class:"sm:col-span-1 flex sm:block justify-between"},tt=s("div",{class:"text-sm"},"Biaya Admin",-1),et={class:"text-sm font-semibold"},ot={key:7,class:"sm:col-span-1 flex sm:block justify-between"},it=s("div",{class:"text-sm"},"Komisi",-1),at={class:"text-sm font-semibold"},ct=s("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),dt={class:"sm:col-span-1 flex sm:block justify-between"},nt=s("div",{class:"text-sm font-bold"},"Total",-1),lt={class:"text-sm font-bold"},rt=s("div",{class:"border-t border-gray-600 border-dashed px-4 py-5 sm:px-6 text-xs text-gray-500"},[s("p",null,"CV Cahaya Matahari Dunia"),s("p",null,"NPWP: 50.079.228.8-326.000"),s("p",null,"Jl. Lintas Sumatera, Campur Asri, Baradatu, Way Kanan, Lampung - 34761")],-1),_t={key:0,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},mt=s("div",{class:"px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"},[s("h3",{class:"mt-1 text-lg font-bold leading-6 text-gray-900"},"Komisi Agen")],-1),ht={class:"border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"},yt=["onSubmit"],ut={class:"grid grid-cols-6"},ft={class:"col-span-6 sm:col-span-3"},pt={class:"flex"},bt=s("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"}," Rp ",-1),xt={class:"col-span-6 mt-3 flex justify-between items-center"},vt={class:"flex justify-center gap-2"},gt=s("i",{class:"fa-regular fa-print mr-2"},null,-1),kt=s("i",{class:"fa-regular fa-share-nodes mr-2"},null,-1),wt={class:""},jt=s("i",{class:"fa-regular fa-home mr-2"},null,-1),Bt=s("div",{class:"pb-80 lg:pb-0"},null,-1),St={key:1,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},Nt={class:"px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"},Tt=s("h3",{class:"mt-1 text-lg font-bold leading-6 text-gray-900"},"Transaksi Pending",-1),Ct={class:"border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"},Rt={class:"grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"},$t={class:"sm:col-span-1 flex sm:block justify-between"},Kt=s("div",{class:"text-sm"},"Bank",-1),Vt={class:"text-sm font-semibold uppercase"},Pt={class:"sm:col-span-1 flex sm:block justify-between"},At=s("div",{class:"text-sm"},"No. Virtual Account",-1),Dt={class:"text-sm font-semibold"},Mt=s("i",{class:"fa-duotone fa-paste ml-2"},null,-1),Lt=[Mt],qt={class:"sm:col-span-1 flex sm:block justify-between"},It=s("div",{class:"text-sm"},"Metode Pembayaran",-1),Ft={class:"text-sm font-semibold uppercase"},Ht={class:"sm:col-span-2 flex flex-col items-center my-5 gap-3"},Jt=s("div",{class:"text-sm"},[s("img",{src:"/img/vendor/QRIS.svg",class:"h-8 w-auto",alt:"QRIS"})],-1),Qt={class:"text-sm"},Ut={class:"sm:col-span-1 flex sm:block justify-between"},Wt=s("div",{class:"text-sm"},"Deeplink",-1),Yt={class:"text-sm font-semibold text-primary-600 underline"},zt=["href"],Et={class:"sm:col-span-1 flex sm:block justify-between"},Ot=s("div",{class:"text-sm"},"Metode Pembayaran",-1),Xt={class:"text-sm font-semibold uppercase"},Gt={class:"sm:col-span-1 flex sm:block justify-between"},Zt=s("div",{class:"text-sm"},"No. Pembayaran",-1),se={class:"text-sm font-semibold"},te=s("i",{class:"fa-duotone fa-paste ml-2"},null,-1),ee=[te],oe={class:"sm:col-span-1 flex sm:block justify-between"},ie=s("div",{class:"text-sm"},"Cara bayar",-1),ae={class:"text-sm font-semibold text-primary-600 underline"},ce=["href"],de=s("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),ne={class:"sm:col-span-1 flex sm:block justify-between"},le=s("div",{class:"text-sm"},"Nominal",-1),re={class:"text-sm font-semibold"},_e={class:"sm:col-span-1 flex sm:block justify-between"},me=s("div",{class:"text-sm"},"Biaya Admin",-1),he={class:"text-sm font-semibold"},ye={class:"sm:col-span-1 flex sm:block justify-between"},ue=s("div",{class:"text-sm"},"Total",-1),fe={class:"text-sm font-semibold"},pe={key:2,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},be={class:"px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"},xe={class:"mt-1 text-lg font-bold leading-6 text-gray-900"},ve={class:"border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"},ge={class:"grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"},ke={class:"sm:col-span-1 flex sm:block justify-between"},we=s("div",{class:"text-sm"},"Tanggal",-1),je={class:"text-sm font-semibold"},Be={class:"sm:col-span-1 flex sm:block justify-between"},Se=s("div",{class:"text-sm"},"Kode Referensi",-1),Ne={class:"text-sm font-semibold"},Te=s("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),Ce={class:"sm:col-span-1 flex sm:block justify-between"},Re=s("div",{class:"text-sm"},"Kategori",-1),$e={class:"text-sm font-semibold"},Ke={key:0,class:"sm:col-span-1 flex sm:block justify-between"},Ve=s("div",{class:"text-sm"},"Sumber Dana",-1),Pe={key:0,class:"text-sm font-semibold uppercase"},Ae={key:1,class:"text-sm font-semibold uppercase"},De={key:2,class:"text-sm font-semibold uppercase"},Me={key:1,class:"sm:col-span-1 flex sm:block justify-between"},Le=s("div",{class:"text-sm"},"Produk",-1),qe={class:"text-sm font-semibold"},Ie={key:2,class:"sm:col-span-1 flex sm:block justify-between"},Fe=s("div",{class:"text-sm"},"No. Kustomer",-1),He={class:"text-sm font-semibold"},Je={class:"sm:col-span-2 flex sm:block justify-between"},Qe=s("div",{class:"text-sm"},"Keterangan",-1),Ue={class:"text-sm font-semibold text-right sm:text-left"},We=s("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),Ye={class:"sm:col-span-1 flex sm:block justify-between"},ze=s("div",{class:"text-sm"},"Nominal",-1),Ee={class:"text-sm font-semibold"},Oe={class:"sm:col-span-1 flex sm:block justify-between"},Xe=s("div",{class:"text-sm"},"Biaya Admin",-1),Ge={class:"text-sm font-semibold"},Ze=s("span",{class:"my-2 border-t border-gray-600 border-dashed block sm:hidden"},null,-1),so={class:"sm:col-span-1 flex sm:block justify-between"},to=s("div",{class:"text-sm font-bold"},"Total",-1),eo={class:"text-sm font-bold"},jo={__name:"Show",props:{history:Object,goBack:{type:Boolean,default:!0},goSuccess:{type:Boolean,default:!1}},setup($){const t=$,h=V({agent_commission:null}),K=()=>{h.patch(route("transaction.update",t.history),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{h.reset()}})},x=P(t.goSuccess);A(()=>{setTimeout(()=>x.value=!1,5e3)});function k(l){return I(l).format("DD MMM Y HH:mm")}function n(l){return(l/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(l,_)=>(o(),f(q,{title:t.history.product_name,name:t.history.product_name,desc:"lorem ipsum dolor sit"},{previous:r(()=>[t.goBack?(o(),f(F,{key:0})):a("",!0)]),default:r(()=>{var w,j,B,S,N,T,C;return[x.value?(o(),i("div",Y,[s("main",z,[s("div",E,[c(b)]),s("div",O,[s("div",X,[s("div",G,[c(d(W),{"animation-link":"https://lottie.host/a3272d43-4bd3-4974-a125-712019ae512e/mskSUiuPqv.json",height:200,width:200})]),Z,ss,s("div",ts,[c(p,{onClick:_[0]||(_[0]=u=>x.value=!1)},{default:r(()=>[m(" Lihat Transaksi ")]),_:1}),c(R,{as:"a",href:l.route("dashboard")},{default:r(()=>[m(" Ke Beranda "),es]),_:1},8,["href"])])])])])])):(o(),i(y,{key:1},[t.history.status_id==1?(o(),i(y,{key:0},[s("div",os,[s("div",is,[c(b,{class:"block sm:hidden"}),as]),s("div",cs,[s("div",ds,[s("div",ns,[ls,s("div",rs,e(k(t.history.updated_at)),1)]),s("div",_s,[ms,s("div",hs,e(t.history.order_id),1)]),ys,t.history.category_id==1?(o(),i("div",us,[fs,s("div",ps,e(t.history.category),1)])):a("",!0),t.history.category_id==1?(o(),i("div",bs,[xs,t.history.virtual_account?(o(),i("div",vs,e(t.history.virtual_account.bank),1)):a("",!0),t.history.wallet_account?(o(),i("div",gs,e(t.history.wallet_account.bank),1)):a("",!0),t.history.offline_account?(o(),i("div",ks,e(t.history.offline_account.bank),1)):a("",!0)])):a("",!0),t.history.category_id==99?(o(),i(y,{key:2},[s("div",ws,[js,s("div",Bs,e(t.history.product_name),1)]),s("div",Ss,[Ns,s("div",Ts,e((w=t.history.money_transfer)==null?void 0:w.bank),1)]),s("div",Cs,[Rs,s("div",$s,e((B=(j=t.history.money_transfer)==null?void 0:j.to)==null?void 0:B.name),1)]),s("div",Ks,[Vs,s("div",Ps,e((N=(S=t.history.money_transfer)==null?void 0:S.to)==null?void 0:N.phone),1)])],64)):a("",!0),t.history.category_id!=99&&t.history.category_id!=1?(o(),i("div",As,[Ds,s("div",Ms,e(t.history.product_name),1)])):a("",!0),t.history.category_id!=99&&t.history.category_id!=1?(o(),i("div",Ls,[qs,s("div",Is,e(t.history.customer_no),1)])):a("",!0),t.history.category_id==5?(o(),i(y,{key:5},[s("div",Fs,[Hs,s("div",Js,e(t.history.desc.split("/")[1]),1)]),s("div",Qs,[Us,s("div",Ws,[c(d(g),{content:"Sukses Copy",arrow:"",placement:"right-end"},{default:r(()=>[s("button",{onClick:_[1]||(_[1]=u=>d(v)(t.history.desc.split("/")[0])),class:""},e(t.history.desc.split("/")[0]),1)]),_:1})])])],64)):(o(),i("div",Ys,[zs,s("div",Es,e((T=t.history.desc)!=null?T:"-"),1)])),Os,s("div",Xs,[Gs,s("div",Zs," Rp "+e(t.history.category_id==1||t.history.category_id>=8?n(t.history.amount):n(t.history.gross_amount)),1)]),s("div",st,[tt,s("div",et," Rp "+e(t.history.category_id==1||t.history.category_id>=8?n(t.history.admin_fee):"0"),1)]),t.history.agent_commission?(o(),i("div",ot,[it,s("div",at," Rp "+e(n(t.history.agent_commission)),1)])):a("",!0),ct,s("div",dt,[nt,s("div",lt,"Rp "+e(n(Number(t.history.gross_amount)+Number(t.history.agent_commission))),1)])])]),rt]),t.history.category_id!=0&&t.history.category_id!=1&&l.$page.props.user.role_id!=3&&t.history.user_id==l.$page.props.user.id?(o(),i("div",_t,[mt,s("div",ht,[s("form",{onSubmit:D(K,["prevent"])},[s("div",ut,[s("div",ft,[c(H,{for:"amount",value:"Harga Jual"}),s("div",pt,[bt,c(J,{id:"amount",modelValue:d(h).agent_commission,"onUpdate:modelValue":_[2]||(_[2]=u=>d(h).agent_commission=u),type:"number",class:"mt-1 block w-full rounded-l-none",min:Number(t.history.gross_amount),max:"100000",required:""},null,8,["modelValue","min"])]),c(Q,{message:d(h).errors.agent_commission,class:"mt-2"},null,8,["message"])]),s("div",xt,[c(U,{on:d(h).recentlySuccessful,class:"mr-3"},{default:r(()=>[m(" Berhasil disimpan. ")]),_:1},8,["on"]),c(p,{class:M({"opacity-25":d(h).processing}),disabled:d(h).processing},{default:r(()=>[m(" Konfirmasi ")]),_:1},8,["class","disabled"])])])],40,yt)])])):a("",!0),s("div",vt,[t.history.user_id==l.$page.props.user.id&&t.history.category_id!=1?(o(),f(p,{key:0,as:"a",href:l.route("transaction.print",t.history.order_id),class:"justify-center w-full"},{default:r(()=>[gt,m(" Cetak ")]),_:1},8,["href"])):a("",!0),t.history.user_id==l.$page.props.user.id&&t.history.category_id!=1?(o(),f(p,{key:1,as:"a",href:l.route("transaction.share",t.history.order_id),class:"justify-center w-full"},{default:r(()=>[kt,m(" Bagikan ")]),_:1},8,["href"])):a("",!0)]),s("div",wt,[t.goBack?a("",!0):(o(),f(R,{key:0,as:"a",href:l.route("dashboard"),class:"justify-center w-full border border-gray-300 nightwind-prevent"},{default:r(()=>[jt,m(" Beranda ")]),_:1},8,["href"]))]),Bt],64)):t.history.status_id==2?(o(),i("div",St,[s("div",Nt,[c(b,{class:"block sm:hidden"}),Tt]),s("div",Ct,[s("div",Rt,[t.history.virtual_account?(o(),i(y,{key:0},[s("div",$t,[Kt,s("div",Vt,e(t.history.virtual_account.bank),1)]),s("div",Pt,[At,s("div",Dt,[m(e(t.history.virtual_account.va_number)+" ",1),c(d(g),{class:"text-sm text-primary-700 font-normal lowercase",content:"Sukses Copy",arrow:"",placement:"right-end"},{default:r(()=>[s("button",{class:"",onClick:_[3]||(_[3]=u=>d(v)(t.history.virtual_account.va_number))},Lt)]),_:1})])])],64)):t.history.wallet_account?(o(),i(y,{key:1},[s("div",qt,[It,s("div",Ft,e(t.history.wallet_account.bank),1)]),s("div",Ht,[Jt,s("div",Qt,[c(d(L),{value:t.history.wallet_account.qr_code,tag:"svg",options:{width:200,color:{dark:"#000",light:"#fff"}}},null,8,["value"])])]),s("div",Ut,[Wt,s("div",Yt,[s("a",{target:"_blank",href:t.history.wallet_account.payment_url}," Bayar ",8,zt)])])],64)):t.history.offline_account?(o(),i(y,{key:2},[s("div",Et,[Ot,s("div",Xt,e(t.history.offline_account.bank),1)]),s("div",Gt,[Zt,s("div",se,[m(e(t.history.offline_account.payment_code)+" ",1),c(d(g),{class:"text-sm text-primary-700 font-normal lowercase",content:"Sukses Copy",arrow:"",placement:"right-end"},{default:r(()=>[s("button",{class:"",onClick:_[4]||(_[4]=u=>d(v)(t.history.offline_account.payment_code))},ee)]),_:1})])]),s("div",oe,[ie,s("div",ae,[s("a",{target:"_blank",href:t.history.offline_account.payment_url}," Bayar ",8,ce)])])],64)):a("",!0),de,s("div",ne,[le,s("div",re,"Rp "+e(n(t.history.amount)),1)]),s("div",_e,[me,s("div",he,"Rp "+e(n(t.history.admin_fee)),1)]),s("div",ye,[ue,s("div",fe,"Rp "+e(n(t.history.gross_amount)),1)])])])])):(o(),i("div",pe,[s("div",be,[c(b,{class:"block sm:hidden"}),s("h3",xe,"Transaksi "+e(t.history.status),1)]),s("div",ve,[s("div",ge,[s("div",ke,[we,s("div",je,e(k(t.history.updated_at)),1)]),s("div",Be,[Se,s("div",Ne,e(t.history.order_id),1)]),Te,s("div",Ce,[Re,s("div",$e,e(t.history.category),1)]),t.history.category_id==0||t.history.category_id!=1?(o(),i("div",Ke,[Ve,t.history.virtual_account?(o(),i("div",Pe,e(t.history.virtual_account.bank),1)):t.history.wallet_account?(o(),i("div",Ae,e(t.history.wallet_account.bank),1)):t.history.offline_account?(o(),i("div",De,e(t.history.offline_account.bank),1)):a("",!0)])):a("",!0),t.history.category_id!=0||t.history.category_id!=1?(o(),i("div",Me,[Le,s("div",qe,e(t.history.product_name),1)])):a("",!0),t.history.category_id!=0||t.history.category_id!=1?(o(),i("div",Ie,[Fe,s("div",He,e(t.history.customer_no),1)])):a("",!0),s("div",Je,[Qe,s("div",Ue,e((C=t.history.desc)!=null?C:"-"),1)]),We,s("div",Ye,[ze,s("div",Ee,"Rp "+e(t.history.category_id==1?n(t.history.amount):n(t.history.gross_amount)),1)]),s("div",Oe,[Xe,s("div",Ge,"Rp "+e(t.history.category_id==1?n(t.history.admin_fee):"0"),1)]),Ze,s("div",so,[to,s("div",eo,"Rp "+e(n(t.history.gross_amount)),1)])])])]))],64))]}),_:1},8,["title","name"]))}};export{jo as default};

import{e as t,g as a,t as m,F as i,o as u}from"./app.f10bb34b.js";const v={__name:"FormatTV",props:{price:Number},setup(k){const e=k;function p(r){return(r/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(r,l)=>{var N,b,c,o,n,s,g;return Number(e.price)<1e3?(u(),t(i,{key:0},[a(" Rp "+m(p(Number(e.price))),1)],64)):Number(e.price)<25e3?(u(),t(i,{key:1},[a(" Rp "+m(p(Number(e.price)+Number(e.fee_25))),1)],64)):Number(e.price)<5e4?(u(),t(i,{key:2},[a(" Rp "+m(p(Number(e.price)+Number((N=r.$page.props.appSetting)==null?void 0:N.tv_50))),1)],64)):Number(e.price)<75e3?(u(),t(i,{key:3},[a(" Rp "+m(p(Number(e.price)+Number((b=r.$page.props.appSetting)==null?void 0:b.tv_75))),1)],64)):Number(e.price)<1e5?(u(),t(i,{key:4},[a(" Rp "+m(p(Number(e.price)+Number((c=r.$page.props.appSetting)==null?void 0:c.tv_100))),1)],64)):Number(e.price)<2e5?(u(),t(i,{key:5},[a(" Rp "+m(p(Number(e.price)+Number((o=r.$page.props.appSetting)==null?void 0:o.tv_200))),1)],64)):Number(e.price)<5e5?(u(),t(i,{key:6},[a(" Rp "+m(p(Number(e.price)+Number((n=r.$page.props.appSetting)==null?void 0:n.tv_500))),1)],64)):Number(e.price)<1e6?(u(),t(i,{key:7},[a(" Rp "+m(p(Number(e.price)+Number((s=r.$page.props.appSetting)==null?void 0:s.tv_1000))),1)],64)):(u(),t(i,{key:8},[a(" Rp "+m(p(Number(e.price)+Number((g=r.$page.props.appSetting)==null?void 0:g.tv_max))),1)],64))}}};export{v as default};
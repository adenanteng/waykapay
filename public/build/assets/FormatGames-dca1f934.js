import{o as a,e as m,g as i,t,F as u}from"./app-01e31d22.js";const R={__name:"FormatGames",props:{price:Number},setup(l){const e=l;function r(p){return(p/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(p,y)=>{var s,g,N,b,o,c,n,k;return Number(e.price)<1e3?(a(),m(u,{key:0},[i(" Rp "+t(r(Number(e.price))),1)],64)):Number(e.price)<25e3?(a(),m(u,{key:1},[i(" Rp "+t(r(Number(e.price)+Number((s=p.$page.props.appSetting)==null?void 0:s.games_25))),1)],64)):Number(e.price)<5e4?(a(),m(u,{key:2},[i(" Rp "+t(r(Number(e.price)+Number((g=p.$page.props.appSetting)==null?void 0:g.games_50))),1)],64)):Number(e.price)<75e3?(a(),m(u,{key:3},[i(" Rp "+t(r(Number(e.price)+Number((N=p.$page.props.appSetting)==null?void 0:N.games_75))),1)],64)):Number(e.price)<1e5?(a(),m(u,{key:4},[i(" Rp "+t(r(Number(e.price)+Number((b=p.$page.props.appSetting)==null?void 0:b.games_100))),1)],64)):Number(e.price)<2e5?(a(),m(u,{key:5},[i(" Rp "+t(r(Number(e.price)+Number((o=p.$page.props.appSetting)==null?void 0:o.games_200))),1)],64)):Number(e.price)<5e5?(a(),m(u,{key:6},[i(" Rp "+t(r(Number(e.price)+Number((c=p.$page.props.appSetting)==null?void 0:c.games_500))),1)],64)):Number(e.price)<1e6?(a(),m(u,{key:7},[i(" Rp "+t(r(Number(e.price)+Number((n=p.$page.props.appSetting)==null?void 0:n.games_1000))),1)],64)):(a(),m(u,{key:8},[i(" Rp "+t(r(Number(e.price)+Number((k=p.$page.props.appSetting)==null?void 0:k.games_max))),1)],64))}}};export{R as default};

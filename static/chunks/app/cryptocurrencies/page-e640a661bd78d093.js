(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{8263:function(n,t,r){Promise.resolve().then(r.bind(r,2611))},2611:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var e=r(2805),i=r(9268),a=r(6006),o=r(4214);async function d(n){try{let t=await o.Z.get("https://tstapi.cryptorank.io/v0/coins/".concat(n.toLowerCase())),r=t.data,e=r.data.athPrice.USD,i=r.data.price.USD;return{[n]:{from:(e-i)/e*100,to:(e/i-1)*100}}}catch(t){return{[n]:{from:0,to:0}}}}var c=r(4697),p=r(8945),s=r(9017);function l(){let n=(0,e._)(["\n    clear: both;\n    max-width: 1400px;\n    min-width: 1056px;\n    margin-top: 36px;\n    margin-bottom: 36px;\n    padding-bottom: 16px;\n    margin-left: auto;\n    margin-right: auto; \n    position: relative;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    border-radius: 16px;\n    overflow-wrap: break-word;\n"]);return l=function(){return n},n}function x(){let n=(0,e._)(["\n  font-size: 18px;\n  color: white;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background-color: #2563eb;\n  border-radius: 16px;\n"]);return x=function(){return n},n}function u(){let n=(0,e._)(["\n  display: grid;\n  background-color: rgb(238, 244, 250);\n  grid-template-columns: repeat(7, 1fr);\n"]);return u=function(){return n},n}function h(){let n=(0,e._)(["\n    display: flex;\n    height: 60px;\n    white-space: nowrap;\n    min-width: 60px;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-left: 24px;\n    padding-right: 24px;\n    background-color: inherit;\n    border-bottom: 1px solid black;\n    text-align: start;\n    position: sticky;\n    left: 0px;\n    z-index: 1;\n"]);return h=function(){return n},n}function f(){let n=(0,e._)(["\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    background-color: inherit;\n    transition: box-shadow 0.2s ease 0s;\n    text-align: start;\n    padding-left: 24px;\n    padding-right: 9px;\n    white-space: nowrap;\n    min-width: 60px;\n    position: sticky;\n    left: 0px;\n    z-index: 1;\n"]);return f=function(){return n},n}let g=p.ZP.div(l()),b=p.ZP.div(x()),m=p.ZP.div(u()),w=p.ZP.div(h()),j=(0,p.ZP)(w)(f());var k=()=>{let[n,t]=(0,a.useState)([]),r=n=>n>=1e9?(n/1e9).toFixed(1)+"B":n>=1e6?(n/1e6).toFixed(1)+"M":n.toFixed(1),{data:e,isLoading:o}=(0,c.w)("https://api.cryptorank.io/v1/currencies?api_key=".concat(s.r));return(0,a.useEffect)(()=>{e&&Promise.all(e.data.map(n=>d(n.name).then(t=>({...n,...t[n.name]})))).then(t)},[e]),(0,i.jsxs)(g,{children:[(0,i.jsxs)(b,{children:[(0,i.jsx)(j,{children:"Name"}),(0,i.jsx)(j,{children:"Price USD"}),(0,i.jsx)(j,{children:"Circulating Supply"}),(0,i.jsx)(j,{children:"Market Cap"}),(0,i.jsx)(j,{children:"Category"}),(0,i.jsx)(j,{children:"From ATH"}),(0,i.jsx)(j,{children:"To ATH"})]}),o?(0,i.jsx)("div",{children:"Loading..."}):n.map(n=>(0,i.jsxs)(m,{children:[(0,i.jsx)(w,{children:n.name}),(0,i.jsx)(w,{children:n.values.USD.price.toFixed(2)}),(0,i.jsx)(w,{children:r(n.circulatingSupply)})," ",(0,i.jsx)(w,{children:r(n.values.USD.marketCap)})," ",(0,i.jsx)(w,{children:n.category}),(0,i.jsxs)(w,{children:[n.from.toFixed(2),"%"]}),(0,i.jsxs)(w,{children:[n.to.toFixed(2),"%"]})]},n.id))]})}},9017:function(n,t,r){"use strict";r.d(t,{r:function(){return e}});let e="95d392740f14dbe77294ae764928975d15b2ae7c9fe7df3d727817bffe58"},4697:function(n,t,r){"use strict";r.d(t,{w:function(){return a}});var e=r(4214),i=r(730);let a=n=>{let{data:t,error:r}=(0,i.ZP)(n,n=>e.Z.get(n).then(n=>n.data));return{data:t,isLoading:!r&&!t,isError:r}}}},function(n){n.O(0,[643,677,253,698,744],function(){return n(n.s=8263)}),_N_E=n.O()}]);
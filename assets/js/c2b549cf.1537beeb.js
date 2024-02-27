"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),s=n,f=m["".concat(c,".").concat(s)]||m[s]||u[s]||l;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},86392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"mcapdom",description:"The mcapdom documentation page presents an outline of how to display an asset's percentage share of the total crypto circulating market cap. It includes usage and parameters specifically for frequency interval, initial date, and end date.",keywords:["mcapdom","crypto circulating market cap","asset's percentage share","frequency interval","initial date"]},o=void 0,c={unversionedId:"terminal/reference/crypto/dd/mcapdom",id:"terminal/reference/crypto/dd/mcapdom",title:"mcapdom",description:"The mcapdom documentation page presents an outline of how to display an asset's percentage share of the total crypto circulating market cap. It includes usage and parameters specifically for frequency interval, initial date, and end date.",source:"@site/content/terminal/reference/crypto/dd/mcapdom.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/mcapdom",permalink:"/terminal/reference/crypto/dd/mcapdom",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/mcapdom.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"mcapdom",description:"The mcapdom documentation page presents an outline of how to display an asset's percentage share of the total crypto circulating market cap. It includes usage and parameters specifically for frequency interval, initial date, and end date.",keywords:["mcapdom","crypto circulating market cap","asset's percentage share","frequency interval","initial date"]},sidebar:"tutorialSidebar",previous:{title:"market",permalink:"/terminal/reference/crypto/dd/market"},next:{title:"mkt",permalink:"/terminal/reference/crypto/dd/mkt"}},p={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:d},u="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"crypto /dd/mcapdom - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Display asset's percentage share of total crypto circulating market cap ","[Source: https://messari.io]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"mcapdom [-i {5m,15m,30m,1h,1d,1w}] [-s START] [-end END]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency interval. Default: 1d"),(0,n.kt)("td",{parentName:"tr",align:null},"1d"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"5m, 15m, 30m, 1h, 1d, 1w")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial date. Default: A year ago"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-02-27"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null},"-end  --end"),(0,n.kt)("td",{parentName:"tr",align:null},"End date. Default: Today"),(0,n.kt)("td",{parentName:"tr",align:null},"2024-02-27"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}s.isMDXComponent=!0}}]);
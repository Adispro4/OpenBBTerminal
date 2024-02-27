"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||c;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(35742);function c(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},8196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),c=r(88828);const i={title:"cd",description:"This page provides comprehensive information about the 'cd' command, used to retrieve a daily candlestick chart for a specific stock ticker or coin. It also includes usage instructions, parameter details and examples.",keywords:["cd command","daily candlestick chart","stock ticker","coin","opening and closing prices","high and low prices","performance analysis","command usage","parameter details"]},o=void 0,l={unversionedId:"bot/reference/discord/charts/cd",id:"bot/reference/discord/charts/cd",title:"cd",description:"This page provides comprehensive information about the 'cd' command, used to retrieve a daily candlestick chart for a specific stock ticker or coin. It also includes usage instructions, parameter details and examples.",source:"@site/content/bot/reference/discord/charts/cd.md",sourceDirName:"bot/reference/discord/charts",slug:"/bot/reference/discord/charts/cd",permalink:"/bot/reference/discord/charts/cd",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/charts/cd.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"cd",description:"This page provides comprehensive information about the 'cd' command, used to retrieve a daily candlestick chart for a specific stock ticker or coin. It also includes usage instructions, parameter details and examples.",keywords:["cd command","daily candlestick chart","stock ticker","coin","opening and closing prices","high and low prices","performance analysis","command usage","parameter details"]},sidebar:"tutorialSidebar",previous:{title:"cc",permalink:"/bot/reference/discord/charts/cc"},next:{title:"chart",permalink:"/bot/reference/discord/charts/chart"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{title:"charts: cd - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,'This command allows the user to retrieve a daily candlestick chart for a particular ticker or coin. The candlestick chart provides information about the opening and closing prices of the day, as well as the high and low prices of the day. This data can then be used to analyze the performance of the ticker/coin over time. For example, if the user provides the command "/cd ticker:AMD", the chart will be generated for the ticker AMD.'),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/cd ticker\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/cd ticker:AMD\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);
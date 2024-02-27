"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||c;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(35742);function c(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},75970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),c=r(88828);const o={title:"cd",description:"This documentation page provides an understanding of how to use the 'cd' command to retrieve daily candlestick chart for a particular stock ticker or coin. Instructions for usage and examples are provided.",keywords:["cd command","candlestick chart","stock ticker","coin","opening price","closing price","highs and lows","performance analysis","AMD ticker","command usage","docusaurus documentation"]},i=void 0,l={unversionedId:"bot/reference/telegram/charts/cd",id:"bot/reference/telegram/charts/cd",title:"cd",description:"This documentation page provides an understanding of how to use the 'cd' command to retrieve daily candlestick chart for a particular stock ticker or coin. Instructions for usage and examples are provided.",source:"@site/content/bot/reference/telegram/charts/cd.md",sourceDirName:"bot/reference/telegram/charts",slug:"/bot/reference/telegram/charts/cd",permalink:"/bot/reference/telegram/charts/cd",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/charts/cd.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"cd",description:"This documentation page provides an understanding of how to use the 'cd' command to retrieve daily candlestick chart for a particular stock ticker or coin. Instructions for usage and examples are provided.",keywords:["cd command","candlestick chart","stock ticker","coin","opening price","closing price","highs and lows","performance analysis","AMD ticker","command usage","docusaurus documentation"]},sidebar:"tutorialSidebar",previous:{title:"cc",permalink:"/bot/reference/telegram/charts/cc"},next:{title:"chart",permalink:"/bot/reference/telegram/charts/chart"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{title:"charts: cd - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,'This command allows the user to retrieve a daily candlestick chart for a particular ticker or coin. The candlestick chart provides information about the opening and closing prices of the day, as well as the high and low prices of the day. This data can then be used to analyze the performance of the ticker/coin over time. For example, if the user provides the command "/cd AMD", the chart will be generated for the ticker AMD.'),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/cd ticker\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/cd AMD\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);
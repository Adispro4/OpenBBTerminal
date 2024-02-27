"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),p=o,u=m["".concat(l,".").concat(p)]||m[p]||f[p]||a;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),o=r(86010),a=r(67294),i=r(16550),c=r(48334);function l(e){let{title:t,url:r,description:l,command:s}=e;const{pathname:d}=(0,i.TH)(),m=d.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),f&&a.createElement(c.Z,{className:"ml-auto mr-4"})),l?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},72149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(26515);const i={},c="ETF",l={unversionedId:"excel/reference/etf/index",id:"excel/reference/etf/index",title:"ETF",description:"Commands",source:"@site/content/excel/reference/etf/index.mdx",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/",permalink:"/excel/reference/etf/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/etf/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SEARCH",permalink:"/excel/reference/equity/search"},next:{title:"COUNTRIES",permalink:"/excel/reference/etf/countries"}},s={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},f="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"etf"},"ETF"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"HOLDINGS_PERFORMANCE",description:"Get the recent price performance of each ticker held in the ETF.",url:"etf/holdings_performance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"PRICE_PERFORMANCE",description:"Price performance as a return, over different periods. This is a proxy for...",url:"etf/price_performance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"HOLDINGS_DATE",description:"Use this function to get the holdings dates, if available.",url:"etf/holdings_date",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"INFO",description:"ETF Information Overview.",url:"etf/info",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"EQUITY_EXPOSURE",description:"Get the exposure to ETFs for a specific stock.",url:"etf/equity_exposure",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"SEARCH",description:"Search for ETFs. An empty query returns the full list of ETFs from the provider.",url:"etf/search",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"HOLDINGS",description:"Get the holdings for an individual ETF.",url:"etf/holdings",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"COUNTRIES",description:"ETF Country weighting.",url:"etf/countries",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"SECTORS",description:"ETF Sector weighting.",url:"etf/sectors",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19711],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(r),f=n,u=m["".concat(o,".").concat(f)]||m[f]||p[f]||c;return r?a.createElement(u,l(l({ref:t},s),{},{components:r})):a.createElement(u,l({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<c;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(39960),n=r(86010),c=r(67294),l=r(16550),i=r(48334);function o(e){let{title:t,url:r,description:o,command:d}=e;const{pathname:s}=(0,l.TH)(),m=s.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return c.createElement(a.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},c.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),c.createElement("div",{className:"flex items-center"},c.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&c.createElement(i.Z,{className:"ml-auto mr-4"})),o?c.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},o):null)}},49330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905)),c=r(26515);const l={},i="Technical",o={unversionedId:"platform/reference/technical/index",id:"platform/reference/technical/index",title:"Technical",description:"Commands",source:"@site/content/platform/reference/technical/index.mdx",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/",permalink:"/platform/reference/technical/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/technical/index.mdx",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"unusual",permalink:"/platform/reference/derivatives/options/unusual"},next:{title:"ad",permalink:"/platform/reference/technical/ad"}},d={},s=[{value:"Commands",id:"commands",level:3}],m={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"technical"},"Technical"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(c.Z,{title:"ichimoku",description:"Calculate the Ichimoku Cloud",url:"/platform/reference/technical/ichimoku",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"atr",description:"Calculate the Average True Range",url:"/platform/reference/technical/atr",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"demark",description:"Calculate the Demark sequential indicator",url:"/platform/reference/technical/demark",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"cones",description:"Calculate the realized volatility quantiles over rolling windows of time",url:"/platform/reference/technical/cones",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"sma",description:"Calculate the Simple Moving Average (SMA)",url:"/platform/reference/technical/sma",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"fisher",description:"Perform the Fisher Transform",url:"/platform/reference/technical/fisher",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"hma",description:"Calculate the Hull Moving Average (HMA)",url:"/platform/reference/technical/hma",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"obv",description:"Calculate the On Balance Volume (OBV)",url:"/platform/reference/technical/obv",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"adosc",description:"Calculate the Accumulation/Distribution Oscillator",url:"/platform/reference/technical/adosc",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"ema",description:"Calculate the Exponential Moving Average (EMA)",url:"/platform/reference/technical/ema",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"wma",description:"Calculate the Weighted Moving Average (WMA)",url:"/platform/reference/technical/wma",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"aroon",description:"Calculate the Aroon Indicator",url:"/platform/reference/technical/aroon",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"vwap",description:"Calculate the Volume Weighted Average Price (VWAP)",url:"/platform/reference/technical/vwap",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"clenow",description:"Calculate the Clenow Volatility Adjusted Momentum",url:"/platform/reference/technical/clenow",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"cci",description:"Calculate the Commodity Channel Index (CCI)",url:"/platform/reference/technical/cci",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"kc",description:"Calculate the Keltner Channels",url:"/platform/reference/technical/kc",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"rsi",description:"Calculate the Relative Strength Index (RSI)",url:"/platform/reference/technical/rsi",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"ad",description:"Calculate the Accumulation/Distribution Line",url:"/platform/reference/technical/ad",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"zlma",description:"Calculate the zero lag exponential moving average (ZLEMA)",url:"/platform/reference/technical/zlma",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"bbands",description:"Calculate the Bollinger Bands",url:"/platform/reference/technical/bbands",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"cg",description:"Calculate the Center of Gravity",url:"/platform/reference/technical/cg",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"adx",description:"Calculate the Average Directional Index (ADX)",url:"/platform/reference/technical/adx",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"stoch",description:"Calculate the Stochastic Oscillator",url:"/platform/reference/technical/stoch",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"macd",description:"Calculate the Moving Average Convergence Divergence (MACD)",url:"/platform/reference/technical/macd",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"fib",description:"Create Fibonacci Retracement Levels",url:"/platform/reference/technical/fib",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"donchian",description:"Calculate the Donchian Channels",url:"/platform/reference/technical/donchian",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);
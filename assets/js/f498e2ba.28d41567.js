"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87174],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),d=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=d(e.components);return o.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,u=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return t?o.createElement(u,l(l({ref:r},s),{},{components:t})):o.createElement(u,l({ref:r},s))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:n,l[1]=a;for(var d=2;d<i;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(39960),n=t(67294),i=t(86010),l=t(16550);function a(e){let{title:r,url:t,description:a,command:c}=e;const{pathname:d}=(0,l.TH)();return n.createElement(o.Z,{className:(0,i.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!d.startsWith("/terminal")&&!d.startsWith("/sdk")&&!d.startsWith("/bot")}),to:t},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),a?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},a):null)}},94382:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var o=t(87462),n=(t(67294),t(3905)),i=t(62872);const l={},a="portfolio",c={unversionedId:"sdk/reference/portfolio/index",id:"sdk/reference/portfolio/index",title:"portfolio",description:"<ReferenceCard",source:"@site/content/sdk/reference/portfolio/index.mdx",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/",permalink:"/sdk/reference/portfolio/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"news",permalink:"/sdk/reference/news"},next:{title:"alloc",permalink:"/sdk/reference/portfolio/alloc/"}},d={},s=[],p={toc:s},f="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(f,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"portfolio"},"portfolio"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"po",description:"maxutil, riskparity, hrp, load, relriskparity, maxdiv, plot, file, maxdecorr, herc, blacklitterman,...",url:"/sdk/reference/portfolio/po",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"metric",description:"sharpe, calmar, sortino, payoff, information, gaintopain, kurtosis, commonsense, tail, skew, rsquare, kelly,...",url:"/sdk/reference/portfolio/metric",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"alloc",description:"countries, assets, regions, sectors",url:"/sdk/reference/portfolio/alloc",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"bench",description:"Load benchmark into portfolio",url:"/sdk/reference/portfolio/bench",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"distr",description:"Display daily returns",url:"/sdk/reference/portfolio/distr",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"dret",description:"Get daily returns",url:"/sdk/reference/portfolio/dret",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"es",description:"Get portfolio expected shortfall",url:"/sdk/reference/portfolio/es",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"holdp",description:"Get holdings of assets (in percentage)",url:"/sdk/reference/portfolio/holdp",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"holdv",description:"Get holdings of assets (absolute value)",url:"/sdk/reference/portfolio/holdv",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"load",description:"Get PortfolioEngine object",url:"/sdk/reference/portfolio/load",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"maxdd",description:"Calculate the drawdown (MDD) of historical series. Note that the calculation is done",url:"/sdk/reference/portfolio/maxdd",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"mret",description:"Get monthly returns",url:"/sdk/reference/portfolio/mret",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"om",description:"Get omega ratio",url:"/sdk/reference/portfolio/om",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"perf",description:"Get portfolio performance vs the benchmark",url:"/sdk/reference/portfolio/perf",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rbeta",description:"Get rolling beta using portfolio and benchmark returns",url:"/sdk/reference/portfolio/rbeta",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rsharpe",description:"Get rolling sharpe ratio",url:"/sdk/reference/portfolio/rsharpe",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rsort",description:"Get rolling sortino",url:"/sdk/reference/portfolio/rsort",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rvol",description:"Get rolling volatility",url:"/sdk/reference/portfolio/rvol",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"show",description:"Get portfolio transactions",url:"/sdk/reference/portfolio/show",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"summary",description:"Get portfolio and benchmark returns summary",url:"/sdk/reference/portfolio/summary",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"var",description:"Get portfolio VaR",url:"/sdk/reference/portfolio/var",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"yret",description:"Get yearly returns",url:"/sdk/reference/portfolio/yret",command:"true",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);
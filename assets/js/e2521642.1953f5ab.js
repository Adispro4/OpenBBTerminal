"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),d=a,u=g["".concat(s,".").concat(d)]||g[d]||h[d]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},57889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"growth",description:"This documentation page discusses the various parameters and functionalities of a financial growth model. It covers the growth of statement items and financial ratios, including revenue, operating cash flow, assets, debt, EBIT, EPS, gross profit, inventory, net income, operating income, and more. It provides usage examples and parameter descriptions using Financial Modeling Prep as the data source.",keywords:["financial growth","statement items growth","financial ratios","Revenue Growth","inventory growth","operating cash flow growth","Asset growth","Debt growth","Ebit growth","Eps growth","Free cash flow growth","Gross profit growth","Inventory growth","Net income growth","Operating income growth","Revenue growth","Financial Modeling Prep"]},l=void 0,s={unversionedId:"terminal/reference/stocks/fa/growth",id:"terminal/reference/stocks/fa/growth",title:"growth",description:"This documentation page discusses the various parameters and functionalities of a financial growth model. It covers the growth of statement items and financial ratios, including revenue, operating cash flow, assets, debt, EBIT, EPS, gross profit, inventory, net income, operating income, and more. It provides usage examples and parameter descriptions using Financial Modeling Prep as the data source.",source:"@site/content/terminal/reference/stocks/fa/growth.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/growth",permalink:"/terminal/reference/stocks/fa/growth",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/growth.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"growth",description:"This documentation page discusses the various parameters and functionalities of a financial growth model. It covers the growth of statement items and financial ratios, including revenue, operating cash flow, assets, debt, EBIT, EPS, gross profit, inventory, net income, operating income, and more. It provides usage examples and parameter descriptions using Financial Modeling Prep as the data source.",keywords:["financial growth","statement items growth","financial ratios","Revenue Growth","inventory growth","operating cash flow growth","Asset growth","Debt growth","Ebit growth","Eps growth","Free cash flow growth","Gross profit growth","Inventory growth","Net income growth","Operating income growth","Revenue growth","Financial Modeling Prep"]},sidebar:"tutorialSidebar",previous:{title:"fraud",permalink:"/terminal/reference/stocks/fa/fraud"},next:{title:"income",permalink:"/terminal/reference/stocks/fa/income"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],g={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks /fa/growth - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Prints the growth of several financial statement items and ratios over time. This can be either annually and quarterly. These are, among other things, Revenue Growth (3, 5 and 10 years), inventory growth and operating cash flow growth (3, 5 and 10 years). The following fields are expected: Asset growth, Book valueper share growth, Debt growth, Dividendsper share growth, Ebit growth, Eps diluted growth, Eps growth, Five y dividendper share growth per share, Five y net income growth per share, Five y operating c f growth per share, Five y revenue growth per share, Five y shareholders equity growth per share, Free cash flow growth, Gross profit growth, Inventory growth, Net income growth, Operating cash flow growth, Operating income growth, Rd expense growth, Receivables growth, Revenue growth, Sga expenses growth, Ten y dividendper share growth per share, Ten y net income growth per share, Ten y operating c f growth per share, Ten y revenue growth per share, Ten y shareholders equity growth per share, Three y dividendper share growth per share, Three y net income growth per share, Three y operating c f growth per share, Three y revenue growth per share, Three y shareholders equity growth per share, Weighted average shares diluted growth, and Weighted average shares growth ","[Source: Financial Modeling Prep]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"growth [-t TICKER] [-l LIMIT] [-q]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Ticker to analyze"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of latest years/quarters."),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"b_quarter"),(0,a.kt)("td",{parentName:"tr",align:null},"-q  --quarter"),(0,a.kt)("td",{parentName:"tr",align:null},"Quarter fundamental data flag."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
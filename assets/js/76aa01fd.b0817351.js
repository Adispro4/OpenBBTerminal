"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,p=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return r?n.createElement(p,o(o({ref:t},d),{},{components:r})):n.createElement(p,o({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),a=r(67294),i=r(86010),o=r(16550);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:l}=(0,o.TH)();return a.createElement(n.Z,{className:(0,i.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!l.startsWith("/terminal")&&!l.startsWith("/sdk")&&!l.startsWith("/bot")}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},35938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(62872);const o={},s="Fundamental Analysis",c={unversionedId:"terminal/reference/stocks/fa/index",id:"terminal/reference/stocks/fa/index",title:"Fundamental Analysis",description:"<ReferenceCard",source:"@site/content/terminal/reference/stocks/fa/index.mdx",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/",permalink:"/terminal/reference/stocks/fa/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"spos",permalink:"/terminal/reference/stocks/dps/spos"},next:{title:"analysis",permalink:"/terminal/reference/stocks/fa/analysis"}},l={},d=[],m={toc:d},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fundamental-analysis"},"Fundamental Analysis"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"analysis",description:"Display analysis of SEC filings based on NLP model. [Source: https://eclect.us]",url:"/terminal/reference/stocks/fa/analysis",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"askobb",description:"Accept input as a string and return the most appropriate Terminal command",url:"/terminal/reference/stocks/fa/askobb",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"balance",description:"Prints a complete balance sheet statement over time. This can be either quarterly or annually. The following...",url:"/terminal/reference/stocks/fa/balance",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"cash",description:"Prints a complete cash flow statement over time. This can be either quarterly or annually. The following fields...",url:"/terminal/reference/stocks/fa/cash",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"customer",description:"List of customers from ticker provided. [Source: CSIMarket]",url:"/terminal/reference/stocks/fa/customer",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"dcf",description:"A discounted cash flow statement looks to analyze the value of a company. To do this we need to predict the...",url:"/terminal/reference/stocks/fa/dcf",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"dcfc",description:"Prints the discounted cash flow of a company over time including the DCF of today. The following fields are...",url:"/terminal/reference/stocks/fa/dcfc",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"divs",description:"Historical dividends for a company",url:"/terminal/reference/stocks/fa/divs",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"dupont",description:"The extended dupont deconstructs return on equity to allow investors to understand it better",url:"/terminal/reference/stocks/fa/dupont",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"earnings",description:"Print earnings dates and reported EPS of the company. The following fields are expected: Fiscal Date Ending and...",url:"/terminal/reference/stocks/fa/earnings",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"epsfc",description:"Estimated EPS [Source: Seeking Alpha]",url:"/terminal/reference/stocks/fa/epsfc",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"est",description:"Yearly estimates and quarter earnings/revenues. [Source: Business Insider]",url:"/terminal/reference/stocks/fa/est",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"fraud",description:"M-score: ------------------------------------------------ The Beneish model is a statistical model that uses...",url:"/terminal/reference/stocks/fa/fraud",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"growth",description:"Prints the growth of several financial statement items and ratios over time. This can be either annually and...",url:"/terminal/reference/stocks/fa/growth",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"income",description:"Prints a complete income statement over time. This can be either quarterly or annually. The following fields are...",url:"/terminal/reference/stocks/fa/income",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/stocks/fa/load",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"metrics",description:"Prints a list of the key metrics of a company over time. This can be either quarterly or annually. This includes,...",url:"/terminal/reference/stocks/fa/metrics",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"mgmt",description:"Print management team. Namely: Name, Title, and Information from google [Source: Business Insider]",url:"/terminal/reference/stocks/fa/mgmt",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"mktcap",description:"Prints stock price, number of shares, market capitalization and enterprise value over time. The following fields...",url:"/terminal/reference/stocks/fa/mktcap",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"overview",description:"Prints information about, among other things, the industry, sector exchange and company description.",url:"/terminal/reference/stocks/fa/overview",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"pt",description:"Prints price target from analysts. [Source: Business Insider and Financial Modeling Prep]",url:"/terminal/reference/stocks/fa/pt",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"rating",description:"Based on specific ratios, prints information whether the company is a (strong) buy, neutral or a (strong) sell....",url:"/terminal/reference/stocks/fa/rating",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"ratios",description:"Prints in-depth ratios of a company over time. This can be either quarterly or annually. This contains, among...",url:"/terminal/reference/stocks/fa/ratios",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"revfc",description:"Estimated revenue [Source: Seeking Alpha]",url:"/terminal/reference/stocks/fa/revfc",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"rot",description:"Rating over time (monthly). [Source: Finnhub]",url:"/terminal/reference/stocks/fa/rot",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"score",description:"Value investing tool based on Warren Buffett, Joseph Piotroski and Benjamin Graham thoughts [Source: FMP]",url:"/terminal/reference/stocks/fa/score",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"sec",description:"Prints SEC filings of the company. The following fields are expected: Filing Date, Document Date, Type, Category,...",url:"/terminal/reference/stocks/fa/sec",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"shrs",description:"Print Major, institutional and mutualfunds shareholders. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/fa/shrs",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"splits",description:"Stock splits and reverse split events since IPO [Source: Yahoo Finance]",url:"/terminal/reference/stocks/fa/splits",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"supplier",description:"List of suppliers from ticker provided. [Source: CSIMarket]",url:"/terminal/reference/stocks/fa/supplier",command:"true",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"warnings",description:"Sean Seah warnings. Check: Consistent historical earnings per share; Consistently high return on equity;...",url:"/terminal/reference/stocks/fa/warnings",command:"true",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
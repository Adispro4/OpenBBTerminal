"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},72069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const l={title:"tob",description:"Get top of book bid and ask for any ticker on the CBOE exchange using the OpenBB Terminal. Default exchange is BZX, but can be changed to EDGX, BYX, or EDGA. Returns a Dataframe of Bids.",keywords:["Top of Book bid","Ask for ticker","CBOE","BZX","EDGX","BYX","EDGA","OpenBB Stocks","Dataframe of Bids","OpenBB finance"]},i=void 0,c={unversionedId:"sdk/reference/stocks/tob",id:"sdk/reference/stocks/tob",title:"tob",description:"Get top of book bid and ask for any ticker on the CBOE exchange using the OpenBB Terminal. Default exchange is BZX, but can be changed to EDGX, BYX, or EDGA. Returns a Dataframe of Bids.",source:"@site/content/sdk/reference/stocks/tob.md",sourceDirName:"sdk/reference/stocks",slug:"/sdk/reference/stocks/tob",permalink:"/sdk/reference/stocks/tob",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/tob.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"tob",description:"Get top of book bid and ask for any ticker on the CBOE exchange using the OpenBB Terminal. Default exchange is BZX, but can be changed to EDGX, BYX, or EDGA. Returns a Dataframe of Bids.",keywords:["Top of Book bid","Ask for ticker","CBOE","BZX","EDGX","BYX","EDGA","OpenBB Stocks","Dataframe of Bids","OpenBB finance"]},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/sdk/reference/stocks/search"},next:{title:"forecast",permalink:"/sdk/reference/forecast/"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks.tob - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get top of book bid and ask for ticker on exchange ","[CBOE.com]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/cboe_model.py#L13"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.stocks.tob(symbol: str, exchange: str = "BZX")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Ticker to get"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exchange"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange to look at.  Can be ",(0,a.kt)("inlineCode",{parentName:"td"},"BZX"),",",(0,a.kt)("inlineCode",{parentName:"td"},"EDGX"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"BYX"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"EDGA")),(0,a.kt)("td",{parentName:"tr",align:null},"BZX"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DatatFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe of Bids")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);
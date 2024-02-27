"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80689],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(k,o(o({ref:e},m),{},{components:n})):r.createElement(k,o({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(67294),a=n(35742);function l(t){let{title:e}=t;return r.createElement(a.Z,null,r.createElement("title",null,e))}},85496:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"vol",description:"The 'vol' page provides command-line instructions for plotting volumes. It deals with parameters like minimal and maximal strikes, calls, and puts. The page is mainly focused on contracts traded today and the plotting of call or put options only.",keywords:["vol","volume","contracts traded","plot volume","min strike","max strike","calls","puts","options"]},i=void 0,p={unversionedId:"terminal/reference/stocks/options/vol",id:"terminal/reference/stocks/options/vol",title:"vol",description:"The 'vol' page provides command-line instructions for plotting volumes. It deals with parameters like minimal and maximal strikes, calls, and puts. The page is mainly focused on contracts traded today and the plotting of call or put options only.",source:"@site/content/terminal/reference/stocks/options/vol.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/vol",permalink:"/terminal/reference/stocks/options/vol",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/vol.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"vol",description:"The 'vol' page provides command-line instructions for plotting volumes. It deals with parameters like minimal and maximal strikes, calls, and puts. The page is mainly focused on contracts traded today and the plotting of call or put options only.",keywords:["vol","volume","contracts traded","plot volume","min strike","max strike","calls","puts","options"]},sidebar:"tutorialSidebar",previous:{title:"voi",permalink:"/terminal/reference/stocks/options/voi"},next:{title:"vsurf",permalink:"/terminal/reference/stocks/options/vsurf"}},s={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:m},u="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /options/vol - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Plot volume. Volume refers to the number of contracts traded today."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"vol [-m MIN] [-M MAX] [-c] [-p] [-e {2024-03-01,2024-03-08,2024-03-15,2024-03-22,2024-03-28,2024-04-05,2024-04-19,2024-05-17,2024-06-21,2024-07-19,2024-08-16,2024-09-20,2024-10-18,2024-11-15,2024-12-20,2025-01-17,2025-03-21,2025-06-20,2025-09-19,2025-12-19,2026-01-16,2026-06-18,}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"min"),(0,a.kt)("td",{parentName:"tr",align:null},"-m  --min"),(0,a.kt)("td",{parentName:"tr",align:null},"Min strike to plot"),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max"),(0,a.kt)("td",{parentName:"tr",align:null},"-M  --max"),(0,a.kt)("td",{parentName:"tr",align:null},"Max strike to plot"),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"calls"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --calls"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to plot call options only"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"puts"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --puts"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to plot put options only"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exp"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --expiration"),(0,a.kt)("td",{parentName:"tr",align:null},"Select expiration date (YYYY-MM-DD)"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"2024-03-01, 2024-03-08, 2024-03-15, 2024-03-22, 2024-03-28, 2024-04-05, 2024-04-19, 2024-05-17, 2024-06-21, 2024-07-19, 2024-08-16, 2024-09-20, 2024-10-18, 2024-11-15, 2024-12-20, 2025-01-17, 2025-03-21, 2025-06-20, 2025-09-19, 2025-12-19, 2026-01-16, 2026-06-18,")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154291303-c23edf53-4242-4d9b-a45e-22ce8a633aa8.png",alt:"vol"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
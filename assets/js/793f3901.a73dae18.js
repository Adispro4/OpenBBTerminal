"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44463],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,u=m["".concat(l,".").concat(p)]||m[p]||f[p]||o;return t?n.createElement(u,i(i({ref:r},s),{},{components:t})):n.createElement(u,i({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),c=t(48334);function l(e){let{title:r,url:t,description:l,command:d}=e;const{pathname:s}=(0,i.TH)(),m=s.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&o.createElement(c.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},94424:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},c="Rate",l={unversionedId:"platform/reference/fixedincome/rate/index",id:"platform/reference/fixedincome/rate/index",title:"Rate",description:"Commands",source:"@site/content/platform/reference/fixedincome/rate/index.mdx",sourceDirName:"platform/reference/fixedincome/rate",slug:"/platform/reference/fixedincome/rate/",permalink:"/platform/reference/fixedincome/rate/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/fixedincome/rate/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"spot_rates",permalink:"/platform/reference/fixedincome/corporate/spot_rates"},next:{title:"ameribor",permalink:"/platform/reference/fixedincome/rate/ameribor"}},d={},s=[{value:"Commands",id:"commands",level:3}],m={toc:s},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rate"},"Rate"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"sonia",description:"Sterling Overnight Index Average",url:"/platform/reference/fixedincome/rate/sonia",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"dpcredit",description:"Discount Window Primary Credit Rate",url:"/platform/reference/fixedincome/rate/dpcredit",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"effr",description:"Fed Funds Rate",url:"/platform/reference/fixedincome/rate/effr",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"ecb",description:"European Central Bank Interest Rates",url:"/platform/reference/fixedincome/rate/ecb",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"estr",description:"Euro Short-Term Rate",url:"/platform/reference/fixedincome/rate/estr",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"effr forecast",description:"Fed Funds Rate Projections",url:"/platform/reference/fixedincome/rate/effr_forecast",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"iorb",description:"Interest on Reserve Balances",url:"/platform/reference/fixedincome/rate/iorb",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"ameribor",description:"Ameribor",url:"/platform/reference/fixedincome/rate/ameribor",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
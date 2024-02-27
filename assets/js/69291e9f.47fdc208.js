"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"v2.4.1",version:"2.4.1",date:new Date("2023-02-17T00:00:00.000Z"),description:"v2.4.1",sidebar_position:102},i=void 0,l={unversionedId:"terminal/changelog/version2_4_1",id:"terminal/changelog/version2_4_1",title:"v2.4.1",description:"v2.4.1",source:"@site/content/terminal/changelog/version2_4_1.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version2_4_1",permalink:"/terminal/changelog/version2_4_1",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version2_4_1.mdx",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",sidebarPosition:102,frontMatter:{title:"v2.4.1",version:"2.4.1",date:"2023-02-17T00:00:00.000Z",description:"v2.4.1",sidebar_position:102},sidebar:"tutorialSidebar",previous:{title:"v2.5.0",permalink:"/terminal/changelog/version2_5_0"},next:{title:"v2.4.0",permalink:"/terminal/changelog/version2_4_0"}},s={},c=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whats-new"},"What's new"),(0,a.kt)("p",null,"Patches a bug that using ",(0,a.kt)("inlineCode",{parentName:"p"},"openbb")," to launch the terminal avoids loading all data into the terminal.  We also have a facelift on the sdk interface.  Enjoy!"),(0,a.kt)("h2",{id:"whats-changed"},"What's changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adds Personal Access Token Commands (#4266) @hjoaquim"),(0,a.kt)("li",{parentName:"ul"},"SDK Added about() for methods and class, fixed pypi.md (#4273) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Code Coverage (#4236) @luqmanbello"),(0,a.kt)("li",{parentName:"ul"},"Small typos on readme (#4267) @jose-donato"),(0,a.kt)("li",{parentName:"ul"},"Hotfix/SDK v Dunder (#4269) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Bumping to mypy 1.0 (#4198) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Feature/improve docs (#4260) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Update SDK Docs Generation (#4262) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"SDK Auto-Generation/Refactor (#3358) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Account menu improvements (#4252) @montezdesousa"),(0,a.kt)("li",{parentName:"ul"},"Minor fixes on login (#4234) @hjoaquim"),(0,a.kt)("li",{parentName:"ul"},"Feature/doc updates (#4253) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Fix the stuff (#4254) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Updated many images and adjusted many wrong pieces of documentation (#4251) @JerBouma"),(0,a.kt)("li",{parentName:"ul"},"Hotfix/algolia smth (#4244) @jose-donato"),(0,a.kt)("li",{parentName:"ul"},"Algolia fix (#4243) @jose-donato")))}m.isMDXComponent=!0}}]);
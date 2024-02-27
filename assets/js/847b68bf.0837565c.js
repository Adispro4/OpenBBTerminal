"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=o,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(35742);function i(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},46072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(87462),o=(n(67294),n(3905)),i=n(88828);const a={title:"Deprecating Endpoints",sidebar_position:5,description:"This guide provides detailed instructions on how to deprecate an endpoint in the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Deprecation","Deprecated"]},p=void 0,d={unversionedId:"platform/development/contributor-guidelines/deprecating_endpoints",id:"platform/development/contributor-guidelines/deprecating_endpoints",title:"Deprecating Endpoints",description:"This guide provides detailed instructions on how to deprecate an endpoint in the OpenBB Platform.",source:"@site/content/platform/development/contributor-guidelines/deprecating_endpoints.md",sourceDirName:"platform/development/contributor-guidelines",slug:"/platform/development/contributor-guidelines/deprecating_endpoints",permalink:"/platform/development/contributor-guidelines/deprecating_endpoints",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributor-guidelines/deprecating_endpoints.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",sidebarPosition:5,frontMatter:{title:"Deprecating Endpoints",sidebar_position:5,description:"This guide provides detailed instructions on how to deprecate an endpoint in the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Deprecation","Deprecated"]},sidebar:"tutorialSidebar",previous:{title:"Sharing Your Extension",permalink:"/platform/development/contributor-guidelines/sharing_extensions"},next:{title:"Write Code and Commit",permalink:"/platform/development/contributor-guidelines/write_code_commit"}},c={},l=[{value:"Deprecating an endpoint",id:"deprecating-an-endpoint",level:2}],s={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{title:"Deprecating Endpoints - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"Deprecating commands is essential to maintaining the OpenBB Platform. This guide outlines the process for deprecating an endpoint."),(0,o.kt)("h2",{id:"deprecating-an-endpoint"},"Deprecating an endpoint"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the new endpoint that will replace the deprecated one.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the deprecation warning"),(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"router")," where the endpoint to be deprecated exists. Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"deprecated")," flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"deprecation=OpenBBDeprecationWarning(\u2026)")," argument to the decorator. Refer to the example below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n...\nfrom openbb_core.app.deprecation import OpenBBDeprecationWarning\n...\n\n    @router.command(\n        model="MarketIndices",\n        deprecated=True,\n        deprecation=OpenBBDeprecationWarning(\n            message="This endpoint is deprecated; use `/index/price/historical` instead.",\n            since=(4, 1),\n            expected_removal=(4, 5),\n        ),\n    )\n    async def market(\n        cc: CommandContext,\n        provider_choices: ProviderChoices,\n        standard_params: StandardParams,\n        extra_params: ExtraParams,\n    ) -> OBBject:\n        """Historical Market Indices."""\n    return await OBBject.from_query(Query(**locals()))\n\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get approval from a OpenBB Platform maintainer: We will help you determine the appropriate version for the deprecation warning, and communicate the change(s) to the relevant personnel that might depend on the endpoint you are deprecating.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove as we say - the endpoint will be removed in the version specified in the deprecation warning."))))}u.isMDXComponent=!0}}]);
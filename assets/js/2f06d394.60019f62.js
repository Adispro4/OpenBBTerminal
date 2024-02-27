"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},91200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const i={title:"Launching",sidebar_position:2,description:"Comprehensive troubleshooting guide for various software and system compatibility issues encountered while using the OpenBB Terminal. Covers topics such as Mac M1/M2 Rosetta installation, Terminal, and SDK launch issues, ModuleNotFoundError solutions, SSL certificates authorization failures, proxy connection issues, and Linux Ubuntu specific problems.",keywords:["Mac M1/M2 Rosetta installation","Incompatible library version issue","Terminal app launch failure","ModuleNotFoundError OpenBB troubleshooting","Fontconfig warning solution","SSL certificates authorization failure","Proxy connection issues","Linux Ubuntu OpenBB launch issue"]},l=void 0,s={unversionedId:"terminal/faqs/launching",id:"terminal/faqs/launching",title:"Launching",description:"Comprehensive troubleshooting guide for various software and system compatibility issues encountered while using the OpenBB Terminal. Covers topics such as Mac M1/M2 Rosetta installation, Terminal, and SDK launch issues, ModuleNotFoundError solutions, SSL certificates authorization failures, proxy connection issues, and Linux Ubuntu specific problems.",source:"@site/content/terminal/faqs/launching.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/launching",permalink:"/terminal/faqs/launching",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/launching.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",sidebarPosition:2,frontMatter:{title:"Launching",sidebar_position:2,description:"Comprehensive troubleshooting guide for various software and system compatibility issues encountered while using the OpenBB Terminal. Covers topics such as Mac M1/M2 Rosetta installation, Terminal, and SDK launch issues, ModuleNotFoundError solutions, SSL certificates authorization failures, proxy connection issues, and Linux Ubuntu specific problems.",keywords:["Mac M1/M2 Rosetta installation","Incompatible library version issue","Terminal app launch failure","ModuleNotFoundError OpenBB troubleshooting","Fontconfig warning solution","SSL certificates authorization failure","Proxy connection issues","Linux Ubuntu OpenBB launch issue"]},sidebar:"tutorialSidebar",previous:{title:"Installation and Updates",permalink:"/terminal/faqs/installation_updates"},next:{title:"General Operation",permalink:"/terminal/faqs/general_operation"}},u={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Launching - Faqs | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Mac: Invalid CPU Type - Terminal fails to launch."),(0,r.kt)("p",null,"This error is usually the result of a Mac M1/M2 machine which does not have Rosetta installed. Install from the system Terminal command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"softwareupdate --install-rosetta\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Incompatible library version: libtiff.6.dylib requires version 10.0.0 or later, but liblzma.5.dylib provides version 8.0.0"),(0,r.kt)("p",null,"This issue can be resolved by following the steps below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Show hidden files",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Command + Shift + . (period)"))),(0,r.kt)("li",{parentName:"ul"},"Then go to Applications folder > OpenBB Terminal > .OpenBB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Find the file "liblzma.5.dylib" and remove it.'))),(0,r.kt)("li",{parentName:"ul"},"Relaunch the terminal."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Terminal app does not launch: Failed to execute script 'terminal' due to unhandled exception!"),(0,r.kt)("p",null,"When an installer-packaged version of the OpenBB Terminal fails to launch, because of this message, the machine may have an obsolete CPU-type or operating system. Please try installing via the source code, and if problems persist, reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/xPHTuHCmuV"},"Discord")," or fill out a support request form on our ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/support"},"website"),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ModuleNotFoundError: No module named '______'"),(0,r.kt)("p",null,"Before troubleshooting please verify that the recommended installation instructions were followed. These errors often can occur when the virtual environment has not been activated, or the ",(0,r.kt)("inlineCode",{parentName:"p"},"poetry install")," command was skipped. Activate the OpenBB virtual environment created during the installation process prior to launching or importing the SDK."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Terminal"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"conda activate obb\npython terminal.py\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SDK"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"conda activate obb\nipython\nfrom openbb_terminal.sdk import openbb\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Jupyter"),":"),(0,r.kt)("p",null,"Check that the kernel selected for the session is the OpenBB virtual environment created during the installation process and then re-run the cell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"from openbb_terminal.sdk import openbb\n")),(0,r.kt)("p",null,"There is also a possibility that a new dependency has been added to the code and it has not yet been installed in the environment. This may happen after updating the code from GitHub, but before running the ",(0,r.kt)("inlineCode",{parentName:"p"},"poetry install")," install command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"poetry install -E all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Fontconfig warning: ignoring UTF-8: not a valid region tag"),(0,r.kt)("p",null,"In the OS default terminal shell profile, check for a variable similar to, \u201cset locale environment variables at startup\u201d, then also, set text encoding to UTF-8.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"SSL certificates fail to authorize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"SSL: CERTIFICATE_VERIFY_FAILED\n")),(0,r.kt)("p",null,"An error message, similar to above, is usually encountered while attempting to use the OpenBB Platform from behind a firewall.  A workplace environment is typically the most common occurrence.  Try connecting to the internet directly through a home network to test the connection. If using a work computer and/or network,  we recommend speaking with the company's IT department prior to installing or running any software."),(0,r.kt)("p",null,"A potential solution is to try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pip install pip-system-certs\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cannot connect due to proxy connection."),(0,r.kt)("p",null,"Find the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file (located at the root of the user account folder: (",(0,r.kt)("inlineCode",{parentName:"p"},"~/.openbb_terminal/.env"),"), and add a line at the bottom of the file with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'HTTP_PROXY="<ADDRESS>" or HTTPS_PROXY="<ADDRESS>\u201d\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Linux Ubuntu installation was successful but now hangs on launch."),(0,r.kt)("p",null,"Check that VcXsvr - or an equivalent X-host - is running and configured prior to launch.")))}d.isMDXComponent=!0}}]);
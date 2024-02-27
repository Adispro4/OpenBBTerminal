"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81640],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(a),u=r,f=s["".concat(m,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(f,i(i({ref:e},d),{},{components:a})):n.createElement(f,i({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},24394:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"Customization",sidebar_position:4,description:"This documentation page details the functionality of the Settings Menu and the Feature Flags Menu in the OpenBB Terminal. It instructs users how to customize the Terminal, alter its behaviour, and manipulate various environment variables.",keywords:["Settings Menu","Feature Flags Menu","customize Terminal","alter Terminal behaviour","environment variables","Documentation"]},o=void 0,m={unversionedId:"terminal/usage/overview/customizing-the-terminal",id:"terminal/usage/overview/customizing-the-terminal",title:"Customization",description:"This documentation page details the functionality of the Settings Menu and the Feature Flags Menu in the OpenBB Terminal. It instructs users how to customize the Terminal, alter its behaviour, and manipulate various environment variables.",source:"@site/content/terminal/usage/overview/customizing-the-terminal.md",sourceDirName:"terminal/usage/overview",slug:"/terminal/usage/overview/customizing-the-terminal",permalink:"/terminal/usage/overview/customizing-the-terminal",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/overview/customizing-the-terminal.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",sidebarPosition:4,frontMatter:{title:"Customization",sidebar_position:4,description:"This documentation page details the functionality of the Settings Menu and the Feature Flags Menu in the OpenBB Terminal. It instructs users how to customize the Terminal, alter its behaviour, and manipulate various environment variables.",keywords:["Settings Menu","Feature Flags Menu","customize Terminal","alter Terminal behaviour","environment variables","Documentation"]},sidebar:"tutorialSidebar",previous:{title:"Commands and arguments",permalink:"/terminal/usage/overview/commands-and-arguments"},next:{title:"Data",permalink:"/terminal/usage/data/"}},p={},d=[{value:"Settings Menu",id:"settings-menu",level:2},{value:"Style example",id:"style-example",level:3},{value:"Timezone example",id:"timezone-example",level:3},{value:"Feature Flags Menu",id:"feature-flags-menu",level:2},{value:"Interactive example",id:"interactive-example",level:3},{value:"Overwrite",id:"overwrite",level:3},{value:"Exithelp",id:"exithelp",level:3}],s={toc:d},k="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Customization - Overview - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),"The OpenBB Terminal contains two menus for altering the behaviour and presentation of the Terminal, Settings and Feature Flags, both of which are accessed from the main menu.",(0,r.kt)("br",null),(0,r.kt)("h2",{id:"settings-menu"},"Settings Menu"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/settings")," menu provides methods for customizing the look of the Terminal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chart")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select the chart style.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colors")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the color scheme for Terminal fonts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dt")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add or remove date and time from the Terminal command line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flair")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the flair emoji to be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the default plot height.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lang")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select the language for the Terminal menus and commands.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use an alternate data sources file. (Not recommended to change.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"table")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select the table style.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tz")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select a timezone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"userdata")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Change the local path to the OpenBBUserData folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the default plot width.")))),(0,r.kt)("h3",{id:"style-example"},"Style example"),(0,r.kt)("p",null,"Set charts and tables styles as light or dark mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/settings/table -s light\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/settings/chart -s dark\n")),(0,r.kt)("h3",{id:"timezone-example"},"Timezone example"),(0,r.kt)("p",null,"Set the local timezone for the Terminal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/settings/tz Africa/Johannesburg\n")),(0,r.kt)("h2",{id:"feature-flags-menu"},"Feature Flags Menu"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/featflags")," menu provides methods for altering the behaviour and responses with environment variables. These configurations are on/off, and the status is indicated by the red/green text of each.  Each parameter is listed below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cls")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Clear the screen after each command.  Default state is off.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"exithelp")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Automatically print the screen after navigating back one menu.  Default state is off.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interactive")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable/disable interactive tables.  Disabling prints the table directly on the Terminal screen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"overwrite")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Automatically overwrite exported files with the same name.  Default state is off.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"promptkit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable auto complete and history.  Default state is on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rcontext")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remember loaded tickers while switching menus.  Default state is on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"retryload")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Retries misspelled commands with the load function first.  Default state is off.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reporthtml")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generate reports as HTML files.  Default state is on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"richpanel")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Displays a border around menus.  Default state is on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tbhint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Display usage hints in the bottom toolbar.  Default state is on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Displays the currently installed version number in the bottom right corner.")))),(0,r.kt)("h3",{id:"interactive-example"},"Interactive example"),(0,r.kt)("p",null,"When it is off, the Terminal displays all tables directly on the screen instead of opening a window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/quote spy\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"SPY"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"day_low"),(0,r.kt)("td",{parentName:"tr",align:"left"},"434.87")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"day_high"),(0,r.kt)("td",{parentName:"tr",align:"left"},"438.09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SPY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SPDR S&P 500 ETF Trust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"price"),(0,r.kt)("td",{parentName:"tr",align:"left"},"437.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"changes_percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.0732")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"year_high"),(0,r.kt)("td",{parentName:"tr",align:"left"},"459.44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"year_low"),(0,r.kt)("td",{parentName:"tr",align:"left"},"373.61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"market_cap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"401300183873.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"price_avg50"),(0,r.kt)("td",{parentName:"tr",align:"left"},"433.4872")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"price_avg200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"424")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"volume"),(0,r.kt)("td",{parentName:"tr",align:"left"},"56366265")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avg_volume"),(0,r.kt)("td",{parentName:"tr",align:"left"},"83194937")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AMEX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"open"),(0,r.kt)("td",{parentName:"tr",align:"left"},"437.55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"previous_close"),(0,r.kt)("td",{parentName:"tr",align:"left"},"436.93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eps"),(0,r.kt)("td",{parentName:"tr",align:"left"},"19.851322")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pe"),(0,r.kt)("td",{parentName:"tr",align:"left"},"22.03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"shares_outstanding"),(0,r.kt)("td",{parentName:"tr",align:"left"},"917782010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-11-08 21:00")))),(0,r.kt)("h3",{id:"overwrite"},"Overwrite"),(0,r.kt)("p",null,"Enable this feature flag to remove the prompt when exporting a file with the same name. This will only overwrite an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"XLSX")," file if the ",(0,r.kt)("inlineCode",{parentName:"p"},"--sheet-name")," is not defined."),(0,r.kt)("h3",{id:"exithelp"},"Exithelp"),(0,r.kt)("p",null,"Enabling this prints the parent menu on the screen when navigating back from a sub-menu."))}u.isMDXComponent=!0}}]);
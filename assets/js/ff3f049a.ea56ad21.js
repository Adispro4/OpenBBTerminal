"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,b=m["".concat(o,".").concat(c)]||m[c]||p[c]||l;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),s=a(16550),o=a(91980),d=a(67392),u=a(50012);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,d]=b({queryString:a,groupId:r}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=o??m;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var g=a(72389);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:d,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),{pathname:c}=(0,s.TH)(),b=e=>{const t=e.currentTarget,a=m.indexOf(t),r=u[a].value;r!==o&&(p(t),d(r))},h=e=>{let t=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:b},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",y.tabItem,i?.className,{"border-b-2 pointer-events-none":o===t,"border-b-2 text-[#669dcb] border-[#669dcb]":o===t&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==t&&c.startsWith("/terminal")})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(f,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},65836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(88828),i=a(31792),s=a(85162);const o={title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",keywords:["historical analyst estimates","analyst stock recommendations","python obb.equity.estimates.historical","parameters","standard","symbol","union[str, list[str]]","period","literal['quarter', 'annual']","limit","int","provider","literal['fmp']","returns","obbject","list[analystestimates]","serializable results","optional[literal['fmp']]","optional[list[warning_]]","optional[chart]","optional[metadata]","data","symbol","str","date","estimated revenue low","estimated revenue high","estimated revenue average","estimated ebitda low","estimated ebitda high","estimated ebitda average","estimated ebit low","estimated ebit high","estimated ebit average","estimated net income low","estimated net income high","estimated net income average","estimated sga expense low","estimated sga expense high","estimated sga expense average","estimated eps average","estimated eps high","estimated eps low","number of analysts who estimated revenue","number of analysts who estimated eps"]},d=void 0,u={unversionedId:"excel/reference/equity/estimates/historical",id:"excel/reference/equity/estimates/historical",title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",source:"@site/content/excel/reference/equity/estimates/historical.md",sourceDirName:"excel/reference/equity/estimates",slug:"/excel/reference/equity/estimates/historical",permalink:"/excel/reference/equity/estimates/historical",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/estimates/historical.md",tags:[],version:"current",frontMatter:{title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",keywords:["historical analyst estimates","analyst stock recommendations","python obb.equity.estimates.historical","parameters","standard","symbol","union[str, list[str]]","period","literal['quarter', 'annual']","limit","int","provider","literal['fmp']","returns","obbject","list[analystestimates]","serializable results","optional[literal['fmp']]","optional[list[warning_]]","optional[chart]","optional[metadata]","data","symbol","str","date","estimated revenue low","estimated revenue high","estimated revenue average","estimated ebitda low","estimated ebitda high","estimated ebitda average","estimated ebit low","estimated ebit high","estimated ebit average","estimated net income low","estimated net income high","estimated net income average","estimated sga expense low","estimated sga expense high","estimated sga expense average","estimated eps average","estimated eps high","estimated eps low","number of analysts who estimated revenue","number of analysts who estimated eps"]},sidebar:"tutorialSidebar",previous:{title:"CONSENSUS",permalink:"/excel/reference/equity/estimates/consensus"},next:{title:"PRICE_TARGET",permalink:"/excel/reference/equity/estimates/price_target"}},m={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],c={toc:p},b="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(b,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"EQUITY.ESTIMATES.HISTORICAL | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Historical analyst estimates for earnings and revenue."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.EQUITY.ESTIMATES.HISTORICAL(symbol,[period],[limit],[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.EQUITY.ESTIMATES.HISTORICAL("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"fmp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_revenue_low"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated revenue low.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_revenue_high"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated revenue high.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_revenue_avg"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated revenue average.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_ebitda_low"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EBITDA low.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_ebitda_high"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EBITDA high.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_ebitda_avg"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EBITDA average.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_ebit_low"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EBIT low.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_ebit_high"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EBIT high.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_ebit_avg"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EBIT average.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_net_income_low"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated net income low.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_net_income_high"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated net income high.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_net_income_avg"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated net income average.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_sga_expense_low"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated SGA expense low.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_sga_expense_high"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated SGA expense high.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_sga_expense_avg"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated SGA expense average.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_eps_avg"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EPS average.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_eps_high"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EPS high.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"estimated_eps_low"),(0,n.kt)("td",{parentName:"tr",align:null},"Estimated EPS low.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number_analyst_estimated_revenue"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of analysts who estimated revenue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number_analysts_estimated_eps"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of analysts who estimated EPS.")))))))}h.isMDXComponent=!0}}]);
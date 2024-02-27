"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70739],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),u=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(a),c=n,g=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return a?r.createElement(g,i(i({ref:e},d),{},{components:a})):r.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},e)}},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},31792:(t,e,a)=>{a.d(e,{Z:()=>f});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),d=a(50012);function p(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:r,default:n}}=t;return{value:e,label:a,attributes:r,default:n}}))}function m(t){const{values:e,children:a}=t;return(0,n.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const r=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,t),r.replace({...r.location,search:e.toString()})}),[l,r])]}function k(t){const{defaultValue:e,queryString:a=!1,groupId:r}=t,l=m(t),[i,o]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=a.find((t=>t.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[s,u]=g({queryString:a,groupId:r}),[p,k]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,l]=(0,d.Nk)(a);return[r,(0,n.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:r}),v=(()=>{const t=s??p;return c({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),u(t),k(t)}),[u,k,l]),tabValues:l}}var v=a(72389);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function h(t){let{className:e,block:a,selectedValue:s,selectValue:u,tabValues:d}=t;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),g=t=>{const e=t.currentTarget,a=p.indexOf(e),r=d[a].value;r!==s&&(m(e),u(r))},k=t=>{let e=null;switch(t.key){case"Enter":g(t);break;case"ArrowRight":{const a=p.indexOf(t.currentTarget)+1;e=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(t.currentTarget)-1;e=p[a]??p[p.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},d.map((t=>{let{value:e,label:a,attributes:i}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>p.push(t),onKeyDown:k,onClick:g},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":s===e,"border-b-2 text-[#669dcb] border-[#669dcb]":s===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==e&&c.startsWith("/terminal")})}),a??e)})))}function y(t){let{lazy:e,children:a,selectedValue:r}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function N(t){const e=k(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},n.createElement(h,(0,r.Z)({},t,e)),n.createElement(y,(0,r.Z)({},t,e)))}function f(t){const e=(0,v.Z)();return n.createElement(N,(0,r.Z)({key:String(e)},t))}},46138:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(88828),i=a(31792),o=a(85162);const s={title:"MULTIPLES",description:"Learn how to calculate equity valuation multiples for a stock ticker using the OBB Python function. Discover the available parameters and the data returned, including revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Improve your investment analysis with this powerful tool.",keywords:["equity valuation multiples","stock ticker valuation","python function","parameters","returns","data","revenue per share","net income per share","operating cash flow per share","free cash flow per share","cash per share","book value per share","tangible book value per share","shareholders equity per share","market capitalization","price-to-earnings ratio","price-to-sales ratio","price-to-operating cash flow ratio","price-to-free cash flow ratio","price-to-book ratio","price-to-tangible book ratio","enterprise value-to-sales ratio","enterprise value-to-EBITDA ratio","earnings yield","free cash flow yield","debt-to-equity ratio","debt-to-assets ratio","net debt-to-EBITDA ratio","current ratio","interest coverage","income quality","dividend yield","payout ratio","sales general and administrative expenses-to-revenue ratio","research and development expenses-to-revenue ratio","intangibles-to-total assets ratio","capital expenditures-to-operating cash flow ratio","capital expenditures-to-revenue ratio","capital expenditures-to-depreciation ratio","stock-based compensation-to-revenue ratio","graham number","return on invested capital","return on tangible assets","graham net-net working capital","working capital","tangible asset value","net current asset value","invested capital","average receivables","average payables","average inventory","days sales outstanding","days payables outstanding","days of inventory on hand","receivables turnover","payables turnover","inventory turnover","return on equity","capital expenditures per share"]},u=void 0,d={unversionedId:"excel/reference/equity/fundamental/multiples",id:"excel/reference/equity/fundamental/multiples",title:"MULTIPLES",description:"Learn how to calculate equity valuation multiples for a stock ticker using the OBB Python function. Discover the available parameters and the data returned, including revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Improve your investment analysis with this powerful tool.",source:"@site/content/excel/reference/equity/fundamental/multiples.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/multiples",permalink:"/excel/reference/equity/fundamental/multiples",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/multiples.md",tags:[],version:"current",frontMatter:{title:"MULTIPLES",description:"Learn how to calculate equity valuation multiples for a stock ticker using the OBB Python function. Discover the available parameters and the data returned, including revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Improve your investment analysis with this powerful tool.",keywords:["equity valuation multiples","stock ticker valuation","python function","parameters","returns","data","revenue per share","net income per share","operating cash flow per share","free cash flow per share","cash per share","book value per share","tangible book value per share","shareholders equity per share","market capitalization","price-to-earnings ratio","price-to-sales ratio","price-to-operating cash flow ratio","price-to-free cash flow ratio","price-to-book ratio","price-to-tangible book ratio","enterprise value-to-sales ratio","enterprise value-to-EBITDA ratio","earnings yield","free cash flow yield","debt-to-equity ratio","debt-to-assets ratio","net debt-to-EBITDA ratio","current ratio","interest coverage","income quality","dividend yield","payout ratio","sales general and administrative expenses-to-revenue ratio","research and development expenses-to-revenue ratio","intangibles-to-total assets ratio","capital expenditures-to-operating cash flow ratio","capital expenditures-to-revenue ratio","capital expenditures-to-depreciation ratio","stock-based compensation-to-revenue ratio","graham number","return on invested capital","return on tangible assets","graham net-net working capital","working capital","tangible asset value","net current asset value","invested capital","average receivables","average payables","average inventory","days sales outstanding","days payables outstanding","days of inventory on hand","receivables turnover","payables turnover","inventory turnover","return on equity","capital expenditures per share"]},sidebar:"tutorialSidebar",previous:{title:"METRICS",permalink:"/excel/reference/equity/fundamental/metrics"},next:{title:"OVERVIEW",permalink:"/excel/reference/equity/fundamental/overview"}},p={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],c={toc:m},g="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(g,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"EQUITY.FUNDAMENTAL.MULTIPLES | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Equity Valuation Multiples. Valuation multiples for a stock ticker."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.EQUITY.FUNDAMENTAL.MULTIPLES(symbol,[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.EQUITY.FUNDAMENTAL.MULTIPLES("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for. Multiple items allowed: fmp.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"fmp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"revenue_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Revenue per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_income_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Net income per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_cash_flow_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating cash flow per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"free_cash_flow_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Free cash flow per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"book_value_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Book value per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tangible_book_value_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Tangible book value per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"shareholders_equity_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Shareholders equity per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interest_debt_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Interest debt per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market_cap_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Market capitalization calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enterprise_value_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pe_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-earnings ratio (P/E ratio) calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_sales_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-sales ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pocf_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-operating cash flow ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pfcf_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-free cash flow ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pb_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-book ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ptb_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-tangible book ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ev_to_sales_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value-to-sales ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enterprise_value_over_ebitda_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value-to-EBITDA ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ev_to_operating_cash_flow_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value-to-operating cash flow ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ev_to_free_cash_flow_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value-to-free cash flow ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"earnings_yield_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Earnings yield calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"free_cash_flow_yield_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Free cash flow yield calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt_to_equity_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Debt-to-equity ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt_to_assets_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Debt-to-assets ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_debt_to_ebitda_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Net debt-to-EBITDA ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Current ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interest_coverage_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Interest coverage calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"income_quality_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Income quality calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_yield_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend yield calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_yield_percentage_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend yield percentage calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_to_market_cap_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend to market capitalization ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend per share calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payout_ratio_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Payout ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sales_general_and_administrative_to_revenue_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Sales general and administrative expenses-to-revenue ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"research_and_development_to_revenue_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Research and development expenses-to-revenue ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"intangibles_to_total_assets_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Intangibles-to-total assets ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capex_to_operating_cash_flow_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditures-to-operating cash flow ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capex_to_revenue_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditures-to-revenue ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capex_to_depreciation_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditures-to-depreciation ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stock_based_compensation_to_revenue_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock-based compensation-to-revenue ratio calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"graham_number_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Graham number calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roic_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on invested capital calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_on_tangible_assets_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on tangible assets calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"graham_net_net_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Graham net-net working capital calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"working_capital_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Working capital calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tangible_asset_value_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Tangible asset value calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_current_asset_value_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Net current asset value calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"invested_capital_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Invested capital calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"average_receivables_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Average receivables calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"average_payables_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Average payables calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"average_inventory_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Average inventory calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_sales_outstanding_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Days sales outstanding calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_payables_outstanding_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Days payables outstanding calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_of_inventory_on_hand_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Days of inventory on hand calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receivables_turnover_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Receivables turnover calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payables_turnover_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Payables turnover calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"inventory_turnover_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Inventory turnover calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roe_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on equity calculated as trailing twelve months.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capex_per_share_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditures per share calculated as trailing twelve months.")))))))}k.isMDXComponent=!0}}]);
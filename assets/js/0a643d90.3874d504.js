"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,b=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},72265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const l={title:"trading_pairs",description:"Information and code snippet on how to get all trading pairs on binance using openbb.crypto.dd.trading_pairs(). Details parameters and returns.",keywords:["trading pairs","binance","openbb.crypto.dd","cryptocurrency","due diligence","openbb terminal","trading parameters","API","ETHBTC symbol","trading functionality"]},o=void 0,p={unversionedId:"sdk/reference/crypto/dd/trading_pairs",id:"sdk/reference/crypto/dd/trading_pairs",title:"trading_pairs",description:"Information and code snippet on how to get all trading pairs on binance using openbb.crypto.dd.trading_pairs(). Details parameters and returns.",source:"@site/content/sdk/reference/crypto/dd/trading_pairs.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/trading_pairs",permalink:"/sdk/reference/crypto/dd/trading_pairs",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/dd/trading_pairs.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"trading_pairs",description:"Information and code snippet on how to get all trading pairs on binance using openbb.crypto.dd.trading_pairs(). Details parameters and returns.",keywords:["trading pairs","binance","openbb.crypto.dd","cryptocurrency","due diligence","openbb terminal","trading parameters","API","ETHBTC symbol","trading functionality"]},sidebar:"tutorialSidebar",previous:{title:"trading_pair_info",permalink:"/sdk/reference/crypto/dd/trading_pair_info"},next:{title:"twitter",permalink:"/sdk/reference/crypto/dd/twitter"}},s={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"crypto.dd.trading_pairs - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Helper method that return all trading pairs on binance. Methods ause this data for input for e.g"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L23"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.crypto.dd.trading_pairs()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"List","[dict]"),(0,a.kt)("td",{parentName:"tr",align:null},"list of dictionaries in format:",(0,a.kt)("br",null),"[",(0,a.kt)("br",null),"{'symbol': 'ETHBTC', 'status': 'TRADING', 'baseAsset': 'ETH', 'baseAssetPrecision': 8,",(0,a.kt)("br",null),"'quoteAsset': 'BTC', 'quotePrecision': 8, 'quoteAssetPrecision': 8,",(0,a.kt)("br",null),"'baseCommissionPrecision': 8, 'quoteCommissionPrecision': 8,",(0,a.kt)("br",null),"'orderTypes': ","['LIMIT', 'LIMIT_MAKER', 'MARKET', 'STOP_LOSS_LIMIT', 'TAKE_PROFIT_LIMIT']",",",(0,a.kt)("br",null),"'icebergAllowed': True,",(0,a.kt)("br",null),"'ocoAllowed': True,",(0,a.kt)("br",null),"'quoteOrderQtyMarketAllowed': True,",(0,a.kt)("br",null),"'isSpotTradingAllowed': True,",(0,a.kt)("br",null),"'isMarginTradingAllowed': True,",(0,a.kt)("br",null),"'filters': ","[{'filterType': 'PRICE_FILTER', 'minPrice': '0.00000100',",(0,a.kt)("br",null),"'maxPrice': '922327.00000000', 'tickSize': '0.00000100'},",(0,a.kt)("br",null),"{'filterType': 'PERCENT_PRICE', 'multiplierUp': '5', 'multiplierDown': '0.2', 'avgPriceMins': 5},",(0,a.kt)("br",null),"{'filterType': 'LOT_SIZE', 'minQty': '0.00100000', 'maxQty': '100000.00000000', 'stepSize': '0.00100000'},",(0,a.kt)("br",null),"{'filterType': 'MIN_NOTIONAL', 'minNotional': '0.00010000', 'applyToMarket': True, 'avgPriceMins': 5},",(0,a.kt)("br",null),"{'filterType': 'ICEBERG_PARTS', 'limit': 10}, {'filterType': 'MARKET_LOT_SIZE', 'minQty': '0.00000000',",(0,a.kt)("br",null),"'maxQty': '930.49505347', 'stepSize': '0.00000000'}, {'filterType': 'MAX_NUM_ORDERS', 'maxNumOrders': 200},",(0,a.kt)("br",null),"{'filterType': 'MAX_NUM_ALGO_ORDERS', 'maxNumAlgoOrders': 5}]",", 'permissions': ","['SPOT', 'MARGIN']","},",(0,a.kt)("br",null),"...",(0,a.kt)("br",null),"]")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);
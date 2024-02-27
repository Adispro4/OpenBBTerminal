"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||s;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(35742);function s(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},42697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),s=n(88828);const l={title:"wsb",description:"This page serves as a guide on how to use the 'wsb' function, a tool which prints what the WSB gang are up to in Reddit's subreddit wallstreetbets. It includes parameters and examples.",keywords:["wsb function guide","WallStreetBets subreddit","Limit post print","Parameter description","Python examples"]},i=void 0,o={unversionedId:"terminal/reference/stocks/ba/wsb",id:"terminal/reference/stocks/ba/wsb",title:"wsb",description:"This page serves as a guide on how to use the 'wsb' function, a tool which prints what the WSB gang are up to in Reddit's subreddit wallstreetbets. It includes parameters and examples.",source:"@site/content/terminal/reference/stocks/ba/wsb.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/wsb",permalink:"/terminal/reference/stocks/ba/wsb",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/wsb.md",tags:[],version:"current",lastUpdatedBy:"James Maslek",lastUpdatedAt:1709059610,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"wsb",description:"This page serves as a guide on how to use the 'wsb' function, a tool which prints what the WSB gang are up to in Reddit's subreddit wallstreetbets. It includes parameters and examples.",keywords:["wsb function guide","WallStreetBets subreddit","Limit post print","Parameter description","Python examples"]},sidebar:"tutorialSidebar",previous:{title:"trending",permalink:"/terminal/reference/stocks/ba/trending"},next:{title:"Technical Analysis",permalink:"/terminal/reference/stocks/ta/"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{title:"stocks /ba/wsb - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Print what WSB gang are up to in subreddit wallstreetbets. ","[Source: Reddit]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"wsb [-l N_LIMIT] [--new]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"limit of posts to print."),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"b_new"),(0,a.kt)("td",{parentName:"tr",align:null},"--new"),(0,a.kt)("td",{parentName:"tr",align:null},"new flag, if true the posts retrieved are based on being more recent rather than their score."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:52 (\ud83e\udd8b) /stocks/ba/ $ wsb\n2022-02-16 11:00:14 - Daily Discussion Thread for February 16, 2022\nhttps://old.reddit.com/r/wallstreetbets/comments/stt7n0/daily_discussion_thread_for_february_16_2022/\n\n2022-02-12 11:45:28 - Most Anticipated Earnings Releases for the week beginning February 14th, 2022\nhttps://old.reddit.com/r/wallstreetbets/comments/sqpscq/most_anticipated_earnings_releases_for_the_week/\n\n2022-02-16 14:01:48 - Since losing money is cool here.\nhttps://old.reddit.com/r/wallstreetbets/comments/stwml0/since_loosing_money_is_cool_here/\n\n2022-02-16 11:42:50 - How to become a WSB mod \ud83c\udf08\ud83c\udf08\ud83c\udf08\nhttps://old.reddit.com/r/wallstreetbets/comments/sttx9d/how_to_become_a_wsb_mod/\n\n2022-02-15 23:19:28 - I don't get why this inflation thing is freaking people out\nhttps://old.reddit.com/r/wallstreetbets/comments/stggd7/i_dont_get_why_this_inflation_thing_is_freaking/)\n\n2022-02-16 13:56:23 - Justice Department Is Pursuing Wide-Ranging Investigation of Short-Sellers\nhttps://old.reddit.com/r/wallstreetbets/comments/stwht2/justice_department_is_pursuing_wideranging/\n\n2022-02-15 21:24:58 - i was up 100% on upst puts\nhttps://old.reddit.com/r/wallstreetbets/comments/stdsqj/i_was_up_100_on_upst_puts/\n\n2022-02-15 19:33:03 - The over short thesis hasn't gone anywhere.\nhttps://old.reddit.com/r/wallstreetbets/comments/stb7gb/the_over_short_thesis_hasnt_gone_anywhere/\n\n2022-02-16 14:15:24 - Make GME, not war.\nhttps://old.reddit.com/r/wallstreetbets/comments/stwxa9/make_gme_not_war/\n\n2022-02-16 11:24:54 - Free Money Hack - Can\u2019t Go Tits Up\nhttps://old.reddit.com/r/wallstreetbets/comments/sttmmb/free_money_hack_cant_go_tits_up/\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);
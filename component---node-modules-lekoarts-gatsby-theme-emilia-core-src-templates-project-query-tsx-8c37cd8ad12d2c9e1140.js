(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),c=r("EbDI"),o=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||c(t)||o(t)||i()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),c=r("RIqP"),o=r("lSNA"),i=r("8OQS");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=r("q1tI"),l=r("7ljp"),u=l.useMDXComponents,f=l.mdx,b=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,o=t.children,a=i(t,["scope","components","children"]),l=u(r),d=b(e),m=p.useMemo((function(){if(!o)return null;var t=s({React:p,mdx:f},d),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(c(e),[""+o])).apply(void 0,[{}].concat(c(r)))}),[o,e]);return p.createElement(m,s({components:l},a))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sVz0:function(t,e,r){"use strict";r.r(e);var n=r("rePB"),c=r("q1tI"),o=r.n(c),i=r("2A+t"),a=r("izhR"),s=r("wEEd"),p=r("9eSz"),l=r.n(p),u=r("bfvw"),f=r("MXbp"),b=r("Wbzz"),d=r("A2+M"),m=r("GepD"),O=r("qKvR"),y=function(){return Object(O.c)("svg",{width:"20",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(O.c)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.832 17.642L.345 9.864a1.256 1.256 0 0 1 0-1.728L7.832.358a1.146 1.146 0 0 1 1.663 0c.46.477.46 1.251 0 1.728L4.017 7.778H20v2.444H4.017l5.478 5.692c.46.477.46 1.25 0 1.728a1.146 1.146 0 0 1-1.663 0z",fill:"currentColor"}))},j=r("nf5Q"),v=function(t){var e,r,n=t.title,c=t.areas,p=t.description,u=t.date,O=Object(j.a)().name,v=Object(b.useStaticQuery)("640604852"),g=Object(s.c)({config:s.b.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),x=Object(s.c)({config:s.b.slow,from:{opacity:0,transform:"translate3d(-30px, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),h=Object(s.c)({config:s.b.slow,delay:500,from:{opacity:0},to:{opacity:1}});return Object(i.c)(a.c,{as:"header",variant:"layout.header"},Object(i.c)(m.a,null),Object(i.c)(a.b,{sx:{textAlign:"center",my:4,zIndex:10}},Object(i.c)(s.a.div,{style:x},Object(i.c)(b.Link,{to:"/","aria-label":O+" - Back to homepage",sx:{display:"flex",alignItems:"center",color:"text",textDecoration:"none",svg:{transition:"transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)"},"&:hover, &:focus":{svg:{transform:"translateX(-6px)"}}}},Object(i.c)(y,null),Object(i.c)("div",{sx:{overflow:"hidden",borderRadius:"full",width:"40px",height:"40px",display:"inline-block",boxShadow:"md",mx:2}},(null==v||null===(e=v.file)||void 0===e||null===(r=e.childImageSharp)||void 0===r?void 0:r.fixed)&&Object(i.c)(l.a,{fixed:v.file.childImageSharp.fixed})),Object(i.c)("span",{sx:{fontWeight:"medium"}},O))),Object(i.c)("div",{sx:{mt:4,mb:[6,6,7]}},Object(i.c)(s.a.div,{style:g},Object(i.c)(a.d,{as:"h1",variant:"styles.h1"},n)),Object(i.c)(s.a.div,{style:h},Object(i.c)(f.b.p,{sx:{mb:0,mt:4}},u),Object(i.c)("div",null,c.map((function(t,e){return Object(i.c)(o.a.Fragment,{key:t},e>0&&", ",t)}))),p&&Object(i.c)("div",{sx:{maxWidth:"900px",mx:"auto",mt:5,p:{textAlign:"left"}}},Object(i.c)(d.MDXRenderer,null,p))))))},g=r("UkTp"),x=function(t){var e=t.prev,r=t.next;return Object(i.c)("div",{sx:{mt:6,mb:4}},Object(i.c)("div",{sx:{display:"grid",gridTemplateColumns:"250px 1fr",alignItems:"center",mb:4}},Object(i.c)("h2",{sx:{color:"textMuted",fontWeight:"medium",letterSpacing:"widest",textTransform:"uppercase",fontSize:1,my:0}},"More Projects"),Object(i.c)("div",{sx:{width:"100%",height:"2px",backgroundColor:"muted"}})),Object(i.c)("div",{sx:{display:"grid",gridTemplateColumns:["1fr","1fr","1fr 1fr"],gridGap:[4,4,5],a:{position:"relative"},"[data-name='card-overlay']":{position:"absolute",top:0,left:0,right:0,bottom:0},".gatsby-image-wrapper > div":{paddingBottom:"56% !important"}}},e&&Object(i.c)(g.a,{item:e}),r&&Object(i.c)(g.a,{item:r})))},h=r("G+/h"),w=function(t){var e=t.data,r=e.project,n=e.images,c=t.pageContext,o=c.prev,p=c.next,f=Object(s.c)({config:s.b.slow,delay:800,from:{opacity:0},to:{opacity:1}});return Object(i.c)(u.a,null,Object(i.c)(h.a,{title:r.title,description:r.excerpt,pathname:r.slug,image:r.cover.childImageSharp.resize.src}),Object(i.c)(v,{title:r.title,description:r.body,areas:r.areas,date:r.date}),Object(i.c)(a.b,{sx:{mt:["-6rem","-6rem","-8rem"]}},n.nodes.map((function(t){return Object(i.c)(s.a.div,{key:t.name,style:f},Object(i.c)(l.a,{fluid:t.childImageSharp.fluid,alt:t.name,sx:{mb:[4,4,5],boxShadow:"xl"}}))})),Object(i.c)(x,{prev:o,next:p})))};function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(t){var e=t.data,r=t.pageContext,n=e.project,c=e.images;return Object(O.c)(w,{data:S(S({},e),{},{project:n,images:c}),pageContext:r})}},sXyB:function(t,e,r){var n=r("SksO"),c=r("b48C");function o(e,r,i){return c()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,r){var c=[null];c.push.apply(c,e);var o=new(Function.bind.apply(t,c));return r&&n(o,r.prototype),o},o.apply(null,arguments)}t.exports=o}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-emilia-core-src-templates-project-query-tsx-8c37cd8ad12d2c9e1140.js.map
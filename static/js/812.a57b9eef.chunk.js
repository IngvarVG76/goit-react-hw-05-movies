"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[812],{672:function(t,e,r){r.d(e,{Z:function(){return v}});r(791);var n,a,c,o=r(87),u=r(168),i=r(686),s=i.Z.ul(n||(n=(0,u.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),p=i.Z.li(a||(a=(0,u.Z)(["\n  margin-bottom: 5px;\n"]))),f=i.Z.p(c||(c=(0,u.Z)(["\n  font-weight: bold;\n"]))),h=r(184),v=function(t){var e=t.movies,r=t.location,n=t.searchName;return 0===e.length&&n?(0,h.jsx)(f,{children:"No movies found"}):(0,h.jsx)(s,{children:e.map((function(t){return(0,h.jsx)(p,{children:(0,h.jsx)(o.rU,{to:"/movies/".concat(t.id),state:{from:r},children:t.title})},t.id)}))})}},247:function(t,e,r){r.d(e,{B7:function(){return s},TP:function(){return v},tx:function(){return h},z1:function(){return p},zv:function(){return f}});var n=r(683),a=r(861),c=r(687),o=r.n(c),u=r(243),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg2OTc5NGZkZmMyODViY2Q4OTk5YWM4ZjhlZDY5NCIsInN1YiI6IjY0NzhkNWFjZTMyM2YzMDEwNjEzZjQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZwiqsRjhmlATbQAdNY8YOqQ1qflDVBY7GKCwf12-sE"}},s=function(){var t=(0,a.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US",i);case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie",(0,n.Z)((0,n.Z)({},i),{},{params:{query:e}}));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},812:function(t,e,r){r.r(e),r.d(e,{default:function(){return Z}});var n,a,c=r(861),o=r(439),u=r(687),i=r.n(u),s=r(791),p=r(168),f=r(686),h=f.Z.main(n||(n=(0,p.Z)(["\n  padding: 16px;\n"]))),v=f.Z.h2(a||(a=(0,p.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 16px;\n"]))),l=r(247),d=r(672),m=r(184),Z=function(){var t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],n=e[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,c.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.B7)();case 3:e=t.sent,n(e.data.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,m.jsxs)(h,{children:[(0,m.jsx)(v,{children:"Trending Movies"}),(0,m.jsx)(d.Z,{movies:r})]})}}}]);
//# sourceMappingURL=812.a57b9eef.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(t,e,r){r.r(e),r.d(e,{default:function(){return j}});var n,a,c,o,u,i=r(861),s=r(439),p=r(687),h=r.n(p),f=r(791),v=r(689),l=r(977),d=r(168),m=r(686),Z=m.Z.ul(n||(n=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),x=m.Z.li(a||(a=(0,d.Z)(["\n  margin-bottom: 20px;\n"]))),w=m.Z.h3(c||(c=(0,d.Z)(["\n  font-size: 18px;\n  margin-bottom: 5px;\n"]))),g=m.Z.p(o||(o=(0,d.Z)(["\n  font-size: 14px;\n  margin: 0;\n"]))),y=m.Z.p(u||(u=(0,d.Z)(["\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 5px;\n"]))),b=r(247),k=r(184),j=function(){var t=(0,f.useState)([]),e=(0,s.Z)(t,2),r=e[0],n=e[1],a=(0,v.UO)().movieId;(0,f.useEffect)((function(){if(a){var t=function(){var t=(0,i.Z)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,b.tx)(a);case 3:e=t.sent,n(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[a]);return 0===r.length?(0,k.jsx)("p",{children:"We don't have any reviews yet"}):(0,k.jsx)(Z,{children:r.map((function(t){return(0,k.jsxs)(x,{children:[(0,k.jsx)(w,{children:t.author}),(0,k.jsx)(g,{children:t.content}),(0,k.jsxs)(y,{children:["Posted: ",(e=t.created_at,(0,l.Z)(new Date(e),"yyyy.MM.dd HH:mm"))]})]},t.id);var e}))})}},247:function(t,e,r){r.d(e,{B7:function(){return s},TP:function(){return v},tx:function(){return f},z1:function(){return p},zv:function(){return h}});var n=r(683),a=r(861),c=r(687),o=r.n(c),u=r(243),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg2OTc5NGZkZmMyODViY2Q4OTk5YWM4ZjhlZDY5NCIsInN1YiI6IjY0NzhkNWFjZTMyM2YzMDEwNjEzZjQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZwiqsRjhmlATbQAdNY8YOqQ1qflDVBY7GKCwf12-sE"}},s=function(){var t=(0,a.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US",i);case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie",(0,n.Z)((0,n.Z)({},i),{},{params:{query:e}}));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e),i);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.dd75d094.chunk.js.map
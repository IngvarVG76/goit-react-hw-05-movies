"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[940],{247:function(e,r,n){n.d(r,{B7:function(){return o},TP:function(){return u}});var t=n(861),c=n(757),i=n.n(c),s=n(243),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg2OTc5NGZkZmMyODViY2Q4OTk5YWM4ZjhlZDY5NCIsInN1YiI6IjY0NzhkNWFjZTMyM2YzMDEwNjEzZjQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZwiqsRjhmlATbQAdNY8YOqQ1qflDVBY7GKCwf12-sE"}},o=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US",a);case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r),a);case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},940:function(e,r,n){n.r(r);var t=n(861),c=n(439),i=n(757),s=n.n(i),a=n(791),o=n(689),u=n(87),l=n(247),h=n(184);r.default=function(){var e,r,n=(0,a.useState)(null),i=(0,c.Z)(n,2),d=i[0],p=i[1],v=(0,o.UO)().movieId,f=(0,o.TH)(),j=(0,a.useRef)(null!==(e=null===(r=f.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");if((0,a.useEffect)((function(){if(v){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.TP)(v);case 3:r=e.sent,p(r),console.log(r),console.log(v),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),e,null,[[0,9,12,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v]),!d)return(0,h.jsx)("div",{children:"Loading..."});var x=d.details;return(0,h.jsxs)("div",{children:[(0,h.jsx)(u.rU,{to:j.current,children:"Go back"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(x.poster_path),alt:x.title}),(0,h.jsx)("h1",{children:"".concat(x.title," (").concat(x.release_date.substring(0,4),")")}),(0,h.jsxs)("p",{children:["User score: ",10*x.vote_average,"%"]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:x.overview}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("p",{children:x.genres.map((function(e){return e.name})).join(", ")})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(o.j3,{})]})]})}}}]);
//# sourceMappingURL=940.8b2ae5cb.chunk.js.map
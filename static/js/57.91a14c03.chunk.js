"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[57],{713:function(e,t,r){r.d(t,{TP:function(){return p},XT:function(){return s},tx:function(){return l},zv:function(){return v}});var n=r(861),a=r(757),c=r.n(a),o=r(243),i="0ea25c224ecd0097d95288cc73c0f999",u="https://api.themoviedb.org/3",s=function(e){var t;return t=e?"".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(e):"".concat(u,"/trending/movie/day?api_key=").concat(i),o.Z.get(t)},p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,s,p,v,l,d,f,m;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,n=r.data,a=n.genres,s=n.id,p=n.poster_path,v=n.release_date,l=void 0===v?"":v,d=n.title,f=n.vote_average,m=n.overview,e.abrupt("return",{id:s,poster_path:"".concat("https://image.tmdb.org/t/p/w200").concat(p),title:"".concat(d," (").concat(l.slice(0,4),")"),userScore:"".concat(Math.round(10*f),"%"),overview:m,genres:a.map((function(e){return e.name})).join(" ")});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,n=r.data.cast,e.abrupt("return",n.map((function(e){var t=e.id,r=e.name,n=e.profile_path;return{id:t,name:r,character:e.character,photo:n?"https://image.tmdb.org/t/p/w200".concat(n):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}})));case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,n=r.data.results,e.abrupt("return",n.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},57:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(791),a=r(861),c=r(439),o=r(757),i=r.n(o),u=r(689),s=r(87),p=r(713),v=r(637),l=r(184),d=function(){var e=(0,n.useState)([]),t=(0,c.Z)(e,2),r=t[0],o=t[1],d=(0,u.TH)();(0,n.useEffect)((function(){f()}),[]);var f=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.XT)();case 3:t=e.sent,r=t.data.results,o(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Trending Movies"}),(0,l.jsx)("ul",{className:v.Z.listMovies,children:r.map((function(e){return(0,l.jsx)("li",{className:v.Z.itemMovie,children:(0,l.jsx)(s.rU,{className:v.Z.itemMovie,to:"/movies/".concat(e.id),state:d,children:e.title})},e.id)}))})]})},f=function(){return(0,l.jsx)(d,{})}},637:function(e,t){t.Z={listMovies:"TrendingFilms_listMovies__by7JV",itemMovie:"TrendingFilms_itemMovie__sbCdo"}}}]);
//# sourceMappingURL=57.91a14c03.chunk.js.map
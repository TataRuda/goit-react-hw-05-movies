"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[678],{713:function(e,r,t){t.d(r,{TP:function(){return l},XT:function(){return u},tx:function(){return v},zv:function(){return d}});var n=t(861),a=t(757),c=t.n(a),i=t(243),o="0ea25c224ecd0097d95288cc73c0f999",s="https://api.themoviedb.org/3",u=function(e){var r;return r=e?"".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e):"".concat(s,"/trending/movie/day?api_key=").concat(o),i.Z.get(r)},l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a,u,l,d,v,p,h,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,n=t.data,a=n.genres,u=n.id,l=n.poster_path,d=n.release_date,v=void 0===d?"":d,p=n.title,h=n.vote_average,f=n.overview,e.abrupt("return",{id:u,poster_path:"".concat("https://image.tmdb.org/t/p/w200").concat(l),title:"".concat(p," (").concat(v.slice(0,4),")"),userScore:"".concat(Math.round(10*h),"%"),overview:f,genres:a.map((function(e){return e.name})).join(" ")});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,n=t.data.cast,e.abrupt("return",n.map((function(e){var r=e.id,t=e.name,n=e.profile_path;return{id:r,name:t,character:e.character,photo:n?"https://image.tmdb.org/t/p/w200".concat(n):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}})));case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,n=t.data.results,e.abrupt("return",n.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},678:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n=t(861),a=t(439),c=t(757),i=t.n(c),o=t(791),s=t(713),u=t(689),l=t(87),d=t(719),v={backLink:"BackLink_backLink__JiXo7"},p=t(184),h=function(e){var r=e.to,t=e.children;return(0,p.jsxs)(l.rU,{className:v.backLink,to:r,children:[(0,p.jsx)(d.YiX,{className:v.backLinkIcon,size:"30"}),t]})},f="MovieDetails_cardMovie__dtAnY",m="MovieDetails_cardMoviePoster__vwx8h",x="MovieDetails_cardMovieDescription__5+ZYv",_="MovieDetails_cardMovieAddInfo__ZPh6I",k="MovieDetails_linkAddInfo__yETSk",g=function(){var e,r,t=(0,u.UO)().movieId,c=(0,o.useState)({}),d=(0,a.Z)(c,2),v=d[0],g=d[1],w=null!==(e=null===(r=(0,u.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies";(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.TP)(t);case 3:r=e.sent,g(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var j=v.poster_path,b=v.title,y=v.userScore,Z=v.overview,M=v.genres;return(0,p.jsxs)("div",{children:[(0,p.jsx)(h,{to:w,children:"GO BACK"}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("img",{className:m,src:j,alt:b}),(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)("h2",{children:b}),(0,p.jsxs)("p",{children:[" User score: ",y]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:Z}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:M})]})]}),(0,p.jsx)("p",{className:_,children:"Additional information:"}),(0,p.jsxs)("ul",{className:_,children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{className:k,to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{className:k,to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=678.56db1c89.chunk.js.map
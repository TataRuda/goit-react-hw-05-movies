"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[40],{713:function(e,t,r){r.d(t,{TP:function(){return p},XT:function(){return u},tx:function(){return v},zv:function(){return l}});var n=r(861),a=r(757),c=r.n(a),o=r(243),i="0ea25c224ecd0097d95288cc73c0f999",s="https://api.themoviedb.org/3",u=function(e){var t;return t=e?"".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(e):"".concat(s,"/trending/movie/day?api_key=").concat(i),o.Z.get(t)},p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,u,p,l,v,h,m,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,n=r.data,a=n.genres,u=n.id,p=n.poster_path,l=n.release_date,v=void 0===l?"":l,h=n.title,m=n.vote_average,f=n.overview,e.abrupt("return",{id:u,poster_path:"".concat("https://image.tmdb.org/t/p/w200").concat(p),title:"".concat(h," (").concat(v.slice(0,4),")"),userScore:"".concat(Math.round(10*m),"%"),overview:f,genres:a.map((function(e){return e.name})).join(" ")});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,n=r.data.cast,e.abrupt("return",n.map((function(e){var t=e.id,r=e.name,n=e.profile_path;return{id:t,name:r,character:e.character,photo:n?"https://image.tmdb.org/t/p/w200".concat(n):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}})));case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,n=r.data.results,e.abrupt("return",n.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},40:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(439),a=r(791),c=r(861),o=r(757),i=r.n(o),s=r(689),u=r(87),p=r(713),l=r(637),v=r(184),h=function(e){var t=e.filter,r=(0,a.useState)([]),o=(0,n.Z)(r,2),h=o[0],m=o[1],f=(0,s.TH)();(0,a.useEffect)((function(){d()}));var d=function(){var e=(0,c.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.XT)(t);case 3:r=e.sent,n=r.data.results,m(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{children:(0,v.jsx)("ul",{className:l.Z.listMovies,children:h.map((function(e){return(0,v.jsx)("li",{className:l.Z.itemMovie,children:(0,v.jsx)(u.rU,{className:l.Z.itemMovie,to:"/movies/".concat(e.id),state:f,children:e.title})},e.id)}))})})},m="Movies_searchForm__J4-xw",f="Movies_searchInput__8fq2n",d="Movies_searchBtn__jYYq7",g=function(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),r=t[0],c=t[1],o=(0,s.TH)(),i=new URLSearchParams(o.search).get("query"),u=function(e){var t=new URLSearchParams;t.set("query",e);var r="".concat(o.pathname,"?").concat(t.toString());window.history.replaceState(null,null,r)};return(0,a.useEffect)((function(){c(i)}),[i]),(0,v.jsxs)("div",{children:[(0,v.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value.trim();t&&(c(t),u(t))},children:[(0,v.jsx)("input",{className:f,type:"text",name:"search",placeholder:"Enter the name of the movie in English"}),(0,v.jsx)("button",{className:d,type:"submit",children:"Search"})]}),r&&(0,v.jsx)(h,{filter:r})]})}},637:function(e,t){t.Z={listMovies:"TrendingFilms_listMovies__by7JV",itemMovie:"TrendingFilms_itemMovie__sbCdo"}}}]);
//# sourceMappingURL=40.d627c7ca.chunk.js.map
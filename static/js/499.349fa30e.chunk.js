"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{449:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(861),a=t(671),u=t(144),i=t(757),s=t.n(i),c=t(243),o=function(){function e(){(0,a.Z)(this,e),this.page=1,this.querry=null,this.per_page=20}return(0,u.Z)(e,[{key:"getPopularFilms",value:function(){var n=(0,r.Z)(s().mark((function n(t){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.page=t,n.next=3,c.Z.get("".concat(e.BASE_URL,"/trending/movie/week"),{params:{api_key:e.API_KEY,page:this.page}});case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchUniqFilms",value:function(){var n=(0,r.Z)(s().mark((function n(t){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{language:"en-US",page:this.page,query:this.query,api_key:e.API_KEY}},n.next=3,c.Z.get("".concat(e.BASE_URL,"/search/movie"),r);case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieInfoById",value:function(){var n=(0,r.Z)(s().mark((function n(t){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(e.BASE_URL,"/movie/").concat(t,"?"),{params:{api_key:e.API_KEY}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getCastInfo",value:function(){var n=(0,r.Z)(s().mark((function n(t){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(e.BASE_URL,"/movie/").concat(t,"/credits?"),{params:{api_key:e.API_KEY,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getReviews",value:function(){var n=(0,r.Z)(s().mark((function n(t){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(e.BASE_URL,"/movie/").concat(t,"/reviews?"),{params:{api_key:e.API_KEY,language:"en-US",page:this.page}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()}]),e}();o.BASE_URL="https://api.themoviedb.org/3",o.API_KEY="6f00573c2ff703f4ade68ffc885f70a7",o.IMG_URL="https://image.tmdb.org/t/p/w500"},499:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,a,u,i,s,c=t(861),o=t(439),p=t(757),f=t.n(p),h=t(791),l=t(449),v=t(689),m=t(168),g=t(444),d=g.ZP.h3(r||(r=(0,m.Z)(["\nmargin-left: 50px;\nmargin-bottom: 10px;\n"]))),x=g.ZP.ul(a||(a=(0,m.Z)(["\nmargin-left: 50px;\nmargin-bottom: 10px;\n list-style: none;\n"]))),Z=g.ZP.li(u||(u=(0,m.Z)(["\n\nmargin-bottom: 10px;\n"]))),w=g.ZP.div(i||(i=(0,m.Z)(["\nborder: 3px solid #2722ad;\nwidth: 80%;\nmargin: auto;\nborder-radius: 6px;\nmargin-bottom: 10px;\nmargin-top: 10px;\n\n"]))),k=g.ZP.p(s||(s=(0,m.Z)(["\nmargin-left: 50px;\nmargin-top: 10px;\nwidth:90%;\n"]))),_=t(184),y=new l.Z;var b=function(){var e=(0,h.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,h.useState)(null),u=(0,o.Z)(a,2),i=u[0],s=u[1],p=(0,v.UO)().moviesId;return(0,h.useEffect)((function(){var e=function(){var e=(0,c.Z)(f().mark((function e(){var n,t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getReviews(p);case 3:n=e.sent,0===(t=n.data).results.length?s("Oooops! There is no reviews"):(r(t.results),s(null)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),(0,_.jsxs)(w,{children:[(0,_.jsx)(d,{children:"Reviews"}),(0,_.jsx)(x,{children:t.map((function(e){return(0,_.jsxs)(Z,{children:[(0,_.jsxs)("h4",{children:["Author: ",e.author]}),(0,_.jsx)(k,{children:e.content})]},e.id)}))}),i&&(0,_.jsx)("p",{children:i})]})}}}]);
//# sourceMappingURL=499.349fa30e.chunk.js.map
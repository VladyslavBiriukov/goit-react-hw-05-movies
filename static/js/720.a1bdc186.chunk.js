"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[720],{672:function(n,e,t){t.d(e,{O:function(){return b}});var r,a,i,o,u=t(168),c=t(444),s=t(87),p=c.ZP.li(r||(r=(0,u.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 10px;  \n  margin-left: auto;\n  margin-right: auto;\n  width: calc((100% - 120px) / 5);\n"]))),f=(0,c.ZP)(s.rU)(a||(a=(0,u.Z)(["\ncolor: black;\n"]))),l=c.ZP.img(i||(i=(0,u.Z)(["\nheight: 400px;\nmargin: 0 auto;\n"]))),x=c.ZP.h3(o||(o=(0,u.Z)(["\nwidth: 260px;\ntext-wrap: wrap;\ntext-align: center;\nmargin: 0 auto;\n"]))),g=t(689),h=t(449),d=t(966),m=t(184);function b(n){var e=n.id,t=n.title,r=n.poster_path,a=(0,g.TH)();return(0,m.jsx)(p,{children:(0,m.jsxs)(f,{to:"/movies/".concat(e),state:{from:a},children:[r?(0,m.jsx)(l,{src:"".concat(h.Z.IMG_URL+r),alt:t}):(0,m.jsx)(d.a,{}),(0,m.jsx)(x,{children:t})]})},e)}},449:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(861),a=t(671),i=t(144),o=t(757),u=t.n(o),c=t(243),s=function(){function n(){(0,a.Z)(this,n),this.page=1,this.querry=null,this.per_page=20}return(0,i.Z)(n,[{key:"getPopularFilms",value:function(){var e=(0,r.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.page=t,e.next=3,c.Z.get("".concat(n.BASE_URL,"/trending/movie/week"),{params:{api_key:n.API_KEY,page:this.page}});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"fetchUniqFilms",value:function(){var e=(0,r.Z)(u().mark((function e(t){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{language:"en-US",page:this.page,query:this.query,api_key:n.API_KEY}},e.next=3,c.Z.get("".concat(n.BASE_URL,"/search/movie"),r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieInfoById",value:function(){var e=(0,r.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(n.BASE_URL,"/movie/").concat(t,"?"),{params:{api_key:n.API_KEY}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getCastInfo",value:function(){var e=(0,r.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(n.BASE_URL,"/movie/").concat(t,"/credits?"),{params:{api_key:n.API_KEY,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getReviews",value:function(){var e=(0,r.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(n.BASE_URL,"/movie/").concat(t,"/reviews?"),{params:{api_key:n.API_KEY,language:"en-US",page:this.page}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),n}();s.BASE_URL="https://api.themoviedb.org/3",s.API_KEY="6f00573c2ff703f4ade68ffc885f70a7",s.IMG_URL="https://image.tmdb.org/t/p/w500"},720:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o=t(683),u=t(861),c=t(439),s=t(757),p=t.n(s),f=t(791),l=t(87),x=t(168),g=t(444),h=g.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 30%;\n  gap: 20px;\n  margin-left: 20px;\n"]))),d=g.ZP.input(a||(a=(0,x.Z)(["\n  border: 2px solid #2722ad;\n  border-radius: 6px;\n  padding: 10px;\n  font-size: 16px;\n  flex: 1;\n  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;\n"]))),m=g.ZP.button(i||(i=(0,x.Z)(['\nalign-items: center;\n  appearance: none;\n  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);\n  border: 0;\n  border-radius: 6px;\n  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: "JetBrains Mono",monospace;\n  height: 45px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow .15s,transform .15s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow,transform;\n  font-size: 18px;\n\n  &:focus {\n    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;\n  }\n\n  &:hover {\n  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;\n  transform: translateY(-2px);\n  }\n\n   &:active {\n    box-shadow: #3c4fe0 0 3px 7px inset;\n    transform: translateY(2px);\n   }\n']))),b=t(184);var v,w=function(n){var e=n.onSubmit,t=n.defaultValue,r=(0,f.useRef)();return(0,b.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e(r.current.value)},children:[(0,b.jsx)(d,{defaultValue:t,ref:r,type:"text",required:!0}),(0,b.jsx)(m,{children:"Search"})]})},y=t(449),Z=g.ZP.ul(v||(v=(0,x.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 10px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-wrap: wrap;\n"]))),k=t(672),j=new y.Z;var _=function(){var n=(0,f.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(null),i=(0,c.Z)(a,2),s=i[0],x=i[1],g=(0,l.lr)(),h=(0,c.Z)(g,2),d=h[0],m=h[1],v=d.get("query");return j.query=v,(0,f.useEffect)((function(){if(null!==v){var n=function(){var n=(0,u.Z)(p().mark((function n(){var e,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.fetchUniqFilms();case 3:e=n.sent,0===(t=e.data).results.length?x("Movie not found..."):(r(t.results),x(null)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),x(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[v]),(0,b.jsxs)("section",{children:[(0,b.jsx)(w,{defaultValue:v,onSubmit:function(n){m({query:n})}}),(0,b.jsx)(Z,{children:0!==t&&t.map((function(n){return(0,f.createElement)(k.O,(0,o.Z)((0,o.Z)({},n),{},{key:n.id}))}))}),s&&(0,b.jsx)("p",{children:s})]})}},683:function(n,e,t){function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=720.a1bdc186.chunk.js.map
webpackJsonp([2],{Fx3h:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("XyxY"),a={data:function(){return{phoneType:null,navBarFixed:!1,page:0,size:20,allLoaded:!1,list:[]}},mounted:function(){this.downApp(),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.navBarFixed=t>49},loadMore:function(){this.page++,this.kindList()},kindList:function(){var t=this,s={page:this.page,size:this.size};Object(e.a)(s).then(function(s){var i=s.data,e=i.code,a=i.data,n=i.msg;if(1e4===e){var o=a.data.list;t.list=t.list.concat(o)}else t.$toast(n);"ios"===t.phoneType&&t.$refs.loadmore.onBottomLoaded()}).catch(function(s){console.log(s),t.$toast("哎呀，出错啦~~~")})},downApp:function(){/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?this.phoneType="ios":/(Android)/i.test(navigator.userAgent)&&(this.phoneType="android")}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},["ios"===t.phoneType?i("div",{staticClass:"ios"},[i("div",{staticStyle:{width:"100%",height:"100px"}}),t._v(" "),i("div",{staticClass:"sticky"},[t._v("导航栏")]),t._v(" "),i("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadMore,"bottom-all-loaded":t.allLoaded,"bottom-distance":30,bottomPullText:"上拉加载"}},[i("ul",{staticClass:"list"},t._l(t.list,function(s,e){return i("li",{key:e,staticClass:"list-item"},[i("img",{attrs:{src:s.img}}),t._v(" "),i("p",{staticClass:"list-item-desc"},[t._v(t._s(s.desc))]),t._v(" "),i("p",{staticClass:"list-item-bottom"},[i("span",{staticClass:"price"},[i("span",{staticClass:"icon"},[t._v("￥")]),t._v(t._s(s.price))]),t._v(" "),i("span",[t._v(t._s(s.sales)+"件已售")]),t._v(" "),i("span",{staticClass:"list-item-bottom-icon"})])])}),0)])],1):t._e(),t._v(" "),"android"===t.phoneType?i("div",{staticClass:"android"},[i("div",{staticStyle:{width:"100%",height:"100px"}}),t._v(" "),i("div",{staticClass:"sticky",class:1==t.navBarFixed?"navBarWrap":""},[t._v("导航栏")]),t._v(" "),i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},t._l(t.list,function(s,e){return i("li",{key:e,staticClass:"list-item"},[i("img",{attrs:{src:s.img}}),t._v(" "),i("p",{staticClass:"list-item-desc"},[t._v(t._s(s.desc))]),t._v(" "),i("p",{staticClass:"list-item-bottom"},[i("span",{staticClass:"price"},[i("span",{staticClass:"icon"},[t._v("￥")]),t._v(t._s(s.price))]),t._v(" "),i("span",[t._v(t._s(s.sales)+"件已售")]),t._v(" "),i("span",{staticClass:"list-item-bottom-icon"})])])}),0)]):t._e()])},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("k6eZ")},"data-v-b6f80284",null);s.default=o.exports},XyxY:function(t,s,i){"use strict";s.b=function(t){return Object(e.a)({url:"/kind/nav",method:"get",params:t})},s.a=function(t){return Object(e.a)({url:"/kind",method:"get",params:t})};var e=i("vLgD")},k6eZ:function(t,s){}});
//# sourceMappingURL=2.df440ff0d774a7f005e3.js.map
webpackJsonp([4],{"F/JH":function(t,e){},KR8f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("vLgD");var s={data:function(){return{searchVal:"",banners:[],list:[]}},mounted:function(){this.getBanner(),this.$indicator.open({text:"加载中...",spinnerType:"fading-circle"}),this.getList()},methods:{search:function(t){console.log(t),document.activeElement.blur()},getBanner:function(){var t,e=this;Object(a.a)({url:"/banner",method:"get",params:t}).then(function(t){var n=t.status,a=t.data,s=t.msg;200===n?e.banners=a.imgsArr:e.$toast(s)}).catch(function(t){console.log(t),e.$toast("哎呀，出错啦~~~")})},getList:function(){var t,e=this;Object(a.a)({url:"/list",method:"get",params:t}).then(function(t){e.$indicator.close();var n=t.data,a=n.code,s=n.list,i=n.msg;1e4===a?e.list=s:e.$toast(i)}).catch(function(t){console.log(t),e.$toast("哎呀，出错啦~~~")})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"search"},[n("form",{staticStyle:{width:"100%"},attrs:{action:"",onsubmit:"return false",autocomplete:"off"}},[n("mt-search",{attrs:{"cancel-text":"取消",placeholder:"搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.searchVal)}},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}})],1)]),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"banner"},[n("mt-swipe",{attrs:{auto:3e3}},t._l(t.banners,function(t,e){return n("mt-swipe-item",{key:e},[n("img",{attrs:{src:t}})])}),1)],1),t._v(" "),t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"list"},[n("div",{staticClass:"kindBanner"},[n("mt-swipe",{attrs:{auto:3e3}},t._l(e.bannerArr,function(t,e){return n("mt-swipe-item",{key:e},[n("img",{attrs:{src:t}})])}),1)],1),t._v(" "),n("div",{staticClass:"nav"},[n("span",[t._v(t._s(e.nav))])]),t._v(" "),n("div",{staticClass:"kind"},t._l(e.list1,function(e,a){return n("div",{key:a,staticClass:"kind-item"},[n("img",{attrs:{src:e.imgUrl}}),t._v(" "),n("p",[t._v(t._s(e.title))])])}),0)])})],2),t._v(" "),n("v-footer")],1)},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("F/JH")},"data-v-13b91061",null);e.default=r.exports}});
//# sourceMappingURL=4.d4f9fa76ada21deea6bf.js.map
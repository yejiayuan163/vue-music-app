webpackJsonp([8],{YOyO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Dd8w"),a=s.n(r),c=s("2X+S"),i=s("8stH"),o=s("T452"),n=s("6Xyt"),h=s("vhoT"),l=s("NYxO"),u=s("XEAW"),f=s("qwAB"),v=s("F4+m"),y={mixins:[v.b,v.c],data:function(){return{hotKey:[]}},components:{SearchBox:c.a,Suggest:n.a,SearchList:h.a,Confirm:u.a,Scroll:f.a},methods:a()({handlePlaylist:function(t){var e=t.length>0?"60px":"10px";this.$refs.fixedScroll.style.height=e},showConfirm:function(){this.$refs.confirm.show()},_fetchHotKey:function(){var t=this;Object(i.a)().then(function(e){e.code===o.a&&(t.hotKey=e.data.hotkey.slice(0,10))})}},Object(l.b)(["clearSearchHistory"])),created:function(){this._fetchHotKey()},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.shortcut.refresh()},20)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],staticClass:"shortcut-wrapper"},[s("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:t.refreshDelay,data:t.shortcut}},[s("div",[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("ul",{staticClass:"item-wrapper"},t._l(t.hotKey,function(e,r){return s("li",{key:r,staticClass:"item",on:{click:function(s){t.addQuery(e.k)}}},[s("span",[t._v(t._s(e.k))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"}),t._v(" "),s("h1",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),s("span",{staticClass:"clear",on:{click:function(e){return e.stopPropagation(),t.showConfirm(e)}}},[s("i",{staticClass:"icon-clear iconfont"},[t._v("")])])]),t._v(" "),s("search-list",{attrs:{searches:t.searchHistory},on:{select:t.addQuery,delete:t.deleteSearchHistory}}),t._v(" "),s("div",{ref:"fixedScroll"})],1)])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],staticClass:"search-result"},[s("suggest",{attrs:{query:t.query},on:{select:t.saveSearch,listScroll:t.blurInput}})],1),t._v(" "),s("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var m=s("VU/8")(y,d,!1,function(t){s("xZkg")},"data-v-1830b8fc",null);e.default=m.exports},xZkg:function(t,e){}});
//# sourceMappingURL=8.0de929cba099a59f363d.js.map
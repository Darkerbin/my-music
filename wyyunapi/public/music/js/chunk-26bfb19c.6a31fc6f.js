(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26bfb19c","chunk-35ac1a36"],{"1d13":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"rankdetail"}},[s("detail",{attrs:{title:t.title}})],1)},e=[],n=s("1f41"),l={name:"rankdetail",components:{detail:n["default"]},data:function(){return{title:"排行榜"}}},o=l,r=s("2877"),c=Object(r["a"])(o,i,e,!1,null,null,null);a["default"]=c.exports},"1f41":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"detail"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isloading,expression:"isloading"}],staticClass:"loading"},[s("van-loading",{attrs:{type:"spinner",color:"#1989fa"}}),s("div",{staticClass:"jiazai"},[t._v("加载中")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"show"},[s("van-nav-bar",{attrs:{"left-arrow":"","left-text":t.title},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"gedan"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.details.coverImgUrl,expression:"details.coverImgUrl"}],attrs:{alt:""}})]),s("div",{staticClass:"description"},[t._v(t._s(t.details.name))]),s("div",{staticClass:"playcount"},[s("van-icon",{attrs:{name:"service-o"}}),t._v(" 播放量："+t._s(t._f("counts")(t.details.playCount))+" 万 ")],1),s("div",{staticClass:"song"},[s("van-row",{attrs:{type:"flex",justify:"space-between"}},[s("van-col",{attrs:{span:"18"}},[s("div",{staticClass:"play"},[s("span",[t._v("播放全部")]),s("span",[t._v("(共"+t._s(t.details.trackCount)+"首)")])])]),s("van-col",{attrs:{span:"6"}})],1),s("transition-group",{attrs:{"enter-active-class":"animated rubberBand","leave-active-class":"animated rotateIn"}},t._l(t.song,(function(a,i){return s("div",{key:i,staticClass:"list"},[s("div",{staticClass:"id"},[t._v(t._s(i+1))]),s("div",{staticClass:"dansong",on:{click:function(s){return t.play(a.id,t.song)}}},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"songer"},[t._v(t._s(a.ar[0].name)+"--"+t._s(a.al.name))])]),s("div",{staticClass:"meun"},[s("van-icon",{staticClass:"ellipsis",attrs:{name:"ellipsis"}})],1)])})),0)],1)],1)])},e=[],n={name:"detail",data:function(){return{details:[],song:[],isshow:!1,isloading:!0,index:-1}},props:["title"],inject:["iffooter","playaudio"],filters:{counts:function(t){return Math.floor(t/1e4)}},methods:{getdetails:function(t){var a=this;this.axios.get("/playlist/detail?id="+t).then((function(t){a.details=t.data.playlist,a.song=t.data.playlist.tracks}))},getsongurl:function(t){var a=this;this.axios.get("/song/url?id="+t).then((function(t){a.$store.state.src=t.data.data[0].url}))},play:function(t,a){this.getsongurl(t),this.playaudio(t,a)},onClickLeft:function(){this.$router.go(-1)},onload:function(){""!=this.details&&(this.isshow=!0,this.isloading=!1)}},mounted:function(){var t=this;this.getdetails(this.$route.params.id),""==this.details&&setInterval((function(){t.onload()}))}},l=n,o=(s("fe47"),s("2877")),r=Object(o["a"])(l,i,e,!1,null,"9c4706fa",null);a["default"]=r.exports},8229:function(t,a,s){},fe47:function(t,a,s){"use strict";var i=s("8229"),e=s.n(i);e.a}}]);
//# sourceMappingURL=chunk-26bfb19c.6a31fc6f.js.map
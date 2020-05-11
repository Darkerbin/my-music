import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(store);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/Home.vue"),
    children: [
      // 歌单
      {
        path: "/sheet",
        component: () => import("../components/Gedan/Sheet.vue"),
      },
      // 排行榜
      {
        path: "/ranking",
        component: () => import("../components/Ranking/Ranking.vue"),
      },
      //歌手
      {
        path: "/singer",
        component: () => import("../components/Singer/Singer.vue"),
      },
      // 公共组件
      {
        path: "/detail",
        component: () => import("../components/Common/Detail.vue"),
      },
    ],
  },
  {
    path: "/footer",
    component: () => import("../components/Footer.vue"),
  },
  // 弹出层
  {
    path: "/sidebar",
    component: () => import("../components/Popup/Sidebar.vue"),
  },
  {
    path: "/playhistory",
    component: () => import("../components/Popup/Playhistory.vue"),
  },
  // 头部
  { path: "/header", component: () => import("../components/Header.vue") },
  // 歌单详情
  {
    path: "/sheet/:id",
    component: () => import("../components/Gedan/Sheetdetails.vue"),
  },
  // 排行榜详情
  {
    path: "/ranking/:id",
    component: () => import("../components/Ranking/Rankdetail.vue"),
  },
  //歌手详情
  {
    path: "/singer/:id",
    component: () => import("../components/Singer/Singerdetail.vue"),
    children: [
      {
        path: "/personaldetail",
        component: () =>
          import("../components/Singer/Singerdetail/Personaldetail.vue"),
      },
      {
        path: "/mv",
        component: () => import("../components/Singer/Singerdetail/Mv.vue"),
      },
      {
        path: "/hotsong",
        component: () => import("../components/Singer/Singerdetail/Hotsong.vue"),
      },
      {
        path: "/album",
        component: () => import("../components/Singer/Singerdetail/Album.vue"),
      },
      {
        path: "/resolve",
        component: () => import("../components/Singer/Singerdetail/Resolve.vue"),
      },
    ],
  },
  // 登录
  { path: "/login", component: () => import("../components/Login/Login.vue") },
  {
    path: "/register",
    component: () => import("../components/Login/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.path == "/login" ||
    to.path == "/register" ||
    to.path == "/error" ||
    to.path == "/about" ||
    to.path == "/search" ||
    to.name == "searchdetail"
  ) {
    store.state.showfooter = false;
    next();
  } else {
    store.state.showfooter = true;
    next();
  }
});

export default router;

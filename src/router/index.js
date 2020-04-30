import Vue from "vue";
import VueRouter from "vue-router";

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
      { path: "/detail", component: () => import("../components/Common/Detail.vue") },
    ],
  },
  {
    path: "/footer",
    component: () => import("../components/Footer.vue"),
  },
  { path: "/header", component: () => import("../components/Header.vue") },
  // 歌单详情
  { path: "/sheet/:id", component: () => import("../components/Gedan/sheetdetails.vue") },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

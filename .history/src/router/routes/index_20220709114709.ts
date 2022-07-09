export const basicRoutes = [
  {
    path: '/',
    component:() => import('@/views/HomeView.vue')
  },
  {
    name: "not-found",
    path: "/not-found",
    component: () => import("@/views/error.vue"),
    meta: {
      title: "Page 404",
    },
  },
];

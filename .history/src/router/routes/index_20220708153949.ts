export const basicRoutes = [
  {
    path: '/',
    component:() => import('@/views/HomeView.vue')
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/error.vue"),
    meta: {
      title: "Page 404",
    },
  },
];

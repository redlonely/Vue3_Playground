export const basicRoutes = [
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/error.vue"),
    isHidden: true,
  },
];

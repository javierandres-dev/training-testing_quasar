const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "", component: () => import("pages/Index.vue") },
      {
        path: "typography",
        name: "typography",
        component: () => import("pages/Typography.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("pages/Settings.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

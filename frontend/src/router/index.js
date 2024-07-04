import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../eventBus.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/emprestimos",
      name: "emprestimos",
      meta: { requerAutenticacao: true },
      component: () => import("../views/Emprestimos.vue"),
    },
    {
      path: "/categorias",
      name: "categorias",
      meta: { requerAutenticacao: true },
      component: () => import("../views/Categorias.vue"),
    },
    {
      path: "/perfis",
      name: "perfis",
      meta: { requerAutenticacao: true },
      component: () => import("../views/Perfis.vue"),
    },
    {
      path: "/itens",
      name: "itens",
      meta: { requerAutenticacao: true },
      component: () => import("../views/Itens.vue"),
    },
    {
      path: "/",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requerAutenticacao) {
    if (!auth.autenticado) {
      next({
        path: "/",
      });
    } else {
      next()
    }
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  next();
});

export default router;

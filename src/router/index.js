import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/CadProfessor",
    name: "cadastro",
    component: () =>
      import("../views/CadProfessor.vue"),
  },
  {
    path: "/cadvisitante",
    name: "cadvisitante",
    component: () =>
      import("../views/CadVisitante.vue"),
  },
  {
    path: "/cadaluno",
    name: "cadaluno",
    component: () =>
      import("../views/CadAluno.vue"),
  },
  {
    path: "/cadcurso",
    name: "cadcurso",
    component: () =>
      import("../views/CadCurso.vue"),
  },
  {
    path: "/cadquesito",
    name: "cadquesito",
    component: () =>
      import("../views/CadQuesito.vue"),
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(from.name + " -> " + to.name);
  return true;
});

export default router;

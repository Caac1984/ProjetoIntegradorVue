import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

import LoginService from '../services/LoginService'
import AuthService from '@/services/AuthService'

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
    path: "/CadVisitante",
    name: "cadvisitante",
    component: () =>
      import("../views/CadVisitante.vue"),
  },
  {
    path: "/CadAluno",
    name: "cadaluno",
    component: () =>
      import("../views/CadAluno.vue"),
  },
  {
    path: "/CadCurso",
    name: "cadcurso",
    component: () =>
      import("../views/CadCurso.vue"),
  },
  {
    path: "/CadQuesito",
    name: "cadquesito",
    component: () =>
      import("../views/CadQuesito.vue"),
  },
  {
    path: "/AlterarSenha",
    name: "alterarsenha",
    component: () =>
      import("../views/AlterarSenha.vue"),
  },
  {
    path: "/Avaliacao",
    name: "avaliacao",
    component: () =>
      import("../views/AvaliacaoView.vue"),
  },
  {
    path: "/CadProjeto",
    name: "cadprojeto",
    component: () =>
      import("../views/CadProjeto.vue"),
  },
  {
    path: "/tabela",
    name: "tabela",
    component: () =>
      import("../views/TabelasView.vue"),
  },
  {
    path: "/finalistas",
    name: "finalistas",
    component: () =>
      import("../views/FinalistasView.vue"),
  },
  {
    path: "/inicio",
    name: "inicio",
    component: () =>
      import("../views/InicioView.vue"),
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  LoginService.router = router;

  console.log(`de ${from.name} para ${to.name}`);


  if (!LoginService.estaAutenticado() && to.name != 'login') {
    return { name: 'login' }
  }

  if (!AuthService.validaPermissao(to.path)) {
    router.push('/nao-autorizado')
    return false;
  }

  return true;
})

export default router;

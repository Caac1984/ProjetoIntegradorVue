<template>
  <!-- Inclui o componente BarraNavegao -->
  <BarraNavegao />
  <div class="cadAluno p-3">
    <!-- Agrupamento do formulário -->
    <fieldset class="p-3 col-sm-12 col-md-4">
      <!-- Título do formulário -->
      <h1>Cadastro do Aluno:</h1>
      <div class="row p-2">
        <!-- Campo de entrada para o nome -->
        <div class="col-sm-12 col-md-6 md-2">
          <label for="nome" class="form-label">Nome:</label>
          <input type="text" id="nome" class="form-control" v-model="nome" placeholder="Nome" />
        </div>
        <!-- Campo de entrada para o sobrenome -->
        <div class="col-sm-12 col-md-6">
          <label for="sobrenome" class="form-label">Sobrenome:</label>
          <input type="text" id="sobrenome" class="form-control" v-model="sobrenome" placeholder="Sobrenome" />
        </div>
      </div>
      <div class="row p-2">
        <!-- Campo de entrada para o email -->
        <div class="col-sm-12 col-md-6">
          <label for="email" class="form-label">E-mail:</label>
          <input type="text" id="email" class="form-control" v-model="email" placeholder="E-mail" />
        </div>
        <!-- Campo de entrada para o telefone -->
        <div class="col-sm-12 col-md-6">
          <label for="telefone" class="form-label">Telefone:</label>
          <input type="text" id="telefone" class="form-control" v-model="telefone" placeholder="Telefone" />
        </div>
      </div>
      <div class="row p-2">
        <!-- Campo de entrada para a disciplina -->
        <div class="col-sm-12 col-md-6">
          <label for="disciplina" class="form-label">Disciplina:</label>
          <input type="text" id="disciplina" class="form-control" v-model="disciplina" placeholder="Disciplina" />
        </div>
        <!-- Campo de entrada para a matrícula -->
        <div class="col-sm-12 col-md-6">
          <label for="matricula" class="form-label">Matrícula:</label>
          <input type="text" id="matricula" class="form-control" v-model="matricula" placeholder="Matrícula" />
        </div>
      </div>
      <div class="row p-2">
        <!-- Campo de entrada para o projeto -->
        <div class="col-sm-12 col-md-6">
          <label for="projeto" class="form-label">Projeto:</label>
          <input type="text" id="projeto" class="form-control" v-model="projeto" placeholder="Projeto" />
        </div>
      </div>
      <div class="row">
        <!-- Botão para salvar os dados -->
        <div class="col col-md-4 offset-md-4 d-flex justify-content-center p-3">
          <button class="btn btn-primary" @click="salvar">Salvar</button>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import BarraNavegao from '@/components/BarraNavegao.vue'
import AuthService from "@/services/AuthService";

export default {
  components: {
    BarraNavegao // Importa e registra o componente BarraNavegao
  },

  data() {
    return {
      usuarios: [{
        nome: "", // Armazena o nome do aluno
        sobrenome: "", // Armazena o sobrenome do aluno
        email: "", // Armazena o email do aluno
        telefone: "", // Armazena o telefone do aluno
        disciplina: "", // Armazena a disciplina do aluno
        matricula: "", // Armazena a matrícula do aluno
        projeto: "", // Armazena o projeto do aluno
      }],
      user: {
        login: null,
        senha: null,
      },
    };
  },

  mounted() {
    console.log(AuthService.dados.token);
    this.getUsuarios();
  },

  methods: {
  async getUsuarios() {
   try {
    let r = await fetch("http://localhost:8080/users", {
     method: "GET",
     headers: { Authorization: `Bearer ${AuthService.dados.token}` },
    });
    r.json().then((j) => {
     this.usuarios = j;
    });
   } catch (ex) {
    console.log("ERRO", ex);
   }
  },
  async salvar() {
   if (this.user.login != null && this.user.senha != null) {
    fetch("http://localhost:8080/users", {
     method: "POST",
     body: JSON.stringify(this.user),
     headers: {
      Authorization: `Bearer ${AuthService.dados.token}`,
      "Content-Type": "application/json",
     },
    })
     .then((r) => {
      if (r.status != 200 || r.status != 201) {
       r.json().then((j) => {
        console.log("ERRO", j);
       });
      }
      this.getUsuarios();
     })
     .catch((e) => {
      console.log("ERRO", e);
     });
   }
  },
 },
};
</script>

<style scoped>
/* Estilos para o título do formulário */
h1 {
  width: 100%;
  text-align: center;
  color: white;
}

/* Estilos para o botão primário */
.btn-primary {
  background-color: rgb(255, 255, 255);
  color: black;
}

.btn-primary:hover {
  background-color: rgb(23, 230, 0);
  color: black;
}

/* Estilos para as labels dos formulários */
.form-label {
  margin-bottom: 5px;
  color: white;
}

/* Estilos para o fieldset do formulário */
fieldset {
  background-color: rgba(0, 19, 3) !important;
  border-radius: 8px !important;
  margin: 0 auto;
  /* Centraliza o fieldset horizontalmente */
  width: 50%;
  /* Define a largura do fieldset */
}
</style>

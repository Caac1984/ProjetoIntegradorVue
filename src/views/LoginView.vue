<template>
   <!-- Template Vue.js -->
   <div class="login">
      <!-- Div para a página de login -->
      <div class="login-page">
         <!-- Container para conteúdo -->
         <div class="container">
            <!-- Linha da grade -->
            <div class="row justify-content-center"> <!-- Centraliza o conteúdo horizontalmente -->
               <!-- Coluna responsiva -->
               <div class="col-lg-4 col-md-6 col-sm-8"> <!-- Ajusta o tamanho da coluna em diferentes dispositivos -->
                  <!-- Card de login -->
                  <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                     <!-- Logo -->
                     <div class="logo-container">
                        <img src="@/assets/logo.png" alt="Logo da sua empresa" class="logo">
                        <hr> <!-- Linha separadora -->
                     </div>

                     <!-- Título do card de login -->
                     <h2>Login</h2>
                     <!-- Formulário de login -->
                     <form class="form-group" >
                        <!-- Input de e-mail -->
                        <input v-model="login" type="login" class="form-control" placeholder="Matrícula" required>
                        <br>
                        <!-- Input de senha -->
                        <input v-model="senha" type="senha" class="form-control" placeholder="Senha" required>
                        <br>
                        <!-- Botão de envio do formulário de login -->
                        <input type="submit" class="btn btn-primary" value="Login">
                        <br><br>
                        <!-- Link para redefinição de senha -->
                        <router-link to="/alterarsenha" target="_blank"></router-link>
                     </form>
                  </div>

                  <!-- Card de registro -->
                  <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                     <!-- Título do card de registro -->
                     <h1>Sign Up</h1>
                     <!-- Formulário de registro -->
                     <form class="form-group" >
                        <!-- Input de e-mail para registro -->
                        <input v-model="loginReg" type="login" class="form-control" placeholder="Login" required>
                        <!-- Input de senha para registro -->
                        <input v-model="senhaReg" type="senha" class="form-control" placeholder="Senha" required>
                        <!-- Input de confirmação de senha -->
                        <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirma Senha" required>
                        <!-- Botão de envio do formulário de registro -->
                        <input type="submit" class="btn btn-primary" value="Registrar">
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {{ logado }}
   </div>
</template>

<script>
import LoginService from "@/services/LoginService";

export default {
  data() {
    return {
      login: "",
      senha: "",
    };
  },
  mounted() {

  },
  methods: {
    logar() {
      LoginService.logar(this.login, this.senha);
    },
  },
};
</script>

<style scoped>
/* Estilos para elementos de texto */
p {
   line-height: 1rem; /* Define a altura da linha */
}

/* Estilos para título h1 */
h1 {
   margin-bottom: 1.5rem; /* Define a margem inferior */
}

/* Estilos para cards */
.card {
   padding: 20px; /* Define o espaçamento interno */
}

/* Estilos para grupos de formulários */
.form-group {
   /* Estilos para inputs dentro do form-group */
   input {
      margin-bottom: 20px; /* Define a margem inferior */
      border-radius: 10px; /* Define o arredondamento dos cantos */
   }
}

/* Estilos para a página de login */
.login-page {
   align-items: center; /* Centraliza verticalmente os itens */
   display: flex; /* Define um layout flexível */
   height: flex; /* Define a altura como flexível */
}

.logo {
   width: 150px; /* Define a largura da logo */
   height: auto; /* Mantém a altura proporcional para evitar distorções */
}
</style>

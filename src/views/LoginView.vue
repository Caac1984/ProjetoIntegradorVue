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
                        <hr>
                     </div>

                     <!-- Título do card de login -->
                     <h2>Login</h2>
                     <!-- Formulário de login -->
                     <form class="form-group" @submit.prevent="doLogin">
                        <!-- Input de e-mail -->
                        <input v-model="emailLogin" type="email" class="form-control" placeholder="E-mail" required>
                        <br>
                        <!-- Input de senha -->
                        <input v-model="senhaLogin" type="password" class="form-control" placeholder="Senha" required>
                        <br>
                        <!-- Botão de envio do formulário de login -->
                        <input type="submit" class="btn btn-primary" value="Login">
                        <br><br>
                        <!-- Link para redefinição de senha -->
                        <router-link to="/alterarsenha" target="_blank">Esqueceu a senha?</router-link>
                     </form>
                  </div>

                  <!-- Card de registro -->
                  <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                     <!-- Título do card de registro -->
                     <h1>Sign Up</h1>
                     <!-- Formulário de registro -->
                     <form class="form-group" @submit.prevent="doRegister">
                        <!-- Input de e-mail para registro -->
                        <input v-model="emailReg" type="email" class="form-control" placeholder="E-mail" required>
                        <!-- Input de senha para registro -->
                        <input v-model="senhaReg" type="password" class="form-control" placeholder="Senha" required>
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
   </div>
</template>

<script>
export default {
   data() {
      return {
         emailLogin: '', // Email para login
         senhaLogin: '', // Senha para login
         emailReg: '', // Email para registro
         senhaReg: '', // Senha para registro
         confirmReg: '', // Confirmação de senha para registro
         registerActive: false, // Alternar entre login e registro
         emptyFields: false // Flag para campos vazios
      };
   },
   methods: {
      doLogin() {
         // Verifica se os campos estão vazios
         if (this.emailLogin === '' || this.senhaLogin === '') {
            this.emptyFields = true;
            return;
         }
         this.emptyFields = false;

         // Lógica para login (pode ser uma chamada a API)
         console.log('Tentando login com', this.emailLogin, this.senhaLogin);
         // Exemplo de chamada a API
         fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: this.emailLogin,
               senha: this.senhaLogin
            })
         })
         .then(response => response.json())
         .then(data => {
            // Lógica para tratar resposta da API
            console.log('Resposta da API:', data);
         })
         .catch(error => {
            console.error('Erro no login:', error);
         });
      },
      doRegister() {
         // Verifica se os campos estão vazios
         if (this.emailReg === '' || this.senhaReg === '' || this.confirmReg === '') {
            this.emptyFields = true;
            return;
         }
         // Verifica se as senhas coincidem
         if (this.senhaReg !== this.confirmReg) {
            alert('As senhas não coincidem!');
            return;
         }
         this.emptyFields = false;

         // Lógica para registro (pode ser uma chamada a API)
         console.log('Tentando registro com', this.emailReg, this.senhaReg);
         // Exemplo de chamada a API
         fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: this.emailReg,
               senha: this.senhaReg
            })
         })
         .then(response => response.json())
         .then(data => {
            // Lógica para tratar resposta da API
            console.log('Resposta da API:', data);
         })
         .catch(error => {
            console.error('Erro no registro:', error);
         });
      }
   }
};
</script>

<style scoped>
/* Estilos para elementos de texto */
p {
   line-height: 1rem;
}

/* Estilos para título h1 */
h1 {
   margin-bottom: 1.5rem;
}

/* Estilos para cards */
.card {
   padding: 20px;
}

/* Estilos para grupos de formulários */
.form-group {

   /* Estilos para inputs dentro do form-group */
   input {
      margin-bottom: 20px;
      border-radius: 10px;
   }
}

/* Estilos para a página de login */
.login-page {
   align-items: center;
   display: flex;
   height: flex;
}

.logo {
   width: 150px;
   /* Define a largura da logo */
   height: auto;
   /* Mantém a altura proporcional para evitar distorções */
}
</style>

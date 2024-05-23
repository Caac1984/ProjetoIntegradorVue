<template>
   <!-- Inclui o componente de navegação -->
   <MenuNavega />
   <div class="cadVisitante p-3">
      <!-- Agrupamento do formulário -->
      <fieldset class="p-3 col-sm-12 col-md-4">
         <h1>Cadastro do Visitante:</h1>
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
import MenuNavega from '@/components/MenuNavega.vue'

export default {
   components: {
      // Registra o componente MenuNavega
      MenuNavega
   },
   data() {
      return {
         // Variáveis para armazenar os dados do formulário
         nome: "",
         sobrenome: "",
         email: "",
         telefone: "",
         disciplina: "",
         matricula: "",
         projeto: ""
      };
   },
   methods: {
      // Método para salvar os dados do formulário
      salvar() {
         // Lógica para salvar os dados
         console.log("Nome:", this.nome);
         console.log("Sobrenome:", this.sobrenome);
         console.log("E-mail:", this.email);
         console.log("Telefone:", this.telefone);
         console.log("Disciplina:", this.disciplina);
         console.log("Matrícula:", this.matricula);
         console.log("Projeto:", this.projeto);
         // Adicione lógica adicional conforme necessário, como redirecionar ou fazer outras operações após salvar
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
   background-color: rgb(0, 19, 3) !important;
   border-radius: 8px !important;
   margin: 0 auto; /* Centraliza o fieldset horizontalmente */
   width: 50%; /* Define a largura do fieldset */
}

/* Estilos para os campos de entrada do formulário */
.form-control {
   width: 100%; /* Define a largura do input como 100% */
   font-size: 16px; /* Define o tamanho da fonte do input */
   padding: 8px; /* Adiciona um espaçamento interno ao redor do texto no input */
   box-sizing: border-box; /* Garante que o padding não afete a largura total do input */
   text-align: left; /* Alinha o texto à esquerda */
   align-items: flex-start; /* Alinha o texto ao topo verticalmente */
   resize: vertical; /* Permite o redimensionamento vertical */
   min-height: 40px; /* Altura mínima para garantir que o textarea seja visível */
}
</style>

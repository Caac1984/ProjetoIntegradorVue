<template>
   <MenuNavega />
   <!-- Início do formulário de cadastro do professor -->
   <div class="cadProfessor p-3">
      <!-- Agrupamento do formulário -->
      <fieldset class="p-3 col-sm-12 col-md-4">
         <!-- Título do formulário -->
         <h1>Cadastro do Professor:</h1>
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
            <!-- Campo de entrada para o nome -->
            <div class="col-sm-12 col-md-6">
               <label for="email" class="form-label">E-mail:</label>
               <input type="text" id="email" class="form-control" v-model="email" placeholder="E-mail" />
            </div>
            <!-- Campo de entrada para o sobrenome -->
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
      };
   },
   methods: {
      // Método para salvar os dados do formulário
      salvar() {
         // Aqui você pode adicionar a lógica para salvar os dados
         console.log("Nome:", this.nome);
         console.log("Sobrenome:", this.sobrenome);
         // Redirecionar ou fazer outras operações após salvar
      },
   },
};
</script>

<style scoped>
h1 {
   width: 100%;
   text-align: center;
   color: white;
}

.btn-primary {
   background-color: rgb(255, 255, 255);
   color: black;
}

.btn-primary:hover {
   background-color: rgb(23, 230, 0);
   color: black;
}

.form-label {
   margin-bottom: 5px;
   color: white;
}

fieldset {
   background-color: rgba(0, 19, 3) !important;
   border-radius: 8px !important;
   margin: 0 auto;
   /* Centraliza o fieldset horizontalmente */
   width: 50%;
   /* Define a largura do fieldset */
}
</style>

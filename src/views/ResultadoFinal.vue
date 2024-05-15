<template>
   <div class="cadAluno">
     <h1>Cadastro do Aluno:</h1>
     <div class="mb-3">
       <label for="nome" class="form-label">Nome:</label>
       <input type="text" id="nome" class="form-control" v-model="nome" placeholder="Nome" />
     </div>
     <div class="mb-3">
       <label for="sobrenome" class="form-label">Sobrenome:</label>
       <input type="text" id="sobrenome" class="form-control" v-model="sobrenome"
        placeholder="Sobrenome" />
     </div>
     <div class="mb-3">
       <label for="email" class="form-label">E-mail:</label>
       <input type="text" id="email" class="form-control" v-model="email"
        placeholder="E-mail" />
     </div>
     <div class="mb-3">
       <label for="telefone" class="form-label">Telefone:</label>
       <input type="text" id="telefone" class="form-control" v-model="telefone"
        placeholder="Telefone" />
     </div>
     <div class="mb-3">
       <label for="disciplina" class="form-label">Disciplina:</label>
       <input type="text" id="disciplina" class="form-control" v-model="disciplina"
        placeholder="Disciplina" />
     </div>
     <div class="mb-3">
       <label for="matricula" class="form-label">Matricula:</label>
       <input type="text" id="matricula" class="form-control" v-model="matricula"
        placeholder="Matricula" />
     </div>
     <div class="mb-3">
       <button class="btn btn-primary" @click="salvar">Salvar</button>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       nome: "",
       sobrenome: "",
     };
   },
   methods: {
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
   color: black;
 }
 
 .form-label {
   margin-bottom: 5px;
 }
 </style>
 
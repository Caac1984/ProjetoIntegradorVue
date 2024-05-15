<template>
   <div class="cadCurso">
     <h1>Cadastro do Curso:</h1>
     <div class="mb-4">
       <label for="curso" class="form-label">Curso:</label>
       <input type="text" id="curso" class="form-control" v-model="curso" placeholder="Curso" />
     </div>
     <div class="mb-4">
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
 
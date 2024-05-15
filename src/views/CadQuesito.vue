<template>
   <div class="cadQuesito">
     <h1>Cadastro do Quesito:</h1>
     <div class="mb-3">
       <label for="quesito" class="form-label">Quesito:</label>
       <input type="text" id="quesito" class="form-control" v-model="quesito" placeholder="Quesito" />
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

.form-control {
  
}

 </style>
 
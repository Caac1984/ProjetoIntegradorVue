<template>
  <!-- Inclui o componente de navegação -->
  <BarraNavegao />
  <!-- Início do formulário de cadastro do projeto -->
  <div class="cadprojeto p-3">
    <!-- Agrupamento do formulário -->
    <fieldset class="p-3 col-sm-12 col-md-4">
      <!-- Título do formulário -->
      <h1>Cadastro do Projeto:</h1>
      <div class="row p-2">
        <!-- Campo de entrada para o nome do projeto -->
        <div class="col-sm-12 col-md-9 offset-md-2">
          <label for="projeto" class="form-label">Projeto:</label>
          <input type="text" id="projeto" class="form-control" v-model="projeto" placeholder="Projeto" />
        </div>
      </div>
      <div class="col col-md-4 offset-md-4 d-flex justify-content-left p-3">
        <!-- Botão para salvar os dados -->
        <button class="btn btn-primary" @click="salvar">Salvar</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
import BarraNavegao from '@/components/BarraNavegao.vue'

export default {
  components: {
    BarraNavegao // Registra o componente BarraNavegao
  },

  data() {
    return {
      // Variável para armazenar o nome do projeto
      projeto: "",
    };
  },
  methods: {
    // Método para salvar os dados do formulário
    salvar() {
      // Lógica para salvar os dados
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

/* Estilos para os campos de entrada do formulário */
.form-control {
  height: 40px !important;
}

/* Estilos para o fieldset do formulário */
fieldset {
  background-color: rgba(0, 19, 3) !important;
  border-radius: 8px !important;
  margin: 0 auto; /* Centraliza o fieldset horizontalmente */
  width: 30%; /* Define a largura do fieldset */
}
</style>

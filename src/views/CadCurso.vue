<template>
  <!-- Inclui o componente MenuNavega -->
  <MenuNavega />
  <div class="cadCurso p-3">
    <!-- Agrupamento do formulário -->
    <fieldset class="p-3 col-sm-12 col-md-4">
      <!-- Título do formulário -->
      <h1>Cadastro do Curso:</h1>
      <div class="row p-2">
        <!-- Campo de entrada para o nome do curso -->
        <div class="col-sm-12 col-md-9 offset-md-2">
          <label for="curso" class="form-label">Curso:</label>
          <input type="text" id="curso" class="form-control" v-model="curso" placeholder="Curso" />
        </div>
      </div>
      <div class="col col-md-4 offset-md-4 d-flex justify-content-center p-3">
        <!-- Botão para salvar os dados -->
        <button class="btn btn-primary" @click="salvar">Salvar</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
import MenuNavega from '@/components/MenuNavega.vue'

export default {
  components: {
    MenuNavega // Importa e registra o componente MenuNavega
  },

  data() {
    return {
      curso: "", // Armazena o nome do curso
    };
  },
  methods: {
    salvar() {
      // Função para salvar os dados
      // Adicione a lógica para salvar os dados conforme necessário
      console.log("Curso:", this.curso);
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

/* Estilos para os campos de entrada dos formulários */
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

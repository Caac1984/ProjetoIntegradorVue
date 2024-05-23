<template>
  <!-- Inclui o componente de navegação -->
  <MenuNavega />
  <!-- Início do formulário de cadastro do quesito -->
  <div class="cadQuesito p-3">
    <!-- Agrupamento do formulário -->
    <fieldset class="p-3 col-sm-12 col-md-4">
      <!-- Título do formulário -->
      <h1>Cadastro do Quesito:</h1>
      <div class="row p-2">
        <!-- Container para os campos de entrada do formulário -->
        <div class="col-sm-12 col-md-9 offset-md-2">
          <!-- Campo de entrada para o nome do curso -->
          <div class="row p-2">
            <div class="col-sm-12 col-md-6">
              <label for="curso" class="form-label">Curso:</label>
              <input type="text" id="curso" class="form-control" v-model="curso" placeholder="Curso" />
            </div>
            <!-- Campo de entrada para o nome do projeto -->
            <div class="col-sm-12 col-md-6">
              <label for="projeto" class="form-label">Projeto:</label>
              <input type="text" id="projeto" class="form-control" v-model="projeto" placeholder="Projeto" />
            </div>
          </div>
          <!-- Campo de entrada para o quesito -->
          <label for="quesito" class="form-label">Quesito:</label>
          <textarea
            id="quesito"
            class="form-control"
            v-model="quesito"
            placeholder="Quesito"
            rows="1"
            @input="autoAdjustTextarea"
            ref="textarea"
          ></textarea>
        </div>
      </div>
      <!-- Botão para salvar os dados -->
      <div class="col col-md-4 offset-md-4 d-flex justify-content-center p-3">
        <button class="btn btn-primary" @click="salvar">Salvar</button>
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
      curso: "",
      projeto: "",
      quesito: "", // Variável para armazenar o texto do quesito
    };
  },
  methods: {
    // Método para ajustar automaticamente a altura do textarea
    autoAdjustTextarea() {
      const textArea = this.$refs.textarea;
      if (textArea) {
        textArea.style.height = "auto"; // Reseta a altura
        textArea.style.height = textArea.scrollHeight + "px"; // Define a altura de acordo com o conteúdo
      }
    },
    // Método para salvar os dados do formulário
    salvar() {
      // Lógica para salvar os dados
      console.log("Curso:", this.curso);
      console.log("Projeto:", this.projeto);
      console.log("Quesito:", this.quesito);
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
  width: 100%; /* Define a largura do input como 100% */
  font-size: 16px; /* Define o tamanho da fonte do input */
  padding: 8px; /* Adiciona um espaçamento interno ao redor do texto no input */
  box-sizing: border-box; /* Garante que o padding não afete a largura total do input */
  text-align: left; /* Alinha o texto à esquerda */
  align-items: flex-start; /* Alinha o texto ao topo verticalmente */
  resize: vertical; /* Permite o redimensionamento vertical */
  min-height: 40px; /* Altura mínima para garantir que o textarea seja visível */
}

/* Estilos para o fieldset do formulário */
fieldset {
  background-color: rgba(0, 19, 3) !important;
  border-radius: 8px !important;
  margin: 0 auto; /* Centraliza o fieldset horizontalmente */
  width: 40%; /* Define a largura do fieldset */
}
</style>

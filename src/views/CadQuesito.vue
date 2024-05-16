<template>
  <MenuNavega />
  <div class="cadQuesito p-3">
    <fieldset class="p-3 col-sm-12 col-md-4">
      <h1>Cadastro do Quesito:</h1>
      <div class="row p-2">
        <div class="col-sm-12 col-md-9 offset-md-2">
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
    MenuNavega
  },

  data() {
    return {
      quesito: "", // Adicione a variável quesito ao data
    };
  },
  methods: {
    autoAdjustTextarea() {
      const textArea = this.$refs.textarea;
      if (textArea) {
        textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
      }
    },
    salvar() {
      // Aqui você pode adicionar a lógica para salvar os dados
      console.log("Quesito:", this.quesito);
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
  margin: 0 auto; /* Centraliza o fieldset horizontalmente */
  width: 40%; /* Define a largura do fieldset */
}

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

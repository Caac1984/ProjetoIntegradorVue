<template>
  <MenuNavega />
  <div class="cadprojeto p-3">
    <fieldset class="p-3 col-sm-12 col-md-4">
      <h1>Cadastro do Projeto:</h1>
      <div class="row p-2">
        <div class=" col-sm-12 col-md-9 offset-md-2">
          <label for="projeto" class="form-label">Projeto:</label>
          <input type="text" id="projeto" class="form-control" v-model="projeto" placeholder="Projeto" />
        </div>
      </div>
      <div class="col col-md-4 offset-md-4 d-flex justify-content-left p-3">
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
      projeto: "",
    };
  },
  methods: {
    salvar() {
      // Aqui você pode adicionar a lógica para salvar os dados
      console.log("Projeto:", this.projeto);
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

.form-control {
  height: 40px !important;;
}

fieldset {
  background-color: rgba(0, 19, 3) !important;
  border-radius: 8px !important;
  margin: 0 auto; /* Centraliza o fieldset horizontalmente */
  width: 30%; /* Define a largura do fieldset */
}

</style>
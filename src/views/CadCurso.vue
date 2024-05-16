<template>
  <MenuNavega />
  <div class="cadCurso p-3">
    <fieldset class="p-3 col-sm-12 col-md-4">
      <h1>Cadastro do Curso:</h1>
      <div class="row p-2">
        <div class=" col-sm-12 col-md-9 offset-md-2">
          <label for="curso" class="form-label">Curso:</label>
          <input type="text" id="curso" class="form-control" v-model="curso" placeholder="Curso" />
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
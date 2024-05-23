<template>
  <div>
    <MenuNavega />
    <div class="tabela">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-md-9 col-sm-9">
            <div class="card login">
              <div class="logo-container">
                <img src="@/assets/logo.png" alt="Logo da sua empresa" class="logo">
                <hr>
              </div>
              <h4>Lista de Cadastros:</h4>

              <!-- campo de testes -->

              <div class="w-50 p-2 mb-3 text-light">
                <b-form-select v-model="selected" :options="options"></b-form-select>
              </div>

              <!-- campo de testes -->

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuNavega from '@/components/MenuNavega.vue';

export default {
  components: {
    MenuNavega
  },

  data() {
    return {
      compatConfig: { MODE: 3 },
      selected: null,
      options: [
        { value: null, text: 'Por favor, selecionar um item:' },
        { value: 'Cadastro de Professor', text: 'Cadastro de Professor' },
        { value: 'Cadastro de Aluno', text: 'Cadastro de Aluno' },
        { value: 'Cadastro de Visitante', text: 'Cadastro de Visitante' },
      ]
    };
  }

};
</script>

<style scoped>
h1 {
  color: black;
}

.form-label {
  margin-bottom: 5px;
}

.logo {
  width: 150px;
  height: auto;
}

/* Estilos para elementos de texto */
p {
  line-height: 1rem;
}

/* Estilos para título h1 */
h1 {
  margin-bottom: 1.5rem;
}

/* Estilos para cards */
.card {
  padding: 20px;
}

/* Estilos para grupos de formulários */
.form-group input {
  margin-bottom: 20px;
  border-radius: 10px;
}

/* Estilos para a página de login */
.login-page {
  align-items: center;
  display: flex;
  height: flex;
}
</style>

<template>
  <MenuNavega />
  <div class="avaliacao">
   
    <div class="container">
      <!-- Linha da grade -->
      <div class="row justify-content-center"> <!-- Centraliza o conteúdo horizontalmente -->
        <!-- Coluna responsiva -->
        <div class="col-lg-4 col-md-6 col-sm-8"> <!-- Ajusta o tamanho da coluna em diferentes dispositivos -->
          <!-- Card de login -->
          <div class="card login">
            <!-- Logo -->
            <div class="logo-container">
              <img src="@/assets/logo.png" alt="Logo da sua empresa" class="logo">
              <hr>
            </div>

            <!-- Formulário de login -->
            <h1>Avaliação:</h1>
            <h6>Escolha a metéria e depois o grupo.</h6>
          
            
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import MenuNavega from '@/components/MenuNavega.vue'

export default {
  components: {
    MenuNavega
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

.logo {
  width: 150px;
  /* Define a largura da logo */
  height: auto;
  /* Mantém a altura proporcional para evitar distorções */
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
.form-group {

  /* Estilos para inputs dentro do form-group */
  input {
    margin-bottom: 20px;
    border-radius: 10px;
  }
}

/* Estilos para a página de login */
.login-page {
  align-items: center;
  display: flex;
  height: flex;
}

.logo {
  width: 150px;
  /* Define a largura da logo */
  height: auto;
  /* Mantém a altura proporcional para evitar distorções */
}
</style>
<template>
  <!-- Componente raiz -->
  <div>
    <!-- Componente de menu de navegação -->
    <BarraNavegao />

    <!-- Contêiner da tabela -->
    <div class="inicio">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-md-9 col-sm-9">
            <div class="card login">
           
              <!-- Título da página -->
              <h4>Seja bem vindo!</h4>
              <!-- Descrição da página -->
              <p>Regras:</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BarraNavegao from '@/components/BarraNavegao.vue';

export default {
  components: {
    BarraNavegao
  },
}
</script>

<style scoped>


.card {
  padding: 20px;
}

</style>

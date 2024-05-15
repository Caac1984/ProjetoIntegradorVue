<template>

  
  <router-view class="container-fluid mb-3 p-3" />

</template>

<script>
export default{
  mounted(){
    console.log(this.$router);
  }
}
</script>

<style>
.navbar {
  border-radius: 10px;
}

.navbar-brand {
  width: 110px; /* Largura da logo */
  height: 40px; /* Altura automática para manter a proporção */
  margin-right: 50px; /* Espaçamento para esquerda */
  margin-left: 20px; /* Espaçamento para direita */
}

/* Estilos para o menu suspenso */
.dropdown-menu {
  background-color: #0031f6 !important;
  box-shadow: 0px 8px 16px rgba(1, 1, 1, 1) !important;
  text-wrap: green;
  
}

.dropdown-item {
  color: #dee8da !important; /* Cor do texto dos itens do menu suspenso */
}

.dropdown-item:hover {
  background-color: #0101015f !important;
  color: rgb(197, 178, 7) !important;
}

body {
  background: rgb(14,0,255);
  background: linear-gradient(90deg, rgba(0,164,255,1) 0%, rgba(14,0,255,1) 50%, rgba(0,164,255,1) 100%);
  height: 100%;
  width: 100%;
  
}

/* Estilos responsivos */
@media (max-width: 20%) {
  .nav-pills {
    flex-direction: column;
  }
}
</style>
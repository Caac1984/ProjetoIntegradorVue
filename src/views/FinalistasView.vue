<template>
  <div>
  <!-- Componente de menu de navegação -->
  <MenuNavega />
  <div class="finalistas">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 col-md-9 col-sm-9">
          <div class="card login">
            <div class="tex1">Finalistas <div class="tex2">Maiores Pontuações dos Projetos.</div>
            </div>
            <div class="pontuacoes-container">
              <b-table striped hover :items="maioresPontuacoes" :fields="fields"></b-table>
            </div>
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
      maioresPontuacoes: [], // Array para armazenar as maiores pontuações
      fields: [ // Configuração das colunas da tabela
        { key: 'projeto', label: 'Projeto' },
        { key: 'pontuacao', label: 'Pontuação' }
      ],
    };
  },

  created() {
    this.fetchMaioresPontuacoes(); // Busca as maiores pontuações ao carregar o componente
  },

  methods: {
    // Método para buscar as três maiores pontuações
    fetchMaioresPontuacoes() {
      fetch('http://localhost:3000/maioresPontuacoes')
        .then(response => response.json())
        .then(data => {
          this.maioresPontuacoes = data;
        })
        .catch(error => {
          console.error('Erro ao buscar maiores pontuações:', error);
        });
    }
  }
};
</script>

<style scoped>
.maiores-pontuacoes {
  padding: 20px;
}

.pontuacoes-container {
  margin-top: 20px;
}

.tex1 {
  font-size: 50px;
  color: black;
}

.tex2 {
  font-size: 20px;
  color: black;
}

.form-label {
  margin-bottom: 5px;
}

.card {
  padding: 20px;
}

</style>

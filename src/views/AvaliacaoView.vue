<template>
  <!-- Componente raiz -->
  <div>
    <!-- Componente de menu de navegação -->
    <BarraNavegao />

    <!-- Contêiner da tabela -->
    <div class="tabela">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-md-9 col-sm-9">
            <div class="card login">
           
              <!-- Título da página -->
              <h4>Avaliação:</h4>

              <!-- Campo de seleção de curso -->
              <div class="w-50 p-2 mb-3 text-light">
                <b-form-select v-model="selectedCurso" :options="optionsCurso" @change="fetchProjetos"></b-form-select>
              </div>

              <!-- Campo de seleção de projeto -->
              <div v-if="selectedCurso" class="w-50 p-2 mb-3 text-light">
                <b-form-select v-model="selectedProjeto" :options="optionsProjeto" @change="fetchCadastros"></b-form-select>
              </div>

              <!-- Tabela de cadastros -->
              <div v-if="selectedProjeto">
                <!-- Tabela usando b-table do BootstrapVue -->
                <b-table striped hover :items="cadastros" :fields="fields">
                </b-table>
              </div>
              <div v-else>
                <!-- Mensagem para quando nenhum item estiver selecionado -->
                <p>Por favor, selecione uma opção.</p>
              </div>
              
              <!-- Detalhes do projeto selecionado -->
              <div v-if="selectedProjeto" class="mt-3">
                <h5>Projeto Selecionado:</h5>
                <p><strong>Nome do Projeto:</strong> {{ selectedProjetoDetails.nome }}</p>
                <p><strong>Descrição:</strong> {{ selectedProjetoDetails.descricao }}</p>
                <!-- Outros detalhes do projeto podem ser adicionados aqui -->
              </div>
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

  data() {
    return {
      selectedCurso: null, // Curso selecionado no campo de seleção
      selectedProjeto: null, // Projeto selecionado no campo de seleção
      optionsCurso: [], // Opções para o campo de seleção de curso
      optionsProjeto: [], // Opções para o campo de seleção de projeto
      cadastros: [], // Array de cadastros
      fields: [ // Configuração das colunas da tabela
        { key: 'curso', label: 'Curso'},
        { key: 'projeto', label: 'Projeto'},
      ],
      selectedProjetoDetails: {} // Detalhes do projeto selecionado
    };
  },

  created() {
    this.fetchCursos(); // Busca os cursos ao carregar o componente
  },

  methods: {
    // Método para buscar os cursos ao carregar o componente
    fetchCursos() {
      fetch('http://localhost:3000/cursos')
        .then(response => response.json())
        .then(data => {
          this.optionsCurso = data.map(curso => ({ value: curso.id, text: curso.nome }));
        })
        .catch(error => {
          console.error('Erro ao buscar cursos:', error);
        });
    },

    // Método para buscar os projetos quando o curso selecionado muda
    fetchProjetos() {
      if (this.selectedCurso) {
        fetch(`http://localhost:3000/projetos/${this.selectedCurso}`)
          .then(response => response.json())
          .then(data => {
            this.optionsProjeto = data.map(projeto => ({ value: projeto.id, text: projeto.nome }));
            this.selectedProjeto = null; // Reseta o projeto selecionado ao mudar de curso
          })
          .catch(error => {
            console.error('Erro ao buscar projetos:', error);
          });
      } else {
        this.optionsProjeto = [];
        this.selectedProjeto = null;
      }
    },

    // Método para buscar os cadastros quando o projeto selecionado muda
    fetchCadastros() {
      if (this.selectedProjeto) {
        fetch(`http://localhost:3000/cadastros/${this.selectedProjeto}`)
          .then(response => response.json())
          .then(data => {
            this.cadastros = data;
            this.fetchProjetoDetails(); // Busca os detalhes do projeto selecionado
          })
          .catch(error => {
            console.error('Erro ao buscar cadastros:', error);
          });
      } else {
        this.cadastros = [];
      }
    },

    // Método para buscar os detalhes do projeto selecionado
    fetchProjetoDetails() {
      if (this.selectedProjeto) {
        fetch(`http://localhost:3000/projetos/details/${this.selectedProjeto}`)
          .then(response => response.json())
          .then(data => {
            this.selectedProjetoDetails = data;
          })
          .catch(error => {
            console.error('Erro ao buscar detalhes do projeto:', error);
          });
      } else {
        this.selectedProjetoDetails = {};
      }
    },

    editCadastro(cadastro) {
      // Lógica para editar o cadastro
      console.log('Editando cadastro:', cadastro);
    },

    excluirCadastro(cadastro) {
      // Lógica para excluir o cadastro
      console.log('Excluindo cadastro:', cadastro);
    }
  }
};
</script>



<style scoped>
/* Estilos CSS específicos para este componente */
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

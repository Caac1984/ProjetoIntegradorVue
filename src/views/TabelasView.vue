<template>
  <!-- Componente raiz -->
  <div>
    <!-- Componente de menu de navegação -->
    <MenuNavega />

    <!-- Contêiner da tabela -->
    <div class="tabela">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-md-9 col-sm-9">
            <div class="card login">
              <!-- Container do logo -->
              <div class="logo-container">
                <img src="@/assets/logo.png" alt="Logo da sua empresa" class="logo">
                <hr> <!-- Linha separadora -->
              </div>
              <!-- Título da página -->
              <h4>Lista de Cadastros:</h4>

              <!-- Campo de seleção -->
              <div class="w-50 p-2 mb-3 text-light">
                <b-form-select v-model="selected" :options="options" @change="fetchCadastros"></b-form-select>
              </div>

              <!-- Tabela de cadastros -->
              <div v-if="selected">
                <!-- Tabela usando b-table do BootstrapVue -->
                <b-table striped hover :items="cadastros[selected]" :fields="fields" :sort-by="sortBy"
                  :sort-desc="sortDesc">
                  <!-- Template para a coluna de editar -->
                  <template #cell(edit)="row">
                    <b-button @click="editCadastro(row.item)">Editar</b-button>
                  </template>
                  <!-- Template para a coluna de excluir -->
                  <template #cell(excluir)="row">
                    <b-button @click="excluirCadastro(row.item)">Excluir</b-button>
                  </template>
                </b-table>
              </div>
              <div v-else>
                <!-- Mensagem para quando nenhum item estiver selecionado -->
                <p>Por favor, selecione um item para visualizar os cadastros.</p>
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
      selected: null, // Item selecionado no campo de seleção
      options: [ // Opções para o campo de seleção
        { value: null, text: 'Por favor, selecionar um item:' },
        { value: 'Cadastro de Professor', text: 'Cadastro de Professor' },
        { value: 'Cadastro de Aluno', text: 'Cadastro de Aluno' },
        { value: 'Cadastro de Visitante', text: 'Cadastro de Visitante' },
      ],
      cadastros: [], // Array de cadastros
      sortBy: '', // Campo usado para ordenar a tabela
      sortDesc: false, // Flag para ordenação descendente
      fields: [ // Configuração das colunas da tabela
        { key: 'nome', label: 'Nome', sortable: true },
        { key: 'sobrenome', label: 'Sobrenome', sortable: true },
        { key: 'email', label: 'E-mail', sortable: true },
        { key: 'telefone', label: 'Telefone', sortable: true },
        { key: 'disciplina', label: 'Disciplina', sortable: true },
        { key: 'matricula', label: 'Matrícula', sortable: true },
        { key: 'projeto', label: 'Projeto', sortable: true },
        { key: 'edit', label: 'Editar' }, // Coluna para botão de editar
        { key: 'excluir', label: 'Excluir' }, // Coluna para botão de excluir
      ],
    };
  },

  methods: {
    // Método para buscar os cadastros quando o item selecionado muda
    fetchCadastros() {
      if (this.selected) {
        fetch(`http://localhost:3000/cadastros/${this.selected}`)
          .then(response => response.json())
          .then(data => {
            this.cadastros = data;
          })
          .catch(error => {
            console.error('Erro ao buscar cadastros:', error);
          });
      }
    },

    // Método para editar um cadastro
    editCadastro(cadastro) {
      // Lógica para editar o cadastro
      console.log('Editando cadastro:', cadastro);
    },

    // Método para excluir um cadastro
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

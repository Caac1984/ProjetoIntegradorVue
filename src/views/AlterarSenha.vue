<template>
    <!-- Template Vue.js -->
    <div class="alterarsenha">
        <!-- Div para a página de alteração de senha -->
        <div class="alterarsenha-page">
            <!-- Container para conteúdo -->
            <div class="container">
                <!-- Linha da grade -->
                <div class="row justify-content-center"> <!-- Centraliza o conteúdo horizontalmente -->
                    <!-- Coluna responsiva -->
                    <div class="col-lg-4 col-md-6 col-sm-8">
                        <!-- Ajusta o tamanho da coluna em diferentes dispositivos -->
                        <!-- Card de alteração de senha -->
                        <div v-if="!registerActive" class="card alterarsenha" v-bind:class="{ error: emptyFields }">
                            <!-- Logo -->
                            <div class="logo-container">
                                <img src="@/assets/logo.png" alt="Logo da sua empresa" class="logo">
                                <hr>
                            </div>

                            <!-- Título do card de alteração de senha -->
                            <h2>Confirme seu e-mail:</h2>
                            <!-- Formulário de alteração de senha -->
                            <form class="form-group" @submit.prevent="submitForm">
                                <!-- Input de e-mail -->
                                <input v-model="emailAltSenha" type="email" class="form-control" placeholder="E-mail"
                                    required>
                                <br>
                                <!-- Botão de envio do formulário de alteração de senha -->
                                <button type="submit" class="btn btn-primary">Enviar</button>
                                <br><br>
                                <!-- Alerta após o envio do e-mail -->
                                <b-alert v-if="showAlert" show variant="success">
                                    As instruções foram enviadas para seu e-mail.
                                </b-alert>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Script Vue.js -->
<script>
export default {
    data() {
        return {
            emailAltSenha: '',
            emptyFields: false,
            showAlert: false, // Variável para controlar a exibição do alerta
        };
    },
    methods: {
        submitForm() {
            // Lógica para enviar o e-mail de alteração de senha
            // Aqui você pode adicionar a lógica para enviar o e-mail de alteração de senha
            // e definir showAlert como true para mostrar o alerta
            this.sendEmail(); // Supondo que você tenha um método para enviar o e-mail
            this.showAlert = true;
        },
        sendEmail() {
            // Lógica para enviar o e-mail
        }
    }
}
</script>

<!-- Estilos CSS -->
<style scoped>
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

/* Estilos para a página de alteração de senha */
.alterarsenha-page {
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

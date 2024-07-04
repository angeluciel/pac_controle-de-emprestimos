<template>
  <div>
    <span class="d-flex justify-content-center mb-5 mt-5 fw-medium fs-3">Login</span>
    <p v-if="mensagem !== ''" class="text-center text-danger">{{ mensagem }}</p>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="entrar">
        <v-text-field v-model="usuario" label="Usuário" :rules="firstNameRules"></v-text-field>
        <v-text-field v-model="senha" label="Senha" type="password" :rules="lastNameRules"></v-text-field>
        <v-btn type="submit" block class="mt-2">Entrar</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from "../eventBus.js";

export default {
  setup() {
    const auth = useAuth();
    const usuario = ref('');
    const senha = ref('');
    const mensagem = ref('');
    const router = useRouter();

    const entrar = () => {
      if (usuario.value === "a" && senha.value === "a") {
        window.dispatchEvent(new CustomEvent('autenticar', { detail: true }));
      
        auth.autenticado = true;

        const destino = router.currentRoute.value.query.redirecionar || "/emprestimos";
        router.push(destino);
        return;
      }
      mensagem.value = "Dados incorretos!";
      setTimeout(() => {
        mensagem.value = '';
        usuario.value = '';
        senha.value = '';
      }, 3000);
    };

    const firstNameRules = ref([
      (v) => !!v || 'O usuário é obrigatório',
    ]);

    const lastNameRules = ref([
      (v) => !!v || 'A senha é obrigatória',
    ]);

    return { usuario, senha, mensagem, entrar, firstNameRules, lastNameRules };
  },
};
</script>

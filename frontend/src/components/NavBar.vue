<template>
  <div class="d-flex">
    <nav class="d-flex flex-column p-4 border-end">
      <div v-for="campo in campos" :key="campo.nome">
        <router-link :to="campo.link" class="btn btn-light mb-2 fw-light d-flex flex-column">{{ campo.nome }}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campos: [
        { link: "/emprestimos", nome: "Empréstimos" },
        { link: "/categorias", nome: "Categorias" },
        { link: "/itens", nome: "Itens" },
        { link: "/perfis", nome: "Perfis" },
      ],
    };
  },
};
</script>

<style scoped>
.navegacao {
  width: 25vw;
}
</style>

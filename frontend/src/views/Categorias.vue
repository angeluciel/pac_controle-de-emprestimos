<template>
  <div class="d-flex">
    <NavBar />
    <Tabela
      :nome="'Categorias'"
      :headers="headers"
      :desserts="desserts"
      :btn="'Nova categoria'"
      class="w-100"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Tabela from "../components/Tabela.vue";
import NavBar from "../components/NavBar.vue";
import api from "@/api";

export default defineComponent({
  components: {
    Tabela,
    NavBar,
  },

  data() {
    return {
      desserts: [],
      headers: [
        {
          title: "Categoria",
          align: "start",
          value: "categoria",
        },
        { title: "Itens", value: "itens" },
        { title: "Descrição", value: "descricao" },
        { title: "Actions", value: "actions", sortable: false },
      ],
    };
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      try {
        const response = await api.get('/categorias');
        const categorias = response.data;

        this.desserts = categorias.map(categoria => ({
          categoria: categoria.nome,
          itens: categoria.items.length,
          descricao: categoria.descricao,
        }));
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    },
  },
});
</script>

<style scoped></style>
<template>
  <div class="d-flex">
    <NavBar />
    <Tabela
      :nome="'Itens'"
      :headers="headers"
      :desserts="desserts"
      :btn="'Novo item'"
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
          title: "Item",
          align: "start",
          value: "item",
        },
        { title: "Categoria", value: "categoria" },
        { title: "Descrição", value: "descricao" },
        { title: "Status", value: "status" },
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
        const response = await api.get('/itens');
        console.log(response.data);
        const itens = response.data;

        this.desserts = itens.map(item => ({
          item: item.nome,
          categoria: item.Categoria ? item.Categoria.nome : 'Sem Categoria',
          descricao: item.descricao,
          status: item.status,
        }));
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    },
  },
});
</script>

<style scoped></style>
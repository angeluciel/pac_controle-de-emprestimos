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
    initialize() {
      this.desserts = [
        {
          item: "Carrinho #12abcd",
          categoria: "Carrinhos",
          descricao: "Rodas grandes, amarelo",
          status: "Disponível",
        },
        {
          item: "Carrinho elétrico",
          categoria: "Carrinhos",
          descricao: "Conectado a tomada",
          status: "Emprestado",
        },
        {
          item: "Cabo HDMI",
          categoria: "Cabos",
          descricao: "",
          status: "Indisponível",
        },
        {
          item: "Monitor Simples",
          categoria: "Hardware",
          descricao: "Da marca LG, 35 polegadas",
          status: "Indisponível",
        },
      ];
    },
  },
});
</script>

<style scoped></style>

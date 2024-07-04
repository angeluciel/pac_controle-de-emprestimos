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
    initialize() {
      this.desserts = [
        {
          categoria: "Carrinhos",
          itens: 2,
          descricao: "Carrinhos legais e elétricos",
        },
        {
          categoria: "Cabos A",
          itens: 1,
          descricao: "HDMI / Coaxiais",
        },
        {
          categoria: "Cabos B",
          itens: 5,
          descricao: "Cabos dos carrinhos e dos computadores",
        },
      ];
    },
  },
});
</script>

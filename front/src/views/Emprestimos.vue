<template>
  <div class="d-flex">
    <NavBar />
    <Tabela
      :nome="'Empréstimos'"
      :headers="headers"
      :desserts="desserts"
      :btn="'Novo empréstimo'"
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
          title: "Perfil",
          align: "start",
          sortable: false,
          value: "perfil",
        },
        { title: "Categoria", value: "categoria" },
        { title: "Item", value: "item" },
        { title: "Data inicial", value: "data_inicial" },
        { title: "Data final", value: "data_final" },
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
          perfil: "João da Silva",
          categoria: "Carrinhos",
          item: "Carrinho #ABC1",
          data_inicial: "27/03/24",
          data_final: "04/04/24",
          status: "Ok",
        },
        {
          perfil: "Pedro Pereira",
          categoria: "Cabos",
          item: "Cabo HDMI",
          data_inicial: "27/03/24",
          data_final: "04/04/24",
          status: "Em atraso",
        },
        {
          perfil: "Maria Mariazinha",
          categoria: "Baterias",
          item: "Bateria elétrica",
          data_inicial: "27/03/24",
          data_final: "04/04/24",
          status: "A entregar",
        },
      ];
    },
  },
});
</script>

<style scoped></style>

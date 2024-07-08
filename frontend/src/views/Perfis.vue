<template>
  <div class="d-flex">
    <NavBar />
    <Tabela
      :nome="'Perfis'"
      :headers="headers"
      :desserts="desserts"
      :btn="'Novo perfil'"
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
          title: "Perfil",
          align: "start",
          value: "perfil",
        },
        { title: "Empréstimos ativos", value: "emprestimos_ativos" },
        { title: "Descrição", value: "descricao" },
        { title: "Pendências", value: "pendencias" },
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
        const response = await api.get('/usuarios');
        const usuarios = response.data;
        
        this.desserts = usuarios.map(user => ({
          perfil: user.usuario,
          emprestimos_ativos: user.emprestimos_ativos || 0,
          descricao: user.descricao,
          pendencias: user.pendencias || "Ok",
        }));
      } catch (error) {
        console.error('Erro ao buscar perfis:', error);
      }
    },
  },
});
</script>

<style scoped></style>
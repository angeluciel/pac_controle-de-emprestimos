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
    initialize() {
      this.desserts = [
        {
          perfil: "João da Silva",
          emprestimos_ativos: 2,
          descricao: "Aluno de eng. de software",
          pendencias: "Ok",
        },
        {
          perfil: "Pedro Pereira",
          emprestimos_ativos: 1,
          descricao: "Professor de eng. mecânica",
          pendencias: "Verificar",
        },
        {
          perfil: "Maria Mariazinha",
          emprestimos_ativos: 5,
          descricao: "Bolsista Wickedbotz",
          pendencias: "Verificar",
        },
        {
          perfil: "Clóvis Cleiton",
          emprestimos_ativos: 0,
          descricao: "Aluno de eng. elétrica",
          pendencias: "Ok",
        },
        {
          perfil: "Ana Anao",
          emprestimos_ativos: 3,
          descricao: "Professora de eng. mecatrônica",
          pendencias: "Verificar",
        },
      ];
    },
  },
});
</script>

<style scoped></style>

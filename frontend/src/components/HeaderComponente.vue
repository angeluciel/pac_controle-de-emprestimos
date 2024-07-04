<template>
  <div class="d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <span class="fs-4 fw-semi-bold me-2">{{ nome }}</span>
      <span class="bg-white p-1 rounded-circle">{{ valor }}</span>
    </div>
    <button class="btn bg-white shadow-sm">Novo empréstimo +</button>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    valor: {
      type: Number,
    },
  },
};
</script>

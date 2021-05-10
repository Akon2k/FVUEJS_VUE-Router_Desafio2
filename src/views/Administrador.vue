<template>
  <div class="adm-total">
    <h1>Bienvenido a la página de Administración</h1>
    <h2 v-if="tipo">ela param es : {{ tipo }}</h2>
    <h2 v-else>no se renderiza la props</h2>
  </div>
</template>

<script>
export default {
  name: "Admtotal",
  props: {
    tipo: String,
  },
};
</script>

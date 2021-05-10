<template>
  <div class="adm-total">
    <h1>
      Esta página de administración está en construcción. Intente como
      administrador simple
    </h1>
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

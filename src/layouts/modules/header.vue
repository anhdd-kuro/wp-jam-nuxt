<template>
  <header class="header">
    <Nav />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Nav from "./components/nav.vue";

export default defineComponent({
  components: {
    Nav,
  },
});
</script>

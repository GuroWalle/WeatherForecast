<template>
  <RouterView />
</template>

<script>
import Home from "../views/Home.vue";

export default {
  components: {
    Home,
  },
};
</script>

<style>
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>

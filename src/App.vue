<template>
  <Nav />
  <main class="form-signin w-25 m-auto mt-5">
    <router-view />
  </main>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

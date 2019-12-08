<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
    <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>

  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      Footer,
      Navbar
    },

    data: () => ({
    }),
  };
</script>

<style scoped>

</style>

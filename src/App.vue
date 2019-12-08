<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
    <router-view></router-view>
    </v-content>
    <Home></Home>
    <Footer></Footer>
  </v-app>
</template>

<script>

  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import Home from "./components/Home";

  export default {
    name: 'App',
    components: {
      Home,
      Footer,
      Navbar
    },

    data: () => ({
    }),
  };
</script>

<style scoped>

</style>

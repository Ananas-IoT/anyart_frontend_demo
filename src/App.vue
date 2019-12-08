<template>

  <v-app>
    <Navbar></Navbar>
    <v-content>
    <router-view></router-view>
    </v-content>
    <Home></Home>
  </v-app>

</template>

<script>


  import Navbar from "./components/Navbar";
  import Home from "./components/Home";

  export default {
    name: 'App',
    components: {
      Home,
      Navbar
    },

        data: () => ({}),
    };
</script>

<style scoped>

</style>

<template>
  <v-app>
    <login-box></login-box>
    <registration-box></registration-box>
  </v-app>
</template>

<script>


  import LoginPage from "./components/LoginPage";
  import Registration from "./components/Registration";

  export default {
    name: 'App',
    components: {
      'login-box': LoginPage,
      'registration-box': Registration
    },

    data: () => ({
    }),
  };
</script>

<style scoped>

</style>

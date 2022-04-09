<template>
  <v-app id="main">
    <v-app-bar app color="transparent" elevation="0">
      <!--router links here-->
      <router-link to="/about"></router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      test: "testvar",
    };
  },

  mounted() {
    console.log(this.$vuetify.theme);
  },
};
</script>

<style>
#main {
  background-color: var(--v-background-base);
}
</style>
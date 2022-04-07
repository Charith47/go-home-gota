<template>
  <v-app>
    <v-app-bar app color="black" dark> </v-app-bar>

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
};
</script>

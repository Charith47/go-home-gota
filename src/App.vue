<template>
  <v-app id="main">
    <!--top appbar-->
    <v-app-bar id="app-bar" app flat outlined color="transparent">
      <v-container class="py-0 fill-height">
        <!--main title-->
        <h2 class="px-2">GoHomeGota</h2>
        <!--replace with svg?-->
        <v-icon class="dot" x-small color="justice">
          {{ icons.mdiCheckboxBlankCircle }}
        </v-icon>
        <v-icon class="dot" x-small color="strength">
          {{ icons.mdiCheckboxBlankCircle }}
        </v-icon>
        <v-icon class="dot" x-small color="peace">
          {{ icons.mdiCheckboxBlankCircle }}
        </v-icon>
        <v-icon class="dot" x-small color="victory">
          {{ icons.mdiCheckboxBlankCircle }}
        </v-icon>

        <v-spacer></v-spacer>

        <!--dark mode switch-->
        <v-checkbox
          class="pt-5 px-2"
          v-model="$vuetify.theme.dark"
          :off-icon="icons.mdiThemeLightDark"
          :on-icon="icons.mdiThemeLightDark"
        ></v-checkbox>

        <!--router links here-->
        <router-link to="/about">About</router-link>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mdiCheckboxBlankCircle, mdiThemeLightDark } from "@mdi/js";
export default {
  name: "App",
  data() {
    return {
      icons: {
        mdiThemeLightDark,
        mdiCheckboxBlankCircle,
      },
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.dot {
  margin: 2px;
}
#main {
  background-color: var(--v-background-base);
}
#app-bar {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
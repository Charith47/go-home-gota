<template>
  <v-app id="main">
    <!--top appbar-->
    <v-app-bar id="app-bar" app flat outlined color="transparent">
      <v-container class="py-0 fill-height">
        <!--main title-->
        <h2 class="px-2">GoHomeGota</h2>
        <!--TODO: replace with svg?-->
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
          @change="toggleTheme"
          class="pt-5 px-2"
          :off-icon="icons.mdiThemeLightDark"
          :on-icon="icons.mdiThemeLightDark"
        ></v-checkbox>

        <!--router links here-->
        <router-link to="/about">{{ $t("main.appBar.about") }}</router-link>
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
  mounted() {
    this.loadTheme();
  },
  methods: {
    /**
     * Toggles global theme and saves the state on local storage
     */
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

      const storage = window.localStorage;
      storage.setItem("isDark", this.$vuetify.theme.dark);
    },

    /**
     * Loads and sets theme state from local storage.
     * If local storage entry does not exist, it will search for the user preference.
     * If the user preference is unavailable, it will set the theme to light mode.
     */
    loadTheme() {
      const storage = window.localStorage;

      if (storage.getItem("isDark")) {
        this.$vuetify.theme.dark = storage.getItem("isDark");
      } else {
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      }
    },
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
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
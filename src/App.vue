<template>
  <v-app id="main">
    <!--top appbar-->
    <v-app-bar id="app-bar" app flat outlined>
      <v-container class="py-0 my-0 fill-height">
        <!--main title-->
        <h2 class="text--primary">GoHomeGota</h2>
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

        <LocaleSwitcher></LocaleSwitcher>

        <!--dark mode switch-->
        <v-btn @click="toggleTheme" icon class="d-none d-sm-flex mr-4 text--primary">
          <v-icon>
            {{ icons.mdiThemeLightDark }}
          </v-icon>
        </v-btn>

        <!--router links here-->
        <router-link class="d-none d-sm-flex text--primary" to="/about">{{
          $t("main.appBar.about")
        }}</router-link>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// TODO: add grain
// TODO: responsive nav (with footer?)
// TODO: finish language support
import LocaleSwitcher from "./components/LocaleSwitcher.vue";
import { mdiCheckboxBlankCircle, mdiThemeLightDark } from "@mdi/js";
export default {
  name: "App",
  components: {
    LocaleSwitcher,
  },
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

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main {
  background-color: var(--v-background-base);
}

/*
https://braydoncoyer.dev/blog/build-a-glassmorphic-navbar-with-tailwindcss-backdrop-filter-and-backdrop-blur
https://hype4.academy/tools/glassmorphism-generator
*/

#app-bar {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/*
https://stackoverflow.com/a/58126223
*/
#app-bar.theme--light {
  background: rgba(255, 255, 255, 0.35);
}

#app-bar.theme--dark {
  background: rgba(18, 18, 18, 0.35);
}

.dot {
  margin: 2px;
}

/*
https://rhyslloyd.me/dimming-images-for-dark-mode/
*/
.v-image .theme--dark {
  filter: brightness(75%) grayscale(25%);
  transition-property: filter;

  transition-duration: 0.5s;
  transition-delay: 0.01s;
  transition-timing-function: ease-out;
}

.v-image .theme--light {
  filter: brightness(100%) grayscale(0%);
  transition-property: filter;

  transition-duration: 0.5s;
  transition-delay: 0.01s;
  transition-timing-function: ease-in;
}
</style>
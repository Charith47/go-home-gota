<template>
  <v-app id="main">
    <!--top appbar-->
    <v-app-bar id="app-bar" app flat outlined>
      <v-container class="px-0 py-0 my-0 fill-height">
        <v-app-bar-nav-icon
          @click.stop="navDrawer = !navDrawer"
          class="d-sm-none"
        >
          <v-icon color="grey lighten-1">
            {{ icons.mdiMenu }}
          </v-icon>
        </v-app-bar-nav-icon>
        <!--main title-->
        <img
          v-if="$vuetify.theme.dark"
          width="205px"
          src="./assets/logo/logo_dark.png"
          alt="GoHomeGota"
        />
        <img
          v-else
          width="205px"
          src="./assets/logo/logo_light.png"
          alt="GoHomeGota"
        />

        <v-spacer></v-spacer>

        <LocaleSwitcher
          :visibleOnMobile="false"
          :offsetOverflow="false"
          :offsetY="true"
          padding="pr-4"
        ></LocaleSwitcher>
        <ThemeSwitcher :visibleOnMobile="false" margin="mr-4"></ThemeSwitcher>

        <!--TOP-NAV: router links here-->
        <router-link
          class="d-none d-sm-flex text--primary"
          :to="$i18nRoute({ name: 'About' })"
          >{{ $t("main.nav.about") }}
        </router-link>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      class="black"
      v-model="navDrawer"
      app
      :disable-resize-watcher="true"
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item three-line disabled inactive>
            <img src="./assets/logo/dots_01.svg" alt="GoHomeGota" />
          </v-list-item>
        </v-list-item-group>

        <v-divider class="py-4"></v-divider>

        <!--SIDE-NAV: router links here-->
        <v-list-item-group>
          <v-list-item two-line :to="$i18nRoute({ name: 'Home' })">
            <v-list-item-title>{{ $t("main.nav.home") }}</v-list-item-title>
          </v-list-item>

          <v-list-item two-line :to="$i18nRoute({ name: 'About' })">
            <v-list-item-title>{{ $t("main.nav.about") }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="px-0 pt-0">
        <router-view />
      </v-container>
    </v-main>

    <v-footer app absolute>
      <v-container>
        <v-card flat tile width="100%" color="transparent" class="text-center">
          <v-card-text> </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="text--primary">
            {{ new Date().getFullYear() }} — <strong>GoHomeGota</strong>
          </v-card-text>
          <v-card-actions class="mx-0 px-0">
            <v-spacer></v-spacer>
            <LocaleSwitcher
              :visibleOnMobile="true"
              :offsetOverflow="true"
              padding="pr-4"
            ></LocaleSwitcher>
            <ThemeSwitcher :visibleOnMobile="true"></ThemeSwitcher>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
// TODO: add grain
import LocaleSwitcher from "./components/LocaleSwitcher.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

import { mdiMenu } from "@mdi/js";
export default {
  name: "App",
  components: {
    LocaleSwitcher,
    ThemeSwitcher,
  },
  data() {
    return {
      icons: {
        mdiMenu,
      },
      navDrawer: false,
    };
  },
  mounted() {
    this.loadTheme();
  },
  methods: {
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

@media (max-width: 600px) {
  .v-toolbar__content {
    padding: 4px 0px !important;
  }
}

@media (min-width: 1904px) {
  .container {
    max-width: 1185px !important;
  }
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
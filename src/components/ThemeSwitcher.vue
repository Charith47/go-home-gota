<template>
  <v-btn @click="toggleTheme" icon class="d-none d-sm-flex mr-4 text--primary">
    <v-icon>
      {{ icons.mdiThemeLightDark }}
    </v-icon>
  </v-btn>
</template>

<script>
import { mdiThemeLightDark } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiThemeLightDark,
      },
    };
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
  },
};
</script>
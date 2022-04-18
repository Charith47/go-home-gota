<template>
  <v-btn
    @click="toggleTheme"
    icon
    :class="`${
      visibleOnMobile ? '' : 'd-none d-sm-flex'
    } ${padding} ${margin} text--primary`"
  >
    <v-icon>
      {{ icons.mdiThemeLightDark }}
    </v-icon>
  </v-btn>
</template>

<script>
import { mdiThemeLightDark } from "@mdi/js";
export default {
  props: ["visibleOnMobile", "padding", "margin"],
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
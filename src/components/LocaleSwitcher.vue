<template>
  <v-menu open-on-hover offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-icon class="pr-4 text--primary" v-bind="attrs" v-on="on">
        {{ icons.mdiTranslate }}
      </v-icon>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mdiTranslate } from "@mdi/js";
export default {
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
      icons: {
        mdiTranslate,
      },
      items: [{ title: "en" }],
    };
  },
};
</script>
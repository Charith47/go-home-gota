<template>
  <v-menu open-on-hover :offset-overflow="offsetOverflow" :offset-y="offsetY">
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        :class="`${
          visibleOnMobile ? 'd-sm-none' : 'd-none d-sm-flex'
        } ${padding} ${margin} text--primary`"
        v-bind="attrs"
        v-on="on"
      >
        {{ icons.mdiTranslate }}
      </v-icon>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in supportedLocales"
        :key="locale"
        @click="switchLocale(locale)"
      >
        <v-list-item-title>{{ locale }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mdiTranslate } from "@mdi/js";
import { Translate } from "@/plugins/translate";

export default {
  props: ["visibleOnMobile", "padding", "margin", "offsetY", "offsetOverflow"],
  data() {
    return {
      icons: {
        mdiTranslate,
      },
    };
  },
  methods: {
    switchLocale(locale) {
      const to = this.$router.resolve({ params: { locale } });
      return Translate.changeLocale(locale).then(() => {
        this.$router.push(to.location);
      });
    },
  },
  computed: {
    supportedLocales() {
      return Translate.supportedLocales;
    },
  },
};
</script>
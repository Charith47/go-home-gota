<template>
  <v-container class="px-0 pt-0">
      <Carousel></Carousel>
      <div id="box"></div>
  </v-container>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>

<style>
#box {
  height: 2000px;
}
</style>
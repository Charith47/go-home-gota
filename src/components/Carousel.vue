<template>
  <v-carousel
    cycle
    :show-arrows="false"
    hide-delimiter-background
    hide-delimiters
  >
    <v-carousel-item v-for="(image, i) in images" :key="i">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-img
            v-bind="attrs"
            v-on="on"
            class="carousel-image"
            :src="image.src"
          ></v-img>
        </template>
        <span>{{ image.credits }}</span>
      </v-tooltip>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";

export default {
  name: "Carousel",
  data() {
    return {
      items: [],
    };
  },
  created() {
    // call axios for image data
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await axios.get("http://localhost:3000/images");
        console.log(response);
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    images() {
      return this.items;
    },
  },
};
</script>
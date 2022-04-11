<template>
  <v-carousel
    cycle
    :show-arrows="false"
    hide-delimiter-background
    hide-delimiters
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img style="" :src="item.src"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        {
          src: "./images/resized-1.jpg",
        },
        {
          src: "./images/resized-2.jpg",
        },
                {
          src: "./images/resized-3.jpg",
        },
      ],
    };
  },
};
</script>
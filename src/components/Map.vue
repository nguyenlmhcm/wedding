<template>
  <div class="map">
    <iframe :src="embedUrl" referrerpolicy="no-referrer-when-downgrade" title="Bản đồ"></iframe>
    <Button @click="openMap">Chỉ đường</Button>
  </div>
</template>

<script>
import config from "../../wedding.config.js";

export default {
  name: "Map",
  computed: {
    query() {
      return encodeURIComponent(config.venue.mapQuery);
    },
    embedUrl() {
      return `https://maps.google.com/maps?q=${this.query}&z=16&output=embed`;
    },
  },
  methods: {
    openMap() {
      window.open(`https://www.google.com/maps/search/?api=1&query=${this.query}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  margin: 18px 0 40px;
  iframe {
    display: block;
    width: 100%;
    height: 240px;
    border: 0;
    margin-bottom: 22px;
  }
}
</style>

<template>
  <div class="gallery">
    <img src="~@/assets/images/bunny.png" class="bunny" />
    <div class="description">
      album ảnh cưới
    </div>
    <div></div>
    <div class="gallery-container" ref="gal">
      <div class="gallery-inner" :style="{ width: photos.length * 250 + 120 + 'px' }">
        <div class="gallery-item" v-for="(file, i) in photos" :key="file">
          <div class="image">
            <img
              :src="asset('gallery/' + file)"
              :style="{
                transform: `translateX(${(((scrollX - i * 250) / 4.8 +
                  50 >
                100
                  ? 100
                  : (scrollX - i * 250) / 4.8 + 50 < 0
                  ? 0
                  : (scrollX - i * 250) / 4.8 + 50) /
                  100) *
                  -55}px)`,
              }"
            />
          </div>
          <div class="arch"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../wedding.config.js";
import { asset } from "../asset.js";

export default {
  name: "Gallery",
  methods: { asset },
  data() {
    return {
      scrollX: 0,
      width: 320,
      photos: config.gallery,
    };
  },
  mounted() {
    this.$refs.gal.addEventListener("scroll", (event) => {
      this.scrollX = event.target.scrollLeft;
    });
    this.width = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    this.$refs.gal.scrollLeft = Math.min(850, (this.photos.length - 1) * 250);
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  overflow: hidden;
  .bunny {
    width: 65px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .gallery-container {
    padding-left: 50%;
    padding-right: 50%;
    margin-left: -22px;
    margin-right: -22px;
    overflow-x: auto;
    .gallery-inner {
      display: flex;
      .gallery-item {
        flex: 0 0 240px;
        position: relative;
        width: 240px;
        height: 360px;
        margin-right: 10px;
        &:before {
          position: absolute;
          top: 0;
          left: -1px;
          display: block;
          content: "";
          width: 2px;
          height: 360px;
          background-color: #fffdf9;
          z-index: 11;
        }
        &:after {
          position: absolute;
          top: 0;
          right: -1px;
          display: block;
          content: "";
          width: 2px;
          height: 360px;
          background-color: #fffdf9;
          z-index: 11;
        }
        .arch {
          position: absolute;
          top: 0;
          left: 0;
          width: 240px;
          height: 360px;
          background-image: url("~@/assets/images/arch.png");
          background-repeat: no-repeat;
          background-size: 240px auto;
          background-position: top left;
          z-index: 10;
        }
        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 240px;
          height: 360px;
          overflow: hidden;
          img {
            transition: transform 100ms;
            width: 296px;
            height: 360px;
          }
        }
      }
    }
  }
}
</style>

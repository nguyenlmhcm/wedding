<template>
  <div class="intro-movie">
    <div class="image">
      <img v-if="intro.image" :src="asset(intro.image)" />
      <div v-else class="title">
        <h1>{{ intro.heading }}</h1>
        <div class="ribbon"></div>
        <p class="names">{{ groom }}<span>&amp;</span>{{ bride }}</p>
      </div>
    </div>
    <div class="movie" v-if="intro.video">
      <video :poster="asset(intro.poster)" :autoplay="!isIOS" controls playsinline>
        <source :src="asset(intro.video)" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import config from "../../wedding.config.js";
import { asset } from "../asset.js";

export default {
  name: "IntroMovie",
  data() {
    return {
      intro: config.intro,
      groom: config.groom,
      bride: config.bride,
      isIOS: /iPhone|iPad|iPod/.test(window.navigator.userAgent),
    };
  },
  methods: { asset },
};
</script>

<style lang="scss" scoped>
.intro-movie {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 780px;
  background-color: #ffffff;
  .image {
    display: flex;
    flex: 1;
    padding: 0 $padding-vertical;
    justify-content: center;
    align-items: flex-end;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .title {
    text-align: center;
    color: #202121;
    padding-bottom: 24px;
    h1 {
      font-family: $font-script;
      font-size: 40px;
      line-height: 1.3;
    }
    .ribbon {
      width: 200px;
      height: 2px;
      margin: 14px auto 18px;
      background: #e9b949;
    }
    .names {
      font-family: $font-script;
      font-size: 30px;
      line-height: 1.4;
      span {
        display: block;
        font-size: 20px;
        color: #e9b949;
      }
    }
  }
  .movie video {
    display: block;
    width: 100vw;
    height: 100vw;
    max-width: 460px;
    max-height: 460px;
  }
}
</style>

<template>
  <div class="gift">
    <img src="~@/assets/images/heart.svg" class="heart" />
    <h2>Hộp mừng cưới</h2>
    <p class="intro">Sự hiện diện của bạn là niềm vui lớn nhất.<br />Nếu ở xa, bạn có thể gửi lời chúc qua đây.</p>
    <div class="card" v-for="g in gifts" :key="g.side">
      <div class="side">{{ g.side }}</div>
      <img v-if="g.qr" :src="asset(g.qr)" class="qr" />
      <div>{{ g.bank }}</div>
      <div class="account">{{ g.account }}</div>
      <div>{{ g.holder }}</div>
      <button class="copy" @click="copy(g)">{{ copied === g.side ? "Đã chép ✓" : "Chép số tài khoản" }}</button>
    </div>
  </div>
</template>

<script>
import config from "../../wedding.config.js";
import { asset } from "../asset.js";

export default {
  name: "Gift",
  data() {
    return { gifts: config.gifts || [], copied: null };
  },
  methods: {
    asset,
    async copy(g) {
      try {
        await navigator.clipboard.writeText(g.account);
        this.copied = g.side;
      } catch (e) {
        window.prompt("Chép số tài khoản:", g.account);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gift {
  padding: 32px $padding-vertical 50px;
  text-align: center;
  color: #295238;
  .heart {
    width: 28px;
    margin-bottom: 12px;
  }
  h2 {
    font-family: $font-script;
    font-size: 28px;
    margin-bottom: 12px;
  }
  .intro {
    color: #202121;
    line-height: 24px;
    margin-bottom: 24px;
  }
  .card {
    background: #ffffff;
    border: 1px solid #e8e2d5;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 16px;
    line-height: 26px;
    color: #202121;
    .side {
      color: #295238;
      font-size: 17px;
      margin-bottom: 6px;
    }
    .account {
      font-size: 20px;
      letter-spacing: 1px;
    }
    .qr {
      width: 160px;
      margin: 6px auto;
      display: block;
    }
    .copy {
      margin-top: 10px;
      padding: 0 18px;
      height: 36px;
      border-radius: 18px;
      color: #ffffff;
      background-color: #295238;
      cursor: pointer;
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>

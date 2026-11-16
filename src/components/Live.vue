<template>
  <div class="live">
    <p class="desc" v-if="hasVideo">Nhớ bật tiếng khi xem video nhé!</p>
    <img src="~@/assets/images/hands.png" class="hands" />
    <p class="header">"{{ inv.quote }}"</p>
    <p>
      <template v-for="(line, i) in inv.message">{{ line }}<br :key="i" /></template>
    </p>
    <div class="families">
      <div v-for="f in inv.families" :key="f.side">
        <div class="side">{{ f.side }}</div>
        <div>{{ f.parents }}</div>
      </div>
    </div>
    <p class="header">
      {{ inv.dateText }}<br />
      {{ inv.timeText }}
    </p>
    <p class="lunar" v-if="inv.lunarText">({{ inv.lunarText }})</p>
    <p>
      <strong>{{ venue.name }}</strong><br />
      {{ venue.address }}
    </p>
    <Button @click="addToCalendar">Thêm vào lịch</Button>
  </div>
</template>

<script>
import config from "../../wedding.config.js";

const TWO_HOURS = 2 * 60 * 60 * 1000;
const gcalTime = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");

export default {
  name: "Live",
  data() {
    return {
      inv: config.invitation,
      venue: config.venue,
      hasVideo: !!config.intro.video,
    };
  },
  methods: {
    addToCalendar() {
      const start = new Date(this.inv.datetime);
      const end = new Date(start.getTime() + TWO_HOURS);
      const q = new URLSearchParams({
        action: "TEMPLATE",
        text: `Đám cưới ${config.groom} & ${config.bride}`,
        dates: `${gcalTime(start)}/${gcalTime(end)}`,
        location: `${this.venue.name}, ${this.venue.address}`,
      });
      window.open(`https://calendar.google.com/calendar/render?${q}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.live {
  padding: 4px $padding-vertical 68px;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      color: #295238;
      font-size: 12px;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      color: #295238;
      font-size: 17px;
    }
    &.lunar {
      font-size: 13px;
      opacity: 0.7;
      margin-top: -10px;
    }
    strong {
      color: #295238;
    }
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
  .families {
    display: flex;
    justify-content: space-around;
    gap: 12px;
    margin: 8px 0 24px;
    line-height: 22px;
    font-size: 13px;
    .side {
      color: #295238;
      font-size: 15px;
    }
  }
}
</style>

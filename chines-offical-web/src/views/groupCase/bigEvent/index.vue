<template>
  <div id="bigEvent">
    <div class="item" v-for="item in data" :Key="item.id">
      <div class="itemLabel">
        <img :src="matchImg(item.year)" />
      </div>
      <div class="itemCon" v-for="itemChild in item.list" :Key="itemChild.id">
        <div class="item-con-left">
          <div class="en">{{itemChild.publishTime | EnMonth}}</div>
          <div class="line"></div>
          <div class="zn">{{itemChild.publishTime | detailMonth}} 月</div>
        </div>
        <div class="item-con-right">
          <div class="label">{{itemChild.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { articleList, bigEvent } from "@/api/indexPage.js";
import { EnMonth, detailMonth } from "@/util/index";
export default {
  name: "bigEvent",
  filters: { EnMonth, detailMonth },
  components: {},
  data() {
    return {
      data: []
    };
  },
  created() {
    this.fetchEvent();
  },
  methods: {
    fetchEvent() {
      bigEvent(this.$store.state.requestParams).then(res => {
        this.data = res.content.data;
      });
    },
    matchImg(year) {
      return require(`@/assets/images/${year || "2010"}_n.png`);
    }
  }
};
</script>
  
 
<style lang="scss" scoped>
#bigEvent {
  width: 940px;
  margin-left: 30px;
  .item {
  }
  .itemLabel {
    width: 940px;
    height: 60px;

    background: url(../../../assets/images/btbg_year.png) no-repeat center
      center;
    background-size: 100% 100%;
    img {
      width: 109px;
      height: 40px;
      margin-top: 10px;
      margin-left: 20px;
    }
  }
  .itemCon {
    width: 940px;
    height: 80px;
    margin-top: 40px;
    margin-bottom: 40px;
    .item-con-left {
      float: left;
      width: 72px;
      height: 72px;
      background: linear-gradient(
        82deg,
        rgba(251, 191, 3, 1) 0%,
        rgba(250, 206, 75, 1) 100%
      );
      border-radius: 6px;
      div {
        width: 100%;
        text-align: center;
      }
      .line {
        width: 48px;
        height: 1px;
        background: rgba(255, 255, 255, 1);
        opacity: 0.4;
        margin: 0 auto;
      }
      .en {
        height: 40px;
        font-size: 28px;
        font-family: Arial;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
      }
      .zn {
        height: 35px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        margin: 0;
      }
    }
    .item-con-right {
      margin-left: 20px;
      float: left;
      width: 848px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: auto;
      .label {
        height: 72px;
        font-size: 24px;
        font-family: cursive;
        color: rgba(55, 69, 103, 1);
        display: flex;
        align-items: center;
      }
      .con {
        font-size: 16px;
        margin-top: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 25px;
      }
    }
  }
}
</style>

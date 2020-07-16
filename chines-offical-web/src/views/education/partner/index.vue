<template>
  <div id="partner-news">
    <!-- 教育合作伙伴 -->
    <template v-for="(item,index) in partnerdata">
      <div class="grid-content" :Key="item+'educat'">
        <!-- 单数布局 -->
        <template>
          <div class="imgDiv fl_left" :class="{'fl_right':index%2 == 1}">
            <img class="imgBg" v-if="index%2 != 1" src="../../../assets/images/bg_dbx_left.png" />
            <img class="imgBg2" v-if="index%2 == 1" src="../../../assets/images/bg_dbx_right.png" />
            <img class="imgCon" :src="item.imgPath" />
          </div>
          <div class="conDiv fl_left">
            <div class="label">
              <a :href="item.linkUrl || 'javascript:void(0);'" target="_blank">{{item.title}}</a>
            </div>
            <div class="label-title">合作院校简介</div>
            <div class="conText">{{item.stract}}</div>
          </div>
        </template>
        <!-- 双数布局 -->
      </div>
    </template>
  </div>
</template>

<script>
import { articleList } from "@/api/indexPage.js";
export default {
  name: "partner-news",
  components: {},
  data() {
    return {
      partnerdata: [],
      pageNation: {
        pageNo: 1,
        pageSize: 10
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var params = {
        pageNo: this.pageNation.pageNo,
        pageSize: this.pageNation.pageSize,
        channelOne: "",
        channelTwo: ""
      };
      articleList(this.$store.state.requestParams).then(res => {
        this.partnerdata = res.content.list.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#partner-news {
  width: 1100px;
  .grid-content {
    width: 1100px;
    height: 280px;

    margin: 50px 0px 50px 0px;
    .fl_left {
      float: left;
    }
    .fl_right {
      float: right;
    }
    .imgDiv {
      width: 450px;
      height: 280px;
      position: relative;
      text-align: center;
      .imgBg {
        //  width: 324px;
        // height: 280px;
        position: absolute;
        left: -72px;
      }
      .imgBg2 {
        position: absolute;
        right: -72px;
      }
      .imgCon {
        height: 180px;
        border-radius: 100px;
        margin-top: 50px;
        margin-left: 28px;
        overflow: hidden;
      }
    }
    .conDiv {
      width: 650px;
      .label {
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
        line-height: 72px;
      }
      .label-title {
        width: 115px;
        height: 24px;
        background: linear-gradient(
          -90deg,
          rgba(251, 191, 3, 1) 0%,
          rgba(250, 219, 125, 1) 100%
        );
        text-align: center;
        line-height: 24px;
        border-radius: 4px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .conText {
        margin-top: 12px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 28px;
      }
    }
  }
}
</style>
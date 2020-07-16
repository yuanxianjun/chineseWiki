<template>
  <div id="product-news">
    <!-- 产品推介 -->
    <template v-for="item in data">
      <div class="grid-content">
        <div class="label">
          <img src="../../../assets/images/icon_box.png" />
          {{item.title}}
        </div>

        <div v-html="item.content" class="con"></div>
        <div style="margin-top:20px;">
          <to-detail :itemId="item.id"></to-detail>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { articleList } from "@/api/indexPage.js";
import toDetail from "@/components/toDetail";
export default {
  name: "product-news",
  components: {
    "to-detail": toDetail
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      articleList(this.$store.state.requestParams).then(res => {
        this.data = res.content.list.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#product-news {
  width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;
  .grid-content {
    width: 450px;
    height: 260px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 15px 30px 0px rgba(58, 94, 245, 0.05);
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 40px;
    background: url(../../../assets/images/box_dw.png) no-repeat center bottom;
    background-size: 100% auto;
    .label {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(55, 69, 103, 1);
      line-height: 72px;
      img {
        margin-right: 15px;
      }
    }
    .con {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(122, 139, 166, 1);
      line-height: 28px;

      height: 119px;

      overflow: hidden;
    }
  }
  .btnDetail {
    .el-button--text {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(111, 147, 249, 1);
      line-height: 28px;
    }
    img {
      width: 10px;
      height: 8px;
      vertical-align: middle;
    }
  }
}
</style>
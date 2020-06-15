<template>
  <div id="product-news">
    <template v-for="item in 5">
      <div class="item" :key="item +'newsid'">
        <div class="itemCon">
          <div class="item-con-left">
            <div class="en">Feb</div>

            <div class="zn">02</div>
          </div>
          <div class="item-con-right">
            <div class="label">两微一站一库”技术服务正式推广</div>
            <div class="con">2018年2月，公司，面向期刊社提供的“两微一站一库”技术服务正式推广，《科技资讯》《中外医疗》等期刊作为第一批推广案例正式上线。</div>
            <div class="btnDetail">
              <el-button type="text">
                查看详情
                <img src="../../../assets/images/icon_arr.png" alt />
              </el-button>
              <div class="notice">
                <img src="../../../assets/images/icon_yd.png" alt />66
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "product-news",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
  
 
<style lang="scss" scoped>
#product-news {
  margin-left: 30px;
  .item {
    // height:210px;

    border-bottom: 1px solid rgba(229, 234, 254, 1);
    margin-bottom: 40px;
  }

  .itemCon {
    width: 940px;
    min-height: 150px;
    .item-con-left {
      float: left;
      width: 50px;
      height: 52px;

      background: rgba(251, 191, 3, 0.1);
      border: 1px solid rgba(251, 191, 3, 1);

      div {
        width: 100%;
        text-align: center;
      }

      .en {
        width: 100%;
        background: rgba(251, 191, 3, 1);
        height: 25px;
        font-size: 16px;
        font-family: Arial;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 28px;
      }
      .zn {
        height: 35px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: rgba(55, 69, 103, 1);
        line-height: 28px;
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
        height: 40px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
      }
      .con {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 28px;
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
          vertical-align: middle;
        }
        .notice {
          float: right;
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(122, 139, 166, 1);
          line-height: 24px;
          img {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
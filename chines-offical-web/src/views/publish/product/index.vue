<template>
  <div id="product-news">
    <!-- 产品推介 -->
    <template v-for="item in 5">
      <div class="grid-content">
        <div class="label">
          <img src="../../../assets/images/icon_box.png"  />
          智慧出版平台
        </div>
        <div
          class="con"
        >适应信息社会发展需要的高度发达的出版形态，致力于利用现代互联网技术与创新手段为中文学术科技期刊出版提供服务，具备数字化、标准化、精准化、自动化、可成长的核心特征。</div>
        <div class="btnDetail">
          <el-button type="text">
            查看详情
            <img src="../../../assets/images/icon_arr.png"  />
          </el-button>
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
  width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .grid-content {
    width: 450px;
    height: 260px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 15px 30px 0px rgba(58, 94, 245, 0.05);
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 40px;
     background: url(../../../assets/images/box_dw.png)no-repeat center bottom;
      background-size: 100% auto; 
    .label {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(55, 69, 103, 1);
      line-height: 72px;
      img{
        margin-right: 15px;
      }
    }
    .con {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(122, 139, 166, 1);
      line-height: 28px;
     
     
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
      width:10px;
      height:8px;
      vertical-align: middle;
    }
  }
}
</style>
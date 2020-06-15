<template>
  <div id="group-quali">
    <!-- 公司资质 -->
    <div class="group-quali-con">
      <div class="label">
        公司资质
        <span class="grey">QUALIFICATION CERTIFICATE</span>
      </div>
      <div class="list">
        <template v-for="item in 5">
        <div class="item">
          <img src="../../../assets/images/zizhi.png" >
        </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "group-quali",
  components: {},
  data() {
    return {};
  },
  methods: {
    // 选择行业和集团
    choose(label) {}
  }
};
</script>
  
 
<style lang="scss" scoped>
#goup-quali{
  width:100%;
}
.group-quali-con {
  margin-left: 40px;
  .label {
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(55, 69, 103, 1);
    line-height: 72px;
    .grey {
      font-size: 22px;
      font-family: GenJyuuGothic;
      font-weight: 300;
      color: rgba(122, 139, 166, 1);
      line-height: 72px;
    }
  }
  .list {
    display: flex;
    flex-direction: row;
    width:960px;
     flex-wrap: wrap;
    
    .item {
      width: 300px;
      height: 226px;
      margin-right:20px;
      margin-top:20px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(225, 230, 240, 1);
      img{
        height:100%;
        width:auto;

      }
    }
  }
}
</style>
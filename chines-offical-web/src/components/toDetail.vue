<template>
  <div id="btnDetail">
    <!-- 查看详情 -->
    <div class="btnDetail" @click="handleToDetail">
          <el-button type="text">
            查看详情
            <img src="../assets/images/icon_arr.png"  />
          </el-button>
        </div>
  </div>
</template>

<script>
export default {
  name: "btn-detail",
  components: {},
  props:['pageLink'],
  data() {
    return {};
  },
  methods: {
      handleToDetail(){

      }
  }
};
</script>
<style lang="scss" scoped>

  .btnDetail {
      height:16px;
    .el-button--text {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(111, 147, 249, 1);
      padding:0;
    }
    img {
      width:10px;
      height:8px;
      vertical-align: middle;
    }
  }
</style>
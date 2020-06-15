<template>
  <div id="serve">
    <el-row class="row-div" :gutter="50">
      <el-col :span="12">
        <div class="grid-content label-con">
          <p>
            <img src="@/assets/images/icon_szfw.png" />
          </p>
          <p>数字服务</p>
          <p>为期刊社提供咨询、培训等服务，帮助期刊社进行媒介、内容、用户、产业链融合，实现融合发展。</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <img src="@/assets/images/img_szfw.png" />
        </div>
      </el-col>
    </el-row>

    <el-row  class="row-div"  :gutter="50">
      <el-col :span="12">
        <div class="grid-content">
          <img src="@/assets/images/img_cbfw.png" />
        </div>
      </el-col>
       <el-col :span="12">
        <div class="grid-content label-con">
          <p>
            <img src="@/assets/images/icon_cbfw.png" />
          </p>
          <p>出版服务</p>
          <p>以期刊社为服务对象，提供拓展出版、智慧出版、OA出版及融合出版等服务。</p>
        </div>
      </el-col>
    </el-row>

    <el-row  class="row-div"  :gutter="50">
      <el-col :span="12">
        <div class="grid-content label-con">
          <p>
            <img src="@/assets/images/icon_jsfw.png" />
          </p>
          <p>技术服务</p>
          <p>“两微一站一库”的技术支持服务，为期刊社提供官网、微网站、独立数据库和微信公众号的建设服务。</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <img src="@/assets/images/img_jsfw.png" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "serve",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#serve {
  width: 1100px;
  .row-div{
    margin-top:180px;
  }
  .label-con {
    p:nth-child(2) {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(55, 69, 103, 1);
      line-height: 90px;
    }
    p:nth-child(3) {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(122, 139, 166, 1);
      line-height: 28px;
    }
  }
}
</style>
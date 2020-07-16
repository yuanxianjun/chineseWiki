<template>
  <div id="group-quali">
    <!-- 公司资质 -->
    <div class="group-quali-con">
      <div class="label">
        公司资质
        <span class="grey">QUALIFICATION CERTIFICATE</span>
      </div>
      <div class="list">
        <template v-for="item in data">
          <div class="item" @click="showOldSize(item.imgPath)" :key="item.id">
            <img :src="item.imgPath" />
          </div>
        </template>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="80%">
      <img class="bigImg" :src="bigImgUrl" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { articleList } from "@/api/indexPage.js";
export default {
  name: "group-quali",
  components: {},
  data() {
    return { data: [], dialogVisible: false, bigImgUrl: "" };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      articleList(this.$store.state.requestParams).then(res => {
        this.data = res.content.list.list;
      });
    },
    showOldSize(imgUrl) {
      this.bigImgUrl = imgUrl;
      this.dialogVisible = true;
    }
  }
};
</script>
  
 
<style lang="scss" scoped>
.bigImg {
  max-width: 1100px;
  // height: ;
  display: block;
  margin: 0 auto;
}
#goup-quali {
  width: 100%;
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
    width: 960px;
    flex-wrap: wrap;
    .item {
      width: 300px;
      height: 226px;
      margin-right: 20px;
      margin-top: 20px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(225, 230, 240, 1);
      text-align: center;
      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <div id="serve">
    <template v-for="(item,index) in data">
      <el-row v-if="indexDeal(index)" class="row-div" :gutter="50" :Key="item.id">
        <el-col :span="12">
          <div class="grid-content label-con">
            <p>
              <!-- <img src="@/assets/images/icon_szfw.png" /> -->
            </p>
            <p>{{item.title}}</p>
            <p>{{item.stract}}</p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content">
            <img class="imgWh" :src="item.imgPath" />
          </div>
        </el-col>
      </el-row>

      <el-row v-if="!indexDeal(index)" class="row-div" :gutter="50" :key="item.id">
        <el-col :span="12">
          <div class="grid-content">
            <img :src="item.imgPath" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content label-con">
            <p>
              <!-- <img src="@/assets/images/icon_szfw.png" /> -->
            </p>
            <p>{{item.title}}</p>
            <p>{{item.stract}}</p>
          </div>
        </el-col>
      </el-row>
    </template>
  </div>
</template>
<script>
import { articleList } from "@/api/indexPage.js";
export default {
  name: "serve",
  components: {},
  filters: {},
  data() {
    return {
      data: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    indexDeal(index) {
      if (index % 2 == 0) {
        return true;
      } else {
        return false;
      }
    },
    fetchData() {
      articleList(this.$store.state.requestParams).then(res => {
        this.data = res.content.list.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#serve {
  width: 1100px;
  .row-div {
    margin-top: 180px;
  }
  .label-con {
    p:nth-child(2) {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(55, 69, 103, 1);
      padding-top: 30px;
      padding-bottom: 30px;
    }
    p:nth-child(3) {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(122, 139, 166, 1);
      line-height: 28px;
    }
  }
  .grid-content {
    img {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
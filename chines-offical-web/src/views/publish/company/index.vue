<template>
  <div id="company-news">
    <!-- 产品推介 -->
    <template v-for="item in data">
      <el-row class="row-bg" :key="item.id">
        <el-col :span="5">
          <div class="img-col">
            <img :src="item.imgPath" />
          </div>
        </el-col>
        <el-col :span="19">
          <div class="grid-content">
            <div class="title">
              <p>
                <a :href="item.linkUrl || 'javascript:void(0);'" target="_blank">{{item.title}}</a>
              </p>
              <p>{{item.titleEn}}</p>
              <p>
                <span>期刊简介</span>
              </p>
              <p class="con">{{item.stract}}</p>
              <p>
                <to-detail :itemId="item.id">{{item.id}}</to-detail>
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </template>
    <div class="pageDiv">
      <el-pagination
        @current-change="handleChange"
        :current-page="currentPage"
        background
        layout="prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { articleList } from "@/api/indexPage.js";
import toDetail from "@/components/toDetail";
export default {
  name: "company-news",
  components: {
    "to-detail": toDetail
  },
  data() {
    return {
      data: [],
      currentPage: 1,
      total: 0,
      pageInfo: JSON.parse(localStorage.getItem("pageInfo"))
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //分页查询
    handleChange(page) {
      this.currentPage = page;
      this.fetchData();
      window.scroll(0, 100);
    },
    fetchData() {
      var params = this.pageInfo.requestParams;
      params.pageNo = this.currentPage;
      params.pageSize = 5;
      articleList(params).then(res => {
        this.data = res.content.list.list;
        this.total = Number(res.content.list.total);
      });
    }
  }
};
</script>
   <style lang="scss">
.pageDiv {
  margin-top: 20px;
  .el-pagination {
    text-align: center;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: linear-gradient(
      -90deg,
      rgba(56, 96, 244, 1) 0%,
      rgba(95, 135, 248, 1) 100%
    ) !important;
    border-radius: 4px !important;
  }
}
</style>
<style lang="scss" scoped>
#company-news {
  width: 1100px;
  .img-col {
    width: 210px;
    height: 299px;
    border: 1px solid #eeee;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .row-bg {
    margin-top: 80px;
  }
  .grid-content {
    .title {
      p:first-child {
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
        height: 30px;
      }
      p:nth-child(2) {
        font-size: 18px;
        font-family: Arial;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
      }
      p:nth-child(3) {
        line-height: 40px;
        span {
          width: 83px;
          height: 24px;
          background: linear-gradient(
            -90deg,
            rgba(251, 191, 3, 1) 0%,
            rgba(250, 219, 125, 1) 100%
          );

          box-sizing: border-box;
          padding: 2px 8px;
          border-radius: 4px;
          text-align: center;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 28px;
        }
      }
      p:last-child {
        margin-top: 15px;
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
}
</style>
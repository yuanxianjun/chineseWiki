<template>
  <div id="product-news">
    <template v-for="item in data">
      <div class="item" :key="item.id">
        <div class="itemCon">
          <div class="item-con-left">
            <div class="en">{{item.publishTime | detailYear}}</div>
            <div class="zn">{{item.publishTime | detailMonth }}-{{item.publishTime | detailDate}}</div>
          </div>
          <div class="item-con-right">
            <div class="label">{{item.title}}</div>
            <div class="con">{{item.stract}}</div>
            <div class="btnCon">
              <to-detail :itemId="item.id" ref="detailChild"></to-detail>
              <div class="notice">
                <img src="../../../assets/images/icon_yd.png" />
                {{item.num}}
              </div>
            </div>
          </div>
        </div>
      </div>
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
import toDetail from "@/components/toDetail";
import { articleList } from "@/api/indexPage.js";
import { EnMonth, detailMonth, detailYear, detailDate } from "@/util/index";
export default {
  name: "product-news",
  filters: { EnMonth, detailMonth, detailYear, detailDate },
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
    this.fetchData(this.pageInfo.requestParams);
  },
  methods: {
    //分页查询
    handleChange(page) {
      this.currentPage = page;
      this.fetchData(this.pageInfo.requestParams);
      window.scroll(0, 100);
    },
    fetchData(params) {
      params["pageSize"] = 5;
      params["pageNo"] = this.currentPage;
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
.en {
  width: 100%;
  background: rgba(251, 191, 3, 1);
  height: 25px;
  font-size: 16px;
  font-family: Arial;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
}
.zn {
  height: 26px;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: rgba(55, 69, 103, 1);
  line-height: 26px;
}
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
    display: flex;
    flex-direction: row;

    .item-con-left {
      width: 50px;
      height: 52px;

      background: rgba(251, 191, 3, 0.1);
      border: 1px solid rgba(251, 191, 3, 1);
      div {
        width: 100%;
        text-align: center;
      }
    }
    .item-con-right {
      margin-left: 20px;
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .con {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 28px;
      }
      .btnCon {
        margin-top: 20px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .notice {
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
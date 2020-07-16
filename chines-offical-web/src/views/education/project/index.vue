<template>
  <div id="project-news">
    <!-- 项目介绍 -->
    <div class="left-con">
      <template v-for="item in data">
        <el-row class="row-bg" :key="item.id">
          <el-col :span="8">
            <div class="img-col">
              <img :src="item.imgPath" alt />
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content">
              <div class="title">
                <p @click="handleToDetail(item.id)">{{item.title}}</p>

                <p class="con">{{item.stract}}</p>
                <p>
                  <img src="@/assets/images/icon_time.png" />
                  {{item.publishTime | detailTime}}
                  <img
                    src="@/assets/images/icon_yd.png"
                  />
                  {{item.num}}
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
    <div class="right-con">
      <!-- 政策法规 -->
      <template v-for="item in rightCon">
        <div class="moduleDiv" :key="item.id">
          <div class="bar"></div>
          <div class="label">
            {{item.label}}
            <a class="more" @click="toMore(item)">更多</a>
          </div>
          <ul>
            <template v-for="itemChild in item.content">
              <li class="item" :key="itemChild.id">
                <div class="item-con" @click="handleToDetail(itemChild.id)">{{itemChild.title}}</div>

                <div class="time">
                  <p>{{itemChild.publishTime | detailMonth}}-{{itemChild.publishTime | detailDate}}</p>
                  <p>{{itemChild.publishTime | detailYear}}</p>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { articleList } from "@/api/indexPage.js";
import { detailTime, detailMonth, detailDate, detailYear } from "@/util";
export default {
  name: "project-news",
  filters: { detailTime, detailMonth, detailDate, detailYear },
  components: {},
  data() {
    return {
      data: [],
      currentPage: 1,
      total: 0,
      rightCon: [
        { id: "24", label: "政策法规", content: [] },
        { id: "23", label: "新闻动态", content: [] },
        { id: "22", label: "行业热点", content: [] }
      ]
    };
  },
  created() {
    this.fetchData();
    this.fetchThreeData();
  },
  methods: {
    // 查看更多
    toMore(item) {
      localStorage.setItem("eduJson", item.id);
      this.$router.push({ name: "eduThree" });
    },
    // 去详情页面
    handleToDetail(id) {
      localStorage.setItem("articleId", id);
      this.$router.push({ name: "newsDetail", params: { id } });
    },
    handleChange(page) {
      this.currentPage = page;
      this.fetchData();
    },
    fetchData() {
      var params = {
        pageNo: this.currentPage,
        channelOne: this.$store.state.requestParams.channelOne,
        channelTwo: this.$store.state.requestParams.channelTwo,
        pageSize: 6
      };
      articleList(params).then(res => {
        this.total = Number(res.content.list.total);
        this.data = res.content.list.list;
      });
    },
    // 右侧三级栏目数据获取
    fetchThreeData() {
      var params1 = {
        pageNo: 1,
        channelOne: this.$store.state.requestParams.channelOne,
        channelTwo: this.$store.state.requestParams.channelTwo,
        channelThree: 22,
        pageSize: 5
      };
      var params2 = {
        pageNo: 1,
        channelOne: this.$store.state.requestParams.channelOne,
        channelTwo: this.$store.state.requestParams.channelTwo,
        channelThree: 23,
        pageSize: 5
      };
      var params3 = {
        pageNo: 1,
        channelOne: this.$store.state.requestParams.channelOne,
        channelTwo: this.$store.state.requestParams.channelTwo,
        channelThree: 24,
        pageSize: 5
      };
      articleList(params1).then(res => {
        this.total = Number(res.content.list.total);
        this.rightCon[2].content = res.content.list.list;
      });
      articleList(params2).then(res => {
        this.total = Number(res.content.list.total);
        this.rightCon[1].content = res.content.list.list;
      });
      articleList(params3).then(res => {
        this.total = Number(res.content.list.total);
        this.rightCon[0].content = res.content.list.list;
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
#project-news {
  width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .pageDiv {
    height: 30px;
    text-align: center;
    margin-top: 60px;
    .el-pagination {
      margin: auto;
    }
    .el-pagination.is-background.el-pager .active {
      background: linear-gradient(
        -90deg,
        rgba(56, 96, 244, 1) 0%,
        rgba(95, 135, 248, 1) 100%
      ) !important;
      border-radius: 4px !important;
    }
  }
  .left-con {
    width: 760px;
    float: left;
  }
  .right-con {
    width: 300px;
    // background: skyblue;\
    .moduleDiv {
      width: 300px;
      height: 350px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(229, 234, 254, 1);
      padding: 20px;
      padding-top: 0px;
      margin-bottom: 30px;
      .bar {
        width: 70px;
        height: 4px;
        background: rgba(56, 96, 244, 1);
      }
      .label {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 600;
        color: rgba(55, 69, 103, 1);
        line-height: 24px;
        margin-top: 20px;
        .more {
          float: right;
          font-weight: normal;
          font-size: 16px;
        }
      }
      .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        max-height: 48px;

        .item-con {
          width: 199px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(122, 139, 166, 1);
          line-height: 24px;
          -webkit-line-clamp: 2; //设置行数，2行显示
          display: -webkit-box; //盒子模型
          -webkit-box-orient: vertical; //元素的排列方式，垂直居中
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .item-con:hover {
          cursor: pointer;
          color: rgba(55, 95, 243, 1);
          // background: rgba(239, 241, 252, 1);
          // border: 1px solid rgba(225, 229, 239, 1);
        }
        .time {
          width: 44px;
          height: 44px;
          border: 1px solid #ebeffe;
          text-align: center;
          p:first-child {
            height: 22px;
            background: #f3f6fe;
            font-size: 14px;
            font-family: Arial;
            font-weight: 400;
            color: rgba(122, 139, 166, 1);
            line-height: 22px;
          }
          p:last-child {
            height: 22px;
            background: #ffffff;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 300;
            color: rgba(122, 139, 166, 1);
            border-bottom: 1px solid #ebeffe;
          }
        }
      }
    }
  }
  .img-col {
    width: 240px;
    height: 180px;
    border: 1px solid #eee;
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
        font-size: 20px;
        min-height: 40px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
      }
      p:first-child:hover {
        cursor: pointer;
        color: #409eff;
      }

      p:last-child {
        margin-top: 15px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 24px;
        img {
          margin-right: 10px;
          margin-left: 10px;
        }
        img:first-child {
          width: 14px;
          height: 14px;
        }
        img:last-child {
          width: 14px;
          height: 8px;
        }
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
<template>
  <div id="project-news">
    <!-- 项目介绍 -->
    <div class="left-con">
      <template v-for="item in 5">
        <el-row class="row-bg">
          <el-col :span="8">
            <div class="img-col">
              <img src="../../../assets/images/book.png" alt />
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content">
              <div class="title">
                <p>贵州理工学院中外合作办学项目</p>
                <p
                  class="con"
                >中文集团与贵州理工学院正式签订联合共建海外分校合作协议，郭陆庄董事长与曾羽书作为双方代表进行了签约仪式，双方在建设海外分校，推动中外教育交流、文化资源交流等诸多方面达成了高度一致。</p>
                <p>
                  <img src="@/assets/images/icon_time.png" />2020-05-04
                  <img src="@/assets/images/icon_yd.png" />
                  66
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </template>
      <div class="pageDiv">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
    <div class="right-con">
      <!-- 政策法规 -->
      <template v-for="item in rightCon">
        <div class="moduleDiv">
          <div class="bar"></div>
          <div class="label">{{item.label}}</div>
          <ul>
            <template v-for="item in 4">
              <li class="item">
                <div class="item-con">教育部关于进一步规范中外合作办学秩序的通知</div>
                <div class="time">
                  <p>05-14</p>
                  <p>2020</p>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </template>

      <!-- 新闻动态 -->
    </div>
  </div>
</template>

<script>
import toDetail from "@/components/toDetail";
export default {
  name: "project-news",
  components: {
    "to-detail": toDetail
  },
  data() {
    return {
      rightCon: [
        { label: "政策法规" },
        { label: "新闻动态" },
        { label: "行业热点" }
      ]
    };
  },
  methods: {}
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
    margin-bottom: 100px;
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
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
        line-height: 24px;
        margin-top: 20px;
      }
      .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 16px;
        .item-con {
          width: 199px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(122, 139, 166, 1);
          line-height: 24px;
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
        height: 40px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
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
<template>
  <div id="indexPage">
    <div class="header-tab">
      <el-carousel :interval="5000" arrow="hover" height="600px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img class="bannerImg" :src="item.bannerUrl+ item.bannerPath" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="content index-con">
      <div class="index-con-title">
        <span class="titlelabel">新闻中心</span>
        <span class="titleImg"></span>
      </div>
      <!-- 新华词典 -->
      <div class="xinghua-con">
        <p class="xh-label" @click="handleToDetail(newsData.id)">{{newsData.title}}</p>
        <p class="xh-p">{{newsData.stract}}</p>
      </div>

      <!-- 切换按钮 -->
      <div class="btnTwo">
        <div :class="classNew" @click="choose('news')">
          <img v-if="!showNews" src="../../assets/images/icon_jtxw.png" />
          <img v-if="showNews" src="../../assets/images/icon_jtxw_on.png" />
          集团新闻
        </div>

        <div :class="classFocus" @click="choose('focus')">
          <img v-if="showNews" src="../../assets/images/icon_hygz.png" />
          <img v-if="!showNews" src="../../assets/images/icon_hygz_on.png" />
          行业关注
        </div>
      </div>
      <!-- 新闻  行业 内容块儿 -->
      <div class="conShow">
        <div class="conShow-left">
          <el-carousel arrow="always" :interval="5000" ref="carouselBelow" @change="setActiveItem">
            <el-carousel-item v-for="item in NewsList" :key="item.id">
              <!-- <h3>{{ item.imgPath }}</h3> -->
              <img class="conImg" :src="item.imgPath" alt />
              <p class="conTitle">{{item.title}}</p>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="conShow-list">
          <ul>
            <template v-for="(item,index) in NewsList">
              <li
                class="listLi"
                :key="item.id"
                :class="initalIndex == index ? 'itemIsActive' :''"
                @mouseenter="hanldeListLi(index)"
                @click="handleToDetail(item.id)"
              >
                <p class="ll-label">{{item.title | filterText}}</p>

                <p class="ll-stat">
                  <img src="../../assets/images/icon_time.png" />
                  {{item.publishTime | detailTime }}
                  <img
                    src="../../assets/images/icon_yd.png"
                  />
                  {{item.num}}
                </p>
              </li>
            </template>
          </ul>
        </div>
        <div class="btnMore">
          <el-button type="info" plain size="mini" @click="handleToMore">查看更多</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { bannerList, findNews, findNewsList } from "@/api/indexPage";
import { detailTime } from "@/util/index";
import { mapActions } from "vuex";
import toDetail from "@/components/toDetail";
export default {
  name: "indexPage",
  components: { "to-detail": toDetail },
  filters: {
    detailTime,
    filterText: text => {
      if (text.length < 45) {
        return text;
      } else {
        return text.substr(0, 39) + "......";
      }
    }
  },
  data() {
    return {
      initalIndex: 3, //当前展示的index图
      classNew: "btn btnActive btnNews",
      classFocus: "btn btnFocus",
      showNews: true,
      bannerList: [],
      newsData: {},
      NewsList: []
    };
  },
  created() {
    this.getBanner();
    this.findNewsData();
    this.findNews2Data(11);
  },
  methods: {
    ...mapActions([
      "changeMenu" // 将 `this.matchActive()` 映射为 `this.$store.dispatch('changeMenu')`
    ]),
    //点击列表让图片跟着变化
    hanldeListLi(index) {
      this.initalIndex = index;
      this.$refs.carouselBelow.setActiveItem(index);
    },
    setActiveItem(index) {
      this.initalIndex = index;
    },
    handleToDetail(itemId) {
      localStorage.setItem("articleId", itemId);
      this.$router.push({ name: "newsDetail", params: { id: itemId } });
    },
    // 查看更多
    handleToMore() {
      let currentObj = {};
      if (this.showNews) {
        currentObj = {
          child: {
            childName: "集团新闻",
            channelPath: "/groupNews",
            channelName: "groupNews",
            id: 11
          },
          parent: {
            label: "新闻中心",
            channelPath: "/news",
            channelName: "news",
            id: "4"
          }
        };
      } else {
        currentObj = {
          child: {
            childName: "行业动态",
            channelPath: "/trends",
            channelName: "trends",
            id: 12
          },
          parent: {
            label: "新闻中心",
            channelPath: "/news",
            channelName: "news",
            id: "4"
          }
        };
      }
      this.$store.dispatch("changeMenu", currentObj);
    },
    // 选择行业和集团
    choose(label) {
      // 集团新闻
      if (label == "news") {
        this.showNews = true;
        this.classNew = "btn btnActive btnNews";
        this.classFocus = "btn  btnFocus";
        this.findNews2Data(11);
      } else {
        //行业关注
        this.showNews = false;
        this.classNew = "btn  btnNews";
        this.classFocus = "btn btnActive btnFocus";
        this.findNews2Data(12);
      }
    },
    //请求轮播图
    getBanner() {
      bannerList().then(res => {
        this.bannerList = res.content.list;
      });
    },
    // 新闻中心
    findNewsData() {
      findNews().then(res => {
        this.newsData = res.content.news;
      });
    },
    // 集团新闻 行业关注
    findNews2Data(channelTwo) {
      let params = {
        pageNo: 1,
        pageSize: 4,
        channelTwo
      };
      findNewsList(params).then(res => {
        this.NewsList = res.content.list.list;
      });
    }
  }
};
</script>
  
 
<style >
.header-tab .el-carousel__arrow {
  width: 60px;
  height: 60px;
  font-size: 20px;
}
.conShow .el-carousel__container {
  position: relative;
  height: 360px;
}
.conShow .el-carousel__indicators--horizontal {
  display: none;
}
.conShow-left .el-carousel__arrow {
  font-size: 18px;
}
</style>
<style lang="scss"  scoped>
.itemIsActive {
  background: rgba(239, 241, 252, 1);
  border: 1px solid rgba(225, 229, 239, 1);
}
.btnMore {
  width: 80px;
  height: 24px;
  border-radius: 6px;
  float: right;
  text-align: right;
  height: 30px;
  margin-top: 25px;
  .el-button--info.is-plain {
    width: 80px;
    height: 24px;
    background: rgba(239, 241, 251, 1);
    border-radius: 6px;
    border: none;
  }
  .el-button--info.is-plain:focus,
  .el-button--info.is-plain:hover {
    background: #3860f4;
    color: #fff;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 330px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#indexPage {
  width: 100%;
  overflow-y: hidden;

  .index-con {
    // height: 810px;
    .index-con-title {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: 120px;
      text-align: center;
      .titlelabel {
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
      }
      .titleImg {
        width: 46px;
        height: 19px;
        margin-left: 10px;
        background: url(../../assets/images/news.png) no-repeat center center;
        background-size: 100% 100%;
      }
    }
    // 新华
    .xinghua-con {
      width: 1100px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(225, 230, 240, 1);
      padding: 20px 50px;
      margin-bottom: 30px;
    }
    .xinghua-con:hover {
      p:first-child {
        cursor: pointer;
        color: #3860f4;
      }
    }
    .xh-label {
      font-size: 28px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(55, 69, 103, 1);
      text-align: center;
    }
    .xh-p {
      text-align: center;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(122, 139, 166, 1);
      line-height: 24px;
      margin-top: 10px;
    }
    // 集团新闻和行业帮助
    .btnTwo {
      width: 100%;
      height: 56px;
      display: flex;
      flex-direction: row;
      margin-top: 60px;
      margin-bottom: 50px;
      .btnNews {
        margin-left: 310px;
      }
      .btnFocus {
        margin-left: 80px;
      }
      .btn {
        width: 200px;
        height: 56px;
        background: rgba(229, 235, 254, 1);
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 56px;
        text-align: center;
        color: rgba(55, 69, 103, 1);
        letter-spacing: 6px;
        img {
          width: 16px;
          height: 20px;
          vertical-align: middle;
          margin-right: 15px;
        }
      }
      .btn:hover {
        cursor: pointer;
      }
      .btnActive {
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(
          -90deg,
          rgba(29, 65, 194, 1) 0%,
          rgba(56, 98, 251, 1) 100%
        );
      }
    }
    // 内容展示块儿
    .conShow {
      width: 100%;
      .conImg {
        width: 100%;
        height: 100%;
      }
      .conTitle {
        width: 100%;
        height: 40px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        line-height: 40px;
        background: rgba(23, 25, 77, 0.6);
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        word-wrap: none;
        overflow: hidden;
      }
      .conShow-left {
        width: 620px;
        height: 360px;
        float: left;
      }

      .conShow-list {
        width: 460px;
        height: 360px;
        float: right;
        .listLi:hover {
          cursor: pointer;
          background: rgba(239, 241, 252, 1);
          border: 1px solid rgba(225, 229, 239, 1);
          .ll-label {
            color: rgba(56, 96, 244, 1);
          }
        }
        .listLi {
          width: 460px;
          height: 75px;
          border: 1px solid rgba(225, 230, 240, 1);
          padding: 17px 20px;
          margin-bottom: 20px;
          position: relative;
          .ll-label {
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(55, 69, 103, 1);
            line-height: 24px;
          }
        }
        .ll-stat {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(122, 139, 166, 1);
          text-align: right;

          position: absolute;
          right: 13px;
          bottom: 10px;
          img {
            vertical-align: middle;
          }
        }
      }
    }
  }
}
.header-tab {
  .bannerImg {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  width: 100%;
  height: 600px;
  background: url(../../assets/images/banner02.png) no-repeat center center;
  background-size: 100% 100%;
  .el-carousel {
    height: 100%;
  }
}
</style>

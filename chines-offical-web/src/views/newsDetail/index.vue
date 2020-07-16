<template>
  <div class="content newsDetail-con">
    <div class="nav">
      您当前所在的位置：
      <router-link class="linkClass" to="/">
        首页
        <span class="line">|</span>
      </router-link>

      <router-link
        v-show="routerData.parent.channelPath!=='/'"
        class="linkClass"
        :to="routerData.parent.channelPath"
      >
        {{routerData.parent.channelName}}
        <span class="line">|</span>
      </router-link>

      <router-link
        v-if="routerData.child"
        class="linkClass"
        :to="routerData.parent.channelPath+routerData.child.channelPath"
      >
        {{routerData.child && routerData.child.channelName}}
        <span class="line">|</span>
      </router-link>
      <span class="linkClass">新闻详情</span>
    </div>
    <div class="details-label">{{textCon.title}}</div>
    <div class="time">
      <p>
        <img src="@/assets/images/icon_time.png" />
        {{textCon.publishTime | detailTime}}
        <img src="@/assets/images/icon_yd.png" />
        {{textCon.num}}
      </p>
    </div>
    <div class="details_content">
      <div v-html="textCon.content"></div>
      <div class="relavantInfo">
        <!-- 政策法规 -->
        <div class="moduleDiv">
          <div class="bar"></div>
          <div class="label">相关资讯</div>
          <ul>
            <template v-for="item in data">
              <li class="item-con" :key="item.id" @click="detailData(item.id)">
                <span class="ri-time">[{{item.publishTime | detailTime}}]</span>
                {{item.title}}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { detailTime } from "@/util";
import { articleList, detailText } from "@/api/indexPage.js";
export default {
  name: "newsDetail",
  filters: { detailTime },
  data() {
    return {
      routerData: {
        child: {},
        parent: {}
      },
      textCon: {},
      data: [],
      pageInfo: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    // console.log(from, "from");
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next();
  },
  created() {
    this.pageInfo = JSON.parse(localStorage.getItem("pageInfo"));
    let articleId = JSON.parse(localStorage.getItem("articleId"));

    console.log(this.pageInfo, "pageInfo");
    this.routerData.child = this.pageInfo.currentMenu.child;
    this.routerData.parent = this.pageInfo.currentMenu.parent;
    this.detailData(articleId);
    this.fetchData();
  },

  methods: {
    detailData(id) {
      var params = {
        id
      };
      detailText(params).then(res => {
        this.textCon = res.content.article;
      });
    },
    fetchData() {
      var params = {
        pageNo: 1,
        pageSize: 4,
        title: this.$route.params.title,
        channelOne: this.pageInfo.requestParams.channelOne,
        channelTwo: this.pageInfo.requestParams.channelTwo
      };
      articleList(params).then(res => {
        this.data = res.content.list.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.line {
  padding-left: 10px;
}
.newsDetail-con {
  width: 1100px;
  height: auto;
  padding: 50px 0px 0px 0px;
  .nav {
    width: 1100px;
    height: 50px;
    line-height: 50px;
    background: #e5eafe;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(55, 69, 103, 1);
    line-height: 50px;
    padding-left: 20px;
    .linkClass {
      margin-left: 10px;
      margin-right: 10px;
    }
    .linkClass:hover {
      color: #409eff;
    }
  }
  .details-label {
    width: 1100px;

    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(55, 69, 103, 1);
    line-height: 42px;
    margin-top: 30px;
    text-align: center;
  }
  .details_content {
    p {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(55, 69, 103, 1);
      line-height: 28px;
      text-indent: 28px;
    }
  }
  .relavantInfo {
    margin-top: 80px;
    .moduleDiv {
      width: 1100px;
      height: 228px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(229, 234, 254, 1);
      padding: 20px;
      padding-top: 0px;

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
      .item-con {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 40px;
      }
      .item-con:hover {
        cursor: pointer;
        color: #409eff;
      }
    }
  }

  .time {
    height: 40px;
    margin-top: 15px;
    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(122, 139, 166, 1);
    line-height: 40px;
    text-align: right;
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
</style>

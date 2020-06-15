<template>
  <!-- 选项卡下面的静态背景图  v-if="$route."-->
  <div id="topbg" v-if="show">
    <img class="bgImg" :src="bgUrl" />
    <img class="dynamic" v-if="textUrl" :src="textUrl" />
  </div>
</template>
<script>
// 集团概况
import groupImg from "@/assets/images/img_top_jtgk.png"; //bg
import groupTitle1 from "@/assets/images/title_gsjj.png"; //text 简介
import groupTitle2 from "@/assets/images/title_dsj.png"; //text 大事记
import groupTitle3 from "@/assets/images/title_gszz.png"; //text  公司资质
import groupTitle4 from "@/assets/images/title_qywh.png"; //text  企业文化

// 新闻中心
import newsImg from "@/assets/images/img_top_xwzx.png"; //bg
import groupNews from "@/assets/images/title_jtxw.png"; //text 集团新闻
import tradeNews from "@/assets/images/title_hygz.png"; //text 行业关注

// 出版服务
import publishImg from "@/assets/images/img_top_cbfw.png"; //bg
import publish1 from "@/assets/images/title_cptj.png"; //text 产品推介
import publish2 from "@/assets/images/title_zyfw.png"; //text 主要服务
import publish3 from "@/assets/images/title_fwdw.png"; //text 服务单位

// 教育业务
import educationImg from "@/assets/images/img_top_jyyw.png"; //bg
import education1 from "@/assets/images/title_hzhb.png"; //text 合作伙伴
import education2 from "@/assets/images/title_ywgk.png"; //text 业务概况
import education3 from "@/assets/images/title_xmjs.png"; //text 项目介绍

// 问题反馈
import questionImg from "@/assets/images/img_top_wtfk.png"; //bg
// 联系我们
import aboutUsImg from "@/assets/images/img_top_lxwm.png"; //bg

export default {
  name: "backop",
  props: [],
  data() {
    return {
      bgUrl: groupImg,
      textUrl: groupTitle1,
      show: true
    };
  },
  created() {
    // this.matherImg(this.$route.params) 如果该组件是刚加载的是监听不到没有办法在watch 里面监听route 事件的

    if (this.$route.path == "/") {
      this.show = false;
    }

    this.matherImg(this.$route.matched[0].name);
  },

  watch: {
    $route(to, from) {
      if (this.$route.path == "/") {
        this.show = false;
      } else {
        this.show = true;
      }

      this.matherImg(to.matched[0].path);

      // 设置文字
      if (to.name == "bigEvent") {
        this.textUrl = groupTitle2;
      } else if (to.name == "introduce") {
        this.textUrl = groupTitle1;
      } else if (to.name == "culture") {
        this.textUrl = groupTitle4;
      } else if (to.name == "quali") {
        this.textUrl = groupTitle3;
      }

      // 新闻中心
      else if (to.name == "groupNews") {
        this.textUrl = groupNews;
      } else if (to.name == "trends") {
        this.textUrl = tradeNews;
      }

      // 出版服务
      else if (to.name == "product") {
        this.textUrl = publish1;
      } else if (to.name == "serve") {
        this.textUrl = publish2;
      } else if (to.name == "company") {
        this.textUrl = publish3;
      }
      //教育业务
      else if (to.name == "partner") {
        this.textUrl = education1;
      } else if (to.name == "profile") {
        this.textUrl = education2;
      } else if (to.name == "project") {
        this.textUrl = education3;
      }
      // 问题反馈
      // 联系我们
    }
  },
  methods: {
    // 根据路由携带的参数来，控制图片的显示
    matherImg(parentUrl) {
      // 设置背景
      if (parentUrl == "/group") {
        this.bgUrl = groupImg;
        this.textUrl = groupTitle1;
      } else if (parentUrl == "/news") {
        this.bgUrl = newsImg;
        this.textUrl = groupNews;
      } else if (parentUrl == "/publish") {
        this.bgUrl = publishImg;
        this.textUrl = publish1;
      } else if (parentUrl == "/education") {
        this.bgUrl = educationImg;
        this.textUrl = education1;
      } else if (parentUrl == "/question") {
        this.bgUrl = questionImg;
        this.textUrl = "";
      } else if (parentUrl == "/aboutUs") {
        this.bgUrl = aboutUsImg;
        this.textUrl = "";
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to, from);
    // react to route changes...
    // don't forget to call next()
    next();
  }
};
</script>
<style lang="scss" scoped>
#topbg {
  width: 1920px;
  height: 200px;
  overflow: hidden;
  position: relative;
  .bgImg {
    width: 100%;
    height: 100%;
  }
  .dynamic {
    width: auto;
    height: 68px;
    position: absolute;
    right: 410px;
    bottom: 25px;
  }
}
</style>

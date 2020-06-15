<template>
  <div class="content aboutUs-con">
    <div class="nav">
      您当前所在的位置：
      <router-link class="linkClass" to="/">首页</router-link>|
      <router-link class="linkClass" to="/news">新闻中心</router-link>|
      <router-link class="linkClass" to="/news/groupNews">集团新闻</router-link>|
      <span class="linkClass">新闻详情</span>
    </div>
    <div class="details-label">【18刊博会】开辟科技转型道路 中文集团助力医药卫生期刊分会参展期刊博览会</div>
    <div class="time">
      <p>
        <img src="@/assets/images/icon_time.png" />2020-05-04
        <img src="@/assets/images/icon_yd.png" />
        66
      </p>
    </div>
    <div class="details_content">
      <p>2018年9月14日，中国（武汉）期刊交易博览会在武汉国际博览中心顺利开幕。中文集团作为医药卫生期刊分会的合作伙伴、技术支持，在刊博会期间围绕报刊业务管理人员创新能力建设培训班、医药卫生展馆布展、科技转型体系推广等模块从前期策划、宣传协调、组织推进等方面进行了全方位支持，不仅使各模块参展任务圆满成功，更展示了以中文集团“数字化与融合出版解决方案”为核心的期刊科技转型可行道路，响应了党和政府的督促与号召，为行业开拓视野、为传统期刊的现代化科技转型引领新风。</p>
      <p>
        全面布展 新方式展现期刊新面貌
        早在7月末，中文集团作为中国期刊协会医药卫生期刊分会的友好伙伴、技术支持，已经提早投入到2018中国期刊交易博览会中国医药卫生展馆的布展任务当中。自2016年国务院印发《十三五国家战略性新兴产业发展规划》始，科技转型、数字出版就成为了期刊行业的发展目标。中文集团始终响应号召，携手医药卫生期刊，推进“中国医药卫生期刊数字化
      </p>
      <p>依托这次刊博会的机会，中文集团希望面向更多传统期刊展示、介绍医药卫生期刊的转型进程以及中文集团提供的“数字化与融合出版解决方案”。因此，中文集团先后设计多版展示方案，不断协调推进，精益求精，最终确立布展方案：展馆搭建使用全木质结构，配合灯光的使用，尽可能使展馆更加明亮、整洁，共展出医药卫生期刊杂志80余种共270多本，为医药卫生传统期刊的展示提供优质平台，中文集团还为展馆提供了大型展示灯箱7台，大型电视播放屏幕1台，大型LED显示屏1台，触摸显示屏2台，响应本次刊博会的科技创新主题，以全新方式展现传统医药卫生期刊的繁荣和积极转型的全新面貌。</p>
      <div class="relavantInfo">
        <!-- 政策法规 -->
        <div class="moduleDiv">
          <div class="bar"></div>
          <div class="label">相关资讯</div>
          <ul>
            <template v-for="item in 4">
              <li class="item-con" :key="item+'relavantInfo'">
                <span class="ri-time">[2020-05-14]</span>
                中文集团领导应邀参加安徽省期刊编辑继续教育面授班并授课
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutUs",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.aboutUs-con {
  width: 1100px;
  height: auto;
  padding: 50px 0px;
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
      .item-con {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 40px;
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

<template>
  <div id="group-state">
    <!-- 公司简介 -->
    <div class="group-state-con">
      <div class="pList">
        <p>中文集团数字出版传媒股份有限公司成立于2012年，注册资本5560万元人民币，总部位于北京市海淀区，是国家高新技术企业。公司拥有国家新闻出版广电总局颁发的网络出版服务许可证、出版物经营许可证，现以数字技术研发、网络出版和知识服务为业务核心，致力打造成为一个集学术在线出版服务、学术数据资源供应、数据整合加工和多元化数据服务为一体的综合性互联网中文知识服务机构。目前已获得9项拥有自主知识产权的软件著作证书。</p>
        <p>公司致力于区块链、云计算、大数据等在知识服务中的运用，业务范围涉及融合出版和数字化技术研发、数据库建设、网站建设、产品设计、期刊出版业务咨询与商业模式设计等，为出版机构、企事业单位等机构客户和科研、学术人员等个体客户提供全面的技术解决方案和全方位的知识创作支持服务。</p>
        <p>公司注重与其他机构的合作，现已与中国新闻出版研究院、中信所国家科技信息资源综合利用与公共服务中心等科研机构在资源整合和项目建设等方面建立了合作关系；与武汉理工数字传播工程有限公司、北京万方软件股份有限公司等为技术合作关系，共同进行融合出版的技术研发工作。公司还是北京市媒体融合发展重点实验室的依托单位，与北京市新闻出版研究中心等联合共建实验室，充分发挥产、学、研、用相结合的独特优势，专注于云计算、大数据、融合出版、数字转型等技术与模式的研究。 公司现主要面向国内出版机构提供技术服务、出版服务和咨询、培训等商业服务，已形成包括智慧出版平台、百家在线、中文百科、智库报告、专业数据专库、增值拓展出版系统等产品。以“让知识体现价值，让知识服务社会”为发展使命，公司建立了专业的知识服务平台——中文知识网（www.cnknowledge.com）。平台旨在为我国期刊的数字化转型和融合出版服务，运用期刊社自有资源，采用技术共享、资源互补、平台共建的共享经济模式，提高我国期刊行业的整体发展能力和市场竞争力，实现知识价值的最大化。 公司还投资成立了多家全资子公司和控股公司，业务范围涵盖传统出版、网络出版、数据咨询、教育、技术研发、资本投资等。</p>
      </div>
      <div class="btnMore" @click="showMore">查看全部</div>
      <!-- 发展历程 -->
      <div class="history">
        <div class="label">
          发展历程
          <span class="grey">DEVELOPMENT HISTORY</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "group-state",
  components: {},
  data() {
    return {
      historyList:[
        {
          year:""
        }
      ]
    };
  },
  methods: {
    // 选择行业和集团
    choose(label) {},
    showMore() {
      console.log("查看全部");
    }
  }
};
</script>
  
 
<style lang="scss" scoped>
.group-state-con {
  margin-left: 40px;
  width: 940px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: auto;
  p {
    width: 100%;
    text-indent: 50px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(55, 69, 103, 1);
    line-height: 28px;
    margin-bottom: 40px;
  }
  .btnMore {
    width: 940px;
    height: 32px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(225, 230, 240, 1);
    text-align: center;
    line-height: 32px;
  }
  .btnMore:hover {
    cursor: pointer;
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  .history {
    text-align: center;
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
  }
}
</style>
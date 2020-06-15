<template>
  <div id="company-news">
    <!-- 产品推介 -->
    <template v-for="item in 5">

    <el-row class="row-bg">
      <el-col :span="5">
        <div class="img-col">
          <img src="../../../assets/images/book.png" alt />
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content">
          <div class="title">
            <p>系统医学</p>
            <p>Systems Medicine</p>
            <p>
              <span>期刊简介</span>
            </p>
            <p
              class="con"
            >《系统医学》是国家卫生健康委员会主管，由卫计委医药卫生科技发展研究中心、全国卫生产业企业管理协会、《中国卫生产业》杂志社有限公司主办的专业医学术期刊。国际标准连续出版物号：ISSN 2096-1782；国内统一连续出版物号-CN 10-1369/R，邮发代号80-911。 以报道中外系统医学发展动态，推广我国系统医学研究成果，交流全球系统医学研究经验，推进我国系统医学学科研究，服务广大医药卫生工作人员，助力我国医疗卫生事业发展为办刊宗旨。 主要栏目：论著、基础医学系统研究、临床医学系统研究、中西医结合系统研究、内科研究、外科研究、儿科研究、皮肤病研究、影像医学研究、妇产科研究、肿瘤学研究、口腔医学研究、中医学研究、药学研究、临床与护理、综述。</p>
          <p>

            <to-detail></to-detail>
          </p>
          </div>

        </div>
      </el-col>
    </el-row>

    </template>
  </div>
</template>

<script>
import toDetail from "@/components/toDetail"
export default {
  name: "company-news",
  components: {
    'to-detail':toDetail
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
  
<style lang="scss" scoped>
#company-news {
  width: 1100px;
  .img-col {
    width: 210px;
    height: 299px;
  }
  .row-bg{
    margin-top:80px;
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
          
          box-sizing:border-box;
          padding:2px 8px;
          border-radius: 4px;
          text-align: center;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 28px;
        }
      }
      p:last-child{
        margin-top:15px;
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
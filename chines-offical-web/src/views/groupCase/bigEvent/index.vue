<template>
  <div id="bigEvent">
    <div class="item">
      <div class="itemLabel">
        <img src="../../../assets/images/2018_n.png" />
      </div>
      <div class="itemCon">
        <div class="item-con-left">
          <div class="en">Feb</div>
          <div class="line"></div>
          <div class="zn">02月</div>
        </div>
        <div class="item-con-right">
          <div class="label">两微一站一库”技术服务正式推广</div>
          <div class="con">2018年2月，公司，面向期刊社提供的“两微一站一库”技术服务正式推广，《科技资讯》《中外医疗》等期刊作为第一批推广案例正式上线。</div>
        </div>
      </div>
    </div>




     <div class="item">
      <div class="itemLabel">
        <img src="../../../assets/images/2018_n.png" />
      </div>
      <div class="itemCon">
        <div class="item-con-left">
          <div class="en">Feb</div>
          <div class="line"></div>
          <div class="zn">02月</div>
        </div>
        <div class="item-con-right">
          <div class="label">两微一站一库”技术服务正式推广</div>
          <div class="con">2018年2月，公司，面向期刊社提供的“两微一站一库”技术服务正式推广，《科技资讯》《中外医疗》等期刊作为第一批推广案例正式上线。</div>
        </div>
      </div>
    </div>


      
      
<div class="item">
      <div class="itemLabel">
        <img src="../../../assets/images/2018_n.png" />
      </div>
      <div class="itemCon">
        <div class="item-con-left">
          <div class="en">Feb</div>
          <div class="line"></div>
          <div class="zn">02月</div>
        </div>
        <div class="item-con-right">
          <div class="label">两微一站一库”技术服务正式推广</div>
          <div class="con">2018年2月，公司，面向期刊社提供的“两微一站一库”技术服务正式推广，《科技资讯》《中外医疗》等期刊作为第一批推广案例正式上线。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bigEvent",
  components: {},
  data() {
    return {};
  },
  methods: {
    // 选择行业和集团
    choose(label) {}
  }
};
</script>
  
 
<style lang="scss" scoped>
#bigEvent {
  width: 940px;
  margin-left: 30px;
  .item{
    
  }
  .itemLabel {
    width: 940px;
    height: 60px;

    background: url(../../../assets/images/btbg_year.png) no-repeat center
      center;
    background-size: 100% 100%;
    img {
      width: 109px;
      height: 40px;
      margin-top: 10px;
      margin-left: 20px;
    }
  }
  .itemCon {
    width:940px;
    height:80px;
    margin-top: 40px;
    margin-bottom:40px;
    .item-con-left {
      float: left;
      width: 72px;
      height: 72px;
      background: linear-gradient(
        82deg,
        rgba(251, 191, 3, 1) 0%,
        rgba(250, 206, 75, 1) 100%
      );
      border-radius: 6px;
      div {
        width: 100%;
        text-align: center;
      }
      .line {
        width: 48px;
        height: 1px;
        background: rgba(255, 255, 255, 1);
        opacity: 0.4;
        margin: 0 auto;
      }
      .en {
        height: 40px;
        font-size: 28px;
        font-family: Arial;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
      }
      .zn {
        height: 35px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        margin: 0;
      }
    }
    .item-con-right {
      margin-left: 20px;
      float: left;
      width:848px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: auto;
      .label {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
      }
      .con {
        font-size: 16px;
        margin-top:10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 25px;
      }
    }
  }
}
</style>

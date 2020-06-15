<template>
  <div id="partner-news">
    <!-- 教育合作伙伴 -->
    <template v-for="(item,index) in 3">
      <div class="grid-content" :Key="item+'educat'">
        <!-- 单数布局 -->
        <template>
          <div class="imgDiv fl_left" :class="{'fl_right':index%2 == 1}">
            <img class="imgBg" v-show="index%2 != 1" src="@/assets/images/bg_dbx_left.png">
            <img class="imgBg2"  v-show="index%2 == 1" src="@/assets/images/bg_dbx_right.png">
            <img class="imgCon" src="@/assets/images/3.png" />
          </div>
          <div class="conDiv fl_left">
            <div class="label">贵州理工学院</div>
            <div class="label-title">合作院校简介</div>
            <div
              class="conText"
            >贵州理工学院是经中华人民共和国教育部批准的全日制本科院校，是贵州省省属理工类本科院校，具有颁发国家承认各级学历学位资格的全日制普通高等学校。</div>
          </div>
        </template>
        <!-- 双数布局 -->
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "partner-news",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#partner-news {
  width: 1100px;
  .grid-content {
    width: 1100px;
    height: 280px;
  
    margin:50px 0px 50px 0px;
    .fl_left {
      float: left;
    }
    .fl_right {
      float: right;
    }
    .imgDiv {
      width: 450px;
      height: 280px;
      position: relative;
        .imgBg{
            //  width: 324px;
            // height: 280px;
            position: absolute;
            left:-72px;
        }
        .imgBg2{
          position: absolute;
            right:-72px;
        }
      .imgCon {
        width: 400px;
        height: 180px;
        border-radius: 100px;   
        margin-top:50px;
        margin-left:28px;
      }
    }
    .conDiv {
      width: 650px; 
      .label {
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
        line-height: 72px;
      }
      .label-title {
        width: 115px;
        height: 24px;
        background: linear-gradient(
          -90deg,
          rgba(251, 191, 3, 1) 0%,
          rgba(250, 219, 125, 1) 100%
        );
        text-align: center;
        line-height: 24px;
        border-radius: 4px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .conText {
        margin-top:12px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 28px;
      }
    }
  }

}
</style>
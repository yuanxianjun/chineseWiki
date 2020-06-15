<template>
  <div id="profile">
    <!-- 业务概况 -->
    <div class="title-con">国际教育业务是中文集团即将重点开展的业务版块，主要以国际合作办学为发展方向，以《教育部“一带一路”行动计划》为指领纲要，重点面向“一带一路”沿线
    国家的高校进行合作。通过校企合作的方式，开展学历教育，加强国内与国际之间的教育沟通，助力学分互认、学位互授联授，协力
    推进教育共同体建设。是集团未来重点规划和发展的版块。</div>
    <div class="list-con">
        <template v-for="item in 3">
            <div class="li" :key="item+'profilLi'">
              <div class="list-img">
                <img src="@/assets/images/3.png" alt="">
              </div>
              <div class="con">
                <div class="title-con-label"> <img src="@/assets/images/icon_box.png" > 中外合作<span class="ban">办学</span></div>
                <div class="p-con">中外合作办学以中外高等大学联合培养项目为主要形式，最终实体为不具备独立法人主体的二级学院。
                  通过国内高校与国外高校的合作，以中国学生为主要培养对象，双方进行联合培养。 此项目的开展致力于打造一个“一带一路”
                  国家的教育共同体，通过学分互认和学历互通，打通国内高校学习者在不同专业和不同阶段教育的互通，提高学习者的受教育水平。</div>
              </div>
            </div>
        </template>
    </div>

  </div>
</template>
<script>
export default {
  name: "profile",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#profile {
  width: 1100px;
  .title-con {
    width: 1100px;
    height: 114px;
    padding:22px 20px 20px 20px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(225, 230, 240, 1);
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    line-height:24px;
    color:rgba(55,69,103,1);
    margin-top:80px;
   
  }
  .list-con{
    width:100%;
  
   
    margin-top:70px;
    .li{
      display:flex;
      flex-direction: row;
      margin-bottom:40px;
       border-bottom:1px solid rgba(229,234,254,1);
       padding-bottom:40px;
    }
    .list-img{
      width:300px;
      height:300px;
      float:left;
      img{
        width:300px;
        height:300px;
      }
    }

    .li:last-child{
      border:none;
    }
     .title-con-label{
      font-size:24px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(55,69,103,1);
      line-height:72px;
      img{
        width:18px;
        height:18px;
        vertical-align: middle;
      }
    }
    .ban{
      font-size:30px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:#3860F4;
      line-height:72px;
      padding-left:10px;
    }
    .con{
      font-size:16px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(122,139,166,1);
      line-height:28px;
      margin-left:40px;

    }
  }
  
}
</style>
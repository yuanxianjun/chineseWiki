<template>
  <div id="profile">
    <!-- 业务概况 -->
    <div class="title-con">
      国际教育业务是中文集团即将重点开展的业务版块，主要以国际合作办学为发展方向，以《教育部“一带一路”行动计划》为指领纲要，重点面向“一带一路”沿线
      国家的高校进行合作。通过校企合作的方式，开展学历教育，加强国内与国际之间的教育沟通，助力学分互认、学位互授联授，协力
      推进教育共同体建设。是集团未来重点规划和发展的版块。
    </div>
    <div class="list-con">
      <template v-for="item in data">
        <div class="li" :key="item.id">
          <div class="list-img">
            <img :src="item.imgPath" />
          </div>
          <div class="con">
            <div class="title-con-label">
              <img src="@/assets/images/icon_box.png" />
              {{item.title}}
              <span class="ban">{{item.titleEn}}</span>
            </div>
            <div class="p-con">{{item.stract}}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { articleList } from "@/api/indexPage.js";
export default {
  name: "profile",
  components: {},
  data() {
    return { data: [] };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      articleList(this.$store.state.requestParams).then(res => {
        this.data = res.content.list.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#profile {
  width: 1100px;
  .title-con {
    width: 1100px;
    height: 114px;
    padding: 22px 20px 20px 20px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(225, 230, 240, 1);
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 24px;
    color: rgba(55, 69, 103, 1);
    margin-top: 80px;
  }
  .list-con {
    width: 100%;

    margin-top: 70px;
    .li {
      display: flex;
      flex-direction: row;
      margin-bottom: 40px;
      border-bottom: 1px solid rgba(229, 234, 254, 1);
      padding-bottom: 40px;
    }
    .list-img {
      width: 300px;
      height: 300px;
      float: left;
      img {
        width: 300px;
        height: 300px;
      }
    }

    .li:last-child {
      border: none;
    }
    .title-con-label {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(55, 69, 103, 1);
      line-height: 72px;
      img {
        width: 18px;
        height: 18px;
        vertical-align: middle;
      }
    }
    .ban {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #3860f4;
      line-height: 72px;
      padding-left: 10px;
    }
    .con {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(122, 139, 166, 1);
      line-height: 28px;
      margin-left: 40px;
    }
  }
}
</style>
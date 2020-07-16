<template>
  <div class="content newsList-con">
    <div class="nav">
      您当前所在的位置：
      <router-link class="linkClass" to="/">
        首页
        <span class="line">|</span>
      </router-link>
      <span class="linkClass">文章列表</span>
    </div>
    <div id="group-news">
      <template v-for="item in data">
        <div class="item" :key="item.id">
          <div class="itemCon">
            <div class="item-con-left">
              <div class="en">{{item.publishTime | EnMonth}}</div>

              <div class="zn">{{item.publishTime | detailMonth}}</div>
            </div>
            <div class="item-con-right">
              <div class="label">{{item.title}}</div>
              <div class="con">{{item.stract}}</div>

              <div class="btnDetail">
                <to-detail :itemId="item.id" ref="detailChild"></to-detail>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { detailTime, EnMonth, detailMonth } from "@/util";
import { articleList } from "@/api/indexPage.js";
import toDetail from "../../components/toDetail.vue";
export default {
  name: "newsList",
  filters: { detailTime, EnMonth, detailMonth },
  components: {
    "to-detail": toDetail
  },
  data() {
    return {
      data: []
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
    this.fetchData();
  },
  methods: {
    fetchData() {
      var params = {
        pageNo: 1,
        title: this.$route.params.title
      };
      articleList(params).then(res => {
        this.data = res.content.list.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.newsList-con {
  padding-top: 50px;
}
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
.en {
  width: 100%;
  background: rgba(251, 191, 3, 1);
  height: 25px;
  font-size: 16px;
  font-family: Arial;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
}
.zn {
  height: 26px;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: rgba(55, 69, 103, 1);
  line-height: 26px;
}
#group-news {
  width: 100%;
  .item {
    // height:210px;
    border-bottom: 1px solid rgba(229, 234, 254, 1);
    margin-bottom: 40px;
  }
  .itemCon {
    width: 100%;
    min-height: 150px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    .item-con-left {
      width: 50px;
      height: 52px;

      background: rgba(251, 191, 3, 0.1);
      border: 1px solid rgba(251, 191, 3, 1);

      div {
        width: 100%;
        text-align: center;
      }
    }
    .item-con-right {
      margin-left: 20px;
      width: 848px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: auto;
      .label {
        height: 40px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(55, 69, 103, 1);
      }
      .con {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(122, 139, 166, 1);
        line-height: 28px;
      }
      .btnDetail {
        margin-top: 20px;
        margin-bottom: 36px;
      }
    }
  }
}
</style>

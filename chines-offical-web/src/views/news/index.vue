<template>
  <div id="news">
    <div class="content news-con">
      <div class="newsNavigate">
        <el-tabs
          v-model="activeName"
          :tab-position="tabPosition"
          @tab-click="handleTab"
          style="height: 200px;"
        >
          <template v-for="(item,index) in tabList">
            <el-tab-pane :key="index+'tab1'" :name="item.url | filteTab" :label="item.childName"></el-tab-pane>
          </template>
        </el-tabs>
      </div>
      <div class="viewCon">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import tabList from "@/api/tabData.js";

export default {
  name: "news",
  components: {},
  filters: {
    filteTab(str) {
      return str.substr(1);
    }
  },
  data() {
    return {
      activeName: "groupNews",
      tabPosition: "left",
      tabList: []
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 设置背景
    this.activeName = to.name;
    // react to route changes...
    // don't forget to call next()
    next();
  },
  created() {
    this.tabList = tabList[2].children;
    if (this.$store.state.currentMenu.child) {
      this.activeName = this.$store.state.currentMenu.child.url;
    }
    console.log(this.activeName);
  },
  methods: {
    // 选择行业和集团
    handleTab(panel) {
      var url = "/news/" + this.activeName;
      this.$router.push(url);
    }
  }
};
</script>
  
 
<style >
.news-con {
  padding: 50px 0px;
  display: flex;
  flex-direction: row;
}
.newsNavigate {
  /* width:80px; */
  height: 200px;
  /* background:skyblue; */
}
</style>

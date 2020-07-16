<template>
  <div id="group">
    <div class="content group-con">
      <div class="groupNavigate">
        <el-tabs
          v-model="activeName"
          :tab-position="tabPosition"
          @tab-click="handleTab"
          style="height: 200px;"
        >
          <template v-for="(item,index) in tabList">
            <el-tab-pane :key="index+'tab1'" :name="item.id" :label="item.channelName"></el-tab-pane>
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
import { mapActions } from "vuex";

export default {
  name: "group",

  filters: {
    filteTab(str) {
      return str.substr(1);
    }
  },
  data() {
    return {
      activeName: "",
      tabPosition: "left",
      tabList: [],
      flag: true
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 设置背景
    // this.activeName = to.name;
    // react to route changes...
    // don't forget to call next()

    next();

    this.activeName = this.$store.state.requestParams.channelTwo;
  },
  created() {
    var data = JSON.parse(localStorage.getItem("pageInfo"));
    data.tabList.forEach(item => {
      if (item.isActive) {
        return (this.tabList = item.children);
      }
    });
    this.tabList.forEach(item => {
      if (item.isActive == true) {
        this.activeName = item.id;
      }
    });
  },
  methods: {
    ...mapActions([
      "changeMenu" // 将 `this.matchActive()` 映射为 `this.$store.dispatch('changeMenu')`
    ]),
    // 选择行业和集团
    handleTab(panel) {
      // var url = "/news/" + this.activeName;
      // this.$router.push(url);
      this.flag = false;
      // 更新路由
      let clickItem = this.tabList[panel.index],
        currentObj = {};
      currentObj.parent = this.$store.state.tabList.find(item => {
        return item.isActive == true;
      });
      currentObj.child = clickItem;
      this.matchActive(currentObj);
    },
    //  设置点击的路由
    matchActive(currentObj) {
      this.$store.dispatch("changeMenu", currentObj);
    }
  }
};
</script>
  
 
<style lang="scss" >
.group-con {
  padding: 50px 0px 0px 0px;
  display: flex;
  flex-direction: row;
}
.groupNavigate {
  width: 120px;
  height: 307px;
  /* background:skyblue; */
  .el-tabs {
    height: 360px !important;
  }
  .el-tabs__item {
    height: 60px;
    line-height: 60px;
  }
}
.viewCon {
}
</style>

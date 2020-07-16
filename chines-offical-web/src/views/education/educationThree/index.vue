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
            <el-tab-pane :key="index+'tabThree'" :name="item.id" :label="item.label"></el-tab-pane>
          </template>
        </el-tabs>
      </div>
      <div class="viewCon">
        <edu-list ref="eduComponent"></edu-list>
      </div>
    </div>
  </div>
</template>

<script>
import eduList from "@/views/education/components";
export default {
  name: "tabThree",
  components: { eduList },
  data() {
    return {
      activeName: "",
      tabPosition: "left",
      tabList: [
        {
          label: "政策法规",
          id: "24"
        },
        {
          label: "新闻动态",
          id: "23"
        },
        {
          label: "行业热点",
          id: "22"
        }
      ],
      currentPage: 1
    };
  },
  created() {
    this.activeName = localStorage.getItem("eduJson");
  },
  mounted() {
    this.$refs.eduComponent.fetchData(this.activeName);
  },
  methods: {
    handleTab() {
      localStorage.setItem("eduJson", this.activeName);
      this.$refs.eduComponent.fetchData(this.activeName);
    }
  }
};
</script>
  
 
<style lang="scss" >
.news-con {
  padding: 50px 0px 0px 0px;
  display: flex;
  flex-direction: row;
}
.newsNavigate {
  width: 120px;
  height: 300px;
  /* background:skyblue; */
  .el-tabs {
    height: 360px !important;
  }
  .el-tabs__item {
    height: 60px;
    line-height: 60px;
  }
}
</style>

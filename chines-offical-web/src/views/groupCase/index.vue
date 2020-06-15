<template>
  <div id="group">
    <div class="content group-con">
      <div class="groupNavigate">
         <el-tabs v-model="activeName" :tab-position="tabPosition"  @tab-click='handleTab' style="height: 200px;">
           <template v-for="(item,index) in tabList">
                      <el-tab-pane :key="index+'tab1'" :name="item.name" :label="item.label"  >
                      </el-tab-pane>
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
export default {
  name: "group",
  components: {},
  data() {
    return {
     activeName:"introduce",
     tabPosition: 'left',
     tabList:[
       {
         label:"公司简介",
         name:'introduce',
         key:"introduce"
       },
       {
         label:"大事记",
         key:"bigEvent",
          name:'bigEvent',
       },
       {
         label:"公司资质",
         key:'quali',
          name:'quali',
       },
       {
         label:"企业文化",
         key:"culture",
         name:'culture',
       }
     ]
    };
  },
  beforeRouteUpdate (to, from, next) {
      // 设置背景
      this.activeName = to.name;
      // react to route changes...
      // don't forget to call next()
      next();
  },
  methods: {
    // 选择行业和集团
    handleTab(panel) {
      var url="/group/"+this.activeName;
      this.$router.push(url)
    },

  }
};
</script>
  
 
<style >
.group-con{
  padding:50px 0px;
   display: flex;
  flex-direction: row;
}
.groupNavigate{
    /* width:80px; */
    height:200px;
    /* background:skyblue; */
}
.viewCon{
 

}

</style>

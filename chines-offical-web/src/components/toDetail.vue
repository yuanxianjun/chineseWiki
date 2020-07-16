<template>
  <div id="btnDetail">
    <!-- 查看详情 -->
    <div class="btnDetail" @click="handleToDetail">
      <el-button type="text">
        <!-- 查看详情 -->

        <slot name="look">
          查看详情
          <img src="@/assets/images/icon_arr.png" />
        </slot>
        <slot name="cus-con"></slot>
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "btn-detail",
  components: {},
  props: ["itemId"],
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapActions([
      "changeMenu" // 将 `this.matchActive()` 映射为 `this.$store.dispatch('changeMenu')`
    ]),
    //跳转路由
    handleTab(panel) {
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
    },
    handleToDetail() {
       localStorage.setItem("articleId", this.itemId);
      this.$router.push({ name: "newsDetail", params: { id: this.itemId } });
    }
  }
};
</script>
<style lang="scss" scoped>
.btnDetail {
  height: 16px;
  .el-button--text {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(111, 147, 249, 1);
    padding: 0;
  }
  img {
    width: 10px;
    height: 8px;
    vertical-align: middle;
  }
}
</style>
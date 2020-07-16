<template>
  <div id="app" ref="app">
    <!-- 公共的头部 -->
    <template v-if="showLogo">
      <router-view name="comHead"></router-view>
    </template>
    <!-- 首页的头部 -->
    <router-view name="indexHead"></router-view>
    <cu-header-tab></cu-header-tab>

    <router-view name="topbg"></router-view>
    <div class="appCon">
      <router-view></router-view>
    </div>
    <footer-tab></footer-tab>
    <cu-footer></cu-footer>
    <backTop></backTop>
  </div>
</template>

<script>
import cuHeaderTab from "@/components/header-tab";
import footerTab from "@/components/footer-tab";
import cuFooter from "@/components/footer";
import backTop from "@/components/backTop";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    cuHeaderTab,
    cuFooter,
    footerTab,
    backTop
  },
  data() {
    return {
      showLogo: true
    };
  },
  watch: {},
  mounted() {
    // console.log(this.$route);
    var currentObj = {
      parent: {},
      child: {}
    };
    // this.$store.dispatch("changeMenu", currentObj);
    // window.addEventListener("scroll", this.listenScroll, true);
  },
  destroyed() {
    // window.removeEventListener("scroll", this.listenScroll, true);
  },

  methods: {
    ...mapActions([
      "changeMenu" // 将 `this.matchActive()` 映射为 `this.$store.dispatch('changeMenu')`
    ])
    // listenScroll() {
    //   if (window.pageYOffset > 60) {
    //     this.showLogo = false;
    //   } else {
    //     this.showLogo = true;
    //   }
    // }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  overflow-x: hidden;
}
.appCon {
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(249, 250, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>

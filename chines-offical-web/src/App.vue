<template>
  <div id="app">
    <!-- 公共的头部 -->
    <router-view name="comHead"></router-view>
    <!-- 首页的头部 -->
    <router-view name="indexHead"></router-view>
    <cu-header-tab></cu-header-tab>

    <router-view name="topbg"></router-view>
    <div class="appCon">
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
      <!-- <router-view></router-view> -->
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
export default {
  name: "App",
  components: {
    cuHeaderTab,
    cuFooter,
    footerTab,
    backTop
  },
  methods: {
    beforeEnter() {
      this.$root.$emit("scrollBeforeEnter");
      console.log(this.$root, "root");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1920px;
  overflow-x: hidden;
}
.appCon {
  width: 100%;
  height: auto;
  background: linear-gradient(
    180deg,
    rgba(249, 250, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>

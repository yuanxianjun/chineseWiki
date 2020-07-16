<template>
  <div class="header-banner">
    <div class="content logoCon">
      <img src="@/assets/images/logo.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "cu-header-logo" //只有首页使用这个组件
};
</script>
<style lang='scss' scoped>
.header-banner {
  width: 100%;
  height: 230px;
  background: url(../assets/images/top_bg.png) no-repeat center center;
  background-size: 100% 100%;
}
.logoCon {
  height: 230px;
  line-height: 290px;
  img {
    width: 210px;
    height: 70px;
  }
}
</style>

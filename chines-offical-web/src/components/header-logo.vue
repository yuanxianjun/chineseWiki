<template>
  <div id="header-logo">
    <div class="content">
      <div class="logoImg"></div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'cu-header-logo',
  
}
</script>
<style lang='scss' scoped>
#header-logo {
 width:100%;
 height:110px;
 padding-top:20px;
  .logoImg{
    width:214px;
    height:70px;
    background:url(../assets/images/logo.png) no-repeat center center;
    background-size:100% 70px;
  }
}
</style>

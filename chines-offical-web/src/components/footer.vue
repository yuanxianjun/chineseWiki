<template>
  <div id="footer">
    <div class="content footer-content">
      <div class="f-left">
        <p class="f-left-logo"></p>
        <p class="f-p">版权所有：中文集团 京ICP备14036328号-1</p>
      </div>
      <div class="f-center">
        <p class="f-label">联系我们</p>
        <p class="f-p">地址：北京市海淀区知春路甲63号卫星大厦8层801</p>
        <p class="f-p">电话： 4006906081</p>
        <p class="f-p">邮箱： bjb@zgwscy.com</p>
      </div>
      <div class="f-right">
        <p class="f-label">关注我们</p>
        <p class="f-p">
          <img class="qrcode" src="../assets/images/img_ewm.png" />
          集团公众号二维码
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cu-footer",
  components: {}
};
</script>
<style lang="scss" scoped>
#footer {
  width: 1920px;
  height: 360px;

  position: relative;
  bottom: 0;
  left: 0;
  background: rgba(10, 22, 51, 1);
}
.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    padding-top: 94px;
  }
  .f-left {
    width: 388px;
    .f-left-logo {
      height: 40px;
      background: url(../assets/images/logoWhite.png) no-repeat left center;
      background-size: auto 100%;
      margin-bottom: 30px;
    }
  }
  .f-right {
    width: 300px;
  }
  .f-center {
    width: 350px;
  }
  .f-label {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
    margin-bottom: 30px;
  }
  .f-p {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #545867;
    line-height: 32px;
  }
  .qrcode {
    width: 139px;
    height: 139px;
  }
}
</style>

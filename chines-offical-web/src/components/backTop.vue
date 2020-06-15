<template>
  <div id="backTop" >
    <div class="content" v-if="btnFlag" @click="backTop">
          <span class='up'></span>
          <span class="up2">返回顶部</span>    
    </div>
  </div>
</template>

<script>


export default {
  name: 'backop',
  data(){
    return{
      btnFlag:false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop,true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop,true)
  },
  methods:{
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
      const that = this;
      let scropHight = this.$parent.$el.scrollTop;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.$parent.$el.scrollTop / 5)
       that.$parent.$el.scrollTop = document.body.scrollTop = that.$parent.$el.scrollTop + ispeed
        if (that.$parent.$el.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
 
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
  scrollToTop () {
   
    const that = this;
    
    if (that.$parent.$el.scrollTop > 60) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
  }
}
</script>
<style lang="scss" scoped>
#backTop {
     position: fixed;
    right: 40px;
    bottom: 60px;

    .content{
            width:30px;
            height:110px;
            background:rgba(56,96,244,0.1);
            border-radius:15px;
            text-align: center;
            padding-top:10px;
            .up{
                display: block;
                width:20px;
                height:12px;
                margin-left:5px;
                background: url(../assets/images/icon_backtotop.png) no-repeat center center;
                background-size:20px 12px;
            }
           .up2{
               width:15px;
               height:68px;
               margin:4px auto;
                display: block;
                font-size:14px;
                color:rgba(157,177,249,1);
           }
    }
    .content:hover{
      cursor: pointer;
    }
}

</style>

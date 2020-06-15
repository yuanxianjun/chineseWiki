<template>
  <div id="group-culture">
    <!-- 公司文化 -->
    <div class="group-culture-con">
      <div class="imgdiv">
        <img src="../../../assets/images/3.png" />
      </div>
      <div class="course">
        <div class="guide">
        </div>
        <div class="list">
          <ul>
            <template v-for="item in 4">
              <li>
                            <div class="label">企业使命
                              <div class="point">
                                <img src="../../../assets/images/point.png" alt="">
                              </div>
                            </div>
                            <p class="content">
                              构建传媒出版全产业链商业生态系统
                              建立知识服务各关联方共享经济体系
                            </p>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "group-culture",
  components: {},
  data() {
    return {
      classNew: "btn btnActive btnNews",
      classFocus: "btn btnFocus",
      showNews: true
    };
  },
  methods: {
    // 选择行业和集团
    choose(label) {}
  }
};
</script>
<style lang="scss" scoped>
#group-culture{
  width:100%;
  height:100%;
}
.group-culture-con{
  display:flex;
  flex-direction: row;
}
.imgdiv {
  width: 689px;
  height: 494px;
  img {
    width: 100%;
    height: 100%;
  }
}
.course {
  .guide{
      width:4px;
      height:100%;
      background:#E7ECFE;
      margin-left:20px;
      margin-right:20px;
      float:left;
  }
  .list {
    float:left;
    width:256px;
    li{
      margin-top:69px;
    }
    .label {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 600;
      color: rgba(55, 69, 103, 1);
      line-height: 30px;
      position: relative;
      .point{
        width:30px;
        height:30px;
        position: absolute;
        left:-37px;
        top:0;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .content{
      width:256px;
      font-size:16px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(122,139,166,1);
      line-height:28px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: auto;
    }
  }
}
</style>>


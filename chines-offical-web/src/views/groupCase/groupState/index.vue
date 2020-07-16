<template>
  <div id="group-state">
    <!-- 公司简介 -->
    <div class="group-state-con">
      <el-row>
        <el-col :span="24">
          <div class="videoDiv">
            <video x-webkit-airplay="allow" controls="controls" loop autoplay :src="videoUrl"></video>
            <div class="pList" v-html="showData"></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { articleList, videoGet } from "@/api/indexPage.js";
export default {
  name: "group-state",
  components: {},
  data() {
    return {
      historyList: [
        {
          year: ""
        }
      ],
      part: true,
      showData: "",
      data: [],
      moreClass: "",
      lessClass: "",
      videoUrl: ""
    };
  },
  computed: {},
  watch: {},
  created() {
    this.fetchData();
  },
  methods: {
    // 选择行业和集团
    showMore() {
      this.showData = this.data[0].content;
    },
    fetchData() {
      videoGet().then(res => {
        this.videoUrl = res.content.video.videoUrl;
      });
      articleList(this.$store.state.requestParams).then(res => {
        this.data = res.content.list.list;
        this.showData = this.data[0].content;
      });
    }
  }
};
// <div class="btnMore" @click="part=!part">{{part ? '查看全部':"收起"}}</div>
// <div class="history">
//   <div class="label">
//     发展历程
//     <span class="grey">DEVELOPMENT HISTORY</span>
//   </div>
//   <div class="imgDiv">
//     <img v-if="data[0]" :src=" data[0].imgPath" />
//   </div>
// </div>
</script>
  
 
<style lang="scss" scoped>
.overflow-show {
  height: auto !important;
  // overflow: auto;
}
.videoDiv {
  width: 100%;
  height: 100%;
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.group-state-con {
  margin-left: 40px;
  width: 940px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: auto;
  .pList {
    height: auto;

    // -moz-box-shadow: 0 0 10px #ccc;
    // -webkit-box-shadow: 0 0 10px #ccc;
    // box-shadow: 0 0 10px #ccc;
  }
  // <p class="opacityDiv"></p>
  // .opacityDiv {
  //   width: 100%;
  //   height: 50px;
  //   position: relative;
  //   top: -47px;
  //   opacity: 1;
  //   background: linear-gradient(
  //     to bottom,
  //     rgba(255, 255, 255, 0.1) 0%,
  //     rgba(0, 0, 0, 0.1) 40%,
  //     rgba(0, 0, 0, 0.2) 98%,
  //     #ffffff 100%
  //   );
  // }
  p {
    width: 100%;
    text-indent: 50px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(55, 69, 103, 1);
    line-height: 28px;
    margin-bottom: 40px;
  }
  .btnMore {
    width: 940px;
    height: 32px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(225, 230, 240, 1);
    text-align: center;
    line-height: 32px;
    margin-top: 20px;
  }
  .btnMore:hover {
    cursor: pointer;
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  .imgDiv {
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .history {
    margin-top: 60px;
    text-align: center;
    .label {
      font-size: 28px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(55, 69, 103, 1);
      line-height: 72px;
      .grey {
        font-size: 22px;
        font-family: GenJyuuGothic;
        font-weight: 300;
        color: rgba(122, 139, 166, 1);
        line-height: 72px;
      }
    }
  }
}
</style>
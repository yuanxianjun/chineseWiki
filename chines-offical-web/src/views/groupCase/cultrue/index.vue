<template>
  <div id="group-culture">
    <!-- 公司文化 -->
    <div class="group-culture-con">
      <div class="course">
        <div class="guide"></div>
        <div class="list">
          <ul>
            <template v-for="item in dataLeft">
              <li :key="item.id">
                <div class="label">
                  {{item.title}}
                  <div class="point">
                    <img src="../../../assets/images/point.png" alt />
                  </div>
                </div>
                <p class="content">{{item.stract}}</p>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="course">
        <div class="guide"></div>
        <div class="list">
          <ul>
            <template v-for="item in dataRight">
              <li :key="item.id">
                <div class="label">
                  {{item.title}}
                  <div class="point">
                    <img src="../../../assets/images/point.png" alt />
                  </div>
                </div>
                <p class="content">{{item.stract}}</p>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articleList } from "@/api/indexPage.js";
export default {
  name: "group-culture",
  components: {},
  data() {
    return {
      dataLeft: [],
      dataRight: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      articleList(this.$store.state.requestParams).then(res => {
        this.data = res.content.list.list;
        this.dataLeft = this.data.slice(0, this.data.length / 2);
        this.dataRight = this.data.slice(this.data.length / 2);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#group-culture {
  width: 100%;
  height: 100%;
}
.group-culture-con {
  display: flex;
  flex-direction: row;
}
.imgdiv {
  width: 482px;
  height: 482px;
  margin-left: 20px;
  background: url(../../../assets/images/culture3.png) no-repeat center center;
  background-size: 100% 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.course {
  margin-left: 100px;
  .guide {
    width: 4px;
    height: 100%;
    background: #e7ecfe;
    margin-left: 60px;
    margin-right: 20px;
    float: left;
  }
  .list {
    float: left;
    width: 256px;
    // margin-left: 40px;
    li {
      margin-top: 69px;
    }
    .label {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 600;
      color: rgba(55, 69, 103, 1);
      line-height: 30px;
      position: relative;
      .point {
        width: 30px;
        height: 30px;
        position: absolute;
        left: -37px;
        top: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .content {
      width: 256px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(122, 139, 166, 1);
      line-height: 28px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: auto;
    }
  }
}
</style>>


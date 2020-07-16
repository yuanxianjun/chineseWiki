<template>
  <div id="header-tab" :class="logoShow ? 'position' : ''">
    <div class="content">
      <div class="header-tab-con">
        <div class="logoImg" v-if="logoShow">
          <img src="@/assets/images/logo_fb.png" />
        </div>
        <template v-for="(item,key) in tabList">
          <div class="tabItem" :key="key+'item'">
            <div
              v-if="!item.children"
              class="tabItem-label"
              :style=" {  fontSize: item.isActive ?'20':18 + 'px' }"
              slot="reference"
              @click="handleClick(item)"
            >{{item.channelName}}</div>
            <el-popover
              v-if="item.children"
              placement="bottom-start"
              trigger="hover"
              style="height:70px;"
            >
              <div class="tab-child">
                <template v-for="(childItem,index) in item.children">
                  <span
                    style="padding:0 26px;
                    border-right:1px solid rgba(225,230,240,1)"
                    class="tab-child-span"
                    :class="{isActiveSpan : childItem.isActive}"
                    :key="index+'child'"
                    @click="handleClick(item,childItem)"
                  >{{childItem.channelName}}</span>
                </template>
              </div>
              <div
                class="tabItem-label"
                slot="reference"
                @click="handleClick(item)"
              >{{item.channelName}}</div>
            </el-popover>
            <div v-show="item.isActive" class="bottom-item"></div>
          </div>
        </template>
        <div class="inputDiv" v-if="!logoShow">
          <el-input placeholder="请输入关键词" v-model="inputValue">
            <el-button slot="append" @click="seachAritcle" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "cu-header-tab",
  components: {},
  data() {
    return {
      inputValue: "",
      isActiveSpan: {
        color: "red"
      },
      logoShow: false
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.changeScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.changeScroll, true);
  },
  computed: {
    tabList() {
      return this.$store.state.tabList;
    }
  },
  methods: {
    ...mapActions([
      "changeMenu" // 将 `this.matchActive()` 映射为 `this.$store.dispatch('changeMenu')`
    ]),
    // 更改scroll内容
    changeScroll() {
      if (window.pageYOffset > 80) {
        this.logoShow = true;
      } else {
        this.logoShow = false;
      }
    },
    handleClick(parent, child) {
      let url = "",
        currentObj = { parent, child };
      if (child) {
        url = parent.channelPath + child.channelPath;
      } else {
        url = parent.channelPath;
      }
      this.matchActive(currentObj);
      
      //  this.$router.push({path:url})  // -> /user/123
      //  跳转到某个页面
      this.$nextTick(() => {
        if (this.$route.path !== url) {
          this.$router.push(url);
        }
      });
    },
    //  设置点击的路由
    matchActive(currentObj) {
      this.$store.dispatch("changeMenu", currentObj);
    },
    seachAritcle() {
      this.$router.push({
        name: "newsList",
        params: { title: this.inputValue }
      });
      this.inputValue = "";
    }
  }
};
</script>

<style lang="scss" >
.position {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
}
#header-tab .tabItem-label {
  height: 72px;
}
.tab-child-span:hover {
  cursor: pointer;
  color: #3860f4;
}
.tab-child {
  span:last-child {
    border: none !important;
  }
}
.isActiveSpan {
  color: #409eff;
}
#header-tab {
  width: 100%;
  height: 80px;
  background: rgba(17, 50, 133, 1);
  opacity: 0.95;
  .el-input-group__append,
  .el-input-group__prepend {
    background: #fff;
    border: none;
  }
  .el-input__inner {
    border: 1px solid #ffffff;
  }
  .header-tab-con {
    // line-height: 110px;
    .logoImg {
      // width: 120px;
      height: 61px;
      float: left;
      margin-right: 40px;
      margin-left: 10px;
      line-height: 136px;
      img {
        width: auto;
        height: 100%;
      }
    }
  }
  .tabItem:hover {
    background: rgba(25, 55, 166, 1);
    cursor: pointer;
  }
  .tabItem {
    display: inline-block;
    height: 80px;
    line-height: 80px;
  }
  .tabItem-label {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    padding: 0 20px;
  }

  .is-active {
    background: rgba(25, 55, 166, 1);
    border-bottom: 8px rgba(56, 96, 244, 1) solid;
    border-radius: 4px;
  }
  .bottom-item {
    width: 100%;
    height: 8px;
    background: rgba(56, 96, 244, 1);
    border-radius: 4px;
  }
  .inputDiv {
    float: right;
    width: 200px;
    height: 32px;
    margin-top: 20px;
    .el-input__inner {
      height: 32px !important;
    }
    .el-input__icon {
      line-height: 32px;
    }
  }
}
</style>

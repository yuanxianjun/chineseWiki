<template>
  <div id="header-tab">
    <div class="content header-tab-con">
      <div class="header-tab-con">
        <template v-for="(item,key) in tabList">
          <div class="tabItem" :key="key+'item'">
            <div
              v-if="!item.children"
              class="tabItem-label"
              slot="reference"
              @click="handleClick(item)"
            >{{item.label}}</div>

            <el-popover
              v-if="item.children"
              placement="bottom-start"
              trigger="hover"
              style="height:70px;"
            >
              <div class="tab-child">
                <template v-for="(childLabel,index) in item.children">
                  <span
                    style="padding:0 20px;
                border-right:1px solid rgba(225,230,240,1)"
                    class="tab-child-span"
                    :key="index+'child'"
                    @click="handleClick(item,childLabel)"
                  >{{childLabel.childName}}</span>
                </template>
              </div>
              <div class="tabItem-label" slot="reference" @click="handleClick(item)">{{item.label}}</div>
            </el-popover>
            <div v-if="item.isActive" class="bottom-item"></div>
          </div>
        </template>
        <div class="inputDiv">
          <el-input placeholder="请输入关键词" v-model="inputValue">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
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
      tabList: this.$store.state.tabList
    };
  },
  created() {
    // let currentObj = {
    //   parent: {
    //     url: this.$route.matched[0].path
    //   },
    //   child: {
    //     url: this.$route.path
    //   }
    // };
    // this.matchActive("changeMenu", currentObj);
    this.$router.push(this.$route.path);
  },
  methods: {
    ...mapActions([
      "changeMenu" // 将 `this.matchActive()` 映射为 `this.$store.dispatch('changeMenu')`
    ]),
    handleClick(parent, child) {
      let url = "",
        currentObj = { parent, child };
      if (child) {
        url = parent.url + child.url;
      } else {
        url = parent.url;
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
    //  匹配路由
    matchActive(currentObj) {
      this.$store.dispatch("changeMenu", currentObj);
    }
  }
};
</script>

<style lang="scss" >
#header-tab .tabItem-label {
  height: 72px;
}
.tab-child-span:hover {
  cursor: pointer;
  color: #3860f4;
}
#header-tab {
  width: 1920px;
  height: 80px;
  background: rgba(17, 50, 133, 1);
  .header-tab-con {
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
  .tabItem-label:hover {
    background: rgba(25, 55, 166, 1);
    cursor: pointer;
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

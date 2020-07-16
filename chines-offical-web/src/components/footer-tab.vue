<template>
  <div id="footer-tab">
    <div class="content footer-tab-content">
      <div class="left">
        <el-select v-model="value1" placeholder="友情链接">
          <template v-for="item in linksData">
            <el-option value="友情链接" :key="item.id">
              <div @click="hrefto(item.linkUrl)">{{item.title}}</div>
            </el-option>
          </template>
        </el-select>
      </div>
      <div class="center">
        <el-select v-model="value2" placeholder="出版服务机构">
          <template v-for="item in partners">
            <el-option value="出版服务机构" :key="item.id">
              <div @click="hrefto(item.linkUrl)">{{item.title}}</div>
            </el-option>
          </template>
        </el-select>
      </div>
      <div class="right">
        <el-select v-model="value3" placeholder="教育合作机构">
          <template v-for="item in otherClass">
            <el-option value="教育合作机构" :key="item.id">
              <div @click="hrefto(item.linkUrl)">{{item.title}}</div>
            </el-option>
          </template>
        </el-select>
      </div>
    </div>
  </div>
</template>
<script>
import { links } from "@/api/indexPage";
// import func from "../../vue-temp/vue-editor-bridge";
export default {
  name: "cu-footer-tab",
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      linksData: [],
      partners: [],
      otherClass: []
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData(type) {
      var params = {
        type
      };
      let result = [],
        that = this;
      // links(params).then(response => {
      //   console.log(response.content.list, "links");
      //   result = response.content.list;
      // });
      // return result;
      function resultFun(params) {
        return new Promise(resolve => {
          links(params).then(response => {
            result = response.content.list;
            resolve(result);
          });
        });
      }
      async function getData() {
        that.linksData = await resultFun({ type: 1 });
        that.partners = await resultFun({ type: 2 });
        that.otherClass = await resultFun({ type: 3 });
      }
      getData();
    },
    hrefto(link) {
      window.open(link);
    }
  }
};
</script>

<style lang="scss" scoped>
#footer-tab {
  width: 100%;
  height: 80px;
  background: rgba(249, 250, 255, 1);
  margin-top: 100px;
}
.footer-tab-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  div {
    width: 300px;
    height: 32px;
    el-select {
      width: 100%;
      background: rgba(225, 230, 240, 1);
      border: none;
    }
  }
}
</style>

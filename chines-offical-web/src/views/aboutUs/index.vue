<template>
  <div class="content aboutUs-con">
    <div class="title">
      中文产业控股集团有限公司
      <span class="enTitle">CHINESE GROUP</span>
    </div>
    <div class="address_label">
      <p>地址：北京市海淀区知春路63号卫星大厦8层801</p>
      <p>邮编：100080</p>
    </div>
    <div class="address_content">
      <!-- <img src="@/assets/images/address.png" alt /> -->
      <baidu-map
        class="bm-view"
        ak="YOUR_APP_KEY"
        :center="{lng: position.lng, lat: position.lat}"
        :zoom="18"
        :scroll-wheel-zoom="true"
      >
      <!--动画人物  :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
          size: {width: 300, height: 157}}" -->
        <BmMarker 
        :dragging="true" 
        title="卫星大厦" 
        animation="BMAP_ANIMATION_BOUNCE"
         :position='{lng: position.lng, lat: position.lat}'
        
         ></bmMarker>
         <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmMarker from 'vue-baidu-map/components/overlays/Marker'; //点标注
import bmGeolocation from 'vue-baidu-map/components/controls/Geolocation'; //回原点

export default {
  name: "aboutUs",
  components: {
    BaiduMap,BmMarker,bmGeolocation
  },
  data() {
    return {
      position:{
        lng:'116.338563',
        lat:'39.982697'
      }
    };
  },
  methods: {}
};
</script>
  
 
<style lang="scss" scoped>
.aboutUs-con {
  width: 1100px;
  height: auto;
  padding: 50px 0px 0px 0px;
  .bm-view {
    width: 100%;
    height: 100%;
  }
  .title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid rgba(229, 234, 254, 1);
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(56, 96, 244, 1);
    line-height: 72px;
  }

  .enTitle {
    font-size: 20px;
    font-family: Arial;
    font-weight: 400;
    color: rgba(111, 147, 249, 1);
    line-height: 72px;
  }
  .address_label {
    height: 80px;
    padding-top: 40px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(122, 139, 166, 1);
    line-height: 28px;
  }
  .address_content {
    width: 1100px;
    height: 450px;
    margin-top: 80px;
    img {
      width: 1100px;
      height: 450px;
    }
  }
}
</style>

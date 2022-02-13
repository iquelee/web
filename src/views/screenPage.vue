<template>
  <div class="screen-container">
    <header class="screen-header px-4 py-3 d-flex ai-center bg-primary">
      <img src="../assets/logo.png" height="35px">
      <div class="px-2 flex-1">
        <div class="text-white fs-xl fw-6 mt-1">智慧航班</div>
        <div class="text-grey fs-xxs mt-1">非常时期非常准</div>
      </div>
      <div class="text-grey d-flex">
        <i class="iconfont icon-a-qingre fs-xxl"></i>
        <span class="px-2">|</span>
        <div>25&#176;</div>
      </div>
    </header>
    <!-- end of header -->

    <div class="screen-body px-4 d-flex">
      <div class="screen-left flex-1 d-flex flex-col">
        <div class="left-top flex-1">
          <trend></trend>
        </div>
        <div class="left-bottom flex-1">
          <zone></zone>
        </div>
      </div>
      <div class="screen-middle flex-3">
      </div>
      <div class="screen-right flex-1 d-flex flex-col">
        <div class="right-top flex-1">
          <trend></trend>
        </div>
        <div class="right-bottom flex-1">
          <age></age>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Trend from '../components/trend.vue'
import Age from '../components/age.vue'
import Zone from '../components/zone.vue'
export default {
  components: {
    Zone,
    Trend,
    Age
  }
}
</script>

<style lang='scss' scoped>
  .screen-right {
    height: 90vh;
  }
  .right-top .right-bottom {
    height: 45vh;
  }
    .screen-left {
    height: 90vh;
  }
  .left-top .left-bottom {
    height: 45vh;
  }
</style>

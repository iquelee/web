<template>
  <div class="com-container">
    <div class="nav d-flex">
      <router-link class="nav-item d-flex jc-center py-3 active"  to="/high"  index="1">
        <span class="mx-1">高风险</span>
      </router-link>
      <router-link class="nav-item d-flex jc-center py-3"  to="/medium"  index="2">
        <span class="mx-1">中风险</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  destroyed () {
  },
  methods: {
  }
}
</script>

<style>

</style>

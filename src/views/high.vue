<template>
  <ul class="zoneList">
    <zoneItem v-for="hZoneObj in hZones" :key="hZoneObj.index" :hZone="hZoneObj"/>
  </ul>
</template>

<script>
import zoneItem from './zoneItem.vue'
export default {
  components: { zoneItem },
  data () {
    return {
      hZones: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const { data: ret } = await this.$http.get('hZone')
      this.hZones = ret
    }
  }
}
</script>

<style>

</style>

<template>
  <li>
    <span>{{hZone.name}}</span>
    <span>{{hZone.diagnosed}}</span>
    <span>{{hZone.suspected}}</span>
    <span>{{hZone.district}}</span>
  </li>
</template>

<script>
export default {
  props: ['hZone']
}
</script>

<style>

</style>

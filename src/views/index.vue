<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'

export default {
    components: { NavHeader }
}
</script>

<style scoped></style>

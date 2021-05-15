<template>
  <div id="app">
    <section class="main-container">
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {}
    },
    watch: {
        $route (to, from) {
            console.log('path', to.path)
            this.activeRoute = to.path
        }
    },
    methods: {}
}
</script>

<style lang="scss">
#app {
  height: 100%;

  .main-container {
    height: 100%;
    overflow-y: scroll;
  }
}
</style>

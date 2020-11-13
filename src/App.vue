<template>
  <div id="app">
    <component :is="layout">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </component>
  </div>
</template>

<script>
  const default_layout = "default";

  export default {
	data: () => ({
      heading: 'Pagination',
      subheading: 'Basic and dynamic pagination for use in your next awesome application.',
      icon: 'pe-7s-notebook icon-gradient bg-mixed-hopes',

      currentPage: 3
    }),
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/base.scss";
</style>

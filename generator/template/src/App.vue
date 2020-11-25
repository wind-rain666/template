<template>
  <div id="app">
    <layout v-if="app.layout"></layout>
    <router-view v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Layout from './layout/index.vue';

export default {
  components: { Layout },
  computed: {
    ...mapState(['app'])
  }
};
</script>

<style lang="scss">
@import url('./style/index.scss');
@import url('./style/transition.scss');
@import url('./style/elementMenu.scss');
</style>

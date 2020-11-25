<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <hamburger></hamburger>
      <breadcrumb></breadcrumb>
    </div>
    <option-box></option-box>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb.vue';
import OptionBox from './OptionBox.vue';
import Hamburger from './Hamburger.vue';

export default {
  components: {
    Breadcrumb,
    OptionBox,
    Hamburger
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  &-left {
    display: flex;
  }
}
</style>

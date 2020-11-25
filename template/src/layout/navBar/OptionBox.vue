<template>
  <div class="option-container">
    <screenfull></screenfull>
    <avatar></avatar>
  </div>
</template>

<script>
import Screenfull from './Screenfull.vue';
import Avatar from './Avatar.vue';

export default {
  components: {
    Screenfull,
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.option-container {
  display: flex;
  align-items: center;
}
</style>

<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="route in breadcrumbList" :key="route.path" :to="route.path">{{ route.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  computed: {
    breadcrumbList() {
      let result = [
        {
          path: this.$route.path,
          name: this.$route.meta.title
        }
      ];
      if (!this.$route.meta || !this.$route.meta.parentMenu) return result;
      let parentRoute = this.$router.options.routes.find(item => item.name === this.$route.meta.parentMenu);
      while (parentRoute && parentRoute.meta && parentRoute.meta.parentMenu) {
        result.unshift({
          path: parentRoute.path,
          name: parentRoute.meta.title
        });
        parentRoute = this.$router.options.routes.find(item => item.name === parentRoute.meta.parentMenu);
      }
      result.unshift({
        path: '/',
        name: '首页'
      });

      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

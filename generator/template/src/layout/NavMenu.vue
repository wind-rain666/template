<template>
  <div class="nav-menu">
    <el-menu
      :default-active="activeMenu"
      background-color="#2e4058"
      text-color="#fff"
      :router="true"
      :collapse="app.navMenuCollapse"
      :collapse-transition="false"
      class="nav-menu-raw"
    >
      <div
        v-for="(firstMenu,firstMenuIndex) in menuList"
        :key="firstMenuIndex"
      >
        <el-menu-item
          v-if="firstMenu.subMenu.length === 0"
          :index="firstMenu.path"
          class="first-rank-menu"
        >
          <svg-icon :icon-class="firstMenu.meta.svg"></svg-icon>
          <span
            slot="title"
            class="nav-menu-title"
          >{{ firstMenu.meta.title }}</span>
        </el-menu-item>
        <el-submenu
          v-else
          :index="firstMenu.path"
        >
          <template slot="title">
            <svg-icon :icon-class="firstMenu.meta.svg"></svg-icon>
            <span
              slot="title"
              class="nav-menu-title"
              v-show="!app.navMenuCollapse"
            >{{ firstMenu.meta.title }}</span>
          </template>
          <div
            v-for="(secondMenu,secondMenuIndex) in firstMenu.subMenu"
            :key="secondMenuIndex"
          >
            <el-menu-item
              v-if="secondMenu.subMenu.length === 0"
              :index="secondMenu.path"
            >
              <svg-icon :icon-class="secondMenu.meta.svg"></svg-icon>
              <span
                slot="title"
                class="nav-menu-title"
              >{{ secondMenu.meta.title }}</span>
            </el-menu-item>
            <el-submenu
              v-else
              :index="secondMenu.path"
            >
              <template slot="title">
                <svg-icon :icon-class="secondMenu.meta.svg"></svg-icon>
                <span
                  slot="title"
                  class="nav-menu-title"
                  v-show="!app.navMenuCollapse"
                >{{ secondMenu.meta.title }}</span>
              </template>
              <div
                v-for="(thirdMenu,thirdMenuIndex) in secondMenu.subMenu"
                :key="thirdMenuIndex"
              >
                <el-menu-item :index="thirdMenu.path">
                  <svg-icon :icon-class="thirdMenu.meta.svg"></svg-icon>
                  <span
                    slot="title"
                    class="nav-menu-title"
                  >{{ thirdMenu.meta.title }}</span>
                </el-menu-item>
              </div>
            </el-submenu>
          </div>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      menuList: []
    };
  },
  computed: {
    ...mapState(['app', 'user']),
    activeMenu() {
      return this.$route.path;
    }
  },
  watch: {
    'user.guardList': {
      handler(guardList) {
        this.render();
      },
      deep: true
    }
  },
  mounted: function() {
    this.render();
  },
  methods: {
    render() {
      this.menuList = this.$router.options.routes
        .filter(route => route.path !== '/404' || route.path !== '*')
        .filter(
          route =>
            route.meta &&
            route.meta.layout &&
            !route.meta.hidden &&
            !route.meta.parentMenu &&
            (route.meta.guardList ? route.meta.guardList.some(guard => this.user.guardList.includes(guard)) : true)
        );
      this.menuList.forEach(menu => {
        menu.subMenu = this.$router.options.routes.filter(
          route =>
            route.meta &&
            route.meta.layout &&
            !route.meta.hidden &&
            route.meta.parentMenu === menu.name &&
            (route.meta.guardList ? route.meta.guardList.some(guard => this.user.guardList.includes(guard)) : true)
        );
        menu.subMenu.forEach(secondMenu => {
          secondMenu.subMenu = this.$router.options.routes.filter(
            route =>
              route.meta &&
              route.meta.layout &&
              !route.meta.hidden &&
              route.meta.parentMenu === secondMenu.name &&
              (route.meta.guardList ? route.meta.guardList.some(guard => this.user.guardList.includes(guard)) : true)
          );
        });
      });
    }
  }
};
</script>

<style lang="scss">
.nav-menu {
  .el-menu-item {
    background-color: #1f2d3d !important;
  }
  .first-rank-menu {
    background-color: #2e4058 !important;
  }
}
</style>

<style lang="scss" scoped>
.nav-menu {
  min-height: 100vh;
  background-color: #2e4058;
  .svg-icon {
    font-size: 20px;
    margin-right: 5px;
  }
  &-title {
    font-size: 14px;
  }
}
</style>

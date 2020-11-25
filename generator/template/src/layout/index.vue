<template>
  <el-container>
    <el-aside :style="'width:' + asideWidth+'px'">
      <nav-menu></nav-menu>
    </el-aside>
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <tags-view></tags-view>
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from './NavMenu.vue';
import NavBar from './navBar/index.vue';
import TagsView from './tagsView/index.vue';
import { mapState } from 'vuex';

export default {
  components: { NavMenu, NavBar, TagsView },
  computed: {
    ...mapState(['app']),
    asideWidth() {
      return this.app.navMenuCollapse ? 64 : 220;
    }
  }
};
</script>

<style lang="scss">
.el-aside {
  background-color: rgb(84, 92, 100);
}
</style>

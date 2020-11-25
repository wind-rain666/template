<template>
  <div class="avatar-container">
    <div class="user-name">{{ name }}</div>
    <el-dropdown class="avatar-dropdown">
      <div class="avatar-wrapper">
        <img :src="avatar" class="user-avatar" />
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <sapn @click="logout">注销</sapn>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userData', 'roles']),
    name() {
      if (!this.userData) return '';

      return (this.userData.AreaAdmin ? this.userData.AreaAdmin.AreaAdminName : '') || (this.userData.Teacher ? this.userData.Teacher.TeacherName : '') || (this.userData.OfficialInfo ? this.userData.OfficialInfo.NickName : '') || this.userData.UserName || this.userData.Phone || this.userData.Email;
    },
    avatar() {
      return this.userData && this.userData.OfficialInfo && this.userData.OfficialInfo.AvatarUrl ? this.userData.OfficialInfo.AvatarUrl : require('../../assets/images/avatar.png');
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'userLogin' });
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar-container {
  display: flex;
  align-items: center;
  .user-name {
    padding-right: 10px;
  }
  .avatar-wrapper {
    display: flex;
    align-items: center;
    .user-avatar {
      width: 35px;
      height: 35px;
    }
  }
}
</style>

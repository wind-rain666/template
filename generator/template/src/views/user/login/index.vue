<template>
  <div class="login-container">
    <div class="login-title">物联网设备管理平台</div>
    <el-form class="login-form">
      <el-form-item>
        <svg-icon icon-class="user"></svg-icon>
        <el-input v-model="loginForm.identity" placeholder="账号（支持用户名、手机号和邮箱）"></el-input>
      </el-form-item>
      <el-form-item>
        <svg-icon icon-class="lock"></svg-icon>
        <el-input :type="passwordType" v-model="loginForm.password" placeholder="密码"></el-input>
        <svg-icon icon-class="eye-close" v-if="passwordType ==='password'" @click="showPassword"></svg-icon>
        <svg-icon icon-class="eye" v-else @click="hiddePassword"></svg-icon>
      </el-form-item>
      <el-button :loading="btnLoading" type="primary" class="login-form-btn" @click="login">登录</el-button>
    </el-form>
    <div class="login-footer"></div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
import { loginApi } from '../../../api/user';
import { validateForm } from './service';
import { parseError } from '../../../utils/index';
import * as md5 from 'md5';

export default {
  data() {
    return {
      btnLoading: false,
      loginForm: {
        identity: '',
        password: ''
      },
      passwordType: 'password'
    };
  },
  created() {
    document.addEventListener('keyup', this.enterKey);
  },
  methods: {
    login() {
      const validError = validateForm(this.loginForm);
      if (validError) return Message.warning(validError);
      this.btnLoading = true;
      loginApi(this.loginForm.identity, md5(this.loginForm.password))
        .then(res => {
          this.$store.dispatch('setToken', res.token);
          this.$store.dispatch('setExpiresIn', res.expires_in);
          this.$store.dispatch('setExpiresAt', Date.now() + res.expires_in);
          this.$router.replace('/dashboard');
        })
        .catch(error => Message.error(parseError(error)))
        .finally(() => (this.btnLoading = false));
    },
    showPassword() {
      this.passwordType = 'text';
    },
    hiddePassword() {
      this.passwordType = 'password';
    },
    enterKey(event) {
      const code = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
      if (code === 13) this.login();
    }
  },
  destroyed() {
    document.removeEventListener('keyup', this.enterKey);
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2d3a4b;
  color: white;
  .login {
    &-title {
      font-size: 30px;
      letter-spacing: 20px;
      text-align: center;
      padding-bottom: 50px;
    }
    &-form {
      width: 450px;
      .svg-icon {
        font-size: 18px;
        color: white;
        padding-left: 10px;
      }

      &-btn {
        width: 100%;
        padding-top: 10px;
      }
    }
    &-footer {
      height: 40vh;
    }
  }
}
.el-input__inner {
  height: 55px;
}
</style>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

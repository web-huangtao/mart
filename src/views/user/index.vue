<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">
      {{ isLogin }}
      <div v-if="isLogin == 'true'" @click="toLogout">
        退出登录
      </div>
      <div v-else @click="toLogin">
        请登录
      </div>
    </div>
    <!-- 底部 -->
    <v-footer />
    <!-- 蒙层 -->
    <div class="dialog"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import utils from '@/utils/utils'
export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log('mounted', this.isLogin)
    utils.a()
  },
  computed: {
    ...mapState({
      isLogin: state => '' + state.user.isLogin
    })
  },
  methods: {
    ...mapMutations({
      login: 'login',
      logout: 'logout'
    }),
    toLogin() {
      this.login()
      console.log('登录', this.isLogin)
    },
    toLogout() {
      this.logout()
      console.log('登出', this.isLogin)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin';
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    box-sizing: border-box;
    .header {
      width: 100%;
      height: 100px;
    }
    .main {
      flex: 1;
      padding: 0 10px;
      // @include border;
      @include triangle(365px);
    }
    .dialog {
      // @include model;
    }
  }
</style>

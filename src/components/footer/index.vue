<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="0">
      <img v-if="selected === '0'" slot="icon" src="./imgs/homefill.png">
      <img v-else slot="icon" src="./imgs/home.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="1">
      <img v-if="selected === '1'" slot="icon" src="./imgs/kindfill.png">
      <img v-else slot="icon" src="./imgs/kind.png">
      分类
    </mt-tab-item>
    <mt-tab-item id="2">
      <img v-if="selected === '2'" slot="icon" src="./imgs/cartfill.png">
      <img v-else slot="icon" src="./imgs/cart.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="3">
     <img v-if="selected === '3'" slot="icon" src="./imgs/userfill.png">
      <img v-else slot="icon" src="./imgs/user.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data() {
    return {
      selected: '0'
    }
  },
  watch: {
    selected(val) {
      this.selected = val
      switch (val) {
        case '0':
          this.$router.push('home')
          break
        case '1':
          this.$router.push('kind')
          break
        case '2':
          this.$router.push('cart')
          break
        case '3':
          this.$router.push('user')
          break
      }
    }
  },
  created() {
    const path = this.$route.path
    switch (path) {
      case '/home':
        this.selected = '0'
        break
      case '/kind':
        this.selected = '1'
        break
      case '/cart':
        this.selected = '2'
        break
      case '/user':
        this.selected = '3'
        break
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  color: #e16c61;
  text-decoration: none;
}
</style>

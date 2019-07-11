<template>
  <div :class="phoneType === 'ios' ? 'ios' :'android'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      phoneType: null // 手机类型
    }
  },
  mounted() {
    this.judgeType()
  },
  destroyed() {
    if (this.phoneType === 'android') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 49) {
        if (this.phoneType === 'android') {
          this.$emit('scroll', true)
        }
      } else {
        this.$emit('scroll', false)
      }
    },
    judgeType() {
      // 设置距离
      const sticky = document.getElementsByClassName('sticky')[0]
      sticky.style.top = this.distance + 'px'
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { // Ios
        this.phoneType = 'ios'
      } else if (/(Android)/i.test(navigator.userAgent)) { // Android终端
        this.phoneType = 'android'
        window.addEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .ios {
    -webkit-overflow-scrolling: touch;
    .sticky {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
    }
  }
  .android {
    .navBarWrap {
      position:fixed;
      top:0;
      z-index:999;
    }
  }
</style>

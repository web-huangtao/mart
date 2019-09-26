<template>
  <div class="detail">
    详情页{{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      data: ''
    }
  },
  mounted() {
    this.id = this.$route.params.id
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">123</div>
    <div class="footer">
      <v-footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
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
    }
    .footer {
      width: 100%;
      height: 100px;
    }
  }
</style>

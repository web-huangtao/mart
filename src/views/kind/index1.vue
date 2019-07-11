<template>
  <div class="container">
    <ul class="nav">
      <li v-for="(item, index) in nav" :class="activeIdx === index ? 'navActive' : ''" :key="index" @click="change(index)">{{ item }}</li>
    </ul>
    <div class="main">
      <div class="content" v-for="(item, index) in nav" :key="index" :id="'a'+index">
        <p class="title">{{ item }}</p>
        <div class="list"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIdx: null,
      nav: [
        '热销爆品', '时令水果', '新鲜蔬菜', '水产海鲜', '肉禽蛋类', '卤味熟食', '安心乳品', '酒水饮料', '休闲食品', '现磨咖啡', '方便速食', '烘焙糕点', '粮油调味', '家用清洁', '美妆个护', '超市'
      ]
    }
  },
  mounted() {
  },
  methods: {
    change(idx) {
      this.activeIdx = idx
      let id = document.getElementById('a' + idx)
      id.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .nav {
      width: 160px;
      height: 100%;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      border: 1px solid #ccc;
      li {
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border-bottom: 1px solid #ccc;
        &:last-child {
          border: none;
        }
      }
      .navActive {
        color: red;
      }
    }
    .main {
      flex: 1;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      .title {
        line-height: 60px;
        text-indent: 20px;
        color: red;
      }
      .list {
        height: 300px;
        background: #ccc;
      }
    }
  }
</style>

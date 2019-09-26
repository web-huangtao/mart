<template>
  <v-sticky @scroll="handleScroll">
    <div class="header">
      <p>
        <span class="icon"></span>
        <span>分类</span>
      </p>
      <form action="" onsubmit="return false" autocomplete="off" style="flex: 1;">
        <mt-search
          v-model="searchVal"
          cancel-text="取消"
          placeholder="搜索"
          @keyup.native.enter="search(searchVal)"
        />
      </form>
    </div>

    <!-- 导航 -->
    <div class="sticky" :class="navBarFixed == true ? 'navBarWrap' :''">
      <p v-for="(item, index) in nav" :key="index" :class="{ navActive: index === navIdx }" @click="changeNav(item.id)">{{ item.title }}</p>
    </div>

    <!-- 列表 -->
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="50"
      class="list"
    >
      <li class="list-item" v-for="(item, index) in list" :key="index" @click="toDetail(item.id)">
        <img :src="item.img">
        <p class="list-item-desc">{{ item.desc }}</p>
        <p class="list-item-bottom">
          <span class="price"><span class="icon">￥</span>{{ item.price }}</span>
          <span>{{ item.sales }}件已售</span>
          <span class="list-item-bottom-icon"></span>
        </p>
      </li>
    </ul>

    <!-- 底部 -->
    <v-footer />
  </v-sticky>
</template>

<script>
import { nav, kind } from '@/mock/kind'
export default {
  data() {
    return {
      navBarFixed: false,
      searchVal: '', // 搜索
      fixedNav: false,
      isFixed: false, // nav是否固定
      navIdx: 0, // 导航选中状态
      nav: [], // 导航栏
      page: 0,
      size: 20,
      allLoaded: false, // 是否加载完毕
      list: [] // 列表
    }
  },
  mounted() {
    this.kindNav()
  },
  methods: {
    handleScroll(val) {
      this.navBarFixed = val
    },
    // 选择导航栏
    changeNav(val) {
      this.navIdx = val
    },
    // nav
    kindNav() {
      nav().then(res => {
        const { code, data, msg } = res.data
        if (code === 10000) {
          this.nav = data.nav
        } else {
          this.$toast(msg)
        }
      }).catch(err => {
        console.log(err)
        this.$toast('哎呀，出错啦~~~')
      })
    },
    loadMore() {
      this.page++
      this.$indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.kindList()
    },
    // 列表
    kindList() {
      const params = {
        page: this.page,
        size: this.size
      }
      kind(params).then(res => {
        this.$indicator.close()
        const { code, data, msg } = res.data
        if (code === 10000) {
          const datas = data.data.list
          this.list = this.list.concat(datas)
        } else {
          this.$toast(msg)
        }
      }).catch(err => {
        console.log(err)
        this.$indicator.close()
        this.$toast('哎呀，出错啦~~~')
      })
    },
    // 搜索
    search(val) {
      console.log(val)
      document.activeElement.blur()
    },
    // 详情
    toDetail(id) {
      // this.$router.push(`/detail/${id}`)
      this.$router.push({
        name: 'detail', params: { id: id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    p{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 24px;
      margin-right: 20px;
      .icon {
        width: 40px;
        height: 40px;
        background: url('../../assets/imgs/icon/kind.png') no-repeat;
        background-size: cover;
      }
    }
    /deep/ .mint-search {
      height: 100%;
      border-radius: 6px;
      .mint-searchbar {
        background: #f0f0f0;
        padding: 0;
        z-index: 0;
        .mint-searchbar-inner {
          background: #f0f0f0;
          .mintui-search {
            font-size: 40px;
            margin-right: 20px;
          }
          .mint-searchbar-core {
            font-size: 30px;
          }
        }
        .mint-searchbar-cancel {
          margin: 0 10px 0 0;
        }
      }
    }
  }
  .sticky {
    width: 100%;
    height: 60px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    background: #fff;
    padding: 0 15px;
    box-sizing: border-box;
    p {
      display: inline-block;
      line-height: 60px;
      margin-right: 30px;
    }
    .navActive {
      color: #FB5C55;
      position: relative;
      &::before {
        content: '';
        width: 50px;
        border-bottom: 4px solid #FB5C55;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .list {
    width: 100%;
    padding: 15px;
    background: #f0f0f0;
    box-sizing: border-box;
    overflow: hidden;
    .list-item {
      float: left;
      width: 49%;
      border-radius: 10px;
      margin: 0 2% 15px 0;
      padding-bottom: 10px;
      background: #fff;
      &:nth-child(2n) {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 350px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-bottom: 10px;
      }
      .list-item-desc {
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 10px;
      }
      .list-item-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;
        font-size: 28px;
        .price {
          color: #FB5C55;
          .icon {
            font-size: 20px;
          }
        }
        .list-item-bottom-icon {
          width: 30px;
          height: 30px;
          background: url('../../assets/imgs/icon/cart.png') no-repeat;
          background-size: cover;
        }
      }
    }
  }
</style>

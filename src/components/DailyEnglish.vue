<template>
  <div class="dailyContain" v-show="!!englishContent">
    <p class="englishContent">{{englishContent}}</p>
    <p class="chineseContent">{{translation}}</p>
    <p class="dateContent">{{computedDate}}</p>
  </div>
</template>

<script>
import api from '../api.js'
import { get } from '../util.js'
import constants from '../constant.js'
export default {
  async mounted() {
    const res = await get(api.dailyEnglishUrl)
    this.englishContent = res.content
    this.translation = res.note
    this.date = res.dateline
  },
  data() {
    return {
      englishContent: '',
      translation: '',
      date: ''
    }
  },
  computed: {
    /* 格式化日期 xxx-xx-xx -> xx(英语简写).xx */
    computedDate() {
      if (this.date==='') return ''
      return constants.MONTH[Number(this.date.split('-')[1]) - 1] + '.' + this.date.split('-')[2]
    }
  }
}
</script>

<style lang="scss">
.dailyContain{
  margin-top: 100rpx;
  margin-left: 15rpx;
  margin-right: 15rpx;
  p.englishContent{
    font-size: 30rpx;
  }
  p.chineseContent{
    margin-top: 20rpx;
    font-size: 24rpx;
  }
  .dateContent{
    text-align: right;
    font-size: 24rpx;
  }
}
</style>

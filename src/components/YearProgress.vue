<template>
  <div class="progressBar">
    <progress :percent='percent' activeColor='#1e9cd6'/>
    <p class="percentText">{{year}}年已经过去了{{days}}天，{{percent}}%</p>
  </div>
</template>

<script>
export default {
  methods: {
    // 判断是不是闰年
    isLeapYear () {
      let year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if(year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    // 一年多少天
    getDayofYear () {
      return this.isLeapYear() ? 366 : 365
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
    days() {
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      let now = new Date()
      let offset = now.getTime() - start.getTime()
      return parseInt(offset/1000/60/60/24) + 1
    },
    percent() {
      return (this.days * 100/this.getDayofYear()).toFixed(1)
    }
  }
}
</script>

<style lang="scss">
.progressBar{
  width: 100%;
  text-align: center;
  progress{
    margin-top: 10rpx;
    margin-bottom: 10rpx;
  }
  .percentText{
    margin-top: 15rpx;
    font-size: 32rpx;
  }
}
</style>

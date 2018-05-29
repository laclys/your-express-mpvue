<template>
  <div class="dailyContain">
    <p class="englishContent">The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.</p>
    <p class="chineseContent">生命的意义不仅在于简单的存在与活着，而是去前行、进步、获取和征服</p>
    <p class="dateContent">{{computedData}}</p>
  </div>
</template>

<script>
import constants from '../constant.js'
export default {
  created() {
    console.log(constants.MONTH)
  },
  data() {
    return {
      data: '2018-1-29'
    }
  },
  computed: {
    computedData() {
      return constants.MONTH[Number(this.data.split('-')[1]) - 1] + '.' + this.data.split('-')[2]
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

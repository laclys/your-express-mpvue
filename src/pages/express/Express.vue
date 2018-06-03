<template>
  <div class="container">
    <section>
      <picker @change="pickerChange" :value="index" :range="companyList" range-key="name">
        <view class="picker">
          快递公司：{{companyList[index].name}}
        </view>
      </picker>
    </section>
    <p class="title">单号查起来~:</p>
    <input
      class="input"
      focus="true"
      type="number"
      v-model="nu"
    />
    <button class="btn sreach-btn" @click="handleSreach" >Sreach</button>
    <img class="screach-icon" src="../../../static/img/sreach.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      nu: '',
      index: 0,
      companyList: [
        {
          name: '顺丰',
          code: 'shunfeng'
        },
        {
          name: '百世',
          code: 'huitongkuaidi'
        },
        {
          name: '中通',
          code: 'zhongtong'
        },
        {
          name: '韵达',
          code: 'yunda'
        },
        {
          name: '申通',
          code: 'shentong'
        },
        {
          name: '京东',
          code: 'jd'
        },
      ]
    }
  },
  methods: {
    pickerChange (e) {
      console.log(e.target.value)
      this.index = e.target.value
    },
    handleSreach () {
      console.log('快递单号',this.nu)
      console.log('快递公司代号',this.companyList[this.index].code)
    }
  }
}
</script>

<style lang="scss">
  .container {
    margin: 100rpx 30rpx;
    .picker {
      margin-bottom: 10rpx;
      font-size: 36rpx;
      color: #1e9cd6;
    }
    .title{
      margin-bottom: 30rpx;
      font-size: 36rpx;
      color: #1e9cd6;
    }
    .input{
      padding: 15rpx;
      border: 1rpx solid #1e9cd6;
      border-radius: 10rpx;
      color: #1e9cd6
    }
    .sreach-btn{
      margin-top: 80rpx;
      width: 300rpx;
      border-radius: 10rpx;
    }
    .screach-icon{
      margin-top: 120rpx;
      margin-left: calc(50% - 120rpx);
      width: 322rpx;
      height: 276rpx;
    }
  }
</style>

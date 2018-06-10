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
      placeholder="这里输入运单号哦~"
      type="number"
      v-model="nu"
    />
    <i class="iconfont icon-file-copy express-icon" @click="handleCopy" />
    <i class="iconfont icon-scan express-icon" @click="handleScan" />
    <button class="btn sreach-btn" @click="handleSreach" >Sreach</button>
    <img class="screach-icon" src="../../../static/img/sreach.png" alt="">
  </div>
</template>

<script>
import constant from '../../constant.js'
export default {
  data() {
    return {
      nu: '',
      index: 0,
      companyList: constant.companyList
    }
  },
  methods: {
    pickerChange (e) {
      console.log(e.target.value)
      this.index = e.target.value
    },
    handleSreach () {
      console.log('快递单号', this.nu)
      console.log('快递公司代号', this.companyList[this.index].code)
      wx.navigateTo({
        url: `/pages/content/main?index=${this.index}&company=${this.companyList[this.index].code}&code=${this.nu}`
      })
    },
    handleCopy () {
      console.log('COPY')
      let data = this.nu
      wx.setClipboardData({
      data,
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            console.log(res.data)
            wx.showToast({
              title: '剪贴板复制成功',
              icon: 'success'
            })
          }
        })
      }
    })
    },
    handleScan () {
      console.log('SCAN')
      wx.scanCode({
        success: (res) => {
          console.log(res.result)
          if (res.result) {
            this.nu = res.result
          }
        }
      })
    }
  },
  mounted () {
    let self = this
    wx.getStorage({
      key: 'order',
      success: function(res) {
          console.log(res.data)
          console.log(res.data.index)
          self.nu = res.data.nu
          self.index = res.data.index
      } 
    })
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
      vertical-align:middle;
      display: inline-block;
      width: 230rpx;
      height: 36rpx;
      line-height: 36rpx;
      font-size: 36rpx;
      color: #1e9cd6;
      // background: red;
    }
    .input{
      vertical-align:middle;
      display: inline-block;
      width: 380rpx;
      height: 36rpx;
      padding-top: 5rpx;
      padding-bottom: 5rpx;
      padding-left: 10rpx;

      border: 1rpx solid #1e9cd6;
      border-radius: 10rpx;
      font-size: 32rpx;
      color: #1e9cd6;
    }
    .express-icon {
      position: relative;
      right: 75rpx;
      display: inline;
      color: #1e9cd6;
      z-index: 9;
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

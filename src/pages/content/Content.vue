<template>
  <scroll-view scroll-y style="height: 1000px;" class="container">
    <section v-if="hasResult">
        <div v-if="result.success">
          <p class="companyName">物流公司: {{result.company}}</p>
          <p class="nm">运单号: {{result.nu}}</p>
          <p class="result">查询结果~:</p>
          <div class="result-content" v-for="(item, index) in result.data" :key="index">
            <div class="timeline">{{item.time}}</div>
            <div class="localline">{{item.context}}</div>
          </div>
        </div>
        <div v-else>
          出错啦~
        </div>
    </section>
    <section class="finding" v-else>
      努力查询ing~
    </section>
  </scroll-view>
</template>

<script>
import api from '../../api.js'
import { get } from '../../util.js'
export default {
  name: 'content',
  data() {
    return {
      hasResult: false,
      result: null,
      company: '',
      code: '',
      pickerIndex: 0
    }
  },
  created () {
    console.log('created')
  },
  onLoad (options) {
    console.log('onLoad')
    console.log(options)
    this.company = options.company
    this.pickerIndex = options.index
    this.code = options.code
  },
  async mounted () {
    console.log('mounted')
    let url = api.expresshUrl.replace('codeNum', this.code).replace('companyName', this.company)
    let res = await get(url)
    console.log(res)
    this.hasResult = true
    this.result = res
    if (this.result.success) {
      this.storeNm()
    }
  },
  methods: {
    /*存储查询成功的订单号*/
    storeNm() {
      console.log(this.pickerIndex)
      let dataObj = {
        index: this.pickerIndex ? this.pickerIndex : 0,
        nu: this.result.nu ? this.result.nu : ''
      }
      console.log(dataObj)
      wx.setStorage({
        key:"order",
        data: dataObj
      })
    }
  }
}
</script>

<style lang="scss">
  .container {
    padding-top: 60rpx;
    .finding{
      margin-top: 300rpx;
      text-align: center;
      font-size: 40rpx;
      color: #1e9cd6;
    }
    .companyName, .nm, .result {
      font-size: 40rpx;
      color: #1e9cd6;
    }
    .result {
      margin-bottom: 20rpx;
    }
    .result-content {
      padding-left: 30rpx;
      padding-right: 30rpx;
      .timeline {
        padding-top: 15rpx;
        padding-bottom: 10rpx;
        line-height: 30rpx;
        font-size: 30rpx;
        color: rgb(109, 108, 108);
      }
      .localline {
        line-height: 50rpx;
        font-size: 30rpx;
        color: #1e9cd6;
      }
    }
  }
</style>

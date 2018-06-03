<template>
  <scroll-view scroll-y style="height: 800px;" class="container">
    <section v-if="hasResult">
        <div v-if="result.success">
          <p>物流公司: {{result.company}}</p>
          <p>运单号: {{result.nu}}</p>
          <p>result:</p>
          <div v-for="(item, index) in result.data" :key="index">
            <div>{{item.tiem}}</div>
            <div>{{item.context}}</div>
          </div>
        </div>
        <div v-else>
          出错啦~
        </div>
    </section>
    <section v-else>
      查询ing~
    </section>
  </scroll-view>
</template>

<script>
import api from '../../api.js'
import { get } from '../../util.js'
export default {
  data() {
    return {
      hasResult: false,
      result: null,
      company: '',
      code: ''
    }
  },
  created () {
    console.log('created')
  },
  onLoad (options) {
    console.log('onLoad')
    console.log(options)
    this.company = options.company
    this.code = options.code
  },
  async mounted () {
    console.log('mounted')
    let url = api.expresshUrl.replace('codeNum', this.code).replace('companyName', this.company)
    let res = await get(url)
    console.log(res)
    this.hasResult = true
    this.result = res
  }
}
</script>

<style lang="scss">

</style>

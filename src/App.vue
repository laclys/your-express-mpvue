<script>
import api from './api.js'
import {get} from './util.js'
export default {
  async created () {
    // wx.request({
    //   url: api.dailyEnglishUrl,
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    const res = await get(api.dailyEnglishUrl)
    console.log('started!')
  }
}
</script>

<style>

</style>

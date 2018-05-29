<script>
import api from './api.js'
import {get} from './util.js'
export default {
  async created () {
    console.log('started!')
  }
}
</script>

<style>
  .btn {
    color: white;
    background-color: rgba(30, 156, 214, 1);
    margin-bottom: 10rpx;
    padding-left: 15rpx;
    padding-right: 15rpx;
    border-radius: 5rpx;
    width: 100%;
  }
  .btn:active {
    background-color: rgba(30, 156, 214, 0.5);
  }
</style>

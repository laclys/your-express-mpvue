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
  /* 引入字体图标 */
  @font-face {
      font-family: 'iconfont';
      src: url(data:font/truetype;charset=utf-8;base64,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) format('truetype');
      font-weight: normal;
      font-style: normal;
  }
    .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-file-copy:before { content: "\e7bc"; }

  .icon-scan:before { content: "\e7d4"; }
  /* 引入字体图标 end */
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

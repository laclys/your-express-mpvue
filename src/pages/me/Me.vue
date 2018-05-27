<template>
  <div class="container">
    <div class="userInfo">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <button 
      open-type="getUserInfo"
      lang="zh_CN"
      class='btn login_btn'
      @getuserinfo="login"
    >
      点击登录
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {
          avatarUrl: '../../../static/img/unlogin.png',
          nickName: '未登录'
      }
    }
  },
  methods: {
    login (e) {
      const userInfo = e.mp.detail.userInfo
      wx.setStorageSync('userinfo',userInfo)
      this.userinfo = userInfo

    }
  }
}
</script>

<style lang='scss'>
  .container {
    padding: 0 30rpx;
  }
  .userInfo {
    margin-top: 100rpx;
    text-align: center;
    img {
      width: 150rpx;
      height: 150rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
  }
  button.login_btn{
    margin-top: 100rpx;
  }
</style>

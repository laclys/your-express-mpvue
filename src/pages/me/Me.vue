<template>
  <div class="container">
    <div class="userInfo">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress />
    <button
      v-show="!isLogin"
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
import YearProgress from '@/components/YearProgress'
export default {
  components: {
    YearProgress
  },
  data() {
    return {
      isLogin: false,
      userinfo: {
          avatarUrl: '../../../static/img/unlogin.png',
          nickName: '未登录'
      }
    }
  },
  created() {
    let user = wx.getStorageSync('userinfo')
    console.log(user)
    if (user) {
      this.userinfo = user
      this.isLogin = !this.isLogin
    }
  },
  methods: {
    login (e) {
      const userInfo = e.mp.detail.userInfo
      wx.setStorageSync('userinfo',userInfo)
      this.userinfo = userInfo
      this.isLogin = !this.isLogin
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

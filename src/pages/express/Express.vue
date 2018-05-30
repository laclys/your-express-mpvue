<template>
  <div class="container">
    <p class="title">单号查起来~:</p>
    <input
      class="input"
      focus="true"
      type="number"
    />
    <button class="btn sreach-btn" >Sreach</button>
    <img class="screach-icon" src="../../../static/img/sreach.png" alt="">
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .container {
    margin: 100rpx 30rpx;
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

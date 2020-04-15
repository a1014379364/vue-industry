<template>
  <div class="nav-bar">
    <div class="nav-bar-item left">
      <div>首页</div>
      <div>销售模块</div>
      <div>生产模块</div>
      <div>财务模块</div>
      <div>库存模块</div>
      <div>信息模块</div>
    </div>
    <div class="nav-bar-item right">
      <div>充值</div>
      <div>您好, <span style="color: rgb(86,103,251)">demo</span></div>
      <div>超级管理员</div>
      <div>退出登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    background-color: rgb(247,247,247);
    border: 1px solid rgb(222,222,222);
    text-align: center;

    position: relative;
  }

  .nav-bar .nav-bar-item{
    display: flex;
  }

  .nav-bar .nav-bar-item > div:hover{
    background-color: rgb(231,231,231);
  }

  .left{
    width: 30%;
  }
  .right{
    width: 20%;
    /*float: right;*/
    position: absolute;
    right: 0;
  }

  .left{
    padding-left: 35px;
  }

  .left > div,.right > div{
    flex: 1;
  }

  .right{
    float: right;
  }
</style>
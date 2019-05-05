<template>
  <section class="header-border">
    <div class="container">
      <div class="logo">
        <img class="nav-logo" src="//image4.suning.cn/uimg/cms/img/155540698836163295.png" alt>
      </div>
      <div class="header-title">
        <h2>我的购物车</h2>
        <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
      </div>
      <div class="user-box">
        <span class="user">
          <a href class="user-name">SkyFucker P</a>
        </span>
        <span class="sep">|</span>
        <a href class="ding">我的订单</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style>
.logo {
  width: 93px;
  margin-top: 26px;
  float: left;
}
.nav-logo {
  float: left;
  width: 62px;
  margin-top: 22px;
}
.header-title {
  height: 48px;
  float: left;
  margin-top: 26px;
}
h2 {
  float: left;
  line-height: 48px;
  margin-bottom: 0;
  font-size: 28px;
}
.header-title p {
  float: left;
  height: 20px;
  line-height: 20px;
  margin-top: 20px;
  margin-left: 15px;
  color: #757575;
  font-size: 12px;
}
.user-box {
  margin-top: 30px;
  line-height: 40px;
  position: relative;
  float: right;
  height: 40px;
}
.user {
  float: left;
  position: relative;
  /* width: 110px; */
  padding: 0;
  white-space: nowrap;
  font-size: 12px;
  color: #b0b0b0;
}
.user-name {
  display: inline-block;
  width: auto;
  max-width: 75px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: text-bottom;
  text-align: center;
}
.sep {
  margin: 0;
  float: left;
  line-height: 40px;
  font-size: 12px;
  color: #e0e0e0;
}
.ding {
  padding: 0 5px;
  float: left;
  color: #757575;
  line-height: 40px;
  font-size: 12px;
}
.header-border {
  font-size: 12px;
  overflow: hidden;
  border-bottom: 2px solid #ff6700;
  background: #fff;
}
</style>

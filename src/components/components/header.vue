<template>
  <section class="wrap">
    <div class="top-bar">
      <header class="container">
        <div class="info">
          <a href class="login">登录</a>
          <a href>注册</a>
        </div>
      </header>
    </div>
    <nav class="container nav-bar">
      <div class="nav-logo">
        <img class="nav-logo" src="//image4.suning.cn/uimg/cms/img/155540698836163295.png" alt>
      </div>
      <div class="nav-nav">
        <ul class="nav-list">
          <li class="list-item-first"></li>
          <li v-for="(item,index) in nav_list" :key="index" class="list-item">
            <a href class="link">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="nav-search">
        <form>
          <input type="text" class="search-text">
          <button class="search-btn"></button>
        </form>
      </div>
    </nav>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nav_list: [
        {
          title: '小米',
        }, {
          title: '红米',
        }, {
          title: '华为',
        }, {
          title: 'vivo',
        }, {
          title: '长虹',
        }, {
          title: '魅族',
        }, {
          title: '魅蓝',
        }, {
          title: '联系',
        }, {
          title: '小米',
        }, {
          title: '锤子',
        },
      ]
    }
  }

}
</script>
<style scoped>
@font-face {
  font-family: "fame"; /* project id 1146002 */
  src: url("//at.alicdn.com/t/font_1146002_hc6uctgrkt6.eot");
  src: url("//at.alicdn.com/t/font_1146002_hc6uctgrkt6.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1146002_hc6uctgrkt6.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1146002_hc6uctgrkt6.woff") format("woff"),
    url("//at.alicdn.com/t/font_1146002_hc6uctgrkt6.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1146002_hc6uctgrkt6.svg#iconfont") format("svg");
}
.wrap {
  border-bottom: 1px solid #eee;
}
.top-bar {
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}

.info {
  float: right;
  line-height: 40px;
  height: 40px;
}
a {
  padding: 0 5px;
  text-align: center;
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
  position: relative;
}
.login::after {
  content: "|";
  position: absolute;
  right: -3px;
  color: #424242;
}
.nav-bar {
  overflow: hidden;
}
.nav-logo {
  float: left;
  width: 62px;
  margin-top: 22px;
}
.nav-nav {
  float: left;
  width: 850px;
}
.nav-search {
  float: right;
  width: 296px;
  margin-top: 25px;
}
.nav-list {
  position: relative;
  z-index: 10;
  float: left;
  width: 820px;
  height: 88px;
  margin: 0;
  padding: 12px 0 0 30px;
  list-style-type: none;
  font-size: 16px;
  overflow: hidden;
}
.list-item-first {
  position: relative;
  float: left;
  width: 127px;
  padding-right: 15px;
  height: 100%;
}
.list-item {
  float: left;
  overflow: hidden;
}
.list-item .link {
  display: block;
  padding: 26px 10px 38px;
  color: #333;
}
form {
  position: relative;
}
.search-text {
  position: absolute;
  top: 0;
  right: 51px;
  z-index: 1;
  width: 223px;
  height: 48px;
  padding: 0 10px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  line-height: 48px;
  outline: 0;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.search-btn {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 52px;
  height: 50px;
  border: 1px solid #e0e0e0;
  font-size: 24px;
  line-height: 24px;
  background: #fff;
  color: #616161;
  outline: 0;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.search-btn::after {
  content: "\e611";
  font-family: "fame" !important;
  font-size: 20px;
}
</style>

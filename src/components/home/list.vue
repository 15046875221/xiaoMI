<template>
  <section>
    <ul class="container list">
      <li class="list-item" v-for="item in 20" :key="item">
        <div class="pic-box">
          <img class="pic" src="//i1.mifile.cn/a1/pms_1550642182.7527088!220x220.jpg" alt>
        </div>
        <p class="title">杀狗牌手机</p>
        <p class="desc">八星8钻880.你值得拥有</p>
        <p class="price">
          <span>1998</span>元
        </p>
      </li>
    </ul>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.list-item {
  position: relative;
  z-index: 1;
  width: 234px;
  margin-bottom: 14px;
  background: #fff;
  height: 260px;
  padding: 20px 0;
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pic-box {
  margin: 0 auto 18px;
}
.pic {
  width: 160px;
  height: 160px;
}
.title {
  margin: 0 10px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.desc {
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #b0b0b0;
}
.price {
  margin: 0 10px 10px;
  text-align: center;
  color: #ff6700;
}
</style>

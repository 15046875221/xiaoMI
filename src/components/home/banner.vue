<template>
  <section>
    <el-container class="container">
      <el-carousel indicator-position="outside" height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            class="banner-img"
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d17359ccd7dfed4c3c5ee4d5096a277e.jpg"
            alt
          >
        </el-carousel-item>
      </el-carousel>
    </el-container>
  </section>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleSelect() {
      console.log(11111)
    }
  }
}
</script>
<style scoped>
.container >>> .el-carousel {
  width: 100%;
}
.banner-img {
  height: 500px;
  width: 100%;
}
</style>


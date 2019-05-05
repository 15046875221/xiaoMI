<template>
  <section>
    <Header></Header>
    <Banner></Banner>
    <List></List>
    <Footer></Footer>
  </section>
</template>
<script>

import Header from '../components/components/header'
import Footer from '../components/components/footer'
import Banner from '../components/home/banner'
import List from '../components/home/list'
export default {
  components: {
    Header,
    Footer,
    Banner,
    List
  }
}
</script>
<style>
</style>


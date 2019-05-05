<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
  color: #b0b0b0;
}
ul,
li,
p {
  padding: 0;
  margin: 0;
}
b,
strong,
h1,
h2,
h3,
h4,
h5 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
</style>

<template>
  <section>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="商品名称"></el-table-column>
      <el-table-column prop="name" label="单价"></el-table-column>
      <el-table-column prop="address" label="数量"></el-table-column>
      <el-table-column prop="address" label="小计"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          data: 123,
          name: 321,
          address: 987
        }
      ]
    }
  }
}
</script>
<style>
</style>

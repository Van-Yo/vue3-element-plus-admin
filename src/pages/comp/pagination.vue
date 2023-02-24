<template lang="">
  <div>
    <el-table :data="tableData.list">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
  <div>
    <Pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :total="total"
      @get-data="getData"
    />
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { api } from '@/api'
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)
const tableData = reactive({
  list: []
})
onMounted(() => {
  getData()
})

const getData = async (data) => {
  const [e, r] = await api.getTableList(data)
  if (!e && r) {
    // console.log(r)
    tableData.list = r.tableList
  } else {
    return false
  }
}
</script>
<style lang="scss">

</style>

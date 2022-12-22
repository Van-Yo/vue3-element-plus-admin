<template lang="">
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
import { ref } from 'vue'
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)
const getData = (data) => {
  console.log(data)
}
</script>
<style lang="scss">

</style>

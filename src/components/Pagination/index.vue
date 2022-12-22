<template lang="">
  <div class="pagination-container">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :total="props.total"
      :layout="layout"
      :page-sizes="props.pageSizes"
      :background="background"
      :small="small"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  // 总条目数
  total: {
    required: true,
    type: Number
  },
  // 当前页数
  currentPage: {
    type: Number,
    default: 1
  },
  // 每页显示条目个数
  pageSize: {
    type: Number,
    default: 10
  },
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30]
  },
  layout: {
    type: String,
    default: 'sizes,prev, pager, next, jumper, total'
  },
  background: {
    type: Boolean,
    default: true
  },
  small: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:currentPage', 'update:pageSize', 'getData'])

const currentPage = computed({
  get () {
    return props.currentPage
  },
  set (val) {
    emit('update:currentPage', val)
  }
})
const pageSize = computed({
  get () {
    return props.pageSize
  },
  set (val) {
    emit('update:pageSize', val)
  }
})

const handleCurrentChange = (val) => {
  emit('getData', { page: val, pageSize: pageSize.value })
}
const handleSizeChange = (val) => {
  emit('update:currentPage', 1)
  emit('getData', { page: 1, pageSize: val })
}
</script>

<style lang="scss" scoped>

</style>

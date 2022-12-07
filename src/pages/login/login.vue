<template lang="">
    <div>
        <el-button type="primary">login</el-button>
        <el-input v-model="input1" placeholder="Please input" />
    </div>
</template>
<script setup>
import { ref } from 'vue'
const input1 = ref('')
</script>
<style lang="">
    
</style>
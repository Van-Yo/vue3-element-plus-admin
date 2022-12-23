# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Dev Environment
node : v16.15.0

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build:prod
```

### Axios
```js
const login = async () => {
  const [e, r] = await api.getUserInfo()
  if (!e && r) {
    // success
  }else{
    // error
  }
}
```

### Pagination
```js
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
```

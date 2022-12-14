module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: [2, 'never'], // 禁止尾部使用分号“ ; ”
    'no-var': 'error', // 禁止使用 var
    indent: ['error', 2], // 缩进2格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    quotes: [2, 'single'], // 使用单引号
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    'vue/singleline-html-element-content-newline': 'off', // 不强制换行
    'vue/multi-word-component-names': 'off', // 不校验组件命名的不规范
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 5 },
      multiline: { max: 5 }
    }], // vue template模板元素第一行最多5个属性
    'vue/no-multiple-template-root': 'off' // 不强行要求在template下设置根div
    // 其它的规则可以去eslint查看，根据自己需要进行添加
  }
}

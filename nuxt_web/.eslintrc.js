module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    // vue 属性顺序
    'vue/attributes-order': 'off',
    // 是否能使用debugger,开发可以，线上不可以
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    // switch必须提供 default
    'default-case': 'error',
    // 禁止一成不变的循环,防止代码出现死循环
    'no-unmodified-loop-condition': 'error',
    // 禁止在变量未声明之前使用
    'no-use-before-define': 'error',
    // 代码后不使用分号
    semi: ['error', 'never'],
    // 注释 // 或 /* 之后必须有一个空格
    'spaced-comment': ['error', 'always'],
    // 禁止重复导入模块，对于同一模块内内容，应一次导入
    'no-duplicate-imports': 'error',
    // 必须使用let 或 const, 不能使用var
    'no-var': 'error',
    // js中应使用单引号替代双引号
    quotes: ['error', 'single'],
    // 要求大括号内必须有空格
    'object-curly-spacing': ['error', 'always'],
    // 数组前后不需要添加空格
    'array-bracket-spacing': ['error', 'never'],
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // 代码中可出现console
    'no-console': 'off',
    // template 内必须使用 ===
    'vue/eqeqeq': 'error',
    // 允许使用v-html
    'vue/no-v-html': 0,
    // 禁用隐式的eval() 比如 setTimeout('alert();', 100)
    'no-implied-eval': 'error',
  },
}

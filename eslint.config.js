import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        Component: true,
        ComponentPublicInstance: true,
        ComputedRef: true,
        EffectScope: true,
        ExtractDefaultPropTypes: true,
        ExtractPropTypes: true,
        ExtractPublicPropTypes: true,
        InjectionKey: true,
        PropType: true,
        Ref: true,
        VNode: true,
        WritableComputedRef: true,
        apiUrl: true,
        axios: true,
        computed: true,
        createApp: true,
        customRef: true,
        defineAsyncComponent: true,
        defineComponent: true,
        effectScope: true,
        getCurrentInstance: true,
        getCurrentScope: true,
        h: true,
        inject: true,
        isProxy: true,
        isReactive: true,
        isReadonly: true,
        isRef: true,
        markRaw: true,
        nextTick: true,
        onActivated: true,
        onBeforeMount: true,
        onBeforeRouteLeave: true,
        onBeforeRouteUpdate: true,
        onBeforeUnmount: true,
        onBeforeUpdate: true,
        onDeactivated: true,
        onErrorCaptured: true,
        onMounted: true,
        onRenderTracked: true,
        onRenderTriggered: true,
        onScopeDispose: true,
        onServerPrefetch: true,
        onUnmounted: true,
        onUpdated: true,
        provide: true,
        reactive: true,
        readonly: true,
        ref: true,
        resolveComponent: true,
        shallowReactive: true,
        shallowReadonly: true,
        shallowRef: true,
        statusCode: true,
        toRaw: true,
        toRef: true,
        toRefs: true,
        toValue: true,
        triggerRef: true,
        unref: true,
        useAttrs: true,
        useCssModule: true,
        useCssVars: true,
        useLink: true,
        useRoute: true,
        useRouter: true,
        useSlots: true,
        watch: true,
        watchEffect: true,
        watchPostEffect: true,
        watchSyncEffect: true,
        process: true
      },
      parserOptions: {
        parser: '@typescript-eslint/parser' // 需要手动安装这个插件
      }
    }
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'quotes': ['error', 'single'], // 字符串必须是单引号
      'semi': ['error', 'always', { omitLastInOneLineBlock: true }], // 必须使用分号
      'no-duplicate-imports': 'error', // 禁止重复导入
      'no-unreachable-loop': 'error', // 不允许循环体只允许一次迭代
      'no-use-before-define': 'error', // 禁止定义变量前使用
      'camelcase': 'error', // 强制驼峰命名
      'complexity': ['error', 10], // 限制圈复杂度
      'curly': 'error', // 对所有控制语句强制执行一致的大括号样式
      'default-case': 'error', // 要求 switch 语句中有 default 分支
      'default-case-last': 'error', // 强制 default 分支出现在最后
      'default-param-last': 'error', // 强制在函数的参数默认值出现在最后
      'dot-notation': 'error', // 强制尽可能地使用点号
      'eqeqeq': 'error', // 要求使用 === 和 !==
      'func-name-matching': 'error', // 要求函数名与赋值给它们的变量名或属性名相匹配
      'init-declarations': 'error', // 要求或禁止 var 声明中的初始化
      'max-depth': ['error', 3], // 强制可嵌套的块的最大深度
      'no-alert': 'error', // 禁用 alert、confirm 和 prompt
      'no-caller': 'error', // 禁用 arguments.caller 或 arguments.callee
      'no-eval': 'error', // 禁用 eval()
      'no-floating-decimal': 'error', // 禁止数字字面量中使用前导和末尾小数点
      'no-implied-eval': 'error', // 禁止使用类似 eval() 的方法
      'no-nested-ternary': 'error', // 禁用嵌套的三元表达式
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-unused-vars': 'off', // 可以出现未使用过的函数参数变量
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁用 console
      'prefer-const': ['error', { destructuring: 'all' }], // 要求使用 const 声明那些声明后不再被修改的变量
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }], // 禁止出现多行空行
      'no-extra-parens': 'error', // 禁止不必要的括号
      'object-curly-spacing': ['error', 'always'], // 强制在花括号中使用一致的空格
      'no-param-reassign': ['error', { props: true }], // 禁止对 function 的参数进行重新赋值
      '@typescript-eslint/no-explicit-any': ['off'], // 可以使用 any
      'vue/multi-word-component-names': ['off'], // 可以使用多个单词的组件名
      'vue/no-setup-props-destructure': ['off'], // 可以使用 props 解构
      'prefer-spread': 'off'// 可以使用apply
    }
  }
];

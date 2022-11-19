module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: false,
    },
  },
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/multi-word-component-names': 0,
  },
};

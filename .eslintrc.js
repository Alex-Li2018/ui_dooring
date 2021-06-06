module.exports = {
    root: true,
    "parser": "vue-eslint-parser",
    parserOptions: {
      "parser": "babel-eslint",
      "ecmaVersion": 2017,
      "sourceType": "module"
    },
    plugins:[
      "vue"
    ],
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb-base',
      'eslint:recommended',
      'plugin:vue/recommended', 
      'plugin:vue/strongly-recommended'
    ],
    settings: {
      'import/resolver': {
        alias: {
            map: [
                ['@', './src']
            ],
            extensions: ['.vue', '.js', '.json']
        }
      }
    },
    'globals': {
        'require': true,
        "__NODE_ENV__": true,
        "__TABBAR_CONF__": true,
        "AMap": true
    },
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'only-multiline'],
        'padded-blocks': 0,
        'one-var': 0,
        'no-return-assign': 0,
        'indent': ['error', 4],
        // 禁止无用表达式 关闭
        'no-unused-expressions': 0,
        'no-param-reassign': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': 0,
        'no-useless-call': 0,
        'vue/max-len': 0,
        'max-len': 0,
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1
        }],
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        /*===================【关闭一些规则】================*/
        "vue/prop-name-casing": 0,
        /* 关闭属性链接符校验 (uni-app中使用会报错) */
        'vue/attribute-hyphenation':0
    },
    'overrides': [
      {
        'files': ['*.vue'],
        'rules': {
          'indent': 'off'
        }
      }
    ]
  };
  
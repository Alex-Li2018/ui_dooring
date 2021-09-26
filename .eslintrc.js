module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2019,
        // ECMAScript modules 模式
        sourceType: 'module',
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
            jsx: true,
        },
        // 即使没有 babelrc 配置文件，也使用 @babel/eslint-parser 来解析
        requireConfigFile: false,
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false,
    },
    // 要在配置文件里指定环境，使用 env 关键字指定你想启用的环境，并设置它们为 true
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    // 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀
    plugins: [
        'vue'
    ],
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:vue/strongly-recommended'
    ],
    // 配置文件添加共享设置
    settings: {
        webpack: {
            config: 'node_modules/@vue/cli-service/webpack.config.js'
        },
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.vue', '.js', '.json']
            }
        }
    },
    globals: {
        require: true,
        __NODE_ENV__: true
    },
    // add your custom rules here
    rules: {
        // 风格指南
        // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        'array-bracket-spacing': [2, 'never'],
        'linebreak-style': [0, 'error', 'unix'],
        // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
        // if while function 后面的{必须与if在同一行，java风格。
        indent: ['error', 4],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'only-multiline'],
        'padded-blocks': 0,
        'one-var': 0,
        'no-return-assign': 0,
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
            baseIndent: 1
        }],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        /*= ==================【关闭一些规则】================ */
        'vue/prop-name-casing': 0,
        /* 关闭属性链接符校验 (uni-app中使用会报错) */
        'vue/attribute-hyphenation': 0
    },
    // 特定类型的文件指定处理
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
};

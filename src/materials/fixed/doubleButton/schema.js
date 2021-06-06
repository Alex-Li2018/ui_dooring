export default {
    config:{
        backgroundColorLeft: '#0AC599',
        fontSizeLeft: 16,
        colorLeft: '#fff',
        fontWeightLeft: 500,
        textLeft: '左边按钮',
        schemaUrlLeft: '',

        backgroundColorRight: '#1478FF',
        fontSizeRight: 16,
        colorRight: '#fff',
        fontWeightRight: 500,
        textRight: '右边按钮',
        schemaUrlRight: ''
    },
    editorData:[
        // 背景色
        {
            type: 'ColorPicker',
            field: 'backgroundColorLeft',
            title: '背景色左',
            value: '#0AC599',
            emit: ['change'],
            emitPrefix: 'bg-left'
        },
        {
            type: 'ColorPicker',
            field: 'backgroundColorRight',
            title: '背景色右',
            value: '#1478FF',
            emit: ['change'],
            emitPrefix: 'bg-right'
        },
        // 字体
        {
            type: "InputNumber",
            field: "fontSizeLeft",
            title: "字体左",
            value: 16,
            emit: ['change'],
            emitPrefix: 'fs-left'
        },
        {
            type: "InputNumber",
            field: "fontSizeRight",
            title: "字体右",
            value: 16,
            emit: ['change'],
            emitPrefix: 'fs-right'
        },
        // 字体颜色
        {
            type: 'ColorPicker',
            field: 'colorLeft',
            title: '颜色左',
            value: '#fff',
            emit: ['change'],
            emitPrefix: 'fc-left'
        },
        {
            type: 'ColorPicker',
            field: 'colorRight',
            title: '颜色右',
            value: '#fff',
            emit: ['change'],
            emitPrefix: 'fc-right'
        },
        // 字体粗细
        {
            type: 'InputNumber',
            field: 'fontWeightLeft',
            title: '字重左',
            value: 500,
            emit: ['change'],
            emitPrefix: 'fw-left'
        },
        {
            type: 'InputNumber',
            field: 'fontWeightRight',
            title: '字重右',
            value: 500,
            emit: ['change'],
            emitPrefix: 'fw-right'
        },
        // 按钮文案
        {
            type: 'Input',
            field: 'textLeft',
            title: '文案左',
            value: '一个按钮',
            emit: ['change'],
            emitPrefix: 'text-left'
        },
        {
            type: 'Input',
            field: 'textRight',
            title: '文案右',
            value: '一个按钮',
            emit: ['change'],
            emitPrefix: 'text-right'
        },
        // 交互
        {
            type: 'Input',
            field: 'schemaUrlLeft',
            title: '交互左',
            value: '',
            emit: ['change'],
            emitPrefix: 'schema-url-left'
        },
        {
            type: 'Input',
            field: 'schemaUrlRight',
            title: '交互右',
            value: '',
            emit: ['change'],
            emitPrefix: 'schema-url-right'
        }
    ]
};
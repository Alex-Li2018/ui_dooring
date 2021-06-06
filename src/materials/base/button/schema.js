export default {
    config:{
        backgroundColor: '#1478FF',
        width: 190,
        height: 42,
        lineHeight: 42,
        fontSize: 16,
        color: '#fff',
        fontWeight: 500,
        text: '一个按钮',
        schemaUrl: ''
    },
    editorData:[
        {
            type: 'ColorPicker',
            field: 'backgroundColor',
            title: '背景色',
            value: '#1478FF',
            emit: ['change'],
            emitPrefix: 'bg'
        },
        {
            type: 'InputNumber',
            field: 'width',
            title: '宽度',
            value: 190,
            emit: ['change'],
            emitPrefix: 'width'
        },
        {
            type: 'InputNumber',
            field: 'height',
            title: '长度',
            value: 42,
            emit: ['change'],
            emitPrefix: 'height'
        },
        {
            type: 'InputNumber',
            field: 'lineHeight',
            title: '行高',
            value: 42,
            emit: ['change'],
            emitPrefix: 'line-height'
        },
        {
            type: "InputNumber",
            field: "fontSize",
            title: "字体",
            value: 16,
            emit: ['change'],
            emitPrefix: 'fs'
        },
        {
            type: 'ColorPicker',
            field: 'color',
            title: '字体颜色',
            value: '#fff',
            emit: ['change'],
            emitPrefix: 'fc'
        },
        {
            type: 'InputNumber',
            field: 'fontWeight',
            title: '字体重量',
            value: 500,
            emit: ['change'],
            emitPrefix: 'fw'
        },
        {
            type: 'Input',
            field: 'text',
            title: '按钮文案',
            value: '一个按钮',
            emit: ['change'],
            emitPrefix: 'text'
        },
        {
            type: 'Input',
            field: 'schemaUrl',
            title: '交互',
            value: '',
            emit: ['change'],
            emitPrefix: 'schemaUrl'
        }
    ]
};
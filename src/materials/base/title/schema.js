export default {
    config: {
        lineHeight: 30,
        fontSize: 22,
        color: '#303133',
        fontWeight: 500,
        text: '我是一段标题哈哈哈哈哈哈',
        textAlign: 'center',
        schemaUrl: ''
    },
    editorData: [
        {
            type: 'InputNumber',
            field: 'lineHeight',
            title: '行高',
            value: 30,
            emit: ['change'],
            emitPrefix: 'lineHeight'
        },
        {
            type: 'InputNumber',
            field: 'fontSize',
            title: '字体',
            value: 22,
            emit: ['change'],
            emitPrefix: 'fs'
        },
        {
            type: 'ColorPicker',
            field: 'color',
            title: '字体颜色',
            value: '#303133',
            emit: ['change'],
            emitPrefix: 'fc'
        },
        {
            type: 'InputNumber',
            field: 'fontWeight',
            title: '字体粗细',
            value: 500,
            emit: ['change'],
            emitPrefix: 'fw'
        },
        {
            type: 'Input',
            field: 'text',
            title: '按钮文案',
            value: '我是一段标题哈哈哈哈哈哈',
            emit: ['change'],
            emitPrefix: 'text'
        },
        {
            type: 'Select',
            field: 'textAlign',
            title: '对齐方式',
            value: 'center',
            options: [
                { value: 'center', label: '居中对齐', disabled: false },
                { value: 'left', label: '左对齐', disabled: false },
                { value: 'right', label: '右对齐', disabled: false },
            ],
            emit: ['change'],
            emitPrefix: 'text-align'
        },
        {
            type: 'Input',
            field: 'schemaUrl',
            title: '交互',
            value: '',
            emit: ['change'],
            emitPrefix: 'schema-url'
        }
    ]
};

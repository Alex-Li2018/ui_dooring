export default {
    config: {
        backgroundColor: '#fff',
        height: 40,
    },
    editorData: [
        {
            type: 'ColorPicker',
            field: 'backgroundColor',
            title: '背景色',
            value: '#fff',
            emit: ['change'],
            emitPrefix: 'bg'
        },
        {
            type: 'InputNumber',
            field: 'height',
            title: '长度',
            value: 40,
            emit: ['change'],
            emitPrefix: 'height'
        }
    ]
};

export default {
    config:{
        backgroundColor: '#BFC2CC',
        text: '提示文本最多提示文本最多提15字'
    },
    editorData:[
        {
            type: 'ColorPicker',
            field: 'backgroundColor',
            title: '背景颜色',
            value: '#BFC2CC',
            emit: ['change'],
            emitPrefix: 'bg'
        },
        {
            type: 'Input',
            field: 'text',
            title: '分割文案',
            value: '提示文本最多提示文本最多提15字',
            emit: ['change'],
            emitPrefix: 'text'
        }
    ]
};
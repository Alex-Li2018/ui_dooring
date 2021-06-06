export default {
    config:{
        backgroundColor: '#BFC2CC'
    },
    editorData:[
        {
            type: 'ColorPicker',
            field: 'backgroundColor',
            title: '背景颜色',
            value: '#BFC2CC',
            emit: ['change'],
            emitPrefix: 'bg'
        }
    ]
};
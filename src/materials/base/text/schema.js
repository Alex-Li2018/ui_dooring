export default {
    config: {
        content: '<p>我是富文本,请输入内容</p>'
    },
    editorData: [
        {
            type: 'richEditor',
            field: 'content',
            title: '',
            value: '',
            emit: ['change'],
            emitPrefix: 'rich-editor'
        }
    ]
};

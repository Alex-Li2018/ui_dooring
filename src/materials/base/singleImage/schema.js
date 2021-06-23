export default {
    config:{
        src: 'http://imgcdnstatic.top/image_1624454703071',
        schemaUrl: ''
    },
    editorData:[
        {
            type: 'ImgUpload',
            field: 'src',
            title: '图片地址',
            value: 'http://imgcdnstatic.top/image_1624454703071',
            emit: ['change'],
            emitPrefix: 'src'
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
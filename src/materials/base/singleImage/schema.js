export default {
    config:{
        src: 'https://imgcdn.huanjutang.com/image/2021/05/12/3fb92167b17eede336ebe415ea772ea0.png',
        schemaUrl: ''
    },
    editorData:[
        {
            type: 'ImgUpload',
            field: 'src',
            title: '图片地址',
            value: 'https://imgcdn.huanjutang.com/image/2021/05/12/3fb92167b17eede336ebe415ea772ea0.png',
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
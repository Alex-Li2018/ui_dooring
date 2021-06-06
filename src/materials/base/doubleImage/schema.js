export default {
    config:{
        srcLeft: 'https://imgcdn.huanjutang.com/image/2021/05/13/3ee1277da10dc513b19730349fd7cb89.png',
        schemaUrlLeft: '',
        srcRight: 'https://imgcdn.huanjutang.com/image/2021/05/13/3ee1277da10dc513b19730349fd7cb89.png',
        schemaUrlRight: ''
    },
    editorData:[
        {
            type: 'ImgUpload',
            field: 'srcLeft',
            title: '左侧图片',
            value: 'https://imgcdn.huanjutang.com/image/2021/05/12/3fb92167b17eede336ebe415ea772ea0.png',
            emit: ['change'],
            emitPrefix: 'src-left'
        },
        {
            type: 'Input',
            field: 'schemaUrlLeft',
            title: '交互',
            value: '',
            emit: ['change'],
            emitPrefix: 'schema-url-left'
        },
        {
            type: 'ImgUpload',
            field: 'srcRight',
            title: '右侧图片',
            value: 'https://imgcdn.huanjutang.com/image/2021/05/12/3fb92167b17eede336ebe415ea772ea0.png',
            emit: ['change'],
            emitPrefix: 'src-right'
        },
        {
            type: 'Input',
            field: 'schemaUrlRight',
            title: '交互',
            value: '',
            emit: ['change'],
            emitPrefix: 'schema-url-right'
        }
    ]
};
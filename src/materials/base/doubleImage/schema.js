export default {
    config:{
        srcLeft: 'http://imgcdnstatic.top/image_1624455482931',
        schemaUrlLeft: '',
        srcRight: 'http://imgcdnstatic.top/image_1624455627345',
        schemaUrlRight: ''
    },
    editorData:[
        {
            type: 'ImgUpload',
            field: 'srcLeft',
            title: '左侧图片',
            value: 'http://imgcdnstatic.top/image_1624455482931',
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
            value: 'http://imgcdnstatic.top/image_1624455627345',
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
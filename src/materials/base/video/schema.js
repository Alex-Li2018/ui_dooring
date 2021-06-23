export default {
    config:{
        src: 'http://imgcdnstatic.top/image_1624456710477',
        poster: 'http://imgcdnstatic.top/image_1624456628188'
    },
    editorData:[
        {
            type: 'videoUpload',
            field: 'src',
            title: '视频地址',
            value: 'http://imgcdnstatic.top/image_1624456710477',
            emit: ['change'],
            emitPrefix: 'video-src'
        },
        {
            type: 'ImgUpload',
            field: 'poster',
            title: '封面图',
            value: 'http://imgcdnstatic.top/image_1624456628188',
            emit: ['change'],
            emitPrefix: 'poster'
        }
    ]
};
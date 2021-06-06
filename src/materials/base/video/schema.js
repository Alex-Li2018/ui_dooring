export default {
    config:{
        src: 'https://imgcdn.huanjutang.com/video/2020/12/01/039f99814de75ef8713dfe84621c91d5.mp4',
        poster: 'https://imgcdn.huanjutang.com/video/2020/12/01/039f99814de75ef8713dfe84621c91d5.mp4?vframe/jpg/offset/1&imageView2/2/w/500/format/jpg/interlace/1/q/100|imageslim'
    },
    editorData:[
        {
            type: 'videoUpload',
            field: 'src',
            title: '视频地址',
            value: 'https://imgcdn.huanjutang.com/video/2020/12/01/039f99814de75ef8713dfe84621c91d5.mp4',
            emit: ['change'],
            emitPrefix: 'video-src'
        },
        {
            type: 'ImgUpload',
            field: 'poster',
            title: '封面图',
            value: 'https://imgcdn.huanjutang.com/video/2020/12/01/039f99814de75ef8713dfe84621c91d5.mp4?vframe/jpg/offset/1&imageView2/2/w/500/format/jpg/interlace/1/q/100|imageslim',
            emit: ['change'],
            emitPrefix: 'poster'
        }
    ]
};
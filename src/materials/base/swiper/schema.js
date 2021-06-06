export default {
    config:{
        items: [
            {
                id: 1,
                src: 'https://imgcdn.huanjutang.com/image/2021/05/12/3fb92167b17eede336ebe415ea772ea0.png',
                schemaUrl: '' 
            },
            {
                id: 2,
                src: 'https://imgcdn.huanjutang.com/image/2021/05/13/8e701812a0e19b238fa7abbc7102f022.png',
                schemaUrl: ''
            },
            {
                id: 3,
                src: 'https://imgcdn.huanjutang.com/image/2021/05/13/b7b7ea92a1b04778416a69868431c280.png',
                schemaUrl: ''
            }
        ],
    },
    editorData:[
        {
            type: 'SwiperUpload',
            field: 'items',
            title: '',
            value: [
                {
                    id: 1,
                    src: 'https://imgcdn.huanjutang.com/image/2021/05/12/3fb92167b17eede336ebe415ea772ea0.png',
                    schemaUrl: '' 
                },
                {
                    id: 2,
                    src: 'https://imgcdn.huanjutang.com/image/2021/05/13/8e701812a0e19b238fa7abbc7102f022.png',
                    schemaUrl: ''
                }
            ],
            emit: ['change'],
            emitPrefix: 'swiper'
        }
    ]
};
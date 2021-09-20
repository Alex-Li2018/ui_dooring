export default {
    config: {
        items: [
            {
                id: 1,
                src: 'http://imgcdnstatic.top/image_1624456129895',
                schemaUrl: ''
            },
            {
                id: 2,
                src: 'http://imgcdnstatic.top/image_1624456161258',
                schemaUrl: ''
            },
            {
                id: 3,
                src: 'http://imgcdnstatic.top/image_1624456212269',
                schemaUrl: ''
            }
        ],
    },
    editorData: [
        {
            type: 'SwiperUpload',
            field: 'items',
            title: '',
            value: [
                {
                    id: 1,
                    src: 'http://imgcdnstatic.top/image_1624456129895',
                    schemaUrl: ''
                },
                {
                    id: 2,
                    src: 'http://imgcdnstatic.top/image_1624456161258',
                    schemaUrl: ''
                },
                {
                    id: 3,
                    src: 'http://imgcdnstatic.top/image_1624456212269',
                    schemaUrl: ''
                }
            ],
            emit: ['change'],
            emitPrefix: 'swiper'
        }
    ]
};

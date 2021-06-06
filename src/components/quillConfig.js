import axios from 'axios';
import { Message } from 'element-ui';
import { secretHeaders } from '@/util/util';

const actionURL = process.env.VUE_APP_UPLOAD_API;

// 上传之前的类型校验
function beforeUpload(files) {
    // 限制上传的代码格式与大小
    const fileSize = files.size;
    const size = fileSize / 1024;

    if (size > 50000) {
        Message({
            showClose: true,
            message: '附件不能大于50M',
            type: 'error'
        });
        return false;
    }

    // 限制上传的文件格式
    const { name } = files;
    const fileName = name.substring(name.lastIndexOf('.') + 1).toLowerCase();
    if (fileName != 'jpg'
        && fileName != 'jpeg'
        && fileName != 'pdf'
        && fileName != 'png'
        && fileName != 'dwg'
        && fileName != 'gif') {
        Message({
            showClose: true,
            message: '请选择图片格式文件上传(mp3,avi,wav等)！',
            type: 'error'
        });
        return false;
    }
    return true;
}

// 上传服务器
async function xhrUpload(files, quillRef) {
    // 创建form对象,将文件内容添加到form对象中
    const param = new FormData();
    // 通过append向form对象添加数据
    param.append('file', files, files.name);

    const header = { 'Content-Type': 'multipart/form-data', ...secretHeaders };

    const res = await axios.request({
        url: actionURL,
        method: 'post',
        data: param,
        headers: header
    });

    const length = quillRef.quill.getSelection(true).index;
    // 这里很重要，你图片上传成功后，img的src需要在这里添加，res.path就是你服务器返回的图片链接。
    quillRef.quill.insertEmbed(length, 'image', res.data.data.url);
    quillRef.quill.setSelection(length + 1);
}

// toolbar工具栏的工具选项（默认展示全部）
const toolOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean'],
    ['link', 'image', 'video']
];

const handlers = {
    image: function image() {
        const self = this;

        let fileInput = this.container.querySelector('input.ql-image[type=file]');
        if (fileInput === null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.classList.add('ql-image');
            // 监听选择文件
            fileInput.addEventListener('change', async (ev) => {
                // 获取到文件
                const files = ev.target.files[0];
                if (!files) return;
                // 上传
                const before = beforeUpload(files);
                if (!before) return;
                await xhrUpload(files, self);
                fileInput.value = '';
            });
        }
        fileInput.click();
    }
};

export default {
    placeholder: '',
    theme: 'snow', // 主题
    modules: {
        toolbar: {
            container: toolOptions, // 工具栏选项
            handlers // 事件重写
        }
    }
};

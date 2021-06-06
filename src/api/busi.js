import { get, put, post, deleteReq } from '@/util/http';

const pageList = params => get('/pages', params);
// 获取详情
const getPageDetail = id => get(`/pages/${id}`);
// 新增
const createPage = params => post('/pages', params);
// 更新
const updatePage = (id, params) => put(`/pages/${id}`, params);
// 删除
const delPage = id => deleteReq(`/pages/${id}`);

export default {
    pageList,
    getPageDetail,
    createPage,
    updatePage,
    delPage
};
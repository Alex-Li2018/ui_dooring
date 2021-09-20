import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
import { getToken } from '@/util/cookie';
import router from '@/router';
// eslint-disable-next-line import/no-cycle
import store from '../../store';

import {
    SUCCESS,
    ERROR_TOKEN_INVALID,
    ERROR_TOKEN_EMPTY,
    ERROR_STATUS
} from './code';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 60000,
    retry: 3,
    retryDely: 500
});

instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${getToken()}`;

        return config;
    },
    (error) => {
        Message({
            message: '网络错误,请稍后再试',
            type: 'error',
            duration: 5 * 1000
        });

        return Promise.reject(error);
    }
);

/**
 * 成功回调函数
 * @param response
 * @return {Promise<any>}
 */
function onFulfilled(response) {
    const res = response.data;

    // 2XX以内的都是成功的标记
    const code = /^2\d{2}$/g;
    if (!code.test(response.status)) {
        return Promise.reject(
            new Error(`网络请求失败，code${response.status}`)
        );
    }

    switch (res.code) {
    case ERROR_TOKEN_EMPTY:
    case ERROR_TOKEN_INVALID:
        MessageBox.confirm('登录已失效，请重新登录', '温馨提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            store.dispatch('setting/resetToken').then(() => {
                router.replace({
                    path: '/login'
                });
            });
        });
        return Promise.reject(new Error(`登陆已失效，code${res.code}`));
    case ERROR_STATUS:
        return Message({
            message: res.msg,
            type: 'error',
            duration: 5 * 1000
        });
    default:
        if (res.code !== SUCCESS) {
            Message({
                message: res.msg,
                type: 'error',
                duration: 5 * 1000
            });
            return Promise.reject(res);
        }
    }

    return Promise.resolve(res);
}

export function axiosReqest(
    method,
    url,
    params = {},
    isFormData = false,
    header = {},
    timeout
) {
    method = method || 'GET';

    const reqOpts = {
        url,
        method,
        header,
        params: {},
        data: {}
    };
    timeout && (reqOpts.timeout = timeout);
    switch (method.toUpperCase()) {
    case 'GET':
        reqOpts.params = { time: Date.now(), ...params };
        break;
    case 'PUT':
    case 'DELETE':
        reqOpts.data = params;
        break;
    case 'POST':
    case 'PATCH':
        reqOpts.data = isFormData
            ? params
            : ({ ...params });
        break;
    default:
        break;
    }

    return instance(reqOpts)
        .then(response => onFulfilled(response))
        .catch(err => Promise.reject(err));
}

export const get = (url, params = {}, headers = {}, timeout) => {
    if (timeout) {
        return axiosReqest('GET', url, params, false, headers, timeout);
    }
    return axiosReqest('GET', url, params, headers);

};

export const post = (
    url,
    data = {},
    isFormData = false,
    headers = {},
    timeout
) => axiosReqest('POST', url, data, isFormData, headers, timeout);

export const put = (url, params = {}, isFormData = false, headers = {}) => axiosReqest('PUT', url, params, isFormData, headers);

export const deleteReq = (url, data = {}, isFormData = false, headers = {}, toString = true) => {
    // 拼接url变为url/${data}
    toString && (url = `${url}/${Object.values(data).toString()}`);
    return axiosReqest('DELETE', url, data, isFormData, headers);
};

export const patch = (url, params = {}, isFormData = false, headers = {}) => axiosReqest('PATCH', url, params, isFormData, headers);

export default {
    get,
    post,
    put,
    patch,
    deleteReq,
    request: instance
};

import { post, get } from '@/util/http';

const register = params => post('/register', params);
// 获取详情
const login = params => post(`/login`, params);
const logout = () => get(`/login`);

export default {
    register,
    login,
    logout
};
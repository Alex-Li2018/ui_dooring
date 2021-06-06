// eslint-disable-next-line import/no-cycle
import userApi from '@/api/user';
import { removeToken, setToken } from '@/util/cookie'; 
import cache from '@/util/cache';

const state = {
    cityId: 510100,
    userInfo: {}
};

const mutations = {
    SET_CITY_ID: (st, city) => {
        st.cityId = city;
    },
    SET_USER_INFO: (st, info) => {
        st.userInfo = info;
        cache.set('userInfo', info);
    }
};

const actions = {
    resetToken() {
        return new Promise((resolve, reject) => {
            try {
                removeToken();
                resolve();
            } catch(err) {
                reject(err);
            }
        });
    },
    login({ commit }, form) {
        return new Promise((resolve, reject) => {
            userApi.login(form).then(res => {
                if (res.code === 200) {
                    setToken(res.data.token);
                    commit('SET_USER_INFO', res.data);
                }
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    },
    logout() {
        return new Promise((resolve, reject) => {
            userApi.logout.then(() => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};

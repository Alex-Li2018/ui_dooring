import Cookies from 'js-cookie';

const TOKEN_KEY = process.env.NODE_ENV === 'production' ? 'production_1ac4824f700ce88566c1ff053d843b64' : 'dev_1ac4824f700ce88566c1ff053d843b64';

export function getToken() {
    return Cookies.get(TOKEN_KEY);
}

export function setToken(token) {
    return Cookies.set(TOKEN_KEY, token, { expires: 1 });
}

export function removeToken() {
    return Cookies.remove(TOKEN_KEY);
}

// eslint-disable-next-line max-classes-per-file
const PREFIX = 'cache_';

class Store {
    constructor(device) {
        this.store = device;
    }

    get(key) {
        return JSON.parse(this.store.get(`${PREFIX}${key}`));
    }

    set(key, value) {
        return this.store.set(`${PREFIX}${key}`, JSON.stringify(value));
    }

    remove(key) {
        return this.store.remove(key);
    }

    clear() {
        return this.store.clear();
    }
}

class LocalStorage {
    constructor() {
        this.store = window.localStorage;
    }

    get(key) {
        return this.store.getItem(key);
    }

    set(key, value) {
        return this.store.setItem(key, value);
    }

    remove(key) {
        return this.store.removeItem(key);
    }

    clear() {
        return this.store.clear();
    }
}

const cache = new Store(new LocalStorage());

export default cache;

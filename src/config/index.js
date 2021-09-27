const env = process.env.NODE_ENV;
const VERSION = process.env.RELEASE_VERSION;

// 通用配置
const common = {
    VERSION,
};

// 测试环境
const development = {

};

// 生产环境
const production = {

};

const envConfig = env === 'development' ? development : production;

export default {
    ...common,
    ...envConfig
};

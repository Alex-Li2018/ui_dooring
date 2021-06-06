const state = {
    ishowDrawer: false,
    uniqueKey: null,
    form: {},
    editorData: {},
    uiLayout: [],
    fixedLayout: [],
    pageData: {
        setting: {
            page_name: '',
            page_desc: '',
            page_backgroundColor: '#fff',
            page_backgroundImage: ''
        },
        material: [],
        fixed_material: []
    }
};

const mutations = {
    SET_SHOW_DRAWER: (st, ishowDrawer) => {
        st.ishowDrawer = ishowDrawer;
    },
    SET_FORM: (st, form) => {
        st.form = form;
    },
    SET_UNIQUEKEY: (st, key) => {
        st.uniqueKey = key;
    },
    SET_EDITOR_DATA: (st, data) => {
        st.editorData = data;
    },
    SET_UI_LAYOUT: (st, layout) => {
        st.uiLayout = layout;

        // 这里的material是存入数据库的值
        st.pageData.material = layout.map(item => ({
            h: item.h,
            i: item.i,
            name: item.name,
            name_ch: item.name_ch,
            w: item.w,
            x: item.x,
            y: item.y,
            config: item.comProps
        }));
    },
    SET_FIXED_LAYOUT: (st, layout) => {
        st.fixedLayout = layout;

        // 这里的fixed_material是存入数据库的值
        st.pageData.fixed_material = layout.map(item => ({
            h: item.h,
            i: item.i,
            name: item.name,
            name_ch: item.name_ch,
            w: item.w,
            x: item.x,
            y: item.y,
            config: item.comProps
        }));
    },
    SET_PAGE_DATA: (st, data) => {
        st.pageData.setting = data;
    }
};

const actions = {
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};

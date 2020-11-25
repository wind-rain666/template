export default {
  state: {
    layout: false, //是否启用页面布局
    navMenuCollapse: false //左侧导航菜单栏是否折叠
  },
  mutations: {
    SET_LAYOUT: (state, layout) => {
      state.layout = layout;
    },
    SET_NAV_MENU_COLLAPSE: (state, isCollapse) => {
      state.navMenuCollapse = isCollapse;
    }
  },
  actions: {
    setLayout({ commit }, layout) {
      commit('SET_LAYOUT', layout);
    },
    setNavMenuCollapse({ commit }, isCollapse) {
      commit('SET_NAV_MENU_COLLAPSE', isCollapse);
    }
  }
};

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      nprogress: 'NProgress',
      screenfull: 'screenfull',
      moment: 'moment',
      uuid: 'uuid'
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  chainWebpack: config => {
    // svg rule loader
    const svgRule = config.module.rule('svg'); // 找到svg-loader
    svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
    svgRule.exclude.add(/iconfont/); // 正则匹配排除iconfont目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images');
    imagesRule.exclude.add(resolve('src/assets/svg'));
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  }
};

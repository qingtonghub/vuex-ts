/*
 * @Description: vue配置文件
 * @Author: QingTong
 * @Date: 2019-01-31 11:55:02
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-15 12:53:41
 */
const express = require('express')
const path = require('path');
const SVG_ICON_PATH = 'src/assets/svg-icons';  // 增加svgIcon图标目录
// const history = require('connect-history-api-fallback');

const app = express();
app.use(require('connect-history-api-fallback')());
module.exports = {
  css: {
    modules: false,
  },
  devServer: {
    port: 8081,
    proxy: {
      '/': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        ws: false,
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/)
      .exclude
        .add(path.resolve(__dirname, SVG_ICON_PATH))
        .end()

        // 替换 svg 的处理
    const svgRule = config.module.rule('svg')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      .test(/\.(svg)(\?.*)?$/)
      .include
        .add(path.resolve(__dirname, SVG_ICON_PATH))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
        .use('svgo-loader')
        .loader('svgo-loader')
        .options({
          plugins: [
            {removeTitle: true},
            {convertColors: {shorthex: false}},
            {convertPathData: false}
          ]
        })
  },
}
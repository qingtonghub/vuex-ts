/*
 * @Description: vue配置文件
 * @Author: QingTong
 * @Date: 2019-01-31 11:55:02
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-02-02 11:46:02
 */

module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      '/': {
        target: 'http://localhost:3001/',
        // changeOrigin: true,
        ws: false,
      }
    }
  }
}
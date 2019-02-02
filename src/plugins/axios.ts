/*
 * @Description: Axios二次封装(增加默认配置、请求拦截和响应拦截)
 * @Author: QingTong
 * @Date: 2019-02-01 17:59:07
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-02-02 10:54:46
 */

import axios from 'axios';

const Axios = axios.create({
  // `headers` 是即将被发送的自定义请求头
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=utf-8',
  },
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true, // 默认的
});

// 添加请求拦截器
Axios.interceptors.request.use((config: any) => {
  // 根据环境设置baseURL
  if (process.env.NODE_ENV === 'production') {
    // config.baseURL = 'http://front-end.testuoko.com:3000/mock/16/';
  } else if (process.env.NODE_ENV === 'test') {
    // config.baseURL = 'http://front-end.testuoko.com:3000/mock/16/';
  } else if (process.env.NODE_ENV === 'development') {
    // config.baseURL = 'http://localhost:3001/';
    // config.baseURL = 'https://api.github.com/';
  }
  return config;
}, (error: any) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use((response: any) => {
  // 对响应数据做点什么
  return response;
}, (error: any) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default Axios;


/**
 * axios二次封装
 */

import axios from 'axios'
import  config from './../config'
import {ElMessage} from "element-plus";
import router from "../router/index.js";
const ReLogin = '登录信息过期，请重新登录'
const NETWORK_ERROR = '网络异常'
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000
})
//请求拦截
service.interceptors.request.use((req)=>{
    const  headers = req.headers
    if (!headers.Authorization) headers.Authorization = 'x-token'
    return req;
})
//响应拦截
service.interceptors.response.use((res)=>{
    const {code,data,msg} = res.data;
    if (code === 200){
        return data;
    }else if (code === 4001){//登录过期
        ElMessage.error(ReLogin)
        setTimeout(()=>{
            router.push('/login')
        },15000)

        return Promise.reject(ReLogin)
    }else{
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

function request(options){
    options.method = options.method || 'get'

    if (options.method.toLowerCase() === 'get'){
        options.params = options.data;
    }
    if (config.env === 'prod'){
        service.defaults.baseURL = config.baseApi
    }else{
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
    }
    return service(options)
}

['get','post','put','delete','patch'].forEach((item)=>{
    request[item] = (url,data,options)=>{
        return request({
            url,data,method:item,...options
        })
    }
})
export default request;
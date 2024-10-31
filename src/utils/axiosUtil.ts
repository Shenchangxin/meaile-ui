import conf from '@/config'
import axios, {AxiosInstance,AxiosRequestConfig,AxiosResponse,AxiosPromise} from "axios"
import {ElMessage} from "element-plus";

const SERVER_ERR = '请求服务器网址错误或网络连接失败'
interface AxiosRequestConfig_ extends AxiosRequestConfig{
    isMock: boolean
}
type Method='get'|'post'|'put'|'delete'|'patch'
type ReqFn = (url:string,isMock:boolean,data?:any) => AxiosPromise<any>
const methods:Method[] = ['get','post','put','delete','patch']
interface ReqExecute{
    get:ReqFn
    post:ReqFn
    put:ReqFn
    delete:ReqFn
    patch:ReqFn
}
class AxiosUtil {
    static axiosUtil: AxiosUtil = new AxiosUtil()
    axiosInstance!: AxiosInstance
    request!: ReqExecute

    constructor() {
        this.request={
            'get':():any=>{},
            'post':():any=>{},
            'put':():any=>{},
            'delete':():any=>{},
            'patch':():any=>{},
        }
        this.createAxiosInstance();
        this.beforeReqIntercept();
        this.beforeResponseIntercept();
        this.reqPrepare();
    }
    createAxiosInstance(){
        this.axiosInstance = axios.create({timeout:15000})
    }

    //请求开始之前进行拦截
    beforeReqIntercept(){
        this.axiosInstance.interceptors.request.use((request) =>{
            return request
        })
    }
    //数据响应之前的响应拦截器
    beforeResponseIntercept(){
        this.axiosInstance.interceptors.response.use((response) => {
            const {data,msg,code} = response.data
            if (code === 200){
                return response.data
            }else if (code === 500){
                ElMessage.error(`错误信息：${msg}`)
                return
            }else {
                ElMessage.error('未知错误')
            }
        },(err) => {
            ElMessage.error(`${SERVER_ERR}`)
        })
    }
    //发送请求给服务器
    sendRequest(options: AxiosRequestConfig_){
        if (conf.env === 'production'){
            this.axiosInstance.defaults.baseURL = conf.baseApi

        }else if (conf.env === 'development'){
            const isMock: boolean = options.isMock || conf.isMock
            this.axiosInstance.defaults.baseURL = isMock ? conf.mockBaseApi : conf.baseApi
        }
        return this.axiosInstance(options)
    }

    //深入灵活应用TS完成请求method类型自动提示
    reqPrepare(){
        return methods.forEach(method => {
            this.request[method] = (url,isMock,data) => {
                return this.sendRequest({
                    url,
                    isMock,
                    data,
                })
            }
        })
    }

}

export default AxiosUtil.axiosUtil.request




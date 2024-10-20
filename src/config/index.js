/**
 * 环境变量封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev:{
        baseApi:'//127.0.0.1/8080/v1',
        mockApi:'',
    },
    test:{
        baseApi:'',
        mockApi:'',
    },
    prod:{
        baseApi:'',
        mockApi:'',
    },

}
export default {
    env,
    mock:true,
    ...EnvConfig[env]
}
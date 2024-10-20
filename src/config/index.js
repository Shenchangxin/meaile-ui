/**
 * 环境变量封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev:{
        baseApi:'http://127.0.0.1:8088/v1',
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
    namespace: 'meaile-ui',
    ...EnvConfig[env]
}
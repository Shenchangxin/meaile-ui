import type { Module } from 'vuex'
import  type  {State}  from '@/store'
export  interface UserState{
    username:string,
    id:number,
    nickname: string,
}
export const store: Module<UserState, State> = {
    namespaced: true,
    state: (): UserState => ({
        nickname: "",
        username: "",
        id: 1
    }),
    mutations: {
        changeLang(state: UserState, lang: string) {
            state.username = lang
        },
    },
}

// let state:UserState = {
//     username:'shencx',
//     id:121
// };
// //<UsersState,State>//参数1是为了访问当前模块下的state的变量  参数2是引入的主模块下的
// //不知道类型注解几个参数看上图
// let getters:GetterTree<UserState,State> = {
//     // dobulecount:state=>state.age*2
//     // 或者
//     dobulecount(state){
//         return state.id*2
//     }
// };
// let mutations:MutationTree<UserState> = {
//     change(state){
//         console.log(state.id)
//     }
// };
// let actions:ActionTree<UserState,State> = {};
// export default {
//     namespace: true,//开始模块命名空间
//     state,
//     getters,
//     mutations,
//     actions,
// };
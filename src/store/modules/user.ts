import type { Module } from 'vuex'
import  type  {State}  from '@/store'
import UserApi from "@/api/UserApi.ts";
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
    getters: {
        //users
        getUserInfo(state){
            return state
        }
    },
    mutations: {
        setUserInfo(state,userInfo:UserState){
            state.users = userInfo
        }
    },
    actions: {
        //users
        async getUserInfo({commit}) {
            const result = await UserApi.getUserInfo()
            commit('setUserInfo',result.data)
            console.log(result.data)
        }
    },
}
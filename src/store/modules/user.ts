
import UserApi from "@/api/UserApi.ts";
import {defineStore} from "pinia";
export  interface UserState{
    username:string,
    id:number,
    nickname: string,
}

export const userStore = defineStore('userStore',{
    state: (): UserState => ({
        username:"",
        id:1,
        nickname: "",
    }),
    getters:{
        getUserInfo(state){
            return state
        }
    },
    actions: {
        //users
        async getUserInfo() {
            const result = await UserApi.getUserInfo()
            this.$state = result.data
            console.log(result.data)
        }
    }

})
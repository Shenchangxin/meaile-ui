import UserApi from "@/api/UserApi.ts";
import {defineStore} from "pinia";
import goodStorage from "good-storage"
export  interface User{
    username:string,
    id:number,
    nickname: string,
}

export  interface LoginForm{
    username:string,
    password:string,
}
export  interface Claims{
    token:string,
    Id:number,
    username:string,
    nickname:string,
}

export const userStore = defineStore('userStore',{
    state: ()=> {
        return {
            user: {} as User,
            claims: {} as Claims,
        }
    },
    getters:{
        getUserInfo(state){
            return state.user
        }
    },
    actions: {
        storeClaims(claims:Claims){
          goodStorage.set('claims',claims)
          this.claims = claims
        },
        //users
        async getUserInfoActions() {
            const result = await UserApi.getUserInfo()
            this.user = result.data
            console.log(result.data)
        },

        async login(loginForm:LoginForm) {
            const result = await UserApi.login(loginForm)
            console.log(result.data)
            this.claims = result.data
            this.storeClaims(result.data)

        }
    }

})